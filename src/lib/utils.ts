/**
 * Utility functions for FishID
 */

/**
 * Fisher-Yates shuffle algorithm
 * Returns a new shuffled array without modifying the original
 */
export function shuffle<T>(arr: T[]): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Clamp a number between min and max bounds
 */
export function clamp(n: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, n));
}

/**
 * Get today's date as YYYY-MM-DD string
 */
export function todayStr(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

/**
 * Calculate the number of days between two dates
 * @param a - First date (Date object or date string)
 * @param b - Second date (Date object or date string)
 * @returns Number of days between the dates
 */
export function daysBetween(a: Date | string, b: Date | string): number {
  const dateA = typeof a === 'string' ? new Date(a) : a;
  const dateB = typeof b === 'string' ? new Date(b) : b;
  return Math.floor((dateB.getTime() - dateA.getTime()) / (24 * 60 * 60 * 1000));
}
