'use client';

import React from 'react';
import { useGameStore } from '@/store/gameStore';
import { todayStr } from '@/lib/utils';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import ProgressBar from '@/components/ui/ProgressBar';

interface HomeScreenProps {
  onNavigate: (screen: string) => void;
}

export default function HomeScreen({ onNavigate }: HomeScreenProps) {
  const { xp, streak, bestStreak, lessons, dailyXP, toggleSound, settings } = useGameStore();

  const today = todayStr();
  const todayXP = dailyXP[today] || 0;
  const goal = 50;
  const goalProgress = Math.min(100, (todayXP / goal) * 100);

  const completedLessons = Object.values(lessons).filter((l: any) => l.completed).length;
  const totalLessons = Object.keys(lessons).length;
  const overallProgress = totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0;

  return (
    <div className="space-y-4">
      <Card className="text-center">
        <div className="flex justify-between items-start mb-4">
          <div className="text-left">
            <h2 className="text-xl font-black mb-1">Learn fish like a pro</h2>
            <p className="text-sm opacity-80">
              Quick, game-like lessons for identifying Ohio & Lake Erie species.
            </p>
          </div>
          <Button
            variant="ghost"
            onClick={toggleSound}
            className="!p-2 min-h-0 h-10 w-10 rounded-full"
            title="Toggle sound"
          >
            {settings.sound ? '🔊' : '🔇'}
          </Button>
        </div>

        <hr className="border-[rgba(255,255,255,.08)] my-4" />

        <div className="flex flex-col items-center gap-2 my-6">
          <div className="text-6xl animate-bounce-slow">🐠</div>
          <div className="bg-[rgba(255,255,255,.1)] px-4 py-2 rounded-2xl relative">
            <div className="font-black mb-0.5">Meet Finley!</div>
            <div className="text-sm opacity-80">
              Tap a lesson to start. Pro tip: always check the tail and mouth!
            </div>
            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-[rgba(255,255,255,.1)]"></div>
          </div>
        </div>

        <div className="flex gap-2 justify-center mt-4">
          <Button variant="gold" onClick={() => onNavigate('learn')} className="flex-1">
            Start Learning
          </Button>
          <Button variant="primary" onClick={() => onNavigate('review')} className="flex-1">
            Start Review
          </Button>
        </div>
      </Card>

      <Card>
        <div className="flex justify-between items-end mb-2">
          <h2 className="text-xl font-black">Overall progress</h2>
          <div className="text-sm font-bold opacity-70">{Math.round(overallProgress)}%</div>
        </div>
        <ProgressBar progress={overallProgress} />

        <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-[rgba(255,255,255,.08)]">
          <div className="text-center">
            <div className="text-xs uppercase tracking-wider opacity-60 mb-1">Lessons</div>
            <div className="font-black text-xl">{completedLessons}</div>
          </div>
          <div className="text-center">
            <div className="text-xs uppercase tracking-wider opacity-60 mb-1">Best Streak</div>
            <div className="font-black text-xl">{bestStreak}</div>
          </div>
          <div className="text-center">
            <div className="text-xs uppercase tracking-wider opacity-60 mb-1">Total XP</div>
            <div className="font-black text-xl">{xp}</div>
          </div>
        </div>
      </Card>

      <Card>
        <div className="flex justify-between items-end mb-2">
          <h2 className="text-xl font-black">Today’s goal</h2>
          <div className="text-sm font-bold opacity-70">
            {todayXP} / {goal} XP
          </div>
        </div>
        <ProgressBar progress={goalProgress} />
        <p className="text-sm opacity-80 mt-3">
          Earn XP by learning cards and finishing quizzes. Keep your streak alive by practicing once
          per day.
        </p>
      </Card>
    </div>
  );
}
