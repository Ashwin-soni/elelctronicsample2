'use client';

import React, { useState, useMemo } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { BrandShowcase } from '@/components/BrandShowcase';
import { ProductCatalog } from '@/components/ProductCatalog';
import { StoreLocator } from '@/components/StoreLocator';
import { CorporateSolutions } from '@/components/CorporateSolutions';
import { ProductDetailModal } from '@/components/ProductDetailModal';
import { CompareDrawer } from '@/components/CompareDrawer';
import { CartDrawer, CartItem } from '@/components/CartDrawer';
import { MobileBottomNav } from '@/components/MobileBottomNav';
import { Footer } from '@/components/Footer';
import { PRODUCTS, Product } from '@/data/products';
import { Sparkles, CheckCircle2, ShieldCheck, MapPin, Eye, ExternalLink } from 'lucide-react';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);
  
  // Cart / Quote State
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { product: PRODUCTS[0], quantity: 1 }, // Default showcase item (MacBook Pro 16)
    { product: PRODUCTS[1], quantity: 1 }  // Sony WH-1000XM5
  ]);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);

  // Compare State
  const [comparedProductIds, setComparedProductIds] = useState<string[]>([
    PRODUCTS[1].id,
    PRODUCTS[6].id
  ]);
  const [compareDrawerOpen, setCompareDrawerOpen] = useState(false);

  // Quick toast feedback
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Live search results
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    return PRODUCTS.filter((p) => 
      p.name.toLowerCase().includes(q) ||
      p.brandName.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.specHighlight.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  // Cart operations
  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    showToast(`Added ${product.name} to your client quote & cart!`);
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQ = item.quantity + delta;
            return newQ > 0 ? { ...item, quantity: newQ } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveCartItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  // Compare operations
  const handleToggleCompare = (product: Product) => {
    if (comparedProductIds.includes(product.id)) {
      setComparedProductIds((prev) => prev.filter((id) => id !== product.id));
      showToast(`Removed ${product.name} from comparison.`);
    } else {
      if (comparedProductIds.length >= 3) {
        showToast('You can compare up to 3 devices simultaneously.');
        setCompareDrawerOpen(true);
        return;
      }
      setComparedProductIds((prev) => [...prev, product.id]);
      showToast(`Added ${product.name} to comparison tray.`);
    }
  };

  const comparedProducts = useMemo(() => {
    return PRODUCTS.filter((p) => comparedProductIds.includes(p.id));
  }, [comparedProductIds]);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950 pb-20 lg:pb-0">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-50 bg-slate-900/95 border border-cyan-500/80 text-white px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-3 backdrop-blur-md animate-bounce-short max-w-[90vw]">
          <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
          <span className="text-xs sm:text-sm font-semibold">{toastMessage}</span>
        </div>
      )}

      {/* Presentation Mode Notice Bar for Clients */}
      <div className="bg-gradient-to-r from-cyan-950 via-slate-900 to-blue-950 border-b border-cyan-800/40 px-4 py-1.5 text-center text-xs text-cyan-200">
        <span className="inline-flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Client Presentation Ready • Official Brand Partner Catalog • 4 Experience Centers</span>
        </span>
      </div>

      {/* Main Sticky Navigation */}
      <Navbar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedBrand={selectedBrand}
        onSelectBrand={setSelectedBrand}
        cartCount={cartItems.reduce((acc, curr) => acc + curr.quantity, 0)}
        compareCount={comparedProductIds.length}
        onOpenCart={() => setCartDrawerOpen(true)}
        onOpenCompare={() => setCompareDrawerOpen(true)}
        onScrollToSection={scrollToSection}
        searchResults={searchResults}
        onSelectProduct={(p) => setActiveModalProduct(p)}
      />

      {/* Hero Showcase */}
      <Hero
        onExploreCatalog={() => scrollToSection('catalog')}
        onExploreLocations={() => scrollToSection('locations')}
        onQuickViewProduct={(p) => setActiveModalProduct(p)}
        featuredProducts={PRODUCTS}
      />

      {/* Authorized Brands Directory */}
      <BrandShowcase
        selectedBrand={selectedBrand}
        onSelectBrand={setSelectedBrand}
        onScrollToCatalog={() => scrollToSection('catalog')}
      />

      {/* Filterable Products Catalog */}
      <ProductCatalog
        products={PRODUCTS}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        selectedBrand={selectedBrand}
        onSelectBrand={setSelectedBrand}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onQuickView={(p) => setActiveModalProduct(p)}
        onAddToCart={handleAddToCart}
        onToggleCompare={handleToggleCompare}
        comparedProductIds={comparedProductIds}
        cartItemIds={cartItems.map((i) => i.product.id)}
      />

      {/* Dummy Store Locations & Experience Marts */}
      <StoreLocator />

      {/* Corporate & Client Solutions / B2B */}
      <CorporateSolutions />

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Bottom Navigation (Hidden on PC, visible on mobile) */}
      <MobileBottomNav
        cartCount={cartItems.reduce((acc, curr) => acc + curr.quantity, 0)}
        compareCount={comparedProductIds.length}
        onOpenCart={() => setCartDrawerOpen(true)}
        onOpenCompare={() => setCompareDrawerOpen(true)}
        onScrollToSection={scrollToSection}
      />

      {/* Product Detail / Technical Specs Sheet Modal */}
      <ProductDetailModal
        product={activeModalProduct}
        onClose={() => setActiveModalProduct(null)}
        onAddToCart={handleAddToCart}
        onToggleCompare={handleToggleCompare}
        isCompared={activeModalProduct ? comparedProductIds.includes(activeModalProduct.id) : false}
        isInCart={activeModalProduct ? cartItems.some((i) => i.product.id === activeModalProduct.id) : false}
      />

      {/* Side-by-Side Specs Compare Drawer */}
      <CompareDrawer
        isOpen={compareDrawerOpen}
        onClose={() => setCompareDrawerOpen(false)}
        comparedProducts={comparedProducts}
        onRemoveProduct={(id) => setComparedProductIds((prev) => prev.filter((pId) => pId !== id))}
        onClearAll={() => setComparedProductIds([])}
        onAddToCart={handleAddToCart}
        cartItemIds={cartItems.map((i) => i.product.id)}
      />

      {/* Cart & Client Quotation Drawer */}
      <CartDrawer
        isOpen={cartDrawerOpen}
        onClose={() => setCartDrawerOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={() => setCartItems([])}
      />
    </div>
  );
}
