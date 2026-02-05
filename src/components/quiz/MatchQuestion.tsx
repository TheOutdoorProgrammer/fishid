'use client';

import React, { useState, useEffect } from 'react';
import { MatchQuestion as MatchQuestionType } from '@/types';
import Toast from '@/components/ui/Toast';

interface MatchQuestionProps {
  question: MatchQuestionType;
  onAnswer: (answer: boolean) => void;
  showFeedback: boolean;
  onMistake?: () => void;
  userAnswer?: any;
}

export default function MatchQuestion({
  question,
  onAnswer,
  showFeedback,
  onMistake,
}: MatchQuestionProps) {
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]);
  const [wrongPair, setWrongPair] = useState<{ left: string; right: string } | null>(null);
  const [toast, setToast] = useState({ show: false, message: '' });

  useEffect(() => {
    setSelectedLeft(null);
    setMatchedPairs([]);
    setWrongPair(null);
  }, [question]);

  const handleLeftClick = (id: string) => {
    if (showFeedback || matchedPairs.includes(id)) return;

    if (wrongPair) setWrongPair(null);

    setSelectedLeft(id);
  };

  const handleRightClick = (rightId: string) => {
    if (showFeedback || !selectedLeft) {
      if (!selectedLeft && !showFeedback) {
        setToast({ show: true, message: 'Select a fish from the left first' });
      }
      return;
    }

    // Check if match is correct (assuming id equality)
    const isMatch = selectedLeft === rightId;

    if (isMatch) {
      const newMatched = [...matchedPairs, selectedLeft];
      setMatchedPairs(newMatched);
      setSelectedLeft(null);
      setWrongPair(null);

      if (newMatched.length === question.left.length) {
        onAnswer(true);
      }
    } else {
      setWrongPair({ left: selectedLeft, right: rightId });
      if (onMistake) onMistake();

      setTimeout(() => {
        setWrongPair(null);
        setSelectedLeft(null);
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col gap-4 h-full">
      <div className="grid grid-cols-2 gap-4 h-full">
        <div className="flex flex-col gap-3">
          {question.left.map((item) => {
            const isMatched = matchedPairs.includes(item.id);
            const isSelected = selectedLeft === item.id;
            const isWrong = wrongPair?.left === item.id;

            let stateClass = 'bg-white/5 border-white/10';
            if (isMatched)
              stateClass = 'bg-[rgba(41,197,107,0.15)] border-[rgba(41,197,107,0.3)] opacity-50';
            else if (isWrong)
              stateClass = 'bg-[rgba(224,75,75,0.20)] border-[rgba(224,75,75,0.45)]';
            else if (isSelected) stateClass = 'bg-white/20 border-white/30 ring-2 ring-white/20';

            return (
              <button
                key={item.id}
                onClick={() => handleLeftClick(item.id)}
                disabled={isMatched || showFeedback}
                className={`
                  h-[72px] px-3 rounded-xl border text-[15px] font-bold text-left flex items-center transition-all
                  ${stateClass}
                `}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <div className="flex flex-col gap-3">
          {question.right.map((item) => {
            const isMatched = matchedPairs.includes(item.id);
            const isWrong = wrongPair?.right === item.id;

            let stateClass = 'bg-white/5 border-white/10';
            if (isMatched)
              stateClass = 'bg-[rgba(41,197,107,0.15)] border-[rgba(41,197,107,0.3)] opacity-50';
            else if (isWrong)
              stateClass = 'bg-[rgba(224,75,75,0.20)] border-[rgba(224,75,75,0.45)]';

            return (
              <button
                key={item.id}
                onClick={() => handleRightClick(item.id)}
                disabled={isMatched || showFeedback}
                className={`
                  h-[72px] px-3 rounded-xl border text-[13px] font-medium text-left flex items-center leading-tight transition-all
                  ${stateClass}
                `}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      <Toast
        show={toast.show}
        message={toast.message}
        onHide={() => setToast({ ...toast, show: false })}
      />
    </div>
  );
}
