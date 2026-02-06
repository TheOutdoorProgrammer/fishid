'use client';

import React, { useState, useEffect } from 'react';
import { QuizQuestion } from '@/types';
import { useGameStore, LESSONS } from '@/store/gameStore';
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
  const { addXP, spendHeart, settings, updateLesson, lessons, updateFishStats } = useGameStore();

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

    // Update fish stats for questions with a fishId
    const fishId = 'fishId' in currentQuestion ? currentQuestion.fishId : null;
    if (fishId) {
      updateFishStats(fishId, isCorrect);
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

    // Update lesson progress if this is a lesson quiz
    if (lessonId) {
      const currentLessonState = lessons[lessonId] || {};
      let stars = 0;
      if (finalScore >= 90) stars = 3;
      else if (finalScore >= 80) stars = 2;
      else if (finalScore >= 60) stars = 1;

      // Update current lesson
      updateLesson(lessonId, {
        completed: finalScore >= 80,
        bestStars: Math.max(stars, currentLessonState.bestStars || 0),
        bestAcc: Math.max(finalScore, currentLessonState.bestAcc || 0),
        attempts: (currentLessonState.attempts || 0) + 1,
        xpEarned: (currentLessonState.xpEarned || 0) + totalXp,
      });

      // Unlock next lesson if passed with 80%+
      if (finalScore >= 80) {
        const currentLessonIndex = LESSONS.findIndex((l) => l.id === Number(lessonId));
        if (currentLessonIndex !== -1 && currentLessonIndex < LESSONS.length - 1) {
          const nextLesson = LESSONS[currentLessonIndex + 1];
          updateLesson(nextLesson.id, { unlocked: true });
        }
      }
    }

    setQuizComplete(true);
  };

  if (quizComplete) {
    const score = Math.round((correctCount / questions.length) * 100);
    let stars = 0;
    if (score >= 90) stars = 3;
    else if (score >= 75) stars = 2;
    else if (score >= 60) stars = 1;

    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center gap-4 animate-in fade-in zoom-in duration-300">
        <div className="text-center space-y-1">
          <h2 className="text-2xl font-black text-white">Quiz Complete!</h2>
          <p className="text-sm text-muted">Great job!</p>
        </div>

        <Card className="w-full max-w-sm flex flex-col items-center gap-4" padding>
          <div className="text-center">
            <div className="text-5xl font-black bg-gradient-to-br from-green-400 to-emerald-600 bg-clip-text text-transparent">
              {score}%
            </div>
            <div className="text-sm font-bold text-muted mt-1">ACCURACY</div>
          </div>

          <StarRating stars={stars} className="scale-125" />

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
    <div className="flex flex-col pb-20 -mt-2">
      <div className="flex items-center gap-4 mb-2">
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

      <div className="text-center mb-2">
        <h2 className="text-xl font-bold text-white leading-relaxed">{currentQuestion.prompt}</h2>
      </div>

      <div className="flex flex-col mb-2">
        <div>
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

      <div className="pt-2">
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
