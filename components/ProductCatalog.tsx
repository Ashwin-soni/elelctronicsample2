'use client';

import React, { useState, useMemo } from 'react';
import { 
  SlidersHorizontal, 
  Search, 
  Star, 
  CheckCircle2, 
  MapPin, 
  Plus, 
  Check, 
  Eye, 
  ArrowUpDown, 
  Sparkles, 
  Tag, 
  Layers, 
  X,
  Laptop,
  Headphones,
  Tv,
  Home,
  Camera,
  Gamepad2,
  Package
} from 'lucide-react';
import { Product } from '@/data/products';
import { BRANDS } from '@/data/brands';
import { STORE_LOCATIONS } from '@/data/locations';

interface ProductCatalogProps {
  products: Product[];
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  selectedBrand: string;
  onSelectBrand: (brandId: string) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onQuickView: (p: Product) => void;
  onAddToCart: (p: Product) => void;
  onToggleCompare: (p: Product) => void;
  comparedProductIds: string[];
  cartItemIds: string[];
}

const CATEGORIES = [
  { id: 'all', label: 'All Electronics', icon: Package },
  { id: 'Computing & Laptops', label: 'Computing & Laptops', icon: Laptop },
  { id: 'Audio & Acoustics', label: 'Audio & Acoustics', icon: Headphones },
  { id: 'Displays & OLED TVs', label: 'Displays & OLED TVs', icon: Tv },
  { id: 'Smart Home & Living', label: 'Smart Home & Living', icon: Home },
  { id: 'Cameras & Aerial', label: 'Cameras & Aerial', icon: Camera },
  { id: 'Gaming & Battlestation', label: 'Gaming & Battlestation', icon: Gamepad2 },
];

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  products,
  selectedCategory,
  onSelectCategory,
  selectedBrand,
  onSelectBrand,
  searchQuery,
  onSearchChange,
  onQuickView,
  onAddToCart,
  onToggleCompare,
  comparedProductIds,
  cartItemIds,
}) => {
  const [priceRange, setPriceRange] = useState<number>(5000);
  const [onlyDemoAvailable, setOnlyDemoAvailable] = useState<boolean>(false);
  const [onlyInStock, setOnlyInStock] = useState<boolean>(false);
  const [selectedLocationStock, setSelectedLocationStock] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [showMobileFilters, setShowMobileFilters] = useState<boolean>(false);

  // Filtered and sorted products
  const filteredProducts = useMemo(() => {
    return products
      .filter((prod) => {
        // Category filter
        if (selectedCategory !== 'all' && prod.category !== selectedCategory) {
          return false;
        }
        // Brand filter
        if (selectedBrand && prod.brandId !== selectedBrand) {
          return false;
        }
        // Price filter
        if (prod.price > priceRange) {
          return false;
        }
        // Demo available
        if (onlyDemoAvailable && !prod.demoAvailable) {
          return false;
        }
        // Location stock
        if (selectedLocationStock !== 'all' && !prod.stockLocations.includes(selectedLocationStock)) {
          return false;
        }
        // Search filter
        if (searchQuery.trim().length > 0) {
          const q = searchQuery.toLowerCase();
          const matchName = prod.name.toLowerCase().includes(q);
          const matchBrand = prod.brandName.toLowerCase().includes(q);
          const matchSpec = prod.specHighlight.toLowerCase().includes(q);
          const matchTagline = prod.tagline.toLowerCase().includes(q);
          if (!matchName && !matchBrand && !matchSpec && !matchTagline) {
            return false;
          }
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        // Default featured
        return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
      });
  }, [
    products,
    selectedCategory,
    selectedBrand,
    priceRange,
    onlyDemoAvailable,
    selectedLocationStock,
    searchQuery,
    sortBy,
  ]);

  const activeFiltersCount = 
    (selectedCategory !== 'all' ? 1 : 0) +
    (selectedBrand ? 1 : 0) +
    (priceRange < 5000 ? 1 : 0) +
    (onlyDemoAvailable ? 1 : 0) +
    (selectedLocationStock !== 'all' ? 1 : 0) +
    (searchQuery ? 1 : 0);

  const clearAllFilters = () => {
    onSelectCategory('all');
    onSelectBrand('');
    setPriceRange(5000);
    setOnlyDemoAvailable(false);
    setSelectedLocationStock('all');
    onSearchChange('');
  };

  return (
    <section id="catalog" className="py-16 md:py-24 bg-slate-900 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Mart Inventory Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Featured Electronics & Hardware Catalog
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-1">
              Live in-store stock availability, verified manufacturer specifications, and demo status across our 4 electronics experience centers.
            </p>
          </div>

          {/* Search feedback & clear buttons */}
          <div className="flex items-center gap-3">
            {activeFiltersCount > 0 && (
              <button
                onClick={clearAllFilters}
                className="text-xs font-semibold text-amber-400 hover:text-amber-300 px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 transition-colors flex items-center gap-1.5"
              >
                <X className="w-3.5 h-3.5" />
                <span>Reset Filters ({activeFiltersCount})</span>
              </button>
            )}
            <button
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="lg:hidden px-3.5 py-2 rounded-xl bg-slate-800 text-slate-200 border border-slate-700 text-xs font-semibold flex items-center gap-2"
            >
              <SlidersHorizontal className="w-4 h-4 text-cyan-400" />
              <span>Filters ({activeFiltersCount})</span>
            </button>
          </div>
        </div>

        {/* Category Filter Pill Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold shadow-lg shadow-cyan-500/20'
                    : 'bg-slate-950/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Catalog Layout: Sidebar Filters + Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar Filter Panel (Desktop + Mobile Drawer) */}
          <aside
            className={`lg:col-span-3 space-y-6 bg-slate-950/90 border border-slate-800/80 p-5 rounded-2xl h-fit sticky top-24 z-30 ${
              showMobileFilters ? 'block' : 'hidden lg:block'
            }`}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2 text-sm font-bold text-white">
                <SlidersHorizontal className="w-4 h-4 text-cyan-400" />
                <span>Refine Inventory</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400">
                  {filteredProducts.length} items
                </span>
                {/* Mobile close button */}
                <button
                  onClick={() => setShowMobileFilters(false)}
                  className="lg:hidden p-1 text-slate-400 hover:text-white bg-slate-900 rounded-lg border border-slate-800"
                  aria-label="Close filters"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Filter by Brand */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                Brand Filter
              </label>
              <select
                value={selectedBrand}
                onChange={(e) => onSelectBrand(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-cyan-500"
              >
                <option value="">All Authorized Brands ({BRANDS.length})</option>
                {BRANDS.map((b) => (
                  <option key={b.id} value={b.id}>
                    {b.name} ({b.tier.includes('Flagship') ? 'Flagship' : 'Partner'})
                  </option>
                ))}
              </select>
            </div>

            {/* Filter by Store Location Stock */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Branch Stock Filter</span>
              </label>
              <select
                value={selectedLocationStock}
                onChange={(e) => setSelectedLocationStock(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-cyan-500"
              >
                <option value="all">Available Across All Mart Branches</option>
                {STORE_LOCATIONS.map((loc) => (
                  <option key={loc.id} value={loc.id}>
                    {loc.name.split('&')[0]} ({loc.district})
                  </option>
                ))}
              </select>
            </div>

            {/* Price Range Slider */}
            <div className="space-y-3 pt-2">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-slate-400">Max Budget</span>
                <span className="text-cyan-400 font-bold">${priceRange.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="100"
                max="5000"
                step="100"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>$100</span>
                <span>$2,500</span>
                <span>$5,000+</span>
              </div>
            </div>

            {/* Quick Checkboxes */}
            <div className="space-y-3 pt-3 border-t border-slate-800 text-xs">
              <label className="flex items-center gap-2 text-slate-300 hover:text-white cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={onlyDemoAvailable}
                  onChange={(e) => setOnlyDemoAvailable(e.target.checked)}
                  className="rounded border-slate-700 text-cyan-500 focus:ring-cyan-500 bg-slate-900"
                />
                <span>Live In-Store Hands-on Demo</span>
              </label>

              <label className="flex items-center gap-2 text-slate-300 hover:text-white cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={onlyInStock}
                  onChange={(e) => setOnlyInStock(e.target.checked)}
                  className="rounded border-slate-700 text-cyan-500 focus:ring-cyan-500 bg-slate-900"
                />
                <span>Ready for 15-Min Express Pickup</span>
              </label>
            </div>

            {/* In-Store Consultation Callout */}
            <div className="p-3.5 rounded-xl bg-gradient-to-br from-slate-900 to-slate-800/80 border border-slate-700/60 text-xs space-y-2">
              <p className="font-bold text-white flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5 text-amber-400" />
                <span>Price Match Assurance</span>
              </p>
              <p className="text-slate-400 leading-relaxed">
                Found a lower price at another authorized national dealer? VoltCore Mart guarantees an instant on-the-spot price match.
              </p>
            </div>
          </aside>

          {/* Main Product Cards Grid */}
          <main className="lg:col-span-9 space-y-6">
            {/* Sorting & Results Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-950/60 border border-slate-800 px-4 py-3 rounded-xl">
              <div className="text-xs sm:text-sm text-slate-300">
                Showing <strong className="text-white">{filteredProducts.length}</strong> verified electronics
                {selectedCategory !== 'all' && <span> in <span className="text-cyan-400 font-semibold">{selectedCategory}</span></span>}
              </div>

              <div className="flex items-center gap-2 text-xs">
                <span className="text-slate-400 flex items-center gap-1">
                  <ArrowUpDown className="w-3.5 h-3.5" />
                  <span>Sort by:</span>
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-slate-200 focus:outline-none focus:border-cyan-500"
                >
                  <option value="featured">Featured First</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Customer Rating</option>
                </select>
              </div>
            </div>

            {/* Empty state */}
            {filteredProducts.length === 0 ? (
              <div className="p-12 text-center bg-slate-950/40 rounded-2xl border border-slate-800 space-y-4">
                <Package className="w-12 h-12 text-slate-600 mx-auto" />
                <h3 className="text-lg font-bold text-white">No products found matching criteria</h3>
                <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
                  Try adjusting your price range, clearing brand filters, or resetting your search term.
                </p>
                <button
                  onClick={clearAllFilters}
                  className="px-4 py-2 bg-cyan-500 text-slate-950 font-bold rounded-xl text-xs hover:bg-cyan-400 transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              /* Products Grid */
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {filteredProducts.map((prod) => {
                  const isCompared = comparedProductIds.includes(prod.id);
                  const isAddedToCart = cartItemIds.includes(prod.id);

                  return (
                    <div
                      key={prod.id}
                      className="group bg-slate-950/80 hover:bg-slate-900 border border-slate-800/80 hover:border-slate-700 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:shadow-cyan-500/5"
                    >
                      {/* Image Container with Badges */}
                      <div 
                        onClick={() => onQuickView(prod)}
                        className="relative aspect-[4/3] bg-slate-950 overflow-hidden cursor-pointer group"
                      >
                        <img
                          src={prod.image}
                          alt={prod.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />

                        {/* Top Badges */}
                        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 z-10">
                          {prod.isNew && (
                            <span className="text-[10px] uppercase font-black px-2 py-0.5 rounded bg-cyan-500 text-slate-950 shadow">
                              New Release
                            </span>
                          )}
                          {prod.isBestseller && (
                            <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-amber-500 text-slate-950 shadow">
                              Bestseller
                            </span>
                          )}
                        </div>

                        {/* Quick View Button on Hover for Desktop */}
                        <div className="hidden sm:flex absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity items-center justify-center gap-2 p-4">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              onQuickView(prod);
                            }}
                            className="px-3.5 py-2 rounded-xl bg-slate-900/90 text-white text-xs font-semibold hover:bg-white hover:text-slate-950 transition-colors flex items-center gap-1.5 shadow-xl backdrop-blur-md min-h-[44px]"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            <span>Quick Specs</span>
                          </button>
                        </div>

                        {/* Mobile Tap Specs Badge */}
                        <div className="sm:hidden absolute top-2.5 right-2.5 bg-slate-950/80 backdrop-blur-md border border-slate-700/80 px-2 py-1 rounded-lg text-[10px] font-semibold text-slate-200 flex items-center gap-1 shadow">
                          <Eye className="w-3 h-3 text-cyan-400" />
                          <span>Specs</span>
                        </div>

                        {/* In-Store Demo Badge */}
                        {prod.demoAvailable && (
                          <div className="absolute bottom-2.5 left-2.5 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 px-2 py-0.5 rounded-full text-[10px] font-semibold text-emerald-300 flex items-center gap-1 shadow">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                            <span>Live Demo Ready</span>
                          </div>
                        )}
                      </div>

                      {/* Product Content */}
                      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                        <div>
                          {/* Brand & Category Info */}
                          <div className="flex items-center justify-between text-xs mb-1">
                            <span className="font-bold text-cyan-400 tracking-wide">
                              {prod.brandName}
                            </span>
                            <div className="flex items-center gap-1 text-amber-400 font-semibold text-[11px]">
                              <Star className="w-3 h-3 fill-amber-400" />
                              <span>{prod.rating}</span>
                              <span className="text-slate-400 text-[10px]">({prod.reviewCount})</span>
                            </div>
                          </div>

                          {/* Product Name */}
                          <h3 
                            onClick={() => onQuickView(prod)}
                            className="font-bold text-slate-100 group-hover:text-amber-300 transition-colors text-sm sm:text-base line-clamp-2 cursor-pointer"
                          >
                            {prod.name}
                          </h3>

                          {/* Highlight Spec Pill */}
                          <div className="mt-2 text-[11px] font-mono text-slate-300 bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 truncate">
                            {prod.specHighlight}
                          </div>
                        </div>

                        {/* Pricing & Store Availability */}
                        <div className="space-y-2 pt-2 border-t border-slate-800/80">
                          <div className="flex items-baseline justify-between">
                            <div className="flex items-baseline gap-2">
                              <span className="text-lg sm:text-xl font-black text-white">
                                ${prod.price.toLocaleString()}
                              </span>
                              {prod.originalPrice > prod.price && (
                                <span className="text-xs text-slate-400 line-through">
                                  ${prod.originalPrice.toLocaleString()}
                                </span>
                              )}
                            </div>
                            {prod.originalPrice > prod.price && (
                              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400">
                                Save ${(prod.originalPrice - prod.price).toLocaleString()}
                              </span>
                            )}
                          </div>

                          {/* In-Store Stock Indicator */}
                          <div className="text-[11px] text-slate-400 flex items-center justify-between">
                            <span className="flex items-center gap-1 text-emerald-400 font-medium">
                              <CheckCircle2 className="w-3 h-3" />
                              <span>In Stock: {prod.stockLocations.length} Marts</span>
                            </span>
                            <span className="text-slate-400">{prod.warrantyYears}y Warranty</span>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="grid grid-cols-2 gap-2 pt-2">
                          <button
                            onClick={() => onToggleCompare(prod)}
                            className={`py-2 px-2.5 rounded-xl text-xs font-semibold transition-colors flex items-center justify-center gap-1 border min-h-[44px] ${
                              isCompared
                                ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50'
                                : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border-slate-800 hover:border-slate-700'
                            }`}
                            title="Compare side by side"
                          >
                            <SlidersHorizontal className="w-3.5 h-3.5" />
                            <span>{isCompared ? 'Compared' : 'Compare'}</span>
                          </button>

                          <button
                            onClick={() => onAddToCart(prod)}
                            className={`py-2 px-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1 shadow-sm min-h-[44px] ${
                              isAddedToCart
                                ? 'bg-emerald-500 text-slate-950 font-black'
                                : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950'
                            }`}
                          >
                            {isAddedToCart ? (
                              <>
                                <Check className="w-3.5 h-3.5" />
                                <span>In Quote</span>
                              </>
                            ) : (
                              <>
                                <Plus className="w-3.5 h-3.5" />
                                <span>Add to Cart</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </main>
        </div>
      </div>
    </section>
  );
};
