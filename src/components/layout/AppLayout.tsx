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
      <main className="fixed inset-x-0 top-[calc(70px+env(safe-area-inset-top,0px))] bottom-[calc(70px+env(safe-area-inset-bottom,0px))] overflow-auto flex justify-center">
        <div className="w-full max-w-[600px] px-4 py-6">{children}</div>
      </main>
      <BottomNav currentScreen={currentScreen} onNavigate={onNavigate} />
    </div>
  );
}
