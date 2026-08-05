import React, { useState, useMemo } from 'react';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { useCart } from '../context/CartContext';
import { Filter, SlidersHorizontal, Search, Sparkles, RefreshCw, Scissors } from 'lucide-react';

export const ShopPage: React.FC = () => {
  const {
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    setActiveTab
  } = useCart();

  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating' | 'newest'>('featured');
  const [maxPrice, setMaxPrice] = useState<number>(150);
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }
      // Search filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesDesc = product.description.toLowerCase().includes(query);
        const matchesTag = product.tags.some((t) => t.toLowerCase().includes(query));
        if (!matchesName && !matchesDesc && !matchesTag) return false;
      }
      // Max Price
      if (product.price > maxPrice) return false;
      // In Stock
      if (inStockOnly && !product.inStock) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'newest') return (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0);
      return (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0);
    });
  }, [selectedCategory, searchQuery, maxPrice, inStockOnly, sortBy]);

  const resetFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
    setMaxPrice(150);
    setInStockOnly(false);
    setSortBy('featured');
  };

  return (
    <div className="py-12 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header Header */}
        <div className="bg-[#FAF2EA] rounded-3xl p-8 sm:p-10 border border-[#E0C9B7] text-center space-y-3 relative overflow-hidden shadow-xs">
          <span className="text-xs uppercase font-bold text-[#B87B64] tracking-widest inline-flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5" /> Handcrafted Studio Catalog
          </span>
          <h1 className="font-serif-crochet text-4xl sm:text-5xl font-bold text-[#3B2E2A]">
            The Crochtales Collection
          </h1>
          <p className="text-sm text-[#6E5D59] max-w-xl mx-auto leading-relaxed">
            Every plushie, bag, and flower is slow-stitched by hand. Select any product to add your complimentary <strong>Personalized Parcel Note</strong>!
          </p>
        </div>

        {/* Category Pills Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all border ${
                selectedCategory === cat.id
                  ? 'bg-[#5C4D4A] text-white border-[#5C4D4A] shadow-xs'
                  : 'bg-white text-[#5C4D4A] border-[#E8DDD3] hover:bg-[#F2E8DF]'
              }`}
              id={`shop-cat-filter-${cat.id}`}
            >
              {cat.name} ({cat.count})
            </button>
          ))}
        </div>

        {/* Search, Filter & Sort Toolbar */}
        <div className="bg-white p-4 rounded-2xl border border-[#E8DDD3] shadow-xs flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#5C4D4A]">
          
          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-[#A8968C] absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search amigurumi, tote, tulip..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-[#FAF7F2] rounded-xl border border-[#E8DDD3] focus:outline-none focus:border-[#B87B64]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-2.5 text-[#A8968C] hover:text-[#5C4D4A]"
              >
                ✕
              </button>
            )}
          </div>

          {/* Controls Right */}
          <div className="flex flex-wrap items-center gap-4 w-full md:w-auto justify-between md:justify-end">
            
            {/* Price Slider */}
            <div className="flex items-center gap-2">
              <span className="font-semibold text-[#8C7670]">Max Price:</span>
              <input
                type="range"
                min="15"
                max="150"
                step="5"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-24 accent-[#B87B64]"
              />
              <span className="font-bold text-[#3B2E2A] w-10">${maxPrice}</span>
            </div>

            {/* Sort By Dropdown */}
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-[#B87B64]" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-[#FAF7F2] p-2 rounded-xl border border-[#E8DDD3] font-semibold text-[#5C4D4A] focus:outline-none"
              >
                <option value="featured">Featured / Bestsellers</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">New Arrivals</option>
              </select>
            </div>

            {(selectedCategory !== 'all' || searchQuery || maxPrice < 150) && (
              <button
                onClick={resetFilters}
                className="text-xs text-[#B87B64] hover:underline flex items-center gap-1 font-semibold"
              >
                <RefreshCw className="w-3.5 h-3.5" /> Reset
              </button>
            )}

          </div>

        </div>

        {/* Active Filter Summary Bar */}
        <div className="flex items-center justify-between text-xs text-[#8C7670]">
          <span>
            Showing <strong>{filteredProducts.length}</strong> handmade products
            {selectedCategory !== 'all' && ` in "${CATEGORIES.find(c => c.id === selectedCategory)?.name}"`}
            {searchQuery && ` matching "${searchQuery}"`}
          </span>

          <span className="hidden sm:inline-block italic font-serif-crochet text-sm text-[#B87B64]">
            Free Handwritten Gift Card included with every selection 💌
          </span>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center space-y-4 border border-[#E8DDD3]">
            <div className="w-16 h-16 rounded-full bg-[#FAF7F2] flex items-center justify-center text-[#B87B64] text-2xl mx-auto">
              🔍
            </div>
            <h3 className="font-serif-crochet text-2xl font-bold text-[#3B2E2A]">
              No Stitches Found Matching Your Search
            </h3>
            <p className="text-xs text-[#8C7670] max-w-sm mx-auto">
              Try searching for a different term like "bunny", "tote", or "tulip", or clear your price filters.
            </p>
            <button
              onClick={resetFilters}
              className="px-6 py-2.5 bg-[#5C4D4A] text-[#FAF7F2] font-semibold text-xs rounded-full shadow-sm hover:bg-[#4A3E3D]"
            >
              Show All Products
            </button>
          </div>
        )}

        {/* Studio Custom Request Callout Banner */}
        <div className="bg-[#FAF2EA] rounded-3xl p-8 border border-[#E0C9B7] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs uppercase font-bold text-[#B87B64] tracking-wider flex items-center justify-center md:justify-start gap-1">
              <Scissors className="w-4 h-4" /> Bespoke Studio Commission
            </span>
            <h3 className="font-serif-crochet text-2xl font-bold text-[#3B2E2A]">
              Have a Specific Crochet Dream in Mind?
            </h3>
            <p className="text-xs text-[#6E5D59] max-w-xl">
              Want a custom plushie character, personalized color palette for a cardigan, or a custom bouquet for a wedding? We love taking custom studio commissions!
            </p>
          </div>

          <button
            onClick={() => {
              setActiveTab('contact');
              window.scrollTo(0, 0);
            }}
            className="px-7 py-3.5 bg-[#5C4D4A] hover:bg-[#4A3E3D] text-[#FAF7F2] font-semibold text-xs rounded-full shadow-md flex-shrink-0"
          >
            Submit Custom Request
          </button>
        </div>

      </div>
    </div>
  );
};
