import React from 'react';
import { educationData, leadershipData } from '../data/experience';
import { GraduationCap, Trophy, Users, Dumbbell, Youtube, Compass, ArrowUpRight } from 'lucide-react';
import { GeometricStar } from './GeometricStar';

export const EducationBeyond: React.FC = () => {
  const getLeadershipIcon = (role: string) => {
    if (role.includes('Class Representative')) return Users;
    if (role.includes('Web Development Head')) return Compass;
    if (role.includes('Co-Lead')) return Trophy;
    if (role.includes('Fitness')) return Youtube;
    if (role.includes('Football')) return Dumbbell;
    return Trophy;
  };

  return (
    <section className="relative py-28 bg-[#111111] overflow-hidden border-t border-white/[0.06]">
      {/* Editorial Watermark */}
      <div className="absolute top-8 left-6 text-[8rem] sm:text-[12rem] font-display font-extrabold text-white/[0.02] select-none pointer-events-none leading-none z-0">
        FOUNDATION
      </div>

      {/* Decorative Star */}
      <div className="absolute top-12 right-6 opacity-20 pointer-events-none z-0">
        <GeometricStar size={110} color="#B8FF00" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Tag */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#B8FF00]" />
          <span className="text-xs uppercase tracking-[0.2em] font-mono font-semibold text-[#B8FF00]">
            [ 04 // ACADEMIC FOUNDATION &amp; LEADERSHIP ]
          </span>
        </div>

        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-white">
            EDUCATION &amp; <span className="font-serif-accent font-normal italic text-[#B8FF00]">BEYOND CODE</span>
          </h2>
          <p className="font-body text-base text-[#A8A8A8] mt-3">
            Academic grounding in Computer Science &amp; Design coupled with proactive student leadership, sports discipline, and creator experience.
          </p>
        </div>

        {/* Top Grid: Education Card & Beyond Development Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
          
          {/* Education Primary Card (5 cols) */}
          <div className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-[#181818] border border-white/[0.08] hover:border-white/20 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group">
            <div className="absolute top-0 right-0 w-36 h-36 bg-[#B8FF00]/5 rounded-bl-full pointer-events-none" />
            <div className="absolute top-3 right-3 text-[10px] font-mono text-white/20 select-none">+ 04.1 // DEGREE</div>

            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#222222] border border-white/10 flex items-center justify-center text-[#B8FF00] mb-6 shadow-inner">
                <GraduationCap className="w-7 h-7" />
              </div>

              <span className="text-[10px] uppercase font-mono tracking-widest text-[#B8FF00] px-2.5 py-0.5 rounded-full bg-[#B8FF00]/10 border border-[#B8FF00]/20 inline-block mb-2">
                Formal Academic Degree
              </span>

              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-2 leading-tight">
                {educationData.degree}
              </h3>

              <div className="text-base font-semibold text-white/90 mb-1">
                {educationData.institution}
              </div>

              <div className="text-xs text-[#A8A8A8] mb-6 font-mono">
                {educationData.location} • <span className="text-[#B8FF00] font-semibold">{educationData.expectedGraduation}</span>
              </div>

              {/* Focus Areas */}
              <div className="pt-6 border-t border-white/[0.06]">
                <span className="text-[10px] uppercase font-mono text-white/40 tracking-wider block mb-3">
                  Key Curriculum Focus Areas:
                </span>
                <div className="flex flex-wrap gap-2">
                  {educationData.focusAreas.map((area, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-[#222222] text-[11px] font-mono text-white/80 border border-white/5"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-[#A8A8A8] font-mono">
              <span>Period: {educationData.period}</span>
              <span className="text-[#B8FF00] font-semibold">B.E. Candidate</span>
            </div>
          </div>

          {/* Beyond Development Cards (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="text-xs uppercase font-mono tracking-widest text-[#B8FF00] mb-3">
                BEYOND DEVELOPMENT &amp; CHARACTER
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-6">
                Leadership, Athletic Discipline &amp; Content Creation
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {leadershipData.map((item, idx) => {
                  const IconComp = getLeadershipIcon(item.role);
                  return (
                    <div
                      key={idx}
                      className="p-6 rounded-2xl bg-[#181818] border border-white/[0.08] hover:border-[#B8FF00]/50 hover:-translate-y-1 transition-all duration-300 relative group"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-[#222222] border border-white/10 flex items-center justify-center text-[#B8FF00] group-hover:bg-[#B8FF00] group-hover:text-black transition-colors shrink-0 shadow-inner">
                          <IconComp className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold font-display text-white leading-tight">
                            {item.role}
                          </h4>
                          <span className="text-[10px] text-[#A8A8A8] font-mono block mt-0.5">
                            {item.organization}
                          </span>
                        </div>
                      </div>

                      <p className="text-xs text-[#A8A8A8] leading-relaxed font-body">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quote on mindset */}
            <div className="mt-6 p-5 rounded-2xl bg-[#181818] border border-white/[0.08] text-xs text-[#A8A8A8] flex items-center gap-4">
              <span className="text-[#B8FF00] text-3xl font-serif-accent italic leading-none">“</span>
              <span className="font-body leading-relaxed">
                High physical stamina from athletics and the creative pressure of publishing content weekly translate into fast sprint velocity and resilient problem solving.
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
