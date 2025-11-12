import FormData from "form-data";
import Mailgun from "mailgun.js";
import type { NextApiRequest, NextApiResponse } from "next";

const API_KEY = process.env.MAILGUN_SENDING_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";

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
