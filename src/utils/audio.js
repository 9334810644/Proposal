// Web Audio API Procedural Romantic Music Box & Sound Effects
class RomanticAudio {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.timer = null;
    this.currentStep = 0;
    this.volume = 0.5;
    this.gainNode = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
      this.gainNode = this.ctx.createGain();
      this.gainNode.gain.setValueAtTime(this.volume, this.ctx.currentTime);
      this.gainNode.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  setVolume(vol) {
    this.volume = Math.max(0, Math.min(1, vol));
    if (this.gainNode && this.ctx) {
      this.gainNode.gain.setValueAtTime(this.volume, this.ctx.currentTime);
    }
  }

  // Play a soft, bell-like / music-box note
  playNote(frequency, startTime, duration = 1.2, noteVolume = 0.35) {
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const noteGain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    // Soft warm music-box chime timbre
    osc.type = 'sine';
    osc.frequency.setValueAtTime(frequency, startTime);

    // Subtle harmonic overtone (octave + fifth)
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(frequency * 2, startTime);

    // Warm low-pass filter to make it cozy and soothing
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1400, startTime);
    filter.Q.setValueAtTime(1.5, startTime);

    // Gentle musical envelope: crisp chime attack, long warm decay
    const attack = 0.02;
    const decay = duration * 0.98;

    noteGain.gain.setValueAtTime(0.0001, startTime);
    noteGain.gain.exponentialRampToValueAtTime(noteVolume, startTime + attack);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, startTime + attack + decay);

    osc.connect(filter);
    osc2.connect(filter);
    filter.connect(noteGain);
    noteGain.connect(this.gainNode);

    osc.start(startTime);
    osc2.start(startTime);
    osc.stop(startTime + attack + decay + 0.1);
    osc2.stop(startTime + attack + decay + 0.1);
  }

  // Romantic music progression: Cmaj9 -> Am9 -> Fmaj7 -> Gsus4 / G
  startMusic() {
    this.init();
    if (this.isPlaying) return;
    this.isPlaying = true;

    // Melody and chords frequencies (Hz)
    // C4=261.63, D4=293.66, E4=329.63, G4=392.00, A4=440.00, B4=493.88
    // C5=523.25, D5=587.33, E5=659.25, G5=783.99, A5=880.00
    const sequence = [
      // Bar 1: Cmaj9 arpeggio (C, G, E, B, D)
      { note: 261.63, dur: 1.8, vol: 0.3 }, // C4 bass
      { note: 392.00, dur: 1.4, vol: 0.2 }, // G4
      { note: 523.25, dur: 1.2, vol: 0.25 }, // C5
      { note: 659.25, dur: 1.6, vol: 0.25 }, // E5
      { note: 587.33, dur: 1.4, vol: 0.22 }, // D5
      { note: 493.88, dur: 1.2, vol: 0.2 }, // B4

      // Bar 2: Am9 arpeggio (A, E, C, G, B)
      { note: 220.00, dur: 1.8, vol: 0.3 }, // A3 bass
      { note: 329.63, dur: 1.4, vol: 0.2 }, // E4
      { note: 440.00, dur: 1.2, vol: 0.25 }, // A4
      { note: 523.25, dur: 1.6, vol: 0.25 }, // C5
      { note: 659.25, dur: 1.4, vol: 0.22 }, // E5
      { note: 493.88, dur: 1.2, vol: 0.2 }, // B4

      // Bar 3: Fmaj7 arpeggio (F, C, A, E, G)
      { note: 174.61, dur: 1.8, vol: 0.3 }, // F3 bass
      { note: 261.63, dur: 1.4, vol: 0.2 }, // C4
      { note: 349.23, dur: 1.2, vol: 0.25 }, // F4
      { note: 440.00, dur: 1.6, vol: 0.25 }, // A4
      { note: 523.25, dur: 1.4, vol: 0.22 }, // C5
      { note: 659.25, dur: 1.2, vol: 0.2 }, // E5

      // Bar 4: Gsus4 to G arpeggio (G, D, G, C, B)
      { note: 196.00, dur: 1.8, vol: 0.3 }, // G3 bass
      { note: 293.66, dur: 1.4, vol: 0.2 }, // D4
      { note: 392.00, dur: 1.2, vol: 0.25 }, // G4
      { note: 523.25, dur: 1.6, vol: 0.22 }, // C5 (sus4)
      { note: 493.88, dur: 1.8, vol: 0.25 }, // B4 (resolve)
      { note: 392.00, dur: 1.2, vol: 0.2 }, // G4
    ];

    const noteInterval = 420; // ms per step (gentle relaxed lullaby tempo)

    const tick = () => {
      if (!this.isPlaying) return;
      const current = sequence[this.currentStep % sequence.length];
      const now = this.ctx.currentTime;
      this.playNote(current.note, now, current.dur, current.vol);

      // Occasional sweet high chime decoration
      if (this.currentStep % 6 === 2) {
        this.playNote(current.note * 2, now + 0.1, 0.9, 0.12);
      }

      this.currentStep++;
      this.timer = setTimeout(tick, noteInterval);
    };

    tick();
  }

  stopMusic() {
    this.isPlaying = false;
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }

  toggleMusic() {
    if (this.isPlaying) {
      this.stopMusic();
      return false;
    } else {
      this.startMusic();
      return true;
    }
  }

  // Sweet chime for button clicks
  playSparkleChime() {
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const chords = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    chords.forEach((freq, idx) => {
      this.playNote(freq, now + idx * 0.07, 0.8, 0.25);
    });
  }

  // Glorious proposal celebration fanfare chime
  playCelebrationChime() {
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const notes = [
      { f: 523.25, d: 0.15 }, // C5
      { f: 659.25, d: 0.15 }, // E5
      { f: 783.99, d: 0.15 }, // G5
      { f: 1046.50, d: 0.4 }, // C6
      { f: 1318.51, d: 0.7 }, // E6
    ];
    let offset = 0;
    notes.forEach((item) => {
      this.playNote(item.f, now + offset, item.d * 2.5, 0.35);
      offset += item.d;
    });
  }
}

export const romanticAudio = new RomanticAudio();
