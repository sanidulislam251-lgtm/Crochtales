import React from 'react';
import { Sparkles, Heart, Scissors, Gift, Instagram, CheckCircle2, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import heroImg from '../assets/images/crochet_hero_banner_1785916624800.jpg';

export const AboutPage: React.FC = () => {
  const { setActiveTab } = useCart();

  return (
    <div className="py-12 bg-[#FAF7F2] min-h-screen space-y-16">
      
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF2EA] rounded-3xl p-8 sm:p-12 border border-[#E0C9B7] text-center space-y-4 shadow-xs">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8D3C5] text-[#5C4D4A] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-[#B87B64]" />
            <span>Indie Handmade Studio &bull; @__crochetales__</span>
          </div>

          <h1 className="font-serif-crochet text-4xl sm:text-5xl lg:text-6xl font-bold text-[#3B2E2A]">
            The Story Behind Crochtales
          </h1>

          <p className="text-base sm:text-lg font-serif-crochet italic text-[#B87B64] max-w-xl mx-auto">
            "Every single loop is stitched with intent, every parcel packed with warmth."
          </p>
        </div>
      </section>

      {/* Maker Story & Journey */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-4/3 bg-[#F2E8DF]">
              <img
                src={heroImg}
                alt="Crochtales Studio Setup"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />

              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md p-3.5 rounded-2xl shadow-md border border-[#E8DDD3] text-xs font-medium text-[#4A3E3D] flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#E8D3C5] flex items-center justify-center font-serif-crochet font-bold text-[#5C4D4A]">
                  🧶
                </div>
                <div>
                  <span className="font-bold block">Sanidu & Studio Craft Team</span>
                  <span className="text-[10px] text-[#8C7670]">Founders & Lead Crochet Artisan</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs uppercase font-bold text-[#B87B64] tracking-widest block">
              Our Journey
            </span>
            <h2 className="font-serif-crochet text-3xl sm:text-4xl font-bold text-[#3B2E2A] leading-tight">
              From a Single Skein of Yarn to a Beloved Handmade Brand
            </h2>

            <p className="text-sm text-[#6E5D59] leading-relaxed">
              Crochtales was born out of a quiet love for slow art and meaningful gifting. In a world of mass-manufactured goods, we wanted to build something tactile, warm, and personal.
            </p>
            <p className="text-sm text-[#6E5D59] leading-relaxed">
              What started as sharing handmade amigurumi plushies on Instagram under <strong>@__crochetales__</strong> quickly blossomed into a community of crochet lovers. Every piece in our shop — whether it's Barnaby the Bunny, a Meadow Daisy Tote, or an Everlasting Tulip Bouquet — is designed, stitched, and finished by hand.
            </p>

            <div className="p-4 bg-white rounded-2xl border border-[#E8DDD3] text-xs text-[#5C4D4A] space-y-2">
              <div className="flex items-center gap-2 font-bold text-[#3B2E2A]">
                <Gift className="w-4 h-4 text-[#B87B64]" /> The Handwritten Parcel Promise
              </div>
              <p className="text-[#6E5D59]">
                We believe that receiving a gift should feel like opening a letter from a close friend. That’s why every order includes a custom handwritten note written with fountain pen ink, sealed with colored studio wax.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Studio Core Values */}
      <section className="py-16 bg-[#F6EFE6] border-y border-[#E8DDD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B87B64]">
              What Makes Us Special
            </span>
            <h2 className="font-serif-crochet text-3xl font-bold text-[#3B2E2A]">
              Our Crafting Philosophy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-[#E8DDD3] shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#F2E8DF] flex items-center justify-center text-[#B87B64] text-xl font-bold">
                🌱
              </div>
              <h3 className="font-serif-crochet text-xl font-bold text-[#3B2E2A]">
                Organic Milk Cotton Yarn
              </h3>
              <p className="text-xs text-[#6E5D59] leading-relaxed">
                We strictly use 100% hypoallergenic organic milk cotton yarn. It is ultra-soft against sensitive skin, pill-resistant, and maintains its lush colors wash after wash.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#E8DDD3] shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#F2E8DF] flex items-center justify-center text-[#B87B64] text-xl font-bold">
                ⏱️
              </div>
              <h3 className="font-serif-crochet text-xl font-bold text-[#3B2E2A]">
                Slow Fashion & Intent
              </h3>
              <p className="text-xs text-[#6E5D59] leading-relaxed">
                No rush, no factory assembly lines. Each piece takes between 2 to 20 hours of focused hook work. We craft in small batches to maintain artisan perfection.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#E8DDD3] shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#F2E8DF] flex items-center justify-center text-[#B87B64] text-xl font-bold">
                📦
              </div>
              <h3 className="font-serif-crochet text-xl font-bold text-[#3B2E2A]">
                Eco-Conscious Packaging
              </h3>
              <p className="text-xs text-[#6E5D59] leading-relaxed">
                Our parcel boxes are 100% recyclable kraft paper, tied with natural jute twine, and sprinkled with real dried lavender flowers for a gentle unboxing aroma.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Instagram Follow CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#5C4D4A] rounded-3xl p-8 sm:p-12 text-[#FAF7F2] text-center space-y-6 shadow-xl">
          <div className="w-16 h-16 rounded-full bg-[#E0A96D] text-[#3B2E2A] flex items-center justify-center text-3xl mx-auto font-serif-crochet">
            🪡
          </div>

          <div className="space-y-2 max-w-lg mx-auto">
            <h2 className="font-serif-crochet text-3xl font-bold text-[#F2E8DF]">
              Join the Crochtales Instagram Family
            </h2>
            <p className="text-xs text-[#D9C4B5] leading-relaxed">
              Follow <strong>@__crochetales__</strong> for work-in-progress reels, yarn color polls, and behind-the-scenes parcel packing!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="https://instagram.com/__crochetales__"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-gradient-to-r from-[#C13584] to-[#E1306C] text-white font-bold text-xs rounded-full shadow-md hover:opacity-95 transition-all flex items-center gap-2"
            >
              <Instagram className="w-4 h-4" /> Follow @__crochetales__
            </a>

            <button
              onClick={() => {
                setActiveTab('shop');
                window.scrollTo(0, 0);
              }}
              className="px-8 py-3.5 bg-white text-[#5C4D4A] hover:bg-[#F2E8DF] font-bold text-xs rounded-full transition-colors"
            >
              Explore Shop Collection
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
