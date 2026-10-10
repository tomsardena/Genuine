import React, { useState } from 'react';
import { getTourBySlug, TOURS_DATA, TourItem } from '../data/tours';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOHead } from '../components/SEOHead';
import { TourCard } from '../components/TourCard';
import { InquiryModal } from '../components/InquiryModal';
import { OptimizedImage } from '../components/OptimizedImage';
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
  Phone,
  Star
} from 'lucide-react';
import { SITE_SETTINGS } from '../data/siteSettings';
import { REVIEW_STATS, REVIEWS_DATA } from '../data/reviewsData';

interface TourDetailPageProps {
  slug: string;
}

export const TourDetailPage: React.FC<TourDetailPageProps> = ({ slug }) => {
  const tour = getTourBySlug(slug);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [expandedDays, setExpandedDays] = useState<Set<number>>(new Set([0]));

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
  else if (tour.category === 'Dahabiya Nile Cruises') categoryHref = '/dahabiya-cruises';
  else if (tour.category === 'Lake Nasser Cruises') categoryHref = '/lake-nasser-cruises';
  else if (tour.category === 'Egypt Vacation Packages') categoryHref = '/egypt-packages';
  else if (tour.category === 'Cairo & Giza Tours' || tour.category === 'Cairo Tours') categoryHref = '/cairo-giza-tours';
  else if (tour.category === 'Luxor & Upper Egypt' || tour.category === 'Luxor Tours') categoryHref = '/luxor-upper-egypt';
  else if (tour.category === 'Aswan Tours') categoryHref = '/aswan-tours';
  else if (tour.category === 'Shore Excursions') categoryHref = '/shore-excursions';
  else if (tour.category === 'Private Transfers') categoryHref = '/private-transfers';
  else if (tour.category === 'Hot Air Balloon') categoryHref = '/hot-air-balloon';
  else if (tour.category === 'Abu Simbel Excursions') categoryHref = '/abu-simbel';

  // Construct specific keywords for search engines
  const tourKeywords = [
    tour.title,
    tour.category,
    `${tour.destination} tours`,
    `${tour.destination} excursions`,
    'private Egyptologist guide',
    'Genuine Egypte',
    'authentic Egypt travel',
    ...(tour.highlights || []).slice(0, 4)
  ].filter(Boolean).join(', ');

  // Schema.org Structured Data Graph for Google Rich Snippets
  const tourJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'TouristTrip',
        '@id': `https://genuineegypte.com/booking/${tour.slug}/#trip`,
        name: tour.title,
        description: tour.shortDescription || tour.overview,
        touristType: 'Private Guided Cultural Experience',
        subjectOf: {
          '@type': 'Place',
          name: tour.destination,
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'EG'
          }
        },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          url: `https://genuineegypte.com/booking/${tour.slug}/`,
          description: tour.priceNote || 'Custom private quote based on travel dates & party size'
        },
        provider: {
          '@type': 'TravelAgency',
          name: 'Genuine Egypte',
          url: 'https://genuineegypte.com',
          telephone: '+201070335551',
          email: 'info@genuineegypte.com',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '44 Khaled Ibn Al Waleed Street',
            addressLocality: 'Luxor',
            addressCountry: 'EG'
          }
        },
        ...(tour.itinerary && tour.itinerary.length > 0 ? {
          itinerary: {
            '@type': 'ItemList',
            numberOfItems: tour.itinerary.length,
            itemListElement: tour.itinerary.map((day, idx) => ({
              '@type': 'ListItem',
              position: idx + 1,
              name: day.title,
              description: day.description
            }))
          }
        } : {})
      },
      {
        '@type': 'Product',
        '@id': `https://genuineegypte.com/booking/${tour.slug}/#product`,
        name: tour.title,
        image: [tour.mainImage, ...(tour.images || [])].map(img =>
          img.startsWith('http') ? img : `https://genuineegypte.com${img}`
        ),
        description: tour.shortDescription || tour.overview,
        category: tour.category,
        brand: {
          '@type': 'Brand',
          name: 'Genuine Egypte'
        },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          url: `https://genuineegypte.com/booking/${tour.slug}/`,
          description: tour.priceNote || 'Custom private quote based on travel dates & party size'
        }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `https://genuineegypte.com/booking/${tour.slug}/#breadcrumbs`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://genuineegypte.com/'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'All Tours & Cruises',
            item: 'https://genuineegypte.com/tours'
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: tour.category,
            item: `https://genuineegypte.com${categoryHref}`
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: tour.title,
            item: `https://genuineegypte.com/booking/${tour.slug}/`
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEOHead
        title={`${tour.title} – ${tour.destination} | Genuine Egypte`}
        description={tour.shortDescription || `Book ${tour.title} in ${tour.destination}. Certified private Egyptologist guide, air-conditioned transport, door-to-door coordination & transparent pricing.`}
        canonicalPath={`/booking/${tour.slug}/`}
        ogImage={tour.mainImage}
        ogImageAlt={`${tour.title} – private excursion in ${tour.destination}, Egypt`}
        ogType="product"
        keywords={tourKeywords}
        productData={{
          price: '95',
          currency: 'USD',
          availability: 'in stock'
        }}
        jsonLd={tourJsonLd}
      />

      <div className="bg-[#FAF8F5] dark:bg-[#121110] min-h-screen py-6 sm:py-10 pb-24 lg:pb-10 text-stone-800 dark:text-stone-100 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
          {/* Breadcrumbs */}
          <Breadcrumbs showBackButton={true} />

          {/* Tour Title Header */}
          <div className="space-y-3 border-b border-stone-200 dark:border-stone-800 pb-6">
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-amber-900 dark:text-amber-300">
              <span className="bg-amber-100/80 dark:bg-amber-950/70 px-2.5 py-0.5 rounded-xs uppercase tracking-wider text-[11px] font-semibold">
                {tour.category}
              </span>
              <span className="text-stone-300 dark:text-stone-700">·</span>
              <span className="flex items-center gap-1 text-stone-600 dark:text-stone-300">
                <MapPin className="w-3.5 h-3.5 text-amber-700 dark:text-amber-500" />
                <span>{tour.destination}</span>
              </span>
              <span className="text-stone-300 dark:text-stone-700">·</span>
              <span className="flex items-center gap-1 text-stone-600 dark:text-stone-300">
                <Clock className="w-3.5 h-3.5 text-amber-700 dark:text-amber-500" />
                <span>{tour.duration}</span>
              </span>
              <span className="text-stone-300 dark:text-stone-700">·</span>
              <span className="flex items-center gap-1 text-emerald-700 dark:text-emerald-400 font-medium">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Private Curated Experience</span>
              </span>
            </div>

            <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-stone-900 dark:text-stone-100 tracking-tight leading-tight">
              {tour.title}
            </h1>

            {tour.shortDescription && (
              <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 font-sans leading-relaxed max-w-4xl pt-1">
                {tour.shortDescription}
              </p>
            )}

            {/* Quick Section Jump Bar */}
            <div className="flex items-center gap-2 overflow-x-auto pt-2 scrollbar-none text-xs font-medium text-stone-600 dark:text-stone-400">
              <a href="#overview" className="hover:text-amber-800 dark:hover:text-amber-300 px-3 py-1.5 rounded-md bg-stone-100 dark:bg-stone-800/80 transition-colors shrink-0">
                Overview
              </a>
              {tour.highlights && tour.highlights.length > 0 && (
                <a href="#highlights" className="hover:text-amber-800 dark:hover:text-amber-300 px-3 py-1.5 rounded-md bg-stone-100 dark:bg-stone-800/80 transition-colors shrink-0">
                  Highlights
                </a>
              )}
              {tour.itinerary && tour.itinerary.length > 0 && (
                <a href="#itinerary" className="hover:text-amber-800 dark:hover:text-amber-300 px-3 py-1.5 rounded-md bg-stone-100 dark:bg-stone-800/80 transition-colors shrink-0">
                  Tour Plan ({tour.itinerary.length} Steps)
                </a>
              )}
              <a href="#inclusions" className="hover:text-amber-800 dark:hover:text-amber-300 px-3 py-1.5 rounded-md bg-stone-100 dark:bg-stone-800/80 transition-colors shrink-0">
                Inclusions & Services
              </a>
              <a href="#reviews" className="hover:text-amber-800 dark:hover:text-amber-300 px-3 py-1.5 rounded-md bg-stone-100 dark:bg-stone-800/80 transition-colors shrink-0">
                Traveler Reviews
              </a>
            </div>
          </div>

          {/* Main Layout Grid: Content + Sticky Inquiry Column */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left 8 Cols: Gallery & Details */}
            <div className="lg:col-span-8 space-y-10">
              {/* Photo Showcase */}
              <div className="space-y-3">
                <div className="aspect-[16/10] rounded-lg overflow-hidden bg-stone-200 dark:bg-stone-800 border border-stone-200 dark:border-stone-800 shadow-xs relative">
                  <OptimizedImage
                    src={activeImage}
                    alt={`${tour.title} – authentic Egypt journey in ${tour.destination}`}
                    priority={true}
                    sizes="(max-width: 1024px) 100vw, 800px"
                    className="w-full h-full object-cover transition-opacity duration-300"
                  />
                  <div className="absolute bottom-3 left-3 bg-[#181512]/80 backdrop-blur-xs text-stone-200 px-3 py-1 text-xs rounded-xs font-medium">
                    Genuine Egypte Verified Excursion
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
                        <OptimizedImage
                          src={img}
                          alt={`${tour.title} gallery thumbnail ${idx + 1}`}
                          sizes="100px"
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Key Features Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg text-xs shadow-xs">
                <div>
                  <span className="text-stone-400 dark:text-stone-500 block uppercase tracking-wider text-[10px] font-medium">Duration</span>
                  <strong className="text-stone-800 dark:text-stone-100 text-sm font-serif">{tour.duration}</strong>
                </div>
                <div>
                  <span className="text-stone-400 dark:text-stone-500 block uppercase tracking-wider text-[10px] font-medium">Tour Type</span>
                  <strong className="text-stone-800 dark:text-stone-100 text-sm font-serif">100% Private / Tailored</strong>
                </div>
                <div>
                  <span className="text-stone-400 dark:text-stone-500 block uppercase tracking-wider text-[10px] font-medium">Guiding</span>
                  <strong className="text-stone-800 dark:text-stone-100 text-sm font-serif">Licensed Egyptologist</strong>
                </div>
                <div>
                  <span className="text-stone-400 dark:text-stone-500 block uppercase tracking-wider text-[10px] font-medium">Vehicles</span>
                  <strong className="text-stone-800 dark:text-stone-100 text-sm font-serif">Private A/C Fleet</strong>
                </div>
              </div>

              {/* Overview / Introduction */}
              <div id="overview" className="space-y-4 scroll-mt-24">
                <div className="flex items-center justify-between border-b border-stone-200 dark:border-stone-800 pb-2">
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100">
                    Experience Overview
                  </h2>
                  <span className="text-[11px] font-medium text-amber-800 dark:text-amber-400 uppercase tracking-wider hidden sm:inline">
                    Authentic Pharaonic Discovery
                  </span>
                </div>
                <div className="prose prose-stone dark:prose-invert max-w-none text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed space-y-4 whitespace-pre-line">
                  {tour.overview}
                </div>
              </div>

              {/* Highlights */}
              {tour.highlights && tour.highlights.length > 0 && (
                <div id="highlights" className="space-y-4 scroll-mt-24">
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100 border-b border-stone-200 dark:border-stone-800 pb-2">
                    Key Highlights
                  </h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none p-0">
                    {tour.highlights.map((hl, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700 dark:text-stone-300 bg-white dark:bg-stone-900/60 p-3 rounded-lg border border-stone-200/80 dark:border-stone-800">
                        <Sparkles className="w-4 h-4 text-amber-700 dark:text-amber-500 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Itinerary / Program */}
              {tour.itinerary && tour.itinerary.length > 0 && (
                <div id="itinerary" className="space-y-4 scroll-mt-24">
                  <div className="flex items-center justify-between border-b border-stone-200 dark:border-stone-800 pb-2">
                    <div>
                      <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100">
                        Tour Plan & Detailed Itinerary
                      </h2>
                      <span className="text-xs text-stone-500 dark:text-stone-400">
                        {tour.itinerary.length} {tour.itinerary.length === 1 ? 'Program Stage' : 'Scheduled Stages'}
                      </span>
                    </div>

                    <button
                      onClick={() => {
                        if (expandedDays.size === tour.itinerary.length) {
                          setExpandedDays(new Set());
                        } else {
                          setExpandedDays(new Set(tour.itinerary.map((_, i) => i)));
                        }
                      }}
                      className="text-xs font-semibold text-amber-800 dark:text-amber-400 hover:text-amber-900 dark:hover:text-amber-300 px-2.5 py-1 rounded bg-amber-50 dark:bg-amber-950/60 transition-colors"
                    >
                      {expandedDays.size === tour.itinerary.length ? 'Collapse All' : 'Expand All'}
                    </button>
                  </div>

                  <div className="space-y-3">
                    {tour.itinerary.map((step, idx) => {
                      const isOpen = expandedDays.has(idx);
                      return (
                        <div
                          key={idx}
                          className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg overflow-hidden transition-colors shadow-2xs"
                        >
                          <button
                            onClick={() => {
                              const next = new Set(expandedDays);
                              if (next.has(idx)) {
                                next.delete(idx);
                              } else {
                                next.add(idx);
                              }
                              setExpandedDays(next);
                            }}
                            className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-serif text-sm font-bold text-stone-900 dark:text-stone-100 hover:text-amber-800 dark:hover:text-amber-400 transition-colors"
                            aria-expanded={isOpen}
                          >
                            <span className="flex items-center gap-2.5">
                              <span className="px-2 py-0.5 rounded-xs bg-amber-100/90 dark:bg-amber-950/80 text-[11px] font-sans text-amber-900 dark:text-amber-300 font-semibold tracking-wide uppercase">
                                Part {idx + 1}
                              </span>
                              <span>{step.title || `Stage ${idx + 1}`}</span>
                            </span>
                            <ChevronDown
                              className={`w-4 h-4 text-stone-400 shrink-0 transition-transform duration-200 ${
                                isOpen ? 'rotate-180 text-amber-700 dark:text-amber-500' : ''
                              }`}
                            />
                          </button>

                          {isOpen && (
                            <div className="px-5 pb-5 text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed border-t border-stone-100 dark:border-stone-800 pt-3 whitespace-pre-line space-y-2">
                              <p>{step.description}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Inclusions, Exclusions & Optional Extras */}
              <div id="inclusions" className="space-y-4 scroll-mt-24">
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100 border-b border-stone-200 dark:border-stone-800 pb-2">
                  Inclusions, Exclusions & Optional Extras
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Included */}
                  <div className="bg-emerald-50/50 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-800/50 rounded-lg p-5 space-y-3">
                    <h3 className="text-xs font-semibold text-emerald-900 dark:text-emerald-300 uppercase tracking-wider flex items-center justify-between font-serif">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                        <span>Included In This Tour</span>
                      </span>
                      <span className="text-[11px] font-sans font-normal text-emerald-700 dark:text-emerald-400">
                        {tour.inclusions.length} verified services
                      </span>
                    </h3>
                    <ul className="space-y-2 text-xs text-stone-700 dark:text-stone-300">
                      {tour.inclusions.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Excluded */}
                  <div className="bg-rose-50/40 dark:bg-rose-950/30 border border-rose-200/70 dark:border-rose-800/50 rounded-lg p-5 space-y-3">
                    <h3 className="text-xs font-semibold text-rose-950 dark:text-rose-300 uppercase tracking-wider flex items-center justify-between font-serif">
                      <span className="flex items-center gap-1.5">
                        <XCircle className="w-4 h-4 text-rose-700 dark:text-rose-400" />
                        <span>Excluded Services</span>
                      </span>
                      <span className="text-[11px] font-sans font-normal text-rose-700 dark:text-rose-400">
                        Transparent policy
                      </span>
                    </h3>
                    <ul className="space-y-2 text-xs text-stone-700 dark:text-stone-300">
                      {tour.exclusions.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <XCircle className="w-3.5 h-3.5 text-rose-500 dark:text-rose-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Optional Extras & Add-ons (Clearly distinguished) */}
                {tour.optionalExtras && tour.optionalExtras.length > 0 && (
                  <div className="bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/50 rounded-lg p-5 space-y-3">
                    <h3 className="text-xs font-semibold text-amber-950 dark:text-amber-300 uppercase tracking-wider flex items-center justify-between font-serif">
                      <span className="flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-amber-700 dark:text-amber-400" />
                        <span>Optional Activities & Upgrades (Available on Request)</span>
                      </span>
                      <span className="text-[11px] font-sans font-normal text-amber-800 dark:text-amber-400">
                        Add to your bespoke quote
                      </span>
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-stone-700 dark:text-stone-300">
                      {tour.optionalExtras.map((opt, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-600 dark:bg-amber-400 shrink-0 mt-1.5" />
                          <span>{opt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Meeting & Pickup Information */}
              {tour.meetingPoint && (
                <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg p-5 space-y-2 text-xs shadow-2xs">
                  <div className="flex items-center gap-2 text-stone-800 dark:text-stone-100 font-semibold uppercase tracking-wider font-serif">
                    <Navigation className="w-4 h-4 text-amber-700 dark:text-amber-500" />
                    <span>Meeting, Pickup & Arrival Details</span>
                  </div>
                  <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
                    {tour.meetingPoint}
                  </p>
                </div>
              )}

              {/* Verified Traveler Reviews Section */}
              <div id="reviews" className="space-y-4 pt-4 border-t border-stone-200 dark:border-stone-800 scroll-mt-24">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2">
                  <div>
                    <span className="text-[11px] font-semibold text-amber-800 dark:text-amber-400 uppercase tracking-wider block font-serif">
                      Authentic Guest Feedback
                    </span>
                    <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100">
                      Verified Traveler Reviews
                    </h2>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <a
                      href={REVIEW_STATS.tripAdvisor.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-800/60 px-3 py-1.5 rounded-lg text-xs hover:border-emerald-400 transition-colors"
                    >
                      <Star className="w-3.5 h-3.5 fill-emerald-500 text-emerald-500" />
                      <span className="font-bold text-emerald-900 dark:text-emerald-300">5.0 TripAdvisor</span>
                      <span className="text-emerald-700 dark:text-emerald-400 text-[11px]">Travelers’ Choice</span>
                    </a>
                    <a
                      href={REVIEW_STATS.google.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 bg-amber-50 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-800/60 px-3 py-1.5 rounded-lg text-xs hover:border-amber-400 transition-colors"
                    >
                      <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                      <span className="font-bold text-amber-900 dark:text-amber-300">5.0 Google</span>
                      <span className="text-amber-700 dark:text-amber-400 text-[11px]">Verified Reviews</span>
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {REVIEWS_DATA.slice(0, 2).map((rev) => (
                    <div key={rev.id} className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg p-4 space-y-2.5 shadow-xs">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-stone-900 dark:text-stone-100">{rev.author}</span>
                        <span className="text-stone-400 text-[11px]">{rev.date} · {rev.platform === 'tripadvisor' ? 'TripAdvisor' : 'Google'}</span>
                      </div>
                      <div className="flex items-center text-amber-500">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-500" />
                        ))}
                      </div>
                      <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed italic">
                        &ldquo;{rev.content}&rdquo;
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 4 Cols: Sticky Inquiry Card */}
            <aside id="pricing" aria-label="Book or inquire" className="lg:col-span-4 lg:sticky lg:top-24 space-y-6 scroll-mt-24">
              <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl p-6 shadow-md space-y-5">
                <div className="space-y-1 pb-4 border-b border-stone-100 dark:border-stone-800">
                  <span className="text-[11px] font-semibold text-amber-800 dark:text-amber-400 uppercase tracking-wider block font-serif">
                    Inquiry & Custom Proposal
                  </span>
                  <div className="flex items-baseline justify-between">
                    <span className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100">Custom Quote</span>
                    <span className="text-xs text-stone-500 dark:text-stone-400">Tailored To Group</span>
                  </div>
                  <p className="text-xs text-stone-600 dark:text-stone-300 italic pt-1 leading-relaxed">
                    {tour.priceNote || 'Personalized private proposal tailored to your travel dates, cabin preference, and group size.'}
                  </p>
                  <div className="flex items-center gap-1.5 pt-2 text-xs">
                    <div className="flex items-center text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                      ))}
                    </div>
                    <span className="font-semibold text-stone-900 dark:text-stone-100">5.0 / 5.0</span>
                    <a
                      href={REVIEW_STATS.tripAdvisor.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-500 dark:text-stone-400 hover:text-amber-700 underline text-[11px]"
                    >
                      TripAdvisor & Google
                    </a>
                  </div>
                </div>

                {/* Key Benefits Checklist */}
                <div className="space-y-2 text-xs text-stone-700 dark:text-stone-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>100% Private (No crowded group buses)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>Licensed University Egyptologist Guide</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>Zero Upfront Card Deductions</span>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="space-y-2.5 pt-1">
                  <a
                    href={`https://wa.me/201070335551?text=${encodeURIComponent(`Hello Genuine Egypte, I am inquiring about "${tour.title}" (https://genuineegypte.com/booking/${tour.slug}/). Please provide a seasonal quotation and availability.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 px-4 rounded-lg font-medium text-xs sm:text-sm transition-colors shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Inquire via WhatsApp</span>
                  </a>

                  <button
                    onClick={() => setInquiryModalOpen(true)}
                    className="w-full flex items-center justify-center gap-2 bg-stone-900 dark:bg-amber-600 hover:bg-stone-800 dark:hover:bg-amber-500 text-white py-3 px-4 rounded-lg font-medium text-xs sm:text-sm transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Request Custom Proposal</span>
                  </button>
                </div>

                {/* Transparency Guarantee */}
                <div className="pt-2 border-t border-stone-100 dark:border-stone-800 text-xs text-stone-600 dark:text-stone-300 space-y-2">
                  <div className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>No online credit card fees or instant deductions.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-amber-700 dark:text-amber-500 shrink-0 mt-0.5" />
                    <span>Rapid reply within 12 hours from Luxor team.</span>
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
            <div className="pt-12 border-t border-stone-200 dark:border-stone-800 space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-semibold text-amber-800 dark:text-amber-400 uppercase tracking-widest block font-serif">
                  Explore More
                </span>
                <h2 className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100">
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

      {/* Mobile Sticky Booking Bar */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 dark:bg-stone-900/95 backdrop-blur-md border-t border-stone-200 dark:border-stone-800 px-4 py-3 flex items-center justify-between gap-3 shadow-2xl">
        <div className="min-w-0">
          <span className="block text-[10px] text-stone-400 dark:text-stone-500 uppercase tracking-wider">Pricing</span>
          <span className="text-xs sm:text-sm font-serif font-bold text-stone-900 dark:text-stone-100 truncate block">
            Custom Seasonal Rate
          </span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <a
            href={`https://wa.me/201070335551?text=${encodeURIComponent(`Marhaban Genuine Egypte, I am inquiring about "${tour.title}" (https://genuineegypte.com/booking/${tour.slug}/). Please share seasonal rates and availability.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 sm:px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-xs"
            aria-label="Inquire on WhatsApp"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>

          <button
            onClick={() => setInquiryModalOpen(true)}
            className="px-4 py-2.5 bg-stone-900 dark:bg-amber-600 hover:bg-stone-800 dark:hover:bg-amber-500 text-white rounded-xl text-xs font-semibold shadow-xs"
          >
            Inquire Now
          </button>
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
