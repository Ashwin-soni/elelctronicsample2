'use client';

import React, { useState } from 'react';
import { 
  Store, 
  ShieldCheck, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  Award, 
  CreditCard,
  Check
} from 'lucide-react';
import { STORE_LOCATIONS } from '@/data/locations';
import { BRANDS } from '@/data/brands';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSuccess(true);
      setTimeout(() => {
        setNewsletterSuccess(false);
        setNewsletterEmail('');
      }, 3500);
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-slate-800/80">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 flex items-center justify-center shadow-lg">
                <Store className="w-5 h-5 text-white" />
              </div>
              <span className="font-black text-xl tracking-tight text-white">
                VOLT<span className="text-amber-400">&</span>CORE <span className="text-xs uppercase px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">MART</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Metropolis&apos;s premier destination for high-end consumer and enterprise electronics. Authorized flagship partner for 42+ global manufacturers with 4 experience centers and same-day showroom collection.
            </p>

            <div className="space-y-1 text-xs text-slate-400">
              <p className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% Factory Sealed Genuine Hardware</span>
              </p>
              <p className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Official Direct Manufacturer Warranties</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span>Showroom Hours: Mon–Sun (09:00 AM – 10:00 PM)</span>
              </p>
            </div>
          </div>

          {/* Experience Centers Directory */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Mart Branches
            </h4>
            <ul className="space-y-2 text-xs">
              {STORE_LOCATIONS.map((loc) => (
                <li key={loc.id}>
                  <a href="#locations" className="text-slate-400 hover:text-cyan-400 transition-colors block">
                    <span className="font-semibold text-slate-200 block">{loc.name.split('&')[0]}</span>
                    <span className="text-[11px] text-slate-400">{loc.district}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Authorized Partner Brands */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Featured Brands
            </h4>
            <div className="grid grid-cols-2 gap-1 text-xs text-slate-400">
              {BRANDS.slice(0, 8).map((b) => (
                <a key={b.id} href="#brands" className="hover:text-amber-300 transition-colors py-0.5">
                  {b.name}
                </a>
              ))}
            </div>
          </div>

          {/* Client & Newsletter */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Client VIP Club & Offers
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Subscribe for early access to flagship product releases, private demo events, and corporate rebates.
            </p>

            {newsletterSuccess ? (
              <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-300 text-xs flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Subscribed! Use code <strong>TECHMART10</strong> for 10% off.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="space-y-2">
                <input
                  type="email"
                  required
                  placeholder="Enter work or personal email..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
                <button
                  type="submit"
                  className="w-full py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-colors flex items-center justify-center gap-1"
                >
                  <span>Join VIP Tech Club</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom copyright & disclosures */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} VoltCore Electronics Mart Inc. All rights reserved. Authorized Dealer & Distributor.</p>
          <div className="flex items-center gap-4">
            <a href="#hero" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#hero" className="hover:text-white transition-colors">Terms of Sale</a>
            <span>•</span>
            <a href="#corporate" className="hover:text-white transition-colors">Commercial Net-30</a>
            <span>•</span>
            <a href="#locations" className="hover:text-white transition-colors">Experience Centers</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
