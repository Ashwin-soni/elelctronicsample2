export interface Product {
  id: string;
  name: string;
  brandId: string;
  brandName: string;
  category: 'Computing & Laptops' | 'Audio & Acoustics' | 'Displays & OLED TVs' | 'Smart Home & Living' | 'Cameras & Aerial' | 'Gaming & Battlestation';
  price: number;
  originalPrice: number;
  rating: number;
  reviewCount: number;
  isNew?: boolean;
  isFeatured?: boolean;
  isBestseller?: boolean;
  tagline: string;
  image: string;
  specHighlight: string;
  specs: {
    [key: string]: string;
  };
  keyFeatures: string[];
  stockLocations: string[]; // branch IDs where item is currently in stock
  warrantyYears: number;
  demoAvailable: boolean;
  inTheBox: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: 'prod-macbook-pro-16',
    name: 'Apple MacBook Pro 16" (M3 Max)',
    brandId: 'apple',
    brandName: 'Apple',
    category: 'Computing & Laptops',
    price: 3499,
    originalPrice: 3899,
    rating: 4.9,
    reviewCount: 342,
    isFeatured: true,
    isBestseller: true,
    tagline: 'Extreme performance for 3D animation, code compilation, and 8K color grading.',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1000&q=80',
    specHighlight: '16-Core CPU • 40-Core GPU • 48GB Unified RAM',
    specs: {
      'Processor': 'Apple M3 Max (16-core CPU, 40-core GPU)',
      'Memory': '48GB Unified Memory (configurable to 128GB)',
      'Storage': '1TB Ultra-fast NVMe SSD (7.4 GB/s)',
      'Display': '16.2" Liquid Retina XDR (3456x2234), 120Hz ProMotion, 1600 nits peak',
      'Battery Life': 'Up to 22 hours video playback',
      'Ports': '3x Thunderbolt 4 (USB-C), HDMI 2.1, SDXC card slot, MagSafe 3',
      'Weight': '2.16 kg (4.8 lbs)'
    },
    keyFeatures: [
      'Hardware-accelerated ray tracing and mesh shading',
      'Studio-quality three-mic array with directional beamforming',
      'Six-speaker sound system with force-cancelling woofers',
      'Liquid Retina XDR panel with 1,000,000:1 contrast ratio'
    ],
    stockLocations: ['downtown-flagship', 'westside-techpark', 'uptown-gallery'],
    warrantyYears: 2,
    demoAvailable: true,
    inTheBox: ['16-inch MacBook Pro', '140W USB-C Power Adapter', 'USB-C to MagSafe 3 Cable (2m)', 'Microfiber polishing cloth']
  },
  {
    id: 'prod-sony-wh1000xm5',
    name: 'Sony WH-1000XM5 Wireless Noise Cancelling Headphones',
    brandId: 'sony',
    brandName: 'Sony',
    category: 'Audio & Acoustics',
    price: 399,
    originalPrice: 449,
    rating: 4.8,
    reviewCount: 890,
    isFeatured: true,
    isBestseller: true,
    tagline: 'Two processors and 8 microphones for world-benchmark noise cancellation.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=80',
    specHighlight: 'Auto NC Optimizer • LDAC 32-bit Hi-Res • 30hr Battery',
    specs: {
      'Driver Unit': 'Specially engineered 30mm carbon fiber dome',
      'Noise Cancellation': 'Dual Processor V1 + HD Noise Cancelling Processor QN1',
      'Microphones': '8 beamforming mics with AI precision voice pickup',
      'Frequency Response': '4 Hz - 40,000 Hz (JEITA)',
      'Bluetooth Version': '5.2 (LDAC, AAC, SBC, multipoint pair 2 devices)',
      'Battery Life': '30 hours with ANC on (3-minute charge = 3 hours playback)',
      'Weight': '250 grams'
    },
    keyFeatures: [
      'Speak-to-Chat technology automatically pauses music when speaking',
      'Wear detection pauses sound instantly when removed',
      'Ultra-comfortable soft-fit synthetic leather headband',
      'Lossless LDAC audio transmission with DSEE Extreme AI upscaling'
    ],
    stockLocations: ['downtown-flagship', 'westside-techpark', 'uptown-gallery', 'airport-express'],
    warrantyYears: 2,
    demoAvailable: true,
    inTheBox: ['Sony WH-1000XM5 Headphones', 'Collapsible Carrying Case', '3.5mm Gold-plated audio cable', 'USB-A to USB-C charging cable']
  },
  {
    id: 'prod-lg-g4-oled',
    name: 'LG 65" OLED evo G4 4K Cinema Smart TV',
    brandId: 'lg',
    brandName: 'LG Electronics',
    category: 'Displays & OLED TVs',
    price: 2499,
    originalPrice: 2999,
    rating: 4.9,
    reviewCount: 165,
    isFeatured: true,
    isNew: true,
    tagline: 'Brightness Booster Max with alpha 11 AI Processor 4K and zero-gap gallery design.',
    image: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=1000&q=80',
    specHighlight: 'Brightness Booster Max • 144Hz VRR • Dolby Vision & Atmos',
    specs: {
      'Panel Type': 'OLED evo with Micro Lens Array (MLA+)',
      'Resolution': '3840 x 2160 (4K Ultra HD) at native 144Hz refresh',
      'Processor': 'alpha 11 AI Processor 4K (4x AI graphics power)',
      'HDR Standards': 'Dolby Vision, HDR10, HLG, Filmmaker Mode',
      'Gaming': '4x HDMI 2.1 (48Gbps), G-Sync, AMD FreeSync Premium, 0.1ms response',
      'Audio': '60W 4.2 channel with Dolby Atmos virtual 11.1.2 up-mixing',
      'Design': 'Zero-gap flush wall mount gallery profile'
    },
    keyFeatures: [
      '70% brighter than standard OLED with micro lens thermal architecture',
      '5-Year panel warranty certified by LG Electronics',
      'Seamless smart home control with Apple AirPlay 2, Matter, and webOS 24',
      'Hands-free voice recognition and multi-view 4 screen split'
    ],
    stockLocations: ['downtown-flagship', 'uptown-gallery'],
    warrantyYears: 3,
    demoAvailable: true,
    inTheBox: ['LG 65" OLED G4 Display', 'Magic Remote Control with Batteries', 'Slim Flush Wall Mount Bracket', 'Power Cable & IR Blaster']
  },
  {
    id: 'prod-dji-mavic-3-pro',
    name: 'DJI Mavic 3 Pro Cine Combo Drone',
    brandId: 'dji',
    brandName: 'DJI',
    category: 'Cameras & Aerial',
    price: 2799,
    originalPrice: 2999,
    rating: 4.9,
    reviewCount: 118,
    isFeatured: true,
    tagline: 'Triple-camera aerial imaging system with 4/3 CMOS Hasselblad lens.',
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1000&q=80',
    specHighlight: 'Triple Optical Zoom • 5.1K Apple ProRes • 43-min Flight',
    specs: {
      'Primary Sensor': '4/3 CMOS Hasselblad 20MP, f/2.8-f/11, 24mm equivalent',
      'Telephoto Sensors': '70mm 1/1.3" CMOS (3x) + 166mm 1/2" CMOS (7x optical)',
      'Max Video': '5.1K at 50fps, 4K at 120fps, D-Log M & Apple ProRes 422 HQ',
      'Flight Time': 'Up to 43 minutes per intelligent flight battery',
      'Transmission': 'DJI O3+ with 15km 1080p/60fps live feed range',
      'Obstacle Sensing': 'Omnidirectional obstacle sensing with APAS 5.0 navigation',
      'Storage': '1TB Built-in Cine SSD + MicroSD slot'
    },
    keyFeatures: [
      'Three lenses cover focal lengths from wide landscape to dramatic portraiture',
      'Hasselblad Natural Colour Solution (HNCS) for film-grade color reproduction',
      'Waypoint flight, Cruise Control, and Advanced Return to Home (RTH)',
      'High-speed QuickTransfer direct to smartphone or workstation'
    ],
    stockLocations: ['downtown-flagship', 'westside-techpark'],
    warrantyYears: 2,
    demoAvailable: true,
    inTheBox: ['DJI Mavic 3 Pro Drone', 'DJI RC Pro Smart Controller', '3x Intelligent Flight Batteries', 'Battery Charging Hub', 'ND Filters Set (ND8/16/32/64)', 'Leather Carrying Shoulder Bag']
  },
  {
    id: 'prod-alienware-aurora-r16',
    name: 'Alienware Aurora R16 Liquid-Cooled Gaming Battlestation',
    brandId: 'alienware',
    brandName: 'Dell Alienware',
    category: 'Gaming & Battlestation',
    price: 2899,
    originalPrice: 3199,
    rating: 4.7,
    reviewCount: 94,
    isFeatured: true,
    isNew: true,
    tagline: 'Legend 3 design with 240mm liquid cooling and RTX 4080 Super graphics.',
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=1000&q=80',
    specHighlight: 'Intel Core i9-14900KF • RTX 4080 Super 16GB • 64GB DDR5',
    specs: {
      'CPU': 'Intel Core i9-14900KF (24 cores, up to 6.0 GHz Turbo)',
      'GPU': 'NVIDIA GeForce RTX 4080 Super 16GB GDDR6X',
      'RAM': '64GB Dual Channel DDR5 at 5600MHz (up to 128GB)',
      'Storage': '2TB M.2 PCIe Gen 4 NVMe SSD',
      'Cooling': '240mm Alienware Cryo-Tech Liquid Cooler with dual fans',
      'Power Supply': '1000W 80 Plus Platinum Certified PSU',
      'Chassis': 'Basalt Black with Clear Side Door and customizable AlienFX RGB'
    },
    keyFeatures: [
      '40% smaller chassis footprint with 20% quieter acoustic operation',
      'DLSS 3.5 AI neural rendering for ultra-high FPS in 4K ray-traced gaming',
      'Tool-less chassis access for rapid PCIe and memory expansion',
      'Wi-Fi 7 + Killer 2.5Gbps Gigabit Ethernet for zero-latency networking'
    ],
    stockLocations: ['downtown-flagship', 'westside-techpark'],
    warrantyYears: 2,
    demoAvailable: true,
    inTheBox: ['Alienware Aurora R16 Tower', 'Alienware Multimedia Keyboard', 'Alienware Optical Mouse', 'Braided Heavy-Duty Power Cord']
  },
  {
    id: 'prod-canon-eos-r5m2',
    name: 'Canon EOS R5 Mark II Mirrorless Cinema Camera',
    brandId: 'canon',
    brandName: 'Canon',
    category: 'Cameras & Aerial',
    price: 4299,
    originalPrice: 4599,
    rating: 4.9,
    reviewCount: 76,
    isFeatured: true,
    tagline: '45MP Back-Illuminated Stacked Sensor with Eye-Control AF and 8K 60p RAW.',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=80',
    specHighlight: '45MP Stacked CMOS • 8.5-stop In-Body IS • 8K 60p RAW Light',
    specs: {
      'Sensor': '45.0 Megapixel Full-Frame Back-Illuminated Stacked CMOS',
      'Image Processor': 'Accelerated Capture DIGIC Accelerator + DIGIC X',
      'Autofocus': 'Dual Pixel Intelligent AF with Action Priority sports tracking',
      'Video Recording': '8K RAW 60p internal, 4K 120p with sound, Canon Log 2/3',
      'Stabilization': 'Coordinated In-Body IS up to 8.5 stops center',
      'Viewfinder': '0.5" 5.76M-dot OLED EVF with blackout-free 30fps burst',
      'Card Slots': '1x CFexpress Type B + 1x SD UHS-II slot'
    },
    keyFeatures: [
      'Next-generation Eye Control AF focuses directly where your pupil glances',
      'In-camera Neural Network upscaling renders 179MP files with supreme clarity',
      'Dual-Shoe accessory system for digital cinema microphones',
      'Weather-sealed magnesium alloy chassis built for harsh conditions'
    ],
    stockLocations: ['downtown-flagship', 'uptown-gallery'],
    warrantyYears: 2,
    demoAvailable: true,
    inTheBox: ['Canon EOS R5 Mark II Body', 'LP-E6P High-Output Battery', 'LC-E6 Battery Charger', 'Camera Cover R-F-5', 'Wide Neck Strap', 'Cable Protector']
  },
  {
    id: 'prod-bose-qc-ultra',
    name: 'Bose QuietComfort Ultra Immersive Headphones',
    brandId: 'bose',
    brandName: 'Bose',
    category: 'Audio & Acoustics',
    price: 429,
    originalPrice: 479,
    rating: 4.8,
    reviewCount: 512,
    isBestseller: true,
    tagline: 'Breakthrough spatial audio and world-class quietness calibrated to your ear canal.',
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1000&q=80',
    specHighlight: 'Bose Immersive Audio • CustomTune Sound • 24hr Playback',
    specs: {
      'Acoustics': 'Custom engineered transducers with Bose Immersive spatial DSP',
      'Calibration': 'CustomTune audio ear-canal chimes tailored in 0.5 seconds',
      'Noise Cancelling': 'Quiet Mode, Aware Mode with ActiveSense, Immersion Mode',
      'Microphone': 'Advanced mic system with environmental noise rejection',
      'Battery': 'Up to 24 hours (up to 18 hours in Immersive Audio mode)',
      'Materials': 'Cast aluminum yokes, ultra-soft protein leather earcups'
    },
    keyFeatures: [
      'Spatialized audio places instruments all around you for concert realism',
      'CustomTune measures your ears each time you put them on',
      'Multipoint connection switches seamlessly between phone and laptop',
      'Snapdragon Sound certified for ultra-low latency wireless listening'
    ],
    stockLocations: ['downtown-flagship', 'westside-techpark', 'uptown-gallery', 'airport-express'],
    warrantyYears: 2,
    demoAvailable: true,
    inTheBox: ['Bose QC Ultra Headphones', 'Protective Travel Hard Case', '3.5 mm to 2.5 mm audio cable', 'USB-C charging cable']
  },
  {
    id: 'prod-samsung-neo-qled-8k',
    name: 'Samsung 75" Neo QLED 8K QN900D Smart Display',
    brandId: 'samsung',
    brandName: 'Samsung',
    category: 'Displays & OLED TVs',
    price: 4999,
    originalPrice: 5799,
    rating: 4.9,
    reviewCount: 88,
    isFeatured: true,
    tagline: 'NQ8 AI Gen3 Processor with Infinity Air design and 8K AI Upscaling Pro.',
    image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&w=1000&q=80',
    specHighlight: 'Quantum Matrix Pro Mini LED • 8K AI Gen3 • 240Hz Motion',
    specs: {
      'Resolution': '7680 x 4320 (Real 8K Resolution)',
      'Backlight': 'Quantum Matrix Technology Pro with Quantum Mini LEDs',
      'Processor': 'NQ8 AI Gen3 Processor (512 neural networks)',
      'Refresh Rate': '4K at 240Hz, 8K at 60Hz with Motion Xcelerator 240Hz',
      'Audio': '90W 6.2.4 channel with Dolby Atmos and Object Tracking Sound Pro',
      'Connectivity': 'Attachable Slim One Connect Box with 4x HDMI 2.1',
      'Design': 'Infinity Air Screen with 0.8mm edge bezel'
    },
    keyFeatures: [
      'AI Motion Enhancer Pro sharpens high-speed sports ball tracking',
      'Glare-free anti-reflection layer maintains pure black in sunlit rooms',
      'Q-Symphony harmonizes television speakers with Samsung soundbars',
      'Built-in SmartThings IoT hub with 3D map view'
    ],
    stockLocations: ['downtown-flagship', 'uptown-gallery'],
    warrantyYears: 3,
    demoAvailable: true,
    inTheBox: ['Samsung 75" Neo QLED 8K Display', 'SolarCell Remote Control (recharges via indoor ambient light)', 'Slim One Connect Box with Invisible Cable', 'Wall Mount Kit']
  },
  {
    id: 'prod-sonos-era-300',
    name: 'Sonos Era 300 Spatial Audio Smart Speaker',
    brandId: 'sonos',
    brandName: 'Sonos',
    category: 'Audio & Acoustics',
    price: 449,
    originalPrice: 499,
    rating: 4.8,
    reviewCount: 380,
    isBestseller: true,
    tagline: 'Six optimally positioned drivers fire sound from wall to wall and floor to ceiling.',
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=1000&q=80',
    specHighlight: 'Dolby Atmos Spatial Audio • Trueplay Tuning • WiFi 6 & AirPlay 2',
    specs: {
      'Amplifiers': 'Six Class-D digital amplifiers precision-tuned',
      'Drivers': '4 tweeters (one upward firing) + 2 woofers angled left/right',
      'Microphones': 'Far-field microphone array with beamforming & echo cancellation',
      'Connectivity': 'Wi-Fi 6 (802.11ax), Bluetooth 5.0, USB-C Line-In (adapter)',
      'Voice Control': 'Sonos Voice Control & Amazon Alexa built-in',
      'Dimensions': '160 x 260 x 185 mm',
      'Weight': '4.47 kg'
    },
    keyFeatures: [
      'Plays Dolby Atmos music tracks from Apple Music and Amazon Music',
      'Trueplay acoustic tuning analyzes room geometry for perfect resonance',
      'Pairs with Sonos Arc soundbar for jaw-dropping rear surround channels',
      'Capacitive touch slider volume controls with physical mic kill-switch'
    ],
    stockLocations: ['downtown-flagship', 'westside-techpark', 'uptown-gallery'],
    warrantyYears: 2,
    demoAvailable: true,
    inTheBox: ['Sonos Era 300 Speaker', 'Power Cable (2m)', 'Quickstart Guide', 'Legal/warranty documentation']
  },
  {
    id: 'prod-marshall-woburn-3',
    name: 'Marshall Woburn III Home Bluetooth Speaker',
    brandId: 'marshall',
    brandName: 'Marshall',
    category: 'Audio & Acoustics',
    price: 579,
    originalPrice: 649,
    rating: 4.9,
    reviewCount: 290,
    tagline: 'Heaviest bass in the Marshall home lineup with 150W Class-D amplification.',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=1000&q=80',
    specHighlight: '150W Three-Way System • HDMI ARC Input • Bluetooth 5.2 LE',
    specs: {
      'Power Output': '1x 90W Class D (woofer) + 2x 15W (mids) + 2x 15W (tweeters)',
      'Frequency Range': '35 - 20,000 Hz',
      'Inputs': 'HDMI ARC for TV, 3.5mm AUX, RCA stereo, Bluetooth 5.2',
      'Controls': 'Brass analog knobs for Volume, Bass, Treble, and Source knob',
      'Cabinet Principle': 'Bass-reflex with rear port and textured vinyl casing',
      'Weight': '7.45 kg (16.4 lbs)'
    },
    keyFeatures: [
      'Three-way acoustic driver system delivers crisp highs and chest-thumping lows',
      'HDMI ARC port lets you connect directly to your TV for cinema audio',
      'Dynamic Loudness adjusts tonal balance so music sounds full at any volume',
      'Eco-conscious build featuring 70% post-consumer recycled plastic'
    ],
    stockLocations: ['downtown-flagship', 'uptown-gallery'],
    warrantyYears: 2,
    demoAvailable: true,
    inTheBox: ['Marshall Woburn III Speaker', 'Mains Power Cord', 'Quick Start Guide']
  },
  {
    id: 'prod-asus-zephyrus-g16',
    name: 'ASUS ROG Zephyrus G16 OLED Gaming Laptop',
    brandId: 'asus_rog',
    brandName: 'ASUS ROG',
    category: 'Computing & Laptops',
    price: 2699,
    originalPrice: 2899,
    rating: 4.8,
    reviewCount: 142,
    isNew: true,
    tagline: 'Precision aluminum unibody with 2.5K 240Hz OLED ROG Nebula display.',
    image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=1000&q=80',
    specHighlight: 'Intel Core Ultra 9 • RTX 4080 • 2.5K 240Hz 0.2ms OLED',
    specs: {
      'CPU': 'Intel Core Ultra 9 185H (16 cores, Intel AI Boost NPU)',
      'GPU': 'NVIDIA GeForce RTX 4080 Laptop GPU 12GB (115W TGP)',
      'Display': '16.0" 2.5K (2560x1600) 240Hz OLED, 0.2ms, 100% DCI-P3, G-Sync',
      'RAM': '32GB LPDDR5X 7467MHz Dual Channel',
      'Storage': '2TB PCIe 4.0 NVMe M.2 SSD',
      'Chassis': 'CNC-milled aluminum with Slash Lighting array lid',
      'Weight': '1.85 kg (4.08 lbs) • 1.49 cm thin'
    },
    keyFeatures: [
      'ROG Intelligent Cooling with vapor chamber and liquid metal thermal paste',
      'First gaming laptop with OLED panel certified for VESA DisplayHDR True Black 500',
      '6-speaker audio system with dual-force cancelling woofers',
      'Full-day battery life powered by Intel Meteor Lake neural efficiency'
    ],
    stockLocations: ['downtown-flagship', 'westside-techpark'],
    warrantyYears: 2,
    demoAvailable: true,
    inTheBox: ['ROG Zephyrus G16 Laptop', '240W AC Adapter', 'ROG Sleeve Case', 'ROG Strix Gaming Mouse']
  },
  {
    id: 'prod-ps5-pro-bundle',
    name: 'Sony PlayStation 5 Pro Flagship 2TB Console',
    brandId: 'sony',
    brandName: 'Sony',
    category: 'Gaming & Battlestation',
    price: 699,
    originalPrice: 749,
    rating: 4.9,
    reviewCount: 940,
    isBestseller: true,
    tagline: 'PlayStation Spectral Super Resolution (PSSR) AI upscaling and advanced ray tracing.',
    image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=1000&q=80',
    specHighlight: 'PSSR AI Upscaling • 2TB Custom SSD • 4K 60-120fps Fidelity',
    specs: {
      'GPU': 'Upgraded RDNA GPU with 67% more Compute Units and 28% faster RAM',
      'Ray Tracing': '2x-3x faster dynamic ray tracing calculations',
      'Storage': '2TB Custom High-Speed NVMe SSD (5.5 GB/s raw)',
      'Video Output': 'Support for 4K 120Hz, 8K displays, and Variable Refresh Rate (VRR)',
      'Networking': 'Wi-Fi 7 (802.11be) for ultra-stable multiplayer and remote play',
      'Controller': 'DualSense Wireless Controller with Haptic Feedback & Adaptive Triggers'
    },
    keyFeatures: [
      'PSSR machine learning adds incredible detail and clarity to game worlds',
      'PS5 Pro Game Boost enhances over 8,500 backward-compatible PS4 games',
      'Tempest 3D AudioTech immersion for headphones and TV speakers',
      'Ultra-quiet thermal architecture engineered for marathon gaming'
    ],
    stockLocations: ['downtown-flagship', 'westside-techpark', 'uptown-gallery', 'airport-express'],
    warrantyYears: 2,
    demoAvailable: true,
    inTheBox: ['PlayStation 5 Pro Console (2TB SSD)', 'DualSense Wireless Controller', 'HDMI 2.1 Cable', 'AC Power Cord', 'USB Cable', 'Printed Materials', 'Astro’s Playroom (Pre-installed)']
  },
  {
    id: 'prod-apple-watch-ultra-2',
    name: 'Apple Watch Ultra 2 (49mm Titanium & Cellular)',
    brandId: 'apple',
    brandName: 'Apple',
    category: 'Smart Home & Living',
    price: 799,
    originalPrice: 849,
    rating: 4.9,
    reviewCount: 420,
    isBestseller: true,
    tagline: 'Aerospace-grade 49mm titanium case with 3000-nit display and dual-frequency GPS.',
    image: 'https://images.unsplash.com/photo-1509741102003-ca64bfe5f069?auto=format&fit=crop&w=1000&q=80',
    specHighlight: 'S9 SiP Chip • 3000 nits Retina • 100m Water Resistance',
    specs: {
      'Case': '49mm Aerospace-grade natural titanium case with sapphire crystal glass',
      'Display': 'Always-On Retina display, up to 3000 nits brightness',
      'Processor': 'S9 SiP with 64-bit dual-core processor and 4-core Neural Engine',
      'Battery': 'Up to 36 hours regular use (up to 72 hours in Low Power Mode)',
      'Water Resistance': '100m water resistant (EN13319 dive certified up to 40m)',
      'Sensors': 'Precision dual-frequency GPS (L1 and L5), Depth gauge, Water temp, ECG'
    },
    keyFeatures: [
      'Double tap gesture lets you answer calls or pause music without touching the screen',
      'Customizable Action Button provides instant access to workouts and compass waypoints',
      '86-decibel Emergency Siren audible up to 600 feet away',
      'Modular Ultra watch face displays live elevation and depth data'
    ],
    stockLocations: ['downtown-flagship', 'westside-techpark', 'uptown-gallery', 'airport-express'],
    warrantyYears: 2,
    demoAvailable: true,
    inTheBox: ['Apple Watch Ultra 2 Titanium Case', 'Ocean Band / Trail Loop', 'Apple Watch Magnetic Fast Charger to USB-C Cable (1m)']
  },
  {
    id: 'prod-sennheiser-hd800s',
    name: 'Sennheiser HD 800 S Reference Audiophile Headphones',
    brandId: 'sennheiser',
    brandName: 'Sennheiser',
    category: 'Audio & Acoustics',
    price: 1799,
    originalPrice: 1999,
    rating: 5.0,
    reviewCount: 88,
    isFeatured: true,
    tagline: 'Handcrafted in Germany with 56mm Ring Radiator transducers for holographic staging.',
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1000&q=80',
    specHighlight: '56mm Ring Radiator • 4 Hz - 51,000 Hz • 300 Ohms Impedance',
    specs: {
      'Transducer': 'Open dynamic 56mm Ring Radiator transducer',
      'Frequency Response': '4 - 51,000 Hz (-10 dB)',
      'Impedance': '300 Ohms',
      'THD': '0.02% (1 kHz, 100 dB SPL)',
      'Ear Coupling': 'Circumaural with microfiber ear pads',
      'Craftsmanship': 'Assembled by master technicians in Wedemark, Germany'
    },
    keyFeatures: [
      'Proprietary absorber technology prevents masking of high-frequency micro-details',
      'Angled drivers project sound directly into ear canal natural acoustic resonance',
      'Aerospace-grade polymer chassis minimizes resonance without adding weight',
      'Includes balanced 4.4mm Pentaconn cable and 6.35mm jack'
    ],
    stockLocations: ['downtown-flagship', 'uptown-gallery'],
    warrantyYears: 2,
    demoAvailable: true,
    inTheBox: ['HD 800 S Headphones', '6.35 mm Unbalanced Cable', '4.4 mm Balanced Pentaconn Cable', 'USB Drive with Individual Diffuse-Field Calibration Curve', 'Luxury Wooden Presentation Box']
  },
  {
    id: 'prod-samsung-smarthome-hub',
    name: 'Samsung SmartThings Station & Ambient Sensor Ecosystem',
    brandId: 'samsung',
    brandName: 'Samsung',
    category: 'Smart Home & Living',
    price: 189,
    originalPrice: 229,
    rating: 4.7,
    reviewCount: 215,
    tagline: 'Matter and Zigbee hub with 15W wireless fast-charging pad and smart button routines.',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1000&q=80',
    specHighlight: 'Matter & Thread Support • 15W Wireless Qi Fast-Charge • Automation Button',
    specs: {
      'Connectivity': 'Matter, Zigbee 3.0, Thread, Wi-Fi 2.4/5GHz, Bluetooth LE',
      'Charging Pad': 'Up to 15W Qi wireless fast charging with auto-cooling fan',
      'Smart Button': 'Short press, long press, double press automated triggers',
      'Range': 'Over 200 feet indoor wireless mesh coverage',
      'Security': 'Samsung Knox encryption for smart home devices'
    },
    keyFeatures: [
      'Unifies lights, locks, shades, thermostats, and sensors under one simple app',
      'Automatically dims showroom or boardroom lights when phone is placed on charger',
      'Locates misplaced Galaxy devices with SmartThings Find alert chime',
      'Full compatibility with Google Home, Apple Home, and Alexa via Matter'
    ],
    stockLocations: ['downtown-flagship', 'westside-techpark', 'uptown-gallery', 'airport-express'],
    warrantyYears: 2,
    demoAvailable: true,
    inTheBox: ['SmartThings Station Hub', '25W USB-C Power Adapter', 'USB-C to USB-C Cable', 'Quick Start Guide']
  },
  {
    id: 'prod-dell-xps-16',
    name: 'Dell XPS 16 (Intel Core Ultra 9 & 4K OLED)',
    brandId: 'alienware',
    brandName: 'Dell Alienware',
    category: 'Computing & Laptops',
    price: 2749,
    originalPrice: 3099,
    rating: 4.8,
    reviewCount: 110,
    tagline: 'CNC machined graphite chassis with capacitive touch function row and seamless glass haptic trackpad.',
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=1000&q=80',
    specHighlight: 'Core Ultra 9 185H • RTX 4070 8GB • 4K+ OLED Touchscreen',
    specs: {
      'Processor': 'Intel Core Ultra 9 185H (16 Cores, 22 Threads, up to 5.1 GHz)',
      'Graphics': 'NVIDIA GeForce RTX 4070 8GB GDDR6 (60W)',
      'Display': '16.3" 4K+ (3840 x 2400) OLED InfinityEdge Touch, 400 nits, 100% DCI-P3',
      'Memory': '32GB LPDDR5X at 7467MHz',
      'Storage': '2TB M.2 PCIe Gen 4 NVMe SSD',
      'Audio': '10W Quad-speaker design with Waves MaxxAudio Pro',
      'Weight': '2.13 kg (4.7 lbs)'
    },
    keyFeatures: [
      'Invisible seamless glass touchpad with responsive haptic actuation',
      'Capacitive touch function bar switches seamlessly between media and F-keys',
      'Quad-speaker sound system tuned by multi-Grammy award winning producer Jack Joseph Puig',
      'Dual Thunderbolt 4 ports with 130W USB-C Power Delivery'
    ],
    stockLocations: ['downtown-flagship', 'westside-techpark'],
    warrantyYears: 2,
    demoAvailable: true,
    inTheBox: ['Dell XPS 16 Laptop', '130W Type-C AC Adapter', 'USB-C to USB-A and HDMI v2.0 Dongle', 'Documentation']
  }
];
