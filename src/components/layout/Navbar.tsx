import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import { Menu, X, ChevronDown, Shield, Wrench, LayoutDashboard } from 'lucide-react';
import { Tab } from '../../types';
import { SECURITY_SERVICES, FACILITIES_SERVICES } from '../../data';
import logoImage from '../../assets/images/onyx_security_logo_new_1782716984591.jpg';

interface NavbarProps {
  currentTab: Tab;
  setCurrentTab: (tab: Tab) => void;
  onSelectService: (serviceId: string) => void;
  onSelectFacility: (facilityId: string) => void;
  hasSubmissions: boolean;
}

// Helper to render Lucide icons dynamically
function NavbarIcon({ name, className }: { name: string; className?: string }) {
  const IconComponent = (LucideIcons as any)[name] || Shield;
  return <IconComponent className={className} />;
}

export default function Navbar({ 
  currentTab, 
  setCurrentTab, 
  onSelectService, 
  onSelectFacility,
  hasSubmissions 
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [facilitiesDropdownOpen, setFacilitiesDropdownOpen] = useState(false);

  // Mobile drawer collapsible states
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileFacilitiesOpen, setMobileFacilitiesOpen] = useState(false);

  // Block/unblock background body scroll when mobile menu is open
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleServiceClick = (serviceId: string) => {
    setCurrentTab('services');
    onSelectService(serviceId);
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  const handleFacilityClick = (facilityId: string) => {
    setCurrentTab('facilities');
    onSelectFacility(facilityId);
    setFacilitiesDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  const handleTabChange = (tab: Tab) => {
    setCurrentTab(tab);
    setMobileMenuOpen(false);
  };

  return (
    <div className="relative z-50 w-full select-none font-sans">
      {/* 1. Desktop Navigation Bar (Visible only on md and up) */}
      <nav className="hidden md:block bg-[#E5E5E7] text-neutral-800 shadow-sm border-b border-neutral-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-stretch h-[46px]">
            
            <div className="flex items-stretch justify-center gap-[10px] flex-1 h-full">
              {/* Home Tab */}
              <button
                onClick={() => handleTabChange('home')}
                className={`px-[52px] flex items-center justify-center font-bold text-[14px] transition-all cursor-pointer h-full ${
                  currentTab === 'home'
                    ? 'bg-[#CECED0] text-black border-b-2 border-gold'
                    : 'bg-[#E5E5E7] text-neutral-700 hover:bg-[#DCDCDD] hover:text-black'
                }`}
              >
                Home
              </button>

              {/* About Us Tab */}
              <button
                onClick={() => handleTabChange('about')}
                className={`px-[52px] flex items-center justify-center font-bold text-[14px] transition-all cursor-pointer h-full ${
                  currentTab === 'about'
                    ? 'bg-[#CECED0] text-black border-b-2 border-gold'
                    : 'bg-[#E5E5E7] text-neutral-700 hover:bg-[#DCDCDD] hover:text-black'
                }`}
              >
                About Us
              </button>

              {/* Security Services Dropdown */}
              <div 
                className="relative flex h-full"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <button
                  onClick={() => handleTabChange('services')}
                  className={`px-[52px] flex items-center justify-center font-bold text-[14px] gap-1 transition-all cursor-pointer h-full ${
                    currentTab === 'services'
                      ? 'bg-[#CECED0] text-black border-b-2 border-gold'
                      : 'bg-[#E5E5E7] text-neutral-700 hover:bg-[#DCDCDD] hover:text-black'
                  }`}
                >
                  <span>Security Services</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {servicesDropdownOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-1/2 -translate-x-1/2 top-full w-80 bg-neutral-950 text-neutral-200 shadow-2xl border border-neutral-800 rounded-b-md overflow-hidden"
                    >
                      <div className="p-3 bg-neutral-900 border-b border-neutral-800 text-[11px] font-bold text-gold tracking-wider uppercase px-4 flex items-center gap-1.5">
                        <Shield className="w-3.5 h-3.5" /> Specialist Guarding
                      </div>
                      <div className="max-h-[380px] overflow-y-auto py-1">
                        {SECURITY_SERVICES.map((service) => (
                          <button
                            key={service.id}
                            onClick={() => handleServiceClick(service.id)}
                            className="w-full text-left px-4 py-2 text-sm hover:bg-gold hover:text-black transition-colors flex items-start gap-3 cursor-pointer border-b border-neutral-900/40 last:border-0"
                          >
                            <div className="mt-0.5 text-gold hover:text-inherit">
                              <NavbarIcon name={service.iconName} className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <span className="font-semibold block truncate">{service.title}</span>
                              <span className="text-[11px] opacity-70 block truncate font-light">{service.shortDesc}</span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Facilities Management Dropdown */}
              <div 
                className="relative flex h-full"
                onMouseEnter={() => setFacilitiesDropdownOpen(true)}
                onMouseLeave={() => setFacilitiesDropdownOpen(false)}
              >
                <button
                  onClick={() => handleTabChange('facilities')}
                  className={`px-[52px] flex items-center justify-center font-bold text-[14px] gap-1 transition-all cursor-pointer h-full ${
                    currentTab === 'facilities'
                      ? 'bg-[#CECED0] text-black border-b-2 border-gold'
                      : 'bg-[#E5E5E7] text-neutral-700 hover:bg-[#DCDCDD] hover:text-black'
                  }`}
                >
                  <span>Facilities Management</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${facilitiesDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {facilitiesDropdownOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-1/2 -translate-x-1/2 top-full w-80 bg-neutral-950 text-neutral-200 shadow-2xl border border-neutral-800 rounded-b-md overflow-hidden"
                    >
                      <div className="p-3 bg-neutral-900 border-b border-neutral-800 text-[11px] font-bold text-gold tracking-wider uppercase px-4 flex items-center gap-1.5">
                        <Wrench className="w-3.5 h-3.5" /> Facility Solutions
                      </div>
                      <div className="max-h-[380px] overflow-y-auto py-1">
                        {FACILITIES_SERVICES.map((facility) => (
                          <button
                            key={facility.id}
                            onClick={() => handleFacilityClick(facility.id)}
                            className="w-full text-left px-4 py-2 text-sm hover:bg-gold hover:text-black transition-colors flex items-start gap-3 cursor-pointer border-b border-neutral-900/40 last:border-0"
                          >
                            <div className="mt-0.5 text-gold hover:text-inherit">
                              <NavbarIcon name={facility.iconName} className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <span className="font-semibold block truncate">{facility.title}</span>
                              <span className="text-[11px] opacity-70 block truncate font-light">{facility.description}</span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Contact Tab */}
              <button
                onClick={() => handleTabChange('contact')}
                className={`px-[52px] flex items-center justify-center font-bold text-[14px] transition-all cursor-pointer h-full ${
                  currentTab === 'contact'
                    ? 'bg-[#CECED0] text-black border-b-2 border-gold'
                    : 'bg-[#E5E5E7] text-neutral-700 hover:bg-[#DCDCDD] hover:text-black'
                }`}
              >
                Contact
              </button>
            </div>

            {/* Right Side Info - Live Staff portal badge when requests are present */}
            <div className="flex items-center px-4">
              {hasSubmissions && (
                <button 
                  onClick={() => handleTabChange('admin')}
                  className="flex items-center gap-1.5 px-3 py-1 bg-neutral-800 text-xs font-semibold text-gold border border-gold/30 rounded-full hover:bg-neutral-700 transition-colors animate-pulse cursor-pointer"
                >
                  <LayoutDashboard className="w-3 h-3" />
                  Staff Dashboard Active
                </button>
              )}
            </div>

          </div>
        </div>
      </nav>

      {/* 2. Mobile Header Bar (Visible only on mobile / max-md) */}
      <div className="md:hidden bg-black flex items-center justify-between px-4 h-[60px] border-b-[3px] border-[#FAAD17] w-full">
        {/* Logo left */}
        <div 
          onClick={() => {
            setCurrentTab('home');
            setMobileMenuOpen(false);
          }}
          className="cursor-pointer flex items-center h-full py-2.5"
        >
          <img 
            src={logoImage} 
            alt="Onyx Security" 
            className="h-9 w-auto object-contain filter brightness-110"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Hamburger Menu right */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-white hover:text-gold p-2 focus:outline-none cursor-pointer flex items-center justify-center rounded-md"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
        </button>
      </div>

      {/* 3. Mobile Menu Drawer (Right to Left Slide-out) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop filling the entire screen behind the drawer (handles the 25% remaining width click to close) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/70 z-[9998] md:hidden cursor-pointer"
            />

            {/* Slide-out Drawer Panel: 75% width */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', ease: 'easeOut', duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-[75vw] max-w-[320px] bg-neutral-950 text-neutral-200 shadow-2xl z-[9999] md:hidden flex flex-col border-l border-neutral-800"
            >
              {/* Drawer Header with Close Button */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-800 shrink-0">
                <span className="text-xs font-bold text-gold tracking-wider uppercase">Onyx Navigation</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-neutral-400 hover:text-white p-2 focus:outline-none cursor-pointer flex items-center justify-center rounded-md bg-neutral-900 border border-neutral-800"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Scrollable links inside the drawer */}
              <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
                <button
                  onClick={() => handleTabChange('home')}
                  className={`w-full text-left px-4 py-2.5 rounded font-semibold text-sm cursor-pointer transition-colors ${currentTab === 'home' ? 'bg-neutral-800 text-gold' : 'text-neutral-300 hover:bg-neutral-900'}`}
                >
                  Home
                </button>
                <button
                  onClick={() => handleTabChange('about')}
                  className={`w-full text-left px-4 py-2.5 rounded font-semibold text-sm cursor-pointer transition-colors ${currentTab === 'about' ? 'bg-neutral-800 text-gold' : 'text-neutral-300 hover:bg-neutral-900'}`}
                >
                  About Us
                </button>
                
                <div className="border-t border-neutral-800 my-2"></div>
                
                {/* Interactive Collapsible Security Services on Mobile */}
                <div>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full text-left px-4 py-2.5 rounded font-semibold text-sm text-neutral-300 hover:bg-neutral-900 flex justify-between items-center cursor-pointer transition-colors"
                  >
                    <span>Security Services</span>
                    <ChevronDown className={`w-4 h-4 text-neutral-500 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {mobileServicesOpen && (
                    <div className="pl-3 pt-1 pb-2 space-y-1 bg-neutral-900/50 rounded-md mt-1 border border-neutral-800/50">
                      {SECURITY_SERVICES.map((service) => (
                        <button
                          key={service.id}
                          onClick={() => handleServiceClick(service.id)}
                          className="w-full text-left px-4 py-2 rounded text-xs text-neutral-400 hover:bg-neutral-800 hover:text-white flex items-center gap-2.5 cursor-pointer transition-colors"
                        >
                          <NavbarIcon name={service.iconName} className="w-3.5 h-3.5 text-gold" />
                          <span className="font-medium">{service.title}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="border-t border-neutral-800 my-2"></div>

                {/* Interactive Collapsible Facilities Management on Mobile */}
                <div>
                  <button
                    onClick={() => setMobileFacilitiesOpen(!mobileFacilitiesOpen)}
                    className="w-full text-left px-4 py-2.5 rounded font-semibold text-sm text-neutral-300 hover:bg-neutral-900 flex justify-between items-center cursor-pointer transition-colors"
                  >
                    <span>Facilities Management</span>
                    <ChevronDown className={`w-4 h-4 text-neutral-500 transition-transform duration-200 ${mobileFacilitiesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {mobileFacilitiesOpen && (
                    <div className="pl-3 pt-1 pb-2 space-y-1 bg-neutral-900/50 rounded-md mt-1 border border-neutral-800/50">
                      {FACILITIES_SERVICES.map((facility) => (
                        <button
                          key={facility.id}
                          onClick={() => handleFacilityClick(facility.id)}
                          className="w-full text-left px-4 py-2 rounded text-xs text-neutral-400 hover:bg-neutral-800 hover:text-white flex items-center gap-2.5 cursor-pointer transition-colors"
                        >
                          <NavbarIcon name={facility.iconName} className="w-3.5 h-3.5 text-gold" />
                          <span className="font-medium">{facility.title}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="border-t border-neutral-800 my-2"></div>

                <button
                  onClick={() => handleTabChange('contact')}
                  className={`w-full text-left px-4 py-2.5 rounded font-semibold text-sm cursor-pointer transition-colors ${currentTab === 'contact' ? 'bg-neutral-800 text-gold' : 'text-neutral-300 hover:bg-neutral-900'}`}
                >
                  Contact
                </button>

                {hasSubmissions && (
                  <button
                    onClick={() => handleTabChange('admin')}
                    className="w-full text-left px-4 py-2.5 rounded font-semibold text-sm bg-neutral-800 text-gold flex items-center gap-1.5 cursor-pointer transition-colors animate-pulse"
                  >
                    <LayoutDashboard className="w-4 h-4 text-gold" />
                    Staff Dashboard (Admin)
                  </button>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
