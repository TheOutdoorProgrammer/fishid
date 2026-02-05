'use client';

import HUD from './HUD';

export default function TopBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[100] bg-panel/95 backdrop-blur-md border-b border-white/5 min-h-[70px] pt-[env(safe-area-inset-top,0px)] flex items-center justify-between px-4 shadow-sm">
      <div className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-blue to-green bg-clip-text text-transparent hidden min-[380px]:block">
        FishID
      </div>
      <HUD />
    </div>
  );
}
