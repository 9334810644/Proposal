import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, Mail, MailOpen } from 'lucide-react';
import { romanticAudio } from '../utils/audio';

export default function LoveLetterSection() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleLetter = () => {
    romanticAudio.playSparkleChime();
    setIsOpen(!isOpen);
  };

  return (
    <section id="love-letter" className="py-20 sm:py-28 px-4 sm:px-6 max-w-4xl mx-auto relative z-10">
      {/* Header */}
      <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          className="inline-flex items-center gap-2 glass-pill px-4 py-1.5 rounded-full mb-4 shadow-sm"
        >
          <Mail className="w-3.5 h-3.5 text-pink-400" />
          <span className="text-xs uppercase tracking-widest text-pink-500 font-semibold">
            From My Heart To Yours
          </span>
          <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8 }}
          className="font-romantic text-4xl sm:text-5xl md:text-6xl text-pink-600 mb-3"
        >
          A Letter For You 💌
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-stone-500 text-sm sm:text-base font-light"
        >
          Words that I keep in my heart every single day.
        </motion.p>
      </div>

      {/* Love Letter Paper Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative max-w-2xl mx-auto"
      >
        {/* Soft glowing ambient aura */}
        <div className="absolute -inset-4 bg-gradient-to-r from-pink-200 via-rose-100 to-purple-200 rounded-3xl blur-2xl opacity-60 -z-10 animate-pulse-glow" />

        {/* The Parchment Paper Container */}
        <div className="relative bg-[#FFFDF9] rounded-3xl p-7 sm:p-12 shadow-pastel-card border-2 border-[#FCE7F3] overflow-hidden">
          {/* Subtle lined paper texture background */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, #F472B6 31px, #F472B6 32px)',
              backgroundPosition: '0 32px'
            }}
          />

          {/* Letter Postage Stamp & Wax Seal Decoration */}
          <div className="flex items-start justify-between border-b border-pink-100/80 pb-6 mb-8 relative">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full p-1 bg-pink-100/80 border-2 border-pink-300 shadow-sm overflow-hidden shrink-0">
                <img
                  src="/images/bf-pic-1.jpg"
                  alt="My sweet boy as a kid"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <p className="font-romantic text-2xl sm:text-3xl text-stone-800 leading-tight">
                  To: My Sweet Boy ❤️
                </p>
                <p className="text-xs uppercase tracking-wider text-pink-400 font-semibold mt-0.5">
                  The one who has my whole heart
                </p>
              </div>
            </div>

            {/* Vintage style stamp with his cool photo */}
            <div className="flex flex-col items-center justify-center w-14 h-18 sm:w-16 sm:h-20 border-2 border-dashed border-pink-300 rounded-lg p-1 bg-pink-50/70 rotate-3 shadow-xs shrink-0 overflow-hidden">
              <img
                src="/images/bf-pic-2.jpg"
                alt="My handsome boyfriend stamp"
                className="w-full h-11 object-cover rounded-sm mb-0.5"
              />
              <span className="text-[8px] sm:text-[9px] text-pink-500 font-bold tracking-tighter">FOREVER 💌</span>
            </div>
          </div>

          {/* Letter Content */}
          <div className="relative z-10 space-y-5 text-stone-700 font-normal leading-relaxed text-base sm:text-lg">
            {/* Salutation */}
            <p className="font-romantic text-3xl sm:text-4xl text-pink-600 font-bold mb-4">
              My sweet boy,
            </p>

            {/* Paragraph 1 */}
            <p className="font-light tracking-wide text-stone-700 leading-relaxed">
              I just wanted to tell you how much you mean to me. You make me happier than you probably realize, and even on my worst days you're one of the first people I think about.
            </p>

            {/* Paragraph 2 */}
            <p className="font-light tracking-wide text-stone-700 leading-relaxed bg-pink-50/40 p-3 rounded-2xl border border-pink-100/50">
              Thank you for always being there for me, listening to me, reassuring me when I overthink, and making me feel loved.
            </p>

            {/* Paragraph 3 */}
            <p className="font-light tracking-wide text-stone-700 leading-relaxed">
              Being with you has brought so much happiness into my life, and I honestly don't know what I'd do without you. You make me smile when I'm sad, laugh when I don't feel like it, and feel cared for in ways I can't even explain.
            </p>

            {/* Paragraph 4 */}
            <p className="font-light tracking-wide text-stone-700 leading-relaxed">
              I love how you always check on me when something feels off and how you never stop reminding me that you care. No matter what happens, I want you to know that I appreciate every little thing you do for me.
            </p>

            {/* Conclusion & Declaration */}
            <div className="pt-4 border-t border-pink-100/60 mt-6">
              <p className="font-handwriting text-2xl sm:text-3xl text-pink-600 font-bold leading-snug">
                I love you so much, and every day I'm grateful that you're my boyfriend. ❤️
              </p>
            </div>

            {/* Sign-off */}
            <div className="pt-4 flex flex-col items-end">
              <p className="font-romantic text-2xl sm:text-3xl text-stone-600">
                Forever yours,
              </p>
              <p className="font-handwriting text-2xl text-pink-500 font-semibold flex items-center gap-1.5 mt-0.5">
                The girl who loves you with all her heart 🌸
              </p>
            </div>
          </div>

          {/* Decorative wax seal at bottom center */}
          <div className="mt-8 pt-4 flex justify-center">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-rose-400 to-pink-600 flex items-center justify-center shadow-lg border-2 border-white/80 transform hover:scale-105 transition-transform cursor-pointer">
              <Heart className="w-7 h-7 text-white fill-white drop-shadow-xs" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
