'use client';

import React, { useMemo } from 'react';
import { IdentifyQuestion as IdentifyQuestionType } from '@/types';
import Card from '@/components/ui/Card';
import { getRandomFishImage } from '@/lib/utils';
import { FISH } from '@/fish';

interface IdentifyQuestionProps {
  question: IdentifyQuestionType;
  onAnswer: (answer: string) => void;
  showFeedback: boolean;
  userAnswer?: string;
}

export default function IdentifyQuestion({
  question,
  onAnswer,
  showFeedback,
  userAnswer,
}: IdentifyQuestionProps) {
  const fish = FISH[question.fishId];
  const imageSrc = useMemo(() => getRandomFishImage(fish?.image || [], question.fishId), [fish, question.fishId]);

  return (
    <div className="flex flex-col gap-4">
      <Card className="flex flex-col items-center justify-center p-6 min-h-[200px]">
        {/* Fish Image */}
        <img
          src={imageSrc}
          alt="Fish to identify"
          className="max-h-[160px] w-auto object-contain drop-shadow-md"
        />
      </Card>

      <div className="grid grid-cols-1 gap-3">
        {question.options.map((option) => {
          const isSelected = userAnswer === option.id;
          const isCorrect = option.id === question.correct;

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
              key={option.id}
              onClick={() => !showFeedback && onAnswer(option.id)}
              disabled={showFeedback}
              className={`
                min-h-[56px] w-full px-4 rounded-2xl border text-[17px] font-bold text-left transition-all
                flex items-center
                ${stateClass}
              `}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
