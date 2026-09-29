import React, { useState } from 'react';
import { Link } from '../utils/router';
import { TOURS_DATA } from '../data/tours';
import { DESTINATIONS_DATA } from '../data/destinations';
import { FAQS_DATA } from '../data/faqs';
import { SITE_SETTINGS } from '../data/siteSettings';
import { TourCard } from '../components/TourCard';
import { InquiryModal } from '../components/InquiryModal';
import { SEOHead } from '../components/SEOHead';
import {
  Compass,
  Ship,
  Car,
  ChevronDown,
  ArrowRight,
  MessageCircle,
  Award,
  Sparkles,
  MapPin,
  Clock,
  ShieldCheck
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // Nile Cruises (e.g. Royal Ruby, Nile Premium)
  const nileCruises = TOURS_DATA.filter(t => t.category === 'Nile Cruises').slice(0, 3);

  // Top Land Excursions (Giza, Luxor West/East Bank, Abu Simbel)
  const topExcursions = TOURS_DATA.filter(t =>
    t.slug.includes('giza-pyramids') ||
    t.slug.includes('luxors-west-east') ||
    t.slug.includes('sunrise-hot-air-balloon') ||
    t.slug.includes('abu-simbel')
  ).slice(0, 4);

  // Private Transfers preview
  const transferTours = TOURS_DATA.filter(t => t.category === 'Private Transfers').slice(0, 3);

  return (
    <>
      <SEOHead
        title="Genuine Egypte | Travel Agency – Private Tours, Nile Cruises & Transfers"
        description="Official website of Genuine Egypte: private tours, luxury Nile cruises, Cairo and Luxor excursions, and private transfers across Egypt led by licensed Egyptologists."
        canonicalPath="/"
        ogImage="/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg"
      />

      {/* Hero Section */}
      <section className="relative min-h-[580px] lg:min-h-[640px] flex items-center justify-center bg-stone-900 text-white overflow-hidden">
        {/* Background Image with Measured Contrast Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg"
            alt="Royal Ruby Nile Cruise by Genuine Egypte"
            className="w-full h-full object-cover object-center filter brightness-65"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141210] via-stone-950/60 to-black/40" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 py-20 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-950/60 border border-amber-500/30 rounded-xs text-amber-300 text-xs font-medium tracking-widest uppercase backdrop-blur-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Luxor Headquarters · Tailor-Made Egyptian Journeys</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight text-balance">
            We Know the Difference Between a Tourist & a Traveler
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-stone-200 font-light leading-relaxed">
            Experience the living soul of ancient and modern Egypt. Private temple excursions, 5-star Nile cruises, and seamless overland transfers guided exclusively by certified licensed Egyptologists.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/tours"
              className="px-6 py-3 text-sm font-semibold text-stone-900 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors shadow-md flex items-center gap-2"
            >
              <span>Explore All Tours</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="https://wa.me/201033801083"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 text-sm font-medium text-white bg-emerald-700/90 hover:bg-emerald-600 rounded-lg transition-colors backdrop-blur-xs flex items-center gap-2 border border-emerald-500/30"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp Concierge</span>
            </a>
          </div>

          {/* Key Trust Signals Bar */}
          <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-stone-300 border-t border-stone-700/50 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2">
              <Award className="w-4 h-4 text-amber-400 shrink-0" />
              <span>100% Egyptologist Guides</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Ship className="w-4 h-4 text-amber-400 shrink-0" />
              <span>5-Star Nile Fleet</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Car className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Private A/C Transport</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>No Rush Guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Nile Cruises Section */}
      <section className="py-16 sm:py-20 bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs font-semibold text-amber-800 uppercase tracking-widest block font-serif">
                Signature River Expeditions
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
                Luxury Nile River Cruises
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 max-w-xl">
                Sail between Luxor and Aswan aboard the prestigious Royal Ruby and Nile Premium ships, stopping at Kom Ombo, Edfu, and Philae.
              </p>
            </div>

            <Link
              to="/nile-cruises"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-900 hover:text-amber-700 transition-colors shrink-0"
            >
              <span>View All 12 Cruise Itineraries</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nileCruises.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Private Excursions */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs font-semibold text-amber-800 uppercase tracking-widest block font-serif">
                Iconic Ancient Wonders
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
                Featured Private Excursions
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 max-w-xl">
                Unrushed day tours led by licensed Egyptologists in Cairo, Luxor, and Aswan.
              </p>
            </div>

            <Link
              to="/tours"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-900 hover:text-amber-700 transition-colors shrink-0"
            >
              <span>Browse All Excursions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topExcursions.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 sm:py-20 bg-[#F4F1EA] border-t border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-semibold text-amber-800 uppercase tracking-widest block font-serif">
              Explore By Region
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
              Egypt&rsquo;s Iconic Destinations
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              From the monumental necropolises of Upper Egypt to the bustling streets of Cairo and Mediterranean Alexandria.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DESTINATIONS_DATA.map((dest) => (
              <Link
                key={dest.id}
                to={`/destinations/${dest.slug}`}
                className="group relative rounded-lg overflow-hidden aspect-[4/3] bg-stone-900 shadow-xs border border-stone-200 flex flex-col justify-end p-6 text-white"
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-900/40 to-transparent" />

                <div className="relative z-10 space-y-1">
                  <span className="text-[11px] text-amber-300 font-medium tracking-wide uppercase">
                    {dest.tagline}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                    {dest.name}
                  </h3>
                  <p className="text-xs text-stone-300 line-clamp-2 pt-1 font-light">
                    {dest.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs text-amber-300 font-semibold pt-2">
                    <span>View Tours</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Private Transfers Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs font-semibold text-amber-800 uppercase tracking-widest block font-serif">
                Seamless Overland Transit
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
                Private City & Airport Transfers
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 max-w-xl">
                Reliable, comfortable door-to-door transportation in private air-conditioned vehicles between Luxor, Aswan, Hurghada, and regional airports.
              </p>
            </div>

            <Link
              to="/private-transfers"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-900 hover:text-amber-700 transition-colors shrink-0"
            >
              <span>View All Transfer Routes</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {transferTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>
      </section>

      {/* Founder Philosophy / Why Travel With Us */}
      <section className="py-16 sm:py-20 bg-[#161412] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 space-y-10">
          <div className="border-l-2 border-amber-500 pl-6 space-y-4">
            <span className="text-xs uppercase font-serif tracking-widest text-amber-400 block font-semibold">
              The Genuine Egypte Philosophy
            </span>
            <blockquote className="font-serif text-xl sm:text-2xl text-stone-100 italic leading-relaxed">
              &ldquo;The point is that we know the difference between a tourist and a traveler. We worked before with many agencies as Egyptologists, tour operators, and quality managers, and we met with thousands of travelers from all over the world. We grew tired of classical tour agency itineraries that put you in a rush with no reason. Because of that, we established Genuine Egypte to show you the real Egypt, our genuine life, culture, and ancient soul.&rdquo;
            </blockquote>
            <div className="pt-2 text-xs text-stone-400 font-sans">
              <strong className="text-amber-300 font-serif">Founders & Licensed Egyptologists</strong> — Genuine Egypte, Luxor
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-stone-800">
            <div className="space-y-2">
              <h4 className="font-serif text-sm font-bold text-amber-300">Certified Egyptologists Only</h4>
              <p className="text-xs text-stone-400 leading-relaxed">
                No scripted freelance handlers. Every tour is led by an accredited Egyptologist guide dedicated to sharing deep historical context.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-serif text-sm font-bold text-amber-300">Modern Air-Conditioned Fleets</h4>
              <p className="text-xs text-stone-400 leading-relaxed">
                Pristine private sedans and vans with professional tourist drivers, ensuring safety and comfort on desert and Nile Valley routes.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-serif text-sm font-bold text-amber-300">Customized, Unhurried Pace</h4>
              <p className="text-xs text-stone-400 leading-relaxed">
                You dictate the speed of your exploration. Linger in a pharaonic tomb, capture sunrise lighting, or savor local mint tea without rush.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 sm:py-20 bg-stone-50 border-t border-stone-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-10">
          <div className="text-center space-y-2">
            <span className="text-xs font-semibold text-amber-800 uppercase tracking-widest block font-serif">
              Practical Advice
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              Clear answers regarding bookings, Nile cruises, visas, and traveling in Egypt.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS_DATA.slice(0, 5).map((faq, idx) => {
              const isOpen = expandedFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border border-stone-200 rounded-lg overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setExpandedFaq(isOpen ? null : idx)}
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
                    <div className="px-5 pb-5 text-xs text-stone-600 leading-relaxed border-t border-stone-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center pt-2">
            <Link
              to="/faqs"
              className="text-xs font-semibold text-amber-900 hover:underline inline-flex items-center gap-1"
            >
              <span>View All Traveler FAQs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Inquiry & Contact Banner */}
      <section className="py-16 bg-stone-900 text-white text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-8 space-y-6 relative z-10">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold font-serif">
            Direct Concierge Desk
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Ready to Plan Your Egyptian Adventure?
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
            Contact our local Luxor team directly. Whether you need a private Nile cruise, a customized Cairo layover, or an overland desert transfer, we will reply within 12 hours with seasonal rates and personalized suggestions.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setInquiryModalOpen(true)}
              className="px-6 py-3 text-xs font-semibold text-stone-900 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors shadow-md"
            >
              Send Direct Inquiry
            </button>
            <a
              href="https://wa.me/201033801083"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 text-xs font-medium text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp +20 1033801083</span>
            </a>
          </div>
        </div>
      </section>

      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
      />
    </>
  );
};
