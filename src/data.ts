import { SecurityService, FacilityItem } from './types';

export const SLIDES = [
  {
    id: 1,
    title: 'Professional Security',
    subtitle: 'Onyx Security provides security officers that are highly trained and qualified to secure People, Property and Assets.',
    cta: 'View More'
  },
  {
    id: 2,
    title: 'Event & Shows Security',
    subtitle: 'Hosting a large event or show can be challenging, especially with large crowds attending. Here at Onyx Security, we use our vast experience to ensure your large event or show will run smoothly and securely for all those taking part.',
    cta: 'View More'
  },
  {
    id: 3,
    title: 'Security Camera Solutions',
    subtitle: 'Onyx Security Camera Solutions can provide Commercial and Domestic high Tech Surveillance systems which allow you to deter crime. We can help in installing, Servicing and Monitoring your surveillance system.',
    cta: 'View More'
  },
  {
    id: 4,
    title: 'Facilities Management',
    subtitle: "Onyx security can provide individual or integrated solution services for the workplace. Giving you full benefits of the facility's support services such as cleaning, food catering, Window cleaning, Gritting and Groundwork Maintenance.",
    cta: 'View More'
  },
  {
    id: 5,
    title: 'Onyx Security',
    subtitle: 'Professional, reliable, elite security officers protecting your assets and people across the UK.',
    cta: 'View More',
    hideText: true
  }
];

export const SECURITY_SERVICES: SecurityService[] = [
  {
    id: 'events',
    title: 'Events & Shows Security',
    slug: 'events-shows',
    shortDesc: 'Comprehensive crowd control, VIP protection, and stewarding for festivals, sports tournaments, and high-profile shows.',
    longDesc: 'At Onyx Security, we understand that event security requires a balanced approach of absolute vigilance and high-caliber customer service. Our event teams are trained in crowd control, conflict resolution, access management, and emergency response. We work closely with local authorities, venue managers, and event organizers to draft comprehensive security risk assessments and emergency evacuation plans, ensuring a safe, memorable, and seamless experience for all guests.',
    iconName: 'ShieldAlert'
  },
  {
    id: 'retail',
    title: 'Retail & Loss Prevention',
    slug: 'retail',
    shortDesc: 'Deterring theft, safeguarding assets, and providing a reassuring physical presence in high-street shops and malls.',
    longDesc: 'Our retail security officers and store detectives are experts in stock loss reduction and behavior profiling. We provide uniform presence to act as a powerful visual deterrent, while also utilizing covert detectives to catch shoplifters in action. Onyx officers are trained to work alongside store staff, conduct safe civil recoveries, gather standard-compliant evidence for police prosecution, and handle delicate situations with professionalism.',
    iconName: 'ShoppingBag'
  },
  {
    id: 'corporate',
    title: 'Corporate Guarding',
    slug: 'corporate',
    shortDesc: 'Elite static guarding, access control, and concierge services for corporate headquarters and commercial buildings.',
    longDesc: 'First impressions are lasting impressions. Onyx Corporate Guarding couples elite physical protection with first-class front-of-house concierge service. Our officers are highly articulate, professional, and trained to blend into your corporate environment. Key duties include visitor logging, electronic access control, perimeter patrols, mailroom screening, fire marshalling, and out-of-hours building lockups.',
    iconName: 'Building2'
  },
  {
    id: 'construction',
    title: 'Construction Site Security',
    slug: 'construction',
    shortDesc: 'Securing construction sites, tools, and heavy machinery against vandalism, theft, and unauthorized access.',
    longDesc: 'Construction sites are premier targets for tool theft, copper wire theft, and general trespassing. Onyx Security offers robust protection through combinations of regular perimeter patrols, entry gate logging, out-of-hours watchmen, and smart biometric access gates. We enforce safety equipment compliance (PPE checks) for all personnel entering the site and keep rigorous logs of all deliveries to protect your project budget.',
    iconName: 'HardHat'
  },
  {
    id: 'bars-clubs',
    title: 'Bars & Clubs Door Supervision',
    slug: 'bars-clubs',
    shortDesc: 'highly qualified door supervisors protecting licensing laws, venue safety, and customer welfare.',
    longDesc: 'The reputation of your venue rests heavily on your security staff. Onyx door supervisors are extensively trained in customer hospitality, de-escalation, licensing law compliance, and drug detection. We enforce age verification (Challenge 25) with zero compromises, manage entry queues elegantly, and work hand-in-hand with venue management to maintain a safe, welcoming, and compliant drinking environment.',
    iconName: 'Wine'
  },
  {
    id: 'vacant-property',
    title: 'Vacant Property Protection',
    slug: 'vacant-property',
    shortDesc: 'Inspections, boarding-up, and continuous monitoring of unoccupied properties to prevent squatting and degradation.',
    longDesc: 'Unoccupied buildings are prone to squatting, arson, metal stripping, and utility leaks. Onyx provides standard-compliant vacant property inspections (including meter readings, photographic reports, and boundary checks). We can install secure wire-free alarms, boarding services, and deploy static guards or guard dogs where high risk exists, satisfying your insurance provider requirements.',
    iconName: 'Home'
  },
  {
    id: 'cctv',
    title: 'CCTV & Remote Surveillance',
    slug: 'cctv',
    shortDesc: 'Active remote video monitoring, alarm response, and mobile patrols for complete peace of mind.',
    longDesc: 'Harness the power of instant detection. Our state-of-the-art remote CCTV monitoring services use intelligent analytic cameras to detect intruders the second they cross a boundary. An alarm is immediately triggered in our 24/7 command center, where highly trained operators can issue real-time audio warnings over speakers to deter intruders, dispatch our mobile patrol units, and coordinate with emergency response services.',
    iconName: 'Tv'
  }
];

export const FACILITIES_SERVICES: FacilityItem[] = [
  {
    id: 'concierge',
    title: 'Concierge & Front of House',
    slug: 'concierge-front',
    description: 'Providing friendly, professional reception staff who handle administration and visitor logging with an alert security mindset.',
    iconName: 'Users'
  },
  {
    id: 'keyholding',
    title: 'Key Holding & Alarm Response',
    slug: 'keyholding-response',
    description: 'We store your property keys securely. If an alarm triggers at night, our rapid mobile response team attends the scene immediately so you do not have to put your staff at risk.',
    iconName: 'Key'
  },
  {
    id: 'cleaning',
    title: 'Commercial Cleaning & Janitorial',
    slug: 'commercial-cleaning',
    description: 'Bespoke, professional office and venue cleaning services tailored to fit around your operational hours, using eco-friendly materials.',
    iconName: 'Sparkles'
  },
  {
    id: 'maintenance',
    title: 'Property Maintenance',
    slug: 'property-maintenance',
    description: 'Reactive and planned building maintenance including electrical checks, minor plumbing, and safety certifications for landlords.',
    iconName: 'Wrench'
  },
  {
    id: 'fire-safety',
    title: 'Fire Safety & Risk Assessment',
    slug: 'fire-safety',
    description: 'Conducting comprehensive commercial fire safety assessments, installing and testing fire alarm panels, emergency lighting, and fire extinguishers.',
    iconName: 'Flame'
  }
];
