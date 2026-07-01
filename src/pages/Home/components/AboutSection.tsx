import React from 'react';
import { Tab } from '../../../types';
import vanImage from '../../../assets/images/cityx_security_van_1782884809713.jpg';

interface AboutSectionProps {
  setCurrentTab: (tab: Tab) => void;
  onOpenQuote: () => void;
  onOpenCallback: () => void;
}

export default function AboutSection({
  setCurrentTab,
  onOpenQuote,
  onOpenCallback,
}: AboutSectionProps) {
  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-12 py-16 bg-black animate-fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Cloned Editorial Copy and Buttons */}
        <div className="lg:col-span-7 space-y-6">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-gold tracking-tight leading-tight">
            Onyx Security Services
            <span className="block mt-1">Manchester</span>
          </h2>
          
          <p className="font-sans text-neutral-300 text-[13px] sm:text-sm leading-relaxed text-left font-light max-w-2xl">
            Welcome to Onyx Security. We are committed to providing high-quality standards with cost-effective solutions with highly trained security guards and door staff to handle any situation. The Onyx team have breadth and depth experience and knowledge in providing a range of security services, including Events and shows, Retail, Corporate, Construction, Bars &amp; Clubs, Vacant Property, CCTV and Facilities Management. If it's your plan and desire to have a professional and physical, and customer care presence to protect yourself, your business or your Assets, Onyx security can meet your expectations and give you peace of mind in this modern society.
          </p>

          {/* Cloned Bottom Buttons row (gold bordered on black backgrounds) */}
          <div className="flex flex-wrap gap-x-4 gap-y-3 pt-4 font-sans select-none">
            <button
              onClick={() => setCurrentTab('about')}
              className="px-6 py-2.5 border border-gold text-gold hover:bg-gold hover:text-black transition-all duration-200 text-xs sm:text-[13px] font-normal tracking-wide bg-transparent rounded-none cursor-pointer"
            >
              Find out more
            </button>
            
            <button
              onClick={onOpenQuote}
              className="px-6 py-2.5 border border-gold text-gold hover:bg-gold hover:text-black transition-all duration-200 text-xs sm:text-[13px] font-normal tracking-wide bg-transparent rounded-none cursor-pointer"
            >
              Get a quote
            </button>
            
            <button
              onClick={onOpenCallback}
              className="px-6 py-2.5 border border-gold text-gold hover:bg-gold hover:text-black transition-all duration-200 text-xs sm:text-[13px] font-normal tracking-wide bg-transparent rounded-none cursor-pointer"
            >
              Request a callback
            </button>
          </div>
        </div>

        {/* Cloned image on the right: Cloned Security Van */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <img
            src="https://khalilahmad12.github.io/oxes-images/cityx_security_van_1782830013822.png"
            alt="Onyx Security Guard Mobile Dispatch Vehicle"
            className="w-full max-w-[420px] h-auto object-contain filter brightness-95"
            referrerPolicy="no-referrer"
          />
        </div>

      </div>
    </section>
  );
}
