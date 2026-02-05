'use client';

interface NavButtonProps {
  icon: string;
  label: string;
  onClick?: () => void;
}

function NavButton({ icon, label, onClick }: NavButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex-1 flex flex-col items-center justify-center gap-1 min-h-[44px] text-text hover:text-gold transition-colors"
    >
      <span className="text-xl">{icon}</span>
      <span className="text-xs font-bold">{label}</span>
    </button>
  );
}

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-panel border-t border-[rgba(255,255,255,.08)] h-[70px] flex items-center">
      <NavButton icon="🏠" label="Home" />
      <NavButton icon="📚" label="Learn" />
      <NavButton icon="🔄" label="Review" />
      <NavButton icon="👤" label="Profile" />
    </div>
  );
}
