import React from 'react';
import { Sparkles, Heart, ArrowRight, Gift, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import heroImg from '../assets/images/crochet_hero_banner_1785916624800.jpg';

export const Hero: React.FC = () => {
  const { setActiveTab, setSelectedCategory } = useCart();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF7F2] via-[#F6EFE6] to-[#FAF7F2] py-12 lg:py-20 border-b border-[#E8DDD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Text Column */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8D3C5]/60 text-[#5C4D4A] text-xs font-semibold border border-[#D9C0AE] shadow-sm">
              <Sparkles className="w-4 h-4 text-[#B87B64]" />
              <span>Indie Handmade Studio &bull; @__crochetales__</span>
            </div>

            <h1 className="font-serif-crochet text-4xl sm:text-5xl xl:text-6xl font-bold text-[#3B2E2A] leading-tight tracking-tight">
              Handmade with Love, <br className="hidden sm:inline" />
              <span className="text-[#B87B64] italic">Stitched with Care.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#6E5D59] leading-relaxed max-w-xl mx-auto lg:mx-0">
              Welcome to Crochtales — your cozy sanctuary for artisan amigurumi plushies, floral tote bags, wearable art, and everlasting flower bouquets. Every creation is slow-stitched by hand and delivered with a <strong>custom handwritten parcel note</strong> just for you or your loved ones.
            </p>

            {/* Value Badges Pill Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-2 p-2.5 bg-white/80 rounded-2xl border border-[#E8DDD3] text-xs text-[#5C4D4A] font-medium shadow-xs">
                <Gift className="w-4 h-4 text-[#B87B64] flex-shrink-0" />
                <span>Custom Parcel Note</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 bg-white/80 rounded-2xl border border-[#E8DDD3] text-xs text-[#5C4D4A] font-medium shadow-xs">
                <Heart className="w-4 h-4 text-[#B87B64] flex-shrink-0" />
                <span>100% Milk Cotton</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 bg-white/80 rounded-2xl border border-[#E8DDD3] text-xs text-[#5C4D4A] font-medium shadow-xs col-span-2 sm:col-span-1">
                <ShieldCheck className="w-4 h-4 text-[#B87B64] flex-shrink-0" />
                <span>Artisan Quality</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setActiveTab('shop');
                }}
                className="w-full sm:w-auto px-8 py-4 bg-[#5C4D4A] hover:bg-[#4A3E3D] text-[#FAF7F2] font-medium rounded-full shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group text-sm"
                id="hero-shop-now-btn"
              >
                <span>Explore Shop Collection</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#E0A96D]" />
              </button>

              <button
                onClick={() => setActiveTab('contact')}
                className="w-full sm:w-auto px-7 py-4 bg-white hover:bg-[#F2E8DF] text-[#5C4D4A] font-medium rounded-full border border-[#D9C0AE] shadow-xs transition-colors text-sm"
                id="hero-custom-order-btn"
              >
                Request Custom Order
              </button>
            </div>

            {/* Customer Rating Proof */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-3 text-xs text-[#8C7670]">
              <div className="flex -space-x-2">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                  alt="Customer"
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  referrerPolicy="no-referrer"
                />
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80"
                  alt="Customer"
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  referrerPolicy="no-referrer"
                />
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
                  alt="Customer"
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <div className="flex items-center text-[#E0A96D] text-sm">
                  ★ ★ ★ ★ ★ <span className="text-[#5C4D4A] font-semibold text-xs ml-1">4.95 / 5.0</span>
                </div>
                <span>Loved by 500+ handmade parcel recipients</span>
              </div>
            </div>
          </div>

          {/* Right Hero Visual Banner Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Frame */}
              <div className="absolute -inset-3 bg-[#E0C9B7]/40 rounded-3xl transform rotate-2 blur-xs"></div>
              
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-4/3 lg:aspect-16/11 bg-[#F2E8DF]">
                <img
                  src={heroImg}
                  alt="Crochtales Handmade Crochet Studio"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                {/* Floating Handwritten Gift Card Badge */}
                <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-[#E8DDD3]">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#E8D3C5] flex items-center justify-center text-[#5C4D4A] flex-shrink-0 text-lg">
                      💌
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-xs uppercase font-bold text-[#B87B64] tracking-wider block">
                        Signature Parcel Touch
                      </span>
                      <p className="text-xs font-serif-crochet italic text-[#4A3E3D]">
                        "Include your custom message at checkout — we write every card by hand with pressed lavender sprigs!"
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Top Floating Badge */}
              <div className="absolute -top-4 -left-4 bg-[#5C4D4A] text-white px-4 py-2 rounded-2xl shadow-lg text-xs font-medium flex items-center gap-2 border border-[#7D6B67]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E0A96D] animate-pulse"></span>
                <span>Active Crafting Studio &bull; Ships Worldwide</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
