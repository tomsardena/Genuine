import React from 'react';
import { DESTINATIONS_DATA } from '../data/destinations';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOHead } from '../components/SEOHead';
import { Link } from '../utils/router';
import { ArrowRight, MapPin } from 'lucide-react';
import { OptimizedImage } from '../components/OptimizedImage';

export const DestinationsPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Destinations in Egypt – Luxor, Nile, Cairo, Aswan | Genuine Egypte"
        description="Explore Egypt’s most magnificent regions with Genuine Egypte: Luxor, the River Nile, Cairo & Giza, Aswan & Abu Simbel, Alexandria, and Hurghada."
        canonicalPath="/destinations"
      />

      <div className="bg-[#FAF8F5] dark:bg-[#121110] min-h-screen py-8 text-stone-800 dark:text-stone-100 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
          <Breadcrumbs items={[{ label: 'Destinations' }]} />

          <div className="border-b border-stone-200 dark:border-stone-800 pb-6 space-y-2">
            <span className="text-xs font-semibold text-amber-800 dark:text-amber-400 uppercase tracking-widest font-serif block">
              Regions of Egypt
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 dark:text-stone-100 tracking-tight">
              Iconic Egyptian Travel Destinations
            </h1>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 max-w-2xl leading-relaxed">
              Egypt is a realm of breathtaking contrasts—from the royal tombs of Upper Egypt to the bustling historic streets of Cairo and serene turquoise waters of the Red Sea. Select a destination below to explore curated excursions and Nile cruises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DESTINATIONS_DATA.map((dest) => (
              <div
                key={dest.id}
                className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg overflow-hidden flex flex-col justify-between group hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-stone-100 dark:bg-stone-800">
                    <OptimizedImage
                      src={dest.image}
                      alt={`${dest.name} – ${dest.tagline} in Egypt`}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-[#181512]/80 backdrop-blur-xs text-amber-300 px-2.5 py-1 text-[11px] font-medium tracking-wide uppercase rounded-xs">
                      {dest.tagline}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h2 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100 group-hover:text-amber-800 dark:group-hover:text-amber-400 transition-colors">
                      <Link to={`/destinations/${dest.slug}`}>{dest.name}</Link>
                    </h2>
                    <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed line-clamp-3">
                      {dest.description}
                    </p>

                    <div className="pt-2 space-y-1.5">
                      <span className="text-[11px] font-semibold text-stone-400 dark:text-stone-500 uppercase tracking-wider block">
                        Must-See Sights:
                      </span>
                      <div className="flex flex-wrap gap-1 text-[11px] text-stone-700 dark:text-stone-300">
                        {dest.mustSeeAttractions.slice(0, 4).map((att, idx) => (
                          <span key={idx} className="after:content-['·'] after:ml-1 after:text-stone-300 dark:after:text-stone-600 last:after:content-none">
                            {att}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <Link
                    to={`/destinations/${dest.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-900 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors"
                  >
                    <span>Explore {dest.name} Tours</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
