'use client';

import React from 'react';
import { useGameStore, LESSONS } from '@/store/gameStore';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import StarRating from '@/components/ui/StarRating';
import { Fish, Lock, Unlock, BookOpen, Check, ChevronRight } from '@/components/ui/icons';

interface LearnScreenProps {
  onNavigate: (screen: string, lessonId?: number | string) => void;
}

export default function LearnScreen({ onNavigate }: LearnScreenProps) {
  const { lessons, toggleSkipUnlock, settings } = useGameStore();

  return (
    <div className="space-y-6 pb-20">
      <Card className="relative overflow-hidden">
        <div className="flex justify-between items-start relative z-10">
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary border border-primary/20">
              <BookOpen size={24} />
            </div>
            <div>
              <h2 className="text-xl font-black mb-1">Learning Path</h2>
              <p className="text-sm opacity-80 max-w-[200px]">
                Master each species to unlock new challenges.
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            onClick={toggleSkipUnlock}
            className={`!p-2 min-h-0 h-10 w-10 rounded-full transition-colors ${
              settings.allowSkipUnlock
                ? 'text-yellow-400 bg-yellow-400/10 hover:bg-yellow-400/20'
                : 'opacity-30 hover:opacity-100 hover:bg-white/10'
            }`}
            title={settings.allowSkipUnlock ? 'Dev: Unlocked' : 'Dev: Unlock All'}
          >
            {settings.allowSkipUnlock ? <Unlock size={20} /> : <Lock size={20} />}
          </Button>
        </div>
      </Card>

      <div className="flex flex-col gap-3">
        {LESSONS.map((lesson, index) => {
          const state = lessons[lesson.id] || { unlocked: false, completed: false, bestStars: 0 };
          const isLocked = !state.unlocked && !settings.allowSkipUnlock;
          const isCompleted = state.completed;
          const isNext = !isLocked && !isCompleted;

          return (
            <div
              key={lesson.id}
              onClick={() => !isLocked && onNavigate('learnMode', lesson.id)}
              className={`
                group relative w-full text-left transition-all duration-200
                ${
                  isLocked
                    ? 'opacity-60 cursor-not-allowed'
                    : 'cursor-pointer hover:translate-x-1 active:scale-[0.99]'
                }
              `}
            >
              {index !== LESSONS.length - 1 && (
                <div
                  className={`
                  absolute left-[2.25rem] top-16 bottom-[-1rem] w-0.5 -z-10
                  ${isCompleted ? 'bg-primary/30' : 'bg-white/5'}
                `}
                />
              )}

              <Card
                padding={false}
                className={`
                  p-4 flex items-center gap-4 border-2 transition-all
                  ${
                    isCompleted
                      ? 'border-primary/20 bg-primary/5'
                      : isNext
                        ? 'border-primary/50 bg-white/5 shadow-[0_0_20px_rgba(0,0,0,0.2)]'
                        : 'border-transparent bg-panel/50'
                  }
                  ${!isLocked && 'hover:border-primary/30 hover:bg-white/10'}
                `}
              >
                <div
                  className={`
                  w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border transition-all duration-300
                  ${
                    isCompleted
                      ? 'bg-primary text-white border-primary shadow-[0_0_10px_rgba(var(--primary-rgb),0.3)]'
                      : isNext
                        ? 'bg-primary/20 text-primary border-primary/50'
                        : 'bg-white/5 text-white/20 border-white/5'
                  }
                `}
                >
                  {isCompleted ? (
                    <Check size={28} strokeWidth={3} />
                  ) : isLocked ? (
                    <Lock size={24} />
                  ) : (
                    <span className="font-black text-xl">{lesson.id}</span>
                  )}
                </div>

                <div className="flex-1 min-w-0 py-1">
                  <div className="flex justify-between items-center mb-1 gap-2">
                    <h3
                      className={`font-bold text-lg truncate ${isLocked ? 'text-muted' : 'text-white'}`}
                    >
                      {lesson.title}
                    </h3>
                    {isCompleted && (
                      <div className="shrink-0">
                        <StarRating stars={state.bestStars} />
                      </div>
                    )}
                  </div>

                  <p
                    className={`text-sm truncate pr-2 ${isLocked ? 'text-white/30' : 'text-white/60'}`}
                  >
                    {lesson.description}
                  </p>

                  {!isLocked && !isCompleted && (
                    <p className="text-[11px] text-gold/80 mt-1 font-bold">
                      Pass the quiz with 80%+ to unlock the next lesson
                    </p>
                  )}
                  {isLocked && (
                    <p className="text-[11px] text-white/30 mt-1 font-bold">
                      Locked — pass the previous lesson with 80%+
                    </p>
                  )}
                </div>

                {!isLocked && (
                  <div
                    className={`
                    shrink-0 text-white/20 transition-transform duration-300
                    ${isNext ? 'opacity-100 group-hover:translate-x-1 group-hover:text-primary' : 'opacity-50'}
                  `}
                  >
                    {isNext ? <Fish size={24} /> : <ChevronRight size={20} />}
                  </div>
                )}
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
