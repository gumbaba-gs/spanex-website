const { SESClient, SendEmailCommand } = require("@aws-sdk/client-ses");

const ses = new SESClient({ region: "ap-southeast-2" });

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST,OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

const escapeHtml = (str = "") =>
  String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

exports.handler = async (event) => {
  if (event.requestContext?.http?.method === "OPTIONS" || event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers: CORS_HEADERS, body: "" };
  }

  try {
    const body = typeof event.body === "string" ? JSON.parse(event.body) : event.body || {};
    const { name, email, company, interest, message } = body;

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        headers: CORS_HEADERS,
        body: JSON.stringify({ error: "Missing required fields: name, email, message" }),
      };
    }

    const interestLabel = interest || "General Inquiry";
    const subject = `Spanex Website Inquiry: ${interestLabel}`;

    const textBody = `New inquiry from spanex.com.au

Name: ${name}
Email: ${email}
Company: ${company || "N/A"}
Interested In: ${interestLabel}

Message:
${message}`;

    const htmlBody = `<h2>New inquiry from spanex.com.au</h2>
<table cellpadding="6" style="font-family:Arial,sans-serif;border-collapse:collapse;">
  <tr><td><strong>Name:</strong></td><td>${escapeHtml(name)}</td></tr>
  <tr><td><strong>Email:</strong></td><td>${escapeHtml(email)}</td></tr>
  <tr><td><strong>Company:</strong></td><td>${escapeHtml(company || "N/A")}</td></tr>
  <tr><td><strong>Interested In:</strong></td><td>${escapeHtml(interestLabel)}</td></tr>
</table>
<h3>Message</h3>
<p style="white-space:pre-wrap;font-family:Arial,sans-serif;">${escapeHtml(message)}</p>`;

    const internalCommand = new SendEmailCommand({
      Source: "Spanex Website <info@spanex.com.au>",
      Destination: { ToAddresses: ["info@spanex.com.au"] },
      ReplyToAddresses: [email],
      Message: {
        Subject: { Data: subject, Charset: "UTF-8" },
        Body: {
          Text: { Data: textBody, Charset: "UTF-8" },
          Html: { Data: htmlBody, Charset: "UTF-8" },
        },
      },
    });

    await ses.send(internalCommand);

    // Auto-reply confirmation to the user
    const autoReplySubject = "Thank you for contacting Spanex Sciences";
    const autoReplyText = `Hi ${name},

Thank you for reaching out to Spanex Sciences. We've received your inquiry and our team will get back to you within 1-2 business days.

For your records, here's a copy of your message:

Interested In: ${interestLabel}

${message}

If your matter is urgent, please reply to this email.

Best regards,
The Spanex Sciences Team
info@spanex.com.au
spanex.com.au`;

    const autoReplyHtml = `<div style="font-family:Arial,sans-serif;color:#1a1a1a;line-height:1.6;max-width:600px;">
  <h2 style="color:#0a5c36;">Thank you for contacting Spanex Sciences</h2>
  <p>Hi ${escapeHtml(name)},</p>
  <p>Thank you for reaching out to Spanex Sciences. We've received your inquiry and our team will get back to you within <strong>1-2 business days</strong>.</p>
  <p>For your records, here's a copy of your message:</p>
  <table cellpadding="6" style="border-collapse:collapse;background:#f7f7f7;border-radius:6px;width:100%;">
    <tr><td><strong>Interested In:</strong></td><td>${escapeHtml(interestLabel)}</td></tr>
    <tr><td colspan="2"><strong>Message:</strong><br/><span style="white-space:pre-wrap;">${escapeHtml(message)}</span></td></tr>
  </table>
  <p>If your matter is urgent, please reply to this email.</p>
  <p>Best regards,<br/><strong>The Spanex Sciences Team</strong><br/>
  <a href="mailto:info@spanex.com.au">info@spanex.com.au</a><br/>
  <a href="https://spanex.com.au">spanex.com.au</a></p>
</div>`;

    try {
      const autoReplyCommand = new SendEmailCommand({
        Source: "Spanex Sciences <info@spanex.com.au>",
        Destination: { ToAddresses: [email] },
        ReplyToAddresses: ["info@spanex.com.au"],
        Message: {
          Subject: { Data: autoReplySubject, Charset: "UTF-8" },
          Body: {
            Text: { Data: autoReplyText, Charset: "UTF-8" },
            Html: { Data: autoReplyHtml, Charset: "UTF-8" },
          },
        },
      });
      await ses.send(autoReplyCommand);
    } catch (autoReplyErr) {
      // Don't fail the whole request if auto-reply fails (e.g. SES sandbox restriction)
      console.error("Auto-reply failed (non-fatal):", autoReplyErr.message);
    }

    return {
      statusCode: 200,
      headers: CORS_HEADERS,
      body: JSON.stringify({ success: true, message: "Message sent successfully" }),
    };
  } catch (err) {
    console.error("Error sending email:", err);
    return {
      statusCode: 500,
      headers: CORS_HEADERS,
      body: JSON.stringify({ error: "Failed to send message", details: err.message }),
    };
  }
};
