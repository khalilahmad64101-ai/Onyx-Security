import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Tab, QuoteRequest, CallbackRequest, ContactMessage } from './types';
import { SECURITY_SERVICES, FACILITIES_SERVICES } from './data';

// Layout imports
import Header from './components/layout/Header';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Page imports
import HomeView from './pages/Home/HomeView';
import AboutView from './pages/About/AboutView';
import ServicesView from './pages/Services/ServicesView';
import FacilitiesView from './pages/Facilities/FacilitiesView';
import ContactView from './pages/Contact/ContactView';
import AdminView from './pages/Admin/AdminView';

// Modal imports
import { 
  ServiceDetailModal, 
  FacilityDetailModal, 
  QuickCallbackModal, 
  QuickQuoteModal 
} from './components/common/Modals';

// Import the generated security van image asset
import vanImage from './assets/images/onyx_security_van_1782715108587.jpg';

// Demo seed data
const DEMO_QUOTES: QuoteRequest[] = [
  {
    id: 'q-demo-1',
    name: 'Mark Zuckerberg (Meta UK)',
    email: 'mzac@meta.com',
    phone: '+44 7911 123456',
    serviceType: 'corporate',
    location: 'Spinningfields, Manchester',
    details: 'Need 3 full-time executive front-of-house security guards, shift coverage 24/7. High hospitality skill needed.',
    dateSubmitted: new Date(Date.now() - 3600000 * 4).toISOString(),
    status: 'pending'
  },
  {
    id: 'q-demo-2',
    name: 'Marcus Rashford (Man Utd Events)',
    email: 'marcus@manutd.com',
    phone: '+44 7822 987654',
    serviceType: 'events',
    location: 'Old Trafford Stadium, M16',
    details: 'VIP stewarding and crowd control for a private corporate charity tournament on 15th July. Estimate 15 SIA door supervisors.',
    dateSubmitted: new Date(Date.now() - 3600000 * 24).toISOString(),
    status: 'contacted'
  },
  {
    id: 'q-demo-3',
    name: 'Sarah Jenkins (MediaCity Office Complex)',
    email: 's.jenkins@mediacity.co.uk',
    phone: '+44 161 555 8899',
    serviceType: 'cctv',
    location: 'Salford Quays, Manchester',
    details: 'Remote active CCTV monitoring integration request for 12 HD analytical cameras. Alarm dispatch services desired.',
    dateSubmitted: new Date(Date.now() - 3600000 * 48).toISOString(),
    status: 'completed'
  }
];

const DEMO_CALLBACKS: CallbackRequest[] = [
  {
    id: 'c-demo-1',
    name: 'Gareth Southgate (The Albert Hall)',
    phone: '07733 445566',
    bestTime: 'morning',
    dateSubmitted: new Date(Date.now() - 1800000).toISOString(),
    status: 'pending'
  },
  {
    id: 'c-demo-2',
    name: 'Pep Guardiola (City Construction Ltd)',
    phone: '07911 223344',
    bestTime: 'urgent',
    dateSubmitted: new Date(Date.now() - 3600000 * 12).toISOString(),
    status: 'completed'
  }
];

const DEMO_MESSAGES: ContactMessage[] = [
  {
    id: 'm-demo-1',
    name: 'Sir Alex Ferguson',
    email: 'fergie@vintage.com',
    subject: 'Operational feedback',
    message: 'Your door supervisors at the Deansgate corporate Gala were exceptional. Polite, professional, and disciplined. Will hire again.',
    dateSubmitted: new Date(Date.now() - 3600000 * 30).toISOString()
  }
];

export default function App() {
  const [currentTab, setCurrentTab] = useState<Tab>('home');
  
  // Selection states for detail modals
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [selectedFacilityId, setSelectedFacilityId] = useState<string | null>(null);

  // Quick action modal triggers
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isCallbackModalOpen, setIsCallbackModalOpen] = useState(false);

  // CRM Databases
  const [quotes, setQuotes] = useState<QuoteRequest[]>([]);
  const [callbacks, setCallbacks] = useState<CallbackRequest[]>([]);
  const [messages, setMessages] = useState<ContactMessage[]>([]);

  // Load database from local storage
  useEffect(() => {
    const localQuotes = localStorage.getItem('onyx_quotes');
    const localCallbacks = localStorage.getItem('onyx_callbacks');
    const localMessages = localStorage.getItem('onyx_messages');

    if (localQuotes) setQuotes(JSON.parse(localQuotes));
    if (localCallbacks) setCallbacks(JSON.parse(localCallbacks));
    if (localMessages) setMessages(JSON.parse(localMessages));
  }, []);

  // Save changes helper
  const saveState = (newQuotes: QuoteRequest[], newCallbacks: CallbackRequest[], newMessages: ContactMessage[]) => {
    setQuotes(newQuotes);
    setCallbacks(newCallbacks);
    setMessages(newMessages);
    localStorage.setItem('onyx_quotes', JSON.stringify(newQuotes));
    localStorage.setItem('onyx_callbacks', JSON.stringify(newCallbacks));
    localStorage.setItem('onyx_messages', JSON.stringify(newMessages));
  };

  // 1. Submit handlers
  const handleQuoteSubmit = (q: { name: string; email: string; phone: string; serviceType: string; location: string; details: string }) => {
    const newQuote: QuoteRequest = {
      id: `q-${Date.now()}`,
      ...q,
      dateSubmitted: new Date().toISOString(),
      status: 'pending'
    };
    saveState([newQuote, ...quotes], callbacks, messages);
  };

  const handleCallbackSubmit = (c: { name: string; phone: string; bestTime: string }) => {
    const newCallback: CallbackRequest = {
      id: `c-${Date.now()}`,
      ...c,
      dateSubmitted: new Date().toISOString(),
      status: 'pending'
    };
    saveState(quotes, [newCallback, ...callbacks], messages);
  };

  const handleMessageSubmit = (m: { name: string; email: string; subject: string; message: string }) => {
    const newMessage: ContactMessage = {
      id: `m-${Date.now()}`,
      ...m,
      dateSubmitted: new Date().toISOString()
    };
    saveState(quotes, callbacks, [newMessage, ...messages]);
  };

  // 2. CRM Update handlers
  const handleUpdateQuoteStatus = (id: string, status: 'pending' | 'contacted' | 'completed') => {
    const updated = quotes.map(q => q.id === id ? { ...q, status } : q);
    saveState(updated, callbacks, messages);
  };

  const handleUpdateCallbackStatus = (id: string, status: 'pending' | 'completed') => {
    const updated = callbacks.map(c => c.id === id ? { ...c, status } : c);
    saveState(quotes, updated, messages);
  };

  const handleClearData = () => {
    saveState([], [], []);
  };

  const handleSeedData = () => {
    saveState(DEMO_QUOTES, DEMO_CALLBACKS, DEMO_MESSAGES);
  };

  const activeService = SECURITY_SERVICES.find(s => s.id === selectedServiceId) || null;
  const activeFacility = FACILITIES_SERVICES.find(f => f.id === selectedFacilityId) || null;
  const totalSubmissionsExist = quotes.length > 0 || callbacks.length > 0 || messages.length > 0;

  return (
    <div className="min-h-screen bg-onyx text-neutral-100 flex flex-col justify-between selection:bg-gold selection:text-black">
      
      {/* 1. Header with custom brand logo & golden line */}
      <Header currentTab={currentTab} setCurrentTab={setCurrentTab} />

      {/* 2. Structured navigation bar matching screenshot */}
      <Navbar 
        currentTab={currentTab} 
        setCurrentTab={setCurrentTab}
        onSelectService={(id) => setSelectedServiceId(id)}
        onSelectFacility={(id) => setSelectedFacilityId(id)}
        hasSubmissions={totalSubmissionsExist}
      />

      {/* 3. Main Views Content Block */}
      <main className="flex-1 bg-onyx">
        <AnimatePresence mode="wait">
          
          {/* HOME TAB */}
          {currentTab === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-0"
            >
              <HomeView 
                setCurrentTab={setCurrentTab}
                onOpenQuote={() => setIsQuoteModalOpen(true)}
                onOpenCallback={() => setIsCallbackModalOpen(true)}
                onSelectService={(id) => setSelectedServiceId(id)}
                onSelectFacility={(id) => setSelectedFacilityId(id)}
              />
            </motion.div>
          )}

          {/* ABOUT US TAB */}
          {currentTab === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <AboutView />
            </motion.div>
          )}

          {/* SECURITY SERVICES TAB */}
          {currentTab === 'services' && (
            <motion.div
              key="services"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <ServicesView 
                onSelectService={(id) => setSelectedServiceId(id)} 
                selectedServiceId={selectedServiceId}
              />
            </motion.div>
          )}

          {/* FACILITIES MANAGEMENT TAB */}
          {currentTab === 'facilities' && (
            <motion.div
              key="facilities"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <FacilitiesView 
                onSelectFacility={(id) => setSelectedFacilityId(id)} 
                selectedFacilityId={selectedFacilityId}
              />
            </motion.div>
          )}

          {/* CONTACT TAB */}
          {currentTab === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <ContactView 
                onSubmitQuote={handleQuoteSubmit}
                onSubmitCallback={handleCallbackSubmit}
                onSubmitMessage={handleMessageSubmit}
                preSelectedService={selectedServiceId || 'events'}
              />
            </motion.div>
          )}

          {/* ADMIN STAFF PORTAL TAB */}
          {currentTab === 'admin' && (
            <motion.div
              key="admin"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <AdminView 
                quotes={quotes}
                callbacks={callbacks}
                messages={messages}
                onUpdateQuoteStatus={handleUpdateQuoteStatus}
                onUpdateCallbackStatus={handleUpdateCallbackStatus}
                onClearData={handleClearData}
                onSeedData={handleSeedData}
              />
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* 4. Service Detail Modals */}
      <ServiceDetailModal 
        isOpen={selectedServiceId !== null && currentTab === 'services'} 
        onClose={() => setSelectedServiceId(null)}
        service={activeService}
        onSubmitQuote={handleQuoteSubmit}
      />

      <FacilityDetailModal 
        isOpen={selectedFacilityId !== null && currentTab === 'facilities'} 
        onClose={() => setSelectedFacilityId(null)}
        facility={activeFacility}
        onSubmitQuote={handleQuoteSubmit}
      />

      {/* 5. Quick Action Popup Modals */}
      <QuickCallbackModal 
        isOpen={isCallbackModalOpen} 
        onClose={() => setIsCallbackModalOpen(false)}
        onSubmitCallback={handleCallbackSubmit}
      />

      <QuickQuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)}
        onSubmitQuote={handleQuoteSubmit}
      />

      {/* 6. Corporate Footer with secret operations desk bridge */}
      <Footer 
        currentTab={currentTab} 
        setCurrentTab={setCurrentTab} 
        onSelectService={(id) => setSelectedServiceId(id)}
        onSelectFacility={(id) => setSelectedFacilityId(id)}
      />

    </div>
  );
}
