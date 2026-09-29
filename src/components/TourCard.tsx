import React, { useState } from 'react';
import { Link } from '../utils/router';
import { TourItem } from '../data/tours';
import { MapPin, Clock, ArrowRight, MessageCircle } from 'lucide-react';
import { InquiryModal } from './InquiryModal';

interface TourCardProps {
  tour: TourItem;
}

export const TourCard: React.FC<TourCardProps> = ({ tour }) => {
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

  // Link to original booking URL slug
  const tourUrl = `/booking/${tour.slug}/`;

  return (
    <>
      <article className="group flex flex-col bg-white border border-stone-200/90 rounded-lg overflow-hidden transition-all duration-200 hover:shadow-md hover:border-stone-300">
        {/* Card Image */}
        <Link to={tourUrl} className="relative block aspect-[16/10] overflow-hidden bg-stone-100">
          {!imgError && tour.mainImage ? (
            <img
              src={tour.mainImage}
              alt={tour.title}
              loading="lazy"
              referrerPolicy="no-referrer"
              onError={() => setImgError(true)}
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-stone-200 text-stone-400">
              <span className="font-serif text-sm tracking-wider uppercase">Genuine Egypte</span>
            </div>
          )}

          {/* Subdued Category kicker */}
          <div className="absolute top-3 left-3 bg-[#181512]/80 backdrop-blur-xs text-amber-300/90 px-2.5 py-1 text-[11px] font-medium tracking-wide uppercase rounded-xs">
            {tour.category}
          </div>
        </Link>

        {/* Card Body */}
        <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            {/* Unboxed Metadata with Typographic Separator (Zero-Pill Rule) */}
            <div className="flex items-center gap-2 text-xs text-stone-500 font-medium">
              <span className="flex items-center gap-1 text-stone-600">
                <MapPin className="w-3.5 h-3.5 text-amber-700/80" />
                <span className="truncate max-w-[120px]">{tour.destination}</span>
              </span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span className="flex items-center gap-1 text-stone-600">
                <Clock className="w-3.5 h-3.5 text-amber-700/80" />
                <span className="truncate max-w-[120px]">{tour.duration}</span>
              </span>
            </div>

            {/* Title */}
            <h3 className="font-serif text-base font-bold text-stone-900 leading-snug line-clamp-2 group-hover:text-amber-800 transition-colors">
              <Link to={tourUrl}>{tour.title}</Link>
            </h3>

            {/* Short excerpt */}
            <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
              {tour.shortDescription}
            </p>
          </div>

          {/* Bottom Bar & Actions */}
          <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-2">
            <div>
              <span className="block text-[11px] text-stone-400 uppercase tracking-wider">Pricing</span>
              <span className="text-xs font-semibold text-stone-800">Custom Seasonal Rate</span>
            </div>

            <div className="flex items-center gap-1.5 shrink-0">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setInquiryOpen(true);
                }}
                className="p-1.5 text-stone-600 hover:text-emerald-700 hover:bg-emerald-50 rounded-md transition-colors"
                title="Quick WhatsApp Inquiry"
                aria-label="Quick WhatsApp Inquiry"
              >
                <MessageCircle className="w-4 h-4" />
              </button>

              <Link
                to={tourUrl}
                className="inline-flex items-center gap-1 text-xs font-semibold text-stone-900 hover:text-amber-800 transition-colors py-1 px-2.5 rounded-md hover:bg-stone-50"
              >
                <span>Details</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </article>

      <InquiryModal
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        tour={tour}
      />
    </>
  );
};
