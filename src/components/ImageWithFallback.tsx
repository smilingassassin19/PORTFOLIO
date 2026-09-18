import React, { useState } from 'react';
import { Layers, Sparkles, Terminal, Palette, Play, Eye } from 'lucide-react';
import { GeometricStar } from './GeometricStar';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  category?: string;
  title?: string;
  placeholderType?: 'project' | 'creative' | 'social' | 'profile';
  aspectRatio?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = '',
  category,
  title,
  placeholderType = 'project'
}) => {
  const [hasError, setHasError] = useState(false);

  // Return realistic stylized SVG/canvas card if image hasn't been uploaded yet
  if (hasError || !src) {
    return (
      <div className={`relative overflow-hidden bg-[#1a1a1a] flex flex-col items-center justify-center p-6 text-center select-none ${className}`}>
        {/* Subtle dot matrix pattern */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #B8FF00 1px, transparent 0)`,
            backgroundSize: '20px 20px'
          }}
        />

        {/* Ambient radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#B8FF00]/5 rounded-full blur-3xl pointer-events-none" />

        {/* Dynamic graphics per type */}
        <div className="relative z-10 flex flex-col items-center w-full max-w-[90%]">
          
          {placeholderType === 'project' && (
            <div className="w-full flex flex-col items-center">
              {/* Mini mock terminal header */}
              <div className="w-20 h-2 bg-[#292929] rounded-full mb-3 flex items-center justify-center gap-1.5 px-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B8FF00]/60" />
                <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
              </div>
              <div className="w-11 h-11 rounded-xl bg-[#242424] border border-white/10 flex items-center justify-center text-[#B8FF00] mb-2.5 shadow-inner">
                <Terminal className="w-5 h-5" />
              </div>
            </div>
          )}

          {placeholderType === 'creative' && (
            <div className="w-full flex flex-col items-center">
              <div className="relative mb-2.5">
                <div className="w-11 h-11 rounded-xl bg-[#242424] border border-white/10 flex items-center justify-center text-[#B8FF00] shadow-inner">
                  {category === 'VIDEO' ? <Play className="w-5 h-5 ml-0.5 fill-current" /> : <Palette className="w-5 h-5" />}
                </div>
                <div className="absolute -top-1 -right-1 opacity-70">
                  <GeometricStar size={16} color="#B8FF00" />
                </div>
              </div>
            </div>
          )}

          {placeholderType === 'social' && (
            <div className="w-full flex flex-col items-center">
              <div className="w-11 h-11 rounded-xl bg-[#242424] border border-white/10 flex items-center justify-center text-[#B8FF00] mb-2.5 shadow-inner">
                <Sparkles className="w-5 h-5" />
              </div>
            </div>
          )}

          {placeholderType === 'profile' && (
            <div className="w-full flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-[#292929] border border-[#B8FF00]/40 flex items-center justify-center text-[#B8FF00] font-display font-bold text-lg mb-2 shadow-lg shadow-[#B8FF00]/10">
                PM
              </div>
            </div>
          )}

          {/* Category Tag */}
          {category && (
            <span className="text-[10px] tracking-widest uppercase font-mono font-semibold text-[#B8FF00] px-2.5 py-0.5 rounded-md bg-[#B8FF00]/10 border border-[#B8FF00]/20 mb-1.5">
              {category}
            </span>
          )}

          {/* Title */}
          <p className="text-xs sm:text-sm font-semibold text-white/90 line-clamp-1 font-display">
            {title || alt}
          </p>

          <p className="text-[10px] text-white/40 font-mono mt-1">
            Puneeth M. • Studio Asset
          </p>
        </div>

        {/* Minimal corner viewport brackets */}
        <div className="absolute top-2.5 left-2.5 w-2 h-2 border-t border-l border-[#B8FF00]/50" />
        <div className="absolute bottom-2.5 right-2.5 w-2 h-2 border-b border-r border-[#B8FF00]/50" />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      loading="lazy"
    />
  );
};
