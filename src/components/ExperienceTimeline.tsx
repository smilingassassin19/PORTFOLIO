import React from 'react';
import { experienceData } from '../data/experience';
import { Briefcase, MapPin, Award, CheckCircle, Calendar } from 'lucide-react';
import { GeometricStar } from './GeometricStar';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="relative py-28 bg-[#141414] overflow-hidden border-t border-white/[0.06]">
      {/* Editorial Watermark */}
      <div className="absolute top-8 right-6 text-[8rem] sm:text-[12rem] font-display font-extrabold text-white/[0.02] select-none pointer-events-none leading-none z-0">
        JOURNEY
      </div>

      {/* Subtle background element */}
      <div className="absolute bottom-12 right-6 opacity-20 pointer-events-none z-0">
        <GeometricStar size={120} color="#B8FF00" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Tag */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#B8FF00]" />
          <span className="text-xs uppercase tracking-[0.2em] font-mono font-semibold text-[#B8FF00]">
            [ 05 // CAREER TRAJECTORY &amp; EXPERIENCE ]
          </span>
        </div>

        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-white">
              ENGINEERING <span className="font-serif-accent font-normal italic text-[#B8FF00]">EXPERIENCE</span>
            </h2>
            <p className="font-body text-base text-[#A8A8A8] mt-3 max-w-2xl">
              From competitive ideathon awards and interactive enterprise software to leading mission-critical agritech dashboards and an accepted robotics role in Japan.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[#A8A8A8] bg-[#181818] px-4 py-2 rounded-full border border-white/10 self-start md:self-auto">
            <Briefcase className="w-3.5 h-3.5 text-[#B8FF00]" />
            <span>Internships &amp; Roles</span>
          </div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {experienceData.map((item, index) => (
            <div key={index} className="relative group">
              
              {/* Timeline marker node */}
              <div className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-transform duration-200 group-hover:scale-125 ${
                item.acceptedRole 
                  ? 'bg-[#B8FF00] border-[#B8FF00] text-black shadow-lg shadow-[#B8FF00]/40' 
                  : 'bg-[#181818] border-white/30 text-[#B8FF00] group-hover:border-[#B8FF00]'
              }`}>
                <div className={`w-2 h-2 rounded-full ${item.acceptedRole ? 'bg-black' : 'bg-[#B8FF00]'}`} />
              </div>

              {/* Experience Card */}
              <div className={`p-8 sm:p-10 rounded-3xl bg-[#181818] border transition-all duration-300 hover:-translate-y-1 ${
                item.acceptedRole
                  ? 'border-[#B8FF00] shadow-2xl shadow-[#B8FF00]/10 bg-[#1c1c1c]'
                  : 'border-white/[0.08] hover:border-white/20'
              }`}>
                
                {/* Header Row: Year, Company, Role */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-[#B8FF00] transition-colors">
                        {item.role}
                      </span>
                      {item.acceptedRole && (
                        <span className="px-3 py-0.5 rounded-full bg-[#B8FF00] text-black text-[10px] font-mono font-bold uppercase tracking-wider shadow-sm">
                          Accepted Role
                        </span>
                      )}
                    </div>

                    <div className="text-sm font-semibold text-white/90 mt-1.5 flex items-center gap-2">
                      <span className="text-white font-medium">{item.company}</span>
                      {item.location && (
                        <span className="text-xs font-normal text-[#A8A8A8] flex items-center gap-1 font-mono">
                          • <MapPin className="w-3 h-3 text-[#B8FF00]" /> {item.location}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#222222] border border-white/10 text-xs font-mono text-[#B8FF00]">
                    <Calendar className="w-3 h-3" />
                    <span>{item.year}</span>
                  </div>
                </div>

                {/* Optional Note (e.g. Ideathon) */}
                {item.notes && (
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#B8FF00]/10 border border-[#B8FF00]/20 text-xs text-[#B8FF00] font-mono font-medium mb-4">
                    <Award className="w-3.5 h-3.5" />
                    <span>{item.notes}</span>
                  </div>
                )}

                {/* Highlights */}
                <ul className="space-y-2.5 mb-6">
                  {item.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#A8A8A8]">
                      <CheckCircle className="w-4 h-4 text-[#B8FF00] mt-0.5 shrink-0" />
                      <span className="font-body leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-5 border-t border-white/[0.06]">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg bg-[#222222] text-[11px] font-mono text-white/80 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
