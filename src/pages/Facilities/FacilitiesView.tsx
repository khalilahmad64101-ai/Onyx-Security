import React from 'react';
import { motion } from 'motion/react';
import { Wrench, ChevronRight, CheckCircle2 } from 'lucide-react';
import { FACILITIES_SERVICES } from '../../data';
import * as LucideIcons from 'lucide-react';

interface FacilitiesViewProps {
  onSelectFacility: (facilityId: string) => void;
  selectedFacilityId: string | null;
}

// Helper to render Lucide icons dynamically
function FacilityIcon({ name, className }: { name: string; className?: string }) {
  const IconComponent = (LucideIcons as any)[name] || Wrench;
  return <IconComponent className={className} />;
}

export default function FacilitiesView({ onSelectFacility, selectedFacilityId }: FacilitiesViewProps) {
  return (
    <div className="bg-onyx py-16 text-white font-sans selection:bg-gold selection:text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        
        {/* Title Block */}
        <div className="space-y-4 max-w-3xl pb-4 border-b border-neutral-800">
          <span className="text-gold text-xs font-bold uppercase tracking-[0.2em] bg-gold/5 px-2.5 py-1 border border-gold/15 rounded">
            Integrated Facilities Solutions
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
            Facilities &amp; Property Management
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            By combining physical guarding with professional facilities support, Onyx provides a singular, high-efficiency channel for all your building maintenance, guest concierge, cleaning, and hazard checks.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* List of Facilities Services (Interactive Cards) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {FACILITIES_SERVICES.map((facility, index) => (
              <motion.div
                key={facility.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onClick={() => onSelectFacility(facility.id)}
                className={`bg-charcoal border rounded-xl p-6 cursor-pointer hover:border-gold/30 transition-all duration-300 relative group ${
                  selectedFacilityId === facility.id ? 'border-gold bg-charcoal/90 ring-1 ring-gold/20' : 'border-neutral-800'
                }`}
              >
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-neutral-800 text-gold flex items-center justify-center shrink-0 group-hover:bg-gold group-hover:text-black transition-colors duration-300 shadow-md">
                    <FacilityIcon name={facility.iconName} className="w-5 h-5" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-white group-hover:text-gold transition-colors">
                      {facility.title}
                    </h3>
                    <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                      {facility.description}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-800/40 flex items-center justify-end text-xs font-semibold text-neutral-500 group-hover:text-gold transition-colors">
                  <span className="flex items-center gap-1 group-hover:mr-1 transition-all">
                    More details <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Side Editorial Callout */}
          <div className="lg:col-span-4 bg-charcoal border border-neutral-800 p-8 rounded-2xl space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-full blur-xl"></div>
            
            <h3 className="font-display text-xl font-bold text-white">Why Outsource to Onyx?</h3>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
              Managing separate providers for security, janitorial work, and building safety certifications drains administrative time and creates dangerous gaps in liability. 
            </p>

            <div className="space-y-4 pt-4 border-t border-neutral-800/60">
              <div className="flex gap-2.5 items-start text-xs text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div>
                  <strong>Unified Invoicing:</strong> One monthly fee, one service agreement, one account manager.
                </div>
              </div>

              <div className="flex gap-2.5 items-start text-xs text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div>
                  <strong>Safety Compliance:</strong> Built-in risk auditing. If our janitors notice a blocked fire door, our on-duty guards clear it immediately.
                </div>
              </div>

              <div className="flex gap-2.5 items-start text-xs text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div>
                  <strong>Continuous Vetting:</strong> Every member of our cleaning and facilities crew undergoes the same vetting as our security guards.
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
