import { Review } from '../types';

export const INITIAL_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Aanya Sharma',
    location: 'Mumbai, India',
    rating: 5,
    date: '2 weeks ago',
    comment: 'I ordered the Barnaby Bunny as a gift for my niece, and the custom parcel note was handwritten so beautifully! The crochet quality is top notch, soft, and so neatly stitched. Will definitely buy again!',
    productName: 'Barnaby Cozy Amigurumi Bunny',
    productId: 'crochet-amigurumi-bunny',
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=400&q=80',
    verifiedPurchase: true
  },
  {
    id: 'rev-2',
    author: 'Samanatha Lee',
    location: 'Singapore',
    rating: 5,
    date: '1 month ago',
    comment: 'The Daisy Tote bag is my everyday go-to now! It comfortably fits my Kindle and iPad, and I get so many compliments on the flower patterns. It feels so personal knowing it was handmade by Crochtales.',
    productName: 'Meadow Daisy Granny Square Tote',
    productId: 'crochet-daisy-tote-bag',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=400&q=80',
    verifiedPurchase: true
  },
  {
    id: 'rev-3',
    author: 'Rohan Mehta',
    location: 'Bengaluru, India',
    rating: 5,
    date: '3 weeks ago',
    comment: 'Bought the everlasting tulip bouquet for our anniversary! My partner loved that they will never wither. The parcel box smelled like soft lavender and came with a handwritten wax-sealed card. 10/10 experience.',
    productName: 'Everlasting Handmade Tulip Bouquet',
    productId: 'crochet-tulip-bouquet',
    verifiedPurchase: true
  },
  {
    id: 'rev-4',
    author: 'Priya N.',
    location: 'Delhi, India',
    rating: 5,
    date: '2 months ago',
    comment: 'Pip the Matcha Frog keychain brings a smile to my face every time I unlock my house door! So lightweight and adorable.',
    productName: 'Pip the Little Matcha Frog Buddy',
    productId: 'crochet-amigurumi-frog-keychain',
    verifiedPurchase: true
  },
  {
    id: 'rev-5',
    author: 'Elena Rostova',
    location: 'Toronto, Canada',
    rating: 5,
    date: '3 weeks ago',
    comment: 'The Granny Square Cardigan is a literal piece of wearable art. It feels heavy, warm, and rich. Worth every single penny for artisan craftsmanship.',
    productName: 'Cozy Hearth Granny Square Cardigan',
    productId: 'crochet-cardigan-granny-square',
    verifiedPurchase: true
  }
];
