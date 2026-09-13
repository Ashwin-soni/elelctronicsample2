'use client';

import React, { useState } from 'react';
import { 
  Sparkles, 
  MapPin, 
  ShieldCheck, 
  ArrowRight, 
  Tv, 
  Headphones, 
  Laptop, 
  Camera, 
  Check, 
  Star,
  Zap,
  ShoppingBag
} from 'lucide-react';
import { Product } from '@/data/products';

interface HeroProps {
  onExploreCatalog: () => void;
  onExploreLocations: () => void;
  onQuickViewProduct: (product: Product) => void;
  featuredProducts: Product[];
}

export const Hero: React.FC<HeroProps> = ({
  onExploreCatalog,
  onExploreLocations,
  onQuickViewProduct,
  featuredProducts,
}) => {
  const [activeTab, setActiveTab] = useState(0);

  // Pick showcase products (MacBook, Sony Headphones, LG OLED, DJI Drone)
  const heroProducts = featuredProducts.slice(0, 4);
  const currentProduct = heroProducts[activeTab] || heroProducts[0];

  return (
    <section id="hero" className="relative overflow-hidden pt-8 pb-16 md:py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-b border-slate-800/80">
      {/* Subtle glowing ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-10 left-1/3 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Top Tagline & Badge */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs font-semibold text-cyan-300 shadow-sm backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Authorized Electronics Megamart & Flagship Experience Center</span>
          </div>
          <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Direct Manufacturer Sealed Stock
          </span>
        </div>

        {/* Main Grid: Headline + Interactive Product Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15] sm:leading-[1.1]">
              Next-Gen Tech. <br />
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-amber-300 bg-clip-text text-transparent">
                World Flagships.
              </span> <br />
              Real Experience.
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Step into the region’s premier electronics mart. Test cutting-edge M3 Max workstations, audition Dolby Atmos listening lounges, and inspect 8K OLED cinema displays before you buy—with 4 physical locations and same-day showroom pickup.
            </p>

            {/* Quick Benefits Bullet List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-1 sm:pt-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>42+ Global Authorized Brands</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                <div className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Soundproof Acoustic Testing Rooms</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>2-Year In-House Warranty Coverage</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>15-Minute Click & Collect Ready</span>
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-3 sm:pt-4">
              <button
                onClick={onExploreCatalog}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all group min-h-[44px]"
                id="hero-explore-catalog-btn"
              >
                <span>Explore Products Catalog</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreLocations}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-white font-semibold text-sm sm:text-base border border-slate-700/80 flex items-center justify-center gap-2.5 transition-all group min-h-[44px]"
                id="hero-find-locations-btn"
              >
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Visit Store Experience Centers</span>
              </button>
            </div>

            {/* Live Showroom Indicator */}
            <div className="pt-2 flex items-center gap-2.5 text-xs text-slate-400">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping flex-shrink-0"></span>
              <span className="leading-snug">
                Live inventory across <strong className="text-white">Downtown</strong>, <strong className="text-white">Westside</strong>, <strong className="text-white">Uptown</strong> & <strong className="text-white">Airport</strong> marts.
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Flagship Hardware Showcase Card */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-b from-slate-800/60 to-slate-900/90 border border-slate-700/70 rounded-2xl p-4 sm:p-5 shadow-2xl relative backdrop-blur-xl">
              {/* Product Category Tabs */}
              <div className="flex items-center gap-1.5 p-1 bg-slate-950/70 rounded-xl mb-4 overflow-x-auto no-scrollbar">
                {heroProducts.map((prod, idx) => (
                  <button
                    key={prod.id}
                    onClick={() => setActiveTab(idx)}
                    className={`flex-shrink-0 flex-1 py-1.5 px-3 rounded-lg text-xs font-semibold whitespace-nowrap transition-all flex items-center justify-center gap-1.5 min-h-[36px] ${
                      activeTab === idx
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-md font-bold'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    {idx === 0 && <Laptop className="w-3.5 h-3.5" />}
                    {idx === 1 && <Headphones className="w-3.5 h-3.5" />}
                    {idx === 2 && <Tv className="w-3.5 h-3.5" />}
                    {idx === 3 && <Camera className="w-3.5 h-3.5" />}
                    <span>{prod.brandName}</span>
                  </button>
                ))}
              </div>

              {/* Showcase Image with Floating Badges */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-950 border border-slate-800 group">
                <img
                  src={currentProduct.image}
                  alt={currentProduct.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none"></div>

                {/* Stock badge */}
                <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md border border-slate-700 px-3 py-1 rounded-full text-xs font-semibold text-emerald-400 flex items-center gap-1.5 shadow">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>In Stock at All Mart Branches</span>
                </div>

                {/* Rating badge */}
                <div className="absolute top-3 right-3 bg-slate-900/90 backdrop-blur-md border border-slate-700 px-2.5 py-1 rounded-full text-xs font-bold text-amber-300 flex items-center gap-1 shadow">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  <span>{currentProduct.rating}</span>
                </div>

                {/* Bottom spec ticker */}
                <div className="absolute bottom-3 left-3 right-3 bg-slate-950/80 backdrop-blur-md border border-slate-800/80 rounded-lg p-2.5">
                  <p className="text-[11px] font-mono text-cyan-400 tracking-wide truncate">
                    {currentProduct.specHighlight}
                  </p>
                </div>
              </div>

              {/* Product Info & Quick Action */}
              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs uppercase font-bold text-cyan-400 tracking-wider">
                    {currentProduct.brandName} Authorized
                  </span>
                  <span className="text-xs text-slate-400">
                    {currentProduct.warrantyYears}-Year Mart Warranty
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white line-clamp-1">
                  {currentProduct.name}
                </h3>

                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                  {currentProduct.tagline}
                </p>

                <div className="flex items-center justify-between pt-2 border-t border-slate-800">
                  <div>
                    <div className="text-xl sm:text-2xl font-black text-white">
                      ${currentProduct.price.toLocaleString()}
                    </div>
                    {currentProduct.originalPrice > currentProduct.price && (
                      <span className="text-xs text-slate-400 line-through">
                        MSRP ${currentProduct.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => onQuickViewProduct(currentProduct)}
                    className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-100 text-xs sm:text-sm font-semibold border border-slate-700 transition-colors flex items-center gap-1.5"
                  >
                    <span>View Device Specs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Bar Ticker Strip */}
        <div className="mt-14 pt-8 border-t border-slate-800/70">
          <p className="text-center text-xs uppercase font-bold tracking-widest text-slate-400 mb-6">
            Authorized Flagship Brand Partners in Our Showrooms
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 text-center">
            {['APPLE', 'SONY', 'SAMSUNG', 'BOSE', 'LG ELECTRONICS', 'DJI'].map((brand, i) => (
              <div
                key={i}
                className="py-3 px-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-colors"
              >
                <span className="text-xs sm:text-sm font-black tracking-widest text-slate-300 hover:text-white">
                  {brand}
                </span>
                <span className="block text-[10px] text-slate-400">Direct Factory Partner</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
