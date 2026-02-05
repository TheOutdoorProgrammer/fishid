'use client';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: boolean;
}

export default function Card({
  children,
  className = '',
  padding = true,
}: CardProps) {
  return (
    <div
      className={`bg-panel border border-[rgba(255,255,255,.08)] rounded-md shadow-lg ${
        padding ? 'p-3.5' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
