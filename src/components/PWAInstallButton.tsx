import React, { useState } from 'react';
import { Download, Smartphone, X, CheckCircle, Share, PlusSquare } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

interface PWAInstallButtonProps {
  className?: string;
  variant?: 'navbar' | 'mobile' | 'compact';
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({
  className = '',
  variant = 'navbar',
}) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);
  const [installing, setInstalling] = useState(false);

  // If already running as an installed PWA, hide the button
  if (isInstalled) {
    return null;
  }

  const handleInstallClick = async () => {
    if (isInstallable) {
      setInstalling(true);
      try {
        await install();
      } finally {
        setInstalling(false);
      }
    } else if (isIOS) {
      setShowIOSGuide(true);
    }
  };

  // Only show if installable on desktop/Android or if on iOS Safari
  if (!isInstallable && !isIOS) {
    return null;
  }

  return (
    <>
      {variant === 'navbar' && (
        <button
          onClick={handleInstallClick}
          disabled={installing}
          className={`hidden md:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-amber-900 dark:text-amber-200 bg-amber-100/80 dark:bg-amber-950/60 hover:bg-amber-200 dark:hover:bg-amber-900/60 rounded-lg transition-colors border border-amber-300/60 dark:border-amber-700/60 whitespace-nowrap shadow-xs ${className}`}
          title="Install Genuine Egypte App on your device for fast offline access"
        >
          <Download className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400" />
          <span>{isIOS ? 'Install App' : 'Install App'}</span>
        </button>
      )}

      {variant === 'mobile' && (
        <button
          onClick={handleInstallClick}
          disabled={installing}
          className={`flex items-center justify-center gap-2 py-2.5 px-4 bg-amber-700 hover:bg-amber-800 text-white rounded-lg text-xs font-semibold transition-colors shadow-xs ${className}`}
        >
          <Smartphone className="w-4 h-4" />
          <span>{isIOS ? 'Install App on iPhone / iPad' : 'Install Genuine Egypte App'}</span>
        </button>
      )}

      {variant === 'compact' && (
        <button
          onClick={handleInstallClick}
          disabled={installing}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-amber-800 dark:text-amber-300 hover:bg-amber-50 dark:hover:bg-amber-950/40 rounded-md border border-amber-200 dark:border-amber-800 transition-colors ${className}`}
        >
          <Download className="w-3.5 h-3.5" />
          <span>Install</span>
        </button>
      )}

      {/* iOS Safari Guided Install Sheet */}
      {showIOSGuide && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
          <div className="w-full max-w-md rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-6 shadow-2xl space-y-5 animate-in slide-in-from-bottom-4 duration-200">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <img
                  src="/pwa-192x192.png"
                  alt="Genuine Egypte"
                  className="w-12 h-12 rounded-xl object-contain shadow-xs border border-stone-200 dark:border-stone-700"
                />
                <div>
                  <h3 className="text-base font-bold text-stone-900 dark:text-stone-100 font-serif">
                    Install Genuine Egypte
                  </h3>
                  <p className="text-xs text-stone-500 dark:text-stone-400">
                    Fast access to tours, offline itineraries & guides
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowIOSGuide(false)}
                className="p-1.5 text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3.5 text-xs sm:text-sm text-stone-700 dark:text-stone-300 bg-stone-50 dark:bg-stone-800/60 p-4 rounded-xl border border-stone-200/80 dark:border-stone-700/60">
              <div className="flex items-start gap-3">
                <div className="p-1.5 bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-300 rounded-md shrink-0">
                  <Share className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold block text-stone-900 dark:text-stone-100">Step 1: Tap Share</span>
                  <span className="text-stone-600 dark:text-stone-400">
                    Tap the <strong>Share</strong> button at the bottom of Safari (or top right on iPad).
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1.5 bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-300 rounded-md shrink-0">
                  <PlusSquare className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold block text-stone-900 dark:text-stone-100">Step 2: Add to Home Screen</span>
                  <span className="text-stone-600 dark:text-stone-400">
                    Scroll down the share sheet and select <strong>&quot;Add to Home Screen&quot;</strong>.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1.5 bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 rounded-md shrink-0">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold block text-stone-900 dark:text-stone-100">Step 3: Launch Genuine Egypte</span>
                  <span className="text-stone-600 dark:text-stone-400">
                    Tap <strong>Add</strong> in the top right to install the standalone app icon.
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowIOSGuide(false)}
              className="w-full py-2.5 rounded-lg bg-stone-900 hover:bg-stone-800 dark:bg-amber-600 dark:hover:bg-amber-500 text-white font-medium text-xs sm:text-sm transition-colors"
            >
              Got It
            </button>
          </div>
        </div>
      )}
    </>
  );
};
