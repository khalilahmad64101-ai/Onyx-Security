import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Award, Eye, FileCheck2, UserCheck, PhoneCall, Building } from 'lucide-react';

export default function AboutView() {
  const stats = [
    { label: 'SIA Guard Force', value: '320+', icon: UserCheck, desc: 'Highly trained officers ready for deployment' },
    { label: 'Response Time', value: '< 15m', icon: PhoneCall, desc: 'Average rapid mobile support response' },
    { label: 'Client Satisfaction', value: '99.2%', icon: ShieldCheck, desc: 'Annual contract renewal and positive score' },
    { label: 'Active Sites', value: '180+', icon: Building, desc: 'Properties secured across the North West' },
  ];

  return (
    <div className="bg-onyx py-16 text-white font-sans selection:bg-gold selection:text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-20">
        
        {/* Intro Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-gold text-xs font-bold tracking-[0.2em] uppercase bg-gold/5 px-3 py-1.5 border border-gold/20 rounded">
              <Award className="w-4 h-4" /> Established, Licenced & Trusted
            </div>
            
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              A Premier Security Guarding &amp; Patrol Provider
            </h2>
            
            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed font-light">
              Since inception, Onyx Security has set the standard for physical protection, customer-focused door supervision, and bespoke remote monitoring. Headquartered in Manchester, we serve corporate office complexes, industrial zones, high-profile venues, and elite hospitality estates.
            </p>
            
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              We operate strictly under the guidelines of the Security Industry Authority (SIA) British Standards (BS7499 and BS7960). Each officer in the Onyx guard force undergoes a comprehensive 5-year background screening, full vetting, and continuous training in tactical de-escalation, conflict resolution, first aid, and customer care.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center text-gold shrink-0">
                  <Eye className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Full Transparency</h4>
                  <p className="text-xs text-neutral-400 mt-1">Real-time GPS guard patrol logs, incident logging, and instant reports accessible by clients.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center text-gold shrink-0">
                  <FileCheck2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">SIA Licensed & Certified</h4>
                  <p className="text-xs text-neutral-400 mt-1">Fully compliant with the UK Private Security Industry Act and comprehensive insurance cover.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            {/* Elegant visual box containing our Corporate Vision card */}
            <div className="relative border-2 border-gold/30 bg-charcoal/80 p-8 sm:p-10 rounded-xl shadow-2xl space-y-6 overflow-hidden">
              <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-gold/5 blur-2xl"></div>
              
              <h3 className="font-display text-2xl font-bold text-gold">The Onyx Core Vision</h3>
              
              <p className="text-neutral-300 text-sm leading-relaxed">
                "To deliver uncompromising security solutions that combine rigorous, disciplined physical guarding with the highest standards of customer care, acting as an elite extension of our clients' brands."
              </p>

              <div className="border-t border-neutral-800 pt-6">
                <span className="text-xs text-neutral-500 block mb-2 uppercase tracking-widest">Our Guiding Pillars</span>
                <ul className="space-y-2.5 text-xs text-neutral-300">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                    <strong>Integrity First:</strong> Honesty, complete auditing, and transparent reporting.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                    <strong>Elite Standards:</strong> Continuous tactical and physical training.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                    <strong>Client Integration:</strong> Custom uniforms and brand ambassadors.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bento Stats Grid */}
        <div className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h3 className="text-2xl font-bold text-white font-display">Onyx in Numbers</h3>
            <p className="text-neutral-400 text-xs">Our measurable tracking reflects our commitment to physical security excellence.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-charcoal border border-neutral-800 p-6 rounded-xl hover:border-gold/30 transition-all group hover:scale-[1.02] cursor-default"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-neutral-400 font-medium text-xs uppercase tracking-wider">{stat.label}</span>
                  <div className="w-8 h-8 rounded bg-neutral-800 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-colors">
                    <stat.icon className="w-4 h-4" />
                  </div>
                </div>
                <div className="font-display text-3xl font-extrabold text-white mb-2 group-hover:text-gold transition-colors">{stat.value}</div>
                <p className="text-neutral-500 text-xs">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Accreditations Row (Vector-coded trust badges) */}
        <div className="border-t border-neutral-800 pt-12 text-center space-y-6">
          <span className="text-neutral-500 text-xs font-semibold uppercase tracking-[0.2em]">Accredited & Certified Authority</span>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-80 hover:opacity-100 transition-opacity">
            {/* Badge 1: SIA */}
            <div className="flex items-center gap-3 border border-neutral-800 bg-neutral-900/40 py-2.5 px-5 rounded-lg">
              <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/40 flex items-center justify-center text-gold text-xs font-bold font-display">SIA</div>
              <div className="text-left">
                <div className="text-[11px] font-bold text-white tracking-wide">Approved Contractor</div>
                <div className="text-[9px] text-neutral-500">Security Guarding & Doors</div>
              </div>
            </div>

            {/* Badge 2: ISO 9001 */}
            <div className="flex items-center gap-3 border border-neutral-800 bg-neutral-900/40 py-2.5 px-5 rounded-lg">
              <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/40 flex items-center justify-center text-blue-400 text-xs font-bold font-display">ISO</div>
              <div className="text-left">
                <div className="text-[11px] font-bold text-white tracking-wide">9001 Certified</div>
                <div className="text-[9px] text-neutral-500">Quality Management Systems</div>
              </div>
            </div>

            {/* Badge 3: SafeContractor */}
            <div className="flex items-center gap-3 border border-neutral-800 bg-neutral-900/40 py-2.5 px-5 rounded-lg">
              <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center text-emerald-400 text-[10px] font-bold font-display">SAFE</div>
              <div className="text-left">
                <div className="text-[11px] font-bold text-white tracking-wide">SafeContractor</div>
                <div className="text-[9px] text-neutral-500">Accredited Health & Safety</div>
              </div>
            </div>

            {/* Badge 4: ICO */}
            <div className="flex items-center gap-3 border border-neutral-800 bg-neutral-900/40 py-2.5 px-5 rounded-lg">
              <div className="w-8 h-8 rounded-full bg-amber-500/10 border border-amber-500/40 flex items-center justify-center text-amber-400 text-xs font-bold font-display">ICO</div>
              <div className="text-left">
                <div className="text-[11px] font-bold text-white tracking-wide">GDPR Compliant</div>
                <div className="text-[9px] text-neutral-500">Data Protection Register</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
