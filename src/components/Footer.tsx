import React from 'react';
import { Link } from '../utils/router';
import { SITE_SETTINGS } from '../data/siteSettings';
import { FOOTER_SECTIONS } from '../data/navigation';
import { MapPin, Phone, Mail, MessageCircle, ShieldCheck, ExternalLink, Star } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#141210] text-stone-300 border-t border-stone-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Brand & Mission Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-block group" aria-label="Genuine Egypte Home">
              <img
                src="/assets/logo-final.svg"
                alt="Genuine Egypte Emblem"
                className="h-16 sm:h-20 w-auto object-contain bg-transparent transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            <p className="text-xs text-stone-400 leading-relaxed">
              &ldquo;We know the difference between a tourist and a traveler.&rdquo; Established in Luxor by licensed Egyptologists and quality managers to offer unhurried, authentic cultural journeys across the Nile Valley, Cairo, and beyond.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-amber-300">
              <ShieldCheck className="w-4 h-4 shrink-0 text-amber-400" />
              <span>Licensed Egyptian Tour Operators · No Middlemen</span>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {FOOTER_SECTIONS.map((section, idx) => (
              <div key={idx} className="space-y-3">
                <h4 className="text-xs font-semibold text-white tracking-wider uppercase font-serif">
                  {section.title}
                </h4>
                <ul className="space-y-2 text-xs text-stone-400">
                  {section.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <Link
                        to={link.href}
                        className="hover:text-amber-400 transition-colors line-clamp-1"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Strip */}
        <div className="py-8 grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-stone-800/80 text-xs">
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <strong className="block text-white font-medium">Luxor Headquarters</strong>
              <span className="text-stone-400">{SITE_SETTINGS.address}, {SITE_SETTINGS.city}, {SITE_SETTINGS.country}</span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Phone className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <strong className="block text-white font-medium">Direct Telephone & WhatsApp</strong>
              <a href="tel:+201070335551" className="text-stone-400 hover:text-white block">+20 1070335551</a>
              <a href="tel:+201022721263" className="text-stone-400 hover:text-white block">+20 1022721263</a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Mail className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <strong className="block text-white font-medium">Inquiry Desk</strong>
              <a href="mailto:info@genuineegypte.com" className="text-stone-400 hover:text-white block">info@genuineegypte.com</a>
              <a href="mailto:sales@genuineegypte.com" className="text-stone-400 hover:text-white block">sales@genuineegypte.com</a>
            </div>
          </div>
        </div>

        {/* Verified Review Authority Badges */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-stone-800/80 text-xs">
          <div className="flex items-center gap-2 text-stone-400">
            <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Independent traveler verification on global review platforms:</span>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={SITE_SETTINGS.tripAdvisorUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#00AA6C] hover:text-emerald-300 transition-colors font-medium group"
            >
              <span>Tripadvisor (5.0 ★)</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <span className="text-stone-700">·</span>
            <a
              href={SITE_SETTINGS.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 transition-colors font-medium group"
            >
              <span>Google Reviews (5.0 ★)</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Bottom Legal & Static Assurance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            &copy; {new Date().getFullYear()} Genuine Egypte. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link to="/terms-conditions" className="hover:text-stone-300 transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/privacy-policy" className="hover:text-stone-300 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/faqs" className="hover:text-stone-300 transition-colors">
              Travel FAQs
            </Link>
            <a
              href="https://wa.me/201070335551"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
