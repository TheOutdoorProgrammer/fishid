'use client';

import React from 'react';
import { FeatureQuestion as FeatureQuestionType } from '@/types';
import Card from '@/components/ui/Card';

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
  return (
    <div className="flex flex-col gap-4">
      <Card className="flex flex-col items-center gap-3 p-5">
        <h3 className="text-lg font-bold text-center text-text/90">Which feature belongs to:</h3>
        <div className="flex flex-col items-center">
          <img
            src={`/img/fish/${question.fishId}.png`}
            alt="Target fish"
            className="h-24 w-auto object-contain drop-shadow-sm mb-2"
          />
          {/* We might want to show the fish name if it's not clear from context, 
              but usually 'prompt' contains the text. 
              Checking the type definition, 'prompt' is the question string.
              However, for Feature questions, often the prompt is specific. 
              Let's stick to the design where we show options.
          */}
        </div>
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
