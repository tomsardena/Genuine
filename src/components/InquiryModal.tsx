import React, { useState } from 'react';
import { X, MessageCircle, Mail, Copy, Check, Clock, ShieldCheck, MapPin } from 'lucide-react';
import { SITE_SETTINGS, buildWhatsAppInquiryUrl, buildMailtoInquiryUrl } from '../data/siteSettings';
import { TourItem } from '../data/tours';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  tour?: TourItem;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  tour
}) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [travelers, setTravelers] = useState('2');
  const [notes, setNotes] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const tourTitle = tour?.title || 'Custom Egypt Travel Itinerary';
  const tourSlug = tour?.slug || '';

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    const url = buildWhatsAppInquiryUrl({
      tourTitle,
      tourSlug,
      date,
      travelers,
      notes: name ? `Guest: ${name}. ${notes}` : notes
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    const url = buildMailtoInquiryUrl({
      tourTitle,
      tourSlug,
      date,
      travelers,
      name,
      notes
    });
    window.location.href = url;
  };

  const handleCopy = () => {
    const text = `Inquiry for: ${tourTitle}\nLink: https://genuineegypte.com/booking/${tourSlug}/\nTraveler Name: ${name || 'N/A'}\nPreferred Date: ${date || 'Flexible'}\nNumber of Travelers: ${travelers}\nNotes/Questions: ${notes || 'Please provide seasonal pricing and availability.'}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 dark:bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-100 rounded-xl shadow-2xl max-w-lg w-full overflow-hidden border border-stone-200 dark:border-stone-800 transition-all transform animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="inquiry-modal-title"
      >
        {/* Header */}
        <div className="bg-[#181512] text-white px-6 py-5 flex items-center justify-between">
          <div>
            <span className="text-[11px] uppercase tracking-wider text-amber-400 font-medium block">
              Direct Travel Inquiry
            </span>
            <h2 id="inquiry-modal-title" className="text-lg font-serif font-bold text-white tracking-wide truncate max-w-sm">
              {tour ? tour.title : 'Tailor-Made Tour Inquiry'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-stone-400 hover:text-white p-1 rounded-md transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
          {tour && (
            <div className="p-3 bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700 rounded-lg text-xs space-y-1">
              <div className="flex items-center gap-2 text-stone-600 dark:text-stone-300">
                <MapPin className="w-3.5 h-3.5 text-amber-700 dark:text-amber-500" />
                <span>Destination: <strong className="text-stone-800 dark:text-stone-100">{tour.destination}</strong></span>
                <span className="text-stone-300 dark:text-stone-600">·</span>
                <Clock className="w-3.5 h-3.5 text-amber-700 dark:text-amber-500" />
                <span>Duration: <strong className="text-stone-800 dark:text-stone-100">{tour.duration}</strong></span>
              </div>
              <p className="text-stone-500 dark:text-stone-400 line-clamp-1 italic">{tour.shortDescription}</p>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="traveler-name" className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">
                Your Full Name
              </label>
              <input
                id="traveler-name"
                type="text"
                placeholder="e.g. Sarah Jenkins"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-stone-300 dark:border-stone-700 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-500"
              />
            </div>
            <div>
              <label htmlFor="traveler-count" className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">
                Number of Travelers
              </label>
              <select
                id="traveler-count"
                value={travelers}
                onChange={(e) => setTravelers(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-stone-300 dark:border-stone-700 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100"
              >
                <option value="1 Traveler (Solo)">1 Traveler (Solo)</option>
                <option value="2 Travelers (Couple)">2 Travelers (Couple)</option>
                <option value="3-4 Travelers (Small Group)">3-4 Travelers (Family / Small Group)</option>
                <option value="5-8 Travelers (Private Group)">5-8 Travelers</option>
                <option value="9+ Travelers (Large Party)">9+ Travelers</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="travel-date" className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">
              Preferred Tour / Embarkation Date
            </label>
            <input
              id="travel-date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-stone-300 dark:border-stone-700 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100"
            />
          </div>

          <div>
            <label htmlFor="travel-notes" className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">
              Questions, Special Requests or Hotel Pickup Details
            </label>
            <textarea
              id="travel-notes"
              rows={3}
              placeholder="Tell us your accommodation (hotel/ship in Luxor or Cairo), airport flight details, preferred guide language, or dietary requirements..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-stone-300 dark:border-stone-700 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-500 resize-none"
            />
          </div>

          {/* Inquiry buttons */}
          <div className="space-y-2 pt-2">
            <button
              onClick={handleWhatsApp}
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white py-2.5 px-4 rounded-lg font-medium text-sm transition-colors shadow-xs"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Inquire via WhatsApp (Instant Reply)</span>
            </button>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={handleEmail}
                className="flex items-center justify-center gap-2 bg-stone-900 dark:bg-amber-600 hover:bg-stone-800 dark:hover:bg-amber-500 text-white py-2 px-3 rounded-lg font-medium text-xs transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Open in Email</span>
              </button>

              <button
                onClick={handleCopy}
                className="flex items-center justify-center gap-2 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-200 py-2 px-3 rounded-lg font-medium text-xs transition-colors border border-stone-200 dark:border-stone-700"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-emerald-700 dark:text-emerald-400 font-semibold">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-stone-500 dark:text-stone-400" />
                    <span>Copy Inquiry Text</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Trust Notice */}
          <div className="p-3 bg-amber-50/70 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-800/60 rounded-lg text-xs text-amber-900/90 dark:text-amber-300 flex gap-2.5">
            <ShieldCheck className="w-4 h-4 text-amber-700 dark:text-amber-500 shrink-0 mt-0.5" />
            <div className="space-y-0.5 leading-relaxed">
              <strong className="block text-amber-950 dark:text-amber-200 font-semibold">100% Static & Direct Communication</strong>
              <p>
                No online charges or automated reservations are processed here. You will communicate directly with Genuine Egypte’s licensed Egyptologist coordination office in Luxor ({SITE_SETTINGS.primaryPhone}) to finalize customized pricing and arrangements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
