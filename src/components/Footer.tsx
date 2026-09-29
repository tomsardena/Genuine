import React from 'react';
import { Link } from '../utils/router';
import { SITE_SETTINGS } from '../data/siteSettings';
import { FOOTER_SECTIONS } from '../data/navigation';
import { MapPin, Phone, Mail, MessageCircle, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#141210] text-stone-300 border-t border-stone-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Brand & Mission Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/assets/logo.webp"
                alt="Genuine Egypte Logo"
                className="h-10 w-auto object-contain brightness-110"
              />
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold tracking-tight text-white">
                  Genuine Egypte
                </span>
                <span className="text-[10px] tracking-widest text-amber-400 uppercase font-medium">
                  Travel Agency & Art House
                </span>
              </div>
            </Link>

            <p className="text-xs text-stone-400 leading-relaxed">
              &ldquo;We know the difference between a tourist and a traveler.&rdquo; Established in Luxor by licensed Egyptologists and quality managers to offer unhurried, authentic cultural journeys across the Nile Valley, Cairo, and beyond.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-amber-300">
              <ShieldCheck className="w-4 h-4 shrink-0 text-amber-400" />
              <span>Licensed Egyptian Tour Operators · No Middlemen</span>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
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
              <a href="tel:+201033801083" className="text-stone-400 hover:text-white block">+20 1033801083</a>
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
              href="https://wa.me/201033801083"
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
