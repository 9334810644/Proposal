import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

export default function LoadingScreen({ onLoaded }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onLoaded, 400);
          return 100;
        }
        return prev + 4;
      });
    }, 45);

    return () => clearInterval(timer);
  }, [onLoaded]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-pastel-blushLight via-pastel-cream to-pastel-lavenderLight px-4"
    >
      <div className="relative flex flex-col items-center">
        {/* Cute floating sparkles */}
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute -top-10 -right-8 text-pastel-blushDark/60"
        >
          <Sparkles className="w-6 h-6" />
        </motion.div>

        {/* Center pulsing heart envelope */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            y: [0, -6, 0]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-24 h-24 rounded-full bg-white/80 shadow-pastel-card border border-white flex items-center justify-center relative mb-6"
        >
          <Heart className="w-12 h-12 text-pink-400 fill-pink-400 drop-shadow-sm animate-heartbeat-gentle" />
          <motion.div
            animate={{ scale: [1, 1.4, 1], opacity: [0.7, 0, 0.7] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
            className="absolute inset-0 rounded-full border-2 border-pink-300 pointer-events-none"
          />
        </motion.div>

        {/* Romantic handwriting greeting */}
        <h2 className="font-handwriting text-3xl sm:text-4xl text-stone-700 tracking-wide mb-2">
          Opening a little piece of my heart...
        </h2>
        <p className="text-xs sm:text-sm text-stone-500 font-light mb-6 tracking-wider uppercase">
          Just for you 💗
        </p>

        {/* Progress pill */}
        <div className="w-52 h-2.5 bg-pink-100/80 rounded-full overflow-hidden p-0.5 border border-white shadow-inner">
          <motion.div
            className="h-full bg-gradient-to-r from-pink-300 via-rose-300 to-purple-300 rounded-full"
            style={{ width: `${progress}%` }}
            transition={{ ease: "easeOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
}
