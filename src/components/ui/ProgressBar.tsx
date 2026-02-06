'use client';

interface ProgressBarProps {
  progress: number;
  className?: string;
}

export default function ProgressBar({ progress, className = '' }: ProgressBarProps) {
  const clampedProgress = Math.max(0, Math.min(100, progress));

  return (
    <div
      className={`h-3 rounded-full bg-panel-2 border border-white/5 overflow-hidden ${className}`}
    >
      <div
        className="h-full transition-all duration-500 ease-out"
        style={{
          width: `${clampedProgress}%`,
          background: 'linear-gradient(to right, var(--blue), var(--green))',
        }}
      />
    </div>
  );
}
