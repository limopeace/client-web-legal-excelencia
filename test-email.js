require('dotenv').config();
const FormData = require("form-data");
const Mailgun = require("mailgun.js");

async function sendTestEmail() {
  const mailgun = new Mailgun(FormData);
  const mg = mailgun.client({
    username: "api",
    key: process.env.MAILGUN_SENDING_API_KEY,
  });

  try {
    console.log('Sending test email with SENDING API KEY...');
    console.log('Using domain:', process.env.MAILGUN_DOMAIN);
    console.log('API Key (first 10 chars):', process.env.MAILGUN_SENDING_API_KEY?.substring(0, 10) + '...');

    const data = await mg.messages.create(process.env.MAILGUN_DOMAIN, {
      from: "Mailgun Sandbox <postmaster@sandbox18ccd7cb1d6a47bd82302a691169d727.mailgun.org>",
      to: ["Vishal sharma <legalexcelencia@gmail.com>"],
      subject: "Hello Vishal sharma - Test from Legal Excelencia",
      text: "Congratulations Vishal sharma, you just sent an email with Mailgun! You are truly awesome!",
      html: `
        <html>
          <body>
            <h2>Hello Vishal Sharma!</h2>
            <p>Congratulations! You just sent an email with Mailgun using the Sending API Key.</p>
            <p><strong>Status:</strong> ✅ You are truly awesome!</p>
            <p><em>Sent at: ${new Date().toLocaleString()}</em></p>
          </body>
        </html>
      `,
    });

    console.log('✅ Email sent successfully!');
    console.log('Response:', data);
  } catch (error) {
    console.error('❌ Error sending email:');
    console.error(error);
  }
}

sendTestEmail();
