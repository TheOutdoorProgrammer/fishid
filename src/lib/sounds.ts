/**
 * Sound system using Web Audio API
 */

type BeepType = 'ok' | 'warn' | 'bad';

/**
 * Play a beep sound using Web Audio API
 * @param type - Type of beep: 'ok' (740Hz), 'warn' (320Hz), or 'bad' (180Hz)
 */
export function beep(type: BeepType = 'ok'): void {
  try {
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.value = type === 'ok' ? 740 : type === 'warn' ? 320 : 180;
    gain.gain.value = 0.07;

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    setTimeout(() => {
      osc.stop();
      ctx.close();
    }, 90);
  } catch (e) {
    // Silently fail if Web Audio API is not available
  }
}
