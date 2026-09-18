import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'gkvk-agritech',
    title: 'GKVK AgriTech Dashboard',
    oneLiner: 'Agricultural data visualization and resource intelligence system for farmers and dealers.',
    description: 'A digital agricultural platform and operational dashboard engineered to manage, analyze, and visualize real-time farmer, crop, fertilizer, dealer, and cost-profit metrics. Built for high legibility in field environments with responsive data charts.',
    category: 'DASHBOARD',
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'Firebase', 'Data Visualization'],
    image: '/images/projects/gkvk-agritech.jpg',
    githubUrl: 'https://github.com/smilingassassin19',
    featured: true,
    metricsOrHighlights: [
      'Interactive crop yield & soil health telemetry',
      'Dealer supply chain & fertilizer inventory tracking',
      'Automated cost-to-profit margin calculators'
    ]
  },
  {
    id: 'spendsage',
    title: 'SpendSage',
    oneLiner: 'Smart personal finance tracker featuring automated receipt OCR and spending analytics.',
    description: 'A comprehensive personal financial intelligence application that helps users track day-to-day expenditures, extract transaction data directly from physical receipts using an OCR pipeline, and discover predictive spending habits.',
    category: 'WEB',
    technologies: ['React', 'Node.js', 'MongoDB', 'Python', 'OCR Pipeline', 'Analytics'],
    image: '/images/projects/spendsage.jpg',
    githubUrl: 'https://github.com/smilingassassin19',
    featured: true,
    metricsOrHighlights: [
      'Automated receipt parsing & text recognition via Python OCR',
      'Dynamic budgeting envelopes with visual thresholds',
      'Financial goals tracker with milestone progression'
    ]
  },
  {
    id: 'jarvis-ai',
    title: 'Jarvis AI Developer Assistant',
    oneLiner: 'Intelligent development companion powered by Gemini AI and in-browser WebContainers.',
    description: 'An AI-powered software developer workspace designed for collaborative coding workflows, real-time code generation, interactive debugging, and code execution environments with real-time socket synchronization.',
    category: 'AI',
    technologies: ['MERN Stack', 'Socket.IO', 'Gemini AI', 'WebContainers', 'Redis', 'JWT'],
    image: '/images/projects/jarvis-ai.jpg',
    githubUrl: 'https://github.com/smilingassassin19',
    featured: true,
    metricsOrHighlights: [
      'Gemini AI context-aware coding assistant',
      'Sandboxed in-browser code execution using WebContainers',
      'Real-time multi-client collaboration via Socket.IO & Redis'
    ]
  },
  {
    id: 'hacksphere',
    title: 'HackSphere',
    oneLiner: 'AI-driven hackathon discovery, team coordination, and project ideation platform.',
    description: 'A modern discovery platform uniting developers, designers, and innovators. Employs Kaggle and OpenRouter/Gemini integrations to aggregate global hackathons, suggest personalized track ideas, and visualize participation trends.',
    category: 'AI',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Flask', 'Python', 'Gemini AI', 'MongoDB', 'Chart.js'],
    image: '/images/projects/hacksphere.jpg',
    githubUrl: 'https://github.com/smilingassassin19',
    featured: true,
    metricsOrHighlights: [
      'Global hackathon discovery with smart category tags',
      'AI-prompted hackathon ideation and prompt synthesis',
      'Interactive registration timeline with Chart.js visualizer'
    ]
  },
  {
    id: 'healsphere',
    title: 'HealSphere',
    oneLiner: 'Next-generation healthcare guidance assistant with secure auth and clinical intelligence.',
    description: 'An AI-powered healthcare assistant designed to streamline health queries, schedule preventive reminders, and maintain patient notes securely with modern database schemas and authentication protocols.',
    category: 'AI',
    technologies: ['React', 'Tailwind CSS', 'Drizzle ORM', 'PostgreSQL', 'Gemini AI', 'Privy'],
    image: '/images/projects/healsphere.jpg',
    githubUrl: 'https://github.com/smilingassassin19',
    featured: false,
    metricsOrHighlights: [
      'Natural health consultation workflows using Gemini AI',
      'Relational PostgreSQL schema managed via Drizzle ORM',
      'Web3/passwordless modern user authentication with Privy'
    ]
  },
  {
    id: 'social-media-analytics',
    title: 'Social Media Analytics Dashboard',
    oneLiner: 'Enterprise-grade visualization portal for cross-network social media engagement metrics.',
    description: 'A full-stack analytics platform built to ingest, aggregate, and visualize high-volume social media engagement data, reach performance, audience retention patterns, and post interactions.',
    category: 'DASHBOARD',
    technologies: ['React', 'Spring Boot', 'Java', 'REST APIs', 'Data Visuals'],
    image: '/images/projects/social-analytics.jpg',
    githubUrl: 'https://github.com/smilingassassin19',
    featured: false,
    metricsOrHighlights: [
      'High-throughput Java Spring Boot backend services',
      'Multi-metric engagement score calculation & time-series plotting',
      'Audience demographic breakdown and post performance matrices'
    ]
  },
  {
    id: 'netflix-clone',
    title: 'Netflix Web Clone',
    oneLiner: 'Pixel-perfect streaming entertainment UI with dynamic rows, previews, and responsive layouts.',
    description: 'A frontend showcase highlighting modern responsive UI engineering, video carousel navigation, category browse drawers, and streaming platform aesthetic standards.',
    category: 'WEB',
    technologies: ['React', 'JavaScript', 'CSS Modules', 'Movie API Integration'],
    image: '/images/projects/netflix-clone.jpg',
    githubUrl: 'https://github.com/smilingassassin19',
    featured: false,
    metricsOrHighlights: [
      'Fluid video modal preview states and responsive banners',
      'Custom horizontal infinite carousel controls',
      'Dynamic media categorization and responsive grid display'
    ]
  }
];
