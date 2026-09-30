import React, { useState } from 'react';
import { FAQS_DATA } from '../data/faqs';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOHead } from '../components/SEOHead';
import { ChevronDown, Search, HelpCircle, MessageCircle } from 'lucide-react';
import { SITE_SETTINGS } from '../data/siteSettings';

export const FaqsPage: React.FC = () => {
  const [selectedCat, setSelectedCat] = useState<string>('all');
  const [search, setSearch] = useState<string>('');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = [
    { label: 'All Questions', value: 'all' },
    { label: 'Booking & Inquiries', value: 'booking' },
    { label: 'Nile Cruises', value: 'cruises' },
    { label: 'Private Transfers', value: 'transfers' },
    { label: 'General & Guides', value: 'general' },
    { label: 'Practical Advice & Visas', value: 'practical' }
  ];

  const filteredFaqs = FAQS_DATA.filter((faq) => {
    const matchesCat = selectedCat === 'all' || faq.category === selectedCat;
    const matchesSearch =
      search.trim() === '' ||
      faq.question.toLowerCase().includes(search.toLowerCase()) ||
      faq.answer.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <>
      <SEOHead
        title="Frequently Asked Questions & Egypt Travel Guide – Genuine Egypte"
        description="Comprehensive answers about booking private tours in Egypt, Nile cruise inclusions, Egyptian tourist visas, tipping customs, and transfer services."
        canonicalPath="/faqs"
      />

      <div className="bg-[#FAF8F5] dark:bg-[#121110] min-h-screen py-8 text-stone-800 dark:text-stone-100 transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-10">
          <Breadcrumbs items={[{ label: 'Travel FAQs' }]} />

          <div className="space-y-3 border-b border-stone-200 dark:border-stone-800 pb-6 text-center sm:text-left">
            <span className="text-xs font-semibold text-amber-800 dark:text-amber-400 uppercase tracking-widest font-serif block">
              Travel Advice & Guidance
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 dark:text-stone-100 tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 max-w-2xl leading-relaxed">
              Find answers regarding Nile cruises, private temple tours, booking without upfront online charges, and traveling comfortably in Egypt.
            </p>
          </div>

          {/* Search & Categories */}
          <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg p-5 space-y-4 shadow-xs">
            <div className="relative">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search FAQs (e.g. visa, cruise dining, tips, vehicles)..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm border border-stone-200 dark:border-stone-700 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-500"
              />
            </div>

            <div className="flex flex-wrap gap-1.5">
              {categories.map((c) => (
                <button
                  key={c.value}
                  onClick={() => setSelectedCat(c.value)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                    selectedCat === c.value
                      ? 'bg-stone-900 text-white'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          {/* FAQs Accordion List */}
          <div className="space-y-3">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border border-stone-200 rounded-lg overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-serif text-sm font-bold text-stone-900 hover:text-amber-800 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-stone-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-amber-700' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}

            {filteredFaqs.length === 0 && (
              <div className="p-8 text-center text-xs text-stone-500 bg-white rounded-lg border border-stone-200">
                No questions found matching your search. Please ask our team directly on WhatsApp!
              </div>
            )}
          </div>

          {/* Still have questions banner */}
          <div className="bg-[#181512] text-white p-6 sm:p-8 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <h3 className="font-serif text-lg font-bold text-white">Have a Specific Question?</h3>
              <p className="text-xs text-stone-300">
                Our licensed Egyptologists in Luxor will be pleased to assist with custom logistics.
              </p>
            </div>
            <a
              href={SITE_SETTINGS.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold rounded-lg flex items-center gap-2 whitespace-nowrap transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Ask via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
