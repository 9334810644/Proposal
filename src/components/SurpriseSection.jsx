import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, Send } from 'lucide-react';
import { romanticAudio } from '../utils/audio';

export default function SurpriseSection({ onTriggerSurprise }) {
  const [isSparkling, setIsSparkling] = useState(false);

  const handleClick = () => {
    setIsSparkling(true);
    romanticAudio.playSparkleChime();
    setTimeout(() => {
      onTriggerSurprise();
    }, 600);
  };

  return (
    <section id="the-surprise" className="py-24 sm:py-32 px-4 relative z-10 text-center overflow-hidden">
      {/* Calm glowing backdrop card */}
      <div className="max-w-2xl mx-auto glass-card p-10 sm:p-14 rounded-3xl relative shadow-pastel-card border border-white/80">
        {/* Floating animated decorative hearts inside the card */}
        <motion.div
          animate={{ y: [0, -10, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white px-4 py-1.5 rounded-full shadow-md border border-pink-100 flex items-center gap-1.5"
        >
          <Heart className="w-4 h-4 text-pink-400 fill-pink-400" />
          <span className="text-xs uppercase tracking-widest text-pink-500 font-semibold">
            Deep Breath
          </span>
          <Heart className="w-4 h-4 text-pink-400 fill-pink-400" />
        </motion.div>

        {/* Text 1 */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-stone-400 font-light text-base sm:text-lg uppercase tracking-widest mb-3"
        >
          Okay... enough hiding it.
        </motion.p>

        {/* Text 2 */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-romantic text-4xl sm:text-5xl md:text-6xl text-pink-600 font-bold mb-6 leading-tight"
        >
          There is something I've wanted to ask you...
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-stone-600 text-base sm:text-lg font-light max-w-md mx-auto mb-10 leading-relaxed"
        >
          My hands are trembling a little bit, but my heart has never been more certain.
        </motion.p>

        {/* Button: "One Last Thing 💌" */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative inline-block"
        >
          <motion.button
            onClick={handleClick}
            whileHover={{ scale: 1.06, boxShadow: "0 20px 35px -8px rgba(244, 114, 182, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 sm:px-10 sm:py-4.5 rounded-full text-lg sm:text-xl font-medium tracking-wide text-white bg-gradient-to-r from-pink-500 via-rose-400 to-purple-400 shadow-pastel-button border border-white/40 flex items-center gap-3 cursor-pointer group"
          >
            <span className="font-handwriting text-2xl sm:text-3xl font-bold">
              One Last Thing 💌
            </span>
            <Sparkles className="w-5 h-5 text-white/90 animate-spin [animation-duration:6s]" />
          </motion.button>

          {/* Burst particles when clicked */}
          <AnimatePresence>
            {isSparkling && (
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 pointer-events-none"
              >
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ x: 0, y: 0, scale: 0.5 }}
                    animate={{
                      x: (Math.random() - 0.5) * 200,
                      y: (Math.random() - 0.5) * 160 - 50,
                      scale: [0.5, 1.2, 0],
                      opacity: [1, 1, 0],
                    }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="absolute top-1/2 left-1/2 text-pink-400"
                  >
                    {i % 2 === 0 ? "💖" : "✨"}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
