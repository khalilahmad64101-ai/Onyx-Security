import React, { useState } from 'react';
import { Shield, CheckCircle2, PhoneCall, Trash2, Database, Eye, UserCheck, AlertTriangle, FileText } from 'lucide-react';
import { QuoteRequest, CallbackRequest, ContactMessage } from '../../types';

interface AdminViewProps {
  quotes: QuoteRequest[];
  callbacks: CallbackRequest[];
  messages: ContactMessage[];
  onUpdateQuoteStatus: (id: string, status: 'pending' | 'contacted' | 'completed') => void;
  onUpdateCallbackStatus: (id: string, status: 'pending' | 'completed') => void;
  onClearData: () => void;
  onSeedData: () => void;
}

export default function AdminView({
  quotes,
  callbacks,
  messages,
  onUpdateQuoteStatus,
  onUpdateCallbackStatus,
  onClearData,
  onSeedData
}: AdminViewProps) {
  const [activeTab, setActiveTab] = useState<'quotes' | 'callbacks' | 'messages'>('quotes');

  // Simple statistics
  const totalInquiries = quotes.length + callbacks.length + messages.length;
  const pendingQuotes = quotes.filter(q => q.status === 'pending').length;
  const pendingCallbacks = callbacks.filter(c => c.status === 'pending').length;

  return (
    <div className="bg-onyx py-12 text-white font-sans selection:bg-gold selection:text-black font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-6 border-b border-neutral-800">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-red-500/15 border border-red-500/30 text-red-400 font-mono text-[10px] uppercase font-bold px-2 py-1 rounded">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping"></span>
              Internal Operations Command Portal
            </div>
            <h2 className="font-display text-3xl font-extrabold text-white mt-2">Onyx Officer Dispatch Desk</h2>
            <p className="text-neutral-500 text-xs mt-0.5">Live monitoring of client leads, estimate calculations, and rapid callback bookings.</p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={onSeedData}
              className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-gold border border-gold/20 hover:border-gold/50 rounded text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition-all animate-in fade-in"
            >
              <Database className="w-3.5 h-3.5" />
              Seed Demo Leads
            </button>
            <button
              onClick={onClearData}
              className="px-4 py-2 bg-red-950/20 hover:bg-red-950/40 text-red-400 border border-red-900/40 rounded text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition-all"
            >
              <Trash2 className="w-3.5 h-3.5" />
              Reset All
            </button>
          </div>
        </div>

        {/* Top Mini KPI Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-charcoal border border-neutral-800 p-5 rounded-xl">
            <span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-widest">Active Leads Ledger</span>
            <div className="text-3xl font-extrabold text-white mt-1.5">{totalInquiries}</div>
            <p className="text-neutral-500 text-[10px] mt-1">Total combined operations items</p>
          </div>

          <div className="bg-charcoal border border-neutral-800 p-5 rounded-xl">
            <span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-widest">Pending Quotes</span>
            <div className="text-3xl font-extrabold text-gold mt-1.5">{pendingQuotes}</div>
            <p className="text-neutral-500 text-[10px] mt-1">Cost assessments awaiting review</p>
          </div>

          <div className="bg-charcoal border border-neutral-800 p-5 rounded-xl">
            <span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-widest">Pending Callbacks</span>
            <div className="text-3xl font-extrabold text-amber-400 mt-1.5">{pendingCallbacks}</div>
            <p className="text-neutral-500 text-[10px] mt-1">Active phone requests scheduled</p>
          </div>

          <div className="bg-charcoal border border-neutral-800 p-5 rounded-xl">
            <span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-widest">System SLA Integrity</span>
            <div className="text-3xl font-extrabold text-emerald-400 mt-1.5">100%</div>
            <p className="text-neutral-500 text-[10px] mt-1">SIA compliance checklist active</p>
          </div>
        </div>

        {/* Main Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main List Section */}
          <div className="lg:col-span-8 bg-charcoal border border-neutral-800 rounded-xl overflow-hidden animate-in fade-in">
            {/* Inner Desk Tabs */}
            <div className="bg-neutral-900 border-b border-neutral-800 p-2 flex gap-2">
              {[
                { id: 'quotes', label: `Estimates (${quotes.length})`, icon: FileText },
                { id: 'callbacks', label: `Callbacks (${callbacks.length})`, icon: PhoneCall },
                { id: 'messages', label: `Inquiries (${messages.length})`, icon: Eye }
              ].map((sub) => (
                <button
                  key={sub.id}
                  onClick={() => setActiveTab(sub.id as any)}
                  className={`px-4 py-2 rounded text-xs font-bold flex items-center gap-1.5 cursor-pointer transition-colors ${
                    activeTab === sub.id
                      ? 'bg-gold text-black'
                      : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50'
                  }`}
                >
                  <sub.icon className="w-3.5 h-3.5" />
                  {sub.label}
                </button>
              ))}
            </div>

            {/* List Content */}
            <div className="p-4 sm:p-6 min-h-[350px]">
              
              {/* Estimates List */}
              {activeTab === 'quotes' && (
                <div className="space-y-4 animate-in fade-in">
                  {quotes.length > 0 ? (
                    quotes.map((quote) => (
                      <div key={quote.id} className="border border-neutral-800 bg-neutral-900/40 rounded-lg p-4 space-y-3">
                        <div className="flex justify-between items-start gap-2">
                          <div>
                            <span className="text-[9px] font-mono text-gold font-semibold uppercase">{quote.serviceType} SECURITY</span>
                            <h4 className="text-sm font-bold text-white mt-0.5">{quote.name}</h4>
                            <div className="flex flex-wrap gap-x-3 text-[11px] text-neutral-400 mt-1">
                              <span>📧 {quote.email}</span>
                              <span>📞 {quote.phone}</span>
                              <span>📍 {quote.location}</span>
                            </div>
                          </div>
                          <select
                            value={quote.status}
                            onChange={(e) => onUpdateQuoteStatus(quote.id, e.target.value as any)}
                            className={`text-[10px] font-bold px-2 py-1 rounded border cursor-pointer focus:outline-none ${
                              quote.status === 'completed'
                                ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                                : quote.status === 'contacted'
                                ? 'bg-blue-500/10 text-blue-400 border-blue-500/30'
                                : 'bg-gold/10 text-gold border-gold/30'
                            }`}
                          >
                            <option value="pending" className="bg-neutral-900 text-white">Pending</option>
                            <option value="contacted" className="bg-neutral-900 text-white">Contacted</option>
                            <option value="completed" className="bg-neutral-900 text-white">Completed</option>
                          </select>
                        </div>

                        {quote.details && (
                          <p className="text-xs text-neutral-400 font-light border-t border-neutral-800/40 pt-2 italic">
                            &ldquo;{quote.details}&rdquo;
                          </p>
                        )}
                        <div className="text-[9px] text-neutral-500 font-mono text-right">
                          Submitted: {new Date(quote.dateSubmitted).toLocaleString()}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-16 text-neutral-500 text-xs">
                      No active security estimate requests registered. Click "Seed Demo Leads" to check capabilities.
                    </div>
                  )}
                </div>
              )}

              {/* Callbacks List */}
              {activeTab === 'callbacks' && (
                <div className="space-y-4 animate-in fade-in">
                  {callbacks.length > 0 ? (
                    callbacks.map((call) => (
                      <div key={call.id} className="border border-neutral-800 bg-neutral-900/40 rounded-lg p-4 flex justify-between items-center gap-4">
                        <div className="space-y-1">
                          <h4 className="text-sm font-bold text-white">{call.name}</h4>
                          <div className="flex gap-4 text-xs text-neutral-400">
                            <span>📞 {call.phone}</span>
                            <span>⏰ Slot: <strong className="text-amber-400 capitalize">{call.bestTime}</strong></span>
                          </div>
                          <div className="text-[9px] text-neutral-500 font-mono">
                            Scheduled: {new Date(call.dateSubmitted).toLocaleString()}
                          </div>
                        </div>

                        <button
                          onClick={() => onUpdateCallbackStatus(call.id, call.status === 'completed' ? 'pending' : 'completed')}
                          className={`text-xs font-bold px-4 py-2 rounded flex items-center gap-1.5 cursor-pointer transition-colors ${
                            call.status === 'completed'
                              ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                              : 'bg-neutral-800 text-white hover:bg-neutral-700 border border-neutral-700'
                          }`}
                        >
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          {call.status === 'completed' ? 'Completed' : 'Mark Done'}
                        </button>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-16 text-neutral-500 text-xs">
                      No active callback schedules registered.
                    </div>
                  )}
                </div>
              )}

              {/* Inquiries list */}
              {activeTab === 'messages' && (
                <div className="space-y-4 animate-in fade-in">
                  {messages.length > 0 ? (
                    messages.map((msg) => (
                      <div key={msg.id} className="border border-neutral-800 bg-neutral-900/40 rounded-lg p-4 space-y-2">
                        <div className="flex justify-between items-start gap-2">
                          <div>
                            <h4 className="text-xs font-semibold text-gold uppercase tracking-wider">{msg.subject}</h4>
                            <h3 className="text-sm font-bold text-white mt-1">{msg.name} ({msg.email})</h3>
                          </div>
                          <span className="text-[9px] font-mono bg-neutral-800 text-neutral-400 px-2 py-0.5 rounded">
                            General Lead
                          </span>
                        </div>
                        <p className="text-xs text-neutral-300 font-light border-t border-neutral-800/40 pt-2 leading-relaxed">
                          {msg.message}
                        </p>
                        <div className="text-[9px] text-neutral-500 font-mono text-right">
                          Logged: {new Date(msg.dateSubmitted).toLocaleString()}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-16 text-neutral-500 text-xs">
                      No operational inquiries filed yet.
                    </div>
                  )}
                </div>
              )}

            </div>
          </div>

          {/* Side Panel: Security Officer Logs */}
          <div className="lg:col-span-4 bg-charcoal border border-neutral-800 p-6 rounded-xl space-y-6">
            <div>
              <h3 className="font-display text-base font-bold text-white flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-gold" />
                SIA Compliance Logs
              </h3>
              <p className="text-[10px] text-neutral-500 mt-1">System telemetry monitoring private security protocols.</p>
            </div>

            <div className="space-y-3.5 text-xs">
              <div className="border border-neutral-800 bg-neutral-900/60 p-3 rounded flex items-start gap-2.5">
                <UserCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-neutral-200">Daily Guard Briefing</div>
                  <p className="text-[10px] text-neutral-400 mt-0.5">34 static guards vetted and logged into Manchester perimeter spots.</p>
                </div>
              </div>

              <div className="border border-neutral-800 bg-neutral-900/60 p-3 rounded flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-neutral-200">System Checklist Audit</div>
                  <p className="text-[10px] text-neutral-400 mt-0.5">Venting audits complete. MediaCity security lines fully active.</p>
                </div>
              </div>

              <div className="border border-neutral-800 bg-neutral-900/60 p-3 rounded flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-neutral-200">Remote CCTV Handshake</div>
                  <p className="text-[10px] text-neutral-400 mt-0.5">Manchester Central Control synchronized with 180 site feeds.</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-800 text-[10px] text-neutral-500 leading-normal">
              Onyx Desk operates strictly inside Private Security Industry Act standards. Records are automatically stored in persistent browser local state registers.
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
