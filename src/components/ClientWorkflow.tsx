import React from 'react';
import { clientWorkflow } from '../data/services';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { GeometricStar } from './GeometricStar';

export const ClientWorkflow: React.FC = () => {
  return (
    <section className="relative py-28 bg-[#141414] overflow-hidden border-t border-white/[0.06]">
      {/* Editorial Watermark */}
      <div className="absolute top-8 right-6 text-[8rem] sm:text-[12rem] font-display font-extrabold text-white/[0.02] select-none pointer-events-none leading-none z-0">
        PROCESS
      </div>

      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#B8FF00]/3 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Tag */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#B8FF00]" />
          <span className="text-xs uppercase tracking-[0.2em] font-mono font-semibold text-[#B8FF00]">
            [ 11 // CLIENT ENGAGEMENT ARCHITECTURE ]
          </span>
        </div>

        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-white">
            BUILT FOR BRANDS, <span className="font-serif-accent font-normal italic text-[#B8FF00]">PEOPLE &amp; IDEAS</span>
          </h2>
          <p className="font-body text-base sm:text-lg text-[#A8A8A8] mt-3">
            From a single creative to a complete digital presence — a disciplined, predictable workflow that guarantees alignment, communication, and speed.
          </p>
        </div>

        {/* 5-Step Process Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          {clientWorkflow.map((item, index) => (
            <div
              key={item.step}
              className="group relative p-7 rounded-3xl bg-[#181818] border border-white/[0.08] hover:border-[#B8FF00] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-xl hover:shadow-[#B8FF00]/10"
            >
              {/* Step indicator top */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold font-mono text-[#B8FF00] tracking-tighter">
                    {item.step}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">
                    Phase 0{index + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-display text-white mb-2 group-hover:text-[#B8FF00] transition-colors">
                  {item.title}
                </h3>

                <p className="font-body text-xs sm:text-sm text-[#A8A8A8] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Status footer inside step card */}
              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-[11px] font-mono text-white/50">
                <CheckCircle className="w-3.5 h-3.5 text-[#B8FF00]" />
                <span>Verified Deliverable</span>
              </div>
            </div>
          ))}
        </div>

        {/* Workflow Bottom Reassurance Banner */}
        <div className="mt-12 p-8 rounded-3xl bg-[#181818] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4 text-left">
            <div className="w-3 h-3 rounded-full bg-[#B8FF00] shrink-0 animate-pulse" />
            <span className="text-sm text-white/90 font-medium font-body leading-relaxed">
              Transparent milestones, direct asynchronous communication, and prompt revisions until you are 100% satisfied.
            </span>
          </div>

          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#B8FF00] text-black font-semibold font-mono text-xs uppercase tracking-wider hover:bg-[#D4FF4D] transition-colors shadow-lg shadow-[#B8FF00]/15"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
