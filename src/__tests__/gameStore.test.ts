import { describe, test, expect, beforeEach, vi, afterEach } from 'vitest';
import { useGameStore } from '@/store/gameStore';
import { todayStr } from '@/lib/utils';

describe('gameStore', () => {
  beforeEach(() => {
    useGameStore.getState().resetProgress();
  });

  describe('default state initialization', () => {
    test('initializes with correct default values', () => {
      const state = useGameStore.getState();

      expect(state.xp).toBe(0);
      expect(state.hearts).toBe(5);
      expect(state.heartsMax).toBe(5);
      expect(state.streak).toBe(0);
      expect(state.bestStreak).toBe(0);
      expect(state.lastPractice).toBeNull();
      expect(state.dailyXP).toEqual({});
      expect(state.settings.sound).toBe(true);
      expect(state.settings.allowSkipUnlock).toBe(false);
    });

    test('initializes lessons with correct structure', () => {
      const state = useGameStore.getState();

      expect(state.lessons[1]).toBeDefined();
      expect(state.lessons[1].unlocked).toBe(true);
      expect(state.lessons[1].completed).toBe(false);
      expect(state.lessons[1].bestStars).toBe(0);
      expect(state.lessons[1].bestAcc).toBe(0);
    });

    test('initializes fishStats for all fish', () => {
      const state = useGameStore.getState();

      expect(Object.keys(state.fishStats).length).toBeGreaterThan(0);

      const firstFishId = Object.keys(state.fishStats)[0];
      expect(state.fishStats[firstFishId]).toEqual({
        seen: 0,
        correct: 0,
        wrong: 0,
      });
    });
  });

  describe('addXP', () => {
    test('increments xp correctly', () => {
      useGameStore.getState().addXP(50);
      expect(useGameStore.getState().xp).toBe(50);

      useGameStore.getState().addXP(30);
      expect(useGameStore.getState().xp).toBe(80);
    });

    test('updates dailyXP map with today date', () => {
      const today = todayStr();

      useGameStore.getState().addXP(100);

      expect(useGameStore.getState().dailyXP[today]).toBe(100);

      useGameStore.getState().addXP(50);
      expect(useGameStore.getState().dailyXP[today]).toBe(150);
    });

    test('ignores negative or zero amounts', () => {
      useGameStore.getState().addXP(-10);
      expect(useGameStore.getState().xp).toBe(0);

      useGameStore.getState().addXP(0);
      expect(useGameStore.getState().xp).toBe(0);
    });

    test('floors decimal amounts', () => {
      useGameStore.getState().addXP(10.7);
      expect(useGameStore.getState().xp).toBe(10);
    });

    test('calls markPractice after adding XP', () => {
      useGameStore.getState().addXP(50);

      expect(useGameStore.getState().streak).toBe(1);
      expect(useGameStore.getState().lastPractice).toBe(todayStr());
    });
  });

  describe('spendHeart', () => {
    test('decrements hearts correctly', () => {
      expect(useGameStore.getState().hearts).toBe(5);
      useGameStore.getState().spendHeart();
      expect(useGameStore.getState().hearts).toBe(4);
    });

    test('does not go below zero', () => {
      for (let i = 0; i < 10; i++) {
        useGameStore.getState().spendHeart();
      }

      expect(useGameStore.getState().hearts).toBe(0);
    });

    test('updates lastHeartTs', () => {
      vi.useFakeTimers();
      const beforeTs = useGameStore.getState().lastHeartTs;

      vi.advanceTimersByTime(1);
      useGameStore.getState().spendHeart();

      expect(useGameStore.getState().lastHeartTs).toBeGreaterThan(beforeTs);
      vi.useRealTimers();
    });
  });

  describe('regenHearts', () => {
    beforeEach(() => {
      vi.useFakeTimers();
    });

    afterEach(() => {
      vi.useRealTimers();
    });

    test('regenerates 1 heart after 10 minutes', () => {
      useGameStore.getState().spendHeart();
      expect(useGameStore.getState().hearts).toBe(4);

      const startTime = Date.now();
      vi.setSystemTime(startTime + 10 * 60 * 1000);

      useGameStore.getState().regenHearts();
      expect(useGameStore.getState().hearts).toBe(5);
    });

    test('regenerates 2 hearts after 20 minutes', () => {
      useGameStore.getState().spendHeart();
      useGameStore.getState().spendHeart();
      expect(useGameStore.getState().hearts).toBe(3);

      const startTime = Date.now();
      vi.setSystemTime(startTime + 20 * 60 * 1000);

      useGameStore.getState().regenHearts();
      expect(useGameStore.getState().hearts).toBe(5);
    });

    test('caps hearts at heartsMax', () => {
      useGameStore.getState().spendHeart();
      useGameStore.getState().spendHeart();
      useGameStore.getState().spendHeart();
      expect(useGameStore.getState().hearts).toBe(2);

      const startTime = Date.now();
      vi.setSystemTime(startTime + 50 * 60 * 1000);

      useGameStore.getState().regenHearts();
      expect(useGameStore.getState().hearts).toBe(5);
    });

    test('updates lastHeartTs correctly with partial time tracking', () => {
      useGameStore.getState().spendHeart();

      const startTime = Date.now();
      vi.setSystemTime(startTime + 15 * 60 * 1000);

      useGameStore.getState().regenHearts();

      const elapsed = Date.now() - useGameStore.getState().lastHeartTs;
      expect(elapsed).toBeLessThan(10 * 60 * 1000);
    });

    test('does not regenerate if already at max hearts', () => {
      expect(useGameStore.getState().hearts).toBe(5);

      const beforeTs = useGameStore.getState().lastHeartTs;
      const startTime = Date.now();
      vi.setSystemTime(startTime + 10 * 60 * 1000);

      useGameStore.getState().regenHearts();

      expect(useGameStore.getState().hearts).toBe(5);
      expect(useGameStore.getState().lastHeartTs).not.toBe(beforeTs);
    });
  });

  describe('markPractice', () => {
    beforeEach(() => {
      vi.useFakeTimers();
    });

    afterEach(() => {
      vi.useRealTimers();
    });

    test('sets streak to 1 on first practice', () => {
      useGameStore.getState().markPractice();

      expect(useGameStore.getState().streak).toBe(1);
      expect(useGameStore.getState().lastPractice).toBe(todayStr());
    });

    test('does not change streak when practicing same day', () => {
      useGameStore.getState().markPractice();
      expect(useGameStore.getState().streak).toBe(1);

      useGameStore.getState().markPractice();
      expect(useGameStore.getState().streak).toBe(1);
    });

    test('increments streak when practicing consecutive days', () => {
      vi.setSystemTime(new Date('2026-01-15T12:00:00'));
      useGameStore.getState().markPractice();
      expect(useGameStore.getState().streak).toBe(1);

      vi.setSystemTime(new Date('2026-01-16T12:00:00'));
      useGameStore.getState().markPractice();
      expect(useGameStore.getState().streak).toBe(2);

      vi.setSystemTime(new Date('2026-01-17T12:00:00'));
      useGameStore.getState().markPractice();
      expect(useGameStore.getState().streak).toBe(3);
    });

    test('resets streak to 1 when missing days', () => {
      vi.setSystemTime(new Date('2026-01-15T12:00:00'));
      useGameStore.getState().markPractice();
      expect(useGameStore.getState().streak).toBe(1);

      vi.setSystemTime(new Date('2026-01-18T12:00:00'));
      useGameStore.getState().markPractice();
      expect(useGameStore.getState().streak).toBe(1);
    });

    test('updates bestStreak correctly', () => {
      vi.setSystemTime(new Date('2026-01-15T12:00:00'));
      useGameStore.getState().markPractice();
      expect(useGameStore.getState().bestStreak).toBe(1);

      vi.setSystemTime(new Date('2026-01-16T12:00:00'));
      useGameStore.getState().markPractice();
      expect(useGameStore.getState().bestStreak).toBe(2);

      vi.setSystemTime(new Date('2026-01-17T12:00:00'));
      useGameStore.getState().markPractice();
      expect(useGameStore.getState().bestStreak).toBe(3);

      vi.setSystemTime(new Date('2026-01-20T12:00:00'));
      useGameStore.getState().markPractice();
      expect(useGameStore.getState().streak).toBe(1);
      expect(useGameStore.getState().bestStreak).toBe(3);
    });
  });

  describe('updateLesson', () => {
    test('updates lesson progress correctly', () => {
      useGameStore.getState().updateLesson(2, {
        unlocked: true,
        bestStars: 3,
        bestAcc: 95,
      });

      expect(useGameStore.getState().lessons[2].unlocked).toBe(true);
      expect(useGameStore.getState().lessons[2].bestStars).toBe(3);
      expect(useGameStore.getState().lessons[2].bestAcc).toBe(95);
    });

    test('merges partial updates', () => {
      useGameStore.getState().updateLesson(2, { bestStars: 2 });
      expect(useGameStore.getState().lessons[2].bestStars).toBe(2);
      expect(useGameStore.getState().lessons[2].unlocked).toBe(false);

      useGameStore.getState().updateLesson(2, { unlocked: true });
      expect(useGameStore.getState().lessons[2].bestStars).toBe(2);
      expect(useGameStore.getState().lessons[2].unlocked).toBe(true);
    });
  });

  describe('updateFishStats', () => {
    test('increments seen count', () => {
      const fishId = Object.keys(useGameStore.getState().fishStats)[0];

      useGameStore.getState().updateFishStats(fishId, true);
      expect(useGameStore.getState().fishStats[fishId].seen).toBe(1);

      useGameStore.getState().updateFishStats(fishId, false);
      expect(useGameStore.getState().fishStats[fishId].seen).toBe(2);
    });

    test('increments correct count when correct is true', () => {
      const fishId = Object.keys(useGameStore.getState().fishStats)[0];

      useGameStore.getState().updateFishStats(fishId, true);
      expect(useGameStore.getState().fishStats[fishId].correct).toBe(1);
      expect(useGameStore.getState().fishStats[fishId].wrong).toBe(0);
    });

    test('increments wrong count when correct is false', () => {
      const fishId = Object.keys(useGameStore.getState().fishStats)[0];

      useGameStore.getState().updateFishStats(fishId, false);
      expect(useGameStore.getState().fishStats[fishId].correct).toBe(0);
      expect(useGameStore.getState().fishStats[fishId].wrong).toBe(1);
    });

    test('handles fish not in initial stats', () => {
      const newFishId = 'new_fish_id';

      useGameStore.getState().updateFishStats(newFishId, true);
      expect(useGameStore.getState().fishStats[newFishId]).toEqual({
        seen: 1,
        correct: 1,
        wrong: 0,
      });
    });
  });

  describe('toggleSound', () => {
    test('toggles sound setting', () => {
      expect(useGameStore.getState().settings.sound).toBe(true);
      useGameStore.getState().toggleSound();
      expect(useGameStore.getState().settings.sound).toBe(false);
      useGameStore.getState().toggleSound();
      expect(useGameStore.getState().settings.sound).toBe(true);
    });
  });

  describe('toggleSkipUnlock', () => {
    test('toggles skip unlock setting', () => {
      expect(useGameStore.getState().settings.allowSkipUnlock).toBe(false);
      useGameStore.getState().toggleSkipUnlock();
      expect(useGameStore.getState().settings.allowSkipUnlock).toBe(true);
      useGameStore.getState().toggleSkipUnlock();
      expect(useGameStore.getState().settings.allowSkipUnlock).toBe(false);
    });
  });

  describe('exportProgress', () => {
    test('returns valid JSON string', () => {
      useGameStore.getState().addXP(100);

      const exported = useGameStore.getState().exportProgress();

      expect(() => JSON.parse(exported)).not.toThrow();
    });

    test('exports all state properties', () => {
      useGameStore.getState().addXP(100);

      const exported = JSON.parse(useGameStore.getState().exportProgress());

      expect(exported).toHaveProperty('xp');
      expect(exported).toHaveProperty('hearts');
      expect(exported).toHaveProperty('streak');
      expect(exported).toHaveProperty('dailyXP');
      expect(exported).toHaveProperty('settings');
      expect(exported).toHaveProperty('lessons');
      expect(exported).toHaveProperty('fishStats');
    });

    test('exported data matches current state', () => {
      useGameStore.getState().addXP(150);

      const exported = JSON.parse(useGameStore.getState().exportProgress());

      expect(exported.xp).toBe(150);
      expect(exported.hearts).toBe(5);
    });
  });

  describe('importProgress', () => {
    test('imports valid JSON and merges with defaults', () => {
      const importData = JSON.stringify({
        xp: 500,
        hearts: 3,
        streak: 5,
      });

      useGameStore.getState().importProgress(importData);

      expect(useGameStore.getState().xp).toBe(500);
      expect(useGameStore.getState().hearts).toBe(3);
      expect(useGameStore.getState().streak).toBe(5);
      expect(useGameStore.getState().heartsMax).toBe(5);
    });

    test('merges settings correctly', () => {
      const importData = JSON.stringify({
        settings: { sound: false },
      });

      useGameStore.getState().importProgress(importData);

      expect(useGameStore.getState().settings.sound).toBe(false);
      expect(useGameStore.getState().settings.allowSkipUnlock).toBe(false);
    });

    test('throws error on invalid JSON', () => {
      expect(() => useGameStore.getState().importProgress('invalid json')).toThrow(
        'Invalid JSON format'
      );
    });

    test('round-trip import/export works', () => {
      useGameStore.getState().addXP(250);
      useGameStore.getState().spendHeart();

      const exported = useGameStore.getState().exportProgress();

      useGameStore.getState().resetProgress();
      expect(useGameStore.getState().xp).toBe(0);

      useGameStore.getState().importProgress(exported);
      expect(useGameStore.getState().xp).toBe(250);
      expect(useGameStore.getState().hearts).toBe(4);
    });
  });

  describe('resetProgress', () => {
    test('resets all state to default', () => {
      useGameStore.getState().addXP(500);
      useGameStore.getState().spendHeart();
      useGameStore.getState().updateLesson(2, { unlocked: true });

      useGameStore.getState().resetProgress();

      expect(useGameStore.getState().xp).toBe(0);
      expect(useGameStore.getState().hearts).toBe(5);
      expect(useGameStore.getState().streak).toBe(0);
      expect(useGameStore.getState().dailyXP).toEqual({});
      expect(useGameStore.getState().lessons[2].unlocked).toBe(false);
    });
  });
});
