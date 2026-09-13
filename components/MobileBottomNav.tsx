'use client';

import React from 'react';
import { 
  Store, 
  Laptop, 
  MapPin, 
  SlidersHorizontal, 
  ShoppingBag,
  Building2
} from 'lucide-react';

interface MobileBottomNavProps {
  cartCount: number;
  compareCount: number;
  onOpenCart: () => void;
  onOpenCompare: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  cartCount,
  compareCount,
  onOpenCart,
  onOpenCompare,
  onScrollToSection,
}) => {
  return (
    <aside 
      aria-label="Mobile Navigation Bar"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-lg border-t border-slate-800/90 px-3 py-2 shadow-2xl safe-area-bottom"
    >
      <div className="flex items-center justify-around max-w-md mx-auto">
        {/* Home */}
        <button
          onClick={() => onScrollToSection('hero')}
          className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] py-1 text-slate-400 hover:text-cyan-400 active:text-cyan-400 transition-colors focus:outline-none"
        >
          <Store className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-semibold tracking-tight">Home</span>
        </button>

        {/* Catalog */}
        <button
          onClick={() => onScrollToSection('catalog')}
          className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] py-1 text-slate-400 hover:text-cyan-400 active:text-cyan-400 transition-colors focus:outline-none"
        >
          <Laptop className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-semibold tracking-tight">Catalog</span>
        </button>

        {/* Mart Locations */}
        <button
          onClick={() => onScrollToSection('locations')}
          className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] py-1 text-amber-400/90 hover:text-amber-300 active:text-amber-300 transition-colors focus:outline-none"
        >
          <MapPin className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-semibold tracking-tight">4 Marts</span>
        </button>

        {/* Compare */}
        <button
          onClick={onOpenCompare}
          className="relative flex flex-col items-center justify-center min-w-[56px] min-h-[44px] py-1 text-slate-400 hover:text-cyan-400 active:text-cyan-400 transition-colors focus:outline-none"
        >
          <div className="relative">
            <SlidersHorizontal className="w-5 h-5 mb-0.5" />
            {compareCount > 0 && (
              <span className="absolute -top-1.5 -right-2.5 w-4 h-4 rounded-full bg-cyan-500 text-slate-950 font-black text-[9px] flex items-center justify-center shadow">
                {compareCount}
              </span>
            )}
          </div>
          <span className="text-[10px] font-semibold tracking-tight">Compare</span>
        </button>

        {/* Cart / Quote */}
        <button
          onClick={onOpenCart}
          className="relative flex flex-col items-center justify-center min-w-[56px] min-h-[44px] py-1 text-slate-400 hover:text-cyan-400 active:text-cyan-400 transition-colors focus:outline-none"
        >
          <div className="relative">
            <ShoppingBag className="w-5 h-5 mb-0.5 text-cyan-400" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-2.5 w-4 h-4 rounded-full bg-amber-400 text-slate-950 font-black text-[9px] flex items-center justify-center shadow">
                {cartCount}
              </span>
            )}
          </div>
          <span className="text-[10px] font-bold text-cyan-300 tracking-tight">Quote/Cart</span>
        </button>
      </div>
    </aside>
  );
};
