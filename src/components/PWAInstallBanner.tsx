import React, { useState, useEffect } from 'react';
import { Smartphone, Download, X, Sparkles } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

export const PWAInstallBanner: React.FC = () => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [dismissed, setDismissed] = useState(true);
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  useEffect(() => {
    // Check if dismissed in this session
    if (typeof window !== 'undefined') {
      const isDismissed = sessionStorage.getItem('pwa_banner_dismissed') === 'true';
      if (!isDismissed) {
        // Show after a gentle 3-second delay
        const timer = setTimeout(() => {
          setDismissed(false);
        }, 3000);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  const handleDismiss = () => {
    setDismissed(true);
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('pwa_banner_dismissed', 'true');
    }
  };

  if (isInstalled || dismissed || (!isInstallable && !isIOS)) {
    return null;
  }

  return (
    <>
      <div className="fixed bottom-20 right-4 sm:right-6 sm:bottom-6 z-40 max-w-sm w-[calc(100vw-2rem)] bg-white dark:bg-stone-900 border border-amber-300 dark:border-amber-700/60 rounded-xl p-4 shadow-xl animate-in slide-in-from-bottom-5 duration-300 backdrop-blur-md">
        <div className="flex items-start gap-3">
          <img
            src="/pwa-192x192.png"
            alt="Genuine Egypte App"
            className="w-10 h-10 rounded-lg object-contain shrink-0 border border-stone-200 dark:border-stone-700"
          />
          <div className="flex-1 min-w-0 pr-6">
            <div className="flex items-center gap-1.5 text-amber-800 dark:text-amber-400 text-[11px] font-semibold uppercase tracking-wider font-serif">
              <Sparkles className="w-3 h-3" />
              <span>Install Web App</span>
            </div>
            <h4 className="text-xs sm:text-sm font-bold text-stone-900 dark:text-stone-100 truncate">
              Genuine Egypte on your Device
            </h4>
            <p className="text-[11px] text-stone-600 dark:text-stone-400 mt-0.5 line-clamp-2">
              Add to home screen for instant booking access and offline itineraries.
            </p>
          </div>
          <button
            onClick={handleDismiss}
            className="absolute top-3 right-3 p-1 text-stone-400 hover:text-stone-600 dark:hover:text-stone-300 rounded-md"
            aria-label="Dismiss banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-3 flex items-center gap-2">
          {isInstallable && (
            <button
              onClick={install}
              className="flex-1 py-1.5 px-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Install Now</span>
            </button>
          )}

          {isIOS && (
            <button
              onClick={() => setShowIOSGuide(true)}
              className="flex-1 py-1.5 px-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-xs"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>How to Install</span>
            </button>
          )}

          <button
            onClick={handleDismiss}
            className="py-1.5 px-3 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white rounded-lg text-xs font-medium"
          >
            Not Now
          </button>
        </div>
      </div>

      {showIOSGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="w-full max-w-sm rounded-xl bg-white dark:bg-stone-900 p-5 shadow-2xl border border-stone-200 dark:border-stone-800 space-y-4">
            <h3 className="font-serif font-bold text-stone-900 dark:text-stone-100 text-sm sm:text-base">
              Install Genuine Egypte on iPhone / iPad
            </h3>
            <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
              1. Tap the <strong>Share</strong> button at bottom of Safari.<br />
              2. Scroll and tap <strong>Add to Home Screen</strong>.<br />
              3. Tap <strong>Add</strong> in the top right corner.
            </p>
            <button
              onClick={() => setShowIOSGuide(false)}
              className="w-full py-2 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};
