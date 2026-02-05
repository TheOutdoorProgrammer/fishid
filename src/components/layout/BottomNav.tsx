'use client';

interface NavButtonProps {
  icon: string;
  label: string;
  isActive?: boolean;
  onClick: () => void;
}

function NavButton({ icon, label, isActive, onClick }: NavButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 flex flex-col items-center justify-center gap-1 min-h-[44px] transition-colors ${
        isActive ? 'text-gold' : 'text-text hover:text-gold'
      }`}
    >
      <span className="text-xl">{icon}</span>
      <span className="text-xs font-bold">{label}</span>
    </button>
  );
}

interface BottomNavProps {
  currentScreen: string;
  onNavigate: (screen: string) => void;
}

export default function BottomNav({ currentScreen, onNavigate }: BottomNavProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-panel border-t border-[rgba(255,255,255,.08)] h-[70px] flex items-center pb-safe">
      <NavButton
        icon="🏠"
        label="Home"
        isActive={currentScreen === 'home'}
        onClick={() => onNavigate('home')}
      />
      <NavButton
        icon="📚"
        label="Learn"
        isActive={currentScreen === 'learn' || currentScreen === 'learnMode'}
        onClick={() => onNavigate('learn')}
      />
      <NavButton
        icon="🔄"
        label="Review"
        isActive={currentScreen === 'review'}
        onClick={() => onNavigate('review')}
      />
      <NavButton
        icon="👤"
        label="Profile"
        isActive={currentScreen === 'profile'}
        onClick={() => onNavigate('profile')}
      />
    </div>
  );
}
