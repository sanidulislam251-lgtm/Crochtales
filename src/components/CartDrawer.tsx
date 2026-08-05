import React, { useState } from 'react';
import { X, Trash2, Gift, Sparkles, ArrowRight, ShoppingBag, Edit3, Check, Tag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    updateItemParcelNote,
    toggleGiftWrap,
    getSubtotal,
    getDiscountAmount,
    getShippingFee,
    getTotal,
    discountCode,
    applyDiscount,
    setIsCheckoutOpen,
    setActiveTab
  } = useCart();

  const [promoInput, setPromoInput] = useState('');
  const [promoStatus, setPromoStatus] = useState<{ success?: boolean; message?: string } | null>(null);
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);
  const [tempNoteText, setTempNoteText] = useState('');

  if (!isCartOpen) return null;

  const subtotal = getSubtotal();
  const freeShippingThreshold = 65;
  const progressToFreeShipping = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoInput) {
      const res = applyDiscount(promoInput);
      setPromoStatus(res);
    }
  };

  const startEditNote = (itemId: string, currentNote: string) => {
    setEditingNoteId(itemId);
    setTempNoteText(currentNote);
  };

  const saveEditedNote = (itemId: string) => {
    updateItemParcelNote(itemId, tempNoteText);
    setEditingNoteId(null);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#3B2E2A]/50 backdrop-blur-xs">
      <div className="absolute inset-0" onClick={() => setIsCartOpen(false)} />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF7F2] shadow-2xl flex flex-col justify-between border-l border-[#E8DDD3]">
          
          {/* Cart Header */}
          <div className="p-6 bg-white border-b border-[#E8DDD3] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#E0C9B7] flex items-center justify-center text-[#5C4D4A]">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif-crochet text-xl font-bold text-[#3B2E2A]">
                  Your Handmade Parcel
                </h3>
                <span className="text-xs text-[#8C7670]">
                  {cart.reduce((s, i) => s + i.quantity, 0)} items in your basket
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-full text-[#5C4D4A] hover:bg-[#F2E8DF] transition-colors"
              id="close-cart-drawer-btn"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="px-6 py-3 bg-[#F4EBE1] border-b border-[#E8DDD3] text-xs text-[#5C4D4A]">
            {subtotal >= freeShippingThreshold ? (
              <div className="flex items-center gap-1.5 font-bold text-[#4B6B46]">
                <Sparkles className="w-4 h-4 text-[#8F9779]" />
                <span>🎉 You unlocked FREE Shipping!</span>
              </div>
            ) : (
              <div className="space-y-1.5">
                <div className="flex justify-between font-medium">
                  <span>Add <strong>${remainingForFreeShipping.toFixed(2)}</strong> more for Free Shipping</span>
                  <span>{Math.round(progressToFreeShipping)}%</span>
                </div>
                <div className="w-full bg-[#E8DDD3] h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-[#B87B64] h-full transition-all duration-300"
                    style={{ width: `${progressToFreeShipping}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="w-16 h-16 rounded-full bg-[#F2E8DF] flex items-center justify-center text-[#B87B64] text-2xl">
                  🧶
                </div>
                <div>
                  <h4 className="font-serif-crochet text-xl font-bold text-[#3B2E2A]">
                    Your Parcel Basket is Empty
                  </h4>
                  <p className="text-xs text-[#8C7670] mt-1 max-w-xs">
                    Explore our handmade amigurumi plushies, tote bags, and everlasting flowers!
                  </p>
                </div>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    setActiveTab('shop');
                  }}
                  className="px-6 py-2.5 bg-[#5C4D4A] text-[#FAF7F2] font-semibold text-xs rounded-full shadow-sm hover:bg-[#4A3E3D] transition-colors"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-4 rounded-2xl border border-[#E8DDD3] shadow-xs space-y-3"
                >
                  <div className="flex gap-3">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-16 h-16 rounded-xl object-cover bg-[#FAF7F2] border border-[#E8DDD3]"
                      referrerPolicy="no-referrer"
                    />

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <h4 className="font-serif-crochet font-bold text-sm text-[#3B2E2A] truncate">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-[#A8968C] hover:text-[#903B42] p-1 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Variant tags */}
                      <div className="text-[11px] text-[#8C7670] flex flex-wrap gap-2 mt-0.5">
                        {item.selectedColor && <span>Shade: {item.selectedColor}</span>}
                        {item.selectedSize && <span>Size: {item.selectedSize}</span>}
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        <span className="font-serif-crochet font-bold text-base text-[#B87B64]">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </span>

                        {/* Quantity Counter */}
                        <div className="flex items-center border border-[#E8DDD3] rounded-full bg-[#FAF7F2]">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-[#5C4D4A]"
                          >
                            -
                          </button>
                          <span className="w-6 text-center text-xs font-bold text-[#3B2E2A]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-[#5C4D4A]"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* PARCEL NOTE DISPLAY FOR THIS ITEM */}
                  <div className="p-3 bg-[#F7EFE7] rounded-xl border border-[#E0C9B7] text-xs space-y-1">
                    <div className="flex items-center justify-between text-[#5C4D4A] font-bold text-[11px]">
                      <span className="flex items-center gap-1">
                        <Gift className="w-3.5 h-3.5 text-[#B87B64]" /> Parcel Handwritten Note
                      </span>
                      {editingNoteId !== item.id ? (
                        <button
                          onClick={() => startEditNote(item.id, item.parcelNote)}
                          className="text-[#B87B64] hover:underline flex items-center gap-0.5 text-[10px]"
                        >
                          <Edit3 className="w-3 h-3" /> Edit Note
                        </button>
                      ) : (
                        <button
                          onClick={() => saveEditedNote(item.id)}
                          className="text-[#4B6B46] font-bold hover:underline flex items-center gap-0.5 text-[10px]"
                        >
                          <Check className="w-3 h-3" /> Save
                        </button>
                      )}
                    </div>

                    {editingNoteId === item.id ? (
                      <textarea
                        rows={2}
                        value={tempNoteText}
                        onChange={(e) => setTempNoteText(e.target.value)}
                        className="w-full text-xs p-2 bg-white rounded-lg border border-[#B87B64] focus:outline-none font-handwriting"
                      />
                    ) : (
                      <p className="text-[#6E5D59] font-serif-crochet italic text-xs leading-relaxed">
                        "{item.parcelNote || 'No custom note attached.'}"
                      </p>
                    )}

                    {/* Gift wrap checkbox */}
                    <div className="pt-1 flex items-center gap-2">
                      <input
                        type="checkbox"
                        id={`wrap-${item.id}`}
                        checked={item.giftWrap}
                        onChange={() => toggleGiftWrap(item.id)}
                        className="w-3.5 h-3.5 rounded text-[#B87B64] focus:ring-[#B87B64]"
                      />
                      <label htmlFor={`wrap-${item.id}`} className="text-[11px] text-[#5C4D4A] cursor-pointer">
                        Kraft Gift Wrapping Included
                      </label>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Breakdown & Checkout Trigger */}
          {cart.length > 0 && (
            <div className="p-6 bg-white border-t border-[#E8DDD3] space-y-4">
              {/* Promo Code Input */}
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="w-3.5 h-3.5 text-[#A8968C] absolute left-3 top-3" />
                  <input
                    type="text"
                    placeholder="Promo Code (CROCHET10)"
                    value={promoInput}
                    onChange={(e) => setPromoInput(e.target.value)}
                    className="w-full pl-8 pr-3 py-2 text-xs uppercase bg-[#FAF7F2] rounded-xl border border-[#E8DDD3] focus:outline-none focus:border-[#B87B64]"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#5C4D4A] hover:bg-[#4A3E3D] text-white text-xs font-semibold rounded-xl transition-colors"
                >
                  Apply
                </button>
              </form>

              {promoStatus && (
                <p className={`text-[11px] font-medium ${promoStatus.success ? 'text-[#4B6B46]' : 'text-[#903B42]'}`}>
                  {promoStatus.message}
                </p>
              )}

              {discountCode && (
                <div className="flex items-center justify-between text-xs text-[#4B6B46] bg-[#F0F4EF] p-2 rounded-lg font-medium">
                  <span>Code Applied: <strong>{discountCode}</strong></span>
                  <span>-${getDiscountAmount().toFixed(2)}</span>
                </div>
              )}

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs text-[#6E5D59] pt-2 border-t border-[#F4EBE1]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#4A3E3D]">${subtotal.toFixed(2)}</span>
                </div>
                {getDiscountAmount() > 0 && (
                  <div className="flex justify-between text-[#4B6B46]">
                    <span>Artisan Discount</span>
                    <span>-${getDiscountAmount().toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Parcel Express Shipping</span>
                  <span>{getShippingFee() === 0 ? <strong className="text-[#4B6B46]">FREE</strong> : `$${getShippingFee().toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-base font-bold text-[#3B2E2A] pt-2 border-t border-[#E8DDD3]">
                  <span>Total Investment</span>
                  <span className="font-serif-crochet text-xl text-[#B87B64]">
                    ${getTotal().toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Proceed to Checkout Button */}
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  setIsCheckoutOpen(true);
                }}
                className="w-full py-4 bg-[#5C4D4A] hover:bg-[#4A3E3D] text-[#FAF7F2] font-bold text-sm rounded-full shadow-lg transition-all flex items-center justify-center gap-2 group"
                id="proceed-to-checkout-btn"
              >
                <span>Proceed to Secure Checkout</span>
                <ArrowRight className="w-4 h-4 text-[#E0A96D] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
