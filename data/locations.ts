export interface LocationBranch {
  id: string;
  name: string;
  tagline: string;
  badge: string;
  address: string;
  city: string;
  district: string;
  postalCode: string;
  phone: string;
  email: string;
  manager: string;
  floorSpace: string;
  hours: {
    weekday: string;
    saturday: string;
    sunday: string;
  };
  status: 'Open Now' | 'Closes at 10 PM' | '24/7 Fast Locker';
  isOpen: boolean;
  amenities: {
    name: string;
    icon: string;
    description: string;
  }[];
  experienceZones: string[];
  coordinates: {
    lat: number;
    lng: number;
    svgX: number; // for custom map visualizer (0 to 100%)
    svgY: number;
  };
  parkingInfo: string;
  transitAccess: string;
  servicesAvailable: string[];
  image: string;
}

export const STORE_LOCATIONS: LocationBranch[] = [
  {
    id: 'downtown-flagship',
    name: 'Downtown Flagship Megamart & Experience Center',
    tagline: 'Our premier multi-level electronics destination with soundproof acoustic lounges and 8K home theaters.',
    badge: 'Flagship Showroom',
    address: '742 Grand Metropolis Boulevard, Suite 100',
    district: 'Tech Corridor / Financial District',
    city: 'Metropolis',
    postalCode: '94103',
    phone: '+1 (800) 865-8267 • Ext 101',
    email: 'downtown@voltcore-mart.com',
    manager: 'Marcus Vance (Senior Experience Director)',
    floorSpace: '28,000 sq. ft (3 Floors)',
    hours: {
      weekday: '09:00 AM – 10:00 PM',
      saturday: '09:00 AM – 11:00 PM',
      sunday: '10:00 AM – 08:00 PM'
    },
    status: 'Open Now',
    isOpen: true,
    amenities: [
      { name: '8K Dolby Atmos Cinema', icon: 'Tv', description: 'Private 12-seat acoustic listening room for display & sound demo' },
      { name: 'Apple & Sony Pro Studio', icon: 'Laptop', description: 'Certified hands-on workstation setup with calibrated color monitors' },
      { name: 'High-Speed Click & Collect', icon: 'Zap', description: 'Dedicated counter ready for curbside or in-store 15-min pickup' },
      { name: 'Certified Hardware Repair Lab', icon: 'Wrench', description: 'Same-day diagnostics, thermal repasting, and warranty service' }
    ],
    experienceZones: [
      'Level 1: Flagship Audio & Mobile Ecosystem',
      'Level 2: 4K/8K OLED Home Theaters & Smart Home Living',
      'Level 3: Pro Computing, Flight Simulators & Creator Studio'
    ],
    coordinates: {
      lat: 37.7845,
      lng: -122.4042,
      svgX: 38,
      svgY: 42
    },
    parkingInfo: 'Underground Level P1 & P2: Complimentary 2 hours parking with validation. 12x EV Superchargers available.',
    transitAccess: 'Metro Grand Station Exit 4 (Direct pedestrian tunnel to store lobby) & Streetcar Lines 12/14.',
    servicesAvailable: ['1-on-1 Tech Concierge', 'Corporate Purchase Inquiries', 'Trade-In Evaluation Desk', 'Curbside Express Loading'],
    image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'westside-techpark',
    name: 'Westside Silicon Tech Park & B2B Center',
    tagline: 'Designed for enterprise clients, engineering teams, and pro gaming workstation consultations.',
    badge: 'Enterprise & B2B Hub',
    address: '1080 Innovation Way, Campus Quad B',
    district: 'Silicon Tech Park',
    city: 'Westside Heights',
    postalCode: '94025',
    phone: '+1 (800) 865-8267 • Ext 102',
    email: 'westside-b2b@voltcore-mart.com',
    manager: 'Elena Rostova (Enterprise Solutions Lead)',
    floorSpace: '18,500 sq. ft',
    hours: {
      weekday: '08:00 AM – 09:00 PM',
      saturday: '09:00 AM – 08:00 PM',
      sunday: '10:00 AM – 06:00 PM'
    },
    status: 'Open Now',
    isOpen: true,
    amenities: [
      { name: 'B2B Client Boardroom', icon: 'Building', description: 'Private conference space for enterprise procurement and live testing' },
      { name: 'Liquid-Cooled Benchmarking', icon: 'Cpu', description: 'Real-time rendering stress-tests on Alienware & ROG battlestations' },
      { name: 'Bulk Order Fulfillment Dock', icon: 'Truck', description: 'Direct freight loading bays for high-volume commercial shipments' },
      { name: 'Corporate Account Desk', icon: 'FileText', description: 'Net-30 commercial credit, tax exemption and contract billing' }
    ],
    experienceZones: [
      'Zone A: Commercial Display Walls & Video Conferencing',
      'Zone B: High-Performance Multi-GPU Computing & AI Workstations',
      'Zone C: Pro Cinema Drones & Broadcasting Cameras'
    ],
    coordinates: {
      lat: 37.7512,
      lng: -122.4418,
      svgX: 22,
      svgY: 65
    },
    parkingInfo: 'Dedicated surface lot with 150+ visitor spots. Commercial vehicle loading dock accessible via Gate 3.',
    transitAccess: 'Rapid Express Bus Route 70 (Tech Park Central Stop) & Shuttle service to Caltrain Station.',
    servicesAvailable: ['Corporate Hardware Leasing', 'Custom Rig Assembly', 'Government & Education Discounts', 'On-Site IT Deployment'],
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'uptown-gallery',
    name: 'Uptown Smart Living & Audiophile Gallery',
    tagline: 'An architectural boutique showcasing invisible smart home audio, motorized shades, and custom OLED framing.',
    badge: 'Luxury Boutique & Hi-Fi',
    address: '450 Highland Avenue, Fashion & Design District',
    district: 'Uptown Promenade',
    city: 'Metropolis',
    postalCode: '94115',
    phone: '+1 (800) 865-8267 • Ext 103',
    email: 'uptown@voltcore-mart.com',
    manager: 'Julian Sterling (Acoustics & Architecture Specialist)',
    floorSpace: '12,000 sq. ft',
    hours: {
      weekday: '10:00 AM – 08:00 PM',
      saturday: '10:00 AM – 09:00 PM',
      sunday: '11:00 AM – 07:00 PM'
    },
    status: 'Open Now',
    isOpen: true,
    amenities: [
      { name: 'Sennheiser & Focal Hi-Fi Lounge', icon: 'Headphones', description: 'Dedicated DAC/amp stations with reference vinyl & DSD lossless audio' },
      { name: 'Architectural Smart Home Mockup', icon: 'Home', description: 'Fully integrated living room, bedroom, and patio automation' },
      { name: 'Custom Cable & Interconnect Desk', icon: 'Sliders', description: 'Handcrafted copper and silver audio interconnect terminations' },
      { name: 'Espresso Bar & Client Lounge', icon: 'Coffee', description: 'Complimentary artisan roast while you test premium equipment' }
    ],
    experienceZones: [
      'Studio 1: Pure Analog & Valve Tube Audio Suites',
      'Studio 2: Invisible Architectural Wall Speakers (Sonos & Bose)',
      'Studio 3: Luxury Samsung The Frame & Bang & Olufsen Partnerships'
    ],
    coordinates: {
      lat: 37.8012,
      lng: -122.4285,
      svgX: 74,
      svgY: 28
    },
    parkingInfo: 'Valet parking available at Highland Promenade entrance. Validated garage parking across the avenue.',
    transitAccess: 'Cable Car line (Highland Stop) and City Bus 22 & 3. 5-minute walk from Uptown Plaza.',
    servicesAvailable: ['In-Home Acoustic Consultation', 'Smart Home Blueprint Estimator', 'White-Glove Delivery & Calibration', 'VIP After-Hours Private Access'],
    image: 'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'airport-express',
    name: 'Metropolis International Airport Fast-Pickup Hub',
    tagline: 'Express 30-minute click & collect counter and travel tech essentials located in Terminal 2.',
    badge: 'Express Hub & Travel Tech',
    address: 'Terminal 2 Departure Concourse, Level 2 (Near Gate 34)',
    district: 'International Airport',
    city: 'Metropolis',
    postalCode: '94128',
    phone: '+1 (800) 865-8267 • Ext 104',
    email: 'airport@voltcore-mart.com',
    manager: 'Sarah Lin (Airport Operations Manager)',
    floorSpace: '4,500 sq. ft + 24/7 Smart Lockers',
    hours: {
      weekday: '05:00 AM – 11:30 PM (Lockers 24/7)',
      saturday: '05:00 AM – 11:30 PM (Lockers 24/7)',
      sunday: '05:00 AM – 11:30 PM (Lockers 24/7)'
    },
    status: 'Open Now',
    isOpen: true,
    amenities: [
      { name: '24/7 PIN Smart Lockers', icon: 'Key', description: 'Retrieve pre-ordered items anytime with an instant SMS unlock code' },
      { name: 'Travel Tech Voltage Testing', icon: 'Shield', description: 'Universal adapters and worldwide dual-voltage compatibility checks' },
      { name: 'Emergency Flight Backup Gear', icon: 'BatteryCharging', description: 'High-wattage GaN chargers, power banks, and noise-cancelling buds' },
      { name: 'Duty-Free Export Assistance', icon: 'Globe', description: 'Instant VAT/Tax refund stamping documentation support' }
    ],
    experienceZones: [
      'Zone 1: Active Noise Cancelling Travel Hub (Sony, Bose, Apple)',
      'Zone 2: Compact Travel Photography & Action Cameras',
      'Zone 3: 24/7 Automated Pre-Order Locker Wall'
    ],
    coordinates: {
      lat: 37.6213,
      lng: -122.3790,
      svgX: 62,
      svgY: 82
    },
    parkingInfo: 'Terminal 2 Short-Term Garage. First 30 minutes free for VoltCore order pickup with barcode validation.',
    transitAccess: 'Direct connection to AirTrain Station (Red/Blue line) and Airport BART Station.',
    servicesAvailable: ['30-Min Fast Order Staging', 'International Voltage Advice', 'Global SIM / eSIM Provisioning', 'Luggage Tech Inspection'],
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1200&q=80'
  }
];
