import React, { useState } from 'react';
import { Instagram, Heart, MessageCircle, ExternalLink, Sparkles, X } from 'lucide-react';
import { INSTAGRAM_POSTS } from '../data/instagram';
import { InstagramPost } from '../types';

export const InstagramFeed: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<InstagramPost | null>(null);

  return (
    <section className="py-16 bg-[#FAF7F2] border-t border-[#E8DDD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Instagram Follow Banner Header */}
        <div className="bg-[#5C4D4A] rounded-3xl p-8 sm:p-10 text-[#FAF7F2] shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 mb-12 relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute -right-12 -top-12 w-48 h-48 bg-[#E0A96D]/20 rounded-full blur-2xl pointer-events-none" />

          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#FFDC80] via-[#F56040] to-[#C13584] p-1 shadow-md flex-shrink-0">
              <div className="w-full h-full bg-[#5C4D4A] rounded-full flex items-center justify-center text-white text-2xl font-bold font-serif-crochet">
                🪡
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <span className="font-serif-crochet text-2xl font-bold text-[#F2E8DF]">@__crochetales__</span>
                <Sparkles className="w-4 h-4 text-[#E0A96D]" />
              </div>
              <p className="text-xs text-[#D9C4B5] max-w-md">
                Follow our daily studio stitches, behind-the-scenes parcel packing, and new amigurumi drops on Instagram!
              </p>
            </div>
          </div>

          <a
            href="https://instagram.com/__crochetales__"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 bg-gradient-to-r from-[#C13584] to-[#E1306C] hover:opacity-95 text-white font-bold text-xs rounded-full shadow-lg transition-all flex items-center gap-2 flex-shrink-0"
            id="instagram-follow-cta-btn"
          >
            <Instagram className="w-4 h-4" />
            <span>Follow @__crochetales__</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>

        {/* Section Heading */}
        <div className="text-center space-y-2 mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B87B64]">
            #CrochtalesInTheWild
          </span>
          <h2 className="font-serif-crochet text-3xl font-bold text-[#3B2E2A]">
            Life in Stitches & Customer Parcels
          </h2>
          <p className="text-xs text-[#8C7670] max-w-md mx-auto">
            Click any post to view full studio notes and customer tags!
          </p>
        </div>

        {/* 6 Grid Posts */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {INSTAGRAM_POSTS.map((post) => (
            <div
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-[#F2E8DF] border border-[#E8DDD3] cursor-pointer shadow-xs hover:shadow-lg transition-all"
            >
              <img
                src={post.image}
                alt="Crochtales Instagram Post"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />

              {/* Hover overlay with likes & comments */}
              <div className="absolute inset-0 bg-[#3B2E2A]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 text-white text-xs font-bold p-3 text-center">
                <div className="flex items-center gap-1">
                  <Heart className="w-4 h-4 fill-white" />
                  <span>{post.likes}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>{post.comments}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Instagram Post Detail Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-[#3B2E2A]/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#E8DDD3] relative">
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-3 right-3 p-2 bg-black/40 text-white hover:bg-black/60 rounded-full z-10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="aspect-square bg-[#FAF7F2] overflow-hidden">
              <img
                src={selectedPost.image}
                alt=""
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between text-xs text-[#8C7670]">
                <div className="flex items-center gap-2 font-bold text-[#3B2E2A]">
                  <Instagram className="w-4 h-4 text-[#C13584]" />
                  <span>@__crochetales__</span>
                </div>
                <span>{selectedPost.date}</span>
              </div>

              <p className="text-xs text-[#4A3E3D] leading-relaxed">
                {selectedPost.caption}
              </p>

              <div className="flex items-center justify-between pt-3 border-t border-[#F4EBE1] text-xs font-semibold">
                <div className="flex gap-4 text-[#5C4D4A]">
                  <span className="flex items-center gap-1">
                    <Heart className="w-4 h-4 text-[#B87B64] fill-[#B87B64]" /> {selectedPost.likes} likes
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4 text-[#8C7670]" /> {selectedPost.comments} comments
                  </span>
                </div>

                <a
                  href={selectedPost.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C13584] hover:underline flex items-center gap-1"
                >
                  View on Instagram <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
