'use client';

import React, { useMemo } from 'react';
import { TrueFalseQuestion as TrueFalseQuestionType } from '@/types';
import { FISH } from '@/fish';
import { getRandomFishImage } from '@/lib/utils';
import Card from '@/components/ui/Card';

interface TrueFalseQuestionProps {
  question: TrueFalseQuestionType;
  onAnswer: (answer: boolean) => void;
  showFeedback: boolean;
  userAnswer?: boolean;
}

export default function TrueFalseQuestion({
  question,
  onAnswer,
  showFeedback,
  userAnswer,
}: TrueFalseQuestionProps) {
  const fish = FISH[question.fishId];
  const imageSrc = useMemo(() => getRandomFishImage(fish?.image || []), [fish]);

  return (
    <div className="flex flex-col gap-6">
      <Card className="flex flex-col items-center gap-4 p-6 min-h-[180px] justify-center">
        {imageSrc && (
          <img
            src={imageSrc}
            alt="Fish"
            className="h-20 w-auto object-contain drop-shadow-sm opacity-80"
          />
        )}
        <p className="text-xl font-bold text-center leading-snug">{question.statement}</p>
      </Card>

      <div className="grid grid-cols-2 gap-4">
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
          }

          return (
            <button
              key={option.label}
              onClick={() => !showFeedback && onAnswer(option.value)}
              disabled={showFeedback}
              className={`
                h-[80px] rounded-2xl border text-2xl font-extrabold transition-all flex items-center justify-center
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
