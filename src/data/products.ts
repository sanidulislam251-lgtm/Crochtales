import { Product } from '../types';

// Importing generated local images
import bunnyImg from '../assets/images/crochet_amigurumi_bunny_1785916645245.jpg';
import toteImg from '../assets/images/crochet_flower_tote_1785916659644.jpg';
import tulipImg from '../assets/images/crochet_tulip_bouquet_1785916680347.jpg';

export const PRODUCTS: Product[] = [
  {
    id: 'crochet-amigurumi-bunny',
    name: 'Barnaby Cozy Amigurumi Bunny',
    price: 34.99,
    originalPrice: 42.00,
    category: 'amigurumi',
    categoryLabel: 'Amigurumi & Toys',
    description: 'Stitched with 100% organic soft milk cotton yarn, Barnaby is a gentle handmade bunny in cozy pastel overalls. Perfect for nurseries, keepsakes, or desk companions.',
    details: [
      '100% Handcrafted with premium milk cotton yarn',
      'Hypoallergenic polyfill stuffing',
      'Safety eyes embroidered with reinforced backing',
      'Includes custom gift kraft packaging'
    ],
    images: [
      bunnyImg,
      'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80'
    ],
    tags: ['Bestseller', 'Amigurumi', 'Soft Toy', 'Gift Pick'],
    dimensions: 'Height: 22 cm (8.6 in)',
    craftingTime: '4 - 5 Hours of Careful Stitching',
    careInstructions: 'Spot clean with mild soap or gentle hand wash in cool water. Lay flat to dry.',
    materials: '100% Organic Milk Cotton Yarn, Eco-Polyester Fill',
    isBestseller: true,
    isNewArrival: false,
    inStock: true,
    colorVariants: [
      { name: 'Sage & Oatmeal', hex: '#9CAF88' },
      { name: 'Blush Pink & Cream', hex: '#E8C5C8' },
      { name: 'Honey Mustard & Vanilla', hex: '#E0A96D' }
    ],
    rating: 4.9,
    reviewsCount: 38
  },
  {
    id: 'crochet-daisy-tote-bag',
    name: 'Meadow Daisy Granny Square Tote',
    price: 49.50,
    originalPrice: 58.00,
    category: 'bags',
    categoryLabel: 'Bags & Totes',
    description: 'An iconic retro-inspired tote crafted from individual daisy flower granny squares woven seamlessly together. Sturdy straps and lined interior for everyday essentials.',
    details: [
      'Reinforced shoulder straps for comfortable carrying',
      'Soft cotton cloth lining inside with small pocket',
      'Comfortably holds 13" laptop, book, and daily items',
      'Unique floral color combination'
    ],
    images: [
      toteImg,
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80'
    ],
    tags: ['Bestseller', 'Floral', 'Handbag', 'Eco Friendly'],
    dimensions: '36 cm x 38 cm (14" x 15"), Strap Drop: 28 cm',
    craftingTime: '8 Hours of Intricate Hook Work',
    careInstructions: 'Hand wash in lukewarm water with mild detergent. Do not wring.',
    materials: 'Heavyweight Cotton Blend Yarn, Soft Cotton Canvas Lining',
    isBestseller: true,
    isNewArrival: true,
    inStock: true,
    colorVariants: [
      { name: 'Pastel Garden', hex: '#D6C0B3' },
      { name: 'Earthy Terracotta', hex: '#C86D51' },
      { name: 'Vintage Olive', hex: '#7D8461' }
    ],
    rating: 5.0,
    reviewsCount: 52
  },
  {
    id: 'crochet-tulip-bouquet',
    name: 'Everlasting Handmade Tulip Bouquet',
    price: 38.00,
    originalPrice: 45.00,
    category: 'decor',
    categoryLabel: 'Home Decor',
    description: 'A bouquet of flowers that never fades! Hand-crocheted delicate tulips in pastel spring shades, stem wrapped with floral tape and tied with soft kraft ribbon.',
    details: [
      'Contains 5 hand-stitched tulip stems',
      'Flexible wire internal stem for easy arranging',
      'Delivered pre-wrapped in eco-kraft paper gift box',
      'Zero watering needed - lasts for years!'
    ],
    images: [
      tulipImg,
      'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80'
    ],
    tags: ['Forever Flowers', 'Gift Special', 'Bestseller'],
    dimensions: 'Stem length: 30 cm (12 in)',
    craftingTime: '3.5 Hours per Bouquet',
    careInstructions: 'Dust gently with a soft dry brush or cool air hairdryer.',
    materials: 'Soft Acrylic Milk Blend, Floral Stems, Kraft Paper',
    isBestseller: true,
    isNewArrival: false,
    inStock: true,
    colorVariants: [
      { name: 'Spring Sorbet Mix', hex: '#F3B0C3' },
      { name: 'Warm Sunset Tulips', hex: '#E78C79' },
      { name: 'Cream & Lavender', hex: '#C6B2CE' }
    ],
    rating: 4.95,
    reviewsCount: 44
  },
  {
    id: 'crochet-daisy-bucket-hat',
    name: 'Sunray Daisy Crochet Bucket Hat',
    price: 32.00,
    category: 'wearables',
    categoryLabel: 'Wearables & Accessories',
    description: 'Unwind in sunny vibes with this breathable handcrafted bucket hat featuring woven daisy accents along the crown. Light, soft, and packable for weekend getaways.',
    details: [
      'Soft flexible fit for all head sizes',
      'Breathable crochet stitch structure',
      'Easily folds into your tote bag without losing shape'
    ],
    images: [
      'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?auto=format&fit=crop&w=800&q=80'
    ],
    tags: ['Wearables', 'Summer Essential', 'Trending'],
    dimensions: 'Head Circumference: 56-58 cm (One Size)',
    craftingTime: '4 Hours',
    careInstructions: 'Hand wash cold, reshape and dry flat in shade.',
    materials: '100% Breathable Cotton Thread',
    isBestseller: false,
    isNewArrival: true,
    inStock: true,
    sizeVariants: ['Standard (56-58 cm)', 'Large (59-60 cm)'],
    colorVariants: [
      { name: 'Buttercream & Sage', hex: '#F6E6C2' },
      { name: 'Lilac Cloud', hex: '#D2C4DE' },
      { name: 'Oatmeal Beige', hex: '#E3D3C4' }
    ],
    rating: 4.8,
    reviewsCount: 26
  },
  {
    id: 'crochet-flower-coasters-set',
    name: 'Bloom Floral Crochet Coaster Set (4 Pcs)',
    price: 24.00,
    category: 'decor',
    categoryLabel: 'Home Decor',
    description: 'Elevate your coffee ritual with these charming blossom coasters. Protects surfaces while adding a cozy cottagecore flair to your mug setup.',
    details: [
      'Set of 4 matching floral coasters',
      'Absorbent natural cotton yarn',
      'Tied with twine ribbon for gift gifting'
    ],
    images: [
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80'
    ],
    tags: ['Home Decor', 'Coaster Set', 'Under $30'],
    dimensions: 'Diameter: 12 cm each',
    craftingTime: '2.5 Hours',
    careInstructions: 'Machine washable on gentle cycle in mesh laundry bag.',
    materials: '100% Recycled Cotton Cord',
    isBestseller: false,
    isNewArrival: false,
    inStock: true,
    colorVariants: [
      { name: 'Earthy Clay & Cream', hex: '#B87B64' },
      { name: 'Sage & Olive', hex: '#8F9779' },
      { name: 'Blush & Vanilla', hex: '#F0D1C8' }
    ],
    rating: 4.9,
    reviewsCount: 31
  },
  {
    id: 'crochet-amigurumi-frog-keychain',
    name: 'Pip the Little Matcha Frog Buddy',
    price: 18.50,
    category: 'accessories',
    categoryLabel: 'Wearables & Accessories',
    description: 'Meet Pip! A tiny pocket-sized frog amigurumi with cute blush cheeks, equipped with a sturdy brass key ring. Clip onto your keys, tote bag, or backpack.',
    details: [
      'Compact size for bag charm or key ring attachment',
      'Rust-resistant golden brass key clasp',
      'Hand-stitched facial details for extra personality'
    ],
    images: [
      'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80'
    ],
    tags: ['Keychain', 'Cute Accessory', 'Under $20'],
    dimensions: 'Height: 6.5 cm (2.5 in)',
    craftingTime: '1.5 Hours',
    careInstructions: 'Wipe clean with a damp cloth.',
    materials: 'Milk Cotton Yarn, Brass Keyring',
    isBestseller: true,
    isNewArrival: true,
    inStock: true,
    rating: 5.0,
    reviewsCount: 67
  },
  {
    id: 'crochet-cardigan-granny-square',
    name: 'Cozy Hearth Granny Square Cardigan',
    price: 128.00,
    originalPrice: 145.00,
    category: 'wearables',
    categoryLabel: 'Wearables & Accessories',
    description: 'Our showstopper piece! Soft, chunky oversized cardigan composed of hand-stitched patchwork granny squares in earthy neutral palettes. Made to order for custom fit.',
    details: [
      'Custom handmade to your size measurements',
      'Wooden coconut shell buttons down the front',
      'Chunky, plush warm feel for crisp autumn & winter days'
    ],
    images: [
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80'
    ],
    tags: ['Statement Piece', 'Made to Order', 'Wearable Art'],
    dimensions: 'Custom sizing available (S, M, L, XL)',
    craftingTime: '18 - 22 Hours of Dedicated Hand Work',
    careInstructions: 'Hand wash cold with wool detergent. Dry flat away from direct sunlight.',
    materials: 'Premium Soft Wool-Cotton Blend',
    isBestseller: true,
    isNewArrival: false,
    inStock: true,
    sizeVariants: ['Small (S)', 'Medium (M)', 'Large (L)', 'X-Large (XL)'],
    colorVariants: [
      { name: 'Oatmeal & Terracotta', hex: '#D29F80' },
      { name: 'Forest & Cream', hex: '#4F6352' }
    ],
    rating: 5.0,
    reviewsCount: 19
  },
  {
    id: 'crochet-strawberry-pouch',
    name: 'Sweet Berry Drawstring Cosmetic Pouch',
    price: 22.00,
    category: 'accessories',
    categoryLabel: 'Wearables & Accessories',
    description: 'A adorable strawberry-shaped drawstring pouch! Perfect for holding makeup, earphones, jewelry, or small trinkets inside your handbag.',
    details: [
      'Features leafy green drawstring ties with wooden bead ends',
      'Textured seed stitches for tactile strawberry feel',
      'Holds lip gloss, keys, earbuds, and compact mirror'
    ],
    images: [
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80'
    ],
    tags: ['Pouch', 'Berry Cute', 'Gift Idea'],
    dimensions: '15 cm x 14 cm',
    craftingTime: '2 Hours',
    careInstructions: 'Hand wash gently.',
    materials: '100% Cotton Yarn, Natural Wood Beads',
    isBestseller: false,
    isNewArrival: true,
    inStock: true,
    colorVariants: [
      { name: 'Ripe Red', hex: '#C0392B' },
      { name: 'Wild Pink', hex: '#E8A7B8' },
      { name: 'Cream Berry', hex: '#F5ECE5' }
    ],
    rating: 4.85,
    reviewsCount: 15
  },
  {
    id: 'crochet-plant-pot-cover',
    name: 'Boho Plant Pot Hanger & Cozy Sleeve',
    price: 26.50,
    category: 'decor',
    categoryLabel: 'Home Decor',
    description: 'Dress up your potted plants with a textured crochet sleeve and macrame-style hanging loop. Gives succulents and indoor greens an aesthetic warm touch.',
    details: [
      'Fits standard 4 to 6 inch plant pots',
      'Sturdy braided hanging cord included',
      'Removable & washable sleeve'
    ],
    images: [
      'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=800&q=80'
    ],
    tags: ['Plant Lover', 'Boho Decor', 'Home Accent'],
    dimensions: 'Fits 10-15 cm diameter pots',
    craftingTime: '2.5 Hours',
    careInstructions: 'Machine wash gentle inside laundry net.',
    materials: 'Natural Unbleached Cotton Rope',
    isBestseller: false,
    isNewArrival: false,
    inStock: true,
    colorVariants: [
      { name: 'Natural Unbleached', hex: '#EFE6DD' },
      { name: 'Sage Green', hex: '#A3B18A' }
    ],
    rating: 4.9,
    reviewsCount: 22
  },
  {
    id: 'crochet-hair-scrunchie-set',
    name: 'Velvet Cloud Ruffled Scrunchies (Set of 3)',
    price: 16.00,
    category: 'accessories',
    categoryLabel: 'Wearables & Accessories',
    description: 'Ultra-soft ruffled crochet hair scrunchies that protect your hair strands from breakage while adding an effortless cozy aesthetic to your hairstyle.',
    details: [
      'Set of 3 harmonious earth-tone scrunchies',
      'High-elastic interior band that won’t slip or pull hair',
      'Gentle on all hair textures'
    ],
    images: [
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80'
    ],
    tags: ['Hair Care', 'Scrunchie Set', 'Daily Essential'],
    dimensions: 'Diameter: approx 10 cm',
    craftingTime: '1 Hour per set',
    careInstructions: 'Hand wash in cool water.',
    materials: 'Velvet Texture Soft Acrylic Yarn',
    isBestseller: true,
    isNewArrival: true,
    inStock: true,
    rating: 4.95,
    reviewsCount: 41
  }
];

export const CATEGORIES = [
  { id: 'all', name: 'All Creations', iconName: 'Sparkles', count: PRODUCTS.length, description: 'Explore our complete collection of handmade crochet treasures.' },
  { id: 'amigurumi', name: 'Amigurumi & Plushies', iconName: 'Heart', count: PRODUCTS.filter(p => p.category === 'amigurumi').length, description: 'Adorable soft toys & plushies stuffed with love.' },
  { id: 'bags', name: 'Bags & Totes', iconName: 'ShoppingBag', count: PRODUCTS.filter(p => p.category === 'bags').length, description: 'Handmade totes, purses & floral square shoulder bags.' },
  { id: 'wearables', name: 'Wearables & Hats', iconName: 'Shirt', count: PRODUCTS.filter(p => p.category === 'wearables').length, description: 'Cozy cardigans, flower bucket hats & knitted fashion.' },
  { id: 'decor', name: 'Home Decor & Flowers', iconName: 'Home', count: PRODUCTS.filter(p => p.category === 'decor').length, description: 'Everlasting tulip bouquets, flower coasters & boho accents.' },
  { id: 'accessories', name: 'Cozy Accessories', iconName: 'Smile', count: PRODUCTS.filter(p => p.category === 'accessories').length, description: 'Pouches, keychains, scrunchies & cute pocket charms.' }
];
