import React, { useState } from 'react';
import { Heart, Instagram, Sparkles, Mail, Send, ShieldCheck, Truck, Package, CheckCircle2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface FooterProps {
  onOpenPolicyModal?: (type: 'shipping' | 'custom' | 'care' | 'returns') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPolicyModal }) => {
  const { setActiveTab } = useCart();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#4A3E3D] text-[#FAF7F2] pt-16 pb-12 border-t border-[#3B2E2A]">
      {/* Upper Feature Highlights */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 border-b border-[#5C4D4A]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="w-12 h-12 rounded-full bg-[#5C4D4A] flex items-center justify-center text-[#E0A96D] shadow-inner border border-[#6E5D59]">
              <Package className="w-6 h-6" />
            </div>
            <h4 className="font-serif-crochet text-xl font-semibold text-[#F2E8DF]">
              Personalized Parcel Notes
            </h4>
            <p className="text-sm text-[#D9C4B5] leading-relaxed max-w-xs">
              Every single product comes with your custom handwritten note included inside our kraft gift box.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="w-12 h-12 rounded-full bg-[#5C4D4A] flex items-center justify-center text-[#E0A96D] shadow-inner border border-[#6E5D59]">
              <Heart className="w-6 h-6" />
            </div>
            <h4 className="font-serif-crochet text-xl font-semibold text-[#F2E8DF]">
              100% Handcrafted Artisanal Yarn
            </h4>
            <p className="text-sm text-[#D9C4B5] leading-relaxed max-w-xs">
              Stitched by hand with high-grade organic milk cotton thread and extra care in every loop.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="w-12 h-12 rounded-full bg-[#5C4D4A] flex items-center justify-center text-[#E0A96D] shadow-inner border border-[#6E5D59]">
              <Truck className="w-6 h-6" />
            </div>
            <h4 className="font-serif-crochet text-xl font-semibold text-[#F2E8DF]">
              Careful Dispatch & Tracking
            </h4>
            <p className="text-sm text-[#D9C4B5] leading-relaxed max-w-xs">
              Safely packed in eco-conscious recyclable wrapping and shipped with live order updates.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-serif-crochet font-bold text-[#F2E8DF]">Crochtales</span>
              <Sparkles className="w-4 h-4 text-[#E0A96D]" />
            </div>
            <p className="text-xs italic font-serif-crochet text-[#E0A96D] text-base">
              "Handmade with Love, Stitched with Care."
            </p>
            <p className="text-sm text-[#D9C4B5] leading-relaxed">
              Crochtales is a cozy indie crochet studio crafting amigurumi plushies, floral tote bags, wearable art, and personalized gift parcels.
            </p>

            <a
              href="https://instagram.com/__crochetales__"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#5C4D4A] hover:bg-[#6E5D59] rounded-full text-xs font-semibold text-[#FAF7F2] transition-colors border border-[#7D6B67]"
            >
              <Instagram className="w-4 h-4 text-[#C13584]" />
              Follow @__crochetales__
            </a>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-serif-crochet text-lg font-semibold text-[#F2E8DF] mb-4">
              Explore Studio
            </h4>
            <ul className="space-y-2.5 text-sm text-[#D9C4B5]">
              <li>
                <button
                  onClick={() => { setActiveTab('home'); window.scrollTo(0, 0); }}
                  className="hover:text-[#E0A96D] transition-colors"
                >
                  Home Page
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('shop'); window.scrollTo(0, 0); }}
                  className="hover:text-[#E0A96D] transition-colors"
                >
                  Shop All Creations
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('about'); window.scrollTo(0, 0); }}
                  className="hover:text-[#E0A96D] transition-colors"
                >
                  Our Brand Story
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('reviews'); window.scrollTo(0, 0); }}
                  className="hover:text-[#E0A96D] transition-colors"
                >
                  Customer Reviews
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('contact'); window.scrollTo(0, 0); }}
                  className="hover:text-[#E0A96D] transition-colors"
                >
                  Contact & Custom Orders
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Care / Policies */}
          <div>
            <h4 className="font-serif-crochet text-lg font-semibold text-[#F2E8DF] mb-4">
              Handmade Support
            </h4>
            <ul className="space-y-2.5 text-sm text-[#D9C4B5]">
              <li>
                <button
                  onClick={() => onOpenPolicyModal && onOpenPolicyModal('custom')}
                  className="hover:text-[#E0A96D] transition-colors text-left"
                >
                  Personalized Parcel Note Guide
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicyModal && onOpenPolicyModal('shipping')}
                  className="hover:text-[#E0A96D] transition-colors text-left"
                >
                  Shipping & Delivery Timelines
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicyModal && onOpenPolicyModal('care')}
                  className="hover:text-[#E0A96D] transition-colors text-left"
                >
                  Crochet Wash & Care Guide
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicyModal && onOpenPolicyModal('returns')}
                  className="hover:text-[#E0A96D] transition-colors text-left"
                >
                  Returns & Exchanges Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter / Crochet Club */}
          <div>
            <h4 className="font-serif-crochet text-lg font-semibold text-[#F2E8DF] mb-4">
              The Crochet Club 💌
            </h4>
            <p className="text-xs text-[#D9C4B5] leading-relaxed mb-4">
              Subscribe to get secret shop drops, custom yarn color previews, and 10% off your first handmade parcel!
            </p>

            {subscribed ? (
              <div className="p-3 bg-[#5C4D4A] rounded-2xl border border-[#7D6B67] text-xs text-[#E0A96D] flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                <span>Welcome to the club! Use code <strong className="text-white underline">CROCHET10</strong> at checkout!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#A8968C] absolute left-3 top-3" />
                  <input
                    type="email"
                    required
                    placeholder="Enter your email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#3B2E2A] text-sm text-[#FAF7F2] pl-9 pr-10 py-2.5 rounded-xl border border-[#5C4D4A] focus:outline-none focus:border-[#E0A96D]"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1 p-2 bg-[#B87B64] hover:bg-[#A36953] text-white rounded-lg transition-colors"
                    aria-label="Subscribe"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                <span className="text-[10px] text-[#A8968C]">No spam ever. Only warm crochet updates.</span>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Copyright Line */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-[#3B2E2A] text-center md:flex md:items-center md:justify-between text-xs text-[#A8968C]">
        <p>&copy; {new Date().getFullYear()} Crochtales (@__crochetales__). All handmade designs reserved.</p>
        <p className="mt-2 md:mt-0 flex items-center justify-center gap-1">
          Crafted with <Heart className="w-3.5 h-3.5 text-[#E8C5C8] fill-[#E8C5C8]" /> for crochet lovers worldwide
        </p>
      </div>
    </footer>
  );
};
