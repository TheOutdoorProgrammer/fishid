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
    <div className="min-h-screen bg-bg text-text flex flex-col">
      <TopBar />
      <main className="flex-1 overflow-auto pt-[70px] pb-[70px] flex justify-center">
        <div className="w-full max-w-[600px] px-4 py-6">{children}</div>
      </main>
      <BottomNav currentScreen={currentScreen} onNavigate={onNavigate} />
    </div>
  );
}
