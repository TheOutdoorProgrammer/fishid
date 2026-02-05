'use client';

import HUD from './HUD';

export default function TopBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[100] bg-bg border-b border-[rgba(255,255,255,.08)] h-[70px] flex items-center justify-between px-4">
      <div className="text-lg font-extrabold hidden min-[380px]:block">🐟 FishID</div>
      <HUD />
    </div>
  );
}
