export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: 'amigurumi' | 'bags' | 'wearables' | 'decor' | 'accessories';
  categoryLabel: string;
  description: string;
  details: string[];
  images: string[];
  tags: string[];
  dimensions?: string;
  craftingTime: string;
  careInstructions: string;
  materials: string;
  isBestseller?: boolean;
  isNewArrival?: boolean;
  inStock: boolean;
  colorVariants?: { name: string; hex: string }[];
  sizeVariants?: string[];
  rating: number;
  reviewsCount: number;
}

export interface CartItem {
  id: string; // unique item id in cart (product.id + variant)
  product: Product;
  quantity: number;
  selectedColor?: string;
  selectedSize?: string;
  parcelNote: string; // "Personalize Your Parcel" custom message!
  giftWrap: boolean;
}

export interface Review {
  id: string;
  author: string;
  location?: string;
  rating: number;
  date: string;
  comment: string;
  productName: string;
  productId: string;
  image?: string;
  verifiedPurchase: boolean;
}

export interface InstagramPost {
  id: string;
  caption: string;
  image: string;
  likes: number;
  comments: number;
  date: string;
  instagramUrl: string;
}

export interface ShippingAddress {
  fullName: string;
  email: string;
  phone: string;
  addressLine: string;
  city: string;
  state: string;
  pincode: string;
}

export type PaymentMethod = 'upi' | 'card' | 'cod';

export interface Order {
  orderId: string;
  date: string;
  items: CartItem[];
  subtotal: number;
  discount: number;
  shippingFee: number;
  total: number;
  shippingAddress: ShippingAddress;
  paymentMethod: PaymentMethod;
  paymentStatus: 'Paid' | 'Pending COD';
  globalParcelNote?: string;
  estimatedDelivery: string;
}

export interface CategoryOption {
  id: string;
  name: string;
  iconName: string;
  count: number;
  description: string;
}
