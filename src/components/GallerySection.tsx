import React, { useState, useEffect } from 'react';
import { GALLERY_DATA, GALLERY_CATEGORIES, GalleryImage } from '../data/galleryData';
import { Link } from '../utils/router';
import {
  Sparkles,
  MapPin,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Camera,
  MessageCircle,
  Compass
} from 'lucide-react';

interface GallerySectionProps {
  maxItems?: number;
  showAllLink?: boolean;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  maxItems = 12,
  showAllLink = true
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All Moments');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // Filter images based on category
  const filteredImages = activeCategory === 'All Moments'
    ? GALLERY_DATA
    : GALLERY_DATA.filter(img => img.category === activeCategory);

  const displayedImages = maxItems ? filteredImages.slice(0, maxItems) : filteredImages;

  // Handle lightbox navigation
  const activeImage = selectedImageIndex !== null ? filteredImages[selectedImageIndex] : null;

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex - 1 + filteredImages.length) % filteredImages.length);
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex + 1) % filteredImages.length);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (selectedImageIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImageIndex(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, filteredImages.length]);

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="py-16 sm:py-24 bg-[#141210] text-white relative overflow-hidden transition-colors"
    >
      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-700/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-stone-800/80">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/70 border border-amber-500/40 text-amber-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
              <Camera className="w-3.5 h-3.5 text-amber-400" />
              <span>Authentic Field Photography · Real Moments</span>
            </div>
            <h2
              id="gallery-heading"
              className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
            >
              Egypt Through Our Travelers&rsquo; Eyes
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
              Explore authentic, unedited moments from our private expeditions across Luxor, Aswan, the Nile Valley, and Cairo. Captured on the ground by our guides and esteemed travelers.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            {showAllLink && (
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-stone-800/90 hover:bg-stone-700 text-stone-200 hover:text-white border border-stone-700 text-xs font-semibold transition-colors group shadow-xs"
              >
                <span>Full Archive (33 Photos)</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform text-amber-400" />
              </Link>
            )}
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {GALLERY_CATEGORIES.map((category) => {
            const count = category === 'All Moments'
              ? GALLERY_DATA.length
              : GALLERY_DATA.filter(img => img.category === category).length;
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setSelectedImageIndex(null);
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                  isActive
                    ? 'bg-amber-400 text-stone-950 font-semibold shadow-md'
                    : 'bg-stone-800/60 hover:bg-stone-800 text-stone-300 border border-stone-700/60 hover:border-stone-600'
                }`}
              >
                <span>{category}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isActive ? 'bg-stone-950/20 text-stone-900 font-bold' : 'bg-stone-700/50 text-stone-400'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4.5">
          {displayedImages.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setSelectedImageIndex(idx)}
              className="group relative rounded-xl overflow-hidden bg-stone-900 aspect-[4/5] cursor-pointer border border-stone-800/80 shadow-md hover:border-amber-500/50 transition-all duration-300 transform hover:-translate-y-1"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/95 via-stone-950/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Top Tag */}
              <div className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-stone-950/70 backdrop-blur-xs text-[10px] font-medium text-amber-300 border border-amber-500/30">
                <MapPin className="w-2.5 h-2.5" />
                <span>{item.location}</span>
              </div>

              {/* Top Right Zoom Icon */}
              <div className="absolute top-2.5 right-2.5 z-10 opacity-0 group-hover:opacity-100 transition-opacity p-1.5 rounded-full bg-stone-950/80 text-amber-400 backdrop-blur-xs">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>

              {/* Bottom Caption Info */}
              <div className="absolute bottom-0 inset-x-0 p-3.5 z-10 space-y-1">
                <span className="text-[10px] text-amber-400/90 font-medium tracking-wide uppercase font-serif block">
                  {item.category}
                </span>
                <h3 className="font-serif text-sm font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-[11px] text-stone-300 line-clamp-2 font-light opacity-90 leading-snug hidden sm:block">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA & Count */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-stone-800 text-xs text-stone-400">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Showing {displayedImages.length} of {filteredImages.length} captured moments in {activeCategory}</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/201070335551"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>Inquire About Visiting These Locations</span>
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-stone-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedImageIndex(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-5 right-5 z-20 p-2 rounded-full bg-stone-900/80 hover:bg-stone-800 text-stone-300 hover:text-white transition-colors cursor-pointer border border-stone-700"
            aria-label="Close photo preview"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Prev */}
          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-6 z-20 p-3 rounded-full bg-stone-900/80 hover:bg-amber-400 hover:text-stone-950 text-white transition-colors cursor-pointer border border-stone-700 shadow-xl"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Navigation Next */}
          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-6 z-20 p-3 rounded-full bg-stone-900/80 hover:bg-amber-400 hover:text-stone-950 text-white transition-colors cursor-pointer border border-stone-700 shadow-xl"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Container */}
          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col md:flex-row bg-[#1a1816] rounded-2xl overflow-hidden border border-stone-800 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Box */}
            <div className="flex-1 bg-black flex items-center justify-center p-2 min-h-[320px] max-h-[60vh] md:max-h-[85vh]">
              <img
                src={activeImage.image}
                alt={activeImage.title}
                className="max-h-full max-w-full object-contain rounded-lg"
              />
            </div>

            {/* Info Sidebar */}
            <div className="w-full md:w-80 p-6 md:p-8 flex flex-col justify-between space-y-6 bg-stone-900 border-t md:border-t-0 md:border-l border-stone-800 overflow-y-auto">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-stone-400">
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-950/80 border border-amber-500/40 text-amber-300 font-semibold uppercase tracking-wider text-[10px]">
                    {activeImage.category}
                  </span>
                  <span className="font-mono text-[11px] text-stone-400">
                    {(selectedImageIndex || 0) + 1} / {filteredImages.length}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white leading-tight">
                    {activeImage.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-amber-400 font-medium">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{activeImage.location}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed pt-2 border-t border-stone-800">
                  {activeImage.caption}
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-stone-800">
                <a
                  href={`https://wa.me/201070335551?text=${encodeURIComponent(`Marhaban Genuine Egypte, I am inquiring about visiting ${activeImage.location} ("${activeImage.title}"). Can you share tour details and availability?`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Inquire About This Location</span>
                </a>

                <Link
                  to="/tours"
                  onClick={() => setSelectedImageIndex(null)}
                  className="w-full py-2.5 px-4 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 hover:text-white font-medium text-xs transition-colors flex items-center justify-center gap-1.5 border border-stone-700"
                >
                  <Compass className="w-3.5 h-3.5 text-amber-400" />
                  <span>Browse Matching Tours</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
