import React from 'react';
import { Tab } from '../../types';
import logoImage from '../../assets/images/onyx_security_logo_new_1782716984591.jpg';

interface HeaderProps {
  currentTab: Tab;
  setCurrentTab: (tab: Tab) => void;
}

export default function Header({ currentTab, setCurrentTab }: HeaderProps) {
  return (
    <header className="hidden md:block bg-black w-full select-none">
      {/* Center Logo Container with full-width black background */}
      <div className="w-full flex items-center justify-center py-[5px] px-8 bg-black">
        <div 
          onClick={() => setCurrentTab('home')}
          className="cursor-pointer transition-transform duration-300 hover:scale-[1.02] flex justify-center items-center"
          id="navbar-logo-container"
        >
          <img 
            src={logoImage} 
            alt="Onyx Security Logo" 
            className="h-10 sm:h-14 md:h-16 max-w-full object-contain filter brightness-110"
            referrerPolicy="no-referrer"
            id="navbar-logo-image"
          />
        </div>
      </div>
      
      {/* Solid 10px Golden Accent Line */}
      <div className="h-[3px] bg-[#FAAD17] w-full" id="navbar-gold-line"></div>
    </header>
  );
}
