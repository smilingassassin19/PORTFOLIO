import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onContactClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Creative', href: '#creative' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Active section detection
      const sections = ['home', 'about', 'services', 'skills', 'experience', 'projects', 'creative', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#111111]/92 backdrop-blur-md border-b border-white/[0.08] py-3 shadow-2xl'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            id="nav-brand-logo"
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="group flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B8FF00] rounded-lg"
            aria-label="Puneeth M. Homepage"
          >
            <span className="text-2xl font-bold font-display tracking-tight text-white group-hover:text-[#B8FF00] transition-colors">
              PM<span className="text-[#B8FF00]">.</span>
            </span>
            <span className="hidden sm:inline-block text-[11px] uppercase tracking-widest text-[#A8A8A8] pl-2 border-l border-white/10 font-mono">
              Creative Portfolio
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav
            id="desktop-nav-menu"
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#1B1B1B]/85 border border-white/[0.08] backdrop-blur-sm shadow-inner"
          >
            {navLinks.map((link) => {
              const targetId = link.href.substring(1);
              const isActive = activeSection === targetId;
              return (
                <a
                  key={link.name}
                  id={`nav-link-${targetId}`}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 whitespace-nowrap focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B8FF00] ${
                    isActive
                      ? 'text-black bg-[#B8FF00] font-semibold shadow-sm'
                      : 'text-[#A8A8A8] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Tablet & Desktop Compact Navigation for md screens */}
          <nav
            aria-label="Medium screen Navigation"
            className="hidden md:flex lg:hidden items-center gap-0.5 px-2 py-1 rounded-full bg-[#1B1B1B]/85 border border-white/[0.08] backdrop-blur-sm"
          >
            {navLinks.slice(0, 6).map((link) => {
              const targetId = link.href.substring(1);
              const isActive = activeSection === targetId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-2.5 py-1 text-[11px] font-medium rounded-full transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? 'text-black bg-[#B8FF00] font-semibold'
                      : 'text-[#A8A8A8] hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right CTA button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              id="nav-cta-contact"
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                if (onContactClick) onContactClick();
                handleNavClick('#contact');
              }}
              className="group relative inline-flex items-center gap-1.5 px-4 lg:px-5 py-2 lg:py-2.5 text-xs uppercase tracking-wider font-semibold rounded-full bg-[#B8FF00] text-black hover:bg-[#D4FF4D] transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-[#B8FF00]/10 whitespace-nowrap"
            >
              <span>Let's Work Together</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile hamburger toggle */}
          <div className="flex md:hidden items-center gap-2">
            <a
              id="mobile-contact-pill"
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="px-3 py-1.5 text-xs font-semibold rounded-full bg-[#B8FF00] text-black"
            >
              Contact
            </a>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#1B1B1B] text-white hover:text-[#B8FF00] border border-white/10 focus:outline-none focus:ring-1 focus:ring-[#B8FF00]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-drawer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden bg-[#111111]/98 border-b border-white/10 px-4 pt-3 pb-6 space-y-2 backdrop-blur-xl animate-fadeIn"
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const targetId = link.href.substring(1);
              const isActive = activeSection === targetId;
              return (
                <a
                  key={link.name}
                  id={`mobile-nav-link-${targetId}`}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#B8FF00] text-black font-semibold'
                      : 'text-[#A8A8A8] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-white/10">
            <a
              id="mobile-drawer-contact-cta"
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold uppercase tracking-wider rounded-lg bg-[#B8FF00] text-black hover:bg-[#D4FF4D] transition-colors"
            >
              <span>Let's Work Together</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
