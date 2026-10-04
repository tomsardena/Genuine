import React, { useState, useEffect } from 'react';
import { X, Send, Bot, Mail, CheckCircle2, AlertCircle, RefreshCw, Key, Shield, HelpCircle, ExternalLink, ListChecks } from 'lucide-react';

interface BookingNotificationsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingNotificationsModal: React.FC<BookingNotificationsModalProps> = ({ isOpen, onClose }) => {
  const [token, setToken] = useState('');
  const [chatId, setChatId] = useState('');
  const [email, setEmail] = useState('');
  const [smtpHost, setSmtpHost] = useState('');
  const [smtpUser, setSmtpUser] = useState('');
  const [smtpPass, setSmtpPass] = useState('');

  const [loading, setLoading] = useState(false);
  const [testingTelegram, setTestingTelegram] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [recentBookings, setRecentBookings] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<'telegram' | 'email' | 'history'>('telegram');

  useEffect(() => {
    if (isOpen) {
      loadSettings();
      loadBookings();
    }
  }, [isOpen]);

  const loadSettings = async () => {
    try {
      const res = await fetch('/api/notifications/settings');
      if (res.ok) {
        const data = await res.json();
        setEmail(data.notificationEmail || 'info@genuineegypte.com, kemethurghada.ag@gmail.com');
        if (data.telegramChatId) setChatId(data.telegramChatId);
        if (data.smtpHost) setSmtpHost(data.smtpHost);
        if (data.smtpUser) setSmtpUser(data.smtpUser);
      }
    } catch (err) {
      console.error('Failed to load notification settings', err);
    }
  };

  const loadBookings = async () => {
    try {
      const res = await fetch('/api/bookings');
      if (res.ok) {
        const data = await res.json();
        setRecentBookings(data.bookings || []);
      }
    } catch (err) {
      console.error('Failed to load bookings list', err);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage(null);

    try {
      const res = await fetch('/api/notifications/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          telegramBotToken: token || undefined,
          telegramChatId: chatId || undefined,
          notificationEmail: email || undefined,
          smtpHost: smtpHost || undefined,
          smtpUser: smtpUser || undefined,
          smtpPass: smtpPass || undefined
        })
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatusMessage({ type: 'success', text: 'Notification settings saved successfully!' });
      } else {
        setStatusMessage({ type: 'error', text: data.error || 'Failed to save settings.' });
      }
    } catch (err: any) {
      setStatusMessage({ type: 'error', text: err?.message || 'Network error saving settings.' });
    } finally {
      setLoading(false);
    }
  };

  const handleTestTelegram = async () => {
    if (!token && !chatId) {
      setStatusMessage({ type: 'error', text: 'Please enter both Telegram Bot Token and Chat ID before testing.' });
      return;
    }

    setTestingTelegram(true);
    setStatusMessage(null);

    try {
      const res = await fetch('/api/notifications/test-telegram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          telegramBotToken: token,
          telegramChatId: chatId
        })
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatusMessage({ type: 'success', text: 'Ping sent! Check your Telegram to see the test message.' });
      } else {
        setStatusMessage({ type: 'error', text: data.message || 'Telegram test failed. Please verify token & chat ID.' });
      }
    } catch (err: any) {
      setStatusMessage({ type: 'error', text: 'Network error connecting to Telegram API.' });
    } finally {
      setTestingTelegram(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 dark:bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-100 rounded-xl shadow-2xl max-w-xl w-full overflow-hidden border border-stone-200 dark:border-stone-800 transition-all transform animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="bg-[#181512] text-white px-6 py-4 flex items-center justify-between border-b border-amber-900/40">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 bg-amber-500/20 text-amber-400 rounded-lg">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-serif font-bold text-white tracking-wide">
                Booking Inquiries & Notifications
              </h2>
              <p className="text-[11px] text-stone-400">
                Automated delivery to Website Email (<span className="text-amber-300">info@genuineegypte.com</span>) & Telegram Bot
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-stone-400 hover:text-white p-1 rounded-md transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/40 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('telegram')}
            className={`flex-1 py-3 px-4 flex items-center justify-center gap-2 border-b-2 transition-colors ${
              activeTab === 'telegram'
                ? 'border-amber-600 text-amber-800 dark:text-amber-400 bg-white dark:bg-stone-900'
                : 'border-transparent text-stone-600 dark:text-stone-400 hover:text-stone-900'
            }`}
          >
            <Bot className="w-3.5 h-3.5" />
            <span>Telegram Bot</span>
          </button>

          <button
            onClick={() => setActiveTab('email')}
            className={`flex-1 py-3 px-4 flex items-center justify-center gap-2 border-b-2 transition-colors ${
              activeTab === 'email'
                ? 'border-amber-600 text-amber-800 dark:text-amber-400 bg-white dark:bg-stone-900'
                : 'border-transparent text-stone-600 dark:text-stone-400 hover:text-stone-900'
            }`}
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Website Email</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('history');
              loadBookings();
            }}
            className={`flex-1 py-3 px-4 flex items-center justify-center gap-2 border-b-2 transition-colors ${
              activeTab === 'history'
                ? 'border-amber-600 text-amber-800 dark:text-amber-400 bg-white dark:bg-stone-900'
                : 'border-transparent text-stone-600 dark:text-stone-400 hover:text-stone-900'
            }`}
          >
            <ListChecks className="w-3.5 h-3.5" />
            <span>Recent Inquiries ({recentBookings.length})</span>
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
          {statusMessage && (
            <div
              className={`p-3 rounded-lg text-xs flex items-start gap-2 border ${
                statusMessage.type === 'success'
                  ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800'
                  : 'bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-300 border-rose-200 dark:border-rose-800'
              }`}
            >
              {statusMessage.type === 'success' ? (
                <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              )}
              <span className="leading-relaxed">{statusMessage.text}</span>
            </div>
          )}

          {activeTab === 'telegram' && (
            <div className="space-y-4">
              <div className="p-3 bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/50 rounded-lg text-xs space-y-2 text-stone-700 dark:text-stone-300">
                <div className="flex items-center gap-1.5 font-semibold text-amber-900 dark:text-amber-200">
                  <HelpCircle className="w-4 h-4 text-amber-700 dark:text-amber-400" />
                  <span>How to Connect Your Telegram Bot:</span>
                </div>
                <ol className="list-decimal pl-4 space-y-1 leading-relaxed">
                  <li>Open Telegram and message <strong>@BotFather</strong>, send <code>/newbot</code> to create a bot and copy your <strong>API Token</strong>.</li>
                  <li>Open a chat with your new bot and press <strong>Start</strong> (or add your bot to your team Telegram group).</li>
                  <li>Message <strong>@userinfobot</strong> on Telegram to get your numeric <strong>Chat ID</strong>.</li>
                  <li>Paste both below and click <strong>Test Ping</strong>!</li>
                </ol>
              </div>

              <form onSubmit={handleSave} className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">
                    Telegram Bot Token
                  </label>
                  <input
                    type="password"
                    placeholder="e.g. 123456789:ABCdefGhIJKlmNoPQRsTUVwxyZ"
                    value={token}
                    onChange={(e) => setToken(e.target.value)}
                    className="w-full px-3 py-2 text-xs sm:text-sm border border-stone-300 dark:border-stone-700 rounded-md focus:ring-1 focus:ring-amber-500 bg-white dark:bg-stone-800"
                  />
                  <p className="text-[10px] text-stone-400 mt-1">Can also be set as TELEGRAM_BOT_TOKEN environment variable.</p>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">
                    Telegram Chat ID / Group ID
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 987654321 or -100123456789"
                    value={chatId}
                    onChange={(e) => setChatId(e.target.value)}
                    className="w-full px-3 py-2 text-xs sm:text-sm border border-stone-300 dark:border-stone-700 rounded-md focus:ring-1 focus:ring-amber-500 bg-white dark:bg-stone-800"
                  />
                  <p className="text-[10px] text-stone-400 mt-1">Can also be set as TELEGRAM_CHAT_ID environment variable.</p>
                </div>

                <div className="pt-2 flex gap-2">
                  <button
                    type="button"
                    onClick={handleTestTelegram}
                    disabled={testingTelegram}
                    className="flex-1 py-2 px-3 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-200 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5 border border-stone-300 dark:border-stone-700 disabled:opacity-50"
                  >
                    {testingTelegram ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Send className="w-3.5 h-3.5" />}
                    <span>Test Ping Telegram Bot</span>
                  </button>

                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 py-2 px-3 bg-amber-700 hover:bg-amber-800 text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-xs disabled:opacity-50"
                  >
                    {loading ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <CheckCircle2 className="w-3.5 h-3.5" />}
                    <span>Save Settings</span>
                  </button>
                </div>
              </form>
            </div>
          )}

          {activeTab === 'email' && (
            <div className="space-y-4">
              <form onSubmit={handleSave} className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">
                    Notification Target Emails (Comma-separated)
                  </label>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 text-xs sm:text-sm border border-stone-300 dark:border-stone-700 rounded-md focus:ring-1 focus:ring-amber-500 bg-white dark:bg-stone-800"
                  />
                  <p className="text-[10px] text-stone-400 mt-1">
                    Default: <strong>info@genuineegypte.com</strong> and <strong>kemethurghada.ag@gmail.com</strong>
                  </p>
                </div>

                <div className="p-3 bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700 rounded-lg text-xs space-y-2">
                  <div className="font-semibold text-stone-800 dark:text-stone-200 flex items-center gap-1.5">
                    <Key className="w-3.5 h-3.5 text-amber-600" />
                    <span>Live SMTP Outgoing Mail Server (Optional)</span>
                  </div>
                  <p className="text-[11px] text-stone-500 dark:text-stone-400 leading-relaxed">
                    By default, inquiries are saved to disk storage and sent to Telegram. Configure SMTP below or via environment variables (SMTP_HOST, SMTP_USER, SMTP_PASS) to enable live email delivery.
                  </p>

                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <div>
                      <label className="block text-[11px] font-medium text-stone-600 dark:text-stone-400 mb-0.5">SMTP Host</label>
                      <input
                        type="text"
                        placeholder="smtp.gmail.com"
                        value={smtpHost}
                        onChange={(e) => setSmtpHost(e.target.value)}
                        className="w-full px-2.5 py-1.5 text-xs border border-stone-300 dark:border-stone-700 rounded bg-white dark:bg-stone-800"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-medium text-stone-600 dark:text-stone-400 mb-0.5">SMTP User</label>
                      <input
                        type="text"
                        placeholder="info@genuineegypte.com"
                        value={smtpUser}
                        onChange={(e) => setSmtpUser(e.target.value)}
                        className="w-full px-2.5 py-1.5 text-xs border border-stone-300 dark:border-stone-700 rounded bg-white dark:bg-stone-800"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-stone-600 dark:text-stone-400 mb-0.5">SMTP Password / App Password</label>
                    <input
                      type="password"
                      placeholder="••••••••••••"
                      value={smtpPass}
                      onChange={(e) => setSmtpPass(e.target.value)}
                      className="w-full px-2.5 py-1.5 text-xs border border-stone-300 dark:border-stone-700 rounded bg-white dark:bg-stone-800"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2 px-3 bg-amber-700 hover:bg-amber-800 text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                >
                  {loading ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <CheckCircle2 className="w-3.5 h-3.5" />}
                  <span>Save Email Configuration</span>
                </button>
              </form>
            </div>
          )}

          {activeTab === 'history' && (
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs text-stone-500">
                <span>Total Stored Inquiries: <strong>{recentBookings.length}</strong></span>
                <button
                  onClick={loadBookings}
                  className="inline-flex items-center gap-1 text-amber-700 dark:text-amber-400 hover:underline"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Refresh</span>
                </button>
              </div>

              {recentBookings.length === 0 ? (
                <div className="p-8 text-center text-stone-400 text-xs">
                  No booking inquiries recorded yet. When a visitor fills the booking form, it will appear here instantly!
                </div>
              ) : (
                <div className="space-y-2.5 max-h-[50vh] overflow-y-auto pr-1">
                  {recentBookings.map((b) => (
                    <div
                      key={b.id}
                      className="p-3 bg-stone-50 dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700 rounded-lg text-xs space-y-1.5"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <strong className="text-stone-900 dark:text-stone-100 font-semibold">{b.name}</strong>
                          <span className="text-stone-400 block text-[10px]">{b.email || b.phone} • Ref: {b.id}</span>
                        </div>
                        <span className="text-[10px] text-stone-400">{b.createdAt}</span>
                      </div>

                      <div className="text-[11px] text-stone-600 dark:text-stone-300">
                        <strong>Tour:</strong> {b.tourTitle || 'Tailor-Made Tour'} ({b.travelers || '2 travelers'}, Date: {b.date || 'Flexible'})
                      </div>

                      {b.notes && (
                        <p className="text-[11px] text-stone-500 dark:text-stone-400 italic bg-white dark:bg-stone-900 p-2 rounded border border-stone-200 dark:border-stone-800">
                          &ldquo;{b.notes}&rdquo;
                        </p>
                      )}

                      <div className="flex items-center gap-2 pt-1 text-[10px]">
                        <span className={`px-1.5 py-0.5 rounded font-medium ${b.emailSent ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300' : 'bg-stone-200 text-stone-700 dark:bg-stone-700 dark:text-stone-300'}`}>
                          Email: {b.emailSent ? 'Dispatched' : 'Queued'}
                        </span>
                        <span className={`px-1.5 py-0.5 rounded font-medium ${b.telegramSent ? 'bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300' : 'bg-stone-200 text-stone-700 dark:bg-stone-700 dark:text-stone-300'}`}>
                          Telegram: {b.telegramSent ? 'Delivered' : 'Pending Bot Setup'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
