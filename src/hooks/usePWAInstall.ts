'use client';

import { useState, useEffect, useCallback } from 'react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export function usePWAInstall() {
  const [isInstalled, setIsInstalled] = useState<boolean | null>(null); // null = checking
  const [isInstallable, setIsInstallable] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Optional bypass for testing / screenshots (kept intentionally)
    const params = new URLSearchParams(window.location.search);
    const bypass = params.get('bypass') === 'true';

    // Check if already running as installed PWA
    const isStandalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as any).standalone === true || // iOS Safari
      document.referrer.includes('android-app://');

    setIsInstalled(bypass || isStandalone);
    if (bypass) {
      setIsInstallable(false);
      setDeferredPrompt(null);
    }

    // Detect iOS for manual install instructions
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
    setIsIOS(iOS);

    // Listen for install prompt (Chrome/Android)
    const handleBeforeInstall = (e: Event) => {
      // If bypass is enabled, keep the app usable in a normal tab.
      if (bypass) return;

      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setIsInstallable(true);
      setIsInstalled(false);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstall);

    // Listen for successful install
    window.addEventListener('appinstalled', () => {
      setIsInstalled(true);
      setIsInstallable(false);
      setDeferredPrompt(null);
    });

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
    };
  }, []);

  const promptInstall = useCallback(async () => {
    if (!deferredPrompt) return false;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      setIsInstalled(true);
      setIsInstallable(false);
    }
    
    setDeferredPrompt(null);
    return outcome === 'accepted';
  }, [deferredPrompt]);

  return {
    isInstalled,
    isInstallable,
    isIOS,
    promptInstall,
    // Show install banner if not installed and either installable (Android) or iOS
    showInstallBanner: !isInstalled && (isInstallable || isIOS),
  };
}
