import React, { useState } from 'react';
import { servicesData } from '../data/services';
import { 
  Palette, 
  Share2, 
  Film, 
  PenTool, 
  TrendingUp, 
  Megaphone, 
  Layout, 
  Code2, 
  ArrowUpRight,
  Check,
  Sparkles
} from 'lucide-react';
import { GeometricStar } from './GeometricStar';

interface CreativeServicesProps {
  onSelectService?: (serviceName: string) => void;
}

export const CreativeServices: React.FC<CreativeServicesProps> = ({ onSelectService }) => {
  const [activeDetailId, setActiveDetailId] = useState<string | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Palette': return Palette;
      case 'Share2': return Share2;
      case 'Film': return Film;
      case 'PenTool': return PenTool;
      case 'TrendingUp': return TrendingUp;
      case 'Megaphone': return Megaphone;
      case 'Layout': return Layout;
      case 'Code2': return Code2;
      default: return Sparkles;
    }
  };

  return (
    <section id="services" className="relative py-28 bg-[#111111] overflow-hidden border-t border-white/[0.06]">
      {/* Giant Editorial Watermark */}
      <div className="absolute top-8 left-6 text-[8rem] sm:text-[12rem] font-display font-extrabold text-white/[0.02] select-none pointer-events-none leading-none z-0">
        SERVICES
      </div>

      {/* Decorative stars */}
      <div className="absolute top-20 right-8 opacity-20 pointer-events-none z-0">
        <GeometricStar size={110} color="#B8FF00" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Tag */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#B8FF00]" />
          <span className="text-xs uppercase tracking-[0.2em] font-mono font-semibold text-[#B8FF00]">
            [ 02 // CREATIVE &amp; DIGITAL SERVICES ]
          </span>
        </div>

        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-white">
              WHAT I CAN <span className="font-serif-accent font-normal italic text-[#B8FF00]">CREATE FOR YOU</span>
            </h2>
            <p className="font-body text-base text-[#A8A8A8] mt-3 max-w-2xl">
              Tailored services for founders, creators, businesses, and agency partners looking for cohesive creative execution without multiple fragmented hires.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[#A8A8A8] bg-[#181818] px-4 py-2 rounded-full border border-white/10 self-start md:self-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B8FF00]" />
            <span>08 Specialized Capabilities</span>
          </div>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, idx) => {
            const IconComponent = getIcon(service.iconName);
            const isExpanded = activeDetailId === service.id;

            return (
              <div
                key={service.id}
                className={`group relative p-8 rounded-3xl bg-[#181818] border transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 ${
                  isExpanded 
                    ? 'border-[#B8FF00] shadow-2xl shadow-[#B8FF00]/10 bg-[#1e1e1e]' 
                    : 'border-white/[0.08] hover:border-[#B8FF00] hover:bg-[#1a1a1a]'
                }`}
              >
                <div>
                  {/* Top Row: Icon, Index, and Arrow */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#222222] border border-white/10 flex items-center justify-center text-[#B8FF00] group-hover:bg-[#B8FF00] group-hover:text-black transition-colors duration-200 shadow-inner">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-[#B8FF00]/50 group-hover:text-[#B8FF00] transition-colors">
                        0{idx + 1}
                      </span>
                      <button
                        onClick={() => setActiveDetailId(isExpanded ? null : service.id)}
                        className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#B8FF00] flex items-center justify-center text-[#A8A8A8] hover:text-black transition-all duration-200 cursor-pointer"
                        aria-label={`Toggle deliverables for ${service.title}`}
                      >
                        <ArrowUpRight className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-90' : 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5'}`} />
                      </button>
                    </div>
                  </div>

                  {/* Tagline */}
                  <span className="text-[10px] uppercase tracking-widest font-mono text-[#B8FF00] px-2.5 py-0.5 rounded-full bg-[#B8FF00]/10 border border-[#B8FF00]/20 inline-block mb-2">
                    {service.tagline}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white mt-1 mb-3 group-hover:text-white">
                    {service.title}
                  </h3>

                  {/* Short description */}
                  <p className="font-body text-xs sm:text-sm text-[#A8A8A8] leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  {/* Key Deliverables List */}
                  <div className="space-y-2.5 pt-5 border-t border-white/[0.06]">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 block mb-2">
                      Key Deliverables:
                    </span>
                    {service.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs text-white/80">
                        <Check className="w-3.5 h-3.5 text-[#B8FF00] mt-0.5 shrink-0" />
                        <span className="font-body">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA to trigger Contact form prefilled */}
                <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <a
                    href="#contact"
                    onClick={() => {
                      if (onSelectService) {
                        onSelectService(service.title);
                      }
                    }}
                    className="text-xs font-semibold font-mono text-[#B8FF00] hover:text-[#D4FF4D] inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>Request this service</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <span className="text-[10px] text-white/30 font-mono">
                    Custom Scoped
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
