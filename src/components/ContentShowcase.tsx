import React, { useState } from 'react';
import { contentSamplesData } from '../data/contentSamples';
import { ContentSample } from '../types';
import { PenTool, Copy, Check, ArrowUpRight, X, Sparkles, BookOpen } from 'lucide-react';
import { GeometricStar } from './GeometricStar';

export const ContentShowcase: React.FC = () => {
  const [activeSample, setActiveSample] = useState<ContentSample | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Lock body scroll and handle Escape key when modal is open
  React.useEffect(() => {
    if (!activeSample) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveSample(null);
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeSample]);

  const handleCopy = (sample: ContentSample) => {
    navigator.clipboard.writeText(sample.fullContent);
    setCopiedId(sample.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section className="relative py-28 bg-[#141414] overflow-hidden border-t border-white/[0.06]">
      {/* Editorial Watermark */}
      <div className="absolute top-8 left-6 text-[8rem] sm:text-[12rem] font-display font-extrabold text-white/[0.02] select-none pointer-events-none leading-none z-0">
        WORDS
      </div>

      {/* Background Star */}
      <div className="absolute top-12 left-6 opacity-20 pointer-events-none z-0">
        <GeometricStar size={110} color="#B8FF00" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Tag */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#B8FF00]" />
          <span className="text-xs uppercase tracking-[0.2em] font-mono font-semibold text-[#B8FF00]">
            [ 10 // WRITING, MESSAGING &amp; BRAND VOICE ]
          </span>
        </div>

        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-white">
              CONTENT THAT <span className="font-serif-accent font-normal italic text-[#B8FF00]">CONNECTS</span>
            </h2>
            <p className="font-body text-base text-[#A8A8A8] mt-3 max-w-xl">
              High-converting copy, retention-driven captions, launch campaigns, and brand storytelling crafted to hold human attention.
            </p>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#181818] border border-white/10 text-xs font-mono text-[#A8A8A8] self-start md:self-auto">
            <PenTool className="w-3.5 h-3.5 text-[#B8FF00]" />
            <span>Copy &amp; Concepts Suite</span>
          </div>
        </div>

        {/* Content Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contentSamplesData.map((sample) => (
            <div
              key={sample.id}
              onClick={() => setActiveSample(sample)}
              className="group relative p-8 rounded-3xl bg-[#181818] border border-white/[0.08] hover:border-[#B8FF00] transition-all duration-300 flex flex-col justify-between hover:-translate-y-2 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-[#B8FF00]/10"
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[10px] uppercase font-mono tracking-wider px-2.5 py-1 rounded-md bg-[#B8FF00]/10 text-[#B8FF00] border border-[#B8FF00]/25 font-bold">
                    {sample.type}
                  </span>

                  <span className="text-[10px] font-mono text-white/30">
                    + 10.CONCEPT
                  </span>
                </div>

                <h3 className="text-xl font-bold font-display text-white group-hover:text-[#B8FF00] transition-colors mb-3">
                  {sample.title}
                </h3>

                <p className="font-body text-xs sm:text-sm text-[#A8A8A8] leading-relaxed mb-6 line-clamp-3">
                  "{sample.previewText}"
                </p>
              </div>

              <div>
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {sample.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-[#222222] text-[10px] font-mono text-white/70 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer bar */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-xs font-mono text-[#B8FF00] font-semibold flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Read Full Concept</span>
                  </span>

                  <ArrowUpRight className="w-4 h-4 text-[#A8A8A8] group-hover:text-[#B8FF00] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Full Content Modal */}
      {activeSample && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveSample(null)}
        >
          <div
            id="content-sample-detail-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="content-modal-title"
            className="relative w-full max-w-2xl rounded-3xl bg-[#1B1B1B] border border-white/15 p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveSample(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-white/70 hover:text-white hover:bg-white/20 transition-colors cursor-pointer"
              aria-label="Close copy preview"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs uppercase font-mono tracking-wider text-[#B8FF00] px-3 py-1 rounded-full bg-[#B8FF00]/10 border border-[#B8FF00]/25">
                {activeSample.type}
              </span>
              <span className="text-xs uppercase font-mono text-white/50">
                • {activeSample.concept}
              </span>
            </div>

            <h3 id="content-modal-title" className="text-2xl font-bold font-display text-white mb-6">
              {activeSample.title}
            </h3>

            {/* Content body container */}
            <div className="p-6 rounded-2xl bg-[#242424] border border-white/10 text-sm text-white/95 leading-relaxed font-body whitespace-pre-line mb-6 font-mono">
              {activeSample.fullContent}
            </div>

            {/* Bottom Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <button
                onClick={() => handleCopy(activeSample)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-[#B8FF00] hover:text-black text-xs font-semibold uppercase tracking-wider text-white transition-colors"
              >
                {copiedId === activeSample.id ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-black" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Text</span>
                  </>
                )}
              </button>

              <button
                onClick={() => setActiveSample(null)}
                className="text-xs text-[#A8A8A8] hover:text-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
