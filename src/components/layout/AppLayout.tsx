'use client';

import TopBar from './TopBar';
import BottomNav from './BottomNav';

interface AppLayoutProps {
  children: React.ReactNode;
  currentScreen: string;
  onNavigate: (screen: string) => void;
}

export default function AppLayout({ children, currentScreen, onNavigate }: AppLayoutProps) {
  return (
    <div className="h-screen w-full bg-bg text-text overflow-hidden flex flex-col">
      <TopBar />
      <main id="main-scroll" className="flex-1 overflow-y-auto w-full pt-[calc(70px+env(safe-area-inset-top,0px))] scroll-smooth">
        <div className="w-full max-w-[600px] mx-auto px-4 pt-6 pb-6 animate-in fade-in duration-300">
          {children}
        </div>
      </main>
      <BottomNav currentScreen={currentScreen} onNavigate={onNavigate} />
    </div>
  );
}
