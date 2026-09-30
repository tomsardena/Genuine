import React, { useState } from 'react';

export interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  fallbackSrc?: string;
  sizes?: string;
}

const DEFAULT_FALLBACK = '/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg';

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  priority = false,
  fallbackSrc = DEFAULT_FALLBACK,
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  onError,
  onLoad,
  ...props
}) => {
  const [currentSrc, setCurrentSrc] = useState<string>(src || fallbackSrc);
  const [hasError, setHasError] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // If incoming src prop changes, update internal state
  React.useEffect(() => {
    if (src && src !== currentSrc && !hasError) {
      setCurrentSrc(src);
    }
  }, [src]);

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
    <img
      src={currentSrc}
      alt={alt || 'Genuine Egypte tour and travel experience'}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={priority ? 'high' : 'auto'}
      referrerPolicy="no-referrer"
      sizes={sizes}
      onError={handleError}
      onLoad={handleLoad}
      className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-85'} ${className}`}
      {...props}
    />
  );
};
