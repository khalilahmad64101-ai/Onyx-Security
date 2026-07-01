import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Shield, ChevronRight } from 'lucide-react';
import { SECURITY_SERVICES } from '../../data';
import * as LucideIcons from 'lucide-react';

interface ServicesViewProps {
  onSelectService: (serviceId: string) => void;
  selectedServiceId: string | null;
}

// Helper to render Lucide icons dynamically
function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const IconComponent = (LucideIcons as any)[name] || Shield;
  return <IconComponent className={className} />;
}

export default function ServicesView({ onSelectService, selectedServiceId }: ServicesViewProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = SECURITY_SERVICES.filter(service => 
    service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.shortDesc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-onyx py-16 text-white font-sans selection:bg-gold selection:text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Title Block */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-4 border-b border-neutral-800">
          <div className="space-y-3 max-w-2xl">
            <span className="text-gold text-xs font-bold uppercase tracking-[0.2em] bg-gold/5 px-2.5 py-1 border border-gold/15 rounded">
              SIA Vetted Guard Force
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
              Onyx Professional Security Services
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed">
              We provide cost-effective, high-standard security guarding and safety solutions tailored to your unique venue, business, or project.
            </p>
          </div>

          {/* Search Input Filter */}
          <div className="relative w-full md:w-80 shrink-0">
            <Search className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-charcoal border border-neutral-800 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all font-sans"
            />
          </div>
        </div>

        {/* Grid Layout */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`bg-charcoal border rounded-xl p-6 hover:border-gold/40 transition-all duration-300 flex flex-col justify-between group cursor-pointer relative overflow-hidden ${
                  selectedServiceId === service.id ? 'border-gold bg-charcoal/90 ring-1 ring-gold/20' : 'border-neutral-800'
                }`}
                onClick={() => onSelectService(service.id)}
              >
                {/* Visual Corner Light Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-2xl group-hover:bg-gold/10 transition-colors duration-500"></div>

                <div className="space-y-4 relative z-10">
                  {/* Service Icon wrapper */}
                  <div className="w-12 h-12 rounded-lg bg-neutral-800 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all duration-300 shadow-md">
                    <ServiceIcon name={service.iconName} className="w-6 h-6" />
                  </div>

                  <h3 className="font-display text-lg font-bold text-white group-hover:text-gold transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Card CTA Link */}
                <div className="mt-6 pt-4 border-t border-neutral-800/60 flex items-center justify-between text-xs font-semibold text-neutral-300 group-hover:text-gold transition-colors relative z-10">
                  <span>Learn more &amp; book</span>
                  <div className="flex items-center gap-1">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity translate-x-1 group-hover:translate-x-0 duration-200">View details</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 border border-dashed border-neutral-800 rounded-2xl bg-charcoal/30">
            <Shield className="w-10 h-10 text-neutral-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-neutral-300">No services found</h3>
            <p className="text-neutral-500 text-xs mt-1">Try adjusting your search criteria or contact our office for custom packages.</p>
          </div>
        )}

        {/* Dynamic Interactive Callout Box */}
        <div className="bg-gradient-to-r from-neutral-900 to-charcoal border border-neutral-800 rounded-2xl p-8 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gold/[0.01] pointer-events-none"></div>
          <div className="space-y-3 relative z-10 max-w-2xl">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white">Need a bespoke security plan?</h3>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
              Onyx Security also crafts specialized solutions combining surveillance, guarding, safety officers, and full threat compliance mapping for complex multi-site requirements.
            </p>
          </div>
          <div className="shrink-0 relative z-10 flex flex-wrap gap-4">
            <button
              onClick={() => onSelectService('events')}
              className="px-6 py-2.5 bg-neutral-800 text-white font-semibold text-xs uppercase tracking-wider rounded border border-neutral-700 hover:border-gold hover:text-gold transition-all duration-300 cursor-pointer"
            >
              Consult an Officer
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
