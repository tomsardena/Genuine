import React from 'react';
import { Link } from '../utils/router';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOHead } from '../components/SEOHead';
import { Compass, ArrowRight } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Page Not Found – Genuine Egypte"
        description="The page you requested could not be found. Explore our Nile cruises, Cairo and Luxor tours."
      />

      <div className="bg-[#FAF8F5] min-h-[60vh] py-16 flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center space-y-6">
          <div className="flex justify-center">
            <Breadcrumbs showBackButton={true} items={[{ label: 'Page Not Found' }]} />
          </div>

          <div className="w-16 h-16 mx-auto bg-amber-100 text-amber-800 rounded-full flex items-center justify-center">
            <Compass className="w-8 h-8 stroke-[1.5]" />
          </div>

          <div className="space-y-2">
            <span className="text-xs uppercase font-serif tracking-widest text-amber-800 font-bold">
              Error 404
            </span>
            <h1 className="font-serif text-3xl font-bold text-stone-900">
              Page Not Found
            </h1>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              The page you are looking for may have been moved, renamed, or does not exist. Explore our full catalog of authentic tours, Nile cruises, and excursions below.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              to="/"
              className="px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold rounded-md transition-colors"
            >
              Return Home
            </Link>
            <Link
              to="/tours"
              className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-stone-950 text-xs font-semibold rounded-md transition-colors flex items-center gap-1.5"
            >
              <span>Browse All Tours</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
