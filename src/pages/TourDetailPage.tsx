import React, { useState } from 'react';
import { getTourBySlug, TOURS_DATA, TourItem } from '../data/tours';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOHead } from '../components/SEOHead';
import { TourCard } from '../components/TourCard';
import { InquiryModal } from '../components/InquiryModal';
import {
  MapPin,
  Clock,
  CheckCircle2,
  XCircle,
  MessageCircle,
  Mail,
  ShieldCheck,
  ChevronDown,
  Navigation,
  Compass,
  Ship,
  Sparkles,
  Phone
} from 'lucide-react';
import { SITE_SETTINGS } from '../data/siteSettings';

interface TourDetailPageProps {
  slug: string;
}

export const TourDetailPage: React.FC<TourDetailPageProps> = ({ slug }) => {
  const tour = getTourBySlug(slug);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [expandedDay, setExpandedDay] = useState<number | null>(0);

  if (!tour) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <h1 className="font-serif text-3xl font-bold text-stone-900">Experience Not Found</h1>
        <p className="text-sm text-stone-600">
          The requested tour or cruise &ldquo;{slug}&rdquo; could not be found in our catalog.
        </p>
        <a
          href="/tours"
          className="inline-block px-5 py-2.5 bg-stone-900 text-white rounded-md text-xs font-semibold"
        >
          Browse All Tours
        </a>
      </div>
    );
  }

  const activeImage = selectedImage || tour.mainImage;
  const relatedTours = TOURS_DATA.filter(t => tour.relatedSlugs.includes(t.slug) && t.slug !== tour.slug).slice(0, 3);

  // Category breadcrumbs mapping
  let categoryHref = '/tours';
  if (tour.category === 'Nile Cruises') categoryHref = '/nile-cruises';
  else if (tour.category === 'Cairo & Giza Tours') categoryHref = '/cairo-giza-tours';
  else if (tour.category === 'Luxor & Upper Egypt') categoryHref = '/luxor-upper-egypt';
  else if (tour.category === 'Private Transfers') categoryHref = '/private-transfers';
  else if (tour.category === 'Hot Air Balloon') categoryHref = '/hot-air-balloon';

  return (
    <>
      <SEOHead
        title={`${tour.title} – Genuine Egypte`}
        description={tour.shortDescription || `${tour.title} in Egypt with Genuine Egypte.`}
        canonicalPath={`/booking/${tour.slug}/`}
        ogImage={tour.mainImage}
      />

      <div className="bg-[#FAF8F5] min-h-screen py-6 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[
              { label: tour.category, href: categoryHref },
              { label: tour.title }
            ]}
          />

          {/* Tour Title Header */}
          <div className="space-y-3 border-b border-stone-200 pb-6">
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-amber-900">
              <span className="bg-amber-100/80 px-2.5 py-0.5 rounded-xs uppercase tracking-wider text-[11px] font-semibold">
                {tour.category}
              </span>
              <span className="text-stone-300">·</span>
              <span className="flex items-center gap-1 text-stone-600">
                <MapPin className="w-3.5 h-3.5 text-amber-700" />
                <span>{tour.destination}</span>
              </span>
              <span className="text-stone-300">·</span>
              <span className="flex items-center gap-1 text-stone-600">
                <Clock className="w-3.5 h-3.5 text-amber-700" />
                <span>{tour.duration}</span>
              </span>
            </div>

            <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight leading-tight">
              {tour.title}
            </h1>
          </div>

          {/* Main Layout Grid: Content + Sticky Inquiry Column */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left 8 Cols: Gallery & Details */}
            <div className="lg:col-span-8 space-y-10">
              {/* Photo Showcase */}
              <div className="space-y-3">
                <div className="aspect-[16/10] rounded-lg overflow-hidden bg-stone-200 border border-stone-200 shadow-xs relative">
                  <img
                    src={activeImage}
                    alt={tour.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-opacity duration-300"
                  />
                  <div className="absolute bottom-3 left-3 bg-[#181512]/80 backdrop-blur-xs text-stone-200 px-3 py-1 text-xs rounded-xs font-medium">
                    Genuine Egypte Authentic Photo
                  </div>
                </div>

                {/* Thumbnail Strip */}
                {tour.images.length > 1 && (
                  <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                    {tour.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedImage(img)}
                        className={`relative aspect-[16/10] w-20 sm:w-24 shrink-0 rounded-md overflow-hidden border-2 transition-all ${
                          activeImage === img
                            ? 'border-amber-700 ring-1 ring-amber-700'
                            : 'border-transparent opacity-75 hover:opacity-100'
                        }`}
                      >
                        <img
                          src={img}
                          alt={`${tour.title} thumbnail ${idx + 1}`}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Key Features Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-white border border-stone-200 rounded-lg text-xs">
                <div>
                  <span className="text-stone-400 block uppercase tracking-wider text-[10px]">Duration</span>
                  <strong className="text-stone-800 text-sm font-serif">{tour.duration}</strong>
                </div>
                <div>
                  <span className="text-stone-400 block uppercase tracking-wider text-[10px]">Tour Type</span>
                  <strong className="text-stone-800 text-sm font-serif">Private / Tailored</strong>
                </div>
                <div>
                  <span className="text-stone-400 block uppercase tracking-wider text-[10px]">Guiding</span>
                  <strong className="text-stone-800 text-sm font-serif">Licensed Egyptologist</strong>
                </div>
                <div>
                  <span className="text-stone-400 block uppercase tracking-wider text-[10px]">Transport</span>
                  <strong className="text-stone-800 text-sm font-serif">Private A/C Fleet</strong>
                </div>
              </div>

              {/* Overview / Introduction */}
              <div className="space-y-4">
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 border-b border-stone-200 pb-2">
                  Experience Overview
                </h2>
                <div className="prose prose-stone max-w-none text-xs sm:text-sm text-stone-700 leading-relaxed space-y-3">
                  <p>{tour.overview}</p>
                </div>
              </div>

              {/* Highlights */}
              {tour.highlights && tour.highlights.length > 0 && (
                <div className="space-y-4">
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 border-b border-stone-200 pb-2">
                    Key Highlights
                  </h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none p-0">
                    {tour.highlights.map((hl, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                        <Sparkles className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Itinerary / Program */}
              {tour.itinerary && tour.itinerary.length > 0 && (
                <div className="space-y-4">
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 border-b border-stone-200 pb-2">
                    Tour Plan & Itinerary
                  </h2>

                  <div className="space-y-3">
                    {tour.itinerary.map((step, idx) => {
                      const isOpen = expandedDay === idx;
                      return (
                        <div
                          key={idx}
                          className="bg-white border border-stone-200 rounded-lg overflow-hidden transition-colors"
                        >
                          <button
                            onClick={() => setExpandedDay(isOpen ? null : idx)}
                            className="w-full text-left px-5 py-3.5 flex items-center justify-between gap-4 font-serif text-sm font-bold text-stone-900 hover:text-amber-800 transition-colors"
                            aria-expanded={isOpen}
                          >
                            <span className="flex items-center gap-2">
                              <span className="text-xs font-sans text-amber-700 font-semibold uppercase">
                                Part {idx + 1}:
                              </span>
                              <span>{step.title || `Day ${idx + 1} Program`}</span>
                            </span>
                            <ChevronDown
                              className={`w-4 h-4 text-stone-400 shrink-0 transition-transform duration-200 ${
                                isOpen ? 'rotate-180 text-amber-700' : ''
                              }`}
                            />
                          </button>

                          {isOpen && (
                            <div className="px-5 pb-5 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3 whitespace-pre-line">
                              {step.description}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Inclusions and Exclusions Side-by-Side */}
              <div className="space-y-4">
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 border-b border-stone-200 pb-2">
                  What&rsquo;s Included & Excluded
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Included */}
                  <div className="bg-emerald-50/50 border border-emerald-200/80 rounded-lg p-5 space-y-3">
                    <h3 className="text-xs font-semibold text-emerald-900 uppercase tracking-wider flex items-center gap-1.5 font-serif">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                      <span>Included in this tour</span>
                    </h3>
                    <ul className="space-y-2 text-xs text-stone-700">
                      {tour.inclusions.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Excluded */}
                  <div className="bg-rose-50/40 border border-rose-200/70 rounded-lg p-5 space-y-3">
                    <h3 className="text-xs font-semibold text-rose-950 uppercase tracking-wider flex items-center gap-1.5 font-serif">
                      <XCircle className="w-4 h-4 text-rose-700" />
                      <span>Excluded / Optional</span>
                    </h3>
                    <ul className="space-y-2 text-xs text-stone-700">
                      {tour.exclusions.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <XCircle className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Meeting & Pickup Information */}
              {tour.meetingPoint && (
                <div className="bg-white border border-stone-200 rounded-lg p-5 space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-stone-800 font-semibold uppercase tracking-wider font-serif">
                    <Navigation className="w-4 h-4 text-amber-700" />
                    <span>Meeting & Pickup Details</span>
                  </div>
                  <p className="text-stone-600 leading-relaxed">
                    {tour.meetingPoint}
                  </p>
                </div>
              )}
            </div>

            {/* Right 4 Cols: Sticky Inquiry Card */}
            <aside aria-label="Book or inquire" className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
              <div className="bg-white border border-stone-200 rounded-xl p-6 shadow-md space-y-5">
                <div className="space-y-1 pb-4 border-b border-stone-100">
                  <span className="text-[11px] font-semibold text-amber-800 uppercase tracking-wider block font-serif">
                    Inquiry & Availability
                  </span>
                  <div className="flex items-baseline justify-between">
                    <span className="font-serif text-2xl font-bold text-stone-900">Custom Rate</span>
                    <span className="text-xs text-stone-500">Per Traveler</span>
                  </div>
                  <p className="text-xs text-stone-500 italic pt-1">
                    Direct booking quote tailored to your travel date and group size.
                  </p>
                </div>

                {/* Direct Action Buttons */}
                <div className="space-y-2.5">
                  <a
                    href={`https://wa.me/201033801083?text=${encodeURIComponent(`Hello Genuine Egypte, I am inquiring about "${tour.title}" (https://genuineegypte.com/booking/${tour.slug}/). Please let me know seasonal availability and pricing.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 px-4 rounded-lg font-medium text-xs sm:text-sm transition-colors shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Inquire via WhatsApp</span>
                  </a>

                  <button
                    onClick={() => setInquiryModalOpen(true)}
                    className="w-full flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-white py-3 px-4 rounded-lg font-medium text-xs sm:text-sm transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Request Custom Proposal</span>
                  </button>
                </div>

                {/* Transparency Guarantee */}
                <div className="pt-2 border-t border-stone-100 text-xs text-stone-600 space-y-2">
                  <div className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>No online credit card fees or instant deductions.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    <span>Rapid reply within 12 hours from our Luxor office.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Phone className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
                    <span>Direct phone: {SITE_SETTINGS.primaryPhone}</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>

          {/* Related Tours Section */}
          {relatedTours.length > 0 && (
            <div className="pt-12 border-t border-stone-200 space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-semibold text-amber-800 uppercase tracking-widest block font-serif">
                  Explore More
                </span>
                <h2 className="font-serif text-2xl font-bold text-stone-900">
                  Related Egyptian Experiences
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedTours.map((rTour) => (
                  <TourCard key={rTour.id} tour={rTour} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        tour={tour}
      />
    </>
  );
};
