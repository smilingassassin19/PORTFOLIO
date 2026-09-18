import React, { useState, useEffect } from 'react';
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Instagram, Mail, Code2, Sparkles, Camera, Upload } from 'lucide-react';
import { GeometricStar } from './GeometricStar';
import { DEFAULT_PROFILE_PHOTO } from '../data/profilePhoto';

interface HeroProps {
  onViewWorkClick?: () => void;
  onContactClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewWorkClick, onContactClick }) => {
  // Use user-saved photo or embedded default
  const [photoUrl, setPhotoUrl] = useState<string>(() => {
    return localStorage.getItem('puneeth_profile_photo') || DEFAULT_PROFILE_PHOTO;
  });

  const [isDragging, setIsDragging] = useState(false);

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

  const handleFile = (file: File) => {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      if (dataUrl) {
        localStorage.setItem('puneeth_profile_photo', dataUrl);
        setPhotoUrl(dataUrl);
        window.dispatchEvent(new CustomEvent('puneeth_photo_updated', { detail: dataUrl }));
      }
    };
    reader.readAsDataURL(file);
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFile(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleFile(file);
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[96vh] flex flex-col justify-between pt-28 pb-0 overflow-hidden bg-[#111111]">
      {/* Background ambient lighting and technical grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[32rem] h-[32rem] bg-[#B8FF00]/[0.06] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/[0.02] rounded-full blur-2xl pointer-events-none" />

      {/* Signature geometric decorative stars inspired by the reference design */}
      <div className="absolute top-36 right-8 sm:right-16 opacity-30 lg:opacity-85 animate-pulse transition-opacity duration-1000 pointer-events-none">
        <GeometricStar size={120} color="#B8FF00" />
      </div>
      <div className="absolute bottom-28 left-8 opacity-25 pointer-events-none">
        <GeometricStar size={70} color="#B8FF00" />
      </div>

      {/* Subtle Technical Corner Coordinates */}
      <div className="hidden md:flex absolute top-28 left-8 z-10 items-center gap-3 text-[10px] font-mono tracking-widest text-white/30 select-none">
        <span>+ 12°58'23"N 77°35'45"E</span>
        <span>//</span>
        <span className="text-[#B8FF00]/60">BLR • PORTFOLIO V2.6</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography and CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Small uppercase lime label with greeting */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B8FF00] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B8FF00]"></span>
              </span>
              <span className="text-xs uppercase tracking-[0.2em] font-mono font-semibold text-[#B8FF00] px-3.5 py-1 rounded-full bg-[#B8FF00]/10 border border-[#B8FF00]/25">
                CREATIVE DEVELOPER • DESIGNER • CONTENT CREATOR
              </span>
            </div>

            {/* Main Statement */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-bold font-display tracking-tight text-white leading-[1.06] mb-5">
              I DESIGN.<br />
              <span className="text-[#B8FF00]">I BUILD.</span><br />
              <span className="font-serif-accent font-normal italic text-white/90">I CREATE.</span>
            </h1>

            {/* Sub-heading */}
            <div className="flex items-center gap-3 my-2">
              <div className="h-[2px] w-8 bg-[#B8FF00]" />
              <h2 className="text-lg sm:text-2xl font-medium text-white/95 tracking-wide">
                Creative Developer &amp; Digital Designer
              </h2>
            </div>

            {/* Supporting Bio Paragraph */}
            <p className="font-body text-base sm:text-lg text-[#A8A8A8] max-w-xl leading-relaxed mt-4 mb-8">
              I combine design, technology and content to create websites, social media experiences, promotional creatives and digital products that help ideas stand out.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <button
                id="hero-cta-view-work"
                onClick={() => {
                  if (onViewWorkClick) onViewWorkClick();
                  scrollToSection('projects');
                }}
                className="group px-8 py-3.5 rounded-full bg-[#B8FF00] text-black font-semibold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#D4FF4D] transition-all duration-200 flex items-center gap-2.5 shadow-lg shadow-[#B8FF00]/20 hover:shadow-xl hover:shadow-[#B8FF00]/30 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>VIEW MY WORK</span>
                <ArrowDownRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </button>

              <button
                id="hero-cta-contact"
                onClick={() => {
                  if (onContactClick) onContactClick();
                  scrollToSection('contact');
                }}
                className="group px-8 py-3.5 rounded-full bg-[#1B1B1B] text-white border border-white/15 font-semibold text-xs sm:text-sm uppercase tracking-wider hover:bg-white/10 hover:border-[#B8FF00]/50 transition-all duration-200 flex items-center gap-2.5 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B8FF00]"
              >
                <span>LET'S WORK TOGETHER</span>
                <ArrowUpRight className="w-4 h-4 text-[#B8FF00] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-4 max-w-lg mb-8 p-3 rounded-2xl bg-[#181818] border border-white/[0.06]">
              <div className="text-left px-2">
                <div className="text-lg sm:text-xl font-bold font-display text-white">4+</div>
                <div className="text-[10px] sm:text-xs font-mono text-[#A8A8A8] uppercase tracking-wider">Disciplines</div>
              </div>
              <div className="text-left px-2 border-l border-white/10">
                <div className="text-lg sm:text-xl font-bold font-display text-[#B8FF00]">2026</div>
                <div className="text-[10px] sm:text-xs font-mono text-[#A8A8A8] uppercase tracking-wider">Hokuto Corp, Japan</div>
              </div>
              <div className="text-left px-2 border-l border-white/10">
                <div className="text-lg sm:text-xl font-bold font-display text-white">100%</div>
                <div className="text-[10px] sm:text-xs font-mono text-[#A8A8A8] uppercase tracking-wider">Native Execution</div>
              </div>
            </div>

            {/* Secondary Small Links */}
            <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/[0.08]">
              <span className="text-xs uppercase tracking-widest text-white/40 font-mono">
                Connect
              </span>

              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href="https://github.com/smilingassassin19"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#181818] text-xs text-[#A8A8A8] hover:text-white hover:border-[#B8FF00]/40 border border-white/5 transition-all"
                  aria-label="Puneeth M. GitHub Profile"
                >
                  <Github className="w-3.5 h-3.5 text-[#B8FF00]" />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/puneethm19"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#181818] text-xs text-[#A8A8A8] hover:text-white hover:border-[#B8FF00]/40 border border-white/5 transition-all"
                  aria-label="Puneeth M. LinkedIn Profile"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#B8FF00]" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://www.instagram.com/itspuneeth____"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#181818] text-xs text-[#A8A8A8] hover:text-white hover:border-[#B8FF00]/40 border border-white/5 transition-all"
                  aria-label="Instagram Profile"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#B8FF00]" />
                  <span>Instagram</span>
                </a>

                <a
                  href="mailto:ibhpuni@gmail.com"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#181818] text-xs text-[#A8A8A8] hover:text-white hover:border-[#B8FF00]/40 border border-white/5 transition-all"
                  aria-label="Email Puneeth M."
                >
                  <Mail className="w-3.5 h-3.5 text-[#B8FF00]" />
                  <span>Email</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Frame Inspired by Reference (5 cols) */}
          <div className="lg:col-span-5 flex justify-center items-center relative mt-8 lg:mt-0">
            
            {/* Reference-Inspired Circular Rotating Badge */}
            <div className="absolute -top-10 -left-6 sm:-top-8 sm:-left-10 z-30 flex items-center justify-center">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center">
                {/* Rotating ring with SVG text */}
                <svg className="w-full h-full animate-[spin_14s_linear_infinite]" viewBox="0 0 100 100">
                  <path
                    id="circlePath"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    fill="none"
                  />
                  <text className="text-[9px] font-mono font-bold uppercase tracking-[2.8px] fill-[#B8FF00]">
                    <textPath href="#circlePath" startOffset="0%">
                      CREATIVE DEVELOPER • DESIGNER •
                    </textPath>
                  </text>
                </svg>

                {/* Central Star + Arrow badge */}
                <div className="absolute w-11 h-11 rounded-full bg-[#1B1B1B] border-2 border-[#B8FF00] flex items-center justify-center shadow-lg shadow-[#B8FF00]/30 group">
                  <GeometricStar size={18} color="#B8FF00" />
                </div>
              </div>
            </div>

            {/* Main Visual Frame with Neon Lime Outline & Offset Layer */}
            <div className="relative w-full max-w-[340px] sm:max-w-[390px] lg:max-w-[410px]">
              
              {/* Asymmetric offset neon backdrop shape */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-[#B8FF00]/40 via-transparent to-[#B8FF00]/20 blur-sm pointer-events-none" />

              <div className="relative rounded-3xl p-1 bg-gradient-to-b from-[#B8FF00] via-[#B8FF00]/30 to-white/10 shadow-2xl">
                
                <div 
                  className={`relative rounded-[22px] bg-[#181818] border ${isDragging ? 'border-[#B8FF00] scale-[1.01]' : 'border-white/10'} overflow-hidden h-[480px] sm:h-[520px] flex flex-col items-center justify-between p-0 text-center group transition-all duration-200`}
                  onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                  onDragLeave={() => setIsDragging(false)}
                  onDrop={handleDrop}
                >
                  
                  {/* Subtle diagonal background lines */}
                  <div 
                    className="absolute inset-0 opacity-10 pointer-events-none z-10"
                    style={{
                      backgroundImage: 'linear-gradient(135deg, #B8FF00 10%, transparent 10%, transparent 50%, #B8FF00 50%, #B8FF00 60%, transparent 60%, transparent 100%)',
                      backgroundSize: '30px 30px'
                    }}
                  />

                  {/* Corner Accent Brackets */}
                  <div className="absolute top-3 left-3 w-3.5 h-3.5 border-t-2 border-l-2 border-[#B8FF00] z-20" />
                  <div className="absolute top-3 right-3 w-3.5 h-3.5 border-t-2 border-r-2 border-[#B8FF00] z-20" />

                  {/* Interactive Quick Photo Upload Button on Hover */}
                  <label 
                    title="Click or drag to update profile photo"
                    className="absolute top-3 right-3 z-30 opacity-80 group-hover:opacity-100 hover:scale-105 transition-all cursor-pointer flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-black/70 backdrop-blur-md border border-[#B8FF00]/40 text-[#B8FF00] text-[11px] font-mono shadow-lg hover:bg-black/90"
                  >
                    <Camera className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Update Photo</span>
                    <input 
                      type="file" 
                      accept="image/*" 
                      onChange={handlePhotoUpload} 
                      className="hidden" 
                    />
                  </label>

                  {/* Drag-over indicator overlay */}
                  {isDragging && (
                    <div className="absolute inset-0 z-40 bg-black/80 backdrop-blur-sm border-2 border-dashed border-[#B8FF00] rounded-[22px] flex flex-col items-center justify-center p-6 pointer-events-none">
                      <Upload className="w-12 h-12 text-[#B8FF00] animate-bounce mb-3" />
                      <p className="text-white font-display text-sm uppercase tracking-wider font-bold">
                        Drop your photo here
                      </p>
                      <p className="text-xs text-[#B8FF00] font-mono mt-1">
                        Updates your portfolio profile instantly
                      </p>
                    </div>
                  )}

                  {/* The Actual Profile Photo */}
                  <div className="relative w-full h-full overflow-hidden bg-[#151515]">
                    <img
                      src={photoUrl}
                      alt="Puneeth M. - Creative Developer & Designer"
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      onError={() => {
                        if (photoUrl !== DEFAULT_PROFILE_PHOTO) {
                          setPhotoUrl(DEFAULT_PROFILE_PHOTO);
                        }
                      }}
                    />

                    {/* Gradient blending overlay so photo melts naturally into the dark bottom */}
                    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#181818] via-[#181818]/60 to-transparent pointer-events-none z-10" />

                    {/* Subtle top ambient glow */}
                    <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#B8FF00]/10 to-transparent pointer-events-none z-10" />
                  </div>

                  {/* Floating badge bottom inside the photo frame */}
                  <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between p-3 rounded-xl bg-[#181818]/90 border border-white/10 backdrop-blur-md text-left shadow-xl">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#B8FF00]/15 border border-[#B8FF00]/30 flex items-center justify-center text-[#B8FF00]">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[11px] uppercase tracking-wider font-semibold text-white">
                          Multidisciplinary
                        </div>
                        <div className="text-[10px] text-[#A8A8A8]">
                          Design + Content + Code
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-[#B8FF00] px-2 py-0.5 rounded bg-[#B8FF00]/10 border border-[#B8FF00]/20">
                      2026
                    </span>
                  </div>

                </div>
              </div>

              {/* Floating side badge: Skills pills */}
              <div className="hidden sm:flex absolute -bottom-5 -right-5 z-20 items-center gap-2 p-2.5 px-3.5 rounded-xl bg-[#1B1B1B] border border-white/10 shadow-xl">
                <Code2 className="w-3.5 h-3.5 text-[#B8FF00]" />
                <span className="text-xs font-mono text-white">
                  React • Figma • AI
                </span>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Infinite Horizontal Marquee Ticker along bottom of Hero */}
      <div className="w-full bg-[#0d0d0d] border-y border-white/[0.08] py-3 overflow-hidden select-none">
        <div className="animate-marquee flex items-center gap-8 whitespace-nowrap text-xs sm:text-sm font-mono tracking-widest text-[#A8A8A8]">
          <span className="text-[#B8FF00]">★</span>
          <span>CREATIVE DEVELOPMENT</span>
          <span className="text-[#B8FF00]">★</span>
          <span>UI/UX DESIGN ARCHITECTURE</span>
          <span className="text-[#B8FF00]">★</span>
          <span>FULL STACK WEB SYSTEMS</span>
          <span className="text-[#B8FF00]">★</span>
          <span>SHORT-FORM VIDEO PRODUCTION</span>
          <span className="text-[#B8FF00]">★</span>
          <span>CONTENT STRATEGY &amp; COPY</span>
          <span className="text-[#B8FF00]">★</span>
          <span>ACCEPTED: HOKUTO CORP (JAPAN 2026)</span>
          <span className="text-[#B8FF00]">★</span>
          <span>BENGALURU, INDIA</span>
          <span className="text-[#B8FF00]">★</span>
          <span>CREATIVE DEVELOPMENT</span>
          <span className="text-[#B8FF00]">★</span>
          <span>UI/UX DESIGN ARCHITECTURE</span>
          <span className="text-[#B8FF00]">★</span>
          <span>FULL STACK WEB SYSTEMS</span>
          <span className="text-[#B8FF00]">★</span>
          <span>SHORT-FORM VIDEO PRODUCTION</span>
          <span className="text-[#B8FF00]">★</span>
          <span>CONTENT STRATEGY &amp; COPY</span>
          <span className="text-[#B8FF00]">★</span>
          <span>ACCEPTED: HOKUTO CORP (JAPAN 2026)</span>
          <span className="text-[#B8FF00]">★</span>
          <span>BENGALURU, INDIA</span>
        </div>
      </div>
    </section>
  );
};
