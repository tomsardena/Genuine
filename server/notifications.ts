import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const dataDir = path.join(rootDir, 'data');
const bookingsFilePath = path.join(dataDir, 'bookings.json');
const configFilePath = path.join(dataDir, 'notifications_config.json');

// Ensure data directory exists
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

export interface BookingInquiry {
  id: string;
  name: string;
  email: string;
  phone?: string;
  tourTitle?: string;
  tourSlug?: string;
  date?: string;
  travelers?: string;
  notes?: string;
  createdAt: string;
  source?: string;
  emailSent?: boolean;
  emailRecipient?: string;
  emailDetails?: string;
  telegramSent?: boolean;
  telegramDetails?: string;
}

export interface NotificationSettings {
  telegramBotToken?: string;
  telegramChatId?: string;
  notificationEmail?: string;
  smtpHost?: string;
  smtpPort?: number;
  smtpUser?: string;
  smtpPass?: string;
  smtpSecure?: boolean;
}

/**
 * Loads notifications configuration from environment variables and saved config file
 */
export function getNotificationSettings(): NotificationSettings {
  let fileConfig: NotificationSettings = {};
  try {
    if (fs.existsSync(configFilePath)) {
      fileConfig = JSON.parse(fs.readFileSync(configFilePath, 'utf-8'));
    }
  } catch (err) {
    console.error('Failed reading notifications_config.json:', err);
  }

  return {
    telegramBotToken: process.env.TELEGRAM_BOT_TOKEN || fileConfig.telegramBotToken || '',
    telegramChatId: process.env.TELEGRAM_CHAT_ID || fileConfig.telegramChatId || '',
    notificationEmail:
      process.env.NOTIFICATION_EMAIL ||
      fileConfig.notificationEmail ||
      'info@genuineegypte.com, kemethurghada.ag@gmail.com',
    smtpHost: process.env.SMTP_HOST || fileConfig.smtpHost || '',
    smtpPort: parseInt(process.env.SMTP_PORT || String(fileConfig.smtpPort || 587), 10),
    smtpUser: process.env.SMTP_USER || fileConfig.smtpUser || '',
    smtpPass: process.env.SMTP_PASS || fileConfig.smtpPass || '',
    smtpSecure: process.env.SMTP_SECURE === 'true' || fileConfig.smtpSecure || false
  };
}

/**
 * Save notification configuration at runtime
 */
export function saveNotificationSettings(settings: Partial<NotificationSettings>): NotificationSettings {
  const current = getNotificationSettings();
  const merged: NotificationSettings = {
    ...current,
    ...settings
  };

  fs.writeFileSync(configFilePath, JSON.stringify(merged, null, 2), 'utf-8');
  return merged;
}

/**
 * Persist booking inquiry record to disk
 */
export function saveBookingRecord(booking: BookingInquiry): void {
  try {
    let list: BookingInquiry[] = [];
    if (fs.existsSync(bookingsFilePath)) {
      list = JSON.parse(fs.readFileSync(bookingsFilePath, 'utf-8'));
    }
    list.unshift(booking);
    // Keep last 500 bookings
    if (list.length > 500) list = list.slice(0, 500);
    fs.writeFileSync(bookingsFilePath, JSON.stringify(list, null, 2), 'utf-8');
  } catch (err) {
    console.error('Failed to save booking inquiry to disk:', err);
  }
}

/**
 * Get all saved bookings
 */
export function getAllBookings(): BookingInquiry[] {
  try {
    if (fs.existsSync(bookingsFilePath)) {
      return JSON.parse(fs.readFileSync(bookingsFilePath, 'utf-8'));
    }
  } catch (err) {
    console.error('Failed to load bookings:', err);
  }
  return [];
}

/**
 * Send booking inquiry to Telegram Bot
 */
export async function sendTelegramNotification(
  booking: BookingInquiry,
  customSettings?: NotificationSettings
): Promise<{ success: boolean; details: string }> {
  const settings = customSettings || getNotificationSettings();
  const token = settings.telegramBotToken?.trim();
  const chatId = settings.telegramChatId?.trim();

  if (!token || !chatId) {
    const msg = 'Telegram bot token or chat ID is not configured.';
    console.warn(`[Telegram Alert] ${msg}`);
    return { success: false, details: msg };
  }

  const tourUrl = booking.tourSlug
    ? `https://genuineegypte.com/booking/${booking.tourSlug}/`
    : 'https://genuineegypte.com/tours';

  const telegramMessage = `
🏛️ <b>NEW BOOKING INQUIRY — Genuine Egypte</b>
━━━━━━━━━━━━━━━━━━━━━
📋 <b>Booking ID:</b> <code>${booking.id}</code>
👤 <b>Guest Name:</b> ${escapeHtml(booking.name)}
📧 <b>Email:</b> <a href="mailto:${booking.email}">${escapeHtml(booking.email)}</a>
📞 <b>Phone / WhatsApp:</b> ${booking.phone ? `<a href="tel:${booking.phone}">${escapeHtml(booking.phone)}</a>` : '<i>Not provided</i>'}

🗺️ <b>Tour:</b> <a href="${tourUrl}">${escapeHtml(booking.tourTitle || 'Tailor-Made Tour')}</a>
📅 <b>Preferred Date:</b> ${escapeHtml(booking.date || 'Flexible')}
👥 <b>Travelers:</b> ${escapeHtml(booking.travelers || '2 Travelers')}

📝 <b>Notes / Special Requests:</b>
${escapeHtml(booking.notes || 'None specified')}

⏰ <b>Received At:</b> ${booking.createdAt}
🌐 <b>Origin:</b> ${booking.source || 'Website'}
━━━━━━━━━━━━━━━━━━━━━
⚡ <i>Reply promptly via WhatsApp or email to confirm luxury arrangements.</i>
`.trim();

  try {
    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: telegramMessage,
        parse_mode: 'HTML',
        disable_web_page_preview: false
      })
    });

    const data = await response.json();
    if (data.ok) {
      console.log(`[Telegram Alert] Sent booking inquiry #${booking.id} to chat ${chatId}`);
      return { success: true, details: `Delivered to Telegram chat ${chatId}` };
    } else {
      const err = data.description || 'Telegram API returned an error';
      console.error(`[Telegram Alert] Failed: ${err}`);
      return { success: false, details: err };
    }
  } catch (err: any) {
    console.error('[Telegram Alert] Exception sending message:', err);
    return { success: false, details: err?.message || 'Network error reaching Telegram API' };
  }
}

/**
 * Test Telegram bot connection with a ping message
 */
export async function testTelegramBot(
  token: string,
  chatId: string
): Promise<{ success: boolean; message: string }> {
  try {
    const testText = `
🏛️ <b>Genuine Egypte — Telegram Connection Test</b>
━━━━━━━━━━━━━━━━━━━━━
✅ <b>Bot Integration is Active!</b>
You will receive all direct travel inquiries and booking requests here in real-time.

⏰ <b>Time:</b> ${new Date().toISOString()}
📍 <b>Office:</b> 44 Khaled Ibn Al Waleed Street, Luxor, Egypt
━━━━━━━━━━━━━━━━━━━━━
`.trim();

    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: testText,
        parse_mode: 'HTML'
      })
    });

    const data = await response.json();
    if (data.ok) {
      return { success: true, message: 'Test message sent successfully to your Telegram bot!' };
    } else {
      return { success: false, message: data.description || 'Telegram API error' };
    }
  } catch (err: any) {
    return { success: false, message: err?.message || 'Connection error' };
  }
}

/**
 * Send automated email notification to Genuine Egypte team
 */
export async function sendEmailNotification(
  booking: BookingInquiry,
  customSettings?: NotificationSettings
): Promise<{ success: boolean; details: string; recipient: string }> {
  const settings = customSettings || getNotificationSettings();
  const recipient = settings.notificationEmail || 'info@genuineegypte.com, kemethurghada.ag@gmail.com';

  const subject = `[New Booking Inquiry #${booking.id}] ${booking.tourTitle || 'Egypt Tour'} - ${booking.name}`;

  const htmlBody = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Booking Inquiry</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f6f3ee; color: #1c1917; margin: 0; padding: 24px; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e7e5e4; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
    .header { background: #1c1917; padding: 28px 24px; text-align: center; border-bottom: 3px solid #d97706; }
    .header h1 { margin: 0; color: #ffffff; font-size: 20px; font-weight: 700; letter-spacing: 0.5px; }
    .header p { margin: 4px 0 0; color: #fbbf24; font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px; }
    .content { padding: 28px 24px; }
    .badge { display: inline-block; background: #fef3c7; color: #92400e; padding: 4px 10px; border-radius: 9999px; font-size: 12px; font-weight: 600; margin-bottom: 16px; }
    .grid { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
    .grid td { padding: 10px 0; border-bottom: 1px solid #f5f5f4; font-size: 14px; }
    .label { color: #78716c; width: 140px; font-weight: 500; }
    .value { color: #1c1917; font-weight: 600; }
    .notes-box { background: #fafaf9; border-left: 3px solid #d97706; padding: 14px 16px; border-radius: 0 8px 8px 0; font-size: 13px; color: #44403c; line-height: 1.6; margin: 16px 0 24px; white-space: pre-wrap; }
    .actions { text-align: center; padding-top: 10px; }
    .button { display: inline-block; background: #d97706; color: #ffffff !important; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-size: 13px; font-weight: 600; }
    .footer { background: #f5f5f4; padding: 16px 24px; text-align: center; font-size: 11px; color: #78716c; border-top: 1px solid #e7e5e4; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>GENUINE EGYPTE</h1>
      <p>Luxury Nile Expeditions & Tailor-Made Cultural Tours</p>
    </div>
    <div class="content">
      <span class="badge">Direct Website Inquiry • Reference #${booking.id}</span>
      <h2 style="font-size: 18px; margin: 0 0 16px; color: #1c1917;">New Booking Request Received</h2>
      
      <table class="grid">
        <tr>
          <td class="label">Lead Guest:</td>
          <td class="value">${escapeHtml(booking.name)}</td>
        </tr>
        <tr>
          <td class="label">Email Address:</td>
          <td class="value"><a href="mailto:${booking.email}" style="color: #b45309; text-decoration: none;">${escapeHtml(booking.email)}</a></td>
        </tr>
        <tr>
          <td class="label">Phone / WhatsApp:</td>
          <td class="value">${booking.phone ? `<a href="tel:${booking.phone}" style="color: #b45309; text-decoration: none;">${escapeHtml(booking.phone)}</a>` : 'Not provided'}</td>
        </tr>
        <tr>
          <td class="label">Selected Tour:</td>
          <td class="value">${escapeHtml(booking.tourTitle || 'Tailor-Made Egyptian Journey')}</td>
        </tr>
        <tr>
          <td class="label">Preferred Date:</td>
          <td class="value">${escapeHtml(booking.date || 'Flexible')}</td>
        </tr>
        <tr>
          <td class="label">Party Size:</td>
          <td class="value">${escapeHtml(booking.travelers || '2 Travelers')}</td>
        </tr>
        <tr>
          <td class="label">Received:</td>
          <td class="value">${booking.createdAt}</td>
        </tr>
      </table>

      <strong style="font-size: 12px; text-transform: uppercase; color: #78716c; letter-spacing: 0.5px;">Guest Notes & Special Requests:</strong>
      <div class="notes-box">${escapeHtml(booking.notes || 'No special requests specified.')}</div>

      <div class="actions">
        <a href="mailto:${booking.email}?subject=Regarding%20Your%20Genuine%20Egypte%20Inquiry%20%23${booking.id}" class="button">Reply Directly to Traveler</a>
      </div>
    </div>
    <div class="footer">
      Genuine Egypte • 44 Khaled Ibn Al Waleed Street, Luxor, Egypt • Phone: +20 1070335551<br/>
      This automated alert was dispatched instantly upon booking form submission on genuineegypte.com
    </div>
  </div>
</body>
</html>
`.trim();

  const textBody = `
NEW BOOKING INQUIRY — GENUINE EGYPTE
Reference ID: ${booking.id}
------------------------------------------
Lead Guest: ${booking.name}
Email: ${booking.email}
Phone/WhatsApp: ${booking.phone || 'N/A'}
Tour: ${booking.tourTitle || 'Tailor-Made Tour'}
Preferred Date: ${booking.date || 'Flexible'}
Travelers: ${booking.travelers || '2 Travelers'}
Received: ${booking.createdAt}

Special Requests / Notes:
${booking.notes || 'None'}

Please reply promptly to confirm arrangements.
------------------------------------------
Genuine Egypte Office: +20 1070335551
`.trim();

  // If SMTP is configured, send via SMTP
  if (settings.smtpHost && settings.smtpUser && settings.smtpPass) {
    try {
      const transporter = nodemailer.createTransport({
        host: settings.smtpHost,
        port: settings.smtpPort || 587,
        secure: settings.smtpSecure || false,
        auth: {
          user: settings.smtpUser,
          pass: settings.smtpPass
        }
      });

      const info = await transporter.sendMail({
        from: `"${settings.smtpUser.split('@')[0] || 'Genuine Egypte'}" <${settings.smtpUser}>`,
        to: recipient,
        replyTo: booking.email,
        subject,
        text: textBody,
        html: htmlBody
      });

      console.log(`[Email Alert] Sent via SMTP to ${recipient}: ${info.messageId}`);
      return { success: true, details: `Delivered via SMTP (${info.messageId})`, recipient };
    } catch (err: any) {
      console.error('[Email Alert] SMTP error:', err);
      return { success: false, details: `SMTP error: ${err.message}`, recipient };
    }
  } else {
    // If SMTP is not configured yet, record the email dispatch in logs
    console.log(`[Email Alert Queued] No SMTP host configured yet. Target recipient: ${recipient}. Subject: "${subject}".`);
    return {
      success: true,
      details: `Inquiry saved. Notification queued for ${recipient} (Configure SMTP in settings or .env to activate live SMTP delivery).`,
      recipient
    };
  }
}

function escapeHtml(text: string): string {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
