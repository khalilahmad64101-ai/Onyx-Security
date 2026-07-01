import React from 'react';
import { Tab } from '../../types';
import HeroSlider from './HeroSlider';
import AboutSection from './components/AboutSection';
import OurServicesSection from './components/OurServicesSection';

interface HomeViewProps {
  setCurrentTab: (tab: Tab) => void;
  onOpenQuote: () => void;
  onOpenCallback: () => void;
  onSelectService?: (id: string) => void;
  onSelectFacility?: (id: string) => void;
}

export default function HomeView({ 
  setCurrentTab, 
  onOpenQuote, 
  onOpenCallback,
  onSelectService,
  onSelectFacility
}: HomeViewProps) {
  return (
    <div className="space-y-0 font-sans bg-black animate-fade-in">
      {/* Working Slide Carousel */}
      <HeroSlider 
        setCurrentTab={setCurrentTab} 
        onOpenQuote={onOpenQuote}
        onOpenCallback={onOpenCallback}
      />

      {/* Modular About layout block */}
      <AboutSection
        setCurrentTab={setCurrentTab}
        onOpenQuote={onOpenQuote}
        onOpenCallback={onOpenCallback}
      />

      {/* Modular "Our Services" Grid Section directly below About section */}
      <OurServicesSection
        setCurrentTab={setCurrentTab}
        onSelectService={onSelectService}
        onSelectFacility={onSelectFacility}
      />
    </div>
  );
}
