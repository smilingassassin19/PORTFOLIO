import React, { useState } from 'react';
import { socialMediaPostsData } from '../data/creativePortfolio';
import { SocialMediaPost } from '../types';
import { ImageWithFallback } from './ImageWithFallback';
import { Instagram, Eye, Heart, MessageCircle, Bookmark, Share2, X, Sparkles } from 'lucide-react';
import { GeometricStar } from './GeometricStar';

export const SocialMediaShowcase: React.FC = () => {
  const [activeModalPost, setActiveModalPost] = useState<SocialMediaPost | null>(null);

  // Lock body scroll and handle Escape key when modal is open
  React.useEffect(() => {
    if (!activeModalPost) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModalPost(null);
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModalPost]);

  return (
    <section className="relative py-28 bg-[#111111] overflow-hidden border-t border-white/[0.06]">
      {/* Editorial Watermark */}
      <div className="absolute top-8 right-6 text-[8rem] sm:text-[12rem] font-display font-extrabold text-white/[0.02] select-none pointer-events-none leading-none z-0">
        MEDIA
      </div>

      {/* Decorative background star */}
      <div className="absolute top-1/2 right-6 -translate-y-1/2 opacity-20 pointer-events-none z-0">
        <GeometricStar size={110} color="#B8FF00" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Tag */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#B8FF00]" />
          <span className="text-xs uppercase tracking-[0.2em] font-mono font-semibold text-[#B8FF00]">
            [ 09 // SOCIAL MEDIA &amp; CAMPAIGN STRATEGY ]
          </span>
        </div>

        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-white">
              SOCIAL MEDIA <span className="font-serif-accent font-normal italic text-[#B8FF00]">SHOWCASE</span>
            </h2>
            <p className="font-body text-base text-[#A8A8A8] mt-3 max-w-xl">
              Engineered for discovery, dwell time, and audience conversion across feed carousels, story sequences, reel hooks, and paid ads.
            </p>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#181818] border border-white/10 text-xs font-mono text-[#A8A8A8] self-start md:self-auto">
            <Instagram className="w-4 h-4 text-[#B8FF00]" />
            <span>Multi-Format Social Grid</span>
          </div>
        </div>

        {/* Instagram-Style 6-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialMediaPostsData.map((post) => (
            <div
              key={post.id}
              onClick={() => setActiveModalPost(post)}
              className="group relative rounded-3xl bg-[#181818] border border-white/[0.08] hover:border-[#B8FF00] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-[#B8FF00]/10"
            >
              {/* Header Bar inside post */}
              <div className="p-4 flex items-center justify-between border-b border-white/[0.06] bg-[#222222]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#B8FF00] text-black font-bold text-xs flex items-center justify-center font-display shadow-sm">
                    PM
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white leading-none font-display">
                      puneeth.designs
                    </div>
                    <div className="text-[10px] text-[#B8FF00] font-mono mt-0.5">
                      {post.type}
                    </div>
                  </div>
                </div>

                <span className="text-[10px] uppercase font-mono px-2.5 py-0.5 rounded-full bg-white/10 text-[#A8A8A8] border border-white/5">
                  {post.category}
                </span>
              </div>

              {/* Media Graphic Frame */}
              <div className="relative aspect-square w-full bg-[#1c1c1c] overflow-hidden">
                <ImageWithFallback
                  src={post.image}
                  alt={post.title}
                  title={post.title}
                  category={post.type}
                  placeholderType="social"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Hover inspect overlay */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 p-6 text-center">
                  <span className="px-4 py-2 rounded-full bg-[#B8FF00] text-black text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 shadow-xl">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Read Strategy &amp; Caption</span>
                  </span>
                  <p className="text-xs text-white/90 line-clamp-3 max-w-xs font-body italic">
                    "{post.caption}"
                  </p>
                </div>
              </div>

              {/* Instagram Interaction Ribbon & Caption Preview */}
              <div className="p-5 bg-[#181818]">
                <div className="flex items-center justify-between mb-3 text-[#A8A8A8]">
                  <div className="flex items-center gap-3">
                    <Heart className="w-4 h-4 hover:text-[#B8FF00] transition-colors cursor-pointer" />
                    <MessageCircle className="w-4 h-4 hover:text-[#B8FF00] transition-colors cursor-pointer" />
                    <Share2 className="w-4 h-4 hover:text-[#B8FF00] transition-colors cursor-pointer" />
                  </div>
                  <Bookmark className="w-4 h-4 hover:text-[#B8FF00] transition-colors cursor-pointer" />
                </div>

                <h4 className="text-sm font-bold text-white mb-1.5 line-clamp-1 font-display group-hover:text-[#B8FF00] transition-colors">
                  {post.title}
                </h4>

                <p className="text-xs text-[#A8A8A8] line-clamp-2 leading-relaxed font-body">
                  <strong className="text-white font-semibold">puneeth.designs</strong> {post.caption}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-white/[0.06]">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-[10px] text-[#B8FF00] font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Social Post Detail Modal */}
      {activeModalPost && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveModalPost(null)}
        >
          <div
            id="social-post-detail-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="social-modal-title"
            className="relative w-full max-w-2xl rounded-3xl bg-[#1B1B1B] border border-white/15 p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModalPost(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-white/70 hover:text-white hover:bg-white/20 transition-colors cursor-pointer"
              aria-label="Close social post preview"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs uppercase font-mono tracking-wider text-[#B8FF00] px-3 py-1 rounded-full bg-[#B8FF00]/10 border border-[#B8FF00]/25">
                {activeModalPost.type}
              </span>
              <span className="text-xs uppercase font-mono text-white/60">
                • {activeModalPost.category}
              </span>
            </div>

            <h3 id="social-modal-title" className="text-2xl font-bold font-display text-white mb-4">
              {activeModalPost.title}
            </h3>

            {/* Media Box */}
            <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#242424] border border-white/10 mb-6">
              <ImageWithFallback
                src={activeModalPost.image}
                alt={activeModalPost.title}
                title={activeModalPost.title}
                category={activeModalPost.type}
                placeholderType="social"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Full Caption */}
            <div className="p-5 rounded-2xl bg-[#242424] border border-white/10 mb-6">
              <div className="text-xs font-mono uppercase tracking-widest text-[#B8FF00] mb-2">
                Published Caption &amp; Copy Strategy
              </div>
              <p className="text-sm text-white/90 leading-relaxed font-body whitespace-pre-line">
                {activeModalPost.caption}
              </p>
            </div>

            {/* Hashtags and tags */}
            <div className="flex flex-wrap gap-2">
              {activeModalPost.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg bg-[#292929] text-xs font-mono text-[#B8FF00] border border-white/5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
