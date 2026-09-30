import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOHead } from '../components/SEOHead';
import { SITE_SETTINGS, buildWhatsAppInquiryUrl, buildMailtoInquiryUrl } from '../data/siteSettings';
import { MapPin, Phone, Mail, MessageCircle, Clock, ShieldCheck, Send } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [travelers, setTravelers] = useState('2');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = buildMailtoInquiryUrl({
      tourTitle: 'Custom Egyptian Itinerary Inquiry',
      name,
      date: travelDate,
      travelers,
      notes: `Email: ${email}\nPhone: ${phone}\nMessage: ${message}`
    });
    setSubmitted(true);
    window.location.href = mailto;
  };

  const handleWhatsAppDirect = () => {
    const url = buildWhatsAppInquiryUrl({
      tourTitle: 'General Travel Inquiry',
      date: travelDate,
      travelers,
      notes: name ? `From: ${name} (${email || phone}). ${message}` : message
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <SEOHead
        title="Contact Genuine Egypte – Luxor Office, Telephone & WhatsApp"
        description="Get in touch with Genuine Egypte in Luxor, Egypt. Contact our team at 44 Khaled Ibn Al Waleed Street, call +20 1033801083, or inquire via WhatsApp."
        canonicalPath="/contact"
      />

      <div className="bg-[#FAF8F5] dark:bg-[#121110] min-h-screen py-8 text-stone-800 dark:text-stone-100 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <Breadcrumbs items={[{ label: 'Contact Us' }]} />

          {/* Header */}
          <div className="space-y-3 border-b border-stone-200 dark:border-stone-800 pb-6">
            <span className="text-xs font-semibold text-amber-800 dark:text-amber-400 uppercase tracking-widest font-serif block">
              Direct Traveler Assistance
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 dark:text-stone-100 tracking-tight">
              Contact Genuine Egypte
            </h1>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 max-w-2xl leading-relaxed">
              Have questions about booking a private Nile cruise, custom temple excursion, or intercity transfer? Speak directly with our licensed team in Luxor.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Contact Information & Channels (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl p-6 sm:p-8 space-y-6 shadow-xs">
                <h2 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100 border-b border-stone-100 dark:border-stone-800 pb-3">
                  Authoritative Contact Details
                </h2>

                <div className="space-y-4 text-xs">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-amber-50 text-amber-800 rounded-md shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block text-stone-900 font-serif text-sm">Luxor Office</strong>
                      <span className="text-stone-600 leading-relaxed block mt-0.5">
                        {SITE_SETTINGS.address}, {SITE_SETTINGS.city}, {SITE_SETTINGS.country}
                      </span>
                      <span className="text-[11px] text-stone-400 block mt-0.5">
                        Close to the Nile Corniche & Luxor Temple
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-emerald-50 text-emerald-800 rounded-md shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block text-stone-900 font-serif text-sm">Direct Telephones</strong>
                      <a href="tel:+201033801083" className="text-stone-700 hover:text-amber-800 block mt-0.5 font-medium">
                        +20 1033801083 (Primary & WhatsApp)
                      </a>
                      <a href="tel:+201022721263" className="text-stone-700 hover:text-amber-800 block mt-0.5 font-medium">
                        +20 1022721263 (Secondary Line)
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-stone-100 text-stone-800 rounded-md shrink-0 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block text-stone-900 font-serif text-sm">Email Inquiries</strong>
                      <a href="mailto:info@genuineegypte.com" className="text-stone-700 hover:text-amber-800 block mt-0.5">
                        info@genuineegypte.com
                      </a>
                      <a href="mailto:sales@genuineegypte.com" className="text-stone-700 hover:text-amber-800 block mt-0.5">
                        sales@genuineegypte.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-amber-50 text-amber-800 rounded-md shrink-0 mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block text-stone-900 font-serif text-sm">Working Hours</strong>
                      <span className="text-stone-600 block mt-0.5">
                        Concierge desk operates 24/7 for travelers currently in Egypt.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Instant WhatsApp Card */}
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg text-xs space-y-3">
                  <div className="flex items-center gap-2 text-emerald-950 font-bold font-serif">
                    <MessageCircle className="w-4 h-4 fill-emerald-600 text-emerald-600" />
                    <span>Fastest Response via WhatsApp</span>
                  </div>
                  <p className="text-emerald-900/80 leading-relaxed">
                    Planning a trip or needing an immediate airport transfer? Our operations team answers on WhatsApp within minutes.
                  </p>
                  <a
                    href={SITE_SETTINGS.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-md font-semibold text-xs transition-colors shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Open WhatsApp Chat (+20 1033801083)</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Inquiry Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 space-y-6 shadow-xs">
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-wider text-amber-800 font-semibold font-serif block">
                    Direct Traveler Form
                  </span>
                  <h2 className="font-serif text-2xl font-bold text-stone-900">
                    Send Us Your Itinerary Request
                  </h2>
                  <p className="text-xs text-stone-500">
                    Fill out your travel preferences below. You can send this inquiry directly through your email client or via WhatsApp.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-stone-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="e.g. John Miller"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3 py-2 text-xs sm:text-sm border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-stone-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="e.g. john@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 text-xs sm:text-sm border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-semibold text-stone-700 mb-1">
                        Phone / WhatsApp Number
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        placeholder="e.g. +1 555 123 4567"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3 py-2 text-xs sm:text-sm border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-travelers" className="block text-xs font-semibold text-stone-700 mb-1">
                        Number of Travelers
                      </label>
                      <select
                        id="contact-travelers"
                        value={travelers}
                        onChange={(e) => setTravelers(e.target.value)}
                        className="w-full px-3 py-2 text-xs sm:text-sm border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500 bg-white"
                      >
                        <option value="1 Solo Traveler">1 Solo Traveler</option>
                        <option value="2 Travelers (Couple)">2 Travelers (Couple)</option>
                        <option value="3-4 Travelers (Small Group)">3-4 Travelers</option>
                        <option value="5-8 Travelers">5-8 Travelers</option>
                        <option value="9+ Travelers">9+ Travelers</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-date" className="block text-xs font-semibold text-stone-700 mb-1">
                      Estimated Travel Date / Arrival in Egypt
                    </label>
                    <input
                      id="contact-date"
                      type="date"
                      value={travelDate}
                      onChange={(e) => setTravelDate(e.target.value)}
                      className="w-full px-3 py-2 text-xs sm:text-sm border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-stone-700 mb-1">
                      Your Travel Plans, Destinations or Questions *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      placeholder="Please let us know which tours, Nile cruises, or transfers you would like to arrange, your hotel in Luxor or Cairo, or any custom wishes..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-3 py-2 text-xs sm:text-sm border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500 resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 py-3 px-5 bg-stone-900 hover:bg-stone-800 text-white font-medium text-xs rounded-lg transition-colors flex items-center justify-center gap-2 shadow-xs"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send via Email Application</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="py-3 px-5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium text-xs rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-current" />
                      <span>Send via WhatsApp</span>
                    </button>
                  </div>
                </form>

                {submitted && (
                  <div className="p-3 bg-emerald-50 text-emerald-900 rounded-md text-xs border border-emerald-200">
                    Your inquiry has been formulated and opened in your email client. If your client did not launch, please send directly to <strong>info@genuineegypte.com</strong> or message us on WhatsApp!
                  </div>
                )}

                <div className="pt-4 border-t border-stone-100 flex items-start gap-2 text-xs text-stone-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <p>
                    Genuine Egypte is a licensed local Egyptian travel provider. We respect your privacy and never distribute your contact details to third parties.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
