'use client';

interface ChipProps {
  children: React.ReactNode;
  variant?: 'default' | 'gold' | 'green' | 'blue';
  className?: string;
}

export default function Chip({
  children,
  variant = 'default',
  className = '',
}: ChipProps) {
  const variantClasses = {
    default: 'bg-[rgba(255,255,255,.06)] border-[rgba(255,255,255,.12)]',
    gold: 'bg-[rgba(242,192,76,.18)] border-[rgba(242,192,76,.25)]',
    green: 'bg-[rgba(31,122,79,.18)] border-[rgba(31,122,79,.28)]',
    blue: 'bg-[rgba(26,110,165,.18)] border-[rgba(26,110,165,.28)]',
  };

  return (
    <span
      className={`px-2.5 py-2 rounded-full border text-xs text-text ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
