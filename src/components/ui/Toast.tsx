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
      className={`fixed top-[calc(70px+env(safe-area-inset-top))] left-1/2 -translate-x-1/2 w-[calc(100%-28px)] max-w-[520px] bg-[rgba(10,20,28,.92)] border border-[rgba(255,255,255,.12)] rounded-2xl px-3.5 py-2.5 font-bold text-sm text-center z-[1000] backdrop-blur-[12px] shadow-[0_8px_32px_rgba(0,0,0,.45)] transition-all duration-300 ease-[cubic-bezier(.175,.885,.32,1.275)] ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-[120%] pointer-events-none'
      }`}
    >
      {message}
    </div>
  );
}
