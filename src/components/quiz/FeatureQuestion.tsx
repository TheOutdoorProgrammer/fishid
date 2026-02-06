'use client';

import React from 'react';
import { FeatureQuestion as FeatureQuestionType } from '@/types';
import Card from '@/components/ui/Card';
import { FISH } from '@/fish';

interface FeatureQuestionProps {
  question: FeatureQuestionType;
  onAnswer: (answer: string) => void;
  showFeedback: boolean;
  userAnswer?: string;
}

export default function FeatureQuestion({
  question,
  onAnswer,
  showFeedback,
  userAnswer,
}: FeatureQuestionProps) {
  const fish = FISH[question.fishId];

  return (
    <div className="flex flex-col gap-4">
      <Card className="flex flex-col items-center gap-3 p-5">
        <h3 className="text-lg font-bold text-center text-text/90">Which feature best identifies:</h3>
        <div className="text-2xl font-black text-white text-center leading-tight">{fish?.name}</div>
        <div className="text-sm italic text-white/60 text-center">{fish?.scientific}</div>
      </Card>

      <div className="grid grid-cols-1 gap-3">
        {question.options.map((option, idx) => {
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
              key={`${idx}-${option.value}`}
              onClick={() => !showFeedback && onAnswer(option.value)}
              disabled={showFeedback}
              className={`
                min-h-[60px] w-full px-5 py-3 rounded-2xl border text-[16px] font-medium text-left leading-snug transition-all
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
