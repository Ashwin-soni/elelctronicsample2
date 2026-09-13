'use client';

import React from 'react';
import { X, SlidersHorizontal, Trash2, ShoppingBag, Check, Star } from 'lucide-react';
import { Product } from '@/data/products';

interface CompareDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  comparedProducts: Product[];
  onRemoveProduct: (id: string) => void;
  onClearAll: () => void;
  onAddToCart: (p: Product) => void;
  cartItemIds: string[];
}

export const CompareDrawer: React.FC<CompareDrawerProps> = ({
  isOpen,
  onClose,
  comparedProducts,
  onRemoveProduct,
  onClearAll,
  onAddToCart,
  cartItemIds,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="bg-slate-900 border border-slate-700/80 rounded-t-3xl sm:rounded-3xl max-w-5xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/50">
          <div className="flex items-center gap-2.5">
            <SlidersHorizontal className="w-5 h-5 text-cyan-400" />
            <div>
              <h3 className="font-bold text-white text-base sm:text-lg">
                Side-by-Side Electronics Spec Comparison
              </h3>
              <p className="text-xs text-slate-400">
                Compare up to 3 devices across hardware specs, display ratings, and warranty.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {comparedProducts.length > 0 && (
              <button
                onClick={onClearAll}
                className="text-xs text-rose-400 hover:text-rose-300 font-semibold flex items-center gap-1"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear All</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1">
          {comparedProducts.length === 0 ? (
            <div className="py-12 text-center text-slate-400 space-y-2">
              <SlidersHorizontal className="w-12 h-12 mx-auto text-slate-600" />
              <p className="text-sm font-semibold text-white">No electronics selected for comparison</p>
              <p className="text-xs text-slate-400">
                Click &quot;Compare&quot; on any product card in the catalog to see them side-by-side.
              </p>
            </div>
          ) : (
            <div className="flex sm:grid sm:grid-cols-2 md:grid-cols-3 gap-4 overflow-x-auto sm:overflow-visible pb-3 sm:pb-0 snap-x snap-mandatory no-scrollbar">
              {comparedProducts.map((prod) => {
                const isInCart = cartItemIds.includes(prod.id);

                return (
                  <div
                    key={prod.id}
                    className="min-w-[82vw] sm:min-w-0 snap-center p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between space-y-4 flex-shrink-0 sm:flex-shrink"
                  >
                    {/* Top image & remove */}
                    <div>
                      <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-900 mb-3 border border-slate-800">
                        <img
                          src={prod.image}
                          alt={prod.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                        <button
                          onClick={() => onRemoveProduct(prod.id)}
                          className="absolute top-2 right-2 p-1.5 rounded-lg bg-slate-950/80 text-slate-300 hover:text-rose-400 transition-colors"
                          title="Remove from comparison"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="font-bold text-cyan-400">{prod.brandName}</span>
                        <div className="flex items-center gap-1 text-amber-400">
                          <Star className="w-3 h-3 fill-amber-400" />
                          <span className="font-bold">{prod.rating}</span>
                        </div>
                      </div>

                      <h4 className="font-bold text-white text-sm line-clamp-2">{prod.name}</h4>
                      <div className="text-lg font-black text-white mt-1">
                        ${prod.price.toLocaleString()}
                      </div>
                    </div>

                    {/* Specs List */}
                    <div className="space-y-2 text-xs border-t border-slate-800 pt-3">
                      <div className="bg-slate-900/80 p-2 rounded-lg">
                        <span className="text-[10px] text-slate-400 block uppercase font-bold">Key Spec</span>
                        <span className="text-slate-200 font-mono text-[11px]">{prod.specHighlight}</span>
                      </div>

                      {Object.entries(prod.specs).slice(0, 4).map(([key, val]) => (
                        <div key={key} className="flex justify-between py-1 border-b border-slate-800/60 text-[11px]">
                          <span className="text-slate-400">{key}:</span>
                          <span className="text-slate-200 font-medium text-right max-w-[55%] truncate">{val}</span>
                        </div>
                      ))}

                      <div className="flex justify-between py-1 text-[11px]">
                        <span className="text-slate-400">Mart Warranty:</span>
                        <span className="text-emerald-400 font-semibold">{prod.warrantyYears} Years Direct</span>
                      </div>

                      <div className="flex justify-between py-1 text-[11px]">
                        <span className="text-slate-400">In-Store Stock:</span>
                        <span className="text-cyan-300">{prod.stockLocations.length} Branches</span>
                      </div>
                    </div>

                    {/* Add to Cart button */}
                    <button
                      onClick={() => onAddToCart(prod)}
                      className={`w-full py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                        isInCart
                          ? 'bg-emerald-500 text-slate-950 font-black'
                          : 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 hover:from-cyan-400'
                      }`}
                    >
                      {isInCart ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>In Quote</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>Add to Quote / Cart</span>
                        </>
                      )}
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
