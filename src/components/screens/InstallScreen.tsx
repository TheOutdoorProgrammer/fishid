'use client';

import React from 'react';
import { Share, Download, Smartphone } from 'lucide-react';
import { usePWAInstall } from '@/hooks/usePWAInstall';
import Card from '@/components/ui/Card';

export default function InstallScreen() {
  const { isIOS, isInstallable, promptInstall } = usePWAInstall();

  return (
    <div className="min-h-screen bg-bg flex flex-col items-center justify-center p-6">
      <div className="text-center mb-8">
        <div className="text-8xl mb-4">🐟</div>
        <h1 className="text-3xl font-black text-text mb-2">FishID</h1>
        <p className="text-text/60">Learn to identify Ohio fish</p>
      </div>

      <Card className="max-w-sm w-full">
        <div className="text-center">
          <div className="w-16 h-16 bg-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Smartphone size={32} className="text-blue" />
          </div>
          
          <h2 className="text-xl font-bold text-text mb-2">Install to Continue</h2>
          <p className="text-text/70 text-sm mb-6">
            FishID works best as an installed app. Add it to your home screen for offline access and the full experience.
          </p>

          {isIOS ? (
            <div className="bg-panel-2 rounded-xl p-4 text-left">
              <p className="text-sm text-text/80 mb-3 font-medium">To install on iOS:</p>
              <ol className="space-y-3 text-sm text-text/70">
                <li className="flex items-start gap-3">
                  <span className="bg-blue/20 text-blue font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs">1</span>
                  <span>Tap the <Share size={16} className="inline mx-1 text-blue" /> share button in Safari</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-blue/20 text-blue font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs">2</span>
                  <span>Scroll down and tap <strong>"Add to Home Screen"</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-blue/20 text-blue font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs">3</span>
                  <span>Tap <strong>"Add"</strong> in the top right</span>
                </li>
              </ol>
            </div>
          ) : isInstallable ? (
            <button
              onClick={promptInstall}
              className="w-full bg-blue hover:bg-blue/80 text-white font-bold py-4 px-6 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <Download size={20} />
              Install FishID
            </button>
          ) : (
            <div className="bg-panel-2 rounded-xl p-4 text-left">
              <p className="text-sm text-text/80 mb-3 font-medium">To install:</p>
              <ol className="space-y-3 text-sm text-text/70">
                <li className="flex items-start gap-3">
                  <span className="bg-blue/20 text-blue font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs">1</span>
                  <span>Open your browser menu (⋮ or ⋯)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-blue/20 text-blue font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs">2</span>
                  <span>Tap <strong>"Add to Home Screen"</strong> or <strong>"Install App"</strong></span>
                </li>
              </ol>
            </div>
          )}
        </div>
      </Card>

      <p className="text-text/40 text-xs mt-8 text-center">
        Once installed, open FishID from your home screen
      </p>
    </div>
  );
}
