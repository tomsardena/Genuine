import React, { useState } from 'react';
import { Link, useRouter } from '../utils/router';
import { SITE_SETTINGS } from '../data/siteSettings';
import { Phone, MessageCircle, Menu, X, Mail, MapPin } from 'lucide-react';
import { InquiryModal } from './InquiryModal';
import { ThemeToggle } from '../utils/theme';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const { currentPath } = useRouter();

  const navLinks = [
    { label: 'All Tours', href: '/tours' },
    { label: 'Nile Cruises', href: '/nile-cruises' },
    { label: 'Cairo & Giza', href: '/cairo-giza-tours' },
    { label: 'Luxor & Valley', href: '/luxor-upper-egypt' },
    { label: 'Transfers', href: '/private-transfers' },
    { label: 'Destinations', href: '/destinations' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' }
  ];

  return (
    <>
      {/* Top Utility Bar with Real Verified Contact Info */}
      <div className="bg-[#141210] text-stone-300 text-xs border-b border-stone-800/80 py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 text-[11px] text-stone-400">
            <span className="hidden md:flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-amber-500/80" />
              <span>44 Khaled Ibn Al Waleed St, Luxor</span>
            </span>
            <span className="hidden sm:inline-block text-stone-700">·</span>
            <a
              href="mailto:info@genuineegypte.com"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3 h-3 text-amber-500/80" />
              <span>info@genuineegypte.com</span>
            </a>
          </div>

          <div className="flex items-center gap-3 text-[11px]">
            <a
              href="tel:+201033801083"
              className="flex items-center gap-1 text-stone-300 hover:text-amber-400 font-medium transition-colors"
            >
              <Phone className="w-3 h-3 text-amber-500" />
              <span>+20 1033801083</span>
            </a>
            <span className="text-stone-700">|</span>
            <a
              href="https://wa.me/201033801083"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 font-medium flex items-center gap-1 transition-colors"
            >
              <MessageCircle className="w-3 h-3 fill-current" />
              <span>WhatsApp Concierge</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header className="sticky top-0 z-40 bg-white/95 dark:bg-[#161412]/95 backdrop-blur-md border-b border-stone-200/80 dark:border-stone-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-18 flex items-center justify-between gap-4">
          {/* Zone 1: Single element wordmark & logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0 group">
            <img
              src="/assets/logo.webp"
              alt="Genuine Egypte"
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-102"
              onError={(e) => {
                // If logo fails, keep wordmark visible
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold tracking-tight text-stone-900 dark:text-stone-100 leading-none group-hover:text-amber-800 dark:group-hover:text-amber-400 transition-colors">
                Genuine Egypte
              </span>
              <span className="text-[10px] tracking-widest text-amber-800/80 dark:text-amber-400/90 uppercase font-medium mt-0.5">
                Travel Agency & Art House
              </span>
            </div>
          </Link>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 text-[13px] font-medium text-stone-600 dark:text-stone-300">
            {navLinks.map((link) => {
              const isActive = currentPath === link.href || (link.href !== '/' && currentPath.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`py-1 transition-colors whitespace-nowrap ${
                    isActive
                      ? 'text-amber-800 dark:text-amber-400 font-semibold border-b-2 border-amber-700 dark:border-amber-500 -mb-[2px]'
                      : 'hover:text-stone-900 dark:hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Zone 3: Primary Actions & Theme Toggle */}
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            {/* Theme Toggle Button */}
            <ThemeToggle />

            <a
              href="https://wa.me/201033801083"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 rounded-lg transition-colors border border-emerald-200/60 dark:border-emerald-800/60 whitespace-nowrap"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current text-emerald-600 dark:text-emerald-400" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => setInquiryModalOpen(true)}
              className="px-4 py-2 text-xs font-medium text-white bg-stone-900 dark:bg-amber-600 hover:bg-amber-900 dark:hover:bg-amber-500 rounded-lg transition-colors whitespace-nowrap shadow-xs"
            >
              Inquire Now
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white rounded-md focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-[#161412] border-b border-stone-200 dark:border-stone-800 px-5 py-4 shadow-lg animate-in slide-in-from-top-2 duration-150">
            <nav className="flex flex-col space-y-2.5">
              {navLinks.map((link) => {
                const isActive = currentPath === link.href || (link.href !== '/' && currentPath.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`py-2 text-sm font-medium border-b border-stone-100 dark:border-stone-800 ${
                      isActive ? 'text-amber-800 dark:text-amber-400 font-bold' : 'text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-3 flex flex-col gap-2">
                <a
                  href="https://wa.me/201033801083"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 bg-[#25D366] text-white rounded-lg text-xs font-medium"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Chat on WhatsApp (+20 1033801083)</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setInquiryModalOpen(true);
                  }}
                  className="py-2.5 bg-stone-900 dark:bg-amber-600 text-white rounded-lg text-xs font-medium text-center"
                >
                  Request Custom Travel Proposal
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>

      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
      />
    </>
  );
};
