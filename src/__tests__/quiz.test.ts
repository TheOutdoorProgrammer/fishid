import { describe, test, expect } from 'vitest';
import {
  buildQuizQuestions,
  qIdentify,
  qFeature,
  qTrueFalse,
  qMatch,
  qSpotDifference,
} from '@/lib/quiz';
import { FISH } from '@/fish';
import type { Fish } from '@/fish/types';

const ALL_FISH = Object.values(FISH) as Fish[];
const SAMPLE_FISH = ALL_FISH.slice(0, 10);

describe('quiz engine', () => {
  describe('buildQuizQuestions', () => {
    test('returns correct number of questions', () => {
      const questions = buildQuizQuestions(SAMPLE_FISH, 10);
      expect(questions).toHaveLength(10);
    });

    test('handles empty fish pool', () => {
      const questions = buildQuizQuestions([], 5);
      expect(questions).toHaveLength(5);
    });

    test('returns all question types in rotation', () => {
      const questions = buildQuizQuestions(SAMPLE_FISH, 10);
      const types = questions.map((q) => q.type);

      const uniqueTypes = new Set(types);
      expect(uniqueTypes.size).toBeGreaterThan(1);
    });

    test('no excessive duplicates in identify questions', () => {
      const questions = buildQuizQuestions(SAMPLE_FISH, 20);
      const identifyQuestions = questions.filter((q) => q.type === 'identify');
      const fishCounts = new Map<string, number>();

      identifyQuestions.forEach((q) => {
        if (q.type === 'identify') {
          const count = fishCounts.get(q.fishId) || 0;
          fishCounts.set(q.fishId, count + 1);
        }
      });

      fishCounts.forEach((count) => {
        expect(count).toBeLessThan(3);
      });
    });
  });

  describe('qIdentify', () => {
    test('generates valid identify question structure', () => {
      const used = { fish: new Set<string>(), tf: new Set<string>(), pairs: new Set<string>() };
      const question = qIdentify(SAMPLE_FISH, used);

      expect(question.type).toBe('identify');
      expect(question.prompt).toBeTruthy();
      expect(question.fishId).toBeTruthy();
      expect(question.options).toHaveLength(4);
      expect(question.correct).toBeTruthy();
    });

    test('has 4 options with one correct', () => {
      const used = { fish: new Set<string>(), tf: new Set<string>(), pairs: new Set<string>() };
      const question = qIdentify(SAMPLE_FISH, used);

      expect(question.options).toHaveLength(4);

      const correctOption = question.options.find((opt) => opt.id === question.correct);
      expect(correctOption).toBeDefined();
    });

    test('marks fish as used', () => {
      const used = { fish: new Set<string>(), tf: new Set<string>(), pairs: new Set<string>() };
      const question = qIdentify(SAMPLE_FISH, used);

      expect(used.fish.has(question.fishId)).toBe(true);
    });

    test('all options have id and label', () => {
      const used = { fish: new Set<string>(), tf: new Set<string>(), pairs: new Set<string>() };
      const question = qIdentify(SAMPLE_FISH, used);

      question.options.forEach((opt) => {
        expect(opt.id).toBeTruthy();
        expect(opt.label).toBeTruthy();
      });
    });
  });

  describe('qFeature', () => {
    test('generates valid feature question structure', () => {
      const used = { fish: new Set<string>(), tf: new Set<string>(), pairs: new Set<string>() };
      const question = qFeature(SAMPLE_FISH, used);

      expect(question.type).toBe('feature');
      expect(question.prompt).toBeTruthy();
      expect(question.fishId).toBeTruthy();
      expect(question.options.length).toBeGreaterThan(0);
      expect(question.correct).toBeTruthy();
    });

    test('has correct fish and options', () => {
      const used = { fish: new Set<string>(), tf: new Set<string>(), pairs: new Set<string>() };
      const question = qFeature(SAMPLE_FISH, used);

      expect(question.options.length).toBeGreaterThan(0);

      const correctOption = question.options.find((opt) => opt.value === question.correct);
      expect(correctOption).toBeDefined();
    });

    test('marks fish as used', () => {
      const used = { fish: new Set<string>(), tf: new Set<string>(), pairs: new Set<string>() };
      const question = qFeature(SAMPLE_FISH, used);

      expect(used.fish.has(question.fishId)).toBe(true);
    });

    test('all options have label and value', () => {
      const used = { fish: new Set<string>(), tf: new Set<string>(), pairs: new Set<string>() };
      const question = qFeature(SAMPLE_FISH, used);

      question.options.forEach((opt) => {
        expect(opt.label).toBeTruthy();
        expect(opt.value).toBeTruthy();
      });
    });
  });

  describe('qTrueFalse', () => {
    test('generates valid true/false question structure', () => {
      const used = { fish: new Set<string>(), tf: new Set<string>(), pairs: new Set<string>() };
      const question = qTrueFalse(SAMPLE_FISH, used);

      expect(question.type).toBe('tf');
      expect(question.prompt).toBeTruthy();
      expect(question.fishId).toBeTruthy();
      expect(question.statement).toBeTruthy();
      expect(question.options).toHaveLength(2);
      expect(typeof question.correct).toBe('boolean');
    });

    test('has statement and boolean options', () => {
      const used = { fish: new Set<string>(), tf: new Set<string>(), pairs: new Set<string>() };
      const question = qTrueFalse(SAMPLE_FISH, used);

      expect(question.statement).toBeTruthy();
      expect(question.options).toHaveLength(2);

      const trueOption = question.options.find((opt) => opt.value === true);
      const falseOption = question.options.find((opt) => opt.value === false);

      expect(trueOption).toBeDefined();
      expect(falseOption).toBeDefined();
    });

    test('marks statement as used', () => {
      const used = { fish: new Set<string>(), tf: new Set<string>(), pairs: new Set<string>() };
      const question = qTrueFalse(SAMPLE_FISH, used);

      expect(used.tf.has(question.statement)).toBe(true);
    });

    test('options have label and boolean value', () => {
      const used = { fish: new Set<string>(), tf: new Set<string>(), pairs: new Set<string>() };
      const question = qTrueFalse(SAMPLE_FISH, used);

      question.options.forEach((opt) => {
        expect(opt.label).toBeTruthy();
        expect(typeof opt.value).toBe('boolean');
      });
    });
  });

  describe('qMatch', () => {
    test('generates valid match question structure', () => {
      const question = qMatch(SAMPLE_FISH);

      expect(question.type).toBe('match');
      expect(question.prompt).toBeTruthy();
      expect(question.pairs).toBeDefined();
      expect(question.left).toBeDefined();
      expect(question.right).toBeDefined();
    });

    test('has 3 pairs with left/right arrays', () => {
      const question = qMatch(SAMPLE_FISH);

      expect(question.pairs.length).toBe(3);
      expect(question.left.length).toBe(3);
      expect(question.right.length).toBe(3);
    });

    test('left and right items have id and label', () => {
      const question = qMatch(SAMPLE_FISH);

      question.left.forEach((item) => {
        expect(item.id).toBeTruthy();
        expect(item.label).toBeTruthy();
      });

      question.right.forEach((item) => {
        expect(item.id).toBeTruthy();
        expect(item.label).toBeTruthy();
      });
    });

    test('pairs match between left and right', () => {
      const question = qMatch(SAMPLE_FISH);

      const leftIds = new Set(question.left.map((item) => item.id));
      const rightIds = new Set(question.right.map((item) => item.id));

      expect(leftIds.size).toBe(rightIds.size);
      leftIds.forEach((id) => {
        expect(rightIds.has(id)).toBe(true);
      });
    });
  });

  describe('qSpotDifference', () => {
    test('generates valid spot question structure', () => {
      const used = { fish: new Set<string>(), tf: new Set<string>(), pairs: new Set<string>() };
      const question = qSpotDifference(SAMPLE_FISH, used);

      expect(question.type).toBe('spot');
      expect(question.prompt).toBeTruthy();
      expect(question.fishId).toBeTruthy();
      expect(question.pair).toBeDefined();
      expect(question.hint).toBeTruthy();
      expect(question.options).toHaveLength(2);
      expect(question.correct).toBeTruthy();
    });

    test('has 2 fish options with hint', () => {
      const used = { fish: new Set<string>(), tf: new Set<string>(), pairs: new Set<string>() };
      const question = qSpotDifference(SAMPLE_FISH, used);

      expect(question.options).toHaveLength(2);
      expect(question.hint).toBeTruthy();
      expect(question.pair.fish1).toBeTruthy();
      expect(question.pair.fish2).toBeTruthy();
      expect(question.pair.hint).toBeTruthy();
    });

    test('correct answer is one of the pair fish', () => {
      const used = { fish: new Set<string>(), tf: new Set<string>(), pairs: new Set<string>() };
      const question = qSpotDifference(SAMPLE_FISH, used);

      const isPairFish =
        question.correct === question.pair.fish1 || question.correct === question.pair.fish2;
      expect(isPairFish).toBe(true);
    });

    test('options contain both pair fish', () => {
      const used = { fish: new Set<string>(), tf: new Set<string>(), pairs: new Set<string>() };
      const question = qSpotDifference(SAMPLE_FISH, used);

      const optionIds = question.options.map((opt) => opt.id);
      expect(optionIds).toContain(question.pair.fish1);
      expect(optionIds).toContain(question.pair.fish2);
    });

    test('marks pair as used', () => {
      const used = { fish: new Set<string>(), tf: new Set<string>(), pairs: new Set<string>() };
      const question = qSpotDifference(SAMPLE_FISH, used);

      const pairKey = `${question.pair.fish1}:${question.pair.fish2}`;
      expect(used.pairs.has(pairKey)).toBe(true);
    });
  });
});
