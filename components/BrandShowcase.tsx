'use client';

import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Award, 
  ExternalLink, 
  Globe, 
  CheckCircle, 
  Sparkles, 
  Filter, 
  ArrowRight,
  Info
} from 'lucide-react';
import { BRANDS, Brand } from '@/data/brands';

interface BrandShowcaseProps {
  selectedBrand: string;
  onSelectBrand: (brandId: string) => void;
  onScrollToCatalog: () => void;
}

export const BrandShowcase: React.FC<BrandShowcaseProps> = ({
  selectedBrand,
  onSelectBrand,
  onScrollToCatalog,
}) => {
  const [activeBrandModal, setActiveBrandModal] = useState<Brand | null>(null);

  return (
    <section id="brands" className="py-16 md:py-24 bg-slate-950 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400 mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>Official Manufacturer Representation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Authorized Electronic Brands in Store
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-2 leading-relaxed">
              Every device on our showroom floor is sourced directly through official manufacturer channels—complete with genuine serial registration, international warranty protection, and factory-certified support.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {selectedBrand && (
              <button
                onClick={() => onSelectBrand('')}
                className="text-xs text-amber-400 hover:text-amber-300 font-semibold px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 transition-colors"
              >
                Clear Brand Filter ({BRANDS.find(b => b.id === selectedBrand)?.name})
              </button>
            )}
            <span className="text-xs text-slate-400">
              Showing <strong>{BRANDS.length}</strong> Authorized Partners
            </span>
          </div>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {BRANDS.map((brand) => {
            const isSelected = selectedBrand === brand.id;

            return (
              <div
                key={brand.id}
                className={`relative group rounded-2xl p-5 border transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-900 border-cyan-500 shadow-xl shadow-cyan-500/10 ring-1 ring-cyan-500'
                    : 'bg-slate-900/70 hover:bg-slate-900 border-slate-800 hover:border-slate-700 shadow-md'
                }`}
              >
                {/* Card Header: Brand Name + Tier */}
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-black tracking-wider text-white group-hover:text-cyan-400 transition-colors">
                        {brand.name}
                      </h3>
                      <p className="text-xs text-slate-400">{brand.category}</p>
                    </div>

                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${brand.badgeBg}`}>
                      {brand.tier.includes('Flagship') ? 'Flagship' : 'Distributor'}
                    </span>
                  </div>

                  {/* Brand Tagline */}
                  <p className="text-xs text-slate-300 font-medium mb-3 italic">
                    &ldquo;{brand.tagline}&rdquo;
                  </p>

                  <p className="text-xs text-slate-400 line-clamp-2 mb-4 leading-relaxed">
                    {brand.description}
                  </p>

                  {/* Specs & Warranty Badges */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-800/80 text-xs">
                    <div className="flex items-center gap-1.5 text-slate-300">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span className="text-slate-400">Warranty:</span>
                      <span className="font-semibold text-slate-200 truncate">{brand.warranty}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-300">
                      <Globe className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
                      <span className="text-slate-400">Origin:</span>
                      <span className="text-slate-300">{brand.origin}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-300">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                      <span className="text-slate-400">Flagship:</span>
                      <span className="text-slate-200 font-medium truncate">{brand.featuredProduct}</span>
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setActiveBrandModal(brand)}
                    className="text-xs text-slate-400 hover:text-white flex items-center gap-1 py-1"
                    title="View authorization credentials"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>Credentials</span>
                  </button>

                  <button
                    onClick={() => {
                      onSelectBrand(isSelected ? '' : brand.id);
                      onScrollToCatalog();
                    }}
                    className={`text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1 transition-all ${
                      isSelected
                        ? 'bg-cyan-500 text-slate-950 shadow-sm'
                        : 'bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700'
                    }`}
                  >
                    <span>{isSelected ? 'Filtered' : 'View Products'}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Corporate Client Assurance Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-800/80 border border-slate-700/80 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">
                Need Official Brand Invoicing & Certificate of Origin for Corporate Accounts?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                VoltCore Mart provides official customs documentation, serial number auditing, and bulk enterprise licensing for corporate procurement.
              </p>
            </div>
          </div>

          <a
            href="#corporate"
            className="whitespace-nowrap px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 text-xs sm:text-sm font-bold border border-slate-600 transition-colors flex items-center gap-2"
          >
            <span>Request Corporate Brand Quotation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Brand Credentials Modal */}
      {activeBrandModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs uppercase font-bold text-cyan-400 tracking-wider">
                  Manufacturer Authorization Record
                </span>
                <h3 className="text-2xl font-black text-white">{activeBrandModal.name}</h3>
              </div>
              <button
                onClick={() => setActiveBrandModal(null)}
                className="text-slate-400 hover:text-white text-lg p-1 rounded-lg hover:bg-slate-800"
              >
                ✕
              </button>
            </div>

            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2 text-xs">
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-400">Partnership Tier</span>
                <span className="font-bold text-amber-300">{activeBrandModal.tier}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-400">Manufacturer HQ</span>
                <span className="text-slate-200">{activeBrandModal.origin}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-400">Authorized Warranty</span>
                <span className="font-semibold text-emerald-400">{activeBrandModal.warranty}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-400">Demo Units in Store</span>
                <span className="text-slate-200">Available across all 4 branches</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-400">Service Coverage</span>
                <span className="text-slate-200">Full Hardware Replacement & On-Site Service</span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              {activeBrandModal.description} All firmware updates, official accessories, and replacement parts are guaranteed genuine.
            </p>

            <div className="flex gap-3 pt-2">
              <button
                onClick={() => {
                  onSelectBrand(activeBrandModal.id);
                  setActiveBrandModal(null);
                  onScrollToCatalog();
                }}
                className="flex-1 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm transition-colors"
              >
                Filter {activeBrandModal.name} Products
              </button>
              <button
                onClick={() => setActiveBrandModal(null)}
                className="py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
