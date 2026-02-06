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
        setUpdateAvailable(true);
        setRegistration(reg);
      }
    };

    // Check for existing registration
    navigator.serviceWorker.ready.then((reg) => {
      // Check if there's already a waiting worker
      if (reg.waiting) {
        handleUpdate(reg);
      }

      // Listen for new updates
      reg.addEventListener('updatefound', () => {
        const newWorker = reg.installing;
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // New update available
              handleUpdate(reg);
            }
          });
        }
      });
    });

    // Handle controller change (when skipWaiting is called)
    let refreshing = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (!refreshing) {
        refreshing = true;
        window.location.reload();
      }
    });
  }, []);

  const applyUpdate = useCallback(() => {
    if (registration?.waiting) {
      // Tell the waiting service worker to skip waiting
      registration.waiting.postMessage({ type: 'SKIP_WAITING' });
    }
  }, [registration]);

  return { updateAvailable, applyUpdate };
}
