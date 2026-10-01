import React, { useState } from 'react';
import { REVIEWS_DATA, REVIEW_STATS, ReviewItem } from '../data/reviewsData';
import {
  Star,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  ThumbsUp,
  MessageSquare,
  Sparkles,
  MapPin,
  Calendar
} from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const [filterPlatform, setFilterPlatform] = useState<'all' | 'tripadvisor' | 'google'>('all');

  const filteredReviews = filterPlatform === 'all'
    ? REVIEWS_DATA
    : REVIEWS_DATA.filter((r) => r.platform === filterPlatform);

  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="py-16 sm:py-24 bg-[#F8F6F0] dark:bg-[#141210] border-t border-b border-stone-200 dark:border-stone-800 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-stone-200 dark:border-stone-800">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-700/50 text-amber-900 dark:text-amber-300 text-xs font-semibold uppercase tracking-wider font-serif">
              <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>Verified Guest Feedback & Ratings</span>
            </div>
            <h2
              id="reviews-heading"
              className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-stone-900 dark:text-stone-100 tracking-tight"
            >
              Recommended by Travelers Worldwide
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-light">
              Read real, uncensored reviews from travelers who booked our private day tours, Nile cruises, and Egypt packages directly through our Luxor headquarters.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={REVIEW_STATS.tripAdvisor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#00AA6C] hover:bg-[#008f5a] text-white text-xs font-semibold shadow-xs transition-all duration-200 hover:shadow-md group"
            >
              {/* TripAdvisor Owl Icon */}
              <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-1.85.63-3.55 1.69-4.9L12 13.5l6.31-6.4C19.37 8.45 20 10.15 20 12c0 4.41-3.59 8-8 8zm-4.5-9a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm9 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
              </svg>
              <span>Tripadvisor Reviews</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href={REVIEW_STATS.google.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-stone-800 hover:bg-stone-50 dark:hover:bg-stone-700 text-stone-900 dark:text-stone-100 border border-stone-300 dark:border-stone-700 text-xs font-semibold shadow-xs transition-all duration-200 hover:shadow-md group"
            >
              {/* Google G Icon */}
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.15z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.24v3.15C3.26 21.36 7.33 24 12 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.24C.45 8.16 0 9.98 0 12c0 2.02.45 3.84 1.24 5.42l4.04-3.15z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.24 6.58l4.04 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                />
              </svg>
              <span>Google Reviews</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Dual Platform Authority Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Tripadvisor Card */}
          <div className="rounded-2xl p-6 sm:p-7 bg-white dark:bg-[#1a1816] border border-stone-200 dark:border-stone-800 shadow-sm relative overflow-hidden flex flex-col justify-between space-y-5">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#00AA6C]">
                    Tripadvisor Verified
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-[#00AA6C] text-[10px] font-bold">
                    Top Rated
                  </span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100">
                  Genuine Egypt (Luxor)
                </h3>
                <p className="text-xs text-stone-500 dark:text-stone-400">
                  Attraction & Private Tour Operator · Luxor Nile River Valley
                </p>
              </div>

              {/* Tripadvisor Badge */}
              <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-[#00AA6C] border border-emerald-200 dark:border-emerald-800/40 shrink-0">
                <div className="flex items-center gap-1 font-bold text-lg font-serif">
                  <span>5.0</span>
                  <div className="flex text-[#00AA6C]">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="inline-block w-2.5 h-2.5 rounded-full bg-[#00AA6C] mx-0.5" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-light">
              &ldquo;Exceptional hospitality, knowledgeable licensed Egyptologists, and unrushed itineraries. Consistently recommended as the most genuine local agency in Luxor.&rdquo;
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-stone-100 dark:border-stone-800 text-xs">
              <span className="text-stone-500 dark:text-stone-400 font-medium">
                ★ 5.0 of 5.0 Bubbles on Tripadvisor
              </span>
              <a
                href={REVIEW_STATS.tripAdvisor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00AA6C] hover:underline font-semibold inline-flex items-center gap-1 group"
              >
                <span>Read Full Listing</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Google Reviews Card */}
          <div className="rounded-2xl p-6 sm:p-7 bg-white dark:bg-[#1a1816] border border-stone-200 dark:border-stone-800 shadow-sm relative overflow-hidden flex flex-col justify-between space-y-5">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                    Google Business Profile
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 text-[10px] font-bold">
                    5.0 ★
                  </span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100">
                  Genuine Egypt Tour
                </h3>
                <p className="text-xs text-stone-500 dark:text-stone-400">
                  Travel Agency & Private Excursions · Luxor, Egypt
                </p>
              </div>

              {/* Google Badge */}
              <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 border border-blue-200 dark:border-blue-800/40 shrink-0">
                <div className="flex items-center gap-1 font-bold text-lg font-serif">
                  <span className="text-stone-900 dark:text-stone-100">5.0</span>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-light">
              &ldquo;Modern private vehicles, fair and upfront pricing with no hidden tourist-tax traps, and round-the-clock WhatsApp support throughout the journey.&rdquo;
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-stone-100 dark:border-stone-800 text-xs">
              <span className="text-stone-500 dark:text-stone-400 font-medium">
                ★ 5.0 Star Rating on Google Maps
              </span>
              <a
                href={REVIEW_STATS.google.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline font-semibold inline-flex items-center gap-1 group"
              >
                <span>Read & Review on Google</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setFilterPlatform('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                filterPlatform === 'all'
                  ? 'bg-amber-500 text-stone-950 shadow-xs'
                  : 'bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:bg-stone-100'
              }`}
            >
              All Verified Reviews ({REVIEWS_DATA.length})
            </button>
            <button
              onClick={() => setFilterPlatform('tripadvisor')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                filterPlatform === 'tripadvisor'
                  ? 'bg-[#00AA6C] text-white shadow-xs'
                  : 'bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:bg-stone-100'
              }`}
            >
              <span>Tripadvisor</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-stone-200 dark:bg-stone-700 text-stone-700 dark:text-stone-300">
                {REVIEWS_DATA.filter((r) => r.platform === 'tripadvisor').length}
              </span>
            </button>
            <button
              onClick={() => setFilterPlatform('google')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                filterPlatform === 'google'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:bg-stone-100'
              }`}
            >
              <span>Google Reviews</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-stone-200 dark:bg-stone-700 text-stone-700 dark:text-stone-300">
                {REVIEWS_DATA.filter((r) => r.platform === 'google').length}
              </span>
            </button>
          </div>

          <div className="flex items-center gap-2 text-xs text-stone-500 dark:text-stone-400">
            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>100% Genuine, Authenticated Traveler Reviews</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white dark:bg-[#1a1816] rounded-2xl p-6 border border-stone-200 dark:border-stone-800 shadow-xs flex flex-col justify-between space-y-4 hover:border-amber-400 dark:hover:border-amber-600/60 transition-all duration-200"
            >
              <div className="space-y-3">
                {/* Platform Pill & Rating */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  {rev.platform === 'tripadvisor' ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-[#00AA6C] border border-emerald-200 dark:border-emerald-800/40 text-[10px] font-semibold">
                      <span>Tripadvisor</span>
                      <CheckCircle2 className="w-3 h-3 text-[#00AA6C]" />
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/40 text-[10px] font-semibold">
                      <span>Google Review</span>
                      <CheckCircle2 className="w-3 h-3 text-blue-600" />
                    </span>
                  )}
                </div>

                {/* Title */}
                <h4 className="font-serif text-base font-bold text-stone-900 dark:text-stone-100 leading-snug">
                  &ldquo;{rev.title}&rdquo;
                </h4>

                {/* Content */}
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed font-light">
                  {rev.content}
                </p>

                {/* Tour Taken Tag */}
                <div className="pt-2 text-[11px] text-amber-800 dark:text-amber-400 font-medium flex items-center gap-1">
                  <MapPin className="w-3 h-3 shrink-0" />
                  <span className="truncate">{rev.tourTaken}</span>
                </div>
              </div>

              {/* Author & Date Footer */}
              <div className="pt-4 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-xs">
                <div>
                  <strong className="block text-stone-900 dark:text-stone-100 font-semibold">
                    {rev.author}
                  </strong>
                  <span className="text-[11px] text-stone-500 dark:text-stone-400">
                    {rev.country} · {rev.date}
                  </span>
                </div>

                {rev.helpfulCount && (
                  <span className="inline-flex items-center gap-1 text-[11px] text-stone-400">
                    <ThumbsUp className="w-3 h-3" />
                    <span>{rev.helpfulCount}</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Review Action Banner */}
        <div className="rounded-2xl p-6 sm:p-8 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100">
              Traveled With Genuine Egypt Recently?
            </h4>
            <p className="text-xs text-stone-600 dark:text-stone-300 max-w-xl">
              Your honest feedback helps fellow independent travelers experience authentic Egypt without middlemen. Leave your review in under 2 minutes:
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href={REVIEW_STATS.tripAdvisor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-[#00AA6C] hover:bg-[#008f5a] text-white text-xs font-semibold transition-colors flex items-center gap-1.5 shadow-xs"
            >
              <span>Review Us on Tripadvisor</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <a
              href={REVIEW_STATS.google.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors flex items-center gap-1.5 shadow-xs"
            >
              <span>Review Us on Google</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
