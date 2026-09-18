import React, { useState } from 'react';
import { skillCategories, techStackPills } from '../data/skills';
import { Code, Layout, Cpu, Film, TrendingUp, Sparkles, ArrowDownRight, Terminal } from 'lucide-react';
import { GeometricStar } from './GeometricStar';

interface SoftwareSkillsProps {
  onExploreProjects?: () => void;
}

export const SoftwareSkills: React.FC<SoftwareSkillsProps> = ({ onExploreProjects }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('DEVELOPMENT');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code': return Code;
      case 'Layout': return Layout;
      case 'Cpu': return Cpu;
      case 'Film': return Film;
      case 'TrendingUp': return TrendingUp;
      default: return Sparkles;
    }
  };

  const activeCategoryData = skillCategories.find(c => c.title === selectedCategory) || skillCategories[0];
  const ActiveIcon = getCategoryIcon(activeCategoryData.iconName);

  return (
    <section id="skills" className="relative py-28 bg-[#111111] overflow-hidden border-t border-white/[0.06]">
      {/* Editorial Watermark */}
      <div className="absolute top-8 left-6 text-[8rem] sm:text-[12rem] font-display font-extrabold text-white/[0.02] select-none pointer-events-none leading-none z-0">
        STACK
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
            [ 06 // TECHNICAL FOUNDATION &amp; ECOSYSTEM ]
          </span>
        </div>

        {/* Section Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-white">
              AND YES, <span className="font-serif-accent font-normal italic text-[#B8FF00]">I BUILD TOO.</span>
            </h2>
            <p className="font-body text-base text-[#A8A8A8] mt-3 max-w-xl">
              Software engineering rigor combined with design intuition. Real codebases, production deployments, and AI workflows without inflated progress bars.
            </p>
          </div>

          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              if (onExploreProjects) onExploreProjects();
              const el = document.getElementById('projects');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#B8FF00] text-black font-semibold font-mono text-xs uppercase tracking-wider hover:bg-[#D4FF4D] transition-colors self-start lg:self-auto shadow-lg shadow-[#B8FF00]/15 cursor-pointer"
          >
            <span>EXPLORE MY PROJECTS</span>
            <ArrowDownRight className="w-4 h-4" />
          </a>
        </div>

        {/* Highlighted Tech Pills Ribbon */}
        <div className="p-6 rounded-3xl bg-[#181818] border border-white/[0.08] mb-10">
          <div className="flex items-center gap-3 mb-4">
            <Terminal className="w-4 h-4 text-[#B8FF00]" />
            <span className="text-xs uppercase font-mono tracking-wider text-[#A8A8A8]">
              Primary Tech Stack &amp; Core Tooling
            </span>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {techStackPills.map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 rounded-xl bg-[#222222] hover:bg-[#B8FF00] hover:text-black text-xs font-mono font-medium text-white/90 border border-white/5 transition-all duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2.5 mb-8">
          {skillCategories.map((cat) => {
            const isSelected = selectedCategory === cat.title;
            const IconComp = getCategoryIcon(cat.iconName);

            return (
              <button
                key={cat.title}
                onClick={() => setSelectedCategory(cat.title)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono uppercase font-semibold tracking-wider transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#B8FF00] text-black shadow-lg shadow-[#B8FF00]/20'
                    : 'bg-[#181818] text-[#A8A8A8] hover:text-white hover:bg-[#242424] border border-white/10'
                }`}
              >
                <IconComp className="w-3.5 h-3.5" />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Skill Ecosystem Display */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#181818] border border-white/[0.08] relative">
          <div className="flex items-center gap-4 mb-6 pb-5 border-b border-white/[0.08]">
            <div className="w-12 h-12 rounded-2xl bg-[#222222] border border-white/10 flex items-center justify-center text-[#B8FF00] shadow-inner">
              <ActiveIcon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-display text-white">
                {activeCategoryData.title} COMPETENCIES
              </h3>
              <p className="text-xs text-[#A8A8A8] font-body mt-0.5">
                Verified hands-on knowledge applied across projects, internships, and creative assignments.
              </p>
            </div>
          </div>

          {/* Skill Badges Matrix */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
            {activeCategoryData.skills.map((skill) => (
              <div
                key={skill.name}
                className={`group p-4 rounded-2xl transition-all duration-200 flex items-center justify-between ${
                  skill.featured
                    ? 'bg-[#222222] border border-[#B8FF00]/50 text-white shadow-sm'
                    : 'bg-[#1c1c1c] border border-white/5 text-[#A8A8A8] hover:text-white hover:border-white/20'
                }`}
              >
                <span className="text-xs font-mono font-medium tracking-wide">
                  {skill.name}
                </span>

                {skill.featured && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B8FF00] group-hover:scale-125 transition-transform" />
                )}
              </div>
            ))}
          </div>

          {/* Note about real skills */}
          <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-[#A8A8A8] font-mono">
            <span>• No artificial 99% meters — actual real-world tooling and production libraries</span>
            <span className="text-[#B8FF00] font-semibold">Verified Stack</span>
          </div>
        </div>

      </div>
    </section>
  );
};
