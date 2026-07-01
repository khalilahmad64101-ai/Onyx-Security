import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Shield, Clock, FileText, Send, CheckCircle2 } from 'lucide-react';
import { SECURITY_SERVICES } from '../../data';

interface ContactViewProps {
  onSubmitQuote: (quote: { name: string; email: string; phone: string; serviceType: string; location: string; details: string }) => void;
  onSubmitCallback: (callback: { name: string; phone: string; bestTime: string }) => void;
  onSubmitMessage: (msg: { name: string; email: string; subject: string; message: string }) => void;
  preSelectedService?: string;
}

type ContactSubTab = 'inquiry' | 'quote' | 'callback';

export default function ContactView({ 
  onSubmitQuote, 
  onSubmitCallback, 
  onSubmitMessage,
  preSelectedService = 'events' 
}: ContactViewProps) {
  const [activeSubTab, setActiveSubTab] = useState<ContactSubTab>('inquiry');
  
  // Inquiry Form State
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquirySubject, setInquirySubject] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  // Quote Form State
  const [quoteName, setQuoteName] = useState('');
  const [quoteEmail, setQuoteEmail] = useState('');
  const [quotePhone, setQuotePhone] = useState('');
  const [quoteService, setQuoteService] = useState(preSelectedService);
  const [quoteLocation, setQuoteLocation] = useState('');
  const [quoteDetails, setQuoteDetails] = useState('');
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);

  // Callback Form State
  const [callbackName, setCallbackName] = useState('');
  const [callbackPhone, setCallbackPhone] = useState('');
  const [callbackTime, setCallbackTime] = useState('morning');
  const [callbackSubmitted, setCallbackSubmitted] = useState(false);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName || !inquiryEmail || !inquiryMessage) return;
    onSubmitMessage({
      name: inquiryName,
      email: inquiryEmail,
      subject: inquirySubject || 'General Inquiry',
      message: inquiryMessage
    });
    setInquirySubmitted(true);
    setTimeout(() => {
      setInquiryName('');
      setInquiryEmail('');
      setInquirySubject('');
      setInquiryMessage('');
      setInquirySubmitted(false);
    }, 4000);
  };

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quoteName || !quoteEmail || !quotePhone || !quoteLocation) return;
    onSubmitQuote({
      name: quoteName,
      email: quoteEmail,
      phone: quotePhone,
      serviceType: quoteService,
      location: quoteLocation,
      details: quoteDetails
    });
    setQuoteSubmitted(true);
    setTimeout(() => {
      setQuoteName('');
      setQuoteEmail('');
      setQuotePhone('');
      setQuoteLocation('');
      setQuoteDetails('');
      setQuoteSubmitted(false);
    }, 4000);
  };

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!callbackName || !callbackPhone) return;
    onSubmitCallback({
      name: callbackName,
      phone: callbackPhone,
      bestTime: callbackTime
    });
    setCallbackSubmitted(true);
    setTimeout(() => {
      setCallbackName('');
      setCallbackPhone('');
      setCallbackSubmitted(false);
    }, 4000);
  };

  return (
    <div className="bg-onyx py-16 text-white font-sans selection:bg-gold selection:text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-gold text-xs font-bold uppercase tracking-[0.2em]">Contact Onyx Security</span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">Get in Touch with our Officers</h2>
          <p className="text-neutral-400 text-sm leading-relaxed">
            Have a question, need an urgent guard on-site, or want a custom quotation? Use our secure portal channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-charcoal border border-neutral-800 p-6 sm:p-8 rounded-xl space-y-6">
              <h3 className="font-display text-lg font-bold text-white border-b border-neutral-800 pb-3">
                Manchester HQ
              </h3>

              {/* Contact Card items */}
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded bg-neutral-800/60 border border-neutral-700/40 flex items-center justify-center text-gold shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">Office Address</h4>
                    <p className="text-sm text-neutral-200 mt-1 leading-relaxed">
                      Onyx Security Ltd<br />
                      Suite 4B, MediaCityUK<br />
                      Salford, Manchester, M50 2EQ
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded bg-neutral-800/60 border border-neutral-700/40 flex items-center justify-center text-gold shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">Phone lines (24/7)</h4>
                    <p className="text-sm text-neutral-200 mt-1">
                      +44 (0) 161 820 9000
                    </p>
                    <p className="text-[11px] text-neutral-500 mt-0.5">Emergency guard dispatch: Press 1</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded bg-neutral-800/60 border border-neutral-700/40 flex items-center justify-center text-gold shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">Email Inquiries</h4>
                    <p className="text-sm text-neutral-200 mt-1 break-all hover:text-gold transition-colors">
                      operations@onyx-security.co.uk
                    </p>
                  </div>
                </div>
              </div>

              {/* SLA Response Alert Box */}
              <div className="bg-neutral-900 border border-neutral-800 p-4 rounded-lg flex items-start gap-3">
                <Shield className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div className="text-xs text-neutral-400">
                  <strong className="text-white">Emergency Guard Service:</strong> If you require emergency door staff or guard patrol cover within the next 2 hours, please call us directly.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Portal Sub-Tabs */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Tab Selection */}
            <div className="bg-[#E5E5E7] p-1 rounded-lg flex text-neutral-800 font-semibold select-none shadow-inner">
              <button
                onClick={() => setActiveSubTab('inquiry')}
                className={`flex-1 py-2 text-xs sm:text-sm rounded transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  activeSubTab === 'inquiry' 
                    ? 'bg-neutral-900 text-white shadow' 
                    : 'hover:bg-neutral-200 text-neutral-700'
                }`}
              >
                <Send className="w-4 h-4" /> General Inquiry
              </button>
              
              <button
                onClick={() => setActiveSubTab('quote')}
                className={`flex-1 py-2 text-xs sm:text-sm rounded transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  activeSubTab === 'quote' 
                    ? 'bg-neutral-900 text-white shadow' 
                    : 'hover:bg-neutral-200 text-neutral-700'
                }`}
              >
                <FileText className="w-4 h-4" /> Get a Quote
              </button>
              
              <button
                onClick={() => setActiveSubTab('callback')}
                className={`flex-1 py-2 text-xs sm:text-sm rounded transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  activeSubTab === 'callback' 
                    ? 'bg-neutral-900 text-white shadow' 
                    : 'hover:bg-neutral-200 text-neutral-700'
                }`}
              >
                <Clock className="w-4 h-4" /> Request Callback
              </button>
            </div>

            {/* Sub-Tab Content */}
            <div className="bg-charcoal border border-neutral-800 p-6 sm:p-8 rounded-xl min-h-[400px]">
              
              {/* general inquiry form */}
              {activeSubTab === 'inquiry' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-white font-display">General Operational Inquiry</h3>
                    <p className="text-xs text-neutral-400 mt-1">Submit feedback, general business proposals, or service queries below.</p>
                  </div>

                  {inquirySubmitted ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center text-center py-12 space-y-4"
                    >
                      <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h4 className="text-lg font-bold text-white">Inquiry Sent Successfully</h4>
                      <p className="text-xs text-neutral-400 max-w-sm">We have received your general inquiry and an Onyx Operations manager will contact you within 24 working hours.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleInquirySubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold text-neutral-400">Your Name *</label>
                          <input
                            type="text"
                            required
                            value={inquiryName}
                            onChange={(e) => setInquiryName(e.target.value)}
                            placeholder="Full name"
                            className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-gold transition-colors"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold text-neutral-400">Email Address *</label>
                          <input
                            type="email"
                            required
                            value={inquiryEmail}
                            onChange={(e) => setInquiryEmail(e.target.value)}
                            placeholder="name@company.com"
                            className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-gold transition-colors"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-neutral-400">Subject (Optional)</label>
                        <input
                          type="text"
                          value={inquirySubject}
                          onChange={(e) => setInquirySubject(e.target.value)}
                          placeholder="What can we help you with?"
                          className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-gold transition-colors"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-neutral-400">Your Message *</label>
                        <textarea
                          rows={4}
                          required
                          value={inquiryMessage}
                          onChange={(e) => setInquiryMessage(e.target.value)}
                          placeholder="Please enter your detailed inquiry details..."
                          className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-gold transition-colors resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full sm:w-auto px-8 py-3 bg-transparent text-white border-2 border-gold hover:bg-gold hover:text-black font-bold text-xs tracking-wider uppercase rounded transition-colors duration-300 cursor-pointer"
                      >
                        Submit Operational Inquiry
                      </button>
                    </form>
                  )}
                </div>
              )}

              {/* Detailed Quote Builder */}
              {activeSubTab === 'quote' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-white font-display">Security Quote Specification Builder</h3>
                    <p className="text-xs text-neutral-400 mt-1">Complete your requirements to receive a customized, itemized cost proposal from our estimators.</p>
                  </div>

                  {quoteSubmitted ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center text-center py-12 space-y-4"
                    >
                      <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h4 className="text-lg font-bold text-white">Quote Request Received</h4>
                      <p className="text-xs text-neutral-400 max-w-sm">Thank you. Your request is registered under high priority. An Onyx estimation officer is reviewing your project details and will send a formal quote shortly.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleQuoteSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold text-neutral-400">Your Name *</label>
                          <input
                            type="text"
                            required
                            value={quoteName}
                            onChange={(e) => setQuoteName(e.target.value)}
                            placeholder="Full name"
                            className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-gold transition-colors"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold text-neutral-400">Email Address *</label>
                          <input
                            type="email"
                            required
                            value={quoteEmail}
                            onChange={(e) => setQuoteEmail(e.target.value)}
                            placeholder="client@company.co.uk"
                            className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-gold transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold text-neutral-400">Phone Number *</label>
                          <input
                            type="tel"
                            required
                            value={quotePhone}
                            onChange={(e) => setQuotePhone(e.target.value)}
                            placeholder="e.g. 07123 456 789"
                            className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-gold transition-colors"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold text-neutral-400">Primary Security Requirement *</label>
                          <select
                            value={quoteService}
                            onChange={(e) => setQuoteService(e.target.value)}
                            className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-gold transition-colors"
                          >
                            {SECURITY_SERVICES.map(s => (
                              <option key={s.id} value={s.id}>{s.title}</option>
                            ))}
                            <option value="facilities">Integrated Facilities Management</option>
                            <option value="other">Bespoke Multi-Service Package</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-neutral-400">Site/Event Location *</label>
                        <input
                          type="text"
                          required
                          value={quoteLocation}
                          onChange={(e) => setQuoteLocation(e.target.value)}
                          placeholder="City or Postal Code (e.g., Manchester, M50)"
                          className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-gold transition-colors"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-neutral-400">Project Details &amp; Shift Patterns</label>
                        <textarea
                          rows={3}
                          value={quoteDetails}
                          onChange={(e) => setQuoteDetails(e.target.value)}
                          placeholder="e.g., Static guard needed Mon-Fri 18:00 - 06:00, or Event on 14th July with 5 door supervisors..."
                          className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-gold transition-colors resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full sm:w-auto px-8 py-3 bg-transparent text-white border-2 border-gold hover:bg-gold hover:text-black font-bold text-xs tracking-wider uppercase rounded transition-colors duration-300 cursor-pointer"
                      >
                        Calculate Quotation Cost
                      </button>
                    </form>
                  )}
                </div>
              )}

              {/* Quick Callback Schedule request */}
              {activeSubTab === 'callback' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-white font-display">Schedule a Priority Callback</h3>
                    <p className="text-xs text-neutral-400 mt-1">Short on time? Provide your name and phone number and we will telephone you at your preferred time.</p>
                  </div>

                  {callbackSubmitted ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center text-center py-12 space-y-4"
                    >
                      <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h4 className="text-lg font-bold text-white">Callback Scheduled</h4>
                      <p className="text-xs text-neutral-400 max-w-sm">Got it. We will call you during your selected window. Speak to you soon.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleCallbackSubmit} className="space-y-5">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-neutral-400">Your Full Name *</label>
                        <input
                          type="text"
                          required
                          value={callbackName}
                          onChange={(e) => setCallbackName(e.target.value)}
                          placeholder="Full name"
                          className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-gold transition-colors"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-neutral-400">Contact Telephone Number *</label>
                        <input
                          type="tel"
                          required
                          value={callbackPhone}
                          onChange={(e) => setCallbackPhone(e.target.value)}
                          placeholder="e.g. 07987 654 321"
                          className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-gold transition-colors"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-neutral-400">Preferred Callback Slot *</label>
                        <div className="grid grid-cols-3 gap-3">
                          {[
                            { value: 'morning', label: 'Morning (9am - 12pm)', icon: Clock },
                            { value: 'afternoon', label: 'Afternoon (12pm - 5pm)', icon: Clock },
                            { value: 'urgent', label: 'ASAP (Urgent Out-of-hours)', icon: Shield }
                          ].map((slot) => (
                            <button
                              key={slot.value}
                              type="button"
                              onClick={() => setCallbackTime(slot.value)}
                              className={`py-3 px-2 rounded-lg text-[11px] sm:text-xs font-semibold border flex flex-col items-center justify-center gap-1.5 cursor-pointer transition-colors ${
                                callbackTime === slot.value
                                  ? 'border-gold bg-gold/10 text-gold'
                                  : 'border-neutral-800 bg-neutral-900 text-neutral-400 hover:border-neutral-700'
                              }`}
                            >
                              <slot.icon className="w-4 h-4" />
                              {slot.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full sm:w-auto px-8 py-3 bg-transparent text-white border-2 border-gold hover:bg-gold hover:text-black font-bold text-xs tracking-wider uppercase rounded transition-colors duration-300 cursor-pointer"
                      >
                        Request callback
                      </button>
                    </form>
                  )}
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
