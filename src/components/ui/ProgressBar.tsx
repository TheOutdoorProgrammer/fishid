'use client';

interface ProgressBarProps {
  progress: number;
  className?: string;
}

export default function ProgressBar({
  progress,
  className = '',
}: ProgressBarProps) {
  const clampedProgress = Math.max(0, Math.min(100, progress));

  return (
    <div
      className={`h-3 rounded-full bg-[rgba(255,255,255,.10)] border border-[rgba(255,255,255,.08)] overflow-hidden ${className}`}
    >
      <div
        className="h-full bg-gradient-to-r from-[rgba(31,122,79,.9)] to-[rgba(242,192,76,.9)] transition-all duration-300"
        style={{ width: `${clampedProgress}%` }}
      />
    </div>
  );
}
