'use client';

import React, { useState, useEffect } from 'react';
import { QuizQuestion } from '@/types';
import { useGameStore } from '@/store/gameStore';
import { beep } from '@/lib/sounds';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import ProgressBar from '@/components/ui/ProgressBar';
import Toast from '@/components/ui/Toast';
import StarRating from '@/components/ui/StarRating';

import IdentifyQuestion from './IdentifyQuestion';
import FeatureQuestion from './FeatureQuestion';
import TrueFalseQuestion from './TrueFalseQuestion';
import MatchQuestion from './MatchQuestion';
import SpotQuestion from './SpotQuestion';

interface QuizScreenProps {
  questions: QuizQuestion[];
  lessonId: string | null;
  onExit: () => void;
}

export default function QuizScreen({ questions, lessonId, onExit }: QuizScreenProps) {
  const { addXP, spendHeart, settings } = useGameStore();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, any>>({});
  const [showFeedback, setShowFeedback] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '' });

  const [correctCount, setCorrectCount] = useState(0);
  const [xpEarned, setXpEarned] = useState(0);

  const currentQuestion = questions[currentIndex];
  const progress = (currentIndex / questions.length) * 100;

  const playSound = (type: 'ok' | 'bad' | 'warn') => {
    if (settings.sound) {
      beep(type);
    }
  };

  const showToast = (message: string) => {
    setToast({ show: true, message });
  };

  const handleAnswer = (answer: any) => {
    if (showFeedback) return;

    setUserAnswers((prev) => ({ ...prev, [currentIndex]: answer }));
    setShowFeedback(true);

    let isCorrect = false;
    let questionXp = 0;

    switch (currentQuestion.type) {
      case 'identify':
        isCorrect = answer === currentQuestion.correct;
        questionXp = 14;
        break;
      case 'feature':
        isCorrect = answer === currentQuestion.correct;
        questionXp = 12;
        break;
      case 'tf':
        isCorrect = answer === currentQuestion.correct;
        questionXp = 10;
        break;
      case 'match':
        isCorrect = true;
        questionXp = 18;
        break;
      case 'spot':
        isCorrect = answer === currentQuestion.correct;
        questionXp = 14;
        break;
    }

    if (isCorrect) {
      setCorrectCount((prev) => prev + 1);
      setXpEarned((prev) => prev + questionXp);
      playSound('ok');
    } else {
      spendHeart();
      playSound('bad');
      showToast('Wrong - you lost a heart');
    }
  };

  const handleMatchMistake = () => {
    spendHeart();
    playSound('bad');
    showToast('Wrong - you lost a heart');
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setShowFeedback(false);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    const finalScore = Math.round((correctCount / questions.length) * 100);
    const bonusXp = 12;
    const totalXp = xpEarned + bonusXp;

    addXP(totalXp, 'quiz');

    setQuizComplete(true);
  };

  if (quizComplete) {
    const score = Math.round((correctCount / questions.length) * 100);
    let stars = 0;
    if (score >= 90) stars = 3;
    else if (score >= 75) stars = 2;
    else if (score >= 60) stars = 1;

    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-6 pt-[calc(1.5rem+env(safe-area-inset-top,0px))] pb-[calc(1.5rem+env(safe-area-inset-bottom,0px))] gap-6 animate-in fade-in zoom-in duration-300">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-black text-white">Quiz Complete!</h2>
          <p className="text-muted">Great job!</p>
        </div>

        <Card className="w-full max-w-sm flex flex-col items-center gap-6" padding>
          <div className="text-center">
            <div className="text-6xl font-black bg-gradient-to-br from-green-400 to-emerald-600 bg-clip-text text-transparent">
              {score}%
            </div>
            <div className="text-sm font-bold text-muted mt-1">ACCURACY</div>
          </div>

          <StarRating stars={stars} className="scale-150 gap-2" />

          <div className="w-full bg-white/5 rounded-xl p-4 flex justify-between items-center border border-white/5">
            <span className="font-bold text-muted">XP Earned</span>
            <span className="font-black text-gold text-xl">+{xpEarned + 12}</span>
          </div>
        </Card>

        <Button onClick={onExit} className="w-full max-w-sm" variant="primary">
          Continue
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen max-w-xl mx-auto p-4 pt-[calc(1rem+env(safe-area-inset-top,0px))] pb-[calc(1rem+env(safe-area-inset-bottom,0px))] gap-6">
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          className="!p-2 min-h-0 aspect-square rounded-full border-0 bg-panel"
          onClick={onExit}
        >
          ✕
        </Button>
        <div className="flex-1">
          <ProgressBar progress={progress} className="h-3" />
        </div>
        <div className="font-bold text-sm tabular-nums text-muted">
          {currentIndex + 1}/{questions.length}
        </div>
      </div>

      <div className="text-center py-2">
        <h2 className="text-xl font-bold text-white leading-relaxed">{currentQuestion.prompt}</h2>
      </div>

      <div className="flex-1 flex flex-col min-h-0">
        <div className="flex-1 overflow-y-auto hide-scrollbar">
          {currentQuestion.type === 'identify' && (
            <IdentifyQuestion
              question={currentQuestion}
              onAnswer={handleAnswer}
              showFeedback={showFeedback}
              userAnswer={userAnswers[currentIndex]}
            />
          )}
          {currentQuestion.type === 'feature' && (
            <FeatureQuestion
              question={currentQuestion}
              onAnswer={handleAnswer}
              showFeedback={showFeedback}
              userAnswer={userAnswers[currentIndex]}
            />
          )}
          {currentQuestion.type === 'tf' && (
            <TrueFalseQuestion
              question={currentQuestion}
              onAnswer={handleAnswer}
              showFeedback={showFeedback}
              userAnswer={userAnswers[currentIndex]}
            />
          )}
          {currentQuestion.type === 'match' && (
            <MatchQuestion
              question={currentQuestion}
              onAnswer={handleAnswer}
              showFeedback={showFeedback}
              onMistake={handleMatchMistake}
            />
          )}
          {currentQuestion.type === 'spot' && (
            <SpotQuestion
              question={currentQuestion}
              onAnswer={handleAnswer}
              showFeedback={showFeedback}
              userAnswer={userAnswers[currentIndex]}
            />
          )}
        </div>
      </div>

      <div className="pt-2 mt-auto">
        {showFeedback && (
          <Button
            onClick={handleNext}
            className="w-full animate-in slide-in-from-bottom-4 duration-200 shadow-xl"
            variant="primary"
          >
            {currentIndex === questions.length - 1 ? 'Finish' : 'Continue'}
          </Button>
        )}
      </div>

      <Toast
        show={toast.show}
        message={toast.message}
        onHide={() => setToast({ ...toast, show: false })}
      />
    </div>
  );
}
