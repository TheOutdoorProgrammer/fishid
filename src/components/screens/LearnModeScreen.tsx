'use client';

import React, { useState } from 'react';
import { LESSONS } from '@/store/gameStore';
import { FISH } from '@/fish';
import type { FishRef } from '@/fish/types';
import { getRandomFishImage } from '@/lib/utils';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import ProgressBar from '@/components/ui/ProgressBar';
import Chip from '@/components/ui/Chip';

interface LearnModeScreenProps {
  onNavigate: (screen: string, params?: any) => void;
  lessonId: number | string;
}

export default function LearnModeScreen({ onNavigate, lessonId }: LearnModeScreenProps) {
  const lesson = LESSONS.find((l) => l.id === lessonId);
  const fishIds = lesson?.fish || [];

  const [currentIndex, setCurrentIndex] = useState(0);

  if (!lesson || fishIds.length === 0) {
    return (
      <Card>
        <div className="text-center p-4">
          <h2 className="text-xl font-bold mb-2">Lesson not found</h2>
          <Button onClick={() => onNavigate('learn')}>Back to Lessons</Button>
        </div>
      </Card>
    );
  }

  const currentFishId = fishIds[currentIndex];
  const fish = FISH[currentFishId];
  const progress = ((currentIndex + 1) / fishIds.length) * 100;
  const isLast = currentIndex === fishIds.length - 1;

  const fishImage = React.useMemo(() => {
    if (!fish?.image) return '';
    return getRandomFishImage(fish.image);
  }, [fish]);

  const handleNext = () => {
    if (isLast) {
      onNavigate('quiz', { lessonId });
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <Chip className="bg-[rgba(255,255,255,.1)] border-none py-0.5 px-2 text-[10px] uppercase font-bold tracking-wider opacity-70">
              Lesson
            </Chip>
            <span className="font-black truncate">{lesson.title}</span>
          </div>
          <ProgressBar progress={progress} className="h-1.5" />
        </div>
        <Button
          variant="ghost"
          onClick={() => onNavigate('learn')}
          className="!p-2 min-h-0 h-8 w-8 rounded-full opacity-60 hover:opacity-100"
        >
          ✕
        </Button>
      </div>

      {fish ? (
        <Card className="flex-1 flex flex-col relative overflow-hidden !p-0 border-white/10 bg-panel">
          <div className="relative h-64 w-full bg-black/20 shrink-0">
            {fishImage ? (
              <img src={fishImage} alt={fish.name} className="w-full h-full object-contain" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-6xl bg-black/20">
                🐟
              </div>
            )}

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-panel via-panel/80 to-transparent pt-16 pb-4 px-5">
              <h2 className="text-3xl font-black leading-tight text-white mb-0.5 drop-shadow-md">
                {fish.name}
              </h2>
              <div className="text-lg italic text-white/70 font-serif">{fish.scientific}</div>
            </div>
          </div>

          <div className="p-5 pt-4 flex-1 overflow-y-auto">
            <div className="space-y-6 text-sm">
              <div className="bg-white/5 p-4 rounded-xl border border-white/5 mb-2">
                <div className="flex items-center gap-2 mb-2 text-blue-300">
                  <span className="text-lg">🌊</span>
                  <span className="uppercase text-[11px] font-bold tracking-wider opacity-80">
                    Habitat
                  </span>
                </div>
                <div className="text-white/90 leading-relaxed">{fish.habitat}</div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3 text-green-300">
                  <span className="text-lg">🔍</span>
                  <span className="uppercase text-[11px] font-bold tracking-wider opacity-80">
                    Key Features
                  </span>
                </div>
                <ul className="space-y-3">
                  {fish.features?.map((f: string, i: number) => (
                    <li
                      key={i}
                      className="flex gap-3 bg-white/[0.02] p-3 rounded-lg border border-white/5"
                    >
                      <span className="text-green-400 font-bold mt-0.5">•</span>
                      <span className="text-white/90 leading-snug">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {fish.funFact && (
                <div className="bg-gold/10 p-4 rounded-xl border border-gold/20">
                  <div className="flex gap-3">
                    <span className="text-xl">💡</span>
                    <div>
                      <span className="uppercase text-[10px] font-bold tracking-wider text-gold mb-1 block">
                        Fun Fact
                      </span>
                      <span className="text-gold/90 italic leading-relaxed">{fish.funFact}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {fish.refs && fish.refs.length > 0 && (
              <div className="mt-8 pt-4 border-t border-white/10">
                <div className="text-[10px] uppercase font-bold tracking-wider text-white/40 mb-2">
                  Sources
                </div>
                <ul className="list-disc list-inside space-y-1">
                  {fish.refs.map((ref: FishRef, i: number) => (
                    <li key={i} className="text-[11px] text-white/50">
                      <a
                        href={ref.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400/80 hover:text-blue-300 underline underline-offset-2"
                      >
                        {ref.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Card>
      ) : (
        <Card className="p-8 text-center opacity-50">
          <div>Fish data missing for ID: {currentFishId}</div>
        </Card>
      )}

      <div className="flex gap-4 mt-4 mb-20">
        <Button variant="ghost" onClick={handlePrev} disabled={currentIndex === 0} className="w-14">
          ◀
        </Button>
        <Button variant={isLast ? 'gold' : 'primary'} onClick={handleNext} className="flex-1">
          {isLast ? 'Start Quiz' : 'Next Fish'}
        </Button>
      </div>
    </div>
  );
}
