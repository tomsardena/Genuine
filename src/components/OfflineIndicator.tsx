import React from 'react';
import { WifiOff } from 'lucide-react';
import { useOnlineStatus } from '../hooks/useOnlineStatus';

export const OfflineIndicator: React.FC = () => {
  const isOnline = useOnlineStatus();

  if (isOnline) {
    return null;
  }

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-4 left-3 right-3 sm:left-4 sm:right-auto sm:max-w-md z-50 flex items-center gap-2.5 rounded-xl bg-stone-900/95 dark:bg-stone-800/95 text-stone-100 px-3.5 py-2.5 text-xs font-medium shadow-xl border border-amber-500/30 backdrop-blur-xs animate-in slide-in-from-bottom-2 duration-200"
    >
      <span className="relative flex h-2.5 w-2.5 shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
      </span>
      <WifiOff className="w-3.5 h-3.5 text-amber-400 shrink-0" />
      <span>Offline Mode — Viewing cached Egyptian itineraries & tour guides.</span>
    </div>
  );
};
