/**
 * Zustand store for FishID game state management
 * Maintains backward compatibility with fishid.v1 localStorage format
 */

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { GameState, Lesson } from '../types';
import { todayStr, daysBetween, clamp } from '../lib/utils';
import * as fishExports from '../fish';

// ============================================================================
// CONSTANTS
// ============================================================================

const HEART_REGEN_MS = 10 * 60 * 1000; // 10 minutes
const STORAGE_KEY = 'fishid.v1';

// Temporary LESSONS definition until migration (matches js/data.js structure)
const LESSONS: Lesson[] = [
  {
    id: 1,
    title: 'Panfish',
    icon: '🐟',
    description: 'Bluegill, Crappie & Perch',
    fish: ['bluegill', 'black_crappie', 'white_crappie', 'yellow_perch'],
    unlocked: true,
  },
  {
    id: 2,
    title: 'Bass',
    icon: '🐠',
    description: 'Largemouth, Smallmouth & White',
    fish: ['largemouth_bass', 'smallmouth_bass', 'white_bass'],
    unlocked: false,
  },
  {
    id: 3,
    title: 'Catfish',
    icon: '🐡',
    description: 'Channel & Flathead',
    fish: ['channel_catfish', 'flathead_catfish', 'blue_catfish'],
    unlocked: false,
  },
  {
    id: 4,
    title: 'Pike Family',
    icon: '🦈',
    description: 'Northern Pike & Muskie',
    fish: ['northern_pike', 'muskellunge'],
    unlocked: false,
  },
  {
    id: 5,
    title: 'Walleye Family',
    icon: '👁️',
    description: 'Walleye, Saugeye & Sauger',
    fish: ['walleye', 'saugeye', 'sauger'],
    unlocked: false,
  },
  {
    id: 6,
    title: 'Trout & Salmon',
    icon: '🌊',
    description: 'Steelhead, Rainbow & Brown',
    fish: ['steelhead', 'rainbow_trout', 'brown_trout'],
    unlocked: false,
  },
  {
    id: 7,
    title: 'Others',
    icon: '🎣',
    description: 'Carp & Drum',
    fish: ['common_carp', 'freshwater_drum'],
    unlocked: false,
  },
  {
    id: 8,
    title: 'Sunfish',
    icon: '☀️',
    description: 'Green, Pumpkinseed & Longear',
    fish: [
      'green_sunfish',
      'pumpkinseed',
      'longear_sunfish',
      'redear_sunfish',
      'orangespotted_sunfish',
      'warmouth',
    ],
    unlocked: false,
  },
  {
    id: 9,
    title: 'More Bass',
    icon: '🏆',
    description: 'Spotted, Rock Bass & Hybrids',
    fish: ['spotted_bass', 'rock_bass', 'hybrid_striped_bass', 'white_perch'],
    unlocked: false,
  },
  {
    id: 10,
    title: 'Bullheads & Madtoms',
    icon: '🌙',
    description: 'Bullheads, Stonecat & More',
    fish: [
      'yellow_bullhead',
      'brown_bullhead',
      'black_bullhead',
      'white_catfish',
      'stonecat',
      'tadpole_madtom',
    ],
    unlocked: false,
  },
];

// Get all fish IDs from imported fish modules
const FISH_IDS = Object.keys(fishExports);

// ============================================================================
// DEFAULT STATE
// ============================================================================

/**
 * Generate default game state (matches app.js:47-65)
 */
const createDefaultState = (): GameState => ({
  xp: 0,
  hearts: 5,
  heartsMax: 5,
  lastHeartTs: Date.now(),
  streak: 0,
  bestStreak: 0,
  lastPractice: null,
  dailyXP: {},
  settings: { sound: false, allowSkipUnlock: false },
  lessons: LESSONS.reduce(
    (acc, l) => {
      acc[l.id] = {
        unlocked: l.unlocked,
        completed: false,
        bestStars: 0,
        bestAcc: 0,
        attempts: 0,
        xpEarned: 0,
      };
      return acc;
    },
    {} as Record<string, any>
  ),
  fishStats: FISH_IDS.reduce(
    (acc, id) => {
      acc[id] = { seen: 0, correct: 0, wrong: 0 };
      return acc;
    },
    {} as Record<string, any>
  ),
});

// ============================================================================
// STORE DEFINITION
// ============================================================================

interface GameActions {
  // XP & Practice
  addXP: (amount: number, reason?: string) => void;
  markPractice: () => void;

  // Hearts
  spendHeart: () => void;
  regenHearts: () => void;

  // Lessons
  updateLesson: (
    lessonId: string | number,
    progress: Partial<{
      unlocked: boolean;
      completed: boolean;
      bestStars: number;
      bestAcc: number;
      attempts: number;
      xpEarned: number;
    }>
  ) => void;

  // Fish Stats
  updateFishStats: (fishId: string, correct: boolean) => void;

  // Settings
  toggleSound: () => void;
  toggleSkipUnlock: () => void;

  // Import/Export
  importProgress: (json: string) => void;
  exportProgress: () => string;
  resetProgress: () => void;
}

type GameStore = GameState & GameActions;

export const useGameStore = create<GameStore>()(
  persist(
    (set, get) => ({
      // Initial state
      ...createDefaultState(),

      // ====================================================================
      // XP & PRACTICE ACTIONS
      // ====================================================================

      /**
       * Add XP and update daily tracking (app.js:137-149)
       */
      addXP: (amount: number, reason: string = '') => {
        amount = Math.max(0, Math.floor(amount));
        if (!amount) return;

        set((state) => {
          const today = todayStr();
          return {
            xp: state.xp + amount,
            dailyXP: {
              ...state.dailyXP,
              [today]: (state.dailyXP[today] || 0) + amount,
            },
          };
        });

        get().markPractice();
      },

      /**
       * Mark practice and update streak (app.js:117-134)
       */
      markPractice: () => {
        set((state) => {
          const today = todayStr();
          const last = state.lastPractice;

          let newStreak = state.streak;

          if (!last) {
            newStreak = 1;
          } else if (last === today) {
            return state;
          } else {
            const d1 = new Date(last + 'T00:00:00');
            const d2 = new Date(today + 'T00:00:00');
            const diff = daysBetween(d1, d2);

            if (diff === 1) {
              newStreak = state.streak + 1;
            } else {
              newStreak = 1;
            }
          }

          return {
            streak: newStreak,
            bestStreak: Math.max(state.bestStreak, newStreak),
            lastPractice: today,
          };
        });
      },

      // ====================================================================
      // HEARTS ACTIONS
      // ====================================================================

      /**
       * Spend a heart (decrement and update timestamp)
       */
      spendHeart: () => {
        set((state) => ({
          hearts: Math.max(0, state.hearts - 1),
          lastHeartTs: Date.now(),
        }));
      },

      /**
       * Regenerate hearts based on elapsed time (app.js:89-105)
       */
      regenHearts: () => {
        set((state) => {
          const now = Date.now();
          let h = state.hearts;

          if (h >= state.heartsMax) {
            return { lastHeartTs: now };
          }

          const elapsed = now - (state.lastHeartTs || now);
          const add = Math.floor(elapsed / HEART_REGEN_MS);

          if (add > 0) {
            h = clamp(h + add, 0, state.heartsMax);

            return {
              hearts: h,
              lastHeartTs: now - (elapsed % HEART_REGEN_MS),
            };
          }

          return state;
        });
      },

      // ====================================================================
      // LESSON ACTIONS
      // ====================================================================

      /**
       * Update lesson progress
       */
      updateLesson: (lessonId, progress) => {
        set((state) => ({
          lessons: {
            ...state.lessons,
            [lessonId]: {
              ...state.lessons[lessonId],
              ...progress,
            },
          },
        }));
      },

      // ====================================================================
      // FISH STATS ACTIONS
      // ====================================================================

      /**
       * Update fish statistics (seen count and correct/wrong answers)
       */
      updateFishStats: (fishId, correct) => {
        set((state) => {
          const now = Date.now();
          const current = state.fishStats[fishId] || {
            seen: 0,
            correct: 0,
            wrong: 0,
            wrongStreak: 0,
            lastWrongAt: undefined,
            lastCorrectAt: undefined,
          };

          const prevWrongStreak = current.wrongStreak || 0;
          const nextWrongStreak = correct ? 0 : prevWrongStreak + 1;

          return {
            fishStats: {
              ...state.fishStats,
              [fishId]: {
                ...current,
                seen: current.seen + 1,
                correct: correct ? current.correct + 1 : current.correct,
                wrong: correct ? current.wrong : current.wrong + 1,
                wrongStreak: nextWrongStreak,
                lastWrongAt: correct ? current.lastWrongAt : now,
                lastCorrectAt: correct ? now : current.lastCorrectAt,
              },
            },
          };
        });
      },

      // ====================================================================
      // SETTINGS ACTIONS
      // ====================================================================

      /**
       * Toggle sound setting
       */
      toggleSound: () => {
        set((state) => ({
          settings: {
            ...state.settings,
            sound: !state.settings.sound,
          },
        }));
      },

      /**
       * Toggle skip unlock setting
       */
      toggleSkipUnlock: () => {
        set((state) => ({
          settings: {
            ...state.settings,
            allowSkipUnlock: !state.settings.allowSkipUnlock,
          },
        }));
      },

      // ====================================================================
      // IMPORT/EXPORT ACTIONS
      // ====================================================================

      /**
       * Export current progress as JSON string
       */
      exportProgress: () => {
        const state = get();
        const stateData: GameState = {
          xp: state.xp,
          hearts: state.hearts,
          heartsMax: state.heartsMax,
          lastHeartTs: state.lastHeartTs,
          streak: state.streak,
          bestStreak: state.bestStreak,
          lastPractice: state.lastPractice,
          dailyXP: state.dailyXP,
          settings: state.settings,
          lessons: state.lessons,
          fishStats: state.fishStats,
        };
        return JSON.stringify(stateData, null, 2);
      },

      /**
       * Import progress from JSON (backward compatible with shallow merge)
       */
      importProgress: (json: string) => {
        try {
          const parsed = JSON.parse(json);
          const base = createDefaultState();

          // Shallow merge like app.js:68-85
          const merged: GameState = {
            ...base,
            ...parsed,
            settings: { ...base.settings, ...(parsed.settings || {}) },
            lessons: { ...base.lessons, ...(parsed.lessons || {}) },
            fishStats: { ...base.fishStats, ...(parsed.fishStats || {}) },
          };

          set(merged);
        } catch (e) {
          console.error('Failed to import progress:', e);
          throw new Error('Invalid JSON format');
        }
      },

      /**
       * Reset progress to default state
       */
      resetProgress: () => {
        set(createDefaultState());
      },
    }),
    {
      name: STORAGE_KEY,
      version: 1,
    }
  )
);

// ============================================================================
// EXPORTS
// ============================================================================

export { LESSONS, FISH_IDS };
export type { GameStore, GameActions };
