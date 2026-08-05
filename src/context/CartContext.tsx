import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem, Order, ShippingAddress, PaymentMethod } from '../types';
import { PRODUCTS } from '../data/products';

interface CartContextType {
  cart: CartItem[];
  wishlist: string[];
  activeProduct: Product | null;
  isCartOpen: boolean;
  isCheckoutOpen: boolean;
  activeTab: 'home' | 'shop' | 'about' | 'reviews' | 'contact';
  selectedCategory: string;
  searchQuery: string;
  globalParcelNote: string;
  discountCode: string;
  discountRate: number; // percentage e.g. 0.10
  orders: Order[];
  lastPlacedOrder: Order | null;
  
  // Handlers
  setActiveTab: (tab: 'home' | 'shop' | 'about' | 'reviews' | 'contact') => void;
  setSelectedCategory: (cat: string) => void;
  setSearchQuery: (query: string) => void;
  setIsCartOpen: (open: boolean) => void;
  setIsCheckoutOpen: (open: boolean) => void;
  setGlobalParcelNote: (note: string) => void;
  
  addToCart: (product: Product, quantity?: number, selectedColor?: string, selectedSize?: string, parcelNote?: string, giftWrap?: boolean) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, newQuantity: number) => void;
  updateItemParcelNote: (cartItemId: string, note: string) => void;
  toggleGiftWrap: (cartItemId: string) => void;
  clearCart: () => void;
  
  toggleWishlist: (productId: string) => void;
  openProductDetail: (product: Product) => void;
  closeProductDetail: () => void;
  applyDiscount: (code: string) => { success: boolean; message: string };
  
  placeOrder: (shippingAddress: ShippingAddress, paymentMethod: PaymentMethod) => Order;
  getSubtotal: () => number;
  getDiscountAmount: () => number;
  getShippingFee: () => number;
  getTotal: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('crochtales_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('crochtales_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [orders, setOrders] = useState<Order[]>(() => {
    try {
      const saved = localStorage.getItem('crochtales_orders');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [lastPlacedOrder, setLastPlacedOrder] = useState<Order | null>(null);
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'home' | 'shop' | 'about' | 'reviews' | 'contact'>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [globalParcelNote, setGlobalParcelNote] = useState<string>('Handmade with love for someone very special! Enjoy your cozy crochet parcel ✨');
  const [discountCode, setDiscountCode] = useState<string>('');
  const [discountRate, setDiscountRate] = useState<number>(0);

  // Sync state to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('crochtales_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('crochtales_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error(e);
    }
  }, [wishlist]);

  useEffect(() => {
    try {
      localStorage.setItem('crochtales_orders', JSON.stringify(orders));
    } catch (e) {
      console.error(e);
    }
  }, [orders]);

  const addToCart = (
    product: Product,
    quantity = 1,
    selectedColor?: string,
    selectedSize?: string,
    parcelNote = '',
    giftWrap = false
  ) => {
    // Unique ID based on product & variants
    const itemId = `${product.id}-${selectedColor || 'def'}-${selectedSize || 'def'}`;
    
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === itemId);
      if (existing) {
        return prevCart.map((item) =>
          item.id === itemId
            ? {
                ...item,
                quantity: item.quantity + quantity,
                parcelNote: parcelNote || item.parcelNote,
                giftWrap: giftWrap !== undefined ? giftWrap : item.giftWrap,
              }
            : item
        );
      } else {
        return [
          ...prevCart,
          {
            id: itemId,
            product,
            quantity,
            selectedColor: selectedColor || (product.colorVariants ? product.colorVariants[0]?.name : undefined),
            selectedSize: selectedSize || (product.sizeVariants ? product.sizeVariants[0] : undefined),
            parcelNote: parcelNote || 'Hope this handmade crochet bring warmth to your day! ❤️',
            giftWrap,
          },
        ];
      }
    });

    setIsCartOpen(true);
  };

  const removeFromCart = (cartItemId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== cartItemId));
  };

  const updateQuantity = (cartItemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === cartItemId ? { ...item, quantity: newQuantity } : item))
    );
  };

  const updateItemParcelNote = (cartItemId: string, note: string) => {
    setCart((prev) =>
      prev.map((item) => (item.id === cartItemId ? { ...item, parcelNote: note } : item))
    );
  };

  const toggleGiftWrap = (cartItemId: string) => {
    setCart((prev) =>
      prev.map((item) => (item.id === cartItemId ? { ...item, giftWrap: !item.giftWrap } : item))
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  };

  const openProductDetail = (product: Product) => {
    setActiveProduct(product);
  };

  const closeProductDetail = () => {
    setActiveProduct(null);
  };

  const applyDiscount = (code: string) => {
    const clean = code.trim().toUpperCase();
    if (clean === 'CROCHET10' || clean === 'WELCOME10') {
      setDiscountCode(clean);
      setDiscountRate(0.10);
      return { success: true, message: '10% discount applied to your order!' };
    } else if (clean === 'LOVE15' || clean === 'HANDMADE15') {
      setDiscountCode(clean);
      setDiscountRate(0.15);
      return { success: true, message: '15% artisan discount applied!' };
    } else if (clean === 'CROCHTALES20') {
      setDiscountCode(clean);
      setDiscountRate(0.20);
      return { success: true, message: '20% VIP crochet discount applied!' };
    } else {
      return { success: false, message: 'Invalid promo code. Try CROCHET10 or LOVE15' };
    }
  };

  const getSubtotal = () => {
    return cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
  };

  const getDiscountAmount = () => {
    return getSubtotal() * discountRate;
  };

  const getShippingFee = () => {
    const sub = getSubtotal();
    if (sub === 0) return 0;
    return sub >= 65 ? 0 : 5.50; // Free shipping over $65
  };

  const getTotal = () => {
    return Math.max(0, getSubtotal() - getDiscountAmount() + getShippingFee());
  };

  const placeOrder = (shippingAddress: ShippingAddress, paymentMethod: PaymentMethod): Order => {
    const orderId = `CT-${Math.floor(100000 + Math.random() * 900000)}`;
    const now = new Date();
    const dateStr = now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    
    // Add 4-6 business days for delivery
    const deliveryDate = new Date(now.setDate(now.getDate() + 5));
    const estimatedDelivery = deliveryDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

    const newOrder: Order = {
      orderId,
      date: dateStr,
      items: [...cart],
      subtotal: getSubtotal(),
      discount: getDiscountAmount(),
      shippingFee: getShippingFee(),
      total: getTotal(),
      shippingAddress,
      paymentMethod,
      paymentStatus: paymentMethod === 'cod' ? 'Pending COD' : 'Paid',
      globalParcelNote: globalParcelNote || cart[0]?.parcelNote || '',
      estimatedDelivery: `${estimatedDelivery} (3-5 Craft & Shipping Days)`
    };

    setOrders((prev) => [newOrder, ...prev]);
    setLastPlacedOrder(newOrder);
    setCart([]);
    setIsCheckoutOpen(false);
    return newOrder;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        wishlist,
        activeProduct,
        isCartOpen,
        isCheckoutOpen,
        activeTab,
        selectedCategory,
        searchQuery,
        globalParcelNote,
        discountCode,
        discountRate,
        orders,
        lastPlacedOrder,
        setActiveTab,
        setSelectedCategory,
        setSearchQuery,
        setIsCartOpen,
        setIsCheckoutOpen,
        setGlobalParcelNote,
        addToCart,
        removeFromCart,
        updateQuantity,
        updateItemParcelNote,
        toggleGiftWrap,
        clearCart,
        toggleWishlist,
        openProductDetail,
        closeProductDetail,
        applyDiscount,
        placeOrder,
        getSubtotal,
        getDiscountAmount,
        getShippingFee,
        getTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
