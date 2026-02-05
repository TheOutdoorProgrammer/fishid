'use client';

interface ButtonProps {
  variant?: 'primary' | 'gold' | 'danger' | 'ghost';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  variant = 'primary',
  children,
  onClick,
  disabled = false,
  className = '',
  type = 'button',
}: ButtonProps) {
  const baseClasses =
    'min-h-[44px] px-3.5 py-3 rounded-2xl border font-extrabold text-[15px] inline-flex items-center justify-center gap-2.5 cursor-pointer select-none active:translate-y-px active:scale-[0.98] transition-transform';

  const variantClasses = {
    primary:
      'bg-gradient-to-br from-[rgba(31,122,79,.95)] to-[rgba(26,110,165,.85)] border-[rgba(255,255,255,.14)] text-text',
    gold: 'bg-gradient-to-br from-[rgba(242,192,76,.95)] to-[rgba(255,211,122,.85)] border-[rgba(0,0,0,.15)] text-[#1a1a1a]',
    danger:
      'bg-[rgba(224,75,75,.18)] border-[rgba(224,75,75,.35)] text-text',
    ghost: 'bg-transparent border-[rgba(255,255,255,.12)] text-text',
  };

  const disabledClasses = disabled
    ? 'opacity-50 cursor-not-allowed pointer-events-none'
    : '';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${disabledClasses} ${className}`}
    >
      {children}
    </button>
  );
}
