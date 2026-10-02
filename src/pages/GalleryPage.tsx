import React, { useState, useEffect } from 'react';
import { GALLERY_DATA, GALLERY_CATEGORIES, GalleryImage } from '../data/galleryData';
import { SEOHead } from '../components/SEOHead';
import { OptimizedImage } from '../components/OptimizedImage';
import { Link } from '../utils/router';
import {
  Camera,
  MapPin,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  MessageCircle,
  Compass,
  Search,
  Filter
} from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All Moments');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // Filter images based on category and search query
  const filteredImages = GALLERY_DATA.filter((img) => {
    const matchesCategory = activeCategory === 'All Moments' || img.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      img.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      img.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      img.caption.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
    <>
      <SEOHead
        title="Photo Gallery | Authentic Egypt Moments – Genuine Egypte"
        description="Browse our authentic photo gallery of private Nile cruises, Luxor temples, Giza Pyramids, and local Egyptian moments captured on the ground."
        canonicalPath="/gallery"
        ogImage="/images/gallery/IMG-20261001-WA0011.jpg"
      />

      <div className="bg-[#FAF8F5] dark:bg-[#121110] text-stone-800 dark:text-stone-100 min-h-screen transition-colors">
        {/* Hero Header */}
        <section className="relative py-16 sm:py-20 bg-stone-900 text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <OptimizedImage
              src="/images/gallery/IMG-20261001-WA0012.jpg"
              alt="Egyptian sunset on the River Nile"
              priority
              className="w-full h-full object-cover filter brightness-40 blur-xs"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/70 to-black/50" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-950/70 border border-amber-500/40 text-amber-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
              <Camera className="w-3.5 h-3.5 text-amber-400" />
              <span>Authentic Visual Archive · 33 Moments</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Egypt in Real Life
            </h1>

            <p className="max-w-2xl mx-auto text-xs sm:text-sm text-stone-200 font-light leading-relaxed">
              Unfiltered moments from our private expeditions across Luxor, Aswan, the Nile Valley, and Cairo. Captured on the ground by our licensed Egyptologists and travelers.
            </p>
          </div>
        </section>

        {/* Filter Bar & Controls */}
        <section className="sticky top-0 z-20 bg-white/95 dark:bg-[#151311]/95 backdrop-blur-md border-b border-stone-200 dark:border-stone-800 py-3 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
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
                    className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                      isActive
                        ? 'bg-amber-500 text-stone-950 font-bold shadow-xs'
                        : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
                    }`}
                  >
                    <span>{category}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isActive ? 'bg-stone-950/20 text-stone-950 font-bold' : 'bg-stone-200 dark:bg-stone-700 text-stone-500 dark:text-stone-400'
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-64">
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setSelectedImageIndex(null);
                }}
                placeholder="Search location or keyword..."
                className="w-full pl-9 pr-4 py-1.5 text-xs bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-lg text-stone-800 dark:text-stone-100 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Gallery Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-8">
          {filteredImages.length === 0 ? (
            <div className="text-center py-16 space-y-4">
              <p className="text-stone-500 dark:text-stone-400 text-sm">
                No photos found matching &ldquo;{searchQuery}&rdquo; in {activeCategory}.
              </p>
              <button
                onClick={() => {
                  setActiveCategory('All Moments');
                  setSearchQuery('');
                }}
                className="px-4 py-2 text-xs font-semibold bg-amber-500 text-stone-950 rounded-lg hover:bg-amber-400 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {filteredImages.map((item, idx) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedImageIndex(idx)}
                  className="group relative rounded-xl overflow-hidden bg-stone-900 aspect-[4/5] cursor-pointer border border-stone-200 dark:border-stone-800 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <OptimizedImage
                    src={item.image}
                    alt={`${item.title} – ${item.location}, Egypt`}
                    priority={idx < 4}
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-95 group-hover:brightness-100"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/95 via-stone-950/30 to-transparent opacity-75 group-hover:opacity-95 transition-opacity" />

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
                    <span className="text-[10px] text-amber-400 font-medium tracking-wide uppercase font-serif block">
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
          )}
        </main>
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
            className="absolute top-3 right-3 sm:top-5 sm:right-5 z-30 p-2 sm:p-2.5 rounded-full bg-stone-900/90 hover:bg-stone-800 text-stone-300 hover:text-white transition-colors cursor-pointer border border-stone-700 shadow-lg min-w-[40px] min-h-[40px] flex items-center justify-center"
            aria-label="Close photo preview"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Navigation Prev */}
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-6 z-20 p-2 sm:p-3 rounded-full bg-stone-900/80 hover:bg-amber-400 hover:text-stone-950 text-white transition-colors cursor-pointer border border-stone-700 shadow-xl min-w-[40px] min-h-[40px] flex items-center justify-center"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Navigation Next */}
          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-6 z-20 p-2 sm:p-3 rounded-full bg-stone-900/80 hover:bg-amber-400 hover:text-stone-950 text-white transition-colors cursor-pointer border border-stone-700 shadow-xl min-w-[40px] min-h-[40px] flex items-center justify-center"
            aria-label="Next photo"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Modal Container */}
          <div
            className="relative max-w-5xl w-full max-h-[92vh] flex flex-col md:flex-row bg-[#1a1816] rounded-2xl overflow-hidden border border-stone-800 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Box */}
            <div className="flex-1 bg-black flex items-center justify-center p-2 min-h-[260px] sm:min-h-[320px] max-h-[50vh] md:max-h-[85vh]">
              <OptimizedImage
                src={activeImage.image}
                alt={activeImage.title}
                priority
                sizes="(max-width: 1024px) 90vw, 1000px"
                className="max-h-full max-w-full object-contain rounded-lg"
              />
            </div>

            {/* Info Sidebar */}
            <div className="w-full md:w-80 p-4 sm:p-6 md:p-8 flex flex-col justify-between space-y-4 sm:space-y-6 bg-stone-900 border-t md:border-t-0 md:border-l border-stone-800 overflow-y-auto max-h-[42vh] md:max-h-none">
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
    </>
  );
};
