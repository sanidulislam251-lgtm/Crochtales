import React from 'react';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { InstagramFeed } from '../components/InstagramFeed';
import { Sparkles, Heart } from 'lucide-react';

export const ReviewsPage: React.FC = () => {
  return (
    <div className="py-12 bg-[#FAF7F2] min-h-screen space-y-12">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF2EA] rounded-3xl p-8 sm:p-12 border border-[#E0C9B7] text-center space-y-3 shadow-xs">
          <span className="text-xs uppercase font-bold text-[#B87B64] tracking-widest inline-flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5" /> Customer Joy & Unboxing Stories
          </span>
          <h1 className="font-serif-crochet text-4xl sm:text-5xl font-bold text-[#3B2E2A]">
            What Our Parcel Recipients Say
          </h1>
          <p className="text-sm text-[#6E5D59] max-w-xl mx-auto leading-relaxed">
            From nursery gifts to custom cardigan commissions — read genuine feedback from people who received a Crochtales handmade parcel!
          </p>
        </div>
      </section>

      <TestimonialsSection />
      <InstagramFeed />
    </div>
  );
};
