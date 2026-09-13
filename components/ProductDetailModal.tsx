'use client';

import React, { useState } from 'react';
import { 
  X, 
  Star, 
  ShieldCheck, 
  MapPin, 
  CheckCircle2, 
  ShoppingBag, 
  SlidersHorizontal, 
  Package, 
  Check, 
  Share2, 
  Sparkles,
  Info,
  Clock,
  Truck
} from 'lucide-react';
import { Product } from '@/data/products';
import { STORE_LOCATIONS } from '@/data/locations';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (p: Product) => void;
  onToggleCompare: (p: Product) => void;
  isCompared: boolean;
  isInCart: boolean;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onToggleCompare,
  isCompared,
  isInCart,
}) => {
  const [activeTab, setActiveTab] = useState<'specs' | 'locations' | 'box'>('specs');
  const [reserveToast, setReserveToast] = useState<string | null>(null);

  if (!product) return null;

  const handleReserve = (branchName: string) => {
    setReserveToast(`Unit reserved at ${branchName}! Hold valid for 4 hours.`);
    setTimeout(() => setReserveToast(null), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative my-auto">
        {/* Modal Header */}
        <div className="sticky top-0 z-20 bg-slate-900/95 backdrop-blur-md px-4 sm:px-6 py-3.5 sm:py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[11px] sm:text-xs uppercase font-bold px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
              {product.brandName} Official
            </span>
            <span className="text-[11px] sm:text-xs text-slate-400">{product.category}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors min-w-[36px] min-h-[36px] flex items-center justify-center"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 space-y-5 sm:space-y-6">
          {/* Top Section: Photo + Core Info */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            {/* Image Showcase */}
            <div className="md:col-span-6 relative aspect-square rounded-xl overflow-hidden bg-slate-950 border border-slate-800">
              <img
                src={product.image}
                alt={product.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md border border-slate-700 px-2.5 py-1 rounded-full text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Genuine Sealed Stock</span>
              </div>
            </div>

            {/* Core Info & Actions */}
            <div className="md:col-span-6 space-y-4">
              <div>
                <div className="flex items-center gap-2 text-xs text-amber-400 mb-1">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 fill-amber-400" />
                    <span className="font-bold ml-1">{product.rating}</span>
                  </div>
                  <span className="text-slate-400">({product.reviewCount} verified client reviews)</span>
                </div>

                <h2 className="text-xl sm:text-2xl font-black text-white leading-tight">
                  {product.name}
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  {product.tagline}
                </p>
              </div>

              {/* Pricing & Guarantee Box */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-2xl sm:text-3xl font-black text-white">
                      ${product.price.toLocaleString()}
                    </span>
                    {product.originalPrice > product.price && (
                      <span className="text-xs text-slate-400 line-through ml-2">
                        MSRP ${product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400">
                    In Stock: Ready to Ship / Collect
                  </span>
                </div>

                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1 text-slate-300">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>{product.warrantyYears}-Year Official Warranty</span>
                  </span>
                  <span className="flex items-center gap-1 text-slate-300">
                    <Clock className="w-4 h-4 text-cyan-400" />
                    <span>15-Min Pickup Ready</span>
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-2">
                <button
                  onClick={() => onAddToCart(product)}
                  className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 shadow-lg min-h-[44px] ${
                    isInCart
                      ? 'bg-emerald-500 text-slate-950'
                      : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950'
                  }`}
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>{isInCart ? 'Added to Quote' : 'Add to Cart / Quote'}</span>
                </button>

                <button
                  onClick={() => onToggleCompare(product)}
                  className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-colors flex items-center justify-center gap-2 border min-h-[44px] ${
                    isCompared
                      ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50'
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
                  }`}
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  <span>{isCompared ? 'Compared' : 'Compare Specs'}</span>
                </button>
              </div>

              {/* Reserve Toast feedback */}
              {reserveToast && (
                <div className="p-3 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs rounded-xl flex items-center gap-2 animate-fadeIn">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>{reserveToast}</span>
                </div>
              )}
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex border-b border-slate-800 text-xs sm:text-sm font-semibold overflow-x-auto no-scrollbar">
            <button
              onClick={() => setActiveTab('specs')}
              className={`py-2.5 px-4 border-b-2 transition-colors whitespace-nowrap flex-shrink-0 min-h-[40px] ${
                activeTab === 'specs'
                  ? 'border-cyan-400 text-cyan-400'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              Technical Specifications
            </button>
            <button
              onClick={() => setActiveTab('locations')}
              className={`py-2.5 px-4 border-b-2 transition-colors whitespace-nowrap flex-shrink-0 min-h-[40px] ${
                activeTab === 'locations'
                  ? 'border-cyan-400 text-cyan-400'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              In-Store Availability ({product.stockLocations.length} Marts)
            </button>
            <button
              onClick={() => setActiveTab('box')}
              className={`py-2.5 px-4 border-b-2 transition-colors whitespace-nowrap flex-shrink-0 min-h-[40px] ${
                activeTab === 'box'
                  ? 'border-cyan-400 text-cyan-400'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              Package Contents
            </button>
          </div>

          {/* Tab Content */}
          <div>
            {activeTab === 'specs' && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div
                      key={key}
                      className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 flex flex-col justify-between text-xs"
                    >
                      <span className="font-bold text-slate-400 uppercase tracking-wider text-[10px]">
                        {key}
                      </span>
                      <span className="text-slate-100 font-medium mt-1">{value}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Key Engineering Highlights</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                    {product.keyFeatures.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'locations' && (
              <div className="space-y-3">
                <p className="text-xs text-slate-400">
                  Select a branch to reserve an express 4-hour hold or book an in-person demonstration with our sound & visual engineers:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {STORE_LOCATIONS.map((loc) => {
                    const inStockHere = product.stockLocations.includes(loc.id);

                    return (
                      <div
                        key={loc.id}
                        className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between space-y-2 text-xs"
                      >
                        <div>
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-white">{loc.name.split('&')[0]}</span>
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                              inStockHere ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-800 text-slate-400'
                            }`}>
                              {inStockHere ? 'In Stock (Live)' : 'Transfer Available (24h)'}
                            </span>
                          </div>
                          <p className="text-slate-400 text-[11px] mt-0.5">{loc.address}</p>
                          <p className="text-slate-400 text-[10px]">Hours: {loc.hours.weekday}</p>
                        </div>

                        {inStockHere && (
                          <button
                            onClick={() => handleReserve(loc.name.split(' ')[0])}
                            className="mt-2 py-1.5 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 text-xs font-semibold border border-slate-700 transition-colors text-center"
                          >
                            Hold for 4-Hour Pickup
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {activeTab === 'box' && (
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <Package className="w-4 h-4 text-cyan-400" />
                  <span>Factory Sealed Packaging Inclusions</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {product.inTheBox.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-slate-900 border border-slate-800/80 text-slate-200">
                      <span className="w-5 h-5 rounded-full bg-slate-800 text-cyan-400 flex items-center justify-center font-bold text-[10px]">
                        {idx + 1}
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
