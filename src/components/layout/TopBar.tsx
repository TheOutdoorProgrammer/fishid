'use client';

import HUD from './HUD';

export default function TopBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[100] bg-panel/95 backdrop-blur-md border-b border-white/5 min-h-[70px] pt-[env(safe-area-inset-top,0px)] flex items-center justify-between px-4 shadow-sm">
      <div className="flex items-center gap-2 hidden min-[380px]:flex">
        <span className="text-2xl">🐟</span>
        <span
          className="text-xl font-extrabold tracking-tight"
          style={{
            background: 'linear-gradient(to right, var(--blue), var(--green))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          FishID
        </span>
      </div>
      <HUD />
    </div>
  );
}
