'use client';

import React from 'react';
import { useGameStore, LESSONS } from '@/store/gameStore';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import ProgressBar from '@/components/ui/ProgressBar';
import StarRating from '@/components/ui/StarRating';

interface LearnScreenProps {
  onNavigate: (screen: string, lessonId?: number | string) => void;
}

export default function LearnScreen({ onNavigate }: LearnScreenProps) {
  const { lessons, toggleSkipUnlock, settings } = useGameStore();

  return (
    <div className="space-y-6">
      <Card>
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl font-black mb-1">Lessons</h2>
            <p className="text-sm opacity-80">Complete them in order to unlock the next.</p>
          </div>
          <Button
            variant="ghost"
            onClick={toggleSkipUnlock}
            className={`!p-2 min-h-0 h-10 w-10 rounded-full ${settings.allowSkipUnlock ? 'text-yellow-400' : 'opacity-50'}`}
            title="Allow skip unlock (toggle)"
          >
            🔓
          </Button>
        </div>
      </Card>

      <div className="grid grid-cols-1 gap-4">
        {LESSONS.map((lesson) => {
          const state = lessons[lesson.id] || { unlocked: false, completed: false, bestStars: 0 };
          const isLocked = !state.unlocked && !settings.allowSkipUnlock;

          return (
            <div
              key={lesson.id}
              onClick={() => !isLocked && onNavigate('learnMode', lesson.id)}
              className={`
                relative bg-panel border rounded-2xl p-5 flex gap-4 items-center transition-all
                ${isLocked ? 'opacity-60 grayscale border-[rgba(255,255,255,.05)]' : 'cursor-pointer border-[rgba(255,255,255,.15)] active:scale-[0.98] hover:bg-[rgba(255,255,255,.05)]'}
              `}
            >
              <div className="text-3xl bg-[rgba(0,0,0,.2)] w-14 h-14 rounded-full flex items-center justify-center border border-[rgba(255,255,255,.05)]">
                {lesson.icon}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-bold text-lg truncate pr-2">{lesson.title}</h3>
                  {state.completed && <StarRating stars={state.bestStars} />}
                  {isLocked && <span className="text-xl">🔒</span>}
                </div>

                <p className="text-sm opacity-70 truncate">{lesson.description}</p>

                {state.completed && (
                  <div className="mt-2">
                    <ProgressBar progress={100} className="h-1.5" />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
