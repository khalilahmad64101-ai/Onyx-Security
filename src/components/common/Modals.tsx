import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Shield, Phone, CheckCircle2 } from 'lucide-react';
import { SecurityService, FacilityItem } from '../../types';
import { SECURITY_SERVICES } from '../../data';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ServiceDetailModalProps extends ModalProps {
  service: SecurityService | null;
  onSubmitQuote: (quote: any) => void;
}

interface FacilityDetailModalProps extends ModalProps {
  facility: FacilityItem | null;
  onSubmitQuote: (quote: any) => void;
}

interface QuickCallbackModalProps extends ModalProps {
  onSubmitCallback: (callback: any) => void;
}

interface QuickQuoteModalProps extends ModalProps {
  onSubmitQuote: (quote: any) => void;
}

// 1. Service Detail Modal
export function ServiceDetailModal({ isOpen, onClose, service, onSubmitQuote }: ServiceDetailModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!service) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !location) return;
    onSubmitQuote({
      name,
      email,
      phone,
      serviceType: service.id,
      location,
      details: `Inquiry directly from ${service.title} specification sheet.`
    });
    setSubmitted(true);
    setTimeout(() => {
      setName('');
      setEmail('');
      setPhone('');
      setLocation('');
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-charcoal border border-neutral-800 rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl relative z-10 flex flex-col md:flex-row h-[90vh] md:h-auto max-h-[90vh]"
          >
            {/* Left/Main Column: Service Spec Sheets */}
            <div className="flex-1 p-6 md:p-8 overflow-y-auto space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] text-gold tracking-widest font-bold uppercase">Security Specification</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-display">{service.title}</h3>
                </div>
              </div>

              <p className="text-sm text-neutral-300 leading-relaxed font-light">
                {service.longDesc}
              </p>

              <div className="border-t border-neutral-800 pt-4 space-y-3">
                <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Scope of Deployment Include:</span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300 font-light">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold"></span> Regular Perimeter Guard Patrols
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold"></span> Full GPS Tracking Logs
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold"></span> SIA Licensed Officers
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold"></span> Comprehensive Risk Assessments
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: Quick Quote Form */}
            <div className="w-full md:w-80 bg-neutral-900 border-t md:border-t-0 md:border-l border-neutral-800 p-6 flex flex-col justify-between overflow-y-auto">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-sm font-bold text-white">Direct Project Pricing</h4>
                    <p className="text-[10px] text-neutral-500 mt-0.5">Fill out your details for an immediate quote estimation.</p>
                  </div>
                  <button onClick={onClose} className="p-1 rounded bg-neutral-800 text-neutral-400 hover:text-white">
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {submitted ? (
                  <div className="text-center py-12 space-y-3">
                    <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                    <h5 className="text-sm font-bold text-white">Project Received</h5>
                    <p className="text-[11px] text-neutral-400">Our operations estimators are configuring your custom rates right now.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3 pt-2">
                    <div className="space-y-1">
                      <label className="text-[10px] font-semibold text-neutral-400 uppercase">Your Name</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Full name"
                        className="w-full bg-charcoal border border-neutral-800 rounded p-2 text-xs text-white focus:outline-none focus:border-gold"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-semibold text-neutral-400 uppercase">Email Address</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="client@mail.com"
                        className="w-full bg-charcoal border border-neutral-800 rounded p-2 text-xs text-white focus:outline-none focus:border-gold"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-semibold text-neutral-400 uppercase">Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="07xxx xxxxxx"
                        className="w-full bg-charcoal border border-neutral-800 rounded p-2 text-xs text-white focus:outline-none focus:border-gold"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-semibold text-neutral-400 uppercase">Site Location</label>
                      <input
                        type="text"
                        required
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="e.g. Manchester M50"
                        className="w-full bg-charcoal border border-neutral-800 rounded p-2 text-xs text-white focus:outline-none focus:border-gold"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 bg-gold hover:bg-gold-dark text-black font-bold text-[10px] tracking-wider uppercase rounded transition-colors duration-200 mt-2 cursor-pointer"
                    >
                      Request Rates
                    </button>
                  </form>
                )}
              </div>

              <div className="hidden md:block pt-6 border-t border-neutral-800/60 text-[10px] text-neutral-500">
                Onyx Security processes data securely under SIA privacy standards. All estimates are free of charge.
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

// 2. Facility Detail Modal
export function FacilityDetailModal({ isOpen, onClose, facility, onSubmitQuote }: FacilityDetailModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!facility) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) return;
    onSubmitQuote({
      name,
      email,
      phone,
      serviceType: 'facilities',
      location: 'Manchester HQ Region',
      details: `Facility query for ${facility.title}. Notes: ${details}`
    });
    setSubmitted(true);
    setTimeout(() => {
      setName('');
      setEmail('');
      setPhone('');
      setDetails('');
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-charcoal border border-neutral-800 rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl relative z-10 p-6 sm:p-8 space-y-6"
          >
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[9px] text-gold tracking-widest font-bold uppercase">Facilities Specification</span>
                  <h3 className="text-lg font-bold text-white font-display">{facility.title}</h3>
                </div>
              </div>
              <button onClick={onClose} className="p-1 rounded bg-neutral-800 text-neutral-400 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
              {facility.description} Onyx Integrated services ensure high quality control, regular compliance audits, and absolute accountability, providing a robust operational environment for your staff and clients.
            </p>

            {submitted ? (
              <div className="text-center py-6 space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h5 className="text-sm font-bold text-white">Facilities Inquiry Received</h5>
                <p className="text-xs text-neutral-400">Our facilities coordinator will call you to discuss your operational needs shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5 border-t border-neutral-800 pt-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[10px] font-semibold text-neutral-400 uppercase">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Full name"
                      className="w-full bg-neutral-900 border border-neutral-800 rounded p-2 text-xs text-white focus:outline-none focus:border-gold"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-semibold text-neutral-400 uppercase">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 07xxx xxxxxx"
                      className="w-full bg-neutral-900 border border-neutral-800 rounded p-2 text-xs text-white focus:outline-none focus:border-gold"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-semibold text-neutral-400 uppercase">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="client@corporate.com"
                    className="w-full bg-neutral-900 border border-neutral-800 rounded p-2 text-xs text-white focus:outline-none focus:border-gold"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-semibold text-neutral-400 uppercase">Specific Requests / Property Notes</label>
                  <textarea
                    rows={2}
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder="Provide property details, size, or preferred scheduling..."
                    className="w-full bg-neutral-900 border border-neutral-800 rounded p-2 text-xs text-white focus:outline-none focus:border-gold resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-gold hover:bg-gold-dark text-black font-bold text-xs tracking-wider uppercase rounded transition-colors duration-200 cursor-pointer"
                >
                  Schedule Facilities Assessment
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

// 3. Quick Callback Modal
export function QuickCallbackModal({ isOpen, onClose, onSubmitCallback }: QuickCallbackModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [time, setTime] = useState('morning');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    onSubmitCallback({
      name,
      phone,
      bestTime: time
    });
    setSubmitted(true);
    setTimeout(() => {
      setName('');
      setPhone('');
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-charcoal border border-neutral-800 rounded-2xl w-full max-w-md overflow-hidden shadow-2xl relative z-10 p-6 sm:p-8 space-y-6"
          >
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-display">Priority Callback Schedule</h3>
                  <p className="text-[10px] text-neutral-500">Provide details for a direct telephonic assessment.</p>
                </div>
              </div>
              <button onClick={onClose} className="p-1 rounded bg-neutral-800 text-neutral-400 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>

            {submitted ? (
              <div className="text-center py-8 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="font-bold text-white">Callback Scheduled</h4>
                <p className="text-xs text-neutral-400">An officer will telephone you during your selected window.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-neutral-400">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full name"
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-gold"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-neutral-400">Contact Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 07123 456 789"
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-gold"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-neutral-400">Preferred Call Window</label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-gold"
                  >
                    <option value="morning">Morning (9am - 12pm)</option>
                    <option value="afternoon">Afternoon (12pm - 5pm)</option>
                    <option value="evening">Evening / ASAP (Emergency)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-gold hover:bg-gold-dark text-black font-bold text-xs tracking-wider uppercase rounded transition-colors duration-200 cursor-pointer"
                >
                  Schedule Callback
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

// 4. Quick Quote Modal
export function QuickQuoteModal({ isOpen, onClose, onSubmitQuote }: QuickQuoteModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('events');
  const [location, setLocation] = useState('');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !location) return;
    onSubmitQuote({
      name,
      email,
      phone,
      serviceType: service,
      location,
      details
    });
    setSubmitted(true);
    setTimeout(() => {
      setName('');
      setEmail('');
      setPhone('');
      setLocation('');
      setDetails('');
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-charcoal border border-neutral-800 rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl relative z-10 p-6 sm:p-8 space-y-6"
          >
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-display">Direct Quotation Request</h3>
                  <p className="text-[10px] text-neutral-500">Provide details to construct accurate rates.</p>
                </div>
              </div>
              <button onClick={onClose} className="p-1 rounded bg-neutral-800 text-neutral-400 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>

            {submitted ? (
              <div className="text-center py-8 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="font-bold text-white">Project Received</h4>
                <p className="text-xs text-neutral-400 font-light">An estimation officer will email you an itemized rate structure shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[10px] font-semibold text-neutral-400 uppercase">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Full name"
                      className="w-full bg-neutral-900 border border-neutral-800 rounded p-2 text-xs text-white focus:outline-none focus:border-gold"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-semibold text-neutral-400 uppercase">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="07xxx xxxxxx"
                      className="w-full bg-neutral-900 border border-neutral-800 rounded p-2 text-xs text-white focus:outline-none focus:border-gold"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-semibold text-neutral-400 uppercase">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="client@corporate.com"
                    className="w-full bg-neutral-900 border border-neutral-800 rounded p-2 text-xs text-white focus:outline-none focus:border-gold"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[10px] font-semibold text-neutral-400 uppercase">Required Service</label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full bg-neutral-900 border border-neutral-800 rounded p-2 text-xs text-white focus:outline-none focus:border-gold"
                    >
                      {SECURITY_SERVICES.map(s => (
                        <option key={s.id} value={s.id}>{s.title}</option>
                      ))}
                      <option value="facilities">Facilities Solutions</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-semibold text-neutral-400 uppercase">Site Location *</label>
                    <input
                      type="text"
                      required
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="City or Postcode"
                      className="w-full bg-neutral-900 border border-neutral-800 rounded p-2 text-xs text-white focus:outline-none focus:border-gold"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-semibold text-neutral-400 uppercase">Project details / Shift requirements</label>
                  <textarea
                    rows={2}
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder="e.g. 1 static officer required 24/7..."
                    className="w-full bg-neutral-900 border border-neutral-800 rounded p-2 text-xs text-white focus:outline-none focus:border-gold resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-gold hover:bg-gold-dark text-black font-bold text-xs tracking-wider uppercase rounded transition-colors duration-200 cursor-pointer"
                >
                  Submit Quote Request
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
