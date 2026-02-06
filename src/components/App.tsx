'use client';

import { useState } from 'react';
import AppLayout from '@/components/layout/AppLayout';
import HomeScreen from '@/components/screens/HomeScreen';
import InstallScreen from '@/components/screens/InstallScreen';
import { usePWAInstall } from '@/hooks/usePWAInstall';
import LearnScreen from '@/components/screens/LearnScreen';
import LearnModeScreen from '@/components/screens/LearnModeScreen';
import ProfileScreen from '@/components/screens/ProfileScreen';
import ReviewScreen from '@/components/screens/ReviewScreen';
import QuizScreen from '@/components/quiz/QuizScreen';
import { useGameStore, LESSONS, FISH_IDS } from '@/store/gameStore';
import { FISH } from '@/fish';
import { buildLessonQuizQuestions, buildQuizQuestions } from '@/lib/quiz';
import type { QuizQuestion } from '@/types';
import { shuffle } from '@/lib/utils';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [selectedLessonId, setSelectedLessonId] = useState<string | number | null>(null);
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([]);
  const [quizLessonId, setQuizLessonId] = useState<string | null>(null);
  const [lastQuizParams, setLastQuizParams] = useState<any>(null);

  const { fishStats } = useGameStore();
  const { isInstalled } = usePWAInstall();

  // Gate: require install before using the app
  // isInstalled is null while checking, show loading
  if (isInstalled === null) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center">
        <div className="text-6xl animate-bounce">🐟</div>
      </div>
    );
  }

  if (!isInstalled) {
    return <InstallScreen />;
  }

  const navigateTo = (screen: string, params?: any) => {
    if (screen === 'learnMode' && params) {
      setSelectedLessonId(params);
    }

    if (screen === 'quiz') {
      setLastQuizParams(params || null);
      let questions: QuizQuestion[] = [];
      let qLessonId: string | null = null;

      const computeWeakSpotIds = () => {
        return FISH_IDS.filter((id) => {
          const stats = fishStats[id];
          if (!stats || stats.seen < 2) return false;
          const accuracy = stats.correct / stats.seen;
          const wrongStreak = stats.wrongStreak || 0;
          if (wrongStreak >= 2) return true;
          return accuracy < 0.65;
        }).sort((a, b) => {
          const sa = fishStats[a]!;
          const sb = fishStats[b]!;
          const wa = sa.wrongStreak || 0;
          const wb = sb.wrongStreak || 0;
          if (wb !== wa) return wb - wa;
          const aa = sa.correct / sa.seen;
          const ab = sb.correct / sb.seen;
          if (aa !== ab) return aa - ab;
          return (sb.lastWrongAt || 0) - (sa.lastWrongAt || 0);
        });
      };

      if (params?.mode === 'review') {
        const weakSpots = computeWeakSpotIds();

        let poolIds = [...weakSpots];
        while (poolIds.length < 5) {
          const randomId = FISH_IDS[Math.floor(Math.random() * FISH_IDS.length)];
          if (!poolIds.includes(randomId)) poolIds.push(randomId);
        }

        if (poolIds.length < 10) {
          const remaining = FISH_IDS.filter((id) => !poolIds.includes(id));
          poolIds = [...poolIds, ...shuffle(remaining).slice(0, 10 - poolIds.length)];
        }

        const pool = poolIds.map((id) => FISH[id]).filter(Boolean);
        questions = buildQuizQuestions(pool, 10);
        qLessonId = null;
      } else if (params?.mode === 'weakspots') {
        let poolIds = computeWeakSpotIds().slice(0, 10);
        if (poolIds.length === 0) {
          poolIds = shuffle(FISH_IDS).slice(0, 10);
        }
        const pool = poolIds.map((id) => FISH[id]).filter(Boolean);
        questions = buildLessonQuizQuestions(pool, 10);
        qLessonId = null;
      } else if (params?.lessonId) {
        const lesson = LESSONS.find((l) => l.id === params.lessonId);
        if (lesson) {
          const pool = lesson.fish.map((id) => FISH[id]).filter(Boolean);
          questions = buildLessonQuizQuestions(pool, 10);
          qLessonId = String(params.lessonId);
        }
      }

      setQuizQuestions(questions);
      setQuizLessonId(qLessonId);
    }

    setCurrentScreen(screen);
    const main = document.getElementById('main-scroll');
    if (main) main.scrollTo(0, 0);
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
            onRetry={lastQuizParams ? () => navigateTo('quiz', lastQuizParams) : undefined}
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
