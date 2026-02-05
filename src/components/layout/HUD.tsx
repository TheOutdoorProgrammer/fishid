'use client';

import { useEffect, useState } from 'react';
import { useGameStore } from '@/store/gameStore';

export default function HUD() {
  const { hearts, heartsMax, lastHeartTs, xp, streak } = useGameStore();
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    const HEART_REGEN_MS = 600000;

    const updateCountdown = () => {
      if (hearts >= heartsMax) {
        setCountdown('');
        return;
      }

      const now = Date.now();
      const elapsed = now - lastHeartTs;
      const timeToNext = HEART_REGEN_MS - (elapsed % HEART_REGEN_MS);
      const minutes = Math.floor(timeToNext / 60000);
      const seconds = Math.floor((timeToNext % 60000) / 1000);
      setCountdown(`+1 ${minutes}:${seconds.toString().padStart(2, '0')}`);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [hearts, heartsMax, lastHeartTs]);

  return (
    <div className="flex items-center gap-3 text-sm">
      <div className="flex items-center gap-1">
        <span>❤️</span>
        <span className="font-bold">{hearts}</span>
        {countdown && <span className="text-muted text-xs">{countdown}</span>}
      </div>

      <div className="flex items-center gap-1">
        <span>⭐</span>
        <span className="font-bold">{xp}</span>
      </div>

      {streak > 0 && (
        <div className="flex items-center gap-1">
          <span>🔥</span>
          <span className="font-bold">{streak}</span>
        </div>
      )}
    </div>
  );
}
