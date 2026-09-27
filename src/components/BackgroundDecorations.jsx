import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

export default function BackgroundDecorations() {
  // Generate random static positions for background floating cute elements
  const floatingElements = useMemo(() => {
    const items = [
      { type: 'heart', color: 'text-pink-300/40', size: 24, x: '8%', y: '15%', delay: 0, dur: 7 },
      { type: 'heart', color: 'text-rose-300/35', size: 18, x: '92%', y: '25%', delay: 1.5, dur: 6.5 },
      { type: 'heart', color: 'text-pink-400/30', size: 22, x: '15%', y: '65%', delay: 0.8, dur: 8 },
      { type: 'heart', color: 'text-rose-300/40', size: 20, x: '85%', y: '75%', delay: 2.2, dur: 7.2 },
      { type: 'star', color: 'text-amber-300/45', size: 16, x: '25%', y: '10%', delay: 1, dur: 5 },
      { type: 'star', color: 'text-amber-300/40', size: 18, x: '78%', y: '12%', delay: 2.5, dur: 5.5 },
      { type: 'star', color: 'text-purple-300/40', size: 14, x: '6%', y: '45%', delay: 3, dur: 6 },
      { type: 'flower', color: 'text-pink-300/45', size: 26, x: '88%', y: '48%', delay: 1.2, dur: 8.5 },
      { type: 'flower', color: 'text-purple-300/40', size: 24, x: '18%', y: '88%', delay: 2.8, dur: 9 },
      { type: 'cloud', color: 'text-sky-200/50', size: 48, x: '4%', y: '30%', delay: 0.5, dur: 12 },
      { type: 'cloud', color: 'text-pink-100/60', size: 56, x: '80%', y: '90%', delay: 3.5, dur: 14 },
      { type: 'sparkle', color: 'text-pink-400/40', size: 14, x: '35%', y: '80%', delay: 0.2, dur: 4.8 },
      { type: 'sparkle', color: 'text-purple-400/40', size: 16, x: '68%', y: '60%', delay: 1.8, dur: 5.2 },
    ];
    return items;
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Gentle animated gradient aurora backdrop */}
      <div className="absolute inset-0 bg-gradient-to-tr from-pink-100/40 via-transparent to-purple-100/40 opacity-70 animate-pulse-glow" />

      {floatingElements.map((el, i) => (
        <motion.div
          key={i}
          className={`absolute ${el.color}`}
          style={{ left: el.x, top: el.y }}
          animate={{
            y: [0, -18, 0],
            x: [0, 8, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.06, 1],
          }}
          transition={{
            duration: el.dur,
            repeat: Infinity,
            delay: el.delay,
            ease: "easeInOut",
          }}
        >
          {el.type === 'heart' && (
            <svg width={el.size} height={el.size} viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          )}
          {el.type === 'star' && (
            <svg width={el.size} height={el.size} viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l2.4 7.4h7.6l-6.1 4.5 2.3 7.1-6.2-4.6-6.2 4.6 2.3-7.1-6.1-4.5h7.6z" />
            </svg>
          )}
          {el.type === 'flower' && (
            <svg width={el.size} height={el.size} viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 0-4-4zm0 8a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 0-4-4zm-8-4a4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 0-4-4 4 4 0 0 0-4 4zm16 0a4 4 0 0 0-4-4 4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4z" opacity="0.85"/>
            </svg>
          )}
          {el.type === 'cloud' && (
            <svg width={el.size} height={el.size * 0.65} viewBox="0 0 24 16" fill="currentColor">
              <path d="M19.35 6.04C18.67 2.59 15.64 0 12 0 9.11 0 6.6 1.64 5.35 4.04 2.34 4.36 0 6.91 0 10c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
            </svg>
          )}
          {el.type === 'sparkle' && (
            <svg width={el.size} height={el.size} viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
            </svg>
          )}
        </motion.div>
      ))}
    </div>
  );
}
