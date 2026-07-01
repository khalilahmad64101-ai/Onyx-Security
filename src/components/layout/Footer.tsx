import React from 'react';
import { Phone, Mail, MapPin, Smartphone, ShieldCheck } from 'lucide-react';
import { Tab } from '../../types';

interface FooterProps {
  currentTab: Tab;
  setCurrentTab: (tab: Tab) => void;
  onSelectService?: (id: string) => void;
  onSelectFacility?: (id: string) => void;
}

export default function Footer({ 
  currentTab, 
  setCurrentTab,
  onSelectService,
  onSelectFacility
}: FooterProps) {

  const handleItemClick = (tab: Tab, id?: string) => {
    setCurrentTab(tab);
    if (id) {
      if (tab === 'services' && onSelectService) {
        onSelectService(id);
      } else if (tab === 'facilities' && onSelectFacility) {
        onSelectFacility(id);
      }
    }
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1C1C1E] text-neutral-400 font-sans select-none border-t border-neutral-800">
      {/* Top Section with 3 Grid Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-12 py-10 md:py-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
        
        {/* Security Services Column */}
        <div className="space-y-4 md:space-y-5">
          <h4 className="font-sans text-[18px] md:text-[17px] font-semibold text-gold tracking-tight">
            Security Services
          </h4>
          <ul className="space-y-2.5 md:space-y-3.5 text-[13px] sm:text-sm font-light text-neutral-300">
            <li>
              <button 
                onClick={() => handleItemClick('services', 'bars-clubs')} 
                className="hover:text-gold transition-colors text-left cursor-pointer"
              >
                Bars And Clubs
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleItemClick('facilities', 'concierge')} 
                className="hover:text-gold transition-colors text-left cursor-pointer"
              >
                Concierge/Receptionist
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleItemClick('services', 'construction')} 
                className="hover:text-gold transition-colors text-left cursor-pointer"
              >
                Construction Security
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleItemClick('services', 'retail')} 
                className="hover:text-gold transition-colors text-left cursor-pointer"
              >
                Retail Security
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleItemClick('services', 'events')} 
                className="hover:text-gold transition-colors text-left cursor-pointer"
              >
                Shows & Events Security
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleItemClick('services', 'vacant-property')} 
                className="hover:text-gold transition-colors text-left cursor-pointer"
              >
                Vacant Property Security
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleItemClick('services', 'cctv')} 
                className="hover:text-gold transition-colors text-left cursor-pointer"
              >
                Security Camera Solutions
              </button>
            </li>
          </ul>
        </div>

        {/* Facilities Management Column */}
        <div className="space-y-4 md:space-y-5">
          <h4 className="font-sans text-[18px] md:text-[17px] font-semibold text-gold tracking-tight">
            Facilities Management
          </h4>
          <ul className="space-y-2.5 md:space-y-3.5 text-[13px] sm:text-sm font-light text-neutral-300">
            <li>
              <button 
                onClick={() => handleItemClick('facilities', 'cleaning')} 
                className="hover:text-gold transition-colors text-left cursor-pointer"
              >
                Cleaning
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleItemClick('facilities', 'maintenance')} 
                className="hover:text-gold transition-colors text-left cursor-pointer"
              >
                Catering
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleItemClick('facilities', 'maintenance')} 
                className="hover:text-gold transition-colors text-left cursor-pointer"
              >
                Window Cleaning
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleItemClick('facilities', 'maintenance')} 
                className="hover:text-gold transition-colors text-left cursor-pointer"
              >
                Gritting
              </button>
            </li>
          </ul>
        </div>

        {/* Contact Details Column */}
        <div className="space-y-4 md:space-y-5">
          <h4 className="font-sans text-[18px] md:text-[17px] font-semibold text-gold tracking-tight">
            Contact Details
          </h4>
          <ul className="space-y-3.5 md:space-y-4 text-[13px] sm:text-sm font-light text-neutral-300">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <span className="leading-tight text-left block">
                132-134 Great Ancoats Street, Manchester,<br />
                England, M4 6DE
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-gold shrink-0" />
              <a href="tel:01613889635" className="hover:text-gold transition-colors">
                01613889635
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Smartphone className="w-4 h-4 text-gold shrink-0" />
              <a href="tel:07494071494" className="hover:text-gold transition-colors">
                07494071494
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-gold shrink-0" />
              <a href="mailto:info@onyxsecurity-fm.co.uk" className="hover:text-gold transition-colors">
                info@onyxsecurity-fm.co.uk
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Horizontal Divider Line */}
      <div className="border-t border-neutral-800"></div>

      {/* Bottom Section with Logos and Copyright Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-12 py-8 space-y-6">
        
        {/* ACT Logo layout */}
        <div className="flex items-center gap-4 text-white">
          <span className="text-4xl sm:text-5xl font-black tracking-tighter">ACT</span>
          <div className="h-10 w-[2px] bg-neutral-600"></div>
          <div className="flex flex-col justify-center leading-none text-left select-none">
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider text-neutral-200">ACTION</span>
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider text-neutral-200">COUNTERS</span>
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider text-neutral-200">TERRORISM</span>
          </div>
        </div>

        {/* Copyright and Staff Portal Link wrapper */}
        <div className="flex items-center justify-between flex-wrap gap-4 pt-1 border-t border-neutral-900/30">
          <p className="text-[11px] sm:text-xs text-neutral-400 select-none">
            © 2026 Copyright Onyx Security.
          </p>
          
          <button
            onClick={() => handleItemClick('admin')}
            className="text-[11px] sm:text-xs text-neutral-600 hover:text-gold transition-all cursor-pointer font-light"
          >
            Onyx Staff Portal Login
          </button>
        </div>

        {/* Corporate legal disclaimer */}
        <p className="text-[10px] sm:text-[11px] text-neutral-500 font-light leading-relaxed mt-2 select-none text-left max-w-5xl">
          ONYX SECURITY FACILITIES MANAGEMENT LTD is a company registered in England and Wales, 132-134 Great Ancoats Street, Manchester, England, M4 6DE (Company No. 13516478).
        </p>

      </div>
    </footer>
  );
}
