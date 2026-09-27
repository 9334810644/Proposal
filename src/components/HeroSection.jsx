import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, ChevronDown } from 'lucide-react';
import { romanticAudio } from '../utils/audio';

export default function HeroSection({ onOpenHeart }) {
  const handleClick = () => {
    romanticAudio.playSparkleChime();
    onOpenHeart();
  };

  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center relative px-4 py-16 sm:py-24 text-center z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-2xl mx-auto flex flex-col items-center"
      >
        {/* Subtle romantic badge */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="glass-pill px-4 py-1.5 rounded-full flex items-center gap-2 mb-6 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-pink-400" />
          <span className="text-xs uppercase tracking-widest text-pink-500 font-semibold">
            A little love letter
          </span>
          <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.9 }}
          className="font-romantic text-6xl sm:text-7xl md:text-8xl text-pink-500 drop-shadow-sm mb-4 leading-tight"
        >
          Hey You... 💗
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg sm:text-2xl text-stone-600 font-light max-w-lg mb-8 leading-relaxed"
        >
          I have something really special to tell you...
        </motion.p>

        {/* Cute Baby Illustration sitting among flowers */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1, type: "spring", stiffness: 80 }}
          className="relative mb-10 group"
        >
          {/* Subtle glowing halo behind image */}
          <div className="absolute -inset-4 bg-gradient-to-r from-pink-200 via-rose-200 to-purple-200 rounded-full blur-xl opacity-60 group-hover:opacity-85 transition duration-1000 -z-10 animate-pulse-glow" />

          {/* Picture frame */}
          <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full p-2.5 bg-white/80 shadow-pastel-card backdrop-blur-md border border-white/90">
            <img
              src="/images/hero-baby.jpg"
              alt="Cute baby sitting among flowers"
              className="w-full h-full object-cover rounded-full shadow-inner transform transition-transform duration-700 group-hover:scale-105"
              loading="eager"
            />
          </div>

          {/* Floating decorative elements */}
          <motion.div
            animate={{ y: [0, -8, 0], rotate: [0, 8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-2 -right-2 bg-white/90 p-3 rounded-full shadow-pastel-soft border border-white/80"
          >
            <span className="text-2xl">🌸</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0], rotate: [0, -8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -top-2 -left-2 bg-white/90 p-3 rounded-full shadow-pastel-soft border border-white/80"
          >
            <span className="text-2xl">🌼</span>
          </motion.div>
        </motion.div>

        {/* Large rounded action button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.button
            onClick={handleClick}
            whileHover={{ scale: 1.05, boxShadow: "0 20px 35px -8px rgba(244, 114, 182, 0.45)" }}
            whileTap={{ scale: 0.96 }}
            className="relative px-8 py-4 sm:px-10 sm:py-4.5 rounded-full text-lg sm:text-xl font-medium tracking-wide text-white bg-gradient-to-r from-pink-400 via-rose-400 to-pink-500 shadow-pastel-button border border-white/40 flex items-center gap-3 transition-all cursor-pointer group"
          >
            <span className="font-handwriting text-2xl sm:text-3xl font-semibold">
              Open My Heart 💌
            </span>
            <ChevronDown className="w-5 h-5 text-white/90 animate-bounce group-hover:translate-y-1 transition-transform" />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Down indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 flex flex-col items-center gap-1 cursor-pointer"
        onClick={handleClick}
      >
        <span className="text-xs uppercase tracking-widest text-stone-400">Scroll to read</span>
        <ChevronDown className="w-4 h-4 text-stone-400 animate-bounce" />
      </motion.div>
    </section>
  );
}
