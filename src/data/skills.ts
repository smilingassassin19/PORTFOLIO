import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    title: 'DEVELOPMENT',
    iconName: 'Code',
    skills: [
      { name: 'React', featured: true },
      { name: 'TypeScript', featured: true },
      { name: 'JavaScript', featured: true },
      { name: 'Next.js', featured: true },
      { name: 'Node.js', featured: true },
      { name: 'Express.js' },
      { name: 'Tailwind CSS', featured: true },
      { name: 'Vite' },
      { name: 'Flutter', featured: true },
      { name: 'Dart' },
      { name: 'Spring Boot' },
      { name: 'Java' },
      { name: 'C / C++' },
      { name: 'Python', featured: true },
      { name: 'PostgreSQL' },
      { name: 'MongoDB', featured: true },
      { name: 'Firebase', featured: true },
      { name: 'SQL' },
      { name: 'Git & GitHub', featured: true }
    ]
  },
  {
    title: 'DESIGN',
    iconName: 'Layout',
    skills: [
      { name: 'Figma', featured: true },
      { name: 'UI/UX Design', featured: true },
      { name: 'Wireframing', featured: true },
      { name: 'Interactive Prototyping', featured: true },
      { name: 'Visual Design' },
      { name: 'Design Systems' },
      { name: 'Graphic Design', featured: true },
      { name: 'Typography & Layout' },
      { name: 'Brand Identity Visuals' },
      { name: 'Poster & Banner Design' },
      { name: 'Ad Creatives' }
    ]
  },
  {
    title: 'AI / ML',
    iconName: 'Cpu',
    skills: [
      { name: 'Gemini AI Integration', featured: true },
      { name: 'AI APIs & LLMs', featured: true },
      { name: 'Python ML Workflows', featured: true },
      { name: 'Scikit-learn' },
      { name: 'Predictive Modeling' },
      { name: 'Data Analysis' },
      { name: 'OCR Pipeline' },
      { name: 'Intelligent Assistants' }
    ]
  },
  {
    title: 'CONTENT & VIDEO',
    iconName: 'Film',
    skills: [
      { name: 'Short-Form Video Editing', featured: true },
      { name: 'Reels & Shorts Production', featured: true },
      { name: 'Motion Typography' },
      { name: 'Sound Design & Pacing' },
      { name: 'Content Writing', featured: true },
      { name: 'Copywriting & Hooks', featured: true },
      { name: 'Website Copy' },
      { name: 'Campaign Storytelling' }
    ]
  },
  {
    title: 'DIGITAL MEDIA & GROWTH',
    iconName: 'TrendingUp',
    skills: [
      { name: 'Social Media Strategy', featured: true },
      { name: 'Instagram Growth & Layouts', featured: true },
      { name: 'Content Calendars' },
      { name: 'Digital Promotion Campaigns' },
      { name: 'Brand Awareness Rollouts' },
      { name: 'Audience Engagement' },
      { name: 'Performance Analytics' }
    ]
  }
];

export const techStackPills = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Flutter', 
  'Figma', 'Gemini AI', 'Tailwind CSS', 'Firebase', 'MongoDB', 
  'PostgreSQL', 'Spring Boot', 'Python', 'Video Editing'
];
