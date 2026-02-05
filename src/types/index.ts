/**
 * Comprehensive TypeScript type definitions for FishID application
 * Maintains backward compatibility with fishid.v1 localStorage format
 */

// Re-export all fish types from fish module
export * from '../fish/types';

// ============================================================================
// QUIZ TYPES
// ============================================================================

/**
 * Quiz type variants supported by the application
 */
export type QuizType = 'identify' | 'feature' | 'tf' | 'match' | 'spot';

/**
 * Generic option for quiz questions
 * Used in identify, feature, and spot question types
 */
export type QuizOption = {
  id?: string;
  label: string;
  value?: string | boolean;
};

/**
 * Identify quiz question: "What fish is this?"
 * Shows an image and asks user to select correct fish from 4 options
 */
export type IdentifyQuestion = {
  type: 'identify';
  prompt: string;
  fishId: string;
  options: Array<{ id: string; label: string }>;
  correct: string;
};

/**
 * Feature quiz question: "Which feature best identifies this fish?"
 * Shows a fish and asks user to select its key identifying feature
 */
export type FeatureQuestion = {
  type: 'feature';
  prompt: string;
  fishId: string;
  options: Array<{ label: string; value: string }>;
  correct: string;
};

/**
 * True/False quiz question: "Is this statement true or false?"
 * Tests knowledge of fish facts and characteristics
 */
export type TrueFalseQuestion = {
  type: 'tf';
  prompt: string;
  fishId: string;
  statement: string;
  options: Array<{ label: string; value: boolean }>;
  correct: boolean;
};

/**
 * Match quiz question: "Match fish names to their key features"
 * Tap-to-match style question with 3 pairs
 */
export type MatchQuestion = {
  type: 'match';
  prompt: string;
  pairs: string[];
  left: Array<{ id: string; label: string }>;
  right: Array<{ id: string; label: string }>;
};

/**
 * Spot difference quiz question: "Which one is the [fish name]?"
 * Shows two similar fish and asks user to identify the correct one
 */
export type SpotQuestion = {
  type: 'spot';
  prompt: string;
  fishId: string;
  pair: { fish1: string; fish2: string; hint: string };
  hint: string;
  options: Array<{ id: string; label: string }>;
  correct: string;
};

/**
 * Union type for all quiz question variants
 */
export type QuizQuestion =
  | IdentifyQuestion
  | FeatureQuestion
  | TrueFalseQuestion
  | MatchQuestion
  | SpotQuestion;

/**
 * Quiz context: tracks state during active quiz session
 */
export type QuizContext = {
  mode: 'lesson' | 'review' | 'free';
  lessonId: string | null;
  questions: QuizQuestion[];
  qIndex: number;
  answered: boolean;
  score: number;
  startTime: number;
};

// ============================================================================
// STATE TYPES
// ============================================================================

/**
 * User settings for the application
 */
export type Settings = {
  sound: boolean;
  allowSkipUnlock: boolean;
};

/**
 * Progress tracking for a single lesson
 */
export type LessonProgress = {
  unlocked: boolean;
  completed: boolean;
  bestStars: number;
  bestAcc: number;
  attempts: number;
  xpEarned: number;
};

/**
 * Statistics for a single fish
 */
export type FishStats = {
  seen: number;
  correct: number;
  wrong: number;
};

/**
 * Daily XP tracking: maps date (YYYY-MM-DD) to XP earned that day
 */
export type DailyXP = Record<string, number>;

/**
 * Complete game state
 * Matches the structure of defaultState() from app.js:47-65
 * Maintains backward compatibility with fishid.v1 localStorage format
 */
export type GameState = {
  xp: number;
  hearts: number;
  heartsMax: number;
  lastHeartTs: number;
  streak: number;
  bestStreak: number;
  lastPractice: string | null;
  dailyXP: DailyXP;
  settings: Settings;
  lessons: Record<string, LessonProgress>;
  fishStats: Record<string, FishStats>;
};

// ============================================================================
// LESSON TYPES
// ============================================================================

/**
 * Lesson definition
 * Represents a themed collection of fish for learning
 */
export type Lesson = {
  id: number | string;
  title: string;
  description: string;
  icon: string;
  fish: string[];
  unlocked: boolean;
};
