'use client';

import { Home, BookOpen, RefreshCw, User } from '../ui/icons';

interface NavButtonProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  onClick: () => void;
}

function NavButton({ icon, label, isActive, onClick }: NavButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 flex flex-col items-center justify-center gap-1 min-h-[48px] transition-colors ${
        isActive ? 'text-blue' : 'text-muted hover:text-text'
      }`}
    >
      <div className={isActive ? 'text-blue' : 'text-current'}>{icon}</div>
      <span className="text-[10px] font-bold uppercase tracking-wide">{label}</span>
    </button>
  );
}

interface BottomNavProps {
  currentScreen: string;
  onNavigate: (screen: string) => void;
}

export default function BottomNav({ currentScreen, onNavigate }: BottomNavProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-panel/95 backdrop-blur-md border-t border-white/5 min-h-[70px] flex items-center pb-[env(safe-area-inset-bottom,0px)] shadow-lg">
      <NavButton
        icon={<Home size={24} />}
        label="Home"
        isActive={currentScreen === 'home'}
        onClick={() => onNavigate('home')}
      />
      <NavButton
        icon={<BookOpen size={24} />}
        label="Learn"
        isActive={currentScreen === 'learn' || currentScreen === 'learnMode'}
        onClick={() => onNavigate('learn')}
      />
      <NavButton
        icon={<RefreshCw size={24} />}
        label="Review"
        isActive={currentScreen === 'review'}
        onClick={() => onNavigate('review')}
      />
      <NavButton
        icon={<User size={24} />}
        label="Profile"
        isActive={currentScreen === 'profile'}
        onClick={() => onNavigate('profile')}
      />
    </div>
  );
}
