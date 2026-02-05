'use client';

import React, { useRef } from 'react';
import { useGameStore, FISH_IDS } from '@/store/gameStore';
import { FISH } from '@/fish';
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

  const completedLessons = Object.values(lessons).filter((l: any) => l.completed).length;

  return (
    <div className="space-y-6">
      <Card>
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-xl font-black mb-1">Profile</h2>
            <p className="text-sm opacity-80">Your fishing brain stats.</p>
          </div>
          <Button variant="danger" onClick={handleReset} className="!py-2 !px-3 text-xs min-h-0">
            Reset
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-2 py-4">
          <div className="text-center">
            <div className="text-xs uppercase tracking-wider opacity-60 mb-1">Total XP</div>
            <div className="font-black text-xl">{xp}</div>
          </div>
          <div className="text-center">
            <div className="text-xs uppercase tracking-wider opacity-60 mb-1">Streak</div>
            <div className="font-black text-xl">{streak}</div>
          </div>
          <div className="text-center">
            <div className="text-xs uppercase tracking-wider opacity-60 mb-1">Hearts</div>
            <div className="font-black text-xl">{hearts}</div>
          </div>
        </div>

        <hr className="border-[rgba(255,255,255,.08)] my-4" />

        <div className="text-sm opacity-80 mb-4">
          Lessons unlocked: {Object.values(lessons).filter((l: any) => l.unlocked).length}
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between p-4 bg-[rgba(255,255,255,.05)] rounded-xl">
            <span>Sound Effects</span>
            <Button variant="ghost" onClick={toggleSound} className="!p-1 min-h-0 h-8 w-8">
              {settings.sound ? '🔊' : '🔇'}
            </Button>
          </div>
          <div className="flex items-center justify-between p-4 bg-[rgba(255,255,255,.05)] rounded-xl">
            <span>Allow Skip Unlock</span>
            <Button
              variant="ghost"
              onClick={toggleSkipUnlock}
              className={`!p-1 min-h-0 h-8 w-8 ${settings.allowSkipUnlock ? 'text-yellow-400' : 'opacity-50'}`}
            >
              🔓
            </Button>
          </div>
        </div>

        <div className="flex gap-2 mt-4">
          <Button variant="ghost" onClick={handleExport} className="flex-1 text-xs">
            Export JSON
          </Button>
          <Button variant="ghost" onClick={handleImportClick} className="flex-1 text-xs">
            Import JSON
          </Button>
          <input
            ref={fileInputRef}
            type="file"
            accept="application/json"
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
        </div>
      </Card>

      <Card>
        <h2 className="text-xl font-black mb-1">Fish Library</h2>
        <p className="text-sm opacity-80 mb-4">Tap a fish to see its ID notes.</p>

        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
          {FISH_IDS.map((id) => {
            const fish = FISH[id];
            const stats = fishStats[id] || { seen: 0 };
            const isSeen = stats.seen > 0;

            if (!fish) return null;

            return (
              <div
                key={id}
                className={`
                  aspect-square rounded-lg border flex items-center justify-center relative overflow-hidden
                  ${
                    isSeen
                      ? 'bg-[rgba(255,255,255,.05)] border-[rgba(255,255,255,.1)]'
                      : 'bg-[rgba(0,0,0,.2)] border-[rgba(255,255,255,.03)] opacity-50 grayscale'
                  }
                `}
                title={fish.name}
              >
                <div
                  dangerouslySetInnerHTML={{ __html: fish.svg || '<div class="text-2xl">?</div>' }}
                  className="w-2/3 h-2/3 flex items-center justify-center"
                />
                {isSeen && (
                  <div className="absolute bottom-1 right-1 text-[8px] bg-green-900/50 px-1 rounded">
                    {stats.correct}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}
