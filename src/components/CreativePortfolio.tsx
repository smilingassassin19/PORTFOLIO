import React, { useState } from 'react';
import { creativePortfolioData } from '../data/creativePortfolio';
import { CreativeWork } from '../types';
import { ImageWithFallback } from './ImageWithFallback';
import { Sparkles, Eye, X, ArrowUpRight, Play, ExternalLink } from 'lucide-react';
import { GeometricStar } from './GeometricStar';

export const CreativePortfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [activeItem, setActiveItem] = useState<CreativeWork | null>(null);

  const categories = ['ALL', 'SOCIAL MEDIA', 'GRAPHIC DESIGN', 'ADVERTISEMENT', 'VIDEO EDITING', 'UI/UX'];

  const filteredItems = activeCategory === 'ALL'
    ? creativePortfolioData
    : creativePortfolioData.filter(item => {
        if (activeCategory === 'VIDEO EDITING' || activeCategory === 'VIDEO') {
          return item.category === 'VIDEO' || item.category === 'VIDEO EDITING';
        }
        return item.category === activeCategory;
      });

  // Lock body scroll and handle Escape key when modal is open
  React.useEffect(() => {
    if (!activeItem) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveItem(null);
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeItem]);

  return (
    <section id="creative" className="relative py-28 bg-[#141414] overflow-hidden border-t border-white/[0.06]">
      {/* Anchor for backward compatibility with work references */}
      <div id="work" className="absolute top-0 left-0 w-px h-px opacity-0 pointer-events-none" />
      
      {/* Editorial Watermark */}
      <div className="absolute top-8 left-6 text-[8rem] sm:text-[12rem] font-display font-extrabold text-white/[0.02] select-none pointer-events-none leading-none z-0">
        DESIGN
      </div>

      {/* Decorative Star */}
      <div className="absolute top-10 left-8 opacity-20 pointer-events-none z-0">
        <GeometricStar size={110} color="#B8FF00" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Tag */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#B8FF00]" />
          <span className="text-xs uppercase tracking-[0.2em] font-mono font-semibold text-[#B8FF00]">
            [ 08 // VISUAL ARTIFACTS &amp; DESIGN ]
          </span>
        </div>

        {/* Section Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-white">
              SELECTED <span className="font-serif-accent font-normal italic text-[#B8FF00]">CREATIVE WORK</span>
            </h2>
            <p className="font-body text-base text-[#A8A8A8] mt-3 max-w-2xl">
              Brand visuals, campaign posters, social media carousel architectures, UI design systems, and short-form video concepts.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-full bg-[#181818] border border-white/10 self-start lg:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#B8FF00] text-black shadow-md'
                    : 'text-[#A8A8A8] hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group relative rounded-3xl bg-[#181818] border border-white/[0.08] hover:border-[#B8FF00] transition-all duration-300 overflow-hidden flex flex-col justify-between hover:-translate-y-2 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-[#B8FF00]/10"
            >
              {/* Media Preview Box */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#222222]">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  title={item.title}
                  category={item.category}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  placeholderType="creative"
                />

                {/* Concept / Category Pill */}
                <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-black/80 text-[#B8FF00] border border-[#B8FF00]/30 backdrop-blur-sm font-bold">
                    {item.category}
                  </span>
                  {item.conceptLabel && (
                    <span className="text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md bg-white/10 text-white/80 backdrop-blur-sm">
                      {item.conceptLabel}
                    </span>
                  )}
                </div>

                {/* Video play indicator if video */}
                {item.category === 'VIDEO' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#B8FF00] text-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                  </div>
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  {item.customButtonText?.startsWith('WATCH') && item.externalUrl ? (
                    <a
                      href={item.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="px-4 py-2 rounded-full bg-[#B8FF00] text-black text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-xl transform transition-transform hover:scale-105 active:scale-95 hover:bg-white cursor-pointer"
                    >
                      <Play className="w-4 h-4 fill-black" />
                      <span>{item.customButtonText}</span>
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveItem(item);
                      }}
                      className="px-4 py-2 rounded-full bg-[#B8FF00] text-black text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-xl transform transition-transform hover:scale-105 active:scale-95 hover:bg-white cursor-pointer"
                    >
                      <Eye className="w-4 h-4" />
                      <span>{item.customButtonText || 'VIEW ARTWORK'}</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Information bottom area */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-base font-bold font-display text-white group-hover:text-[#B8FF00] transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <ArrowUpRight className="w-4 h-4 text-[#A8A8A8] group-hover:text-[#B8FF00] shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>

                <p className="text-xs text-[#A8A8A8] line-clamp-2 leading-relaxed mb-4 font-body">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {item.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-[#292929] text-[10px] font-mono text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                  {item.tags.length > 2 && (
                    <span className="px-1.5 py-0.5 rounded bg-[#292929] text-[10px] font-mono text-[#B8FF00]">
                      +{item.tags.length - 2}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note on image system */}
        <div className="mt-12 p-4 rounded-xl bg-[#1B1B1B]/80 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#A8A8A8]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B8FF00]" />
            <span>Curated Creative Gallery: Brand campaigns, visual identities, posters, and multimedia content produced by Puneeth M.</span>
          </div>
          <span className="font-mono text-[11px] text-white/50">8 Featured Works</span>
        </div>

      </div>

      {/* Modal View */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveItem(null)}
        >
          <div
            id="creative-detail-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="creative-modal-title"
            className="relative w-full max-w-3xl rounded-3xl bg-[#1B1B1B] border border-white/15 p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-white/70 hover:text-white hover:bg-white/20 transition-colors cursor-pointer"
              aria-label="Close artwork preview"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs uppercase font-mono tracking-wider text-[#B8FF00] px-3 py-1 rounded-full bg-[#B8FF00]/10 border border-[#B8FF00]/25">
                {activeItem.category}
              </span>
              {activeItem.conceptLabel && (
                <span className="text-xs uppercase font-mono text-white/60">
                  • {activeItem.conceptLabel}
                </span>
              )}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <h3 id="creative-modal-title" className="text-2xl sm:text-3xl font-bold font-display text-white">
                {activeItem.title}
              </h3>
              {activeItem.externalUrl && (
                <a
                  href={activeItem.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-start sm:self-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#B8FF00] text-black text-xs font-mono font-bold uppercase tracking-wider hover:bg-white transition-all shadow-md hover:scale-105"
                >
                  {activeItem.customButtonText === 'WATCH VIDEO' ? (
                    <>
                      <Play className="w-3.5 h-3.5 fill-black" />
                      <span>WATCH ON YOUTUBE</span>
                    </>
                  ) : activeItem.customButtonText === 'WATCH REELS' ? (
                    <>
                      <Play className="w-3.5 h-3.5 fill-black" />
                      <span>WATCH REELS ON INSTAGRAM</span>
                    </>
                  ) : (
                    <>
                      <span>OPEN FULL ARTWORK</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </>
                  )}
                </a>
              )}
            </div>

            {/* Media Box */}
            <div className={`w-full rounded-2xl overflow-hidden bg-[#181818] border border-white/10 mb-6 flex items-center justify-center ${activeItem.aspectRatio === 'portrait' ? 'max-h-[70vh] py-3' : 'aspect-[16/10]'}`}>
              {activeItem.externalUrl ? (
                <a
                  href={activeItem.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full h-full group/img cursor-pointer"
                  title={activeItem.customButtonText ? `${activeItem.customButtonText} - Open Link` : 'Click to open original'}
                >
                  <ImageWithFallback
                    src={activeItem.image}
                    alt={activeItem.title}
                    title={activeItem.title}
                    category={activeItem.category}
                    className={activeItem.aspectRatio === 'portrait' ? 'max-h-[65vh] w-auto max-w-full object-contain rounded-xl transition-transform duration-300 group-hover/img:scale-[1.01]' : 'w-full h-full object-cover transition-transform duration-300 group-hover/img:scale-[1.01]'}
                    placeholderType="creative"
                  />
                </a>
              ) : (
                <ImageWithFallback
                  src={activeItem.image}
                  alt={activeItem.title}
                  title={activeItem.title}
                  category={activeItem.category}
                  className={activeItem.aspectRatio === 'portrait' ? 'max-h-[65vh] w-auto max-w-full object-contain rounded-xl' : 'w-full h-full object-cover'}
                  placeholderType="creative"
                />
              )}
            </div>

            <p className="text-sm sm:text-base text-[#A8A8A8] leading-relaxed mb-6">
              {activeItem.description}
            </p>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
              {activeItem.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg bg-[#292929] text-xs font-mono text-white/80 border border-white/5"
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
