'use client';

import React from 'react';
import { useGameStore } from '@/store/gameStore';
import { todayStr } from '@/lib/utils';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import ProgressBar from '@/components/ui/ProgressBar';
import { Trophy, Flame, BookOpen, Volume2, VolumeX } from 'lucide-react';

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
    <div className="space-y-6 max-w-md mx-auto pb-20">
      <Card className="relative overflow-hidden">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-sm font-bold text-blue uppercase tracking-wider mb-1">
              Daily Goal
            </h2>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black text-text">{todayXP}</span>
              <span className="text-sm font-bold text-text/50">/ {goal} XP</span>
            </div>
          </div>
          <Button
            variant="ghost"
            onClick={toggleSound}
            className="!p-2 h-10 w-10 rounded-full text-text/50 hover:text-text"
            title="Toggle sound"
          >
            {settings.sound ? <Volume2 size={20} /> : <VolumeX size={20} />}
          </Button>
        </div>

        <ProgressBar progress={goalProgress} className="mb-8" />

        <div className="flex flex-col items-center gap-4 mb-8">
          <div className="relative group cursor-pointer" onClick={() => onNavigate('learn')}>
            <div className="text-7xl animate-bounce-slow transform transition-transform group-hover:scale-110">
              🐠
            </div>
          </div>
          <div className="bg-panel-2 border border-white/5 px-4 py-3 rounded-2xl relative max-w-[90%] text-center shadow-lg">
            <p className="text-sm text-text/90 leading-relaxed">
              <span className="font-bold text-blue block mb-1">Finley says:</span>
              "Tap a lesson to start. Pro tip: always check the tail and mouth!"
            </p>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-2 border-x-8 border-x-transparent border-b-8 border-b-panel-2"></div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Button variant="gold" onClick={() => onNavigate('learn')} className="w-full">
            Start Learning
          </Button>
          <Button variant="primary" onClick={() => onNavigate('review')} className="w-full">
            Review
          </Button>
        </div>
      </Card>

      <Card>
        <div className="flex items-center gap-2 mb-4">
          <div className="p-2 bg-blue/10 rounded-lg text-blue">
            <Trophy size={20} />
          </div>
          <h2 className="text-lg font-black text-text">Your Progress</h2>
        </div>

        <div className="mb-6">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-text/60 font-medium">Overall Completion</span>
            <span className="text-text font-bold">{Math.round(overallProgress)}%</span>
          </div>
          <ProgressBar progress={overallProgress} />
        </div>

        <div className="grid grid-cols-3 gap-2">
          <StatsBox icon={<BookOpen size={18} />} label="Lessons" value={completedLessons} />
          <StatsBox icon={<Flame size={18} />} label="Best Streak" value={bestStreak} />
          <StatsBox icon={<Trophy size={18} />} label="Total XP" value={xp} />
        </div>
      </Card>
    </div>
  );
}

function StatsBox({ icon, label, value }: { icon: React.ReactNode; label: string; value: number }) {
  return (
    <div className="bg-panel-2 border border-white/5 rounded-xl p-3 flex flex-col items-center text-center gap-2">
      <div className="text-blue/80">{icon}</div>
      <div>
        <div className="text-xl font-black text-text leading-none mb-1">{value}</div>
        <div className="text-[10px] font-bold text-text/40 uppercase tracking-wider">{label}</div>
      </div>
    </div>
  );
}
