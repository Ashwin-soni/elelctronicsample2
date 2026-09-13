'use client';

import React, { useState } from 'react';
import { 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  Navigation, 
  Calendar, 
  Sparkles, 
  Car, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Tv, 
  Headphones, 
  Laptop, 
  Wrench, 
  Zap, 
  Building, 
  Truck, 
  FileText, 
  Home, 
  Sliders, 
  Coffee, 
  Key, 
  Shield, 
  Globe, 
  BatteryCharging,
  Compass,
  Check
} from 'lucide-react';
import { STORE_LOCATIONS, LocationBranch } from '@/data/locations';

const AMENITY_ICONS: { [key: string]: any } = {
  Tv,
  Laptop,
  Zap,
  Wrench,
  Building,
  Cpu: Laptop,
  Truck,
  FileText,
  Headphones,
  Home,
  Sliders,
  Coffee,
  Key,
  Shield,
  BatteryCharging,
  Globe
};

export const StoreLocator: React.FC = () => {
  const [selectedBranchId, setSelectedBranchId] = useState<string>(STORE_LOCATIONS[0].id);
  const [directionsModalOpen, setDirectionsModalOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  // Booking form state
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [selectedDemoInterest, setSelectedDemoInterest] = useState('8K OLED Displays & Dolby Atmos');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('Today at 3:00 PM');

  const activeBranch = STORE_LOCATIONS.find((b) => b.id === selectedBranchId) || STORE_LOCATIONS[0];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSubmitted(true);
    setTimeout(() => {
      setBookingModalOpen(false);
      setBookingSubmitted(false);
      setClientName('');
      setClientEmail('');
    }, 2500);
  };

  return (
    <section id="locations" className="py-16 md:py-24 bg-slate-950 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-semibold text-amber-400 mb-3">
              <MapPin className="w-3.5 h-3.5" />
              <span>Physical Retail Footprint & Experience Centers</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Our Experience Mart Locations
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-2 leading-relaxed">
              Experience the hardware hands-on before making high-value electronics decisions. Visit any of our 4 purpose-built showrooms equipped with dedicated listening studios, OLED cinema suites, and hardware calibration labs.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-400">
              <strong className="text-white">4 Locations</strong> in Metropolis Metro Area
            </span>
          </div>
        </div>

        {/* Interactive Store Locator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Branch Switcher Cards */}
          <div className="lg:col-span-5 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Select Showroom Branch
            </p>

            {STORE_LOCATIONS.map((branch) => {
              const isSelected = branch.id === selectedBranchId;

              return (
                <button
                  key={branch.id}
                  onClick={() => setSelectedBranchId(branch.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 relative group flex items-start gap-4 ${
                    isSelected
                      ? 'bg-slate-900 border-amber-400/80 shadow-xl shadow-amber-500/10 ring-1 ring-amber-400/50'
                      : 'bg-slate-900/60 hover:bg-slate-900 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 font-black text-sm border ${
                    isSelected 
                      ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-md'
                      : 'bg-slate-800 text-slate-300 border-slate-700 group-hover:text-white'
                  }`}>
                    <MapPin className="w-5 h-5" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className="text-xs font-bold px-2 py-0.5 rounded bg-slate-800 text-amber-300 border border-slate-700">
                        {branch.badge}
                      </span>
                      <span className="text-[11px] font-semibold text-emerald-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        {branch.status}
                      </span>
                    </div>

                    <h3 className="font-bold text-white text-sm sm:text-base group-hover:text-amber-300 transition-colors truncate">
                      {branch.name}
                    </h3>
                    <p className="text-xs text-slate-400 truncate mt-0.5">
                      {branch.address}
                    </p>

                    <div className="flex items-center gap-3 mt-2 text-[11px] text-slate-400">
                      <span>{branch.floorSpace}</span>
                      <span>•</span>
                      <span>{branch.district}</span>
                    </div>
                  </div>
                </button>
              );
            })}

            {/* Quick Consultation CTA */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800/80 border border-slate-700/70 text-xs space-y-2.5 mt-4">
              <div className="flex items-center gap-2 font-bold text-white">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Corporate & Client Private Showings</span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Hosting an architectural firm, enterprise IT committee, or VIP client? Reserve after-hours access to our 8K theater and listening suites.
              </p>
              <button
                onClick={() => setBookingModalOpen(true)}
                className="w-full py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs transition-colors flex items-center justify-center gap-2"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book In-Store Tech Concierge</span>
              </button>
            </div>
          </div>

          {/* Right Column: Selected Branch Spotlight & Stylized Tech Map */}
          <div className="lg:col-span-7 space-y-6">
            {/* Stylized Digital Blueprint / Interactive City Map Canvas */}
            <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 p-4 shadow-2xl">
              {/* Map Canvas Background Grid */}
              <div className="relative h-64 sm:h-72 w-full rounded-xl bg-slate-950 border border-slate-800/80 overflow-hidden flex items-center justify-center">
                {/* SVG Blueprint Map of Metropolis Tech District */}
                <svg className="absolute inset-0 w-full h-full opacity-35" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#334155" strokeWidth="0.75" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                  {/* Stylized Metro Avenues & Expressways */}
                  <path d="M 0 60 Q 200 90 400 70 T 800 120" fill="none" stroke="#0ea5e9" strokeWidth="2.5" strokeDasharray="6,4" />
                  <path d="M 120 0 L 180 300" fill="none" stroke="#475569" strokeWidth="2" />
                  <path d="M 320 0 L 300 300" fill="none" stroke="#475569" strokeWidth="2" />
                  <path d="M 520 0 L 480 300" fill="none" stroke="#475569" strokeWidth="2" />
                  <path d="M 0 180 L 800 200" fill="none" stroke="#06b6d4" strokeWidth="1.5" />
                  {/* Stylized Waterway / Bay */}
                  <path d="M 650 0 C 620 100 680 200 720 300 L 800 300 L 800 0 Z" fill="#0f172a" />
                </svg>

                {/* Pulsing Location Pins on Map */}
                {STORE_LOCATIONS.map((loc) => {
                  const isActive = loc.id === activeBranch.id;

                  return (
                    <button
                      key={loc.id}
                      onClick={() => setSelectedBranchId(loc.id)}
                      style={{
                        position: 'absolute',
                        left: `${loc.coordinates.svgX}%`,
                        top: `${loc.coordinates.svgY}%`,
                        transform: 'translate(-50%, -50%)',
                      }}
                      className="group/pin z-20 focus:outline-none"
                    >
                      <div className="relative flex items-center justify-center">
                        {isActive && (
                          <span className="absolute w-10 h-10 rounded-full bg-amber-400/30 animate-ping"></span>
                        )}
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shadow-lg transition-transform ${
                          isActive
                            ? 'bg-amber-400 text-slate-950 scale-125 ring-4 ring-amber-400/20 shadow-amber-500/50'
                            : 'bg-slate-800 text-slate-300 border border-slate-700 hover:scale-110 hover:text-white'
                        }`}>
                          <MapPin className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Floating tooltip */}
                      <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 rounded-md text-[10px] font-bold whitespace-nowrap shadow-xl border pointer-events-none transition-all ${
                        isActive
                          ? 'bg-slate-900 text-amber-300 border-amber-500/50 block opacity-100'
                          : 'bg-slate-900 text-slate-300 border-slate-700 hidden group-hover/pin:block'
                      }`}>
                        {loc.name.split(' ')[0]} Hub
                      </div>
                    </button>
                  );
                })}

                {/* Map Legend Overlay */}
                <div className="absolute top-3 left-3 bg-slate-950/90 backdrop-blur-md border border-slate-800 px-3 py-1.5 rounded-lg text-[11px] text-slate-300 flex items-center gap-2">
                  <Compass className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Metropolis District Radar • Click Pin to Switch</span>
                </div>

                <div className="absolute bottom-3 right-3 bg-slate-950/90 backdrop-blur-md border border-slate-800 px-3 py-1.5 rounded-lg text-[11px] text-emerald-400 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Live Inventory Syncing</span>
                </div>
              </div>

              {/* Selected Branch Detailed Overview */}
              <div className="mt-5 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-xs uppercase font-bold text-amber-400 tracking-wider">
                      {activeBranch.badge}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-white">
                      {activeBranch.name}
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 sm:flex items-center gap-2 w-full sm:w-auto">
                    <button
                      onClick={() => setDirectionsModalOpen(true)}
                      className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 text-xs font-semibold border border-slate-700 flex items-center justify-center gap-1.5 transition-colors min-h-[44px]"
                    >
                      <Navigation className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Directions</span>
                    </button>

                    <button
                      onClick={() => setBookingModalOpen(true)}
                      className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 text-xs font-bold transition-all shadow-md flex items-center justify-center gap-1.5 min-h-[44px]"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Book VIP Demo</span>
                    </button>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {activeBranch.tagline}
                </p>

                {/* Operating Hours & Contacts Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800/80 space-y-1.5">
                    <div className="flex items-center gap-1.5 font-bold text-slate-200">
                      <Clock className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Showroom Operating Hours</span>
                    </div>
                    <div className="text-slate-400 space-y-0.5 pt-1">
                      <div className="flex justify-between">
                        <span>Monday – Friday:</span>
                        <span className="text-white font-medium">{activeBranch.hours.weekday}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday:</span>
                        <span className="text-white font-medium">{activeBranch.hours.saturday}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday:</span>
                        <span className="text-white font-medium">{activeBranch.hours.sunday}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800/80 space-y-1.5">
                    <div className="flex items-center gap-1.5 font-bold text-slate-200">
                      <Phone className="w-3.5 h-3.5 text-amber-400" />
                      <span>Direct Branch Concierge</span>
                    </div>
                    <div className="text-slate-400 space-y-1 pt-1">
                      <div>
                        <span className="text-slate-400">Phone: </span>
                        <a href={`tel:${activeBranch.phone}`} className="text-white font-semibold hover:text-amber-300">
                          {activeBranch.phone}
                        </a>
                      </div>
                      <div>
                        <span className="text-slate-400">Email: </span>
                        <a href={`mailto:${activeBranch.email}`} className="text-cyan-400 hover:underline">
                          {activeBranch.email}
                        </a>
                      </div>
                      <div>
                        <span className="text-slate-400">Manager: </span>
                        <span className="text-slate-300 font-medium">{activeBranch.manager}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Showroom Amenities */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    In-Store Amenities & Specialist Facilities
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeBranch.amenities.map((am, i) => {
                      const IconComp = AMENITY_ICONS[am.icon] || Sparkles;

                      return (
                        <div
                          key={i}
                          className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-2.5"
                        >
                          <div className="w-7 h-7 rounded-lg bg-slate-800 text-cyan-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <IconComp className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-slate-100">{am.name}</p>
                            <p className="text-[11px] text-slate-400 leading-snug">{am.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Experience Zones & Parking */}
                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs space-y-2">
                  <div>
                    <span className="font-bold text-slate-300">Experience Levels: </span>
                    <span className="text-slate-400">{activeBranch.experienceZones.join(' • ')}</span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-300">Parking & EV: </span>
                    <span className="text-slate-400">{activeBranch.parkingInfo}</span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-300">Public Transit: </span>
                    <span className="text-slate-400">{activeBranch.transitAccess}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Simulated Directions Modal */}
      {directionsModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs uppercase font-bold text-cyan-400">Route & Transit Navigation</span>
                <h3 className="text-xl font-bold text-white">Directions to {activeBranch.name.split(' ')[0]}</h3>
              </div>
              <button
                onClick={() => setDirectionsModalOpen(false)}
                className="text-slate-400 hover:text-white text-lg p-1 rounded-lg"
              >
                ✕
              </button>
            </div>

            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs space-y-1">
              <p className="font-bold text-white">{activeBranch.address}</p>
              <p className="text-slate-400">{activeBranch.district}, Metropolis {activeBranch.postalCode}</p>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="flex items-center gap-2 font-bold text-slate-200">
                <Car className="w-4 h-4 text-amber-400" />
                <span>Simulated Transit Estimates</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700">
                  <span className="block font-bold text-white text-sm">14 min</span>
                  <span className="text-[10px] text-slate-400">Driving / Rideshare</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700">
                  <span className="block font-bold text-white text-sm">22 min</span>
                  <span className="text-[10px] text-slate-400">Metro Train (Exit 4)</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700">
                  <span className="block font-bold text-white text-sm">FREE</span>
                  <span className="text-[10px] text-slate-400">2hr Customer Parking</span>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-1 text-slate-300">
                <p className="font-semibold text-white">Curbside Pickup Instructions:</p>
                <p className="text-slate-400">
                  Drive into Bay 2 along Metropolis Blvd. Present your Order PIN or phone confirmation to our outdoor concierge for trunk-loading in under 3 minutes.
                </p>
              </div>
            </div>

            <button
              onClick={() => setDirectionsModalOpen(false)}
              className="w-full py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-colors"
            >
              Close Navigation Preview
            </button>
          </div>
        </div>
      )}

      {/* Book In-Store VIP Demo Modal */}
      {bookingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs uppercase font-bold text-amber-400">1-on-1 Specialist Consultation</span>
                <h3 className="text-xl font-bold text-white">Book VIP Demo at {activeBranch.name.split(' ')[0]}</h3>
              </div>
              <button
                onClick={() => setBookingModalOpen(false)}
                className="text-slate-400 hover:text-white text-lg p-1 rounded-lg"
              >
                ✕
              </button>
            </div>

            {bookingSubmitted ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">VIP Demo Appointment Confirmed!</h4>
                <p className="text-xs text-slate-300 max-w-sm mx-auto">
                  We have reserved your testing session at <strong className="text-white">{activeBranch.name}</strong>. A specialist technician will have the equipment pre-calibrated for you.
                </p>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-3 text-xs">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Your Full Name / Client Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Corporate or Personal Email</label>
                  <input
                    type="email"
                    required
                    placeholder="alex@example.com"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Technology of Interest</label>
                  <select
                    value={selectedDemoInterest}
                    onChange={(e) => setSelectedDemoInterest(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="8K OLED Displays & Dolby Atmos">8K OLED Cinema Displays & Dolby Atmos (LG / Sony)</option>
                    <option value="Pro M3 Max Workstations & Computing">Pro Computing & AI Rendering (Apple M3 Max / Alienware)</option>
                    <option value="Audiophile Staging & Reference Headphones">Audiophile Staging (Sennheiser / Bose / Sonos)</option>
                    <option value="Commercial Aerial & Cinema Drones">Creator Cinema Gear (Canon EOS R5 / DJI Mavic 3)</option>
                    <option value="Smart Home IoT & Whole-House Audio">Complete Smart Living & Multi-Room Audio</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Preferred Time Window</label>
                  <select
                    value={selectedTimeSlot}
                    onChange={(e) => setSelectedTimeSlot(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="Today at 3:00 PM">Today at 3:00 PM (Express Slot)</option>
                    <option value="Tomorrow at 11:00 AM">Tomorrow at 11:00 AM</option>
                    <option value="Tomorrow at 4:30 PM">Tomorrow at 4:30 PM</option>
                    <option value="Weekend Morning Session">Saturday Morning at 10:30 AM</option>
                  </select>
                </div>

                <div className="pt-2 flex gap-2">
                  <button
                    type="submit"
                    className="flex-1 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs transition-colors"
                  >
                    Confirm VIP Demo Reservation
                  </button>
                  <button
                    type="button"
                    onClick={() => setBookingModalOpen(false)}
                    className="py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
