'use client';

import React, { useMemo } from 'react';
import { HabitatQuestion as HabitatQuestionType } from '@/types';
import Card from '@/components/ui/Card';
import { getRandomFishImage } from '@/lib/utils';
import { FISH } from '@/fish';

interface HabitatQuestionProps {
  question: HabitatQuestionType;
  onAnswer: (answer: string) => void;
  showFeedback: boolean;
  userAnswer?: string;
}

export default function HabitatQuestion({
  question,
  onAnswer,
  showFeedback,
  userAnswer,
}: HabitatQuestionProps) {
  const fish = FISH[question.fishId];
  const imageSrc = useMemo(
    () => getRandomFishImage(fish?.image || [], question.fishId),
    [fish, question.fishId]
  );

  return (
    <div className="flex flex-col gap-4">
      <Card className="flex flex-col items-center justify-center p-6 min-h-[200px]">
        <img
          src={imageSrc}
          alt="Fish"
          className="max-h-[160px] w-auto object-contain drop-shadow-md"
        />
      </Card>

      <div className="grid grid-cols-1 gap-3">
        {question.options.map((option) => {
          const isSelected = userAnswer === option.value;
          const isCorrect = option.value === question.correct;

          let stateClass = 'bg-white/5 border-white/10 hover:bg-white/10';

          if (showFeedback) {
            if (isCorrect) {
              stateClass = 'bg-[rgba(41,197,107,0.20)] border-[rgba(41,197,107,0.45)] text-white';
            } else if (isSelected && !isCorrect) {
              stateClass = 'bg-[rgba(224,75,75,0.20)] border-[rgba(224,75,75,0.45)] text-white';
            } else {
              stateClass = 'opacity-50 border-white/5';
            }
          } else if (isSelected) {
            stateClass = 'bg-white/20 border-white/30';
          }

          return (
            <button
              key={option.value}
              onClick={() => !showFeedback && onAnswer(option.value)}
              disabled={showFeedback}
              className={`${stateClass} w-full text-left p-4 rounded-xl border transition-all duration-200 active:scale-[0.99]`}
            >
              <div className="font-bold text-white/90 leading-snug">{option.label}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
