import React, { useState, useEffect } from 'react';
import { Palette, PenTool, Cpu, Share2, GraduationCap, CheckCircle2, ArrowRight } from 'lucide-react';
import { GeometricStar } from './GeometricStar';
import { DEFAULT_PROFILE_PHOTO } from '../data/profilePhoto';

export const AboutMe: React.FC = () => {
  const [photoUrl, setPhotoUrl] = useState<string>(() => {
    return localStorage.getItem('puneeth_profile_photo') || DEFAULT_PROFILE_PHOTO;
  });

  useEffect(() => {
    const handlePhotoUpdated = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setPhotoUrl(customEvent.detail);
      }
    };
    window.addEventListener('puneeth_photo_updated', handlePhotoUpdated);
    return () => window.removeEventListener('puneeth_photo_updated', handlePhotoUpdated);
  }, []);

  const corePillars = [
    {
      title: 'DESIGN',
      icon: Palette,
      label: 'Visual & UI/UX',
      description: 'Crafting aesthetic interfaces, typography hierarchies, brand assets, and high-conversion social visuals in Figma.'
    },
    {
      title: 'CONTENT',
      icon: PenTool,
      label: 'Storytelling & Video',
      description: 'Scripting punchy captions, dynamic short-form video edits, promotional messaging, and structured digital campaigns.'
    },
    {
      title: 'TECHNOLOGY',
      icon: Cpu,
      label: 'Frontend & Full-Stack',
      description: 'Building clean, modern web applications with React, TypeScript, Node.js, and integrating cutting-edge Gemini AI models.'
    },
    {
      title: 'DIGITAL MEDIA',
      icon: Share2,
      label: 'Growth & Campaigns',
      description: 'Orchestrating multi-channel promotions, audience engagement strategies, and performance-tracked social distributions.'
    }
  ];

  const whatITurnIdeasInto = [
    'Visual content & brand assets',
    'Modern websites & landing pages',
    'Full-stack & AI-driven applications',
    'High-converting social media creatives',
    'Targeted promotional campaigns',
    'Immersive digital experiences'
  ];

  return (
    <section id="about" className="relative py-28 bg-[#111111] overflow-hidden border-t border-white/[0.06]">
      {/* Editorial Watermark */}
      <div className="absolute top-8 right-6 text-[8rem] sm:text-[12rem] font-display font-extrabold text-white/[0.02] select-none pointer-events-none leading-none z-0">
        ABOUT
      </div>

      {/* Background ambient lighting and star */}
      <div className="absolute top-12 right-12 opacity-20 pointer-events-none z-0">
        <GeometricStar size={130} color="#B8FF00" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Tag */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#B8FF00]" />
          <span className="text-xs uppercase tracking-[0.2em] font-mono font-semibold text-[#B8FF00]">
            [ 01 // ABOUT PUNEETH M. ]
          </span>
        </div>

        {/* Section Heading with Serif accent */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-white">
              MORE THAN <span className="font-serif-accent font-normal italic text-[#B8FF00]">JUST CODE.</span>
            </h2>
            <p className="text-xs uppercase tracking-widest text-[#A8A8A8] mt-2 font-mono">
              Bridging engineering precision with creative visual direction
            </p>
          </div>

          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#181818] border border-white/10 self-start lg:self-auto">
            <span className="w-2 h-2 rounded-full bg-[#B8FF00] animate-pulse" />
            <span className="text-xs font-mono text-[#A8A8A8]">
              Status: <span className="text-white font-medium">Available for select projects</span>
            </span>
          </div>
        </div>

        {/* Story & Background Grid with Profile Photo Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Profile Photo Showcase Card (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div className="p-2.5 sm:p-3 rounded-3xl bg-[#181818] border border-white/[0.08] relative overflow-hidden h-full flex flex-col group hover:border-[#B8FF00]/40 transition-all duration-300 shadow-xl">
              
              {/* Photo Frame */}
              <div className="relative w-full h-[360px] sm:h-[400px] lg:h-full min-h-[350px] rounded-[20px] overflow-hidden bg-[#141414] border border-[#B8FF00]/20">
                <img
                  src={photoUrl}
                  alt="Puneeth M."
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  onError={() => {
                    if (photoUrl !== DEFAULT_PROFILE_PHOTO) {
                      setPhotoUrl(DEFAULT_PROFILE_PHOTO);
                    }
                  }}
                />

                {/* Ambient dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-90 pointer-events-none" />

                {/* Technical corner brackets */}
                <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[#B8FF00] pointer-events-none" />
                <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-[#B8FF00] pointer-events-none" />

                {/* Identity Tag inside Photo Frame */}
                <div className="absolute bottom-4 left-4 right-4 z-10 p-3.5 rounded-xl bg-[#161616]/90 border border-white/10 backdrop-blur-md">
                  <div className="text-xs font-bold text-white uppercase tracking-wider font-display">
                    PUNEETH M.
                  </div>
                  <div className="text-[10px] text-[#B8FF00] font-mono mt-0.5">
                    Creative Developer &amp; Designer • Bengaluru
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Main Story Narrative (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#181818] border border-white/[0.08] relative overflow-hidden h-full flex flex-col justify-between group hover:border-white/20 transition-all duration-300">
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#B8FF00]/5 rounded-bl-full pointer-events-none" />
              <div className="absolute top-3 left-3 text-[10px] font-mono text-white/20 select-none">+ 01.1 // PHILOSOPHY</div>

              <div>
                <blockquote className="text-xl sm:text-2xl font-medium text-white/95 leading-snug mb-6 border-l-2 border-[#B8FF00] pl-4 pt-3 mt-4">
                  "I combine design, technology and content to build engaging digital experiences that don't just function—they leave an impression."
                </blockquote>

                <div className="space-y-4 font-body text-base text-[#A8A8A8] leading-relaxed">
                  <p>
                    I come from a <strong className="text-white font-semibold">Computer Science and Design</strong> background at Dayananda Sagar College of Engineering, but my curiosity extends far beyond pure code syntax. I believe the most effective digital work happens when technical logic meets intentional aesthetics and clear messaging.
                  </p>
                  <p>
                    From crafting high-engagement social media creatives and promotional campaign collateral to architecting full-stack web applications and AI-powered utilities, I enjoy the entire continuum of bringing ideas to life.
                  </p>
                </div>
              </div>

              {/* Education callout banner */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-start gap-4 bg-white/[0.02] -mx-4 -mb-4 p-4 rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-[#242424] border border-white/10 flex items-center justify-center text-[#B8FF00] shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-[#B8FF00] font-mono font-semibold">
                    Formal Education
                  </div>
                  <div className="text-sm font-bold text-white mt-0.5 font-display">
                    Bachelor of Engineering — Computer Science and Design
                  </div>
                  <div className="text-xs text-[#A8A8A8] mt-0.5 font-body">
                    Dayananda Sagar College of Engineering, Bengaluru • Graduating 2026
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: "What I Turn Ideas Into" (3 cols) */}
          <div className="lg:col-span-3 flex flex-col justify-between">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#181818] border border-white/[0.08] h-full flex flex-col justify-between relative group hover:border-white/20 transition-all duration-300">
              <div className="absolute top-3 right-3 text-[10px] font-mono text-white/20 select-none">+ 01.2 // CAPABILITIES</div>

              <div>
                <div className="text-xs uppercase tracking-[0.2em] font-mono font-semibold text-[#B8FF00] mb-2 pt-2">
                  OUTPUT &amp; DELIVERABLES
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 font-display">
                  What I Turn Ideas Into
                </h3>

                <ul className="space-y-4">
                  {whatITurnIdeasInto.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-[#A8A8A8]">
                      <div className="w-5 h-5 rounded-full bg-[#B8FF00]/10 border border-[#B8FF00]/30 flex items-center justify-center text-[#B8FF00] shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-white/90 font-medium font-body">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold font-mono text-[#B8FF00] hover:text-[#D4FF4D] transition-colors"
                >
                  <span>Explore specific creative services</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Core Pillars Grid */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div className="text-xs uppercase tracking-[0.2em] font-mono font-semibold text-[#A8A8A8]">
              CORE MULTIDISCIPLINARY PILLARS
            </div>
            <span className="text-xs font-mono text-white/30">[ 4 PILLARS ]</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {corePillars.map((pillar, idx) => {
              const IconComponent = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="group p-6 rounded-2xl bg-[#181818] border border-white/[0.08] hover:border-[#B8FF00] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#222222] border border-white/10 flex items-center justify-center text-[#B8FF00] group-hover:bg-[#B8FF00] group-hover:text-black transition-all duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-semibold text-[#B8FF00]/50 group-hover:text-[#B8FF00] transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#B8FF00]">
                    {pillar.label}
                  </span>

                  <h4 className="text-lg font-bold font-display text-white mt-1 mb-2">
                    {pillar.title}
                  </h4>

                  <p className="text-xs text-[#A8A8A8] leading-relaxed font-body">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
