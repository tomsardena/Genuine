import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOHead } from '../components/SEOHead';
import { SITE_SETTINGS } from '../data/siteSettings';

export const PrivacyPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Privacy Policy – Genuine Egypte"
        description="Privacy policy and data handling principles for Genuine Egypte."
        canonicalPath="/privacy-policy"
      />

      <div className="bg-[#FAF8F5] dark:bg-[#121110] min-h-screen py-8 text-stone-800 dark:text-stone-100 transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-8">
          <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

          <div className="border-b border-stone-200 dark:border-stone-800 pb-6 space-y-2">
            <span className="text-xs font-semibold text-amber-800 dark:text-amber-400 uppercase tracking-widest font-serif block">
              Data Protection & Privacy
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 dark:text-stone-100 tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-xs text-stone-500 dark:text-stone-400">
              Genuine Egypte · Static Architecture Privacy Commitment
            </p>
          </div>

          <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl p-6 sm:p-10 space-y-8 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
            <section className="space-y-3">
              <h2 className="font-serif text-base sm:text-lg font-bold text-stone-900">
                1. Pure Static Site Architecture
              </h2>
              <p>
                The Genuine Egypte website is engineered as a pure, privacy-first static web application. We do not maintain any user database, server-side tracking, user registration, or backend customer profiles. No personal information or credit card numbers are ever stored on our servers.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-base sm:text-lg font-bold text-stone-900">
                2. Information You Voluntarily Provide
              </h2>
              <p>
                When you contact Genuine Egypte via WhatsApp or email (such as requesting availability for a Nile cruise or tour), you voluntarily provide information such as your name, travel dates, passenger count, and accommodation preferences. This information is used strictly by our licensed Luxor coordinators to arrange your tour.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-base sm:text-lg font-bold text-stone-900">
                3. Third-Party Disclosures
              </h2>
              <p>
                We do not sell, rent, or trade your contact information to any third parties or marketing networks. Information is only shared with essential Egyptian tourism suppliers (e.g., your designated licensed cruise boat or licensed tourist driver) strictly for operational fulfillment.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-base sm:text-lg font-bold text-stone-900">
                4. Cookies & Local Storage
              </h2>
              <p>
                This website does not use tracking cookies, advertising pixels, or telemetry beacons.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-base sm:text-lg font-bold text-stone-900">
                5. Contact Regarding Your Data
              </h2>
              <p>
                If you have questions about your privacy or wish to request the deletion of past correspondence, please email us directly at <strong>{SITE_SETTINGS.primaryEmail}</strong> or write to Genuine Egypte, {SITE_SETTINGS.address}, {SITE_SETTINGS.city}, Egypt.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
