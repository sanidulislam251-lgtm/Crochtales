import React, { useState } from 'react';
import { CartProvider, useCart } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { PolicyModal } from './components/PolicyModal';

function MainAppContent() {
  const { activeTab, activeProduct, closeProductDetail } = useCart();
  const [policyModalType, setPolicyModalType] = useState<'shipping' | 'custom' | 'care' | 'returns' | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#4A3E3D] selection:bg-[#E8D3C5] selection:text-[#3B2E2A]">
      <Navbar />

      <main className="flex-1">
        {activeTab === 'home' && <HomePage />}
        {activeTab === 'shop' && <ShopPage />}
        {activeTab === 'about' && <AboutPage />}
        {activeTab === 'reviews' && <ReviewsPage />}
        {activeTab === 'contact' && <ContactPage />}
      </main>

      <Footer onOpenPolicyModal={(type) => setPolicyModalType(type)} />

      {/* Slide-over Cart Drawer */}
      <CartDrawer />

      {/* Checkout 4-Step Modal */}
      <CheckoutModal />

      {/* Product Detail Modal */}
      {activeProduct && (
        <ProductDetailModal
          product={activeProduct}
          onClose={closeProductDetail}
        />
      )}

      {/* Policy Modal */}
      <PolicyModal
        type={policyModalType}
        onClose={() => setPolicyModalType(null)}
      />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <MainAppContent />
    </CartProvider>
  );
}
