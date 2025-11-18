import FormData from "form-data";
import Mailgun from "mailgun.js";
import type { NextApiRequest, NextApiResponse } from "next";

const API_KEY = process.env.MAILGUN_SENDING_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";

// Simple in-memory rate limiting
// Map to store IP addresses and their request timestamps
const rateLimitMap = new Map<string, number[]>();

// Rate limit configuration
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS_PER_WINDOW = 3; // Max 3 emails per hour per IP

function getRateLimitKey(req: NextApiRequest): string {
  // Try to get real IP from various headers (for proxied requests)
  const forwarded = req.headers['x-forwarded-for'];
  const realIp = req.headers['x-real-ip'];

  if (typeof forwarded === 'string') {
    return forwarded.split(',')[0].trim();
  }
  if (typeof realIp === 'string') {
    return realIp;
  }
  // Fallback to socket IP
  return req.socket.remoteAddress || 'unknown';
}

function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];

  // Filter out timestamps outside the current window
  const recentTimestamps = timestamps.filter(
    timestamp => now - timestamp < RATE_LIMIT_WINDOW_MS
  );

  // Check if rate limit exceeded
  if (recentTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return { allowed: false, remaining: 0 };
  }

  // Add current timestamp and update map
  recentTimestamps.push(now);
  rateLimitMap.set(ip, recentTimestamps);

  // Clean up old entries periodically (simple cleanup)
  if (rateLimitMap.size > 1000) {
    // Remove entries older than the window
    const entries = Array.from(rateLimitMap.entries());
    for (const [key, times] of entries) {
      const validTimes = times.filter(t => now - t < RATE_LIMIT_WINDOW_MS);
      if (validTimes.length === 0) {
        rateLimitMap.delete(key);
      } else {
        rateLimitMap.set(key, validTimes);
      }
    }
  }

  return {
    allowed: true,
    remaining: MAX_REQUESTS_PER_WINDOW - recentTimestamps.length
  };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({
      submitted: false,
      success: false,
      error: "Method not allowed. Please use POST.",
    });
  }

  // Rate limiting check
  const clientIp = getRateLimitKey(req);
  const { allowed, remaining } = checkRateLimit(clientIp);

  if (!allowed) {
    console.warn(`Rate limit exceeded for IP: ${clientIp}`);
    return res.status(429).json({
      submitted: false,
      success: false,
      error: "Too many requests. Please try again later (max 3 per hour).",
    });
  }

  // Set rate limit headers
  res.setHeader('X-RateLimit-Limit', MAX_REQUESTS_PER_WINDOW.toString());
  res.setHeader('X-RateLimit-Remaining', remaining.toString());

  // Validate environment variables
  if (!API_KEY || !DOMAIN) {
    console.error("Missing Mailgun configuration");
    return res.status(500).json({
      submitted: false,
      success: false,
      error: "Email service is not configured properly. Please contact support.",
    });
  }

  const { name, email, message } = req.body;

  // Validate request body
  if (!name || !email || !message) {
    return res.status(400).json({
      submitted: false,
      success: false,
      error: "Please provide name, email, and message.",
    });
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      submitted: false,
      success: false,
      error: "Please provide a valid email address.",
    });
  }

  console.log("Processing contact form submission:", { name, email });

  try {
    const mailgun = new Mailgun(FormData);
    const client = mailgun.client({ username: "api", key: API_KEY });

    const messageData = {
      from: `Legal Excelencia <postmaster@${DOMAIN}>`,
      "h:Reply-To": email,
      to: "legalexcelencia@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <html>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
              <h2 style="color: #dc2626; border-bottom: 2px solid #dc2626; padding-bottom: 10px;">
                New Contact Form Submission
              </h2>
              <div style="background-color: white; padding: 20px; border-radius: 5px; margin-top: 20px;">
                <p><strong style="color: #555;">Name:</strong> ${name}</p>
                <p><strong style="color: #555;">Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p><strong style="color: #555;">Message:</strong></p>
                <div style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #dc2626; margin-top: 10px;">
                  ${message.replace(/\n/g, '<br>')}
                </div>
              </div>
              <p style="color: #888; font-size: 12px; margin-top: 20px;">
                Sent from Legal Excelencia contact form at ${new Date().toLocaleString()}
              </p>
            </div>
          </body>
        </html>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}

Message:
${message}

Sent at: ${new Date().toLocaleString()}
      `,
    };

    const emailRes = await client.messages.create(DOMAIN, messageData);
    console.log("Email sent successfully:", emailRes.id);

    res.status(200).json({
      submitted: true,
      success: true,
      message: "Thank you for contacting us! We'll get back to you soon.",
    });
  } catch (err: any) {
    console.error("Error sending email:", err);

    // Provide more specific error messages based on error type
    let errorMessage = "Failed to send email. Please try again later.";

    if (err.status === 401) {
      errorMessage = "Email service authentication failed. Please contact support.";
      console.error("Mailgun API key is invalid");
    } else if (err.status === 403) {
      errorMessage = "Email service access denied. Please contact support.";
      console.error("Mailgun authorization failed");
    } else if (err.message?.includes("network") || err.code === "ENOTFOUND") {
      errorMessage = "Network error. Please check your connection and try again.";
    }

    res.status(500).json({
      submitted: false,
      success: false,
      error: errorMessage,
    });
  }
}
