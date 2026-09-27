import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, RotateCcw, Stars, CheckCircle2 } from 'lucide-react';
import { romanticAudio } from '../utils/audio';

export default function ProposalSection({ onReplay, onReadLetter }) {
  const [accepted, setAccepted] = useState(false);
  const [acceptedText, setAcceptedText] = useState("");

  const triggerHeartConfetti = () => {
    // Canvas confetti burst with heart shapes and pastel colors
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      colors: ['#F472B6', '#FB7185', '#F43F5E', '#C084FC', '#FED7AA', '#FFF'],
      disableForReducedMotion: false,
    };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
      shapes: ['circle', 'heart'],
    });
    fire(0.2, {
      spread: 60,
      shapes: ['circle', 'star'],
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 1.2,
      shapes: ['heart'],
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.4,
      shapes: ['heart', 'circle'],
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  };

  const handleProposalAnswer = (responseString) => {
    setAcceptedText(responseString);
    setAccepted(true);
    romanticAudio.playCelebrationChime();
    triggerHeartConfetti();

    // Secondary delayed confetti bursts for prolonged joy
    setTimeout(triggerHeartConfetti, 400);
    setTimeout(triggerHeartConfetti, 900);
  };

  const handleReplayClick = () => {
    romanticAudio.playSparkleChime();
    setAccepted(false);
    onReplay();
  };

  return (
    <section
      id="proposal-screen"
      className="min-h-screen py-20 sm:py-28 px-4 flex flex-col items-center justify-center relative z-10 text-center"
    >
      <div className="max-w-3xl w-full mx-auto relative">
        <AnimatePresence mode="wait">
          {!accepted ? (
            /* Proposal Question State */
            <motion.div
              key="question-box"
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="glass-card p-8 sm:p-14 rounded-3xl relative shadow-pastel-card border border-white/90 overflow-hidden"
            >
              {/* Decorative top badge */}
              <div className="inline-flex items-center gap-2 glass-pill px-4 py-1.5 rounded-full mb-6 shadow-sm">
                <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" />
                <span className="text-xs uppercase tracking-widest text-pink-600 font-semibold">
                  The Biggest Question
                </span>
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              </div>

              {/* Baby proposal illustration with flower wreath */}
              <div className="relative mx-auto w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 mb-8 group">
                <div className="absolute -inset-3 bg-gradient-to-r from-pink-300 via-rose-300 to-purple-300 rounded-full blur-xl opacity-70 group-hover:opacity-90 animate-pulse-glow -z-10" />
                <div className="w-full h-full rounded-full p-2 bg-white/80 shadow-pastel-card backdrop-blur-md border border-white/95 overflow-hidden">
                  <img
                    src="/images/proposal-center.jpg"
                    alt="Cute baby holding proposal ring box surrounded by flower wreath"
                    className="w-full h-full object-cover rounded-full transform transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Floating cute heart badges */}
                <motion.div
                  animate={{ y: [0, -8, 0], rotate: [0, 10, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-2 -left-2 bg-white/95 p-2.5 rounded-full shadow-md border border-pink-100 text-pink-500"
                >
                  <Heart className="w-6 h-6 fill-pink-500" />
                </motion.div>

                <motion.div
                  animate={{ y: [0, 8, 0], rotate: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                  className="absolute -top-1 -right-1 bg-white/95 p-2.5 rounded-full shadow-md border border-pink-100 text-amber-400"
                >
                  <Stars className="w-6 h-6 fill-amber-400" />
                </motion.div>
              </div>

              {/* Large Proposal Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="font-romantic text-5xl sm:text-6xl md:text-7xl text-pink-600 font-bold mb-4 drop-shadow-sm"
              >
                Will You Be Mine? ❤️
              </motion.h2>

              {/* Romantic quote */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-1 mb-10 text-stone-600 font-light text-lg sm:text-2xl"
              >
                <p>I don't need a perfect love story.</p>
                <p className="font-handwriting text-2xl sm:text-3xl text-pink-500 font-semibold">
                  I just want ours.
                </p>
              </motion.div>

              {/* Two Proposal Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
              >
                {/* Button 1: YES! 💕 */}
                <motion.button
                  onClick={() => handleProposalAnswer("YES! 💕")}
                  whileHover={{ scale: 1.07, boxShadow: "0 20px 40px -10px rgba(244, 114, 182, 0.6)" }}
                  whileTap={{ scale: 0.94 }}
                  className="w-full sm:w-auto px-8 py-4 sm:px-9 sm:py-4.5 rounded-full text-white font-medium bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 shadow-pastel-button border border-white/50 cursor-pointer flex items-center justify-center gap-2 group"
                >
                  <span className="font-handwriting text-2xl sm:text-3xl font-bold tracking-wide">
                    YES! 💕
                  </span>
                  <Heart className="w-5 h-5 fill-white group-hover:scale-125 transition-transform" />
                </motion.button>

                {/* Button 2: Absolutely YES! 🥹 */}
                <motion.button
                  onClick={() => handleProposalAnswer("Absolutely YES! 🥹")}
                  whileHover={{ scale: 1.07, boxShadow: "0 20px 40px -10px rgba(192, 132, 252, 0.6)" }}
                  whileTap={{ scale: 0.94 }}
                  className="w-full sm:w-auto px-8 py-4 sm:px-9 sm:py-4.5 rounded-full text-white font-medium bg-gradient-to-r from-rose-400 via-purple-400 to-pink-500 shadow-pastel-button border border-white/50 cursor-pointer flex items-center justify-center gap-2 group"
                >
                  <span className="font-handwriting text-2xl sm:text-3xl font-bold tracking-wide">
                    Absolutely YES! 🥹
                  </span>
                  <Sparkles className="w-5 h-5 fill-white group-hover:rotate-45 transition-transform" />
                </motion.button>
              </motion.div>
            </motion.div>
          ) : (
            /* Celebration State */
            <motion.div
              key="celebration-box"
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.35 }}
              className="glass-card p-8 sm:p-14 rounded-3xl relative shadow-pastel-glow border-2 border-pink-200/90 overflow-hidden"
            >
              {/* Confetti / celebration halo */}
              <div className="absolute -inset-10 bg-gradient-to-r from-pink-200 via-purple-200 to-rose-200 blur-2xl opacity-60 animate-pulse-glow -z-10" />

              {/* Celebration illustration: Cute baby couple hugging */}
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: [0.9, 1.03, 1] }}
                transition={{ duration: 0.8 }}
                className="relative mx-auto w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 mb-6"
              >
                <div className="w-full h-full rounded-full p-2 bg-white shadow-pastel-card border-2 border-pink-200 overflow-hidden">
                  <img
                    src="/images/celebration-yay.jpg"
                    alt="Baby couple happily hugging in celebration"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                {/* Floating celebratory emojis */}
                <motion.div
                  animate={{ y: [0, -12, 0], rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-2 left-4 text-3xl"
                >
                  🎉
                </motion.div>
                <motion.div
                  animate={{ y: [0, -15, 0], scale: [1, 1.2, 1] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                  className="absolute -bottom-2 right-4 text-3xl"
                >
                  💖
                </motion.div>
              </motion.div>

              {/* Celebration Text from Prompt */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-6"
              >
                <h2 className="font-romantic text-5xl sm:text-6xl md:text-7xl text-pink-600 font-bold mb-3 drop-shadow-sm">
                  YAYYYY! 💗
                </h2>
                <p className="font-romantic text-3xl sm:text-4xl md:text-5xl text-rose-500 font-semibold mb-4">
                  Then it's officially us. 🥹❤️
                </p>
                <p className="text-stone-600 font-light text-base sm:text-lg max-w-lg mx-auto leading-relaxed">
                  Thank you for saying <span className="font-bold text-pink-500">{acceptedText}</span>! You have no idea how much happiness you just brought into my life. I promise to cherish you, laugh with you, and love you endlessly.
                </p>
              </motion.div>

              {/* Romantic vow card */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="glass-pill p-4 rounded-2xl max-w-md mx-auto mb-8 border border-pink-200/80 text-xs sm:text-sm text-stone-500 italic font-light"
              >
                "Together is my favorite place to be. Every day with you is my happiest adventure." 🌸
              </motion.div>

              {/* Replay & Read Letter Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap items-center justify-center gap-3"
              >
                {onReadLetter && (
                  <motion.button
                    onClick={() => {
                      romanticAudio.playSparkleChime();
                      onReadLetter();
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 rounded-full text-pink-600 bg-pink-50 hover:bg-pink-100/80 shadow-pastel-soft border border-pink-200 flex items-center gap-2 cursor-pointer text-sm font-medium transition-all"
                  >
                    <span>Read My Letter Again 💌</span>
                  </motion.button>
                )}

                <motion.button
                  onClick={handleReplayClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 rounded-full text-stone-600 bg-white/90 hover:bg-white shadow-pastel-soft hover:shadow-md border border-stone-200 flex items-center gap-2 cursor-pointer text-sm font-medium transition-all"
                >
                  <RotateCcw className="w-4 h-4 text-pink-500" />
                  <span>Replay Our Story ↻</span>
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
