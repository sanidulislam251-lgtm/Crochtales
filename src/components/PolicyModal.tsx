import React from 'react';
import { X, Truck, Heart, Scissors, RotateCcw, ShieldCheck, Sparkles } from 'lucide-react';

interface PolicyModalProps {
  type: 'shipping' | 'custom' | 'care' | 'returns' | null;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#3B2E2A]/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[#FAF7F2] rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-[#E8DDD3] relative space-y-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2.5 rounded-full bg-white text-[#5C4D4A] hover:bg-[#F2E8DF] shadow-xs border border-[#E8DDD3] transition-colors"
          id="close-policy-modal-btn"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'shipping' && (
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#E8D3C5] flex items-center justify-center text-[#5C4D4A]">
                <Truck className="w-5 h-5" />
              </div>
              <h3 className="font-serif-crochet text-2xl font-bold text-[#3B2E2A]">
                Shipping & Delivery Timelines
              </h3>
            </div>
            <p className="text-xs text-[#6E5D59] leading-relaxed">
              Because Crochtales creations are handmade with love, ready-to-ship items (plushies, coasters, totes) are dispatched within <strong>1–2 business days</strong>. Custom made-to-order cardigans take <strong>4–7 crafting days</strong>.
            </p>
            <div className="p-4 bg-white rounded-2xl border border-[#E8DDD3] space-y-2 text-xs">
              <div className="flex justify-between font-semibold">
                <span>Domestic Express Delivery</span>
                <span>3 - 5 Business Days</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>International Courier</span>
                <span>7 - 12 Business Days</span>
              </div>
              <div className="flex justify-between text-[#4B6B46] font-bold border-t border-[#F4EBE1] pt-2">
                <span>Free Shipping Threshold</span>
                <span>Orders over $65</span>
              </div>
            </div>
          </div>
        )}

        {type === 'custom' && (
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#E8D3C5] flex items-center justify-center text-[#5C4D4A]">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-serif-crochet text-2xl font-bold text-[#3B2E2A]">
                Personalized Parcel Note Guide
              </h3>
            </div>
            <p className="text-xs text-[#6E5D59] leading-relaxed">
              Every order placed at Crochtales includes our signature <strong>Personalize Your Parcel</strong> feature.
            </p>
            <ul className="space-y-2 text-xs text-[#5C4D4A] list-disc list-inside bg-white p-4 rounded-2xl border border-[#E8DDD3]">
              <li>You can type custom messages for individual items or for the entire box.</li>
              <li>We transcribe your message onto a heavy recycled kraft card by hand.</li>
              <li>Cards are finished with a colored studio wax seal stamp and pressed lavender.</li>
              <li>Eco-kraft wrapping with jute twine is available at zero additional cost.</li>
            </ul>
          </div>
        )}

        {type === 'care' && (
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#E8D3C5] flex items-center justify-center text-[#5C4D4A]">
                <Scissors className="w-5 h-5" />
              </div>
              <h3 className="font-serif-crochet text-2xl font-bold text-[#3B2E2A]">
                Crochet Care & Maintenance
              </h3>
            </div>
            <p className="text-xs text-[#6E5D59] leading-relaxed">
              Crochet items love gentle care! Keep your amigurumi and wearables soft and vibrant for years with these simple rules:
            </p>
            <div className="p-4 bg-white rounded-2xl border border-[#E8DDD3] space-y-2 text-xs text-[#4A3E3D]">
              <p>🧼 <strong>Washing:</strong> Spot clean or gentle hand wash in cool water using mild liquid detergent.</p>
              <p>🧺 <strong>Drying:</strong> Never wring or tumble dry. Gently squeeze out excess water and lay flat on a towel in shade.</p>
              <p>🌷 <strong>Flowers:</strong> Dust tulip bouquets softly using a clean soft brush or cool hair dryer setting.</p>
            </div>
          </div>
        )}

        {type === 'returns' && (
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#E8D3C5] flex items-center justify-center text-[#5C4D4A]">
                <RotateCcw className="w-5 h-5" />
              </div>
              <h3 className="font-serif-crochet text-2xl font-bold text-[#3B2E2A]">
                Returns & Exchange Policy
              </h3>
            </div>
            <p className="text-xs text-[#6E5D59] leading-relaxed">
              Your happiness matters to us! If your parcel arrives damaged or incorrect, please notify us on Instagram (<strong>@__crochetales__</strong>) or email within <strong>7 days</strong> of delivery for an instant replacement or full refund.
            </p>
            <div className="p-4 bg-white rounded-2xl border border-[#E8DDD3] text-xs text-[#5C4D4A]">
              <p>Custom made-to-order cardigans with personalized initials are non-refundable unless damaged during transit.</p>
            </div>
          </div>
        )}

        <div className="pt-2 text-center">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#5C4D4A] hover:bg-[#4A3E3D] text-white font-bold text-xs rounded-full"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  );
};
