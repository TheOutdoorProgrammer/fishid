'use client';

import React from 'react';
import { Brain, TrendingUp, Play } from 'lucide-react';
import { useGameStore, FISH_IDS } from '@/store/gameStore';
import { FISH } from '@/fish';
import { assetPath } from '@/lib/utils';
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
    <div className="space-y-6 pb-20">
      <div className="space-y-2">
        <h1 className="text-3xl font-black text-white px-1">Review</h1>
        <p className="text-white/60 px-1">
          Strengthen your knowledge by reviewing fish you've struggled with.
        </p>
      </div>

      <Card className="relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <Brain size={120} />
        </div>

        <div className="relative z-10">
          <h2 className="text-xl font-black mb-2 flex items-center gap-2">
            <Brain className="text-blue" size={24} />
            Mixed Review
          </h2>
          <p className="text-white/70 mb-6 text-sm leading-relaxed max-w-[80%]">
            A personalized quiz combining your weak spots with new fish to maximize retention.
          </p>

          <Button
            onClick={() => onNavigate('quiz', { mode: 'review' })}
            className="w-full flex items-center justify-center gap-2"
          >
            <Play size={18} fill="currentColor" />
            Start Review Session
          </Button>
        </div>
      </Card>

      <div>
        <h2 className="text-lg font-bold mb-3 px-1 flex items-center gap-2 text-white/90">
          <TrendingUp className="text-red-400" size={20} />
          Areas for Improvement
        </h2>

        {weakSpots.length > 0 ? (
          <div className="space-y-3">
            {weakSpots.map((fish) => (
              <Card
                key={fish.id}
                padding={false}
                className="p-3 flex items-center gap-4 hover:bg-white/5 transition-colors"
              >
                <div className="w-16 h-16 shrink-0 bg-black/30 rounded-lg overflow-hidden border border-white/10 relative">
                  {fish.image && fish.image[0] ? (
                    <img
                      src={assetPath(fish.image[0])}
                      alt={fish.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-2xl">
                      🐟
                    </div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-base truncate">{fish.name}</h3>
                  <p className="text-xs text-white/50 italic truncate">{fish.scientific}</p>

                  <div className="mt-2 flex items-center gap-2">
                    <div className="h-1.5 flex-1 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-red-400 rounded-full"
                        style={{ width: `${fish.accuracy}%` }}
                      />
                    </div>
                    <span className="text-xs font-bold text-red-400 w-8 text-right">
                      {fish.accuracy}%
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="py-12 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-4">
              <TrendingUp size={32} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">No weak spots yet!</h3>
            <p className="text-white/50 text-sm max-w-[250px]">
              You're doing great! Keep taking quizzes to identify areas to focus on.
            </p>
          </Card>
        )}
      </div>
    </div>
  );
}
