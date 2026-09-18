import React from 'react';
import { whyWorkWithMe } from '../data/services';
import { Layers, Sparkles, Cpu, Compass, CheckCircle2 } from 'lucide-react';
import { GeometricStar } from './GeometricStar';

export const WhyWorkWithMe: React.FC = () => {
  const getCardIcon = (name: string) => {
    switch (name) {
      case 'Layers': return Layers;
      case 'Sparkles': return Sparkles;
      case 'Cpu': return Cpu;
      case 'Compass': return Compass;
      default: return Sparkles;
    }
  };

  return (
    <section className="relative py-28 bg-[#141414] overflow-hidden border-t border-white/[0.06]">
      {/* Background Watermark */}
      <div className="absolute top-8 right-8 text-[8rem] sm:text-[12rem] font-display font-extrabold text-white/[0.02] select-none pointer-events-none leading-none z-0">
        VALUE
      </div>

      {/* Background Star */}
      <div className="absolute top-1/2 left-4 -translate-y-1/2 opacity-20 pointer-events-none z-0">
        <GeometricStar size={120} color="#B8FF00" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Tag */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#B8FF00]" />
          <span className="text-xs uppercase tracking-[0.2em] font-mono font-semibold text-[#B8FF00]">
            [ 03 // CLIENT VALUE PROPOSITION ]
          </span>
        </div>

        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-white">
            WHY WORK <span className="font-serif-accent font-normal italic text-[#B8FF00]">WITH ME</span>
          </h2>
          <p className="font-body text-base text-[#A8A8A8] mt-3">
            Why hiring one multidisciplinary digital craftsman eliminates handoff friction, accelerates time-to-market, and elevates overall project quality.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyWorkWithMe.map((card, idx) => {
            const IconComp = getCardIcon(card.iconName);

            return (
              <div
                key={card.title}
                className="group p-8 rounded-3xl bg-[#181818] border border-white/[0.08] hover:border-[#B8FF00] transition-all duration-300 flex flex-col justify-between relative overflow-hidden hover:-translate-y-1.5 shadow-xl hover:shadow-2xl hover:shadow-[#B8FF00]/10"
              >
                {/* Accent top gradient line on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#B8FF00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Technical corner coordinate */}
                <div className="absolute top-3 right-3 text-[10px] font-mono text-white/20 select-none">
                  + 03.{idx + 1}
                </div>

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#222222] border border-white/10 flex items-center justify-center text-[#B8FF00] group-hover:scale-105 group-hover:bg-[#B8FF00] group-hover:text-black transition-all duration-300 shadow-inner">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-[#B8FF00]/40 group-hover:text-[#B8FF00] transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#B8FF00] block mb-1">
                    {card.subtitle}
                  </span>

                  <h3 className="text-xl font-bold font-display text-white mb-3">
                    {card.title}
                  </h3>

                  <p className="font-body text-xs sm:text-sm text-[#A8A8A8] leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-xs font-mono text-white/50">
                  <CheckCircle2 className="w-4 h-4 text-[#B8FF00]" />
                  <span>Verified Advantage</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
