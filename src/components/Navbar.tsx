import React, { useState } from 'react';
import { ShoppingBag, Heart, Search, Menu, X, Instagram, Sparkles, Gift } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Navbar: React.FC = () => {
  const {
    cart,
    wishlist,
    activeTab,
    setActiveTab,
    setIsCartOpen,
    searchQuery,
    setSearchQuery,
    setSelectedCategory
  } = useCart();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleNavClick = (tab: 'home' | 'shop' | 'about' | 'reviews' | 'contact') => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setActiveTab('shop');
      setSelectedCategory('all');
      setSearchOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8DDD3] transition-all">
      {/* Top Announcement Bar */}
      <div className="bg-[#5C4D4A] text-[#F9F4EE] text-xs py-2 px-4 text-center font-medium flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-[#E0A96D]" />
        <span>Handmade with Love, Stitched with Care &bull; Free Handwritten Parcel Note with every order!</span>
        <span className="hidden md:inline-block font-serif-crochet italic text-[#E0A96D]">&bull; Code CROCHET10 for 10% off</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-[#4A3E3D] hover:bg-[#F2E8DF] transition-colors"
            aria-label="Toggle menu"
            id="mobile-menu-toggle-btn"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo & Brand Name */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavClick('home')}>
            <div className="w-10 h-10 rounded-full bg-[#E0C9B7] flex items-center justify-center text-[#5C4D4A] shadow-sm font-serif-crochet font-bold text-xl border border-[#D9C0AE]">
              🪡
            </div>
            <div>
              <span className="font-serif-crochet font-bold text-2xl sm:text-3xl text-[#4A3E3D] tracking-wide block leading-none">
                Crochtales
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#8C7670] font-semibold block mt-0.5">
                @__crochetales__ &bull; Handmade Art
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => handleNavClick('home')}
              className={`text-sm font-medium transition-colors hover:text-[#B87B64] relative py-1 ${
                activeTab === 'home'
                  ? 'text-[#B87B64] font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#B87B64] after:rounded-full'
                  : 'text-[#5C4D4A]'
              }`}
              id="nav-link-home"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('shop')}
              className={`text-sm font-medium transition-colors hover:text-[#B87B64] relative py-1 ${
                activeTab === 'shop'
                  ? 'text-[#B87B64] font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#B87B64] after:rounded-full'
                  : 'text-[#5C4D4A]'
              }`}
              id="nav-link-shop"
            >
              Shop Collection
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className={`text-sm font-medium transition-colors hover:text-[#B87B64] relative py-1 ${
                activeTab === 'about'
                  ? 'text-[#B87B64] font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#B87B64] after:rounded-full'
                  : 'text-[#5C4D4A]'
              }`}
              id="nav-link-about"
            >
              About the Maker
            </button>
            <button
              onClick={() => handleNavClick('reviews')}
              className={`text-sm font-medium transition-colors hover:text-[#B87B64] relative py-1 ${
                activeTab === 'reviews'
                  ? 'text-[#B87B64] font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#B87B64] after:rounded-full'
                  : 'text-[#5C4D4A]'
              }`}
              id="nav-link-reviews"
            >
              Reviews
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className={`text-sm font-medium transition-colors hover:text-[#B87B64] relative py-1 ${
                activeTab === 'contact'
                  ? 'text-[#B87B64] font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#B87B64] after:rounded-full'
                  : 'text-[#5C4D4A]'
              }`}
              id="nav-link-contact"
            >
              Contact
            </button>
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-3">
            {/* Search Toggle */}
            <div className="relative">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2.5 text-[#5C4D4A] hover:bg-[#F2E8DF] rounded-full transition-colors"
                title="Search Products"
                id="search-toggle-btn"
              >
                <Search className="w-5 h-5" />
              </button>

              {searchOpen && (
                <form
                  onSubmit={handleSearchSubmit}
                  className="absolute right-0 top-12 w-72 bg-white rounded-2xl shadow-xl border border-[#E8DDD3] p-2 z-50 flex items-center gap-2"
                >
                  <input
                    type="text"
                    placeholder="Search bunny, tote, tulip..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full text-sm px-3 py-1.5 focus:outline-none text-[#4A3E3D]"
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="bg-[#B87B64] text-white p-2 rounded-xl text-xs font-medium hover:bg-[#A36953] transition-colors"
                  >
                    Go
                  </button>
                </form>
              )}
            </div>

            {/* Wishlist Button */}
            <button
              onClick={() => handleNavClick('shop')}
              className="p-2.5 text-[#5C4D4A] hover:bg-[#F2E8DF] rounded-full transition-colors relative"
              title="Saved Wishlist"
              id="wishlist-btn"
            >
              <Heart className="w-5 h-5" />
              {wishlist.length > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-[#B87B64] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Instagram link icon */}
            <a
              href="https://instagram.com/__crochetales__"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex p-2.5 text-[#5C4D4A] hover:bg-[#F2E8DF] rounded-full transition-colors items-center gap-1.5 text-xs font-medium"
              title="Instagram @__crochetales__"
              id="instagram-nav-link"
            >
              <Instagram className="w-5 h-5 text-[#C13584]" />
            </a>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2.5 bg-[#5C4D4A] hover:bg-[#4A3E3D] text-[#FAF7F2] px-4 py-2.5 rounded-full shadow-sm transition-all hover:shadow text-sm font-medium"
              id="cart-drawer-toggle-btn"
            >
              <ShoppingBag className="w-4 h-4 text-[#E0A96D]" />
              <span className="hidden sm:inline">Parcel</span>
              <span className="bg-[#E0A96D] text-[#3B2E2A] text-xs font-bold px-2 py-0.5 rounded-full">
                {totalCartCount}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF7F2] border-b border-[#E8DDD3] px-4 pt-2 pb-6 space-y-3">
          <button
            onClick={() => handleNavClick('home')}
            className="block w-full text-left py-2 px-3 text-base font-medium rounded-xl hover:bg-[#F2E8DF]"
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('shop')}
            className="block w-full text-left py-2 px-3 text-base font-medium rounded-xl hover:bg-[#F2E8DF]"
          >
            Shop Collection
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className="block w-full text-left py-2 px-3 text-base font-medium rounded-xl hover:bg-[#F2E8DF]"
          >
            About the Maker
          </button>
          <button
            onClick={() => handleNavClick('reviews')}
            className="block w-full text-left py-2 px-3 text-base font-medium rounded-xl hover:bg-[#F2E8DF]"
          >
            Customer Reviews
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className="block w-full text-left py-2 px-3 text-base font-medium rounded-xl hover:bg-[#F2E8DF]"
          >
            Contact & FAQs
          </button>
          <div className="pt-2 border-t border-[#E8DDD3] flex items-center justify-between text-xs text-[#8C7670]">
            <a
              href="https://instagram.com/__crochetales__"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#C13584] font-semibold"
            >
              <Instagram className="w-4 h-4" /> Follow @__crochetales__
            </a>
            <span className="flex items-center gap-1">
              <Gift className="w-3.5 h-3.5 text-[#B87B64]" /> Personal Parcel Note
            </span>
          </div>
        </div>
      )}
    </header>
  );
};
