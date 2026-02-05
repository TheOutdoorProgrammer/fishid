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
      <main className="flex-1 overflow-y-auto w-full flex justify-center pt-[calc(70px+env(safe-area-inset-top,0px))] pb-[calc(90px+env(safe-area-inset-bottom,0px))] scroll-smooth">
        <div className="w-full max-w-[600px] px-4 py-6 animate-in fade-in duration-300">
          {children}
        </div>
      </main>
      <BottomNav currentScreen={currentScreen} onNavigate={onNavigate} />
    </div>
  );
}
