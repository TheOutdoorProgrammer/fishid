'use client';

import { useEffect } from 'react';

interface ToastProps {
  message: string;
  show: boolean;
  onHide: () => void;
  duration?: number;
}

export default function Toast({ message, show, onHide, duration = 2000 }: ToastProps) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onHide, duration);
      return () => clearTimeout(timer);
    }
  }, [show, duration, onHide]);

  return (
    <div
      className={`fixed top-[calc(70px+env(safe-area-inset-top))] left-1/2 -translate-x-1/2 w-[calc(100%-32px)] max-w-[520px] bg-panel-2 border border-white/10 rounded-[var(--radius)] px-4 py-3 font-bold text-sm text-center z-[1000] shadow-2xl shadow-black/50 transition-all duration-300 ease-out ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}
    >
      {message}
    </div>
  );
}
