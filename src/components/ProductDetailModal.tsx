import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { X, Heart, ShoppingBag, Star, Sparkles, Gift, Check, ShieldCheck, Clock, Scissors, Info, MessageSquare } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { INITIAL_REVIEWS } from '../data/reviews';

interface ProductDetailModalProps {
  product: Product;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose }) => {
  const { addToCart, wishlist, toggleWishlist, setIsCartOpen } = useCart();
  
  const [selectedImage, setSelectedImage] = useState<string>(product.images[0]);
  const [selectedColor, setSelectedColor] = useState<string>(
    product.colorVariants ? product.colorVariants[0]?.name : ''
  );
  const [selectedSize, setSelectedSize] = useState<string>(
    product.sizeVariants ? product.sizeVariants[0] : ''
  );
  const [quantity, setQuantity] = useState<number>(1);
  const [parcelNote, setParcelNote] = useState<string>(
    'Sending you lots of warmth with this handmade crochet! Hope it brings a giant smile ✨'
  );
  const [giftWrap, setGiftWrap] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<'details' | 'care' | 'reviews'>('details');
  const [addedSuccess, setAddedSuccess] = useState<boolean>(false);

  useEffect(() => {
    setSelectedImage(product.images[0]);
    if (product.colorVariants?.length) setSelectedColor(product.colorVariants[0].name);
    if (product.sizeVariants?.length) setSelectedSize(product.sizeVariants[0]);
  }, [product]);

  const isWishlisted = wishlist.includes(product.id);
  const productReviews = INITIAL_REVIEWS.filter(r => r.productId === product.id);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor, selectedSize, parcelNote, giftWrap);
    setAddedSuccess(true);
    setTimeout(() => {
      setAddedSuccess(false);
      onClose();
      setIsCartOpen(true);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#3B2E2A]/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      <div className="relative bg-[#FAF7F2] rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#E8DDD3] p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2.5 rounded-full bg-white text-[#5C4D4A] hover:bg-[#F2E8DF] shadow-xs border border-[#E8DDD3] z-20 transition-colors"
          id="close-product-modal-btn"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: Product Images Gallery */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-white border border-[#E8DDD3] shadow-xs">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-full object-cover transition-all duration-300"
                referrerPolicy="no-referrer"
              />

              {product.isBestseller && (
                <span className="absolute top-3 left-3 bg-[#B87B64] text-white text-xs font-bold px-3 py-1 rounded-full shadow-xs flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#FFE5D9]" /> Bestseller
                </span>
              )}
            </div>

            {/* Thumbnail Row */}
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 bg-white ${
                    selectedImage === img ? 'border-[#B87B64] shadow-md scale-105' : 'border-[#E8DDD3] opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </button>
              ))}
            </div>

            {/* Maker Note Highlight */}
            <div className="p-4 bg-[#F2E8DF] rounded-2xl border border-[#E0C9B7] text-xs text-[#5C4D4A] space-y-1.5">
              <div className="flex items-center gap-2 font-bold text-[#3B2E2A]">
                <Scissors className="w-4 h-4 text-[#B87B64]" /> Handcrafted in Small Batches
              </div>
              <p>
                Crafting Time: <strong>{product.craftingTime}</strong> using <strong>{product.materials}</strong>. No mass production.
              </p>
            </div>
          </div>

          {/* Right: Product Details & Parcel Customization Form */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-[#B87B64] font-bold">
                  {product.categoryLabel}
                </span>

                <button
                  onClick={() => toggleWishlist(product.id)}
                  className={`p-2 rounded-full border text-xs font-semibold transition-colors flex items-center gap-1 ${
                    isWishlisted ? 'bg-[#E8C5C8] text-[#903B42] border-[#D8A7AB]' : 'bg-white text-[#5C4D4A] border-[#E8DDD3]'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-[#903B42]' : ''}`} />
                  <span>{isWishlisted ? 'Saved' : 'Wishlist'}</span>
                </button>
              </div>

              <h2 className="font-serif-crochet text-3xl font-bold text-[#3B2E2A] mt-1">
                {product.name}
              </h2>

              {/* Price & Rating */}
              <div className="flex items-center gap-4 mt-2">
                <div className="flex items-baseline gap-2">
                  <span className="font-serif-crochet text-3xl font-bold text-[#B87B64]">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-base text-[#A8968C] line-through font-medium">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-1 text-sm bg-white px-3 py-1 rounded-full border border-[#E8DDD3]">
                  <Star className="w-4 h-4 fill-[#E0A96D] text-[#E0A96D]" />
                  <span className="font-bold text-[#4A3E3D]">{product.rating}</span>
                  <span className="text-[#8C7670]">({product.reviewsCount} reviews)</span>
                </div>
              </div>
            </div>

            <p className="text-sm text-[#6E5D59] leading-relaxed">
              {product.description}
            </p>

            {/* Color Variants (if available) */}
            {product.colorVariants && product.colorVariants.length > 0 && (
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-[#5C4D4A] tracking-wider block">
                  Select Shade / Color: <span className="font-normal text-[#8C7670]">{selectedColor}</span>
                </label>
                <div className="flex items-center gap-3">
                  {product.colorVariants.map((col) => (
                    <button
                      key={col.name}
                      type="button"
                      onClick={() => setSelectedColor(col.name)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-xs font-medium transition-all ${
                        selectedColor === col.name
                          ? 'border-[#B87B64] bg-white ring-2 ring-[#B87B64]/30 font-bold'
                          : 'border-[#E8DDD3] bg-white/70 hover:bg-white text-[#5C4D4A]'
                      }`}
                    >
                      <span
                        className="w-4 h-4 rounded-full border border-black/10"
                        style={{ backgroundColor: col.hex }}
                      />
                      <span>{col.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size Variants (if available) */}
            {product.sizeVariants && product.sizeVariants.length > 0 && (
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-[#5C4D4A] tracking-wider block">
                  Select Size: <span className="font-normal text-[#8C7670]">{selectedSize}</span>
                </label>
                <div className="flex items-center gap-2">
                  {product.sizeVariants.map((sz) => (
                    <button
                      key={sz}
                      type="button"
                      onClick={() => setSelectedSize(sz)}
                      className={`px-4 py-2 rounded-xl border text-xs font-medium transition-all ${
                        selectedSize === sz
                          ? 'border-[#B87B64] bg-[#5C4D4A] text-white font-bold'
                          : 'border-[#E8DDD3] bg-white hover:bg-[#F2E8DF] text-[#5C4D4A]'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* "PERSONALIZE YOUR PARCEL" CUSTOM NOTE BOX */}
            <div className="p-5 bg-gradient-to-br from-[#FFFDF9] to-[#F7EFE7] rounded-3xl border-2 border-[#D9C0AE] shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[#5C4D4A] font-bold text-sm">
                  <Gift className="w-4 h-4 text-[#B87B64]" />
                  <span>Personalize Your Parcel (Custom Note)</span>
                </div>
                <span className="text-[10px] bg-[#E8D3C5] text-[#5C4D4A] font-bold px-2 py-0.5 rounded-full">
                  Free Service 💌
                </span>
              </div>

              <p className="text-xs text-[#6E5D59] leading-relaxed">
                Add a custom handwritten message! We will write this on a beautiful kraft card with pressed flowers and include it inside your package.
              </p>

              <div className="relative">
                <textarea
                  rows={3}
                  value={parcelNote}
                  onChange={(e) => setParcelNote(e.target.value)}
                  placeholder="Type your gift note here (e.g. Happy Birthday Sarah! Handmade with love...)"
                  className="w-full bg-white text-sm text-[#4A3E3D] p-3 rounded-2xl border border-[#D9C0AE] focus:outline-none focus:ring-2 focus:ring-[#B87B64] font-handwriting placeholder:font-sans placeholder:text-xs"
                />
              </div>

              {/* Gift Wrap Toggle */}
              <label className="flex items-center gap-2.5 text-xs text-[#5C4D4A] cursor-pointer pt-1">
                <input
                  type="checkbox"
                  checked={giftWrap}
                  onChange={(e) => setGiftWrap(e.target.checked)}
                  className="w-4 h-4 rounded text-[#B87B64] focus:ring-[#B87B64] border-[#D9C0AE]"
                />
                <span>Wrap in eco-kraft paper & natural twine ribbon</span>
              </label>
            </div>

            {/* Quantity Selector & Add to Parcel Button */}
            <div className="flex items-center gap-4 pt-2">
              {/* Quantity controller */}
              <div className="flex items-center border border-[#D9C0AE] bg-white rounded-full p-1">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-[#5C4D4A] hover:bg-[#F2E8DF] font-bold text-base transition-colors"
                >
                  -
                </button>
                <span className="w-10 text-center font-bold text-sm text-[#4A3E3D]">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-[#5C4D4A] hover:bg-[#F2E8DF] font-bold text-base transition-colors"
                >
                  +
                </button>
              </div>

              {/* Submit Add to Cart Button */}
              <button
                type="button"
                onClick={handleAddToCart}
                className={`flex-1 py-4 px-6 rounded-full font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-md ${
                  addedSuccess
                    ? 'bg-[#8F9779] text-white'
                    : 'bg-[#5C4D4A] hover:bg-[#4A3E3D] text-[#FAF7F2]'
                }`}
                id="modal-add-to-cart-btn"
              >
                {addedSuccess ? (
                  <>
                    <Check className="w-5 h-5" /> Added to Your Parcel!
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-5 h-5 text-[#E0A96D]" /> Add to Parcel • ${(product.price * quantity).toFixed(2)}
                  </>
                )}
              </button>
            </div>

            {/* Product Details / Care Info Tabs */}
            <div className="pt-4 border-t border-[#E8DDD3] space-y-3">
              <div className="flex border-b border-[#E8DDD3] gap-6 text-xs font-bold text-[#8C7670]">
                <button
                  onClick={() => setActiveTab('details')}
                  className={`pb-2 transition-colors ${
                    activeTab === 'details' ? 'border-b-2 border-[#B87B64] text-[#B87B64]' : ''
                  }`}
                >
                  Product Details
                </button>
                <button
                  onClick={() => setActiveTab('care')}
                  className={`pb-2 transition-colors ${
                    activeTab === 'care' ? 'border-b-2 border-[#B87B64] text-[#B87B64]' : ''
                  }`}
                >
                  Wash & Care Instructions
                </button>
                <button
                  onClick={() => setActiveTab('reviews')}
                  className={`pb-2 transition-colors ${
                    activeTab === 'reviews' ? 'border-b-2 border-[#B87B64] text-[#B87B64]' : ''
                  }`}
                >
                  Reviews ({productReviews.length || product.reviewsCount})
                </button>
              </div>

              {activeTab === 'details' && (
                <ul className="space-y-2 text-xs text-[#6E5D59]">
                  {product.details.map((d, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#B87B64] font-bold">•</span>
                      <span>{d}</span>
                    </li>
                  ))}
                  {product.dimensions && (
                    <li className="flex items-start gap-2 pt-1 font-semibold text-[#4A3E3D]">
                      <Info className="w-3.5 h-3.5 text-[#B87B64]" /> Dimensions: {product.dimensions}
                    </li>
                  )}
                </ul>
              )}

              {activeTab === 'care' && (
                <div className="space-y-2 text-xs text-[#6E5D59]">
                  <p><strong>Care Routine:</strong> {product.careInstructions}</p>
                  <p><strong>Yarn Composition:</strong> {product.materials}</p>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="space-y-3 max-h-48 overflow-y-auto pr-2 text-xs">
                  {productReviews.length > 0 ? (
                    productReviews.map((rev) => (
                      <div key={rev.id} className="p-3 bg-white rounded-xl border border-[#E8DDD3] space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-[#4A3E3D]">{rev.author}</span>
                          <span className="text-[#E0A96D]">{'★'.repeat(rev.rating)}</span>
                        </div>
                        <p className="text-[#6E5D59] font-serif-crochet italic">"{rev.comment}"</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-xs text-[#8C7670] italic">
                      No direct reviews for this item yet, but Crochtales has 4.95★ overall store feedback!
                    </p>
                  )}
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
