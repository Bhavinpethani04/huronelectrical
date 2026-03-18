import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const resend = new Resend(process.env.RESEND_API_KEY);

const SERVICE_LABELS: Record<string, string> = {
  residential: 'Residential Electrical',
  commercial: 'Commercial Electrical',
  industrial: 'Industrial Electrical',
  'ev-charging': 'EV Charger Installation',
  lighting: 'Lighting Installation',
  emergency: '24/7 Emergency Service',
  other: 'Other / Not Sure',
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, service, message } = req.body ?? {};

  // Basic server-side validation
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({ error: 'Missing required fields.' });
  }

  const serviceLabel = SERVICE_LABELS[service] ?? service ?? 'Not specified';

  try {
    await resend.emails.send({
      from: 'Huron Electrical <onboarding@resend.dev>',
      to: ['info@huronelectrical.ca'],
      replyTo: email,
      subject: `New Quote Request from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:auto;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;">
          <div style="background:#2563EB;padding:24px 32px;">
            <h1 style="color:white;margin:0;font-size:22px;">⚡ New Quote Request</h1>
            <p style="color:#BFDBFE;margin:4px 0 0;">Huron Electrical — Contact Form</p>
          </div>
          <div style="padding:32px;">
            <table style="width:100%;border-collapse:collapse;">
              <tr>
                <td style="padding:10px 0;color:#6b7280;width:140px;vertical-align:top;font-weight:600;">Name</td>
                <td style="padding:10px 0;color:#111827;">${name}</td>
              </tr>
              <tr style="border-top:1px solid #f3f4f6;">
                <td style="padding:10px 0;color:#6b7280;vertical-align:top;font-weight:600;">Email</td>
                <td style="padding:10px 0;"><a href="mailto:${email}" style="color:#2563EB;">${email}</a></td>
              </tr>
              <tr style="border-top:1px solid #f3f4f6;">
                <td style="padding:10px 0;color:#6b7280;vertical-align:top;font-weight:600;">Phone</td>
                <td style="padding:10px 0;color:#111827;">${phone?.trim() || 'Not provided'}</td>
              </tr>
              <tr style="border-top:1px solid #f3f4f6;">
                <td style="padding:10px 0;color:#6b7280;vertical-align:top;font-weight:600;">Service</td>
                <td style="padding:10px 0;">
                  <span style="background:#DBEAFE;color:#1D4ED8;padding:3px 10px;border-radius:20px;font-size:13px;font-weight:600;">${serviceLabel}</span>
                </td>
              </tr>
              <tr style="border-top:1px solid #f3f4f6;">
                <td style="padding:10px 0;color:#6b7280;vertical-align:top;font-weight:600;">Message</td>
                <td style="padding:10px 0;color:#111827;white-space:pre-wrap;">${message}</td>
              </tr>
            </table>
          </div>
          <div style="background:#f9fafb;padding:16px 32px;border-top:1px solid #e5e7eb;">
            <p style="color:#9ca3af;font-size:12px;margin:0;">This email was sent from the contact form at huronelectricalcanada.vercel.app</p>
          </div>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Resend error:', err);
    return res.status(500).json({ error: 'Failed to send email. Please try again.' });
  }
}

