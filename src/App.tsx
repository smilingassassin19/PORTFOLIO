import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutMe } from './components/AboutMe';
import { CreativeServices } from './components/CreativeServices';
import { ClientWorkflow } from './components/ClientWorkflow';
import { SoftwareSkills } from './components/SoftwareSkills';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ProjectShowcase } from './components/ProjectShowcase';
import { CreativePortfolio } from './components/CreativePortfolio';
import { ContentShowcase } from './components/ContentShowcase';
import { EducationBeyond } from './components/EducationBeyond';
import { WhyWorkWithMe } from './components/WhyWorkWithMe';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedServiceForContact, setSelectedServiceForContact] = useState<string>('Website');

  const handleSelectService = (serviceTitle: string) => {
    // Map service titles to contact options
    if (serviceTitle.includes('GRAPHIC')) setSelectedServiceForContact('Graphic Design');
    else if (serviceTitle.includes('SOCIAL MEDIA DESIGN') || serviceTitle.includes('SOCIAL MEDIA MANAGEMENT')) setSelectedServiceForContact('Social Media');
    else if (serviceTitle.includes('VIDEO')) setSelectedServiceForContact('Video Editing');
    else if (serviceTitle.includes('CONTENT')) setSelectedServiceForContact('Content Writing');
    else if (serviceTitle.includes('PROMOTION')) setSelectedServiceForContact('Promotion');
    else if (serviceTitle.includes('UI/UX')) setSelectedServiceForContact('UI/UX');
    else if (serviceTitle.includes('WEB')) setSelectedServiceForContact('Website');
    else setSelectedServiceForContact('Software Development');

    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContact = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToWork = () => {
    const workEl = document.getElementById('work');
    if (workEl) {
      workEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#111111] text-white flex flex-col selection:bg-[#B8FF00] selection:text-black">
      {/* Top Sticky Navigation */}
      <Navbar onContactClick={handleScrollToContact} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onViewWorkClick={handleScrollToWork}
          onContactClick={handleScrollToContact}
        />

        {/* 2. What I Do & About Me (More Than Just Code) */}
        <AboutMe />

        {/* 3. Creative Services (What I Can Create For You) */}
        <CreativeServices onSelectService={handleSelectService} />

        {/* 4. Client Workflow (Built for Brands, People & Ideas) */}
        <ClientWorkflow />

        {/* 5. Software Development Skills (And Yes, I Build Too) */}
        <SoftwareSkills onExploreProjects={() => {
          const el = document.getElementById('projects');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }} />

        {/* 6. Professional Experience Timeline */}
        <ExperienceTimeline />

        {/* 7. Software Project Showcase */}
        <ProjectShowcase />

        {/* 8. Creative Portfolio Gallery */}
        <CreativePortfolio />

        {/* 9. Content Section (Content That Connects) */}
        <ContentShowcase />

        {/* 11. Education & Beyond Development (Leadership & Athletics) */}
        <EducationBeyond />

        {/* 12. Why Work With Me (Value Proposition) */}
        <WhyWorkWithMe />

        {/* 13. Contact Section (Let's Create Something Great) */}
        <ContactSection initialService={selectedServiceForContact} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
