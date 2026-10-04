import React, { useState } from 'react';
import { X, MessageCircle, Mail, Copy, Check, Clock, ShieldCheck, MapPin, Send, Loader2, CheckCircle2, Phone } from 'lucide-react';
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
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [travelers, setTravelers] = useState('2');
  const [notes, setNotes] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedBookingId, setSubmittedBookingId] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const tourTitle = tour?.title || 'Tailor-Made Egyptian Travel Itinerary';
  const tourSlug = tour?.slug || '';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setSubmitError('Please enter your full name.');
      return;
    }
    if (!email.trim() && !phone.trim()) {
      setSubmitError('Please provide an email address or phone number so our team can reach you.');
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          tourTitle,
          tourSlug,
          date,
          travelers,
          notes: notes.trim(),
          source: tour ? `Tour Modal: ${tour.title}` : 'Direct Website Inquiry'
        })
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setSubmittedBookingId(data.bookingId || `GE-${Date.now().toString(36).toUpperCase()}`);
      } else {
        setSubmitError(data.error || 'Failed to submit booking inquiry. Please try again or reach out on WhatsApp.');
      }
    } catch (err: any) {
      setSubmitError('Network error while sending inquiry. Please try WhatsApp or email directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    const url = buildWhatsAppInquiryUrl({
      tourTitle,
      tourSlug,
      date,
      travelers,
      notes: name ? `Guest: ${name} (${email || phone}). ${notes}` : notes
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
      notes: `${notes}\nEmail: ${email}\nPhone: ${phone}`
    });
    window.location.href = url;
  };

  const handleCopy = () => {
    const text = `Booking Inquiry for: ${tourTitle}\nLink: https://genuineegypte.com/booking/${tourSlug}/\nTraveler Name: ${name || 'N/A'}\nEmail: ${email || 'N/A'}\nPhone: ${phone || 'N/A'}\nPreferred Date: ${date || 'Flexible'}\nNumber of Travelers: ${travelers}\nNotes/Requests: ${notes || 'Please provide seasonal pricing and availability.'}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const resetForm = () => {
    setSubmittedBookingId(null);
    setSubmitError(null);
    setName('');
    setEmail('');
    setPhone('');
    setDate('');
    setNotes('');
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
        <div className="bg-[#181512] text-white px-6 py-5 flex items-center justify-between border-b border-amber-900/40">
          <div>
            <span className="text-[11px] uppercase tracking-wider text-amber-400 font-medium block">
              Direct Travel Reservation & Inquiry
            </span>
            <h2 id="inquiry-modal-title" className="text-lg font-serif font-bold text-white tracking-wide truncate max-w-sm">
              {tour ? tour.title : 'Tailor-Made Tour Inquiry'}
            </h2>
          </div>
          <button
            onClick={() => {
              resetForm();
              onClose();
            }}
            className="text-stone-400 hover:text-white p-1 rounded-md transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 max-h-[78vh] overflow-y-auto">
          {submittedBookingId ? (
            /* Success State */
            <div className="space-y-5 py-4 text-center">
              <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-1.5">
                <h3 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100">
                  Inquiry Dispatched Successfully!
                </h3>
                <p className="text-xs text-stone-600 dark:text-stone-300 max-w-sm mx-auto leading-relaxed">
                  Your booking request has been sent automatically to our email (<strong className="text-amber-800 dark:text-amber-400 font-medium">info@genuineegypte.com</strong>) and our team’s <strong>Telegram dispatch bot</strong>.
                </p>
              </div>

              <div className="p-3.5 bg-stone-50 dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700 rounded-lg text-xs space-y-1 text-left">
                <div className="flex justify-between items-center text-stone-500 dark:text-stone-400">
                  <span>Booking Reference:</span>
                  <span className="font-mono font-bold text-stone-900 dark:text-stone-100">{submittedBookingId}</span>
                </div>
                <div className="flex justify-between items-center text-stone-500 dark:text-stone-400">
                  <span>Guest Name:</span>
                  <span className="font-medium text-stone-800 dark:text-stone-200">{name}</span>
                </div>
                {email && (
                  <div className="flex justify-between items-center text-stone-500 dark:text-stone-400">
                    <span>Email:</span>
                    <span className="font-medium text-stone-800 dark:text-stone-200">{email}</span>
                  </div>
                )}
                {tour && (
                  <div className="flex justify-between items-center text-stone-500 dark:text-stone-400">
                    <span>Program:</span>
                    <span className="font-medium text-stone-800 dark:text-stone-200 truncate max-w-[200px]">{tour.title}</span>
                  </div>
                )}
              </div>

              <div className="space-y-2 pt-2">
                <a
                  href={buildWhatsAppInquiryUrl({
                    tourTitle,
                    tourSlug,
                    date,
                    travelers,
                    notes: `Inquiry #${submittedBookingId} from ${name}. Please check Telegram/email for details.`
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white py-2.5 px-4 rounded-lg font-medium text-sm transition-colors shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Also Chat with Us on WhatsApp (Instant)</span>
                </a>

                <button
                  type="button"
                  onClick={() => {
                    resetForm();
                    onClose();
                  }}
                  className="w-full py-2 px-4 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 rounded-lg text-xs font-semibold transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            /* Booking Inquiry Form */
            <form onSubmit={handleSubmit} className="space-y-4">
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

              {submitError && (
                <div className="p-3 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 rounded-lg text-xs text-rose-700 dark:text-rose-300">
                  {submitError}
                </div>
              )}

              {/* Guest Name */}
              <div>
                <label htmlFor="traveler-name" className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">
                  Your Full Name <span className="text-amber-700">*</span>
                </label>
                <input
                  id="traveler-name"
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-stone-300 dark:border-stone-700 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-500"
                />
              </div>

              {/* Email & Phone Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="traveler-email" className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">
                    Email Address <span className="text-amber-700">*</span>
                  </label>
                  <input
                    id="traveler-email"
                    type="email"
                    required
                    placeholder="sarah@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-stone-300 dark:border-stone-700 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-500"
                  />
                </div>
                <div>
                  <label htmlFor="traveler-phone" className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">
                    WhatsApp / Phone
                  </label>
                  <input
                    id="traveler-phone"
                    type="tel"
                    placeholder="+1 555-0199"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-stone-300 dark:border-stone-700 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-500"
                  />
                </div>
              </div>

              {/* Date & Travelers Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="travel-date" className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">
                    Preferred Date
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
                    <option value="3-4 Travelers (Family / Small Group)">3-4 Travelers (Family / Small Group)</option>
                    <option value="5-8 Travelers (Private Group)">5-8 Travelers</option>
                    <option value="9+ Travelers (Large Party)">9+ Travelers</option>
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label htmlFor="travel-notes" className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">
                  Questions, Hotel Pickup or Dietary Requests
                </label>
                <textarea
                  id="travel-notes"
                  rows={3}
                  placeholder="Tell us your accommodation in Luxor/Cairo, flight details, preferred guide language, or dietary requirements..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-stone-300 dark:border-stone-700 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-500 resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-1">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-amber-700 hover:bg-amber-800 text-white py-3 px-4 rounded-lg font-medium text-sm transition-colors shadow-sm disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending to Email & Telegram...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Booking Inquiry</span>
                    </>
                  )}
                </button>
              </div>

              {/* Alternative Instant Channels */}
              <div className="pt-2 border-t border-stone-200 dark:border-stone-800 space-y-2">
                <span className="text-[11px] text-stone-500 dark:text-stone-400 block text-center">
                  Or reach us instantly via direct channels:
                </span>
                
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="flex items-center justify-center gap-1.5 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#128C7E] dark:text-[#25D366] border border-[#25D366]/30 py-2 px-3 rounded-lg font-medium text-xs transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopy}
                    className="flex items-center justify-center gap-1.5 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 py-2 px-3 rounded-lg font-medium text-xs transition-colors border border-stone-200 dark:border-stone-700"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                        <span className="text-emerald-700 dark:text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-stone-500 dark:text-stone-400" />
                        <span>Copy Details</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Trust Notice */}
              <div className="p-3 bg-amber-50/70 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-800/60 rounded-lg text-xs text-amber-900/90 dark:text-amber-300 flex gap-2.5">
                <ShieldCheck className="w-4 h-4 text-amber-700 dark:text-amber-500 shrink-0 mt-0.5" />
                <div className="space-y-0.5 leading-relaxed">
                  <strong className="block text-amber-950 dark:text-amber-200 font-semibold">Direct Egyptologist Response</strong>
                  <p>
                    Every inquiry is automatically sent to our office email ({SITE_SETTINGS.primaryEmail}) and our Telegram dispatch bot. No prepayment required upfront.
                  </p>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
