'use client';

import React from 'react';
import { SpotQuestion as SpotQuestionType } from '@/types';
import Card from '@/components/ui/Card';

interface SpotQuestionProps {
  question: SpotQuestionType;
  onAnswer: (answer: string) => void;
  showFeedback: boolean;
  userAnswer?: string;
}

export default function SpotQuestion({
  question,
  onAnswer,
  showFeedback,
  userAnswer,
}: SpotQuestionProps) {
  return (
    <div className="flex flex-col gap-4">
      {/* Hint Card */}
      <Card className="p-4 bg-blue-900/20 border-blue-500/20">
        <p className="text-center font-medium text-blue-100/90">{question.hint}</p>
      </Card>

      {/* Two Fish Images */}
      <div className="grid grid-cols-2 gap-4">
        {question.options.map((option) => {
          const isSelected = userAnswer === option.id;
          const isCorrect = option.id === question.correct;

          let stateClass = 'bg-white/5 border-white/10 hover:bg-white/10';
          let imageOpacity = 'opacity-100';

          if (showFeedback) {
            if (isCorrect) {
              stateClass =
                'bg-[rgba(41,197,107,0.20)] border-[rgba(41,197,107,0.45)] ring-1 ring-[rgba(41,197,107,0.5)]';
            } else if (isSelected && !isCorrect) {
              stateClass = 'bg-[rgba(224,75,75,0.20)] border-[rgba(224,75,75,0.45)]';
              imageOpacity = 'opacity-50 grayscale';
            } else {
              stateClass = 'opacity-50 border-white/5';
              imageOpacity = 'opacity-50 grayscale';
            }
          }

          return (
            <button
              key={option.id}
              onClick={() => !showFeedback && onAnswer(option.id)}
              disabled={showFeedback}
              className={`
                aspect-square rounded-2xl border flex flex-col items-center justify-center p-2 transition-all relative overflow-hidden
                ${stateClass}
              `}
            >
              <img
                src={`/img/fish/${option.id}.png`}
                alt={option.label}
                className={`w-full h-auto object-contain transition-all ${imageOpacity}`}
              />
              {showFeedback && isCorrect && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                  <div className="bg-green-500 text-white rounded-full p-2 shadow-lg">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
