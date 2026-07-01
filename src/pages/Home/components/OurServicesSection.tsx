import React from 'react';
import { Tab } from '../../../types';

interface OurServicesSectionProps {
  setCurrentTab: (tab: Tab) => void;
  onSelectService?: (id: string) => void;
  onSelectFacility?: (id: string) => void;
}

const FEATURED_SERVICES = [
  {
    title: 'Bars & Clubs Security',
    image: 'https://khalilahmad12.github.io/oxes-images/servicesone.png',
    tab: 'services' as Tab,
    serviceId: 'bars-clubs'
  },
  {
    title: 'Shows & Events Security',
    image: 'https://khalilahmad12.github.io/oxes-images/service-2.png',
    tab: 'services' as Tab,
    serviceId: 'events'
  },
  {
    title: 'Retail Security',
    image: 'https://khalilahmad12.github.io/oxes-images/services-3.png',
    tab: 'services' as Tab,
    serviceId: 'retail'
  },
  {
    title: 'Concierge & Receptionist Security',
    image: 'https://khalilahmad12.github.io/oxes-images/service-4.png',
    tab: 'facilities' as Tab,
    serviceId: 'concierge'
  },
  {
    title: 'Construction Security',
    image: 'https://khalilahmad12.github.io/oxes-images/service-5.png',
    tab: 'services' as Tab,
    serviceId: 'construction'
  },
  {
    title: 'Vacant Property Security',
    image: 'https://khalilahmad12.github.io/oxes-images/services-6.png',
    tab: 'services' as Tab,
    serviceId: 'vacant-property'
  },
  {
    title: 'Facilities Management',
    image: 'https://khalilahmad12.github.io/oxes-images/image-1.png',
    tab: 'facilities' as Tab,
    serviceId: 'cleaning'
  },
  {
    title: 'Security Camera Solutions',
    image: 'https://khalilahmad12.github.io/oxes-images/ceamra-3.png',
    tab: 'services' as Tab,
    serviceId: 'cctv'
  }
];

export default function OurServicesSection({
  setCurrentTab,
  onSelectService,
  onSelectFacility,
}: OurServicesSectionProps) {
  const handleServiceClick = (item: typeof FEATURED_SERVICES[0]) => {
    setCurrentTab(item.tab);
    if (item.tab === 'services' && onSelectService) {
      onSelectService(item.serviceId);
    } else if (item.tab === 'facilities' && onSelectFacility) {
      onSelectFacility(item.serviceId);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-12 pb-16 bg-black animate-fade-in">
      {/* Centered Heading */}
      <div className="text-center pb-8">
        <h2 className="text-2xl sm:text-3xl font-medium text-gold tracking-tight">
          Our Services
        </h2>
      </div>

      {/* Gray Container Block */}
      <div className="bg-[#333333] p-0 rounded-none">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {FEATURED_SERVICES.map((item, index) => (
            <div 
              key={index}
              className="flex flex-col bg-[#333333] overflow-hidden group cursor-pointer"
            >
              {/* Image container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Title block */}
              <div className="py-3 px-2.5 xs:py-4 xs:px-3 md:py-5 md:px-4 text-left min-h-[58px] xs:min-h-[68px] md:min-h-[70px] flex items-center">
                <h3 className="text-gold text-[10px] xs:text-[11px] sm:text-[12px] font-bold tracking-wider uppercase leading-snug">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
