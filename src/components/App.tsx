'use client';

import { useState } from 'react';
import AppLayout from '@/components/layout/AppLayout';
import HomeScreen from '@/components/screens/HomeScreen';
import LearnScreen from '@/components/screens/LearnScreen';
import LearnModeScreen from '@/components/screens/LearnModeScreen';
import ProfileScreen from '@/components/screens/ProfileScreen';
import ReviewScreen from '@/components/screens/ReviewScreen';
import QuizScreen from '@/components/quiz/QuizScreen';
import { useGameStore, LESSONS, FISH_IDS } from '@/store/gameStore';
import { FISH } from '@/fish';
import { buildQuizQuestions } from '@/lib/quiz';
import type { QuizQuestion } from '@/types';
import { shuffle } from '@/lib/utils';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [selectedLessonId, setSelectedLessonId] = useState<string | number | null>(null);
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([]);
  const [quizLessonId, setQuizLessonId] = useState<string | null>(null);

  const { fishStats } = useGameStore();

  const navigateTo = (screen: string, params?: any) => {
    if (screen === 'learnMode' && params) {
      setSelectedLessonId(params);
    }

    if (screen === 'quiz') {
      let questions: QuizQuestion[] = [];
      let qLessonId: string | null = null;

      if (params?.mode === 'review') {
        const weakSpots = FISH_IDS.filter((id) => {
          const stats = fishStats[id];
          if (!stats || stats.seen < 3) return false;
          const accuracy = stats.correct / stats.seen;
          return accuracy < 0.6;
        });

        let poolIds = [...weakSpots];
        while (poolIds.length < 5) {
          const randomId = FISH_IDS[Math.floor(Math.random() * FISH_IDS.length)];
          if (!poolIds.includes(randomId)) {
            poolIds.push(randomId);
          }
        }

        if (poolIds.length < 10) {
          const remaining = FISH_IDS.filter((id) => !poolIds.includes(id));
          const extra = shuffle(remaining).slice(0, 10 - poolIds.length);
          poolIds = [...poolIds, ...extra];
        }

        const pool = poolIds.map((id) => FISH[id]).filter(Boolean);
        questions = buildQuizQuestions(pool, 10);
        qLessonId = null;
      } else if (params?.lessonId) {
        const lesson = LESSONS.find((l) => l.id === params.lessonId);
        if (lesson) {
          const pool = lesson.fish.map((id) => FISH[id]).filter(Boolean);
          questions = buildQuizQuestions(pool, 10);
          qLessonId = String(params.lessonId);
        }
      }

      setQuizQuestions(questions);
      setQuizLessonId(qLessonId);
    }

    setCurrentScreen(screen);
    window.scrollTo(0, 0);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <HomeScreen onNavigate={navigateTo} />;
      case 'learn':
        return <LearnScreen onNavigate={navigateTo} />;
      case 'learnMode':
        return <LearnModeScreen lessonId={selectedLessonId!} onNavigate={navigateTo} />;
      case 'review':
        return <ReviewScreen onNavigate={navigateTo} />;
      case 'profile':
        return <ProfileScreen onNavigate={navigateTo} />;
      case 'quiz':
        return (
          <QuizScreen
            questions={quizQuestions}
            lessonId={quizLessonId}
            onExit={() => navigateTo('home')}
          />
        );
      default:
        return <HomeScreen onNavigate={navigateTo} />;
    }
  };

  return (
    <AppLayout currentScreen={currentScreen} onNavigate={navigateTo}>
      {renderScreen()}
    </AppLayout>
  );
}
