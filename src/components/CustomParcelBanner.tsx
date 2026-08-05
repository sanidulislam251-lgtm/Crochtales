import React, { useState } from 'react';
import { Gift, Sparkles, Heart, CheckCircle2, Edit3 } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CustomParcelBanner: React.FC = () => {
  const { setGlobalParcelNote, globalParcelNote, setActiveTab } = useCart();
  const [sampleNote, setSampleNote] = useState(
    "Wishing you warmth, cozy giggles, and endless tea breaks! Happy Birthday Maya! With love from your crochet bestie ✨"
  );
  const [saved, setSaved] = useState(false);

  const handleSaveDefaultNote = () => {
    setGlobalParcelNote(sampleNote);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <section className="py-16 bg-[#F6EFE6] border-y border-[#E8DDD3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E0C9B7] shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8D3C5] text-[#5C4D4A] text-xs font-bold uppercase tracking-wider">
              <Gift className="w-4 h-4 text-[#B87B64]" />
              <span>Signature Crochtales Experience</span>
            </div>

            <h2 className="font-serif-crochet text-3xl sm:text-4xl font-bold text-[#3B2E2A] leading-tight">
              Personalize Your Parcel with a <br />
              <span className="text-[#B87B64] italic">Handwritten Gift Card</span>
            </h2>

            <p className="text-sm text-[#6E5D59] leading-relaxed">
              Gifting a handmade amigurumi bunny or flower tote? Make it unforgettable! Every item you purchase allows you to add a personalized handwritten note. We write your words on heavy kraft cards, seal them with colored wax, and nestle them in pressed lavender.
            </p>

            {/* Checklist */}
            <div className="space-y-2.5 text-xs text-[#5C4D4A] font-medium pt-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#4B6B46]" />
                <span>Zero extra fees — 100% complimentary on all orders</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#4B6B46]" />
                <span>Hand-calligraphed by our studio maker (@__crochetales__)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#4B6B46]" />
                <span>Option to select kraft gift ribbon wrapping at checkout</span>
              </div>
            </div>

            <button
              onClick={() => setActiveTab('shop')}
              className="px-7 py-3.5 bg-[#5C4D4A] hover:bg-[#4A3E3D] text-[#FAF7F2] font-semibold text-xs rounded-full shadow-md transition-all inline-flex items-center gap-2 pt-3"
            >
              <Sparkles className="w-4 h-4 text-[#E0A96D]" /> Start Crafting Your Parcel
            </button>
          </div>

          {/* Right Interactive Note Live Simulator */}
          <div className="lg:col-span-6 bg-[#FAF2EA] p-6 sm:p-8 rounded-3xl border-2 border-[#D9C0AE] shadow-inner space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase font-bold text-[#5C4D4A] flex items-center gap-1.5">
                <Edit3 className="w-4 h-4 text-[#B87B64]" /> Try Writing Your Note Below:
              </span>
              <span className="text-[10px] bg-[#E8D3C5] text-[#5C4D4A] font-bold px-2 py-0.5 rounded-full">
                Interactive Preview
              </span>
            </div>

            {/* Note input */}
            <textarea
              rows={3}
              value={sampleNote}
              onChange={(e) => setSampleNote(e.target.value)}
              className="w-full bg-white text-sm text-[#3B2E2A] p-4 rounded-2xl border border-[#D9C0AE] focus:outline-none focus:ring-2 focus:ring-[#B87B64] font-handwriting"
              placeholder="Type your gift message..."
            />

            {/* Card output visualizer */}
            <div className="bg-[#FFFDF9] p-5 rounded-2xl border border-[#E0C9B7] relative font-handwriting space-y-2 shadow-xs">
              <div className="flex items-center justify-between text-[11px] font-sans text-[#8C7670] uppercase tracking-wider border-b border-[#F4EBE1] pb-1.5 font-bold">
                <span>Crochtales Kraft Gift Card</span>
                <span>Wax Sealed 🌸</span>
              </div>
              <p className="text-sm text-[#4A3E3D] italic leading-relaxed pt-1">
                "{sampleNote || 'Your custom message will appear here...'}"
              </p>
              <div className="text-right text-xs font-bold text-[#B87B64] pt-1">
                ~ Handmade by Crochtales
              </div>
            </div>

            <button
              onClick={handleSaveDefaultNote}
              className="w-full py-2.5 bg-[#5C4D4A] hover:bg-[#4A3E3D] text-white text-xs font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              {saved ? (
                <>
                  <Heart className="w-4 h-4 text-[#E8C5C8] fill-[#E8C5C8]" /> Saved for your next order!
                </>
              ) : (
                <>Set as Default Note for My Order Basket</>
              )}
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
