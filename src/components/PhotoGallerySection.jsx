import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, X, Camera } from 'lucide-react';
import { romanticAudio } from '../utils/audio';

const boyfriendPhotos = [
  {
    id: 1,
    src: "/images/bf-pic-1.jpg",
    title: "Baby You 🍼",
    caption: "The cutest little kid with the biggest heart in the world. Who knew this little boy would grow up to be my entire world? 🥹🌸",
    tag: "Childhood Memory",
    rotate: "-rotate-2",
  },
  {
    id: 2,
    src: "/images/bf-pic-2.jpg",
    title: "My Handsome Boy 😎",
    caption: "Looking effortlessly cool as always. Every time you look at me, you still give me butterflies like day one. 💗",
    tag: "Cool & Charming",
    rotate: "rotate-2",
  },
  {
    id: 3,
    src: "/images/bf-pic-3.jpg",
    title: "My Favorite Person 🎧",
    caption: "My safe place, my comfort smile, and the one whose notifications always make my day bright. ✨",
    tag: "Sweet Moments",
    rotate: "-rotate-1",
  },
  {
    id: 4,
    src: "/images/bf-pic-4.jpg",
    title: "My Forever Boy 💫",
    caption: "Standing tall, handsome, and kind. So proud of you and so infinitely grateful that you are mine. ❤️",
    tag: "Forever Yours",
    rotate: "rotate-3",
  },
];

export default function PhotoGallerySection() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handlePhotoClick = (photo) => {
    romanticAudio.playSparkleChime();
    setSelectedPhoto(photo);
  };

  return (
    <section id="photo-gallery" className="py-20 sm:py-28 px-4 sm:px-6 max-w-6xl mx-auto relative z-10">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          className="inline-flex items-center gap-2 glass-pill px-4 py-1.5 rounded-full mb-4 shadow-sm"
        >
          <Camera className="w-3.5 h-3.5 text-pink-400" />
          <span className="text-xs uppercase tracking-widest text-pink-500 font-semibold">
            My Favorite Views
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
          Just Look At You... 🥰
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-stone-500 text-sm sm:text-base font-light"
        >
          From the cutest little boy to the wonderful man who holds my whole heart.
        </motion.p>
      </div>

      {/* Polaroid Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {boyfriendPhotos.map((photo, idx) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            whileHover={{ scale: 1.04, rotate: 0, y: -6 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => handlePhotoClick(photo)}
            className={`bg-white p-4 pb-6 rounded-2xl shadow-pastel-card hover:shadow-pastel-glow transition-all duration-300 cursor-pointer transform ${photo.rotate} relative border border-pink-100 flex flex-col justify-between`}
          >
            {/* Washi tape sticker at top */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-pink-200/70 backdrop-blur-xs rounded-sm shadow-xs -rotate-1 border border-white/60 pointer-events-none" />

            {/* Photo frame */}
            <div className="w-full aspect-[4/5] rounded-xl overflow-hidden bg-stone-100 mb-4 shadow-inner relative group">
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="glass-pill px-3 py-1 rounded-full text-xs text-white font-medium shadow-sm">
                  Click to view 💗
                </span>
              </div>
            </div>

            {/* Handwritten note caption */}
            <div className="text-center px-1">
              <span className="text-[10px] uppercase tracking-wider text-pink-400 font-semibold block mb-1">
                {photo.tag}
              </span>
              <h3 className="font-romantic text-2xl sm:text-3xl text-stone-800 font-bold mb-1">
                {photo.title}
              </h3>
              <p className="font-handwriting text-base sm:text-lg text-stone-600 line-clamp-2">
                "{photo.caption}"
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card bg-white p-5 sm:p-7 rounded-3xl max-w-lg w-full shadow-2xl relative border-2 border-pink-100 cursor-default"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-pink-50 hover:bg-pink-100 text-stone-500 hover:text-stone-800 flex items-center justify-center transition-colors shadow-sm"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Photo Display */}
              <div className="w-full max-h-[60vh] rounded-2xl overflow-hidden bg-stone-100 mb-5 shadow-inner">
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.title}
                  className="w-full h-full max-h-[60vh] object-contain mx-auto"
                />
              </div>

              {/* Details */}
              <div className="text-center">
                <div className="inline-flex items-center gap-1.5 text-pink-400 mb-2">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <span className="text-xs uppercase tracking-widest font-semibold">{selectedPhoto.tag}</span>
                  <Heart className="w-4 h-4 fill-pink-400 text-pink-400" />
                </div>
                <h3 className="font-romantic text-3xl sm:text-4xl text-pink-600 font-bold mb-2">
                  {selectedPhoto.title}
                </h3>
                <p className="font-handwriting text-xl sm:text-2xl text-stone-700 leading-relaxed max-w-md mx-auto">
                  {selectedPhoto.caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
