import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SLIDES } from '../../data';
import { Tab } from '../../types';

// Importing the generated London Skyline asset
import onyxGuardHeroImage from '../../assets/images/onyx_guard_hero_slide_1782893005951.jpg';

interface HeroSliderProps {
  setCurrentTab: (tab: Tab) => void;
  onOpenQuote: () => void;
  onOpenCallback: () => void;
}

// Stunning background images tailored perfectly for each slide topic
const SLIDE_IMAGES = [
  "https://khalilahmad12.github.io/oxes-images/slide-1.png", // Professional Security (London skyline)
  'https://khalilahmad12.github.io/oxes-images/slide-3.png', // Event & Shows Security
  'https://khalilahmad12.github.io/oxes-images/camrea.png',  // Security Camera Solutions (CCTV camera close-up)
  'https://khalilahmad12.github.io/oxes-images/slide-2.png', // Facilities Management
  "https://khalilahmad12.github.io/oxes-images/image-slider-last.png" // Corporate Branding (Security uniform + Onyx logo)
];

// Visual color tint overlays to give each slide a unique artistic corporate feeling
const SLIDE_OVERLAYS = [
  'bg-gradient-to-r from-black/85 via-black/50 to-transparent', // Dark Charcoal Slate
  'bg-gradient-to-r from-amber-950/80 via-black/60 to-transparent', // Amber Gold Overlay
  'bg-gradient-to-r from-slate-950/80 via-black/60 to-transparent', // Corporate Navy Slate
  'bg-gradient-to-r from-neutral-950/80 via-black/60 to-transparent', // Matte Black
  'bg-transparent' // 5th Branding slide is kept clean, crisp, and brand-authentic
];

export default function HeroSlider({ setCurrentTab, onOpenQuote, onOpenCallback }: HeroSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex, isPlaying]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  };

  const handleCtaClick = (ctaText: string) => {
    if (ctaText === 'View Services' || ctaText === 'View More') {
      setCurrentTab('services');
    } else if (ctaText === 'About Us') {
      setCurrentTab('about');
    } else if (ctaText === 'Request Callback') {
      onOpenCallback();
    } else if (ctaText === 'Get a Quote') {
      onOpenQuote();
    }
  };

  return (
    <div 
      className="relative h-[380px] xs:h-[440px] md:h-[580px] w-full overflow-hidden bg-neutral-950 group select-none"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* Background Image Container with Ken Burns effect for movement */}
      <div className="absolute inset-0 overflow-hidden bg-black">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={SLIDE_IMAGES[currentIndex % SLIDE_IMAGES.length]}
            alt={SLIDES[currentIndex].title}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1.03 }}
            exit={{ opacity: 0, scale: 1.08 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>
        {/* Dynamic color tint overlays */}
        <div className={`absolute inset-0 transition-all duration-1000 z-[1] ${SLIDE_OVERLAYS[currentIndex % SLIDE_OVERLAYS.length]}`}></div>
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent z-[2]"></div>
      </div>

      {/* Main Content Carousel */}
      <div className="relative max-w-7xl mx-auto h-full px-14 xs:px-16 sm:px-20 md:px-24 flex items-center">
        <div className="max-w-2xl text-left text-white z-10">
          <AnimatePresence mode="wait">
            {!SLIDES[currentIndex].hideText && (
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="space-y-4 md:space-y-5"
              >
                {/* Heading */}
                <h1 className="font-display text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight">
                  {SLIDES[currentIndex].title}
                </h1>

                {/* Description */}
                <p className="font-sans text-neutral-300 text-xs xs:text-sm sm:text-base md:text-md font-light leading-relaxed max-w-xl">
                  {SLIDES[currentIndex].subtitle}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-1 md:pt-2">
                  <button
                    onClick={() => handleCtaClick(SLIDES[currentIndex].cta)}
                    className="px-5 md:px-6 py-2 md:py-2.5 border border-gold text-gold hover:bg-gold hover:text-black transition-all duration-200 text-xs md:text-[13px] font-normal tracking-wide bg-transparent rounded-none cursor-pointer"
                  >
                    View More
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Arrow buttons matching the screenshot style (semi-transparent dark boxes) */}
      <button
        onClick={handlePrev}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 sm:w-12 h-16 sm:h-20 flex items-center justify-center bg-black/60 hover:bg-black/85 border border-neutral-800/40 text-white rounded-none transition-all cursor-pointer z-20 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
      </button>
      
      <button
        onClick={handleNext}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 sm:w-12 h-16 sm:h-20 flex items-center justify-center bg-black/60 hover:bg-black/85 border border-neutral-800/40 text-white rounded-none transition-all cursor-pointer z-20 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* Position Dots Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
              index === currentIndex ? 'bg-gold w-6' : 'bg-neutral-500/80 hover:bg-neutral-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
