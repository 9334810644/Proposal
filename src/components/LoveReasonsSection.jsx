import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Smile, Laugh, Shield, Star, Music, Coffee, Flame } from 'lucide-react';
import { romanticAudio } from '../utils/audio';

const loveReasons = [
  {
    id: 1,
    title: "Your Smile 😊",
    short: "The purest sight in the world",
    detail: "The way your eyes crinkle when you're genuinely happy makes my whole world stop.",
    color: "from-pink-100 to-rose-50 text-rose-500",
    border: "border-pink-200/60",
    icon: Smile,
  },
  {
    id: 2,
    title: "Your Kind Heart 💗",
    short: "Gentle, thoughtful, and caring",
    detail: "How deeply you care about the people around you and how soft you are with my emotions.",
    color: "from-rose-100 to-pink-50 text-pink-500",
    border: "border-rose-200/60",
    icon: Heart,
  },
  {
    id: 3,
    title: "The Way You Make Me Laugh 😂",
    short: "Silly jokes & pure joy",
    detail: "Even on days when I feel down, you always know the exact silly face or words to make me giggle.",
    color: "from-amber-100 to-orange-50 text-amber-500",
    border: "border-amber-200/60",
    icon: Laugh,
  },
  {
    id: 4,
    title: "Your Hugs 🫂",
    short: "My favorite refuge",
    detail: "Wrapped in your arms is the only place on earth where everything feels completely okay.",
    color: "from-purple-100 to-lavender-50 text-purple-500",
    border: "border-purple-200/60",
    icon: Shield,
  },
  {
    id: 5,
    title: "Your Calming Voice 🎧",
    short: "My favorite soundtrack",
    detail: "Listening to you talk about your day is better than any bedtime lullaby or sweet melody.",
    color: "from-sky-100 to-blue-50 text-sky-500",
    border: "border-sky-200/60",
    icon: Music,
  },
  {
    id: 6,
    title: "Simply... YOU ✨",
    short: "Everything that you are",
    detail: "Every little habit, your messy morning hair, your drive, and the wonderful soul you are.",
    color: "from-pink-100 via-purple-100 to-pink-50 text-pink-600",
    border: "border-pink-300/80",
    icon: Star,
  }
];

export default function LoveReasonsSection() {
  const [activeReason, setActiveReason] = useState(null);

  const handleCardClick = (id) => {
    romanticAudio.playSparkleChime();
    setActiveReason(activeReason === id ? null : id);
  };

  return (
    <section id="things-i-love" className="py-20 sm:py-28 px-4 sm:px-6 max-w-5xl mx-auto relative z-10">
      {/* Header */}
      <div className="text-center max-w-xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          className="inline-flex items-center gap-2 glass-pill px-4 py-1.5 rounded-full mb-4 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-pink-400" />
          <span className="text-xs uppercase tracking-widest text-pink-500 font-semibold">
            Little Treasures
          </span>
          <Heart className="w-3.5 h-3.5 text-rose-400" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="font-romantic text-4xl sm:text-5xl md:text-6xl text-pink-600 mb-3"
        >
          Things I Love About You
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-stone-500 text-sm sm:text-base font-light"
        >
          There are a million reasons, but here are a few close to my heart (tap to read ❤️)
        </motion.p>
      </div>

      {/* Grid of small cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {loveReasons.map((item, idx) => {
          const Icon = item.icon;
          const isSelected = activeReason === item.id;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.5,
                delay: idx * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ scale: 1.03, y: -4 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleCardClick(item.id)}
              className={`glass-card p-6 rounded-3xl cursor-pointer transition-all duration-300 border ${item.border} ${
                isSelected
                  ? 'ring-2 ring-pink-400 shadow-pastel-glow bg-white/90'
                  : 'hover:shadow-pastel-soft'
              } flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-sm`}>
                    <Icon className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <motion.div
                    animate={isSelected ? { scale: [1, 1.3, 1], rotate: [0, 15, -15, 0] } : {}}
                    transition={{ duration: 0.6 }}
                  >
                    <Heart className={`w-5 h-5 ${isSelected ? 'fill-pink-500 text-pink-500' : 'text-stone-300'}`} />
                  </motion.div>
                </div>

                <h3 className="font-handwriting text-2xl sm:text-3xl text-stone-800 font-bold mb-1">
                  {item.title}
                </h3>
                <p className="text-xs uppercase tracking-wider text-pink-400 font-medium mb-3">
                  {item.short}
                </p>
                <p className="text-stone-600 text-sm font-light leading-relaxed">
                  {item.detail}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-pink-50 flex items-center justify-between text-xs text-stone-400 font-light">
                <span>{isSelected ? "Tap to close 💗" : "Tap to feel 💌"}</span>
                <Sparkles className="w-3.5 h-3.5 text-pink-300" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
