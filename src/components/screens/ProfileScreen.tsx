'use client';

import React, { useRef } from 'react';
import { useGameStore, FISH_IDS } from '@/store/gameStore';
import { FISH } from '@/fish';
import { getRandomFishImage } from '@/lib/utils';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

interface ProfileScreenProps {
  onNavigate?: (screen: string) => void;
}

export default function ProfileScreen({ onNavigate }: ProfileScreenProps) {
  const {
    xp,
    streak,
    hearts,
    lessons,
    fishStats,
    settings,
    toggleSound,
    toggleSkipUnlock,
    resetProgress,
    exportProgress,
    importProgress,
  } = useGameStore();

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleExport = () => {
    const json = exportProgress();
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `fishid-backup-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const json = event.target?.result as string;
          importProgress(json);
          alert('Progress imported successfully!');
        } catch (err) {
          alert('Failed to import progress. Invalid file.');
        }
      };
      reader.readAsText(file);
    }
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleReset = () => {
    if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
      resetProgress();
    }
  };

  return (
    <div className="space-y-8 pb-20">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-black text-white">Profile</h2>
          <div className="text-sm font-medium text-white/50">Level {Math.floor(xp / 1000) + 1}</div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <Card className="flex flex-col items-center justify-center !p-4 bg-gradient-to-br from-blue/20 to-blue/5 border-blue/20">
            <div className="text-2xl mb-1">⚡</div>
            <div className="text-2xl font-black text-white">{xp}</div>
            <div className="text-[10px] uppercase tracking-wider font-bold text-blue-200 opacity-60">
              Total XP
            </div>
          </Card>
          <Card className="flex flex-col items-center justify-center !p-4 bg-gradient-to-br from-orange-500/20 to-orange-500/5 border-orange-500/20">
            <div className="text-2xl mb-1">🔥</div>
            <div className="text-2xl font-black text-white">{streak}</div>
            <div className="text-[10px] uppercase tracking-wider font-bold text-orange-200 opacity-60">
              Day Streak
            </div>
          </Card>
          <Card className="flex flex-col items-center justify-center !p-4 bg-gradient-to-br from-red-500/20 to-red-500/5 border-red-500/20">
            <div className="text-2xl mb-1">❤️</div>
            <div className="text-2xl font-black text-white">{hearts}</div>
            <div className="text-[10px] uppercase tracking-wider font-bold text-red-200 opacity-60">
              Lives
            </div>
          </Card>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-bold text-white/80 px-1">Settings</h3>
        <Card className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm">
                🔊
              </div>
              <span className="font-medium">Sound Effects</span>
            </div>
            <button
              onClick={toggleSound}
              className={`w-12 h-7 rounded-full transition-colors relative ${settings.sound ? 'bg-green-500' : 'bg-white/10'}`}
            >
              <div
                className={`absolute top-1 w-5 h-5 rounded-full bg-white transition-transform ${settings.sound ? 'left-6' : 'left-1'}`}
              />
            </button>
          </div>

          <div className="h-px bg-white/5" />

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm">
                🔓
              </div>
              <span className="font-medium">Skip Unlock</span>
            </div>
            <button
              onClick={toggleSkipUnlock}
              className={`w-12 h-7 rounded-full transition-colors relative ${settings.allowSkipUnlock ? 'bg-green-500' : 'bg-white/10'}`}
            >
              <div
                className={`absolute top-1 w-5 h-5 rounded-full bg-white transition-transform ${settings.allowSkipUnlock ? 'left-6' : 'left-1'}`}
              />
            </button>
          </div>
        </Card>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-bold text-white/80 px-1">Data</h3>
        <Card className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <Button variant="ghost" onClick={handleExport} className="w-full">
              Export JSON
            </Button>
            <Button variant="ghost" onClick={handleImportClick} className="w-full">
              Import JSON
            </Button>
          </div>
          <Button
            variant="danger"
            onClick={handleReset}
            className="w-full opacity-80 hover:opacity-100"
          >
            Reset All Progress
          </Button>
          <input
            ref={fileInputRef}
            type="file"
            accept="application/json"
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
        </Card>
      </div>

      <div className="space-y-4">
        <div className="flex items-end justify-between px-1">
          <h3 className="text-lg font-bold text-white/80">Fish Library</h3>
          <span className="text-xs font-medium text-white/40">
            {Object.keys(fishStats).filter((id) => fishStats[id]?.seen > 0).length} /{' '}
            {FISH_IDS.length} Found
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {FISH_IDS.map((id) => {
            const fish = FISH[id];
            const stats = fishStats[id] || { seen: 0, correct: 0 };
            const isSeen = stats.seen > 0;

            if (!fish) return null;

            return (
              <div
                key={id}
                className={`
                  relative aspect-[4/3] rounded-xl overflow-hidden border transition-all duration-300
                  ${
                    isSeen
                      ? 'bg-panel border-white/10 shadow-lg'
                      : 'bg-black/20 border-white/5 opacity-60'
                  }
                `}
              >
                {isSeen ? (
                  <>
                    <img
                      src={getRandomFishImage(fish.image)}
                      alt={fish.name}
                      className="w-full h-full object-contain transition-transform hover:scale-105 duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <div className="text-sm font-bold leading-tight mb-1">{fish.name}</div>
                      <div className="flex gap-2">
                        <span className="text-[10px] font-medium px-1.5 py-0.5 bg-white/10 rounded text-white/70">
                          Seen: {stats.seen}
                        </span>
                        {stats.correct > 0 && (
                          <span className="text-[10px] font-medium px-1.5 py-0.5 bg-green-500/20 text-green-300 rounded">
                            Caught: {stats.correct}
                          </span>
                        )}
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center">
                    <div className="text-3xl opacity-20 mb-2">?</div>
                    <div className="text-xs font-medium opacity-30">Undiscovered</div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
