'use client';

import React, { useState } from 'react';
import { 
  Search, 
  MapPin, 
  ShoppingBag, 
  SlidersHorizontal, 
  Phone, 
  ShieldCheck, 
  Clock, 
  ArrowRight,
  X,
  ExternalLink,
  Store,
  Layers,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { BRANDS } from '@/data/brands';
import { Product } from '@/data/products';

interface NavbarProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedBrand: string;
  onSelectBrand: (brandId: string) => void;
  cartCount: number;
  compareCount: number;
  onOpenCart: () => void;
  onOpenCompare: () => void;
  onScrollToSection: (sectionId: string) => void;
  searchResults: Product[];
  onSelectProduct: (p: Product) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  searchQuery,
  onSearchChange,
  selectedBrand,
  onSelectBrand,
  cartCount,
  compareCount,
  onOpenCart,
  onOpenCompare,
  onScrollToSection,
  searchResults,
  onSelectProduct,
}) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [brandDropdownOpen, setBrandDropdownOpen] = useState(false);
  const [clientModeActive, setClientModeActive] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl transition-all">
      {/* Top Utility Bar */}
      <div className="bg-slate-900/90 text-[11px] sm:text-xs text-slate-300 border-b border-slate-800/60 px-3 sm:px-6 py-1.5 sm:py-2">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-3">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <span className="inline-flex items-center gap-1.5 text-emerald-400 font-medium whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="inline sm:hidden">4 Marts Open (9 AM – 10 PM)</span>
              <span className="hidden sm:inline">All 4 Showrooms Open Today (9:00 AM – 10:00 PM)</span>
            </span>
            <span className="hidden md:inline-block text-slate-500">|</span>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              100% Genuine Authorized Warranty
            </span>
            <span className="hidden lg:inline-block text-slate-500">|</span>
            <span className="hidden lg:inline-flex items-center gap-1 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              15-Min Express Showroom Pickup
            </span>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4 ml-auto">
            <a 
              href="tel:18008658267" 
              className="inline-flex items-center gap-1 text-slate-300 hover:text-white transition-colors text-[11px] sm:text-xs whitespace-nowrap"
            >
              <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400" />
              <span className="hidden sm:inline">Concierge:</span> +1 (800) 865-8267
            </a>
            
            <button
              onClick={() => {
                setClientModeActive(!clientModeActive);
              }}
              className={`text-[10px] sm:text-xs px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border transition-all flex items-center gap-1 sm:gap-1.5 whitespace-nowrap ${
                clientModeActive 
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-sm'
                  : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-slate-200'
              }`}
              title="Toggle presentation layout for showing to clients"
            >
              <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-amber-400" />
              <span className="font-medium">Client Mode</span>
              {clientModeActive && <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>}
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => {
              onSearchChange('');
              onSelectBrand('');
              onScrollToSection('hero');
            }}
            className="flex items-center gap-2.5 text-left group focus:outline-none"
            id="brand-logo-btn"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all">
              <Store className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-black text-xl tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                  VOLT<span className="text-amber-400">&</span>CORE
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  MART
                </span>
              </div>
              <p className="text-[11px] text-slate-400 tracking-wide">
                Electronics & Smart Tech Showroom
              </p>
            </div>
          </button>
        </div>

        {/* Global Live Search Bar */}
        <div className="relative flex-1 max-w-xl mx-4 hidden md:block">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search 1,200+ electronics, brands (Sony, Apple, Bose, OLED TVs)..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setTimeout(() => setIsSearchFocused(false), 250)}
              className="w-full bg-slate-900/90 border border-slate-700/80 rounded-xl pl-10 pr-10 py-2.5 text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all"
              id="global-search-input"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Live Search Quick Results Dropdown */}
          {isSearchFocused && searchQuery.trim().length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl p-2 z-50 max-h-96 overflow-y-auto">
              <div className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-400 border-b border-slate-800 flex justify-between">
                <span>Matching Electronic Products</span>
                <span>{searchResults.length} found</span>
              </div>
              {searchResults.length === 0 ? (
                <div className="p-4 text-center text-sm text-slate-400">
                  No matching electronic devices found for &quot;{searchQuery}&quot;
                </div>
              ) : (
                <div className="divide-y divide-slate-800/60 mt-1">
                  {searchResults.slice(0, 5).map((prod) => (
                    <button
                      key={prod.id}
                      onClick={() => {
                        onSelectProduct(prod);
                        setIsSearchFocused(false);
                      }}
                      className="w-full text-left p-2.5 hover:bg-slate-800/80 rounded-lg flex items-center gap-3 transition-colors group"
                    >
                      <img
                        src={prod.image}
                        alt={prod.name}
                        referrerPolicy="no-referrer"
                        className="w-12 h-12 rounded object-cover border border-slate-700 bg-slate-950 flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold text-cyan-400">{prod.brandName}</span>
                          <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-800 text-slate-300">
                            {prod.category}
                          </span>
                        </div>
                        <p className="text-sm font-medium text-slate-100 truncate group-hover:text-amber-300 transition-colors">
                          {prod.name}
                        </p>
                        <p className="text-xs text-slate-400 truncate">{prod.specHighlight}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-white">${prod.price.toLocaleString()}</div>
                        <span className="text-[10px] text-emerald-400 flex items-center gap-0.5 justify-end">
                          <CheckCircle2 className="w-2.5 h-2.5" /> In Stock
                        </span>
                      </div>
                    </button>
                  ))}
                  {searchResults.length > 5 && (
                    <div className="pt-2 text-center">
                      <button
                        onClick={() => {
                          onScrollToSection('catalog');
                          setIsSearchFocused(false);
                        }}
                        className="text-xs text-cyan-400 hover:text-cyan-300 font-medium py-1"
                      >
                        View all {searchResults.length} results in catalog &rarr;
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Quick Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 text-sm font-medium text-slate-300">
          <button
            onClick={() => onScrollToSection('catalog')}
            className="px-3 py-2 rounded-lg hover:text-white hover:bg-slate-800/60 transition-colors"
          >
            Products Catalog
          </button>
          
          {/* Brands Popover Toggle */}
          <div className="relative">
            <button
              onClick={() => setBrandDropdownOpen(!brandDropdownOpen)}
              className={`px-3 py-2 rounded-lg transition-colors flex items-center gap-1 ${
                brandDropdownOpen || selectedBrand
                  ? 'text-cyan-400 bg-slate-800'
                  : 'hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <span>Brands</span>
              {selectedBrand && (
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300">
                  1
                </span>
              )}
            </button>

            {brandDropdownOpen && (
              <div 
                className="absolute top-full left-0 mt-2 w-72 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl p-3 z-50 grid grid-cols-2 gap-1.5"
                onMouseLeave={() => setBrandDropdownOpen(false)}
              >
                <div className="col-span-2 pb-1.5 mb-1 border-b border-slate-800 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Authorized Brands
                </div>
                <button
                  onClick={() => {
                    onSelectBrand('');
                    setBrandDropdownOpen(false);
                    onScrollToSection('catalog');
                  }}
                  className={`text-left px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    !selectedBrand ? 'bg-cyan-500/20 text-cyan-300' : 'text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  All Brands
                </button>
                {BRANDS.map((b) => (
                  <button
                    key={b.id}
                    onClick={() => {
                      onSelectBrand(b.id);
                      setBrandDropdownOpen(false);
                      onScrollToSection('catalog');
                    }}
                    className={`text-left px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center justify-between ${
                      selectedBrand === b.id
                        ? 'bg-cyan-500/20 text-cyan-300 font-semibold'
                        : 'text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <span>{b.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => onScrollToSection('locations')}
            className="px-3 py-2 rounded-lg hover:text-white hover:bg-slate-800/60 transition-colors flex items-center gap-1.5 text-amber-300"
          >
            <MapPin className="w-4 h-4 text-amber-400" />
            <span>Store Locations</span>
          </button>

          <button
            onClick={() => onScrollToSection('corporate')}
            className="px-3 py-2 rounded-lg hover:text-white hover:bg-slate-800/60 transition-colors"
          >
            Client & B2B
          </button>
        </nav>

        {/* Action Controls (Compare & Cart) */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Compare Button */}
          <button
            onClick={onOpenCompare}
            className="relative p-2.5 text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl transition-all border border-slate-800"
            title="Compare electronics specs"
            id="nav-compare-btn"
          >
            <SlidersHorizontal className="w-5 h-5" />
            {compareCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-cyan-500 text-slate-950 font-bold text-[11px] flex items-center justify-center shadow">
                {compareCount}
              </span>
            )}
          </button>

          {/* Cart / Client Quote Button */}
          <button
            onClick={onOpenCart}
            className="relative flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-semibold px-4 py-2.5 rounded-xl shadow-lg shadow-cyan-500/25 transition-all focus:outline-none"
            id="nav-cart-btn"
          >
            <ShoppingBag className="w-5 h-5 text-slate-950" />
            <span className="hidden sm:inline text-sm font-bold">Quote & Cart</span>
            {cartCount > 0 ? (
              <span className="w-5 h-5 rounded-full bg-slate-950 text-cyan-300 font-bold text-xs flex items-center justify-center">
                {cartCount}
              </span>
            ) : (
              <span className="w-2 h-2 rounded-full bg-slate-950/40"></span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl min-w-[44px] min-h-[44px] flex items-center justify-center"
            id="mobile-menu-toggle-btn"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Layers className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Search & Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 py-4 space-y-4 max-h-[80vh] overflow-y-auto">
          {/* Mobile Search Input */}
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search electronic devices & brands..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-10 pr-10 py-2.5 text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:border-cyan-400"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white p-1"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Live Mobile Search Results */}
          {searchQuery && searchResults.length > 0 && (
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-2 space-y-1">
              <div className="px-2 py-1 text-[11px] font-bold uppercase text-slate-400">
                Matches ({searchResults.length})
              </div>
              {searchResults.slice(0, 4).map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onSelectProduct(item);
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center gap-2.5 p-2 rounded-lg hover:bg-slate-900 text-left transition-colors"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-lg object-cover bg-slate-900 flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-white truncate">{item.name}</p>
                    <p className="text-[11px] text-cyan-400 font-semibold">${item.price.toLocaleString()}</p>
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* Quick Navigation Links */}
          <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
            <button
              onClick={() => {
                onScrollToSection('catalog');
                setMobileMenuOpen(false);
              }}
              className="p-3 bg-slate-800/80 rounded-xl text-left text-slate-200 hover:text-cyan-400 border border-slate-700/60 flex items-center gap-2 min-h-[44px]"
            >
              <Store className="w-4 h-4 text-cyan-400" />
              <span>Full Catalog</span>
            </button>
            <button
              onClick={() => {
                onScrollToSection('brands');
                setMobileMenuOpen(false);
              }}
              className="p-3 bg-slate-800/80 rounded-xl text-left text-slate-200 hover:text-cyan-400 border border-slate-700/60 flex items-center gap-2 min-h-[44px]"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>12 Brands</span>
            </button>
            <button
              onClick={() => {
                onScrollToSection('locations');
                setMobileMenuOpen(false);
              }}
              className="p-3 bg-slate-800/80 rounded-xl text-left text-amber-300 hover:text-amber-200 border border-slate-700/60 flex items-center gap-2 min-h-[44px]"
            >
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>4 Mart Locations</span>
            </button>
            <button
              onClick={() => {
                onScrollToSection('corporate');
                setMobileMenuOpen(false);
              }}
              className="p-3 bg-slate-800/80 rounded-xl text-left text-slate-200 hover:text-cyan-400 border border-slate-700/60 flex items-center gap-2 min-h-[44px]"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Client & B2B</span>
            </button>
          </div>

          {/* Brands Horizontal Scroller in Mobile Drawer */}
          <div className="space-y-2 pt-2 border-t border-slate-800">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Filter by Authorized Brand
            </div>
            <div className="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar">
              <button
                onClick={() => {
                  onSelectBrand('');
                  setMobileMenuOpen(false);
                  onScrollToSection('catalog');
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap border ${
                  !selectedBrand
                    ? 'bg-cyan-500 text-slate-950 border-cyan-400'
                    : 'bg-slate-950 text-slate-300 border-slate-800'
                }`}
              >
                All Brands
              </button>
              {BRANDS.map((b) => (
                <button
                  key={b.id}
                  onClick={() => {
                    onSelectBrand(b.id);
                    setMobileMenuOpen(false);
                    onScrollToSection('catalog');
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap border ${
                    selectedBrand === b.id
                      ? 'bg-cyan-500 text-slate-950 border-cyan-400 font-bold'
                      : 'bg-slate-950 text-slate-300 border-slate-800'
                  }`}
                >
                  {b.name}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Concierge Call on Mobile */}
          <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-slate-300">
            <span className="text-slate-400">Phone Consultation:</span>
            <a
              href="tel:18008658267"
              className="inline-flex items-center gap-1 text-amber-300 font-bold py-1 px-2 rounded-lg bg-slate-800 border border-slate-700"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>+1 (800) 865-8267</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
