'use client';

import { useEffect, useState } from 'react';
import { useGameStore } from '@/store/gameStore';
import { Heart, Star, Flame } from '../ui/icons';

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
    <div className="flex items-center gap-4 text-sm font-medium">
      <div className="flex items-center gap-1.5 bg-black/20 px-2 py-1 rounded-full border border-white/5">
        <Heart size={16} className="text-danger fill-danger" />
        <span className="text-white">{hearts}</span>
        {countdown && <span className="text-muted text-[10px] tabular-nums">{countdown}</span>}
      </div>

      <div className="flex items-center gap-1.5 bg-black/20 px-2 py-1 rounded-full border border-white/5">
        <Star size={16} className="text-gold fill-gold" />
        <span className="text-white">{xp}</span>
      </div>

      {streak > 0 && (
        <div className="flex items-center gap-1.5 bg-black/20 px-2 py-1 rounded-full border border-white/5">
          <Flame size={16} className="text-gold-2 fill-gold-2" />
          <span className="text-white">{streak}</span>
        </div>
      )}
    </div>
  );
}
