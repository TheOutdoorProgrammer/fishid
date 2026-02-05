'use client';

import { Star } from './icons';

interface StarRatingProps {
  stars: number;
  className?: string;
}

export default function StarRating({ stars, className = '' }: StarRatingProps) {
  const clampedStars = Math.max(0, Math.min(3, stars));

  return (
    <div className={`flex gap-1 ${className}`}>
      {[1, 2, 3].map((i) => (
        <Star
          key={i}
          size={16}
          className={`${i <= clampedStars ? 'text-gold fill-gold' : 'text-muted fill-transparent'}`}
        />
      ))}
    </div>
  );
}
