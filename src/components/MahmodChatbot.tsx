import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, MapPin, ExternalLink, Bot, User, Phone, RefreshCw } from 'lucide-react';
import { SITE_SETTINGS } from '../data/siteSettings';
import { Link } from '../utils/router';

interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: string;
}

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: 'welcome',
    role: 'model',
    text: `Marhaban! I am **Mahmod**, lead Egyptologist and cultural advisor at Genuine Egypte in Luxor.\n\nWhether you are planning a **5-star Nile cruise**, a private sunrise balloon flight over the Valley of the Kings, or an unhurried Cairo & Giza journey, I am here to help you choose the ideal itinerary.\n\nHow may I assist you with your Egyptian travel plans today?`,
    timestamp: 'Just now'
  }
];

const SUGGESTED_QUESTIONS = [
  'Which Nile Cruise is best for a first-time traveler?',
  'Can I do a day trip to Abu Simbel from Aswan?',
  'What is the difference between Dahabiya and Nile Cruise?',
  'How do your transparent prices and booking work?'
];

export const MahmodChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (textToSend?: string) => {
    const text = (textToSend || input).trim();
    if (!text || loading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      // Build history for backend API
      const history = messages
        .filter(m => m.id !== 'welcome')
        .map(m => ({
          role: m.role,
          text: m.text
        }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, history })
      });

      if (!res.ok) {
        throw new Error(`Server returned ${res.status}`);
      }

      const data = await res.json();
      const replyText = data.reply || data.fallbackReply || 'I am happy to assist you! For customized arrangements, please contact our Luxor office directly at +20 1033801083.';

      const modelMsg: ChatMessage = {
        id: `model-${Date.now()}`,
        role: 'model',
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, modelMsg]);
    } catch (err) {
      console.warn('Chatbot API request failed, using intelligent Egyptologist fallback:', err);
      // Smart offline fallback
      let fallbackText = '';
      const lower = text.toLowerCase();
      if (lower.includes('cruise') || lower.includes('nile') || lower.includes('ship')) {
        fallbackText = `For river journeys, we highly recommend our **[3 Nights / 4 Days Nile Cruise – Luxor → Aswan](/booking/3-nights-4-days-nile-cruise-luxor-%e2%86%92-aswan/)** or the reverse **[4 Nights / 5 Days Nile Cruise – Aswan → Luxor](/booking/4-nights-5-days-nile-cruise-aswan-%e2%86%92-luxor/)**.\n\nYou will sail on 5-star ships like the Royal Ruby or Nile Premium, with full board dining and guided tours to Kom Ombo, Edfu, and Karnak with our licensed Egyptologists.\n\nWould you like seasonal availability for specific dates?`;
      } else if (lower.includes('abu simbel')) {
        fallbackText = `Yes, absolutely! We run private day excursions to the colossal Sun Temples of Ramesses II at Abu Simbel: **[Day Trip to Abu Simbel UNESCO Site from Aswan](/booking/day-trip-to-abu-simbel-unesco-world-heritage-site-from-aswan/)**.\n\nWe depart early in the morning by private air-conditioned vehicle so you arrive before the large bus convoys!`;
      } else if (lower.includes('price') || lower.includes('cost') || lower.includes('book') || lower.includes('pay')) {
        fallbackText = `At Genuine Egypte, we believe in **100% transparent pricing** with **no automated credit card deductions** on this site.\n\nWhen you request an itinerary, our Luxor coordination desk evaluates your exact travel dates, party size, and preferences to provide a direct customized proposal.\n\nYou can also contact us instantly via WhatsApp at **+20 1033801083** or email **info@genuineegypte.com**!`;
      } else {
        fallbackText = `Marhaban! As an Egyptologist based in Luxor, I recommend starting with our curated **[Tours & Cruises Catalog](/tours/)** or exploring **[Luxor's West & East Side Highlights](/booking/luxors-west-east-side-highlights-full-day-tour-in-egypt/)**.\n\nPlease let me know your planned travel month and group size so I can suggest the finest experience!`;
      }

      const modelMsg: ChatMessage = {
        id: `model-${Date.now()}`,
        role: 'model',
        text: fallbackText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, modelMsg]);
    } finally {
      setLoading(false);
    }
  };

  // Safe lightweight markdown parser for chat bubbles
  const renderFormattedText = (rawText: string) => {
    const lines = rawText.split('\n');
    return lines.map((line, lIdx) => {
      // Handle list items
      const isBullet = line.trim().startsWith('- ') || line.trim().startsWith('* ');
      const cleanLine = isBullet ? line.trim().slice(2) : line;

      // Regex replace [title](url) and **bold**
      const parts: React.ReactNode[] = [];
      let lastIndex = 0;

      // Match [text](url) OR **bold**
      const regex = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
      let match;

      while ((match = regex.exec(cleanLine)) !== null) {
        if (match.index > lastIndex) {
          parts.push(cleanLine.substring(lastIndex, match.index));
        }

        if (match[1] && match[2]) {
          // Link
          const href = match[2];
          parts.push(
            <Link
              key={`link-${lIdx}-${match.index}`}
              to={href}
              className="text-amber-700 dark:text-amber-400 font-semibold underline hover:text-amber-900 dark:hover:text-amber-300 inline-flex items-center gap-0.5"
            >
              <span>{match[1]}</span>
              <ExternalLink className="w-3 h-3 inline-block shrink-0" />
            </Link>
          );
        } else if (match[3]) {
          // Bold
          parts.push(
            <strong key={`bold-${lIdx}-${match.index}`} className="font-semibold text-stone-900 dark:text-stone-100">
              {match[3]}
            </strong>
          );
        }
        lastIndex = regex.lastIndex;
      }

      if (lastIndex < cleanLine.length) {
        parts.push(cleanLine.substring(lastIndex));
      }

      if (isBullet) {
        return (
          <li key={lIdx} className="ml-4 list-disc space-y-0.5">
            {parts}
          </li>
        );
      }

      return (
        <p key={lIdx} className={line === '' ? 'h-2' : 'mb-1 leading-relaxed'}>
          {parts}
        </p>
      );
    });
  };

  return (
    <>
      {/* Floating Launcher Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open chat with Mahmod, Egyptian Tour Advisor"
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-3 bg-stone-900 dark:bg-amber-600 text-white rounded-full shadow-xl hover:bg-stone-800 dark:hover:bg-amber-500 transition-all transform hover:scale-105 group border border-amber-500/40"
        >
          <div className="relative">
            <div className="w-9 h-9 rounded-full bg-amber-500 flex items-center justify-center text-stone-900 font-bold font-serif shadow-xs">
              M
            </div>
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-stone-900 rounded-full" />
          </div>
          <div className="text-left hidden sm:block pr-1">
            <span className="block text-xs font-semibold tracking-wide">Ask Mahmod</span>
            <span className="block text-[10px] text-amber-300 font-medium">Licensed Egyptologist</span>
          </div>
          <Sparkles className="w-4 h-4 text-amber-400 group-hover:rotate-12 transition-transform" />
        </button>
      )}

      {/* Chat Dialog Window */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Mahmod - Egyptian Tour Advisor Chat"
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] max-h-[620px] h-[85vh] bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200"
        >
          {/* Header */}
          <div className="px-5 py-4 bg-[#181512] text-white flex items-center justify-between border-b border-stone-800">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-600 to-amber-400 flex items-center justify-center text-stone-950 font-bold font-serif text-lg shadow-xs">
                  M
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-[#181512] rounded-full" />
              </div>
              <div>
                <h3 className="font-serif text-base font-bold text-white flex items-center gap-1.5">
                  <span>Mahmod</span>
                  <span className="text-[10px] uppercase font-sans font-semibold px-1.5 py-0.2 bg-amber-500/20 text-amber-400 rounded-xs">
                    Egyptologist
                  </span>
                </h3>
                <p className="text-[11px] text-stone-300 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-amber-400" />
                  <span>Luxor Office · Genuine Egypte</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setMessages(INITIAL_MESSAGES)}
                title="Restart conversation"
                className="text-stone-400 hover:text-white p-1.5 rounded-lg transition-colors"
                aria-label="Restart conversation"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Close chat"
                className="text-stone-400 hover:text-white p-1.5 rounded-lg transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs sm:text-sm bg-[#FAF8F5] dark:bg-[#141210]">
            {messages.map((msg) => {
              const isUser = msg.role === 'user';
              return (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 ${isUser ? 'justify-end' : 'justify-start'}`}
                >
                  {!isUser && (
                    <div className="w-7 h-7 rounded-full bg-amber-600/90 text-white flex items-center justify-center font-serif text-xs shrink-0 mt-0.5 shadow-xs">
                      M
                    </div>
                  )}

                  <div
                    className={`max-w-[85%] rounded-2xl p-3.5 shadow-xs ${
                      isUser
                        ? 'bg-stone-900 text-white rounded-tr-xs'
                        : 'bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-200 border border-stone-200/90 dark:border-stone-700/80 rounded-tl-xs'
                    }`}
                  >
                    {isUser ? (
                      <p className="whitespace-pre-wrap">{msg.text}</p>
                    ) : (
                      <div className="space-y-1">{renderFormattedText(msg.text)}</div>
                    )}
                    <span
                      className={`block text-[9px] mt-1.5 ${
                        isUser ? 'text-stone-400 text-right' : 'text-stone-400 dark:text-stone-500'
                      }`}
                    >
                      {msg.timestamp}
                    </span>
                  </div>
                </div>
              );
            })}

            {loading && (
              <div className="flex gap-2.5 items-center text-xs text-stone-500 dark:text-stone-400">
                <div className="w-7 h-7 rounded-full bg-amber-600/90 text-white flex items-center justify-center font-serif text-xs shrink-0">
                  M
                </div>
                <div className="bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-2xl px-4 py-2.5 flex items-center gap-1.5 shadow-xs">
                  <span className="w-1.5 h-1.5 bg-amber-600 rounded-full animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-1.5 h-1.5 bg-amber-600 rounded-full animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-1.5 h-1.5 bg-amber-600 rounded-full animate-bounce" />
                  <span className="text-[11px] ml-1 text-stone-500 dark:text-stone-400">
                    Mahmod is preparing your recommendation...
                  </span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestions (if conversation is fresh) */}
          {messages.length <= 2 && (
            <div className="px-4 py-2 bg-stone-100 dark:bg-stone-800/60 border-t border-stone-200 dark:border-stone-800 flex items-center gap-1.5 overflow-x-auto scrollbar-none">
              {SUGGESTED_QUESTIONS.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(q)}
                  className="whitespace-nowrap px-2.5 py-1 text-[11px] rounded-full bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:border-amber-600 dark:hover:border-amber-400 transition-colors shrink-0"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input Footer */}
          <div className="p-3 bg-white dark:bg-stone-900 border-t border-stone-200 dark:border-stone-800 space-y-2">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="Ask Mahmod about cruises, tours, prices..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={loading}
                className="flex-1 px-3.5 py-2 text-xs sm:text-sm bg-stone-50 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-xl focus:outline-none focus:ring-1 focus:ring-amber-500 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-500"
              />
              <button
                type="submit"
                disabled={!input.trim() || loading}
                aria-label="Send message to Mahmod"
                className="p-2.5 bg-stone-900 dark:bg-amber-600 hover:bg-stone-800 dark:hover:bg-amber-500 disabled:opacity-40 text-white rounded-xl transition-colors shadow-xs"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

            <div className="flex items-center justify-between text-[10px] text-stone-400 dark:text-stone-500 pt-0.5 px-1">
              <span>Direct guidance · 297 curated programs</span>
              <a
                href={SITE_SETTINGS.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium inline-flex items-center gap-1"
              >
                <Phone className="w-2.5 h-2.5" />
                <span>WhatsApp: {SITE_SETTINGS.primaryPhone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
