'use client';

import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  ShieldCheck, 
  MapPin, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  FileText, 
  Tag
} from 'lucide-react';
import { Product } from '@/data/products';
import { STORE_LOCATIONS } from '@/data/locations';

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [fulfillmentType, setFulfillmentType] = useState<'pickup' | 'delivery'>('pickup');
  const [selectedPickupBranch, setSelectedPickupBranch] = useState(STORE_LOCATIONS[0].id);
  const [promoCode, setPromoCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0);
  const [promoMessage, setPromoMessage] = useState<string | null>(null);
  const [checkoutComplete, setCheckoutComplete] = useState(false);
  const [orderNumber, setOrderNumber] = useState<string>('VC-849201');

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const discountAmount = subtotal * appliedDiscount;
  const estimatedTax = (subtotal - discountAmount) * 0.0825; // 8.25% local tax
  const shippingFee = fulfillmentType === 'delivery' ? 45 : 0; // free pickup
  const grandTotal = subtotal - discountAmount + estimatedTax + shippingFee;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    const code = promoCode.trim().toUpperCase();
    if (code === 'TECHMART10') {
      setAppliedDiscount(0.10);
      setPromoMessage('10% Mart Opening Discount Applied!');
    } else if (code === 'CLIENTVIP') {
      setAppliedDiscount(0.15);
      setPromoMessage('15% VIP Corporate Client Discount Applied!');
    } else {
      setPromoMessage('Invalid coupon code. Try TECHMART10 or CLIENTVIP');
    }
  };

  const handleCompleteOrder = () => {
    setOrderNumber(`VC-${Math.floor(100000 + Math.random() * 900000)}`);
    setCheckoutComplete(true);
    setTimeout(() => {
      onClearCart();
      setCheckoutComplete(false);
      onClose();
    }, 3500);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/80 backdrop-blur-md">
      <div className="w-full max-w-md bg-slate-900 border-l border-slate-800 h-full flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-cyan-400" />
            <h3 className="font-bold text-white text-base">Client Quote & Cart</h3>
            <span className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 font-semibold">
              {cartItems.reduce((sum, i) => sum + i.quantity, 0)} items
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {checkoutComplete ? (
            <div className="py-16 text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white">Order / Quote Generated!</h4>
              <p className="text-xs text-slate-300 max-w-xs mx-auto leading-relaxed">
                Order #{orderNumber} has been reserved.
                {fulfillmentType === 'pickup' ? (
                  <span> Ready for pickup at <strong>{STORE_LOCATIONS.find(l => l.id === selectedPickupBranch)?.name.split(' ')[0]} Hub</strong> in 15 minutes.</span>
                ) : (
                  <span> Dispatched for white-glove courier delivery.</span>
                )}
              </p>
            </div>
          ) : cartItems.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <ShoppingBag className="w-12 h-12 mx-auto text-slate-600" />
              <p className="text-sm font-semibold text-white">Your cart / quote list is empty</p>
              <p className="text-xs text-slate-400 max-w-xs mx-auto">
                Browse our authorized electronic brands and hardware catalog to add items to your quote.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {cartItems.map((item) => (
                <div
                  key={item.product.id}
                  className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex gap-3 items-start"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    referrerPolicy="no-referrer"
                    className="w-16 h-16 rounded-lg object-cover bg-slate-900 border border-slate-800 flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <span className="text-[10px] uppercase font-bold text-cyan-400">
                        {item.product.brandName}
                      </span>
                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        className="text-slate-500 hover:text-rose-400"
                        title="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <h4 className="text-xs font-bold text-slate-100 truncate mt-0.5">
                      {item.product.name}
                    </h4>

                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs font-bold text-white">
                        ${(item.product.price * item.quantity).toLocaleString()}
                      </span>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-lg p-0.5">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, -1)}
                          className="w-5 h-5 rounded flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold text-slate-200 px-1">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, 1)}
                          className="w-5 h-5 rounded flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Fulfillment Method Selector */}
              <div className="pt-2 border-t border-slate-800 space-y-2 text-xs">
                <label className="text-xs font-bold text-slate-300 block">Fulfillment Method</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setFulfillmentType('pickup')}
                    className={`p-2.5 rounded-xl border text-left transition-all ${
                      fulfillmentType === 'pickup'
                        ? 'bg-slate-800 border-cyan-400 text-white'
                        : 'bg-slate-950 border-slate-800 text-slate-400'
                    }`}
                  >
                    <span className="font-bold block text-xs text-white">In-Store 15-Min Pickup</span>
                    <span className="text-[10px] text-emerald-400 font-semibold">FREE (Fast Locker / Counter)</span>
                  </button>

                  <button
                    onClick={() => setFulfillmentType('delivery')}
                    className={`p-2.5 rounded-xl border text-left transition-all ${
                      fulfillmentType === 'delivery'
                        ? 'bg-slate-800 border-cyan-400 text-white'
                        : 'bg-slate-950 border-slate-800 text-slate-400'
                    }`}
                  >
                    <span className="font-bold block text-xs text-white">White-Glove Courier</span>
                    <span className="text-[10px] text-slate-400">$45 Insured Freight</span>
                  </button>
                </div>

                {fulfillmentType === 'pickup' && (
                  <div className="space-y-1 pt-1">
                    <label className="text-[11px] text-slate-400 block">Pickup Mart Branch:</label>
                    <select
                      value={selectedPickupBranch}
                      onChange={(e) => setSelectedPickupBranch(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-xs text-slate-200"
                    >
                      {STORE_LOCATIONS.map((loc) => (
                        <option key={loc.id} value={loc.id}>
                          {loc.name.split('&')[0]} ({loc.district})
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </div>

              {/* Promo Code input */}
              <form onSubmit={handleApplyPromo} className="pt-2 border-t border-slate-800 space-y-1.5 text-xs">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Promo / Corporate Code (e.g. TECHMART10)"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white uppercase placeholder:normal-case placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-semibold border border-slate-700 min-h-[40px]"
                  >
                    Apply
                  </button>
                </div>
                {promoMessage && (
                  <p className={`text-[11px] ${appliedDiscount > 0 ? 'text-emerald-400' : 'text-amber-400'}`}>
                    {promoMessage}
                  </p>
                )}
              </form>
            </div>
          )}
        </div>

        {/* Footer with Calculations & Checkout */}
        {cartItems.length > 0 && !checkoutComplete && (
          <div className="p-4 bg-slate-950 border-t border-slate-800 space-y-3">
            <div className="space-y-1.5 text-xs text-slate-300">
              <div className="flex justify-between">
                <span>Hardware Subtotal</span>
                <span className="font-semibold text-white">${subtotal.toLocaleString()}</span>
              </div>
              {appliedDiscount > 0 && (
                <div className="flex justify-between text-emerald-400">
                  <span>Promo Discount ({(appliedDiscount * 100)}%)</span>
                  <span>-${discountAmount.toLocaleString()}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Showroom Fulfillment</span>
                <span className="text-white font-medium">
                  {fulfillmentType === 'pickup' ? 'FREE (In-Store Collect)' : `$${shippingFee}`}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Sales Tax (8.25%)</span>
                <span className="text-white font-medium">${estimatedTax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-slate-800 text-sm font-bold">
                <span className="text-white">Estimated Grand Total</span>
                <span className="text-cyan-400 text-base font-black">${grandTotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
              </div>
            </div>

            <button
              onClick={handleCompleteOrder}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm shadow-xl shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 min-h-[44px]"
            >
              <span>Confirm Reservation / Generate Invoice</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
