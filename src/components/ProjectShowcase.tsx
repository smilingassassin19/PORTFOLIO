import React, { useState } from 'react';
import { projectsData } from '../data/projects';
import { Project } from '../types';
import { ImageWithFallback } from './ImageWithFallback';
import { Github, ExternalLink, ArrowUpRight, CheckCircle, Info, X } from 'lucide-react';
import { GeometricStar } from './GeometricStar';

export const ProjectShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'ALL' | 'WEB' | 'MOBILE' | 'AI' | 'DASHBOARD'>('ALL');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: Array<'ALL' | 'WEB' | 'MOBILE' | 'AI' | 'DASHBOARD'> = [
    'ALL',
    'WEB',
    'MOBILE',
    'AI',
    'DASHBOARD'
  ];

  const filteredProjects = activeCategory === 'ALL'
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  // Lock body scroll and handle Escape key when modal is open
  React.useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="relative py-28 bg-[#111111] overflow-hidden border-t border-white/[0.06]">
      {/* Editorial Watermark */}
      <div className="absolute top-8 right-6 text-[8rem] sm:text-[12rem] font-display font-extrabold text-white/[0.02] select-none pointer-events-none leading-none z-0">
        WORKS
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/3 right-4 opacity-20 pointer-events-none z-0">
        <GeometricStar size={130} color="#B8FF00" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Tag */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#B8FF00]" />
          <span className="text-xs uppercase tracking-[0.2em] font-mono font-semibold text-[#B8FF00]">
            [ 07 // SOFTWARE &amp; APPS SHOWCASE ]
          </span>
        </div>

        {/* Section Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-white">
              SELECTED <span className="font-serif-accent font-normal italic text-[#B8FF00]">WORK &amp; CODE</span>
            </h2>
            <p className="font-body text-base text-[#A8A8A8] mt-3 max-w-2xl">
              Production dashboards, AI-assisted tooling, full-stack systems, and responsive frontends engineered with modern frameworks.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-full bg-[#181818] border border-white/10 self-start lg:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#B8FF00] text-black shadow-md'
                    : 'text-[#A8A8A8] hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, pIdx) => (
            <div
              key={project.id}
              className="group relative rounded-3xl bg-[#181818] border border-white/[0.08] hover:border-[#B8FF00] transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-2 shadow-xl hover:shadow-2xl hover:shadow-[#B8FF00]/10 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Card Image Area with Zoom Effect */}
              <div className="relative aspect-video w-full overflow-hidden bg-[#222222] border-b border-white/[0.06]">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  title={project.title}
                  category={project.category}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  placeholderType="project"
                />

                {/* Top overlay badge */}
                <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-black/80 backdrop-blur-md text-[#B8FF00] border border-[#B8FF00]/30 font-bold">
                    {project.category}
                  </span>
                  <span className="text-[10px] font-mono text-white/50 bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                    0{pIdx + 1}
                  </span>
                </div>

                {/* Inspect button overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="px-5 py-2.5 rounded-full bg-[#B8FF00] text-black text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 shadow-xl">
                    <span>Inspect Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-7 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold font-display text-white group-hover:text-[#B8FF00] transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 text-[#A8A8A8] group-hover:text-[#B8FF00] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
                  </div>

                  <p className="text-xs sm:text-sm text-[#A8A8A8] line-clamp-2 leading-relaxed mb-5 font-body">
                    {project.oneLiner}
                  </p>
                </div>

                <div>
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-[#222222] text-[10px] font-mono text-white/80 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 rounded-lg bg-[#222222] text-[10px] font-mono text-[#B8FF00] border border-[#B8FF00]/20">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Links Row */}
                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      className="text-xs font-mono text-white/60 hover:text-white flex items-center gap-1.5 cursor-pointer"
                    >
                      <Info className="w-3.5 h-3.5 text-[#B8FF00]" />
                      <span>Overview</span>
                    </button>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-2 rounded-xl bg-[#222222] text-[#A8A8A8] hover:text-black hover:bg-[#B8FF00] transition-colors"
                          aria-label={`View ${project.title} GitHub repository`}
                          title="View Repository"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}

                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-2 rounded-xl bg-[#222222] text-[#A8A8A8] hover:text-black hover:bg-[#B8FF00] transition-colors"
                          aria-label={`Open live demonstration for ${project.title}`}
                          title="Live Demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Detailed Project Inspection Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            id="project-detail-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            className="relative w-full max-w-2xl rounded-3xl bg-[#1B1B1B] border border-white/15 p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-white/70 hover:text-white hover:bg-white/20 transition-colors cursor-pointer"
              aria-label="Close project preview"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Category tag */}
            <span className="text-[11px] uppercase font-mono tracking-wider text-[#B8FF00] px-3 py-1 rounded-full bg-[#B8FF00]/10 border border-[#B8FF00]/25 inline-block mb-3">
              {selectedProject.category} Project
            </span>

            <h3 id="project-modal-title" className="text-2xl sm:text-3xl font-bold font-display text-white mb-2">
              {selectedProject.title}
            </h3>

            <p className="text-sm text-[#B8FF00] font-medium mb-6">
              {selectedProject.oneLiner}
            </p>

            <div className="space-y-6">
              {/* Image Preview inside modal */}
              <div className="aspect-video w-full rounded-2xl overflow-hidden bg-[#242424] border border-white/10">
                <ImageWithFallback
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  title={selectedProject.title}
                  category={selectedProject.category}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Full Description */}
              <div>
                <h4 className="text-xs uppercase font-mono tracking-widest text-white/50 mb-2">
                  System Architecture &amp; Functionality
                </h4>
                <p className="text-sm text-[#A8A8A8] leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Key Highlights */}
              {selectedProject.metricsOrHighlights && (
                <div>
                  <h4 className="text-xs uppercase font-mono tracking-widest text-white/50 mb-2">
                    Key Features &amp; Implementation Details
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.metricsOrHighlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/90">
                        <CheckCircle className="w-4 h-4 text-[#B8FF00] mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Full Tech Stack */}
              <div>
                <h4 className="text-xs uppercase font-mono tracking-widest text-white/50 mb-2">
                  Technologies Utilized
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-[#292929] text-xs font-mono text-white border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>View GitHub Code</span>
                    </a>
                  )}

                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#B8FF00] text-black text-xs font-semibold uppercase tracking-wider hover:bg-[#D4FF4D] transition-colors"
                    >
                      <span>Open Live Application</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-xs text-[#A8A8A8] hover:text-white"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
