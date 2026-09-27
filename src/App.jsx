import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import BackgroundDecorations from './components/BackgroundDecorations';
import MusicPlayer from './components/MusicPlayer';
import HeroSection from './components/HeroSection';
import StorySection from './components/StorySection';
import PhotoGallerySection from './components/PhotoGallerySection';
import LoveReasonsSection from './components/LoveReasonsSection';
import LoveLetterSection from './components/LoveLetterSection';
import SurpriseSection from './components/SurpriseSection';
import ProposalSection from './components/ProposalSection';
import Footer from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const scrollToStory = () => {
    const el = document.getElementById('our-story');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToProposal = () => {
    const el = document.getElementById('proposal-screen');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const scrollToLetter = () => {
    const el = document.getElementById('love-letter');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleReplay = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen text-stone-700 font-body selection:bg-pink-200 selection:text-stone-800">
      {/* Initial Loading Screen */}
      <AnimatePresence>
        {isLoading && <LoadingScreen onLoaded={() => setIsLoading(false)} />}
      </AnimatePresence>

      {/* Floating Animated Background Elements */}
      <BackgroundDecorations />

      {/* Persistent Romantic Music Player */}
      <MusicPlayer />

      {/* Main Content Sections */}
      <main className="relative z-10 w-full overflow-hidden">
        {/* Landing Hero Screen */}
        <HeroSection onOpenHeart={scrollToStory} />

        {/* Section 2: Our Little Story */}
        <StorySection />

        {/* Polaroid Photo Gallery of Her Boyfriend */}
        <PhotoGallerySection />

        {/* Section 3: Things I Love About You */}
        <LoveReasonsSection />

        {/* Her Heartfelt Love Letter to Him */}
        <LoveLetterSection />

        {/* Section 4: A Little Surprise Transition */}
        <SurpriseSection onTriggerSurprise={scrollToProposal} />

        {/* Final Proposal Screen (Emotional Centerpiece) */}
        <ProposalSection onReplay={handleReplay} onReadLetter={scrollToLetter} />

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}
