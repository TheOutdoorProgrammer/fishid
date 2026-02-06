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

/**
 * Get the base path for assets (handles GitHub Pages subdirectory)
 */
export function getBasePath(): string {
  return process.env.NEXT_PUBLIC_BASE_PATH || '';
}

/**
 * Prefix a path with the base path for static assets
 * @param path - The asset path (e.g., '/img/fish/walleye/1.jpg')
 * @returns The path with basePath prepended
 */
export function assetPath(path: string): string {
  const base = getBasePath();
  if (!path) return '';
  // Avoid double-prefixing
  if (base && path.startsWith(base)) return path;
  return `${base}${path}`;
}

/**
 * Get a random image from a fish's image array
 * @param images - Array of image paths
 * @returns A random image path from the array (with basePath)
 */
export function getRandomFishImage(images: string[]): string {
  if (images.length === 0) return '';
  const img = images[Math.floor(Math.random() * images.length)];
  return assetPath(img);
}
