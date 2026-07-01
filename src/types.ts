export type Tab = 'home' | 'about' | 'services' | 'facilities' | 'contact' | 'admin';

export interface SecurityService {
  id: string;
  title: string;
  slug: string;
  shortDesc: string;
  longDesc: string;
  iconName: string;
}

export interface FacilityItem {
  id: string;
  title: string;
  slug: string;
  description: string;
  iconName: string;
}

export interface QuoteRequest {
  id: string;
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  location: string;
  details: string;
  dateSubmitted: string;
  status: 'pending' | 'contacted' | 'completed';
}

export interface CallbackRequest {
  id: string;
  name: string;
  phone: string;
  bestTime: string;
  dateSubmitted: string;
  status: 'pending' | 'completed';
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  dateSubmitted: string;
}
