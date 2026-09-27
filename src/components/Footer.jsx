import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 px-4 text-center relative z-10 border-t border-pink-100/60 mt-12 bg-white/30 backdrop-blur-xs">
      <div className="max-w-md mx-auto flex flex-col items-center">
        <div className="flex items-center gap-1.5 text-pink-400 mb-2">
          <Heart className="w-4 h-4 fill-pink-400" />
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          <Heart className="w-4 h-4 fill-pink-400" />
        </div>
        <p className="font-handwriting text-2xl text-stone-600 mb-1">
          Made with all my love, forever & always
        </p>
        <p className="text-xs text-stone-400 uppercase tracking-widest font-light">
          A tiny digital love letter • Just for you
        </p>
      </div>
    </footer>
  );
}
