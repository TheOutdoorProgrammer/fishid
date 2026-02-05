'use client';

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'gold' | 'danger' | 'ghost';
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  children,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const baseClasses =
    'h-12 px-6 rounded-[var(--radius)] font-bold text-[15px] inline-flex items-center justify-center gap-2.5 cursor-pointer select-none active:scale-[0.98] transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none';

  const variantClasses = {
    primary: 'bg-blue text-bg hover:bg-blue/90 shadow-lg shadow-blue/20 border border-transparent',
    gold: 'bg-gold text-bg hover:bg-gold/90 shadow-lg shadow-gold/20 border border-transparent',
    danger:
      'bg-danger text-bg hover:bg-danger/90 shadow-lg shadow-danger/20 border border-transparent',
    ghost: 'bg-transparent text-text border border-white/10 hover:bg-white/5',
  };

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : '';

  return (
    <button
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${disabledClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
