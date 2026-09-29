import React from 'react';
import { getDestinationBySlug } from '../data/destinations';
import { TOURS_DATA } from '../data/tours';
import { TourCard } from '../components/TourCard';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOHead } from '../components/SEOHead';
import { Link } from '../utils/router';
import { MapPin, Calendar, Sparkles, ArrowRight } from 'lucide-react';

interface DestinationDetailPageProps {
  slug: string;
}

export const DestinationDetailPage: React.FC<DestinationDetailPageProps> = ({ slug }) => {
  const destination = getDestinationBySlug(slug);

  if (!destination) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <h1 className="font-serif text-3xl font-bold text-stone-900">Destination Not Found</h1>
        <p className="text-sm text-stone-600">The requested destination could not be found.</p>
        <Link to="/destinations" className="inline-block px-5 py-2.5 bg-stone-900 text-white rounded-md text-xs font-semibold">
          View All Destinations
        </Link>
      </div>
    );
  }

  // Find tours matching this destination
  const matchedTours = TOURS_DATA.filter(t =>
    t.destination.toLowerCase().includes(destination.name.split(' ')[0].toLowerCase()) ||
    t.destination.toLowerCase().includes(destination.slug.toLowerCase()) ||
    (destination.slug === 'nile-river' && t.category === 'Nile Cruises') ||
    (destination.slug === 'cairo-giza' && (t.destination.includes('Cairo') || t.category.includes('Cairo')))
  );

  return (
    <>
      <SEOHead
        title={`${destination.name} Tours & Travel Guide – Genuine Egypte`}
        description={destination.description}
        canonicalPath={`/destinations/${destination.slug}`}
        ogImage={destination.image}
      />

      <div className="bg-[#FAF8F5] min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
          <Breadcrumbs
            items={[
              { label: 'Destinations', href: '/destinations' },
              { label: destination.name }
            ]}
          />

          {/* Hero Header */}
          <div className="relative rounded-xl overflow-hidden bg-stone-900 text-white aspect-[21/9] min-h-[300px] flex items-end p-6 sm:p-10 shadow-sm border border-stone-200">
            <img
              src={destination.image}
              alt={destination.name}
              className="absolute inset-0 w-full h-full object-cover filter brightness-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/60 to-transparent" />

            <div className="relative z-10 max-w-2xl space-y-2">
              <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold font-serif block">
                {destination.tagline}
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white">
                {destination.name}
              </h1>
            </div>
          </div>

          {/* Destination Details & Highlights */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6 bg-white p-6 sm:p-8 rounded-lg border border-stone-200">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 border-b border-stone-100 pb-3">
                About {destination.name}
              </h2>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                {destination.description}
              </p>

              <div className="space-y-3 pt-3">
                <h3 className="font-serif text-base font-bold text-stone-900">
                  Regional Highlights
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 list-none p-0 text-xs text-stone-700">
                  {destination.highlights.map((hl, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-stone-200 space-y-4 text-xs">
                <div className="flex items-center gap-2 font-serif text-sm font-bold text-stone-900">
                  <Calendar className="w-4 h-4 text-amber-700" />
                  <span>Best Time to Visit</span>
                </div>
                <p className="text-stone-600 leading-relaxed">
                  {destination.bestTimeToVisit}
                </p>
              </div>

              <div className="bg-amber-50/60 p-6 rounded-lg border border-amber-200 text-xs space-y-3">
                <h4 className="font-serif text-sm font-bold text-amber-950">
                  Must-See Monuments
                </h4>
                <ul className="space-y-1.5 text-stone-700">
                  {destination.mustSeeAttractions.map((att, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                      <span>{att}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Matched Tours for this destination */}
          <div className="space-y-6 pt-6 border-t border-stone-200">
            <div className="space-y-1">
              <span className="text-xs font-semibold text-amber-800 uppercase tracking-widest font-serif block">
                Curated Itineraries
              </span>
              <h2 className="font-serif text-2xl font-bold text-stone-900">
                Tours & Cruises in {destination.name}
              </h2>
            </div>

            {matchedTours.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {matchedTours.map((tour) => (
                  <TourCard key={tour.id} tour={tour} />
                ))}
              </div>
            ) : (
              <p className="text-xs text-stone-500 italic">
                Contact our concierge to design a bespoke private itinerary in {destination.name}.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
