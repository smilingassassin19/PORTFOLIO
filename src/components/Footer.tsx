import React from 'react';
import { Github, Linkedin, Instagram, Mail, ArrowUp, Heart } from 'lucide-react';
import { GeometricStar } from './GeometricStar';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Creative', href: '#creative' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleFooterNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#0d0d0d] border-t border-white/[0.08] pt-16 pb-12 overflow-hidden text-white">
      {/* Decorative Star in corner */}
      <div className="absolute bottom-4 right-6 opacity-15 pointer-events-none">
        <GeometricStar size={120} color="#B8FF00" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Footer Banner */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/[0.08]">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold font-display tracking-tight text-white">
                PM<span className="text-[#B8FF00]">.</span>
              </span>
              <span className="text-xs uppercase font-mono tracking-widest text-[#B8FF00] pl-3 border-l border-white/10">
                Puneeth M.
              </span>
            </div>
            <p className="font-serif-accent text-xl text-white/80 mt-2">
              "Designing. Creating. Building."
            </p>
            <p className="text-xs text-[#A8A8A8] mt-1 font-body">
              Creative Developer • UI/UX Designer • Graphic Designer • Content Creator
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/smilingassassin19"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#1B1B1B] hover:bg-[#B8FF00] text-[#A8A8A8] hover:text-black flex items-center justify-center transition-all duration-200 border border-white/5 shadow-md"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/puneethm19"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#1B1B1B] hover:bg-[#B8FF00] text-[#A8A8A8] hover:text-black flex items-center justify-center transition-all duration-200 border border-white/5 shadow-md"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href="https://www.instagram.com/itspuneeth____"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#1B1B1B] hover:bg-[#B8FF00] text-[#A8A8A8] hover:text-black flex items-center justify-center transition-all duration-200 border border-white/5 shadow-md"
              aria-label="Instagram Profile"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <a
              href="mailto:ibhpuni@gmail.com"
              className="w-10 h-10 rounded-full bg-[#1B1B1B] hover:bg-[#B8FF00] text-[#A8A8A8] hover:text-black flex items-center justify-center transition-all duration-200 border border-white/5 shadow-md"
              aria-label="Email Contact"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-[#292929] hover:bg-[#B8FF00] text-white hover:text-black flex items-center justify-center transition-all duration-200 border border-white/10 ml-2 shadow-md cursor-pointer"
              aria-label="Scroll back to top"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Navigation & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#A8A8A8]">
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleFooterNavClick(e, link.href)}
                className="hover:text-[#B8FF00] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 font-mono text-[11px] text-white/50">
            <span>© 2026 Puneeth M. All rights reserved.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
