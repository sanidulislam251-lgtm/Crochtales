import React, { useState } from 'react';
import { Product } from '../types';
import { Heart, ShoppingBag, Eye, Star, Sparkles, MessageSquare } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, wishlist, toggleWishlist, openProductDetail } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const [addedAnimation, setAddedAnimation] = useState(false);

  const isWishlisted = wishlist.includes(product.id);
  const mainImg = product.images[0];
  const hoverImg = product.images[1] || product.images[0];

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, 1);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1500);
  };

  return (
    <div
      onClick={() => openProductDetail(product)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group bg-white rounded-3xl border border-[#E8DDD3] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer relative"
      id={`product-card-${product.id}`}
    >
      {/* Top Image Box */}
      <div className="relative aspect-4/3 w-full bg-[#FAF7F2] overflow-hidden">
        <img
          src={isHovered ? hoverImg : mainImg}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          referrerPolicy="no-referrer"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.isBestseller && (
            <span className="bg-[#B87B64] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-xs tracking-wider uppercase flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#FFE5D9]" /> Bestseller
            </span>
          )}
          {product.isNewArrival && (
            <span className="bg-[#5C4D4A] text-[#E0A96D] text-[11px] font-bold px-3 py-1 rounded-full shadow-xs tracking-wider uppercase">
              New Arrival
            </span>
          )}
        </div>

        {/* Wishlist Heart Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          className={`absolute top-3 right-3 p-2.5 rounded-full z-10 transition-all ${
            isWishlisted
              ? 'bg-[#E8C5C8] text-[#903B42] shadow-sm'
              : 'bg-white/80 hover:bg-white text-[#5C4D4A] hover:text-[#B87B64] shadow-xs'
          }`}
          title={isWishlisted ? 'Remove from Wishlist' : 'Save to Wishlist'}
          id={`wishlist-btn-${product.id}`}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-[#903B42]' : ''}`} />
        </button>

        {/* Floating Quick Action Bar on Hover */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <button
            onClick={(e) => {
              e.stopPropagation();
              openProductDetail(product);
            }}
            className="flex-1 py-2 px-3 bg-white/95 hover:bg-white text-[#5C4D4A] text-xs font-semibold rounded-xl shadow-md flex items-center justify-center gap-1.5 border border-[#E8DDD3] transition-colors"
          >
            <Eye className="w-3.5 h-3.5 text-[#B87B64]" /> Quick View & Note
          </button>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          {/* Category & Crafting Time */}
          <div className="flex items-center justify-between text-[11px] text-[#8C7670] font-medium mb-1">
            <span className="uppercase tracking-wider">{product.categoryLabel}</span>
            <span className="bg-[#F2E8DF] px-2 py-0.5 rounded-md text-[#5C4D4A]">
              ⏱ {product.craftingTime.split(' ')[0]} {product.craftingTime.split(' ')[1]}
            </span>
          </div>

          {/* Product Name */}
          <h3 className="font-serif-crochet text-lg font-bold text-[#3B2E2A] group-hover:text-[#B87B64] transition-colors line-clamp-1">
            {product.name}
          </h3>

          {/* Short description */}
          <p className="text-xs text-[#6E5D59] line-clamp-2 mt-1 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Rating & Custom Parcel Note Prompt */}
        <div className="space-y-2 pt-2 border-t border-[#F4EBE1]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-xs">
              <Star className="w-3.5 h-3.5 fill-[#E0A96D] text-[#E0A96D]" />
              <span className="font-bold text-[#4A3E3D]">{product.rating}</span>
              <span className="text-[#8C7670]">({product.reviewsCount})</span>
            </div>

            <div className="flex items-center gap-1 text-[11px] text-[#B87B64] font-medium">
              <MessageSquare className="w-3 h-3" /> Custom Note
            </div>
          </div>

          {/* Price & Add to Cart Button */}
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-baseline gap-2">
              <span className="font-serif-crochet font-bold text-xl text-[#3B2E2A]">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-[#A8968C] line-through font-medium">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>

            <button
              onClick={handleQuickAdd}
              className={`py-2 px-3.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 ${
                addedAnimation
                  ? 'bg-[#8F9779] text-white shadow-xs'
                  : 'bg-[#5C4D4A] hover:bg-[#B87B64] text-white shadow-xs hover:shadow-md'
              }`}
              id={`add-to-cart-btn-${product.id}`}
            >
              <ShoppingBag className="w-3.5 h-3.5 text-[#E0A96D]" />
              <span>{addedAnimation ? 'In Parcel! ✨' : 'Add to Parcel'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
