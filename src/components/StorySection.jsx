import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

const storyCards = [
  {
    id: 1,
    title: "From random conversations...",
    subtitle: "Late nights & silly smiles",
    description: "What started as casual chats turned into conversations I never wanted to end. Every word from you slowly became my happiest moment.",
    image: "/images/story-conversations.jpg",
    accent: "bg-blue-50/70 border-sky-100",
    badge: "Chapter 01",
    tag: "💬 The Beginning",
  },
  {
    id: 2,
    title: "To my favorite notifications...",
    subtitle: "Butterflies every single time",
    description: "Out of everyone in the world, your name on my screen is the one that instantly brightens my whole day and makes me smile at nothing.",
    image: "/images/story-notifications.jpg",
    accent: "bg-pink-50/70 border-pink-100",
    badge: "Chapter 02",
    tag: "💌 The Spark",
  },
  {
    id: 3,
    title: "To someone I can't imagine my days without.",
    subtitle: "My partner, my favorite place",
    description: "Doing life with you just feels right. You've become my comfort person, my endless laugh, and the heart of all my happiest memories.",
    image: "/images/story-together.jpg",
    accent: "bg-purple-50/70 border-purple-100",
    badge: "Chapter 03",
    tag: "✨ The Connection",
  },
  {
    id: 4,
    title: "To my sweetest dream come true...",
    subtitle: "Safe, warm, and forever gentle",
    description: "Falling for you was so effortless. In your warmth, I found a home I never want to leave, and a love that feels like pure peace.",
    image: "/images/story-dreams.jpg",
    accent: "bg-amber-50/70 border-amber-100",
    badge: "Chapter 04",
    tag: "🌙 The Forever",
  }
];

export default function StorySection() {
  return (
    <section id="our-story" className="py-20 sm:py-28 px-4 sm:px-6 max-w-6xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 glass-pill px-4 py-1.5 rounded-full mb-4 shadow-sm"
        >
          <Heart className="w-3.5 h-3.5 text-pink-400 fill-pink-400" />
          <span className="text-xs uppercase tracking-widest text-pink-500 font-semibold">
            Our Journey
          </span>
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-romantic text-4xl sm:text-5xl md:text-6xl text-pink-600 mb-4 leading-tight"
        >
          Somehow, You Became My Favorite Person ❤️
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-stone-500 text-base sm:text-lg font-light leading-relaxed"
        >
          Looking back at the little chapters that led my heart straight to you.
        </motion.p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
        {storyCards.map((card, idx) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: idx * 0.15 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className={`glass-card p-6 sm:p-7 rounded-3xl flex flex-col sm:flex-row items-center gap-6 shadow-pastel-card hover:shadow-pastel-glow transition-all duration-300 ${card.accent}`}
          >
            {/* Cute Illustration with gentle float */}
            <motion.div
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 3 + idx * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative shrink-0"
            >
              <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-2xl overflow-hidden p-1.5 bg-white shadow-sm border border-white/80">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover rounded-xl transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <span className="absolute -top-2 -right-2 text-xs bg-white/95 text-pink-500 font-semibold px-2.5 py-0.5 rounded-full shadow-sm border border-pink-100">
                {card.badge}
              </span>
            </motion.div>

            {/* Card Content */}
            <div className="flex flex-col text-center sm:text-left justify-center">
              <span className="text-xs uppercase tracking-wider text-stone-400 font-medium mb-1">
                {card.tag}
              </span>
              <h3 className="font-romantic text-2xl sm:text-3xl text-stone-800 font-bold mb-1.5 leading-snug">
                {card.title}
              </h3>
              <p className="text-xs sm:text-sm text-pink-500 font-medium mb-2 italic font-handwriting text-base">
                "{card.subtitle}"
              </p>
              <p className="text-stone-600 text-sm leading-relaxed font-light">
                {card.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
