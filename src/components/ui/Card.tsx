'use client';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: boolean;
}

export default function Card({ children, className = '', padding = true }: CardProps) {
  return (
    <div
      className={`bg-gradient-to-b from-[rgba(18,52,71,0.95)] to-[rgba(16,43,58,0.92)] border border-[rgba(255,255,255,0.1)] rounded-md shadow-lg ${
        padding ? 'p-3.5' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
