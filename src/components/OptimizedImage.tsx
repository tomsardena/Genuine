import React, { useState, useEffect, useRef } from 'react';

export interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
  priority?: boolean;
  fallbackSrc?: string;
  sizes?: string;
  blurDataURL?: string;
}

// Warm Egyptian desert sunset vector blur placeholder (~550 bytes)
export const WARM_EGYPT_PLACEHOLDER =
  'data:image/svg+xml;charset=utf-8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 100"%3E%3Cdefs%3E%3ClinearGradient id="eg" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" stop-color="%233a3024"/%3E%3Cstop offset="35%25" stop-color="%236b5335"/%3E%3Cstop offset="70%25" stop-color="%238f6f43"/%3E%3Cstop offset="100%25" stop-color="%232e2316"/%3E%3C/linearGradient%3E%3Cfilter id="b"%3E%3CfeGaussianBlur stdDeviation="8"/%3E%3C/filter%3E%3C/defs%3E%3Crect width="100%25" height="100%25" fill="url(%23eg)"/%3E%3Ccircle cx="80" cy="45" r="28" fill="%23d4a359" opacity="0.3" filter="url(%23b)"/%3E%3Cpolygon points="20,95 65,40 110,95" fill="%234a3b2a" opacity="0.45" filter="url(%23b)"/%3E%3Cpolygon points="85,95 125,50 155,95" fill="%23564532" opacity="0.35" filter="url(%23b)"/%3E%3C/svg%3E';

const DEFAULT_FALLBACK = '/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg';

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  wrapperClassName = '',
  priority = false,
  fallbackSrc = DEFAULT_FALLBACK,
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  blurDataURL = WARM_EGYPT_PLACEHOLDER,
  onError,
  onLoad,
  ...props
}) => {
  const [currentSrc, setCurrentSrc] = useState<string>(src || fallbackSrc);
  const [hasError, setHasError] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Update src state when incoming prop changes
  useEffect(() => {
    if (src && src !== currentSrc && !hasError) {
      setCurrentSrc(src);
      setIsLoaded(false);
    }
  }, [src]);

  // Check if image is already cached by browser upon mount
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      setIsLoaded(true);
    }
  }, [currentSrc]);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (!hasError && currentSrc !== fallbackSrc) {
      setHasError(true);
      setCurrentSrc(fallbackSrc);
    }
    if (onError) onError(e);
  };

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setIsLoaded(true);
    if (onLoad) onLoad(e);
  };

  return (
    <div
      className={`relative w-full h-full overflow-hidden bg-stone-200 dark:bg-stone-800 ${wrapperClassName}`}
    >
      {/* 1. Low-fidelity warm blur-up placeholder layer */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-out z-0 ${
          isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
        style={{
          backgroundImage: `url("${blurDataURL}")`,
          filter: 'blur(16px)',
          transform: 'scale(1.1)',
        }}
      />

      {/* 2. Gentle golden shimmer effect while image transfers */}
      {!isLoaded && (
        <div
          aria-hidden="true"
          className="absolute inset-0 z-1 pointer-events-none overflow-hidden"
        >
          <div className="w-full h-full bg-gradient-to-r from-transparent via-amber-200/20 dark:via-amber-400/10 to-transparent animate-shimmer" />
        </div>
      )}

      {/* 3. Primary image with smooth unblur & fade transition */}
      <img
        ref={imgRef}
        src={currentSrc}
        alt={alt || 'Genuine Egypte tour and travel experience'}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        referrerPolicy="no-referrer"
        sizes={sizes}
        onError={handleError}
        onLoad={handleLoad}
        className={`relative z-2 w-full h-full object-cover transition-all duration-700 ease-out ${
          isLoaded ? 'blur-0 scale-100 opacity-100' : 'blur-md scale-105 opacity-0'
        } ${className}`}
        {...props}
      />
    </div>
  );
};
