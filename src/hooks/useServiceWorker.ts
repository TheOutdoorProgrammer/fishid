'use client';

import { useState, useEffect, useCallback } from 'react';

export function useServiceWorker() {
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const [registration, setRegistration] = useState<ServiceWorkerRegistration | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
      return;
    }

    const handleUpdate = (reg: ServiceWorkerRegistration) => {
      if (reg.waiting) {
        console.log('[SW] Update available - waiting worker found');
        setUpdateAvailable(true);
        setRegistration(reg);
      }
    };

    // Check for existing registration
    navigator.serviceWorker.ready.then((reg) => {
      console.log('[SW] Service worker ready');
      setRegistration(reg);
      
      // Check if there's already a waiting worker
      if (reg.waiting) {
        console.log('[SW] Found waiting worker on ready');
        handleUpdate(reg);
      }

      // Listen for new updates
      reg.addEventListener('updatefound', () => {
        console.log('[SW] Update found - new worker installing');
        const newWorker = reg.installing;
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            console.log('[SW] New worker state:', newWorker.state);
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // New update available
              handleUpdate(reg);
            }
          });
        }
      });

      // Proactively check for updates
      reg.update().catch(() => {
        // Ignore errors from update check
      });
    });

    // Also check getRegistration for waiting workers
    navigator.serviceWorker.getRegistration().then((reg) => {
      if (reg?.waiting) {
        console.log('[SW] Found waiting worker via getRegistration');
        handleUpdate(reg);
      }
    });

    // Handle controller change (when skipWaiting is called)
    let refreshing = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      console.log('[SW] Controller changed - reloading');
      if (!refreshing) {
        refreshing = true;
        window.location.reload();
      }
    });
  }, []);

  const applyUpdate = useCallback(() => {
    console.log('[SW] Applying update...');
    if (registration?.waiting) {
      // Tell the waiting service worker to skip waiting
      registration.waiting.postMessage({ type: 'SKIP_WAITING' });
    }
  }, [registration]);

  return { updateAvailable, applyUpdate };
}
