'use client';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: boolean;
}

export default function Card({ children, className = '', padding = true }: CardProps) {
  return (
    <div
      className={`bg-panel border border-white/5 rounded-[var(--radius)] shadow-lg ${
        padding ? 'p-6' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
