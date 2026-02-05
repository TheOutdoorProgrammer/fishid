'use client';

interface ChipProps {
  children: React.ReactNode;
  variant?: 'default' | 'gold' | 'green' | 'blue';
  className?: string;
}

export default function Chip({ children, variant = 'default', className = '' }: ChipProps) {
  const variantClasses = {
    default: 'bg-panel-2 text-text border-white/10',
    gold: 'bg-gold/10 text-gold border-gold/20',
    green: 'bg-green/10 text-green border-green/20',
    blue: 'bg-blue/10 text-blue border-blue/20',
  };

  return (
    <span
      className={`px-3 py-1.5 rounded-full border text-xs font-medium inline-flex items-center justify-center ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
