import React from 'react';
import { MessageCircle } from 'lucide-react';
import { SITE_SETTINGS } from '../data/siteSettings';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside
      aria-label="Quick contact"
      className="fixed bottom-5 left-5 z-40 animate-fade-in-up motion-reduce:animate-none"
    >
      <a
        href={SITE_SETTINGS.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-3.5 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
        aria-label="Chat with Genuine Egypte on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-current shrink-0" />
        <span className="text-xs font-semibold tracking-wide hidden sm:inline whitespace-nowrap">
          WhatsApp Concierge
        </span>
      </a>
    </aside>
  );
};
