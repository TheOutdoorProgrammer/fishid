'use client';

import React from 'react';
import { useGameStore, FISH_IDS } from '@/store/gameStore';
import { FISH } from '@/fish';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

interface ReviewScreenProps {
  onNavigate: (screen: string, params?: any) => void;
}

export default function ReviewScreen({ onNavigate }: ReviewScreenProps) {
  const { fishStats } = useGameStore();

  const weakSpots = FISH_IDS.filter((id) => {
    const stats = fishStats[id];
    if (!stats || stats.seen < 3) return false;
    const accuracy = stats.correct / stats.seen;
    return accuracy < 0.6;
  })
    .map((id) => {
      const stats = fishStats[id];
      return {
        id,
        ...FISH[id],
        accuracy: Math.round((stats.correct / stats.seen) * 100),
      };
    })
    .sort((a, b) => a.accuracy - b.accuracy)
    .slice(0, 5);

  return (
    <div className="space-y-4">
      <Card>
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-xl font-black mb-1">Review</h2>
            <p className="text-sm opacity-80">A quick mixed quiz to keep your streak.</p>
          </div>
        </div>

        <Button
          variant="primary"
          className="w-full mb-3"
          onClick={() => onNavigate('quiz', { mode: 'review' })}
        >
          Start Review
        </Button>

        <p className="text-xs opacity-60 text-center">
          Tip: Review pulls from fish you’ve seen before + a couple new ones.
        </p>
      </Card>

      <Card>
        <h2 className="text-xl font-black mb-3">Weak spots</h2>

        {weakSpots.length > 0 ? (
          <div className="space-y-3">
            {weakSpots.map((fish) => (
              <div
                key={fish.id}
                className="flex items-center gap-3 bg-[rgba(255,255,255,.05)] p-2 rounded-lg border border-[rgba(255,255,255,.05)]"
              >
                <div className="w-10 h-10 bg-[rgba(0,0,0,.3)] rounded flex items-center justify-center text-xl">
                  <div
                    dangerouslySetInnerHTML={{ __html: fish.svg || '🐟' }}
                    className="w-8 h-8 flex items-center justify-center"
                  />
                </div>
                <div className="flex-1">
                  <div className="font-bold text-sm">{fish.name}</div>
                  <div className="text-xs opacity-60">{fish.sci}</div>
                </div>
                <div className="text-red-400 font-bold text-sm">{fish.accuracy}%</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-sm opacity-60 py-4 text-center">No data yet — complete a quiz!</div>
        )}
      </Card>
    </div>
  );
}
