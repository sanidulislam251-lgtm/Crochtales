import { InstagramPost } from '../types';
import bunnyImg from '../assets/images/crochet_amigurumi_bunny_1785916645245.jpg';
import toteImg from '../assets/images/crochet_flower_tote_1785916659644.jpg';
import tulipImg from '../assets/images/crochet_tulip_bouquet_1785916680347.jpg';

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'ig-1',
    caption: 'Late night stitches & hot cocoa 🧶✨ Barnaby the Bunny is ready to pack into a cozy gift box with a custom handwritten note! Drop a 🌸 if you love pastel milk cotton yarn.',
    image: bunnyImg,
    likes: 342,
    comments: 28,
    date: '3 days ago',
    instagramUrl: 'https://instagram.com/__crochetales__'
  },
  {
    id: 'ig-2',
    caption: 'Sunlight hits the Meadow Daisy Tote just right ✨ Handcrafted square by square with so much love. Which colorway should we stitch next?',
    image: toteImg,
    likes: 512,
    comments: 41,
    date: '5 days ago',
    instagramUrl: 'https://instagram.com/__crochetales__'
  },
  {
    id: 'ig-3',
    caption: 'Everlasting tulips that promise never to fade 🌷 Wrapped in eco-kraft paper for a special birthday parcel today.',
    image: tulipImg,
    likes: 628,
    comments: 54,
    date: '1 week ago',
    instagramUrl: 'https://instagram.com/__crochetales__'
  },
  {
    id: 'ig-4',
    caption: 'Work in progress! Soft sage green bucket hat taking shape hook by hook. Handmade fashion is all about slow living. 🌿✨',
    image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=600&q=80',
    likes: 289,
    comments: 19,
    date: '1 week ago',
    instagramUrl: 'https://instagram.com/__crochetales__'
  },
  {
    id: 'ig-5',
    caption: 'Pack an order with me! 📦 Hand-writing custom notes, adding dried flower sprigs, and wrapping in lavender tissue paper. Thank you for supporting small artisan dreams! ❤️',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=80',
    likes: 745,
    comments: 63,
    date: '2 weeks ago',
    instagramUrl: 'https://instagram.com/__crochetales__'
  },
  {
    id: 'ig-6',
    caption: 'Little matcha frog keychains waiting for their new homes! Pip says hi! 🐸🍵',
    image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=600&q=80',
    likes: 418,
    comments: 32,
    date: '2 weeks ago',
    instagramUrl: 'https://instagram.com/__crochetales__'
  }
];
