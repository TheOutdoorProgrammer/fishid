'use client';

import React, { useState } from 'react';
import { LESSONS } from '@/store/gameStore';
import { FISH } from '@/fish';
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
    <div className="h-full flex flex-col">
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
        <Card className="flex-1 flex flex-col relative overflow-hidden !p-0 border-[rgba(255,255,255,.15)]">
          <div className="bg-[rgba(0,0,0,.2)] p-6 flex items-center justify-center min-h-[180px] border-b border-[rgba(255,255,255,.05)]">
            <div
              className="w-full h-full flex items-center justify-center"
              dangerouslySetInnerHTML={{ __html: fish.svg || '<div class="text-6xl">🐟</div>' }}
            />
          </div>

          <div className="p-5 flex-1 overflow-y-auto">
            <div className="mb-4">
              <h2 className="text-3xl font-black leading-tight mb-1">{fish.name}</h2>
              <div className="text-lg italic opacity-60 font-serif">{fish.sci}</div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {fish.keywords?.map((k: string) => (
                <Chip key={k} variant="blue">
                  {k}
                </Chip>
              ))}
            </div>

            <div className="space-y-4 text-sm">
              <div className="bg-[rgba(255,255,255,.05)] p-3 rounded-lg border border-[rgba(255,255,255,.05)]">
                <div className="uppercase text-[10px] font-bold tracking-wider opacity-50 mb-1">
                  Habitat
                </div>
                <div>{fish.habitat}</div>
              </div>

              <div>
                <div className="uppercase text-[10px] font-bold tracking-wider opacity-50 mb-2">
                  Key Features
                </div>
                <ul className="space-y-2">
                  {fish.features?.map((f: string, i: number) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-green-400 font-bold">•</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {fish.fact && (
                <div className="bg-[rgba(242,192,76,.1)] p-3 rounded-lg border border-[rgba(242,192,76,.2)] text-[rgba(255,225,160,1)]">
                  <div className="flex gap-2">
                    <span>💡</span>
                    <span className="italic">{fish.fact}</span>
                  </div>
                </div>
              )}
            </div>

            <div className="text-[10px] opacity-30 mt-6 text-center">
              Source: {fish.sources?.join(', ') || 'ODNR'}
            </div>
          </div>
        </Card>
      ) : (
        <Card className="p-8 text-center opacity-50">
          <div>Fish data missing for ID: {currentFishId}</div>
        </Card>
      )}

      <div className="flex gap-3 mt-4">
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
