import React from 'react';
import { Hero } from '../components/Hero';
import { ProductCard } from '../components/ProductCard';
import { CustomParcelBanner } from '../components/CustomParcelBanner';
import { InstagramFeed } from '../components/InstagramFeed';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { useCart } from '../context/CartContext';
import { ArrowRight, Sparkles, Heart, Gift, Scissors, Compass } from 'lucide-react';

export const HomePage: React.FC = () => {
  const { setActiveTab, setSelectedCategory } = useCart();

  const bestsellers = PRODUCTS.filter((p) => p.isBestseller);
  const newArrivals = PRODUCTS.filter((p) => p.isNewArrival);

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <Hero />

      {/* Categories Bar */}
      <section className="py-12 bg-white border-b border-[#E8DDD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B87B64]">
              Browse by Category
            </span>
            <h2 className="font-serif-crochet text-3xl font-bold text-[#3B2E2A]">
              Explore Handmade Collections
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setActiveTab('shop');
                  window.scrollTo(0, 0);
                }}
                className="p-5 bg-[#FAF7F2] hover:bg-[#F2E8DF] rounded-2xl border border-[#E8DDD3] shadow-xs hover:shadow-md transition-all text-center flex flex-col items-center justify-between group space-y-2"
                id={`home-cat-btn-${cat.id}`}
              >
                <div className="w-12 h-12 rounded-full bg-[#E0C9B7] group-hover:bg-[#B87B64] text-[#5C4D4A] group-hover:text-white flex items-center justify-center text-xl transition-colors shadow-xs">
                  {cat.id === 'all' && '✨'}
                  {cat.id === 'amigurumi' && '🧸'}
                  {cat.id === 'bags' && '👜'}
                  {cat.id === 'wearables' && '🧶'}
                  {cat.id === 'decor' && '🌷'}
                  {cat.id === 'accessories' && '🎀'}
                </div>
                <div>
                  <h4 className="font-bold text-xs text-[#3B2E2A] group-hover:text-[#B87B64] transition-colors">
                    {cat.name}
                  </h4>
                  <span className="text-[10px] text-[#8C7670]">{cat.count} items</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Bestsellers Section */}
      <section className="py-16 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#B87B64] flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> Handpicked Favorites
              </span>
              <h2 className="font-serif-crochet text-3xl sm:text-4xl font-bold text-[#3B2E2A]">
                Crochtales Bestsellers
              </h2>
            </div>

            <button
              onClick={() => {
                setSelectedCategory('all');
                setActiveTab('shop');
                window.scrollTo(0, 0);
              }}
              className="px-6 py-2.5 bg-white hover:bg-[#F2E8DF] text-[#5C4D4A] font-semibold text-xs rounded-full border border-[#D9C0AE] flex items-center gap-1.5 transition-colors shadow-xs"
            >
              <span>View Full Shop</span>
              <ArrowRight className="w-4 h-4 text-[#B87B64]" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestsellers.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Signature Custom Parcel Note Feature Showcase */}
      <CustomParcelBanner />

      {/* New Arrivals Section */}
      <section className="py-16 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B87B64]">
              Fresh Off The Hook
            </span>
            <h2 className="font-serif-crochet text-3xl font-bold text-[#3B2E2A]">
              New Handmade Creations
            </h2>
            <p className="text-xs text-[#8C7670] max-w-md mx-auto">
              Explore our latest seasonal colors, amigurumi designs, and cozy accessories.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story Teaser */}
      <section className="py-16 bg-[#5C4D4A] text-[#FAF7F2] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs uppercase font-bold text-[#E0A96D] tracking-widest block">
                The Story Behind Crochtales
              </span>
              <h2 className="font-serif-crochet text-3xl sm:text-4xl font-bold text-[#F2E8DF] leading-tight">
                Slow Fashion, Handmade Stitches, <br />& Unforgettable Gift Memories
              </h2>
              <p className="text-sm text-[#D9C4B5] leading-relaxed">
                Crochtales started as a quiet passion project on Instagram (@__crochetales__) with a single ball of pastel cotton yarn and a crochet hook. Today, it has grown into an indie studio dedicated to crafting meaningful, heirloom-quality handmade pieces.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-2 text-center border-t border-[#7D6B67] max-w-md">
                <div>
                  <span className="font-serif-crochet text-2xl font-bold text-[#E0A96D] block">500+</span>
                  <span className="text-[10px] uppercase text-[#D9C4B5]">Parcels Shipped</span>
                </div>
                <div>
                  <span className="font-serif-crochet text-2xl font-bold text-[#E0A96D] block">100%</span>
                  <span className="text-[10px] uppercase text-[#D9C4B5]">Organic Yarn</span>
                </div>
                <div>
                  <span className="font-serif-crochet text-2xl font-bold text-[#E0A96D] block">4.95★</span>
                  <span className="text-[10px] uppercase text-[#D9C4B5]">Rating</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    setActiveTab('about');
                    window.scrollTo(0, 0);
                  }}
                  className="px-7 py-3 bg-[#E0A96D] hover:bg-[#D29759] text-[#3B2E2A] font-bold text-xs rounded-full shadow-md transition-colors"
                >
                  Read Maker Story
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#7D6B67] aspect-4/3 bg-[#4A3E3D]">
                <img
                  src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80"
                  alt="Crochtales Studio Work"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <TestimonialsSection />

      {/* Instagram Feed */}
      <InstagramFeed />
    </div>
  );
};
