import nodemailer from 'nodemailer';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(str = '') {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}


export default async function handler(req, res) {
  
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  try {
    const { name, email, subject, message, company } = req.body || {};

    // Honeypot: real users never fill this hidden field.
    if (company) {
      return res.status(200).json({ ok: true });
    }

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email and message are required.' });
    }
    if (!EMAIL_RE.test(email)) {
      return res.status(400).json({ error: 'Please enter a valid email address.' });
    }
    if (message.length > 5000) {
      return res.status(400).json({ error: 'Message is too long.' });
    }

    const GMAIL_USER = process.env.GMAIL_USER;
    const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;
    const RECEIVER = process.env.CONTACT_RECEIVER || GMAIL_USER;
    const SITE_NAME = process.env.SITE_OWNER_NAME || 'Kaushal Bhanderi';

    if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
      console.error('Missing GMAIL_USER / GMAIL_APP_PASSWORD env vars.');
      return res.status(500).json({ error: 'Mail server is not configured yet.' });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD },
    });

    const safeName = escapeHtml(name);
    const safeSubject = escapeHtml(subject || 'New portfolio message');
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br/>');

    // 1) Notify site owner
    await transporter.sendMail({
      from: `"Portfolio Contact" <${GMAIL_USER}>`,
      to: RECEIVER,
      replyTo: email,
      subject: `[Portfolio] ${subject || 'New message'} — from ${name}`,
      html: `
        <div style="font-family:Inter,Arial,sans-serif;max-width:560px;margin:0 auto;">
          <h2 style="color:#111;">New message from your portfolio</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${safeSubject}</p>
          <p style="margin-top:16px;"><strong>Message:</strong></p>
          <p style="background:#f4f4f7;padding:16px;border-radius:8px;line-height:1.6;">${safeMessage}</p>
        </div>
      `,
    });

    // 2) Auto-reply to the visitor
    await transporter.sendMail({
      from: `"${SITE_NAME}" <${GMAIL_USER}>`,
      to: email,
      subject: `Thanks for reaching out, ${name}!`,
      html: `
        <div style="font-family:Inter,Arial,sans-serif;max-width:560px;margin:0 auto;color:#1a1a1f;">
          <h2 style="margin-bottom:4px;">Thanks for the message, ${safeName.split(' ')[0]} 👋</h2>
          <p style="line-height:1.6;">
            This is a quick confirmation that your message reached me. I read every message personally
            and I'll get back to you as soon as I can — usually within a couple of days.
          </p>
          <p style="line-height:1.6;">Here's a copy of what you sent:</p>
          <blockquote style="border-left:3px solid #22D3EE;padding-left:14px;color:#57575F;line-height:1.6;">
            ${safeMessage}
          </blockquote>
          <p style="line-height:1.6;">Talk soon,<br/>${SITE_NAME}</p>
        </div>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Contact form error:', err);
    return res.status(500).json({ error: 'Failed to send your message. Please try again in a bit.' });
  }
}
