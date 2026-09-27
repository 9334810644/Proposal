import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { romanticAudio } from '../utils/audio';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showVolume, setShowVolume] = useState(false);
  const [volume, setVolume] = useState(0.5);

  const toggleMusic = () => {
    const active = romanticAudio.toggleMusic();
    setIsPlaying(active);
    if (active) {
      romanticAudio.playSparkleChime();
    }
  };

  const handleVolumeChange = (e) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    romanticAudio.setVolume(val);
  };

  return (
    <div className="fixed top-5 right-5 sm:top-6 sm:right-6 z-40 flex items-center gap-2">
      <AnimatePresence>
        {showVolume && isPlaying && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            className="glass-card px-3 py-1.5 rounded-full flex items-center gap-2 shadow-sm"
          >
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={handleVolumeChange}
              className="w-16 sm:w-20 accent-pink-400 h-1.5 bg-pink-100 rounded-lg cursor-pointer"
              title="Music Volume"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={toggleMusic}
        onMouseEnter={() => setShowVolume(true)}
        onMouseLeave={() => setShowVolume(false)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`glass-card px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full flex items-center gap-2.5 transition-all shadow-pastel-card ${
          isPlaying
            ? 'border-pink-300 bg-white/90 text-pink-500 shadow-pastel-glow'
            : 'text-stone-500 hover:text-stone-700'
        }`}
        title={isPlaying ? "Pause Romantic Melody" : "Play Romantic Melody"}
      >
        <div className="relative">
          {isPlaying ? (
            <div className="flex items-end gap-0.5 h-4 w-4 justify-center">
              <span className="w-1 bg-pink-400 rounded-full animate-bounce [animation-delay:0ms] h-3" />
              <span className="w-1 bg-pink-500 rounded-full animate-bounce [animation-delay:150ms] h-4" />
              <span className="w-1 bg-pink-300 rounded-full animate-bounce [animation-delay:300ms] h-2" />
            </div>
          ) : (
            <Music className="w-4 h-4 text-stone-400" />
          )}
        </div>

        <span className="text-xs sm:text-sm font-medium tracking-wide">
          {isPlaying ? (
            <span className="font-handwriting text-base text-pink-600">Romantic Melody 🎵</span>
          ) : (
            <span className="text-stone-500">Play Music 🎶</span>
          )}
        </span>
      </motion.button>
    </div>
  );
}
