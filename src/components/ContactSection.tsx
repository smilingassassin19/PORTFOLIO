import React from 'react';
import { Mail, Linkedin, Github, Instagram, ArrowUpRight, Clock, Sparkles } from 'lucide-react';
import { GeometricStar } from './GeometricStar';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = () => {
  const directChannels = [
    {
      id: 'email',
      title: 'Email Direct',
      handle: 'ibhpuni@gmail.com',
      href: 'mailto:ibhpuni@gmail.com',
      label: 'Primary Inbox',
      icon: Mail,
      actionText: 'Send Email'
    },
    {
      id: 'linkedin',
      title: 'LinkedIn',
      handle: 'linkedin.com/in/puneethm19',
      href: 'https://www.linkedin.com/in/puneethm19',
      label: 'Professional Network',
      icon: Linkedin,
      actionText: 'Connect'
    },
    {
      id: 'github',
      title: 'GitHub',
      handle: 'github.com/smilingassassin19',
      href: 'https://github.com/smilingassassin19',
      label: 'Code Repository',
      icon: Github,
      actionText: 'View Repos'
    },
    {
      id: 'instagram',
      title: 'Instagram',
      handle: 'instagram.com/itspuneeth____',
      href: 'https://www.instagram.com/itspuneeth____',
      label: 'Creative & Lifestyle',
      icon: Instagram,
      actionText: 'Follow / DM'
    }
  ];

  return (
    <section id="contact" className="relative py-28 bg-[#111111] overflow-hidden border-t border-white/[0.06]">
      {/* Editorial Watermark */}
      <div className="absolute top-8 left-6 text-[8rem] sm:text-[12rem] font-display font-extrabold text-white/[0.02] select-none pointer-events-none leading-none z-0">
        CONNECT
      </div>

      {/* Background Star */}
      <div className="absolute top-12 right-12 opacity-25 pointer-events-none z-0">
        <GeometricStar size={130} color="#B8FF00" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Tag */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#B8FF00]" />
          <span className="text-xs uppercase tracking-[0.2em] font-mono font-semibold text-[#B8FF00]">
            [ DIRECT COLLABORATION &amp; INQUIRY ]
          </span>
        </div>

        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-white">
            LET'S CREATE <span className="font-serif-accent font-normal italic text-[#B8FF00]">SOMETHING GREAT.</span>
          </h2>
          <p className="font-body text-base sm:text-lg text-[#A8A8A8] mt-3">
            Have a project, brand, campaign, website or idea in mind? Reach out directly across any of the platforms below for freelance contracts, full-stack builds, or creative commissions.
          </p>
        </div>

        {/* Channels Grid: 4 Interactive Communication Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {directChannels.map((channel) => {
            const Icon = channel.icon;
            const isEmail = channel.href.startsWith('mailto:');
            return (
              <a
                key={channel.id}
                href={channel.href}
                target={isEmail ? undefined : '_blank'}
                rel={isEmail ? undefined : 'noopener noreferrer'}
                className="group relative p-6 rounded-3xl bg-[#181818] hover:bg-[#202020] border border-white/[0.08] hover:border-[#B8FF00]/50 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:-translate-y-1 cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#222222] border border-white/10 flex items-center justify-center text-[#B8FF00] group-hover:bg-[#B8FF00] group-hover:text-black transition-colors duration-200 shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-[#B8FF00]/10 flex items-center justify-center text-[#A8A8A8] group-hover:text-[#B8FF00] transition-colors">
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                  <div className="text-[11px] uppercase font-mono tracking-wider text-[#A8A8A8] mb-1">
                    {channel.label}
                  </div>
                  <h3 className="text-lg font-bold font-display text-white group-hover:text-[#B8FF00] transition-colors mb-2">
                    {channel.title}
                  </h3>
                  <p className="text-xs text-[#888888] font-mono break-all line-clamp-1">
                    {channel.handle}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono font-medium text-white/60 group-hover:text-[#B8FF00] transition-colors">
                  <span>{channel.actionText}</span>
                  <span className="text-[10px] tracking-wider uppercase text-white/30 group-hover:text-[#B8FF00]/80">Open &rarr;</span>
                </div>
              </a>
            );
          })}
        </div>

        {/* Turnaround & Availability Banner */}
        <div className="p-6 rounded-2xl bg-[#181818] border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#A8A8A8]">
          <div className="flex items-center gap-3">
            <Clock className="w-4 h-4 text-[#B8FF00] shrink-0" />
            <span>Typical response window: <strong className="text-white">Under 24 hours</strong></span>
          </div>
          <div className="flex items-center gap-3">
            <Sparkles className="w-4 h-4 text-[#B8FF00] shrink-0" />
            <span>Open for <strong className="text-white">Freelance, Retainers &amp; Full-Stack Commissions</strong></span>
          </div>
        </div>

      </div>
    </section>
  );
};
