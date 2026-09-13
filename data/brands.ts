export interface Brand {
  id: string;
  name: string;
  tagline: string;
  category: string;
  tier: 'Authorized Flagship Partner' | 'Master Distributor' | 'Certified Premium Retailer';
  origin: string;
  warranty: string;
  featuredProduct: string;
  logoText: string;
  color: string;
  badgeBg: string;
  accentHex: string;
  description: string;
}

export const BRANDS: Brand[] = [
  {
    id: 'apple',
    name: 'Apple',
    tagline: 'Think Different. Pro Silicon Ecosystem.',
    category: 'Computing, Mobile & Audio',
    tier: 'Authorized Flagship Partner',
    origin: 'Cupertino, USA',
    warranty: '1-Year Official AppleCare+ Ready',
    featuredProduct: 'MacBook Pro M3 Max & AirPods Max',
    logoText: 'APPLE',
    color: 'from-zinc-300 to-zinc-500',
    badgeBg: 'bg-zinc-800 text-zinc-100 border-zinc-700',
    accentHex: '#a1a1aa',
    description: 'Full authorized showroom lineup of MacBooks, iPads, Apple Displays, and Pro audio workstations.'
  },
  {
    id: 'sony',
    name: 'Sony',
    tagline: 'Be Moved. Master of Sound & Vision.',
    category: 'Audio, OLED TVs & Cameras',
    tier: 'Authorized Flagship Partner',
    origin: 'Tokyo, Japan',
    warranty: '2-Year Direct Sony Warranty',
    featuredProduct: 'WH-1000XM5 & Bravia XR OLED',
    logoText: 'SONY',
    color: 'from-amber-400 to-orange-500',
    badgeBg: 'bg-amber-950/60 text-amber-200 border-amber-800/50',
    accentHex: '#f59e0b',
    description: 'Industry-standard active noise cancelling headphones, cinema Alpha cameras, and BRAVIA XR master displays.'
  },
  {
    id: 'samsung',
    name: 'Samsung',
    tagline: 'Inspire the World, Create the Future.',
    category: 'Displays, Smart Home & Mobile',
    tier: 'Authorized Flagship Partner',
    origin: 'Seoul, South Korea',
    warranty: '2-Year Official Mart Guarantee',
    featuredProduct: 'Neo QLED 8K & Galaxy S24 Ultra',
    logoText: 'SAMSUNG',
    color: 'from-blue-400 to-cyan-500',
    badgeBg: 'bg-blue-950/60 text-blue-200 border-blue-800/50',
    accentHex: '#38bdf8',
    description: 'Leading Neo QLED 8K televisions, Odyssey ultra-wide gaming panels, and connected smart home appliances.'
  },
  {
    id: 'bose',
    name: 'Bose',
    tagline: 'Sound is Power. Spatial Acoustics.',
    category: 'Premium Audio & Soundbars',
    tier: 'Master Distributor',
    origin: 'Framingham, USA',
    warranty: '2-Year International Warranty',
    featuredProduct: 'QuietComfort Ultra & Smart Soundbar',
    logoText: 'BOSE',
    color: 'from-emerald-400 to-teal-500',
    badgeBg: 'bg-emerald-950/60 text-emerald-200 border-emerald-800/50',
    accentHex: '#10b981',
    description: 'Legendary acoustic architecture, immersive spatial audio, and cinematic soundbars in our dedicated demo lounge.'
  },
  {
    id: 'lg',
    name: 'LG Electronics',
    tagline: 'Life’s Good. OLED Pioneers.',
    category: 'OLED Smart TVs & Displays',
    tier: 'Authorized Flagship Partner',
    origin: 'Seoul, South Korea',
    warranty: '3-Year Panel Warranty Included',
    featuredProduct: 'OLED evo G4 Cinema Display',
    logoText: 'LG',
    color: 'from-rose-400 to-red-500',
    badgeBg: 'bg-rose-950/60 text-rose-200 border-rose-800/50',
    accentHex: '#f43f5e',
    description: 'The world’s benchmark for infinite contrast OLED panels, certified for Dolby Vision and 144Hz high-frame gaming.'
  },
  {
    id: 'alienware',
    name: 'Dell Alienware',
    tagline: 'High Performance Gaming & Workstations.',
    category: 'Gaming PCs, Laptops & QD-OLED',
    tier: 'Certified Premium Retailer',
    origin: 'Round Rock, USA',
    warranty: '2-Year On-Site ProSupport',
    featuredProduct: 'Aurora R16 & 34" Curved QD-OLED',
    logoText: 'ALIENWARE',
    color: 'from-cyan-400 to-blue-600',
    badgeBg: 'bg-cyan-950/60 text-cyan-200 border-cyan-800/50',
    accentHex: '#06b6d4',
    description: 'Cryo-tech cooled enterprise workstations and high-tier esports battlestations available for testing on-site.'
  },
  {
    id: 'canon',
    name: 'Canon',
    tagline: 'Delighting You Always. Cinema EOS.',
    category: 'Pro Cameras & Optics',
    tier: 'Authorized Flagship Partner',
    origin: 'Tokyo, Japan',
    warranty: '2-Year Canon Care Pro',
    featuredProduct: 'EOS R5 Mark II & RF Lenses',
    logoText: 'CANON',
    color: 'from-red-400 to-orange-500',
    badgeBg: 'bg-red-950/60 text-red-200 border-red-800/50',
    accentHex: '#ef4444',
    description: 'Broadcast-grade 8K mirrorless cinema cameras, RF hybrid optics, and studio lighting gear in our Creator Studio.'
  },
  {
    id: 'dji',
    name: 'DJI',
    tagline: 'The Future of Possible. Aerial Imaging.',
    category: 'Drones, Gimbals & Action Tech',
    tier: 'Authorized Flagship Partner',
    origin: 'Shenzhen, China',
    warranty: '1-Year DJI Care Enterprise Available',
    featuredProduct: 'Mavic 3 Pro & Ronin 4D',
    logoText: 'DJI',
    color: 'from-sky-400 to-indigo-500',
    badgeBg: 'bg-sky-950/60 text-sky-200 border-sky-800/50',
    accentHex: '#0284c7',
    description: 'Triple-camera Hasselblad aerial drones, handheld cine gimbals, and wireless transmission systems.'
  },
  {
    id: 'sonos',
    name: 'Sonos',
    tagline: 'The Ultimate Sound System for Every Room.',
    category: 'Multi-Room Audio & Dolby Atmos',
    tier: 'Certified Premium Retailer',
    origin: 'Santa Barbara, USA',
    warranty: '2-Year In-Store Replacement',
    featuredProduct: 'Era 300 Spatial Audio & Arc Soundbar',
    logoText: 'SONOS',
    color: 'from-amber-300 to-yellow-500',
    badgeBg: 'bg-amber-950/60 text-amber-200 border-amber-800/50',
    accentHex: '#eab308',
    description: 'Smart multi-room streaming, Trueplay room acoustic tuning, and invisible architectural in-wall speakers.'
  },
  {
    id: 'marshall',
    name: 'Marshall',
    tagline: 'Iconic Sound. Vintage Stage Heritage.',
    category: 'Heritage Audio & Amplified Speakers',
    tier: 'Master Distributor',
    origin: 'Milton Keynes, UK',
    warranty: '2-Year Official Guarantee',
    featuredProduct: 'Woburn III & Stanmore Bluetooth',
    logoText: 'MARSHALL',
    color: 'from-amber-600 to-amber-800',
    badgeBg: 'bg-amber-950/80 text-amber-300 border-amber-700/50',
    accentHex: '#d97706',
    description: 'Analog brass knobs, vinyl textured cabinets, and concert-level frequency staging for music lovers.'
  },
  {
    id: 'asus_rog',
    name: 'ASUS ROG',
    tagline: 'For Those Who Dare. Republic of Gamers.',
    category: 'Gaming Laptops, Motherboards & Gear',
    tier: 'Certified Premium Retailer',
    origin: 'Taipei, Taiwan',
    warranty: '2-Year Global Warranty',
    featuredProduct: 'Zephyrus G16 OLED & ROG Ally X',
    logoText: 'ASUS ROG',
    color: 'from-red-500 to-rose-600',
    badgeBg: 'bg-red-950/60 text-red-200 border-red-800/50',
    accentHex: '#e11d48',
    description: 'Ultra-thin vapor chamber gaming notebooks, ROG Swift 540Hz displays, and custom water-cooled components.'
  },
  {
    id: 'sennheiser',
    name: 'Sennheiser',
    tagline: 'The Pursuit of Perfect Sound.',
    category: 'Audiophile Headphones & Microphones',
    tier: 'Master Distributor',
    origin: 'Wedemark, Germany',
    warranty: '2-Year International Warranty',
    featuredProduct: 'HD 800 S & Momentum 4 Wireless',
    logoText: 'SENNHEISER',
    color: 'from-teal-400 to-cyan-600',
    badgeBg: 'bg-teal-950/60 text-teal-200 border-teal-800/50',
    accentHex: '#14b8a6',
    description: 'Handcrafted German reference audiophile headphones with proprietary ring radiator drivers.'
  }
];
