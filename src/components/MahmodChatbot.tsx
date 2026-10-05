import React, { useState, useRef, useEffect } from 'react';
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  MapPin,
  ExternalLink,
  Clock,
  Compass,
  Phone,
  RefreshCw,
  Maximize2,
  Minimize2,
  Copy,
  Check,
  Volume2,
  VolumeX,
  ArrowRight,
  ShieldCheck,
  Tag
} from 'lucide-react';
import { SITE_SETTINGS } from '../data/siteSettings';
import { Link } from '../utils/router';
import { OptimizedImage } from './OptimizedImage';

interface TourSummary {
  id: string;
  title: string;
  slug: string;
  category: string;
  destination: string;
  duration: string;
  price?: number | null;
  priceNote?: string;
  mainImage: string;
  shortDescription?: string;
}

interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: string;
  recommendedTours?: TourSummary[];
  suggestions?: string[];
}

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: 'welcome',
    role: 'model',
    text: `Marhaban! I am **Mahmod**, lead licensed Egyptologist and master itinerary planner at Genuine Egypte in Luxor.\n\nWhether you are considering a **5-star Nile cruise** between Luxor and Aswan, an exclusive traditional Dahabiya sailboat, sunrise ballooning over the Valley of the Kings, or an unhurried Cairo & Giza cultural discovery, I am here to personally guide you to the finest choice.\n\nHow can I help you discover Egypt today?`,
    timestamp: 'Just now',
    recommendedTours: [
      {
        id: 'rec-1',
        title: 'Royal Ruby Nile Cruise 3 Nights 4 days',
        slug: 'royal-ruby-nile-cruise-3-nights-4-days',
        category: 'Nile Cruises',
        destination: 'Luxor & Aswan',
        duration: '3 Nights / 4 Days',
        priceNote: 'Custom private quote · Full board',
        mainImage: '/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg',
        shortDescription: 'Full board sailing aboard the 5-star Royal Ruby visiting Karnak, Edfu, Kom Ombo, and Philae with private Egyptologist shore guiding.'
      },
      {
        id: 'rec-2',
        title: "Luxor's West & East Side Highlights",
        slug: 'luxors-west-east-side-highlights-full-day-tour-in-egypt',
        category: 'Luxor Tours',
        destination: 'Luxor',
        duration: 'Full Day (8–9 hours)',
        priceNote: 'Private A/C vehicle & certified guide',
        mainImage: '/images/tours/genuine-egypte-19.webp',
        shortDescription: 'Valley of the Kings, Hatshepsut Temple, Colossi of Memnon, Karnak and Luxor Temples.'
      }
    ],
    suggestions: [
      'Which 5-star Nile cruise do you recommend?',
      'What is the best private tour for the Pyramids & Cairo?',
      'Tell me about Dahabiya traditional sailing yachts.',
      'Can we do a private day excursion to Abu Simbel?'
    ]
  }
];

const QUICK_TOPICS = [
  { label: '🚢 5-Star Nile Cruises', query: 'Which 5-star Nile Cruise do you recommend between Luxor and Aswan?' },
  { label: '⛵ Dahabiya Sailing', query: 'Tell me about Dahabiya traditional sailing cruises and how they differ from big ships.' },
  { label: '👑 Cairo & Pyramids', query: 'What is the best private tour for the Giza Pyramids and Cairo?' },
  { label: '☀️ Abu Simbel Excursion', query: 'Can I do a private day excursion to Abu Simbel from Aswan?' },
  { label: '🎈 Sunrise Hot Air Balloon', query: 'How does the sunrise hot air balloon flight in Luxor work?' },
  { label: '🐠 Hurghada & Red Sea', query: 'What private trips and desert or sea safaris do you have in Hurghada?' },
  { label: '💰 Transparent Direct Quote', query: 'How do your tour prices, inclusions, and WhatsApp confirmations work?' }
];

export const MahmodChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [speakingId, setSpeakingId] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [messages, isOpen]);

  // Keyboard accessibility: Escape closes modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleSpeak = (id: string, text: string) => {
    if (!('speechSynthesis' in window)) return;

    if (speakingId === id) {
      window.speechSynthesis.cancel();
      setSpeakingId(null);
      return;
    }

    window.speechSynthesis.cancel();
    // Clean markdown before speaking
    const cleanText = text
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .replace(/[*_#`]/g, '')
      .replace(/- /g, '');

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    utterance.onend = () => setSpeakingId(null);
    utterance.onerror = () => setSpeakingId(null);

    setSpeakingId(id);
    window.speechSynthesis.speak(utterance);
  };

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
      const replyText = data.reply || 'I am delighted to help you choose the finest Egyptian tour!';
      const recommendedTours = data.recommendedTours || [];
      const suggestions = data.suggestions || [];

      const modelMsg: ChatMessage = {
        id: `model-${Date.now()}`,
        role: 'model',
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        recommendedTours: recommendedTours.length > 0 ? recommendedTours : undefined,
        suggestions: suggestions.length > 0 ? suggestions : undefined
      };

      setMessages(prev => [...prev, modelMsg]);
    } catch (err) {
      console.warn('Chatbot API request fallback:', err);
      const modelMsg: ChatMessage = {
        id: `model-${Date.now()}`,
        role: 'model',
        text: `Marhaban! I am here to assist you. Our Luxor team is directly available on WhatsApp (**+20 1070335551**) or email (**info@genuineegypte.com**) to provide immediate customized advice on private tours, 5-star Nile cruises, and overland transfers.\n\nWould you like me to recommend our most popular 4-day Nile Cruise or a private Luxor East & West Bank day tour?`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestions: [
          'Which 5-star Nile cruise do you recommend?',
          'What is the best private tour for the Pyramids & Cairo?',
          'Tell me about Dahabiya traditional sailing',
          'Contact team on WhatsApp'
        ]
      };
      setMessages(prev => [...prev, modelMsg]);
    } finally {
      setLoading(false);
    }
  };

  // Build WhatsApp handoff summary from recent conversation
  const generateWhatsAppHandoffUrl = () => {
    const lastUserMsgs = messages.filter(m => m.role === 'user').slice(-3).map(m => `• ${m.text}`).join('\n');
    const note = `Hello Genuine Egypte, I was discussing travel options with Mahmod on your website.\n\nMy inquiry interests:\n${lastUserMsgs || 'General inquiry regarding tours and Nile cruises.'}\n\nPlease share your availability and bespoke quote.`;
    return `https://wa.me/201070335551?text=${encodeURIComponent(note)}`;
  };

  // Markdown renderer for bold, bullet points, and tour links
  const renderFormattedText = (rawText: string) => {
    const lines = rawText.split('\n');
    return lines.map((line, lIdx) => {
      const isBullet = line.trim().startsWith('- ') || line.trim().startsWith('* ');
      const cleanLine = isBullet ? line.trim().slice(2) : line;

      const parts: React.ReactNode[] = [];
      let lastIndex = 0;
      const regex = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
      let match;

      while ((match = regex.exec(cleanLine)) !== null) {
        if (match.index > lastIndex) {
          parts.push(cleanLine.substring(lastIndex, match.index));
        }

        if (match[1] && match[2]) {
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
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2.5 sm:gap-3 p-2.5 sm:px-4 sm:py-3 bg-stone-900 dark:bg-amber-600 text-white rounded-full shadow-2xl hover:bg-stone-800 dark:hover:bg-amber-500 transition-all transform hover:scale-105 group border border-amber-400/40"
        >
          <div className="relative">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center text-stone-950 font-bold font-serif text-sm sm:text-base shadow-sm">
              M
            </div>
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-emerald-500 border-2 border-stone-900 rounded-full animate-pulse" />
          </div>

          <div className="text-left hidden sm:block pr-1">
            <div className="flex items-center gap-1.5">
              <span className="block text-xs font-bold tracking-wide">Ask Mahmod</span>
              <span className="px-1.5 py-0.2 bg-amber-400 text-stone-950 text-[9px] font-bold rounded-xs uppercase">
                Advisor
              </span>
            </div>
            <span className="block text-[11px] text-amber-300 font-medium">Licensed Egyptologist</span>
          </div>

          <Sparkles className="w-4 h-4 text-amber-400 group-hover:rotate-12 transition-transform" />
        </button>
      )}

      {/* Chat Dialog Window */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Mahmod - Egyptian Tour Advisor Concierge"
          className={`fixed z-50 bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-800 shadow-2xl flex flex-col overflow-hidden transition-all duration-300 bottom-2 left-2 right-2 sm:left-auto sm:right-6 sm:bottom-6 w-auto ${
            isExpanded
              ? 'sm:w-[680px] max-h-[94vh] h-[92vh] rounded-2xl'
              : 'sm:w-[440px] max-h-[640px] h-[84vh] rounded-2xl'
          }`}
        >
          {/* Header */}
          <div className="px-5 py-4 bg-[#181512] text-white flex items-center justify-between border-b border-stone-800 shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-600 via-amber-500 to-amber-300 flex items-center justify-center text-stone-950 font-bold font-serif text-lg shadow-md">
                  M
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-[#181512] rounded-full" />
              </div>
              <div>
                <h3 className="font-serif text-base font-bold text-white flex items-center gap-2">
                  <span>Mahmod</span>
                  <span className="text-[10px] uppercase font-sans font-semibold px-1.5 py-0.5 bg-amber-500/20 text-amber-300 rounded-xs border border-amber-500/30">
                    Licensed Egyptologist
                  </span>
                </h3>
                <p className="text-[11px] text-stone-300 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-amber-400" />
                  <span>Luxor Office · Genuine Egypte · 15+ Yrs Experience</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1 text-stone-400">
              {/* Expand / Minimize Window Toggle */}
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                title={isExpanded ? 'Restore window size' : 'Expand full planner view'}
                className="hover:text-white p-1.5 rounded-lg transition-colors"
                aria-label={isExpanded ? 'Restore window size' : 'Expand window size'}
              >
                {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>

              {/* Reset Conversation */}
              <button
                onClick={() => setMessages(INITIAL_MESSAGES)}
                title="Restart conversation"
                className="hover:text-white p-1.5 rounded-lg transition-colors"
                aria-label="Restart conversation"
              >
                <RefreshCw className="w-4 h-4" />
              </button>

              {/* Close Window */}
              <button
                onClick={() => setIsOpen(false)}
                title="Close chat (Esc)"
                className="hover:text-white p-1.5 rounded-lg transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Categories Ribbon */}
          <div className="px-3 py-2 bg-stone-100 dark:bg-stone-800/80 border-b border-stone-200 dark:border-stone-800 flex items-center gap-1.5 overflow-x-auto scrollbar-none shrink-0">
            {QUICK_TOPICS.map((topic, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(topic.query)}
                className="whitespace-nowrap px-2.5 py-1 text-[11px] font-medium rounded-full bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:border-amber-600 dark:hover:border-amber-400 hover:text-amber-800 dark:hover:text-amber-300 transition-colors shrink-0 shadow-2xs"
              >
                {topic.label}
              </button>
            ))}
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
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-600 to-amber-400 text-stone-950 flex items-center justify-center font-serif font-bold text-xs shrink-0 mt-0.5 shadow-xs">
                      M
                    </div>
                  )}

                  <div
                    className={`max-w-[88%] sm:max-w-[82%] rounded-2xl p-4 shadow-xs space-y-3 ${
                      isUser
                        ? 'bg-stone-900 text-white rounded-tr-xs'
                        : 'bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-200 border border-stone-200/90 dark:border-stone-700/80 rounded-tl-xs'
                    }`}
                  >
                    {isUser ? (
                      <p className="whitespace-pre-wrap">{msg.text}</p>
                    ) : (
                      <>
                        <div className="space-y-1.5">{renderFormattedText(msg.text)}</div>

                        {/* Interactive Tour Recommendation Cards */}
                        {msg.recommendedTours && msg.recommendedTours.length > 0 && (
                          <div className="pt-2 border-t border-stone-100 dark:border-stone-700/60 space-y-2.5">
                            <span className="text-[11px] font-semibold text-amber-800 dark:text-amber-400 uppercase tracking-wider block">
                              Recommended Itineraries:
                            </span>

                            <div className="grid grid-cols-1 gap-2.5">
                              {msg.recommendedTours.map((tour) => (
                                <div
                                  key={tour.id || tour.slug}
                                  className="bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-lg p-2.5 flex items-center gap-3 group hover:border-amber-500 transition-colors"
                                >
                                  {/* Tour Image */}
                                  <div className="w-16 h-16 rounded-md overflow-hidden bg-stone-200 dark:bg-stone-800 shrink-0">
                                    <OptimizedImage
                                      src={tour.mainImage}
                                      alt={tour.title}
                                      sizes="70px"
                                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                                    />
                                  </div>

                                  {/* Details */}
                                  <div className="flex-1 min-w-0 space-y-1">
                                    <div className="flex items-center gap-1.5 text-[10px] text-stone-500 dark:text-stone-400">
                                      <span className="flex items-center gap-0.5">
                                        <MapPin className="w-3 h-3 text-amber-700 dark:text-amber-400" />
                                        <span>{tour.destination}</span>
                                      </span>
                                      <span>·</span>
                                      <span className="flex items-center gap-0.5">
                                        <Clock className="w-3 h-3 text-stone-400" />
                                        <span>{tour.duration}</span>
                                      </span>
                                    </div>

                                    <h4 className="font-serif font-bold text-xs text-stone-900 dark:text-stone-100 truncate group-hover:text-amber-700 dark:group-hover:text-amber-400">
                                      <Link to={`/booking/${tour.slug}/`}>{tour.title}</Link>
                                    </h4>

                                    {tour.priceNote && (
                                      <p className="text-[10px] text-amber-800 dark:text-amber-400 font-medium truncate">
                                        {tour.priceNote}
                                      </p>
                                    )}

                                    <div className="flex flex-wrap items-center gap-2 pt-0.5">
                                      <Link
                                        to={`/booking/${tour.slug}/`}
                                        className="text-[11px] font-semibold text-stone-800 dark:text-stone-200 hover:text-amber-700 dark:hover:text-amber-400 inline-flex items-center gap-0.5"
                                      >
                                        <span>View Program</span>
                                        <ArrowRight className="w-3 h-3" />
                                      </Link>

                                      <button
                                        type="button"
                                        onClick={() => handleSend(`Tell me more about "${tour.title}" — what are the highlights, full schedule, and pricing?`)}
                                        className="text-[10px] font-semibold text-amber-800 dark:text-amber-300 hover:text-amber-950 dark:hover:text-amber-100 inline-flex items-center gap-1 bg-amber-100/70 dark:bg-amber-950/60 px-2 py-0.5 rounded-xs transition-colors"
                                      >
                                        <Sparkles className="w-2.5 h-2.5 text-amber-600 dark:text-amber-400" />
                                        <span>Ask Mahmod</span>
                                      </button>

                                      <a
                                        href={`https://wa.me/201070335551?text=${encodeURIComponent(`Hello Mahmod, I am inquiring about "${tour.title}" (https://genuineegypte.com/booking/${tour.slug}/). Please share availability and seasonal rates.`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[10px] font-medium text-emerald-700 dark:text-emerald-400 hover:underline inline-flex items-center gap-0.5 ml-auto"
                                      >
                                        <Phone className="w-2.5 h-2.5" />
                                        <span>WhatsApp</span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Dynamic Interactive Suggestion Chips */}
                        {msg.suggestions && msg.suggestions.length > 0 && !loading && (
                          <div className="pt-2 border-t border-stone-100 dark:border-stone-700/60 space-y-1.5">
                            <span className="text-[10px] uppercase font-semibold tracking-wider text-stone-400 dark:text-stone-500 block">
                              Suggested questions:
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                              {msg.suggestions.map((suggestion, sIdx) => (
                                <button
                                  key={sIdx}
                                  type="button"
                                  onClick={() => handleSend(suggestion)}
                                  className="text-left text-[11px] bg-amber-50 hover:bg-amber-100 dark:bg-amber-950/40 dark:hover:bg-amber-900/60 text-amber-900 dark:text-amber-200 border border-amber-200/80 dark:border-amber-800/60 rounded-full px-2.5 py-1 transition-all hover:scale-[1.02] active:scale-[0.98] leading-tight"
                                >
                                  {suggestion}
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </>
                    )}

                    {/* Bubble Metadata & Action Utilities */}
                    <div className="flex items-center justify-between text-[10px] pt-1 text-stone-400 dark:text-stone-500 border-t border-stone-100 dark:border-stone-700/40">
                      <span>{msg.timestamp}</span>

                      {!isUser && (
                        <div className="flex items-center gap-2">
                          {/* Listen / Voice feedback */}
                          <button
                            onClick={() => handleSpeak(msg.id, msg.text)}
                            title={speakingId === msg.id ? 'Stop listening' : 'Listen to Mahmod'}
                            className="hover:text-stone-700 dark:hover:text-stone-300 p-0.5 transition-colors"
                            aria-label="Listen to Mahmod"
                          >
                            {speakingId === msg.id ? (
                              <VolumeX className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
                            ) : (
                              <Volume2 className="w-3.5 h-3.5" />
                            )}
                          </button>

                          {/* Copy to Clipboard */}
                          <button
                            onClick={() => handleCopy(msg.id, msg.text)}
                            title="Copy recommendation"
                            className="hover:text-stone-700 dark:hover:text-stone-300 p-0.5 transition-colors"
                            aria-label="Copy recommendation"
                          >
                            {copiedId === msg.id ? (
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Loading Indicator */}
            {loading && (
              <div className="flex gap-2.5 items-center text-xs text-stone-500 dark:text-stone-400">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-600 to-amber-400 text-stone-950 flex items-center justify-center font-serif font-bold text-xs shrink-0 shadow-xs">
                  M
                </div>
                <div className="bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-2xl px-4 py-3 flex items-center gap-2 shadow-xs">
                  <span className="w-1.5 h-1.5 bg-amber-600 rounded-full animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-1.5 h-1.5 bg-amber-600 rounded-full animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-1.5 h-1.5 bg-amber-600 rounded-full animate-bounce" />
                  <span className="text-[11px] ml-1.5 text-stone-600 dark:text-stone-300 font-medium">
                    Mahmod is matching tours & calculating details...
                  </span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* WhatsApp Escalation Banner (when user has sent messages) */}
          {messages.length > 2 && (
            <div className="px-4 py-2 bg-amber-50/70 dark:bg-amber-950/40 border-t border-amber-200 dark:border-amber-800/40 flex items-center justify-between text-xs shrink-0">
              <span className="text-amber-950 dark:text-amber-300 font-medium text-[11px] flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400" />
                <span>Ready to secure dates or request a private proposal?</span>
              </span>
              <a
                href={generateWhatsAppHandoffUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-500 text-white rounded-md font-semibold text-[10px] inline-flex items-center gap-1 transition-colors shadow-2xs"
              >
                <Phone className="w-3 h-3" />
                <span>Transfer to WhatsApp</span>
              </a>
            </div>
          )}

          {/* Input Footer */}
          <div className="p-3 bg-white dark:bg-stone-900 border-t border-stone-200 dark:border-stone-800 space-y-2 shrink-0">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                placeholder="Ask about Nile cruises, balloon rides, prices, or destinations..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={loading}
                className="flex-1 px-4 py-2.5 text-xs sm:text-sm bg-stone-50 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-xl focus:outline-none focus:ring-1 focus:ring-amber-500 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-500 transition-colors"
              />
              <button
                type="submit"
                disabled={!input.trim() || loading}
                aria-label="Send message to Mahmod"
                className="p-2.5 bg-stone-900 dark:bg-amber-600 hover:bg-stone-800 dark:hover:bg-amber-500 disabled:opacity-40 text-white rounded-xl transition-all shadow-xs shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

            <div className="flex items-center justify-between text-[10px] text-stone-400 dark:text-stone-500 pt-0.5 px-1">
              <span>297 Authentic Egyptian Programs · Zero Online Deduction</span>
              <a
                href={SITE_SETTINGS.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 dark:text-emerald-400 hover:underline font-semibold inline-flex items-center gap-1"
              >
                <Phone className="w-2.5 h-2.5" />
                <span>Direct Hotline: {SITE_SETTINGS.primaryPhone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
