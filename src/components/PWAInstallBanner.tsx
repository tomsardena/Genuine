import React, { useState, useEffect } from 'react';
import { Smartphone, Download, X, Sparkles, Share, PlusSquare, CheckCircle } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

export const PWAInstallBanner: React.FC = () => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [dismissed, setDismissed] = useState(true);
  const [showIOSGuide, setShowIOSGuide] = useState(false);
  const [installing, setInstalling] = useState(false);

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

  const handleInstall = async () => {
    if (isInstallable) {
      setInstalling(true);
      try {
        await install();
        handleDismiss();
      } finally {
        setInstalling(false);
      }
    } else if (isIOS) {
      setShowIOSGuide(true);
    }
  };

  if (isInstalled || dismissed || (!isInstallable && !isIOS)) {
    return null;
  }

  return (
    <>
      <div
        role="region"
        aria-label="Install Genuine Egypte App"
        className="fixed bottom-22 sm:bottom-24 left-3 right-3 sm:left-auto sm:right-6 sm:w-[360px] z-40 bg-white/95 dark:bg-stone-900/95 backdrop-blur-md border border-amber-300/80 dark:border-amber-600/40 rounded-2xl p-4 shadow-xl shadow-stone-950/10 dark:shadow-black/50 transition-all duration-300 animate-in fade-in slide-in-from-bottom-3"
      >
        <div className="flex items-start gap-3">
          <div className="relative shrink-0">
            <img
              src="/pwa-192x192.png"
              alt="Genuine Egypte App"
              className="w-11 h-11 rounded-xl object-contain border border-stone-200 dark:border-stone-700 bg-stone-950 p-0.5 shadow-xs"
            />
            <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-amber-600 rounded-full flex items-center justify-center text-white text-[9px] font-bold shadow-xs">
              ★
            </span>
          </div>

          <div className="flex-1 min-w-0 pr-6">
            <div className="flex items-center gap-1.5 text-amber-800 dark:text-amber-400 text-[10px] font-bold uppercase tracking-wider font-serif">
              <Sparkles className="w-3 h-3 text-amber-600 dark:text-amber-400 shrink-0" />
              <span>Genuine Egypte App</span>
            </div>
            <h4 className="text-xs sm:text-sm font-serif font-bold text-stone-900 dark:text-stone-100 truncate mt-0.5">
              Install for Offline Access
            </h4>
            <p className="text-[11px] leading-relaxed text-stone-600 dark:text-stone-300 mt-0.5">
              Access itineraries, temple guides & direct booking offline.
            </p>
          </div>

          <button
            onClick={handleDismiss}
            className="absolute top-3 right-3 p-1.5 text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
            aria-label="Dismiss install prompt"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-3.5 pt-3 border-t border-stone-100 dark:border-stone-800/80 flex items-center gap-2">
          {isInstallable && (
            <button
              onClick={handleInstall}
              disabled={installing}
              className="flex-1 py-2 px-3.5 bg-amber-600 hover:bg-amber-700 active:bg-amber-800 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{installing ? 'Installing...' : 'Install App'}</span>
            </button>
          )}

          {isIOS && (
            <button
              onClick={() => setShowIOSGuide(true)}
              className="flex-1 py-2 px-3.5 bg-amber-600 hover:bg-amber-700 active:bg-amber-800 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-xs"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>How to Install</span>
            </button>
          )}

          <button
            onClick={handleDismiss}
            className="py-2 px-3 text-stone-500 hover:text-stone-800 dark:text-stone-400 dark:hover:text-stone-200 rounded-xl text-xs font-medium hover:bg-stone-100 dark:hover:bg-stone-800/60 transition-colors"
          >
            Not Now
          </button>
        </div>
      </div>

      {showIOSGuide && (
        <div
          role="dialog"
          aria-label="Install Genuine Egypte on iPhone / iPad"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200"
        >
          <div className="w-full max-w-sm mx-auto rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-5 shadow-2xl space-y-4 animate-in zoom-in-95 duration-200">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <img
                  src="/pwa-192x192.png"
                  alt="Genuine Egypte"
                  className="w-10 h-10 rounded-xl object-contain bg-stone-950 p-0.5 border border-stone-200 dark:border-stone-700"
                />
                <div>
                  <h3 className="font-serif font-bold text-stone-900 dark:text-stone-100 text-sm sm:text-base">
                    Install on iPhone / iPad
                  </h3>
                  <p className="text-[11px] text-stone-500 dark:text-stone-400">
                    Add to your Home Screen in Safari
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowIOSGuide(false)}
                className="p-1.5 text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
                aria-label="Close guide"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-stone-700 dark:text-stone-300 bg-stone-50 dark:bg-stone-800/60 p-3.5 rounded-xl border border-stone-200/80 dark:border-stone-700/60">
              <div className="flex items-start gap-2.5">
                <div className="p-1.5 bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 rounded-md shrink-0">
                  <Share className="w-3.5 h-3.5" />
                </div>
                <div className="leading-snug">
                  <span className="font-semibold block text-stone-900 dark:text-stone-100">Step 1: Tap Share</span>
                  <span className="text-stone-500 dark:text-stone-400 text-[11px]">
                    Tap the <strong>Share</strong> button at bottom of Safari.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-1.5 bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 rounded-md shrink-0">
                  <PlusSquare className="w-3.5 h-3.5" />
                </div>
                <div className="leading-snug">
                  <span className="font-semibold block text-stone-900 dark:text-stone-100">Step 2: Add to Home Screen</span>
                  <span className="text-stone-500 dark:text-stone-400 text-[11px]">
                    Scroll and tap <strong>&quot;Add to Home Screen&quot;</strong>.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-1.5 bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 rounded-md shrink-0">
                  <CheckCircle className="w-3.5 h-3.5" />
                </div>
                <div className="leading-snug">
                  <span className="font-semibold block text-stone-900 dark:text-stone-100">Step 3: Tap Add</span>
                  <span className="text-stone-500 dark:text-stone-400 text-[11px]">
                    Tap <strong>Add</strong> in top right to launch offline anytime.
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowIOSGuide(false)}
              className="w-full py-2 bg-stone-900 hover:bg-stone-800 dark:bg-amber-600 dark:hover:bg-amber-500 text-white text-xs font-semibold rounded-xl transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </>
  );
};
