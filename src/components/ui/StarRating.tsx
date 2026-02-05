'use client';

interface StarRatingProps {
  stars: number;
  className?: string;
}

export default function StarRating({
  stars,
  className = '',
}: StarRatingProps) {
  const clampedStars = Math.max(0, Math.min(3, stars));

  return (
    <div className={`flex gap-0.5 text-sm ${className}`}>
      {[1, 2, 3].map((i) => (
        <span key={i} className={i <= clampedStars ? 'opacity-100' : 'opacity-35'}>
          ⭐
        </span>
      ))}
    </div>
  );
}
