import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOHead } from '../components/SEOHead';
import { SITE_SETTINGS } from '../data/siteSettings';

export const TermsPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Terms & Conditions – Genuine Egypte"
        description="Terms and conditions for booking private tours, Nile cruises, and transfer services with Genuine Egypte."
        canonicalPath="/terms-conditions"
      />

      <div className="bg-[#FAF8F5] min-h-screen py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-8">
          <Breadcrumbs items={[{ label: 'Terms & Conditions' }]} />

          <div className="border-b border-stone-200 pb-6 space-y-2">
            <span className="text-xs font-semibold text-amber-800 uppercase tracking-widest font-serif block">
              Legal & Booking Terms
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
              Terms & Conditions
            </h1>
            <p className="text-xs text-stone-500">
              Last updated: September 2026 · Genuine Egypte, Luxor, Egypt
            </p>
          </div>

          <div className="bg-white border border-stone-200 rounded-xl p-6 sm:p-10 space-y-8 text-xs sm:text-sm text-stone-700 leading-relaxed">
            <section className="space-y-3">
              <h2 className="font-serif text-base sm:text-lg font-bold text-stone-900">
                1. Booking & Inquiries
              </h2>
              <p>
                Genuine Egypte provides bespoke private sightseeing tours, luxury Nile cruises, hot air balloon flights, and transfer arrangements throughout Egypt. Submitting an inquiry through this website (via WhatsApp or email) creates a preliminary request and does not constitute a binding contract until itinerary details, dates, and terms are confirmed directly with our team.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-base sm:text-lg font-bold text-stone-900">
                2. Pricing & Currency
              </h2>
              <p>
                All official quotes provided by Genuine Egypte are quoted in US Dollars ($ USD) or Euros (€ EUR) unless specifically requested in Egyptian Pounds (EGP). Seasonal surcharges may apply during peak holiday periods (Christmas, New Year, and Easter).
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-base sm:text-lg font-bold text-stone-900">
                3. Payment Methods
              </h2>
              <p>
                No online credit card payments are processed directly through this website. Depending on the booked service (such as Nile cruise cabin reservations requiring advance vessel deposits), payment may be arranged via secure international bank wire transfer, or settled upon arrival in Luxor/Cairo as agreed in writing.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-base sm:text-lg font-bold text-stone-900">
                4. Cancellations & Amendments
              </h2>
              <p>
                We understand that international travel plans can change. For day tours and private transfers, cancellations made more than 48 hours prior to scheduled departure receive a full refund or free rescheduling. For Nile cruises, cancellation policies are governed by the specific cruise ship line (e.g. Royal Ruby or Nile Premium) and will be clearly detailed in your booking confirmation.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-base sm:text-lg font-bold text-stone-900">
                5. Travel Insurance & Health
              </h2>
              <p>
                Travelers are strongly advised to obtain comprehensive international travel and medical insurance covering trip cancellation, medical repatriation, and baggage loss.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-base sm:text-lg font-bold text-stone-900">
                6. Contact for Disputes
              </h2>
              <p>
                Genuine Egypte operates under Egyptian Ministry of Tourism regulations. For any questions regarding your reservation or service, contact our headquarters at {SITE_SETTINGS.address}, {SITE_SETTINGS.city}, Egypt, or email {SITE_SETTINGS.primaryEmail}.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
