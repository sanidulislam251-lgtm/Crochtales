import React, { useState } from 'react';
import { Star, CheckCircle2, MessageSquare, Plus, Sparkles, User } from 'lucide-react';
import { INITIAL_REVIEWS } from '../data/reviews';
import { Review } from '../types';
import { PRODUCTS } from '../data/products';

export const TestimonialsSection: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>(INITIAL_REVIEWS);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [filterRating, setFilterRating] = useState<number>(0);

  // Form states
  const [author, setAuthor] = useState('');
  const [location, setLocation] = useState('');
  const [rating, setRating] = useState(5);
  const [selectedProductId, setSelectedProductId] = useState(PRODUCTS[0].id);
  const [comment, setComment] = useState('');
  const [submittedMessage, setSubmittedMessage] = useState(false);

  const filteredReviews = filterRating > 0
    ? reviews.filter(r => r.rating === filterRating)
    : reviews;

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (author && comment) {
      const prod = PRODUCTS.find(p => p.id === selectedProductId) || PRODUCTS[0];
      const newRev: Review = {
        id: `rev-${Date.now()}`,
        author,
        location: location || 'Verified Buyer',
        rating,
        date: 'Just now',
        comment,
        productName: prod.name,
        productId: prod.id,
        verifiedPurchase: true
      };

      setReviews([newRev, ...reviews]);
      setSubmittedMessage(true);
      setTimeout(() => {
        setSubmittedMessage(false);
        setShowReviewForm(false);
        setAuthor('');
        setLocation('');
        setComment('');
      }, 2000);
    }
  };

  return (
    <section className="py-16 bg-[#F6EFE6] border-t border-[#E8DDD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B87B64] flex items-center justify-center md:justify-start gap-1">
              <Sparkles className="w-3.5 h-3.5" /> Loved by Parcel Recipients
            </span>
            <h2 className="font-serif-crochet text-3xl sm:text-4xl font-bold text-[#3B2E2A]">
              Real Customer Stories & Reviews
            </h2>
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs text-[#6E5D59]">
              <div className="flex text-[#E0A96D] text-sm">★ ★ ★ ★ ★</div>
              <span><strong>4.95 / 5.0</strong> rating across 200+ handmade parcels</span>
            </div>
          </div>

          <button
            onClick={() => setShowReviewForm(!showReviewForm)}
            className="px-6 py-3 bg-[#5C4D4A] hover:bg-[#4A3E3D] text-[#FAF7F2] font-semibold text-xs rounded-full shadow-md transition-all flex items-center gap-2"
            id="write-review-btn"
          >
            <Plus className="w-4 h-4 text-[#E0A96D]" /> Write a Review
          </button>
        </div>

        {/* WRITE A REVIEW INTERACTIVE FORM */}
        {showReviewForm && (
          <div className="mb-12 bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#D9C0AE] shadow-xl max-w-2xl mx-auto space-y-4">
            <h3 className="font-serif-crochet text-xl font-bold text-[#3B2E2A] flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-[#B87B64]" /> Share Your Crochtales Parcel Experience
            </h3>

            {submittedMessage ? (
              <div className="p-4 bg-[#F0F4EF] text-[#4B6B46] rounded-2xl text-xs font-bold text-center">
                ✨ Thank you! Your review has been added to the Crochtales hall of love.
              </div>
            ) : (
              <form onSubmit={handleAddReview} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-bold text-[#5C4D4A]">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mia Watson"
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                      className="w-full p-2.5 bg-[#FAF7F2] rounded-xl border border-[#D9C0AE] focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-bold text-[#5C4D4A]">Location (City, Country)</label>
                    <input
                      type="text"
                      placeholder="e.g. London, UK"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full p-2.5 bg-[#FAF7F2] rounded-xl border border-[#D9C0AE] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-bold text-[#5C4D4A]">Star Rating</label>
                    <div className="flex gap-2 items-center pt-1">
                      {[1, 2, 3, 4, 5].map((num) => (
                        <button
                          key={num}
                          type="button"
                          onClick={() => setRating(num)}
                          className={`text-lg transition-transform ${num <= rating ? 'text-[#E0A96D] scale-110' : 'text-[#D9C0AE]'}`}
                        >
                          ★
                        </button>
                      ))}
                      <span className="font-bold text-[#5C4D4A] ml-2">{rating} Stars</span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-[#5C4D4A]">Select Product Reviewed</label>
                    <select
                      value={selectedProductId}
                      onChange={(e) => setSelectedProductId(e.target.value)}
                      className="w-full p-2.5 bg-[#FAF7F2] rounded-xl border border-[#D9C0AE] focus:outline-none"
                    >
                      {PRODUCTS.map((p) => (
                        <option key={p.id} value={p.id}>{p.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-[#5C4D4A]">Your Feedback & Custom Note Reaction *</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Tell us about the yarn quality, packaging, and parcel handwritten note!"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="w-full p-3 bg-[#FAF7F2] rounded-xl border border-[#D9C0AE] focus:outline-none font-serif-crochet text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#5C4D4A] hover:bg-[#4A3E3D] text-white font-bold rounded-xl transition-colors"
                >
                  Post Review
                </button>
              </form>
            )}
          </div>
        )}

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 text-xs font-semibold">
          <span className="text-[#8C7670] flex-shrink-0">Filter by:</span>
          <button
            onClick={() => setFilterRating(0)}
            className={`px-3.5 py-1.5 rounded-full border transition-all ${
              filterRating === 0 ? 'bg-[#5C4D4A] text-white border-[#5C4D4A]' : 'bg-white text-[#5C4D4A] border-[#E8DDD3]'
            }`}
          >
            All Reviews ({reviews.length})
          </button>
          <button
            onClick={() => setFilterRating(5)}
            className={`px-3.5 py-1.5 rounded-full border transition-all ${
              filterRating === 5 ? 'bg-[#5C4D4A] text-white border-[#5C4D4A]' : 'bg-white text-[#5C4D4A] border-[#E8DDD3]'
            }`}
          >
            5 Stars ★ ({reviews.filter(r => r.rating === 5).length})
          </button>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-6 rounded-3xl border border-[#E8DDD3] shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-full bg-[#F2E8DF] flex items-center justify-center text-[#B87B64] font-bold text-xs">
                      <User className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs text-[#3B2E2A]">{rev.author}</h4>
                      <span className="text-[10px] text-[#8C7670]">{rev.location || 'Verified Recipient'}</span>
                    </div>
                  </div>

                  {rev.verifiedPurchase && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#4B6B46] bg-[#F0F4EF] px-2 py-0.5 rounded-full">
                      <CheckCircle2 className="w-3 h-3" /> Verified Parcel
                    </span>
                  )}
                </div>

                {/* Stars */}
                <div className="text-[#E0A96D] text-xs">
                  {'★'.repeat(rev.rating)}
                </div>

                <p className="font-serif-crochet italic text-sm text-[#4A3E3D] leading-relaxed">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-[#F4EBE1] flex items-center justify-between text-[11px] text-[#8C7670]">
                <span className="font-bold text-[#5C4D4A] truncate max-w-[200px]">{rev.productName}</span>
                <span>{rev.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
