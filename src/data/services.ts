import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'graphic-design',
    title: 'GRAPHIC DESIGN',
    tagline: 'Brand Visuals & Print/Digital Creatives',
    shortDescription: 'Visually compelling designs that establish brand recognition and captivate audiences across both digital and physical touchpoints.',
    details: [
      'Social media posts & Instagram creatives',
      'Promotional graphics & advertisements',
      'Posters, event creatives & banners',
      'Digital campaign assets & brand visuals'
    ],
    iconName: 'Palette'
  },
  {
    id: 'social-media-design',
    title: 'SOCIAL MEDIA DESIGN',
    tagline: 'High-Conversion Social Creatives',
    shortDescription: 'Tailored social media identities, grid layouts, and scroll-stopping visuals calibrated for algorithm discovery and engagement.',
    details: [
      'Instagram feed posts & carousel slides',
      'Interactive Instagram stories & highlight covers',
      'Reels thumbnail covers & title cards',
      'Campaign launch graphics & announcement posts'
    ],
    iconName: 'Share2'
  },
  {
    id: 'video-editing',
    title: 'VIDEO EDITING',
    tagline: 'Dynamic Short-Form & Brand Video',
    shortDescription: 'Snappy, retention-focused video edits and reels with rhythmic pacing, seamless transitions, sound design, and clean motion typography.',
    details: [
      'Short-form viral reels & TikTok-style shorts',
      'Promotional & commercial campaign videos',
      'Product showcase & explainer videos',
      'Event recap edits & basic motion graphics'
    ],
    iconName: 'Film'
  },
  {
    id: 'content-writing',
    title: 'CONTENT WRITING',
    tagline: 'Persuasive Copy & Brand Messaging',
    shortDescription: 'Compelling copy crafted to inform, persuade, and inspire action — from catchy hooks to crisp landing page content.',
    details: [
      'Engaging social media captions & hooks',
      'High-converting promotional & ad copy',
      'Clear, conversion-focused website content',
      'Product descriptions & campaign storytelling'
    ],
    iconName: 'PenTool'
  },
  {
    id: 'social-media-management',
    title: 'SOCIAL MEDIA MANAGEMENT',
    tagline: 'Strategic Account Growth & Cadence',
    shortDescription: 'Full-cycle account oversight from editorial calendar creation and content publishing to audience engagement and metric tracking.',
    details: [
      'Content planning & monthly editorial calendars',
      'Consistent scheduled posting & copy formulation',
      'Creative ideation & trend adaptation',
      'Audience interaction & performance tracking'
    ],
    iconName: 'TrendingUp'
  },
  {
    id: 'digital-promotion',
    title: 'DIGITAL PROMOTION',
    tagline: 'Targeted Campaigns & Brand Awareness',
    shortDescription: 'Multi-channel promotional rollout strategies blending visual assets with targeted messaging to drive visibility and conversions.',
    details: [
      'Multi-platform campaign creative suites',
      'Product launch & feature announcement rollouts',
      'Event promotion & ticket/registration buzz',
      'Organic brand awareness collateral'
    ],
    iconName: 'Megaphone'
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX DESIGN',
    tagline: 'Intuitive Interfaces & Product Prototypes',
    shortDescription: 'User-centric wireframes, design systems, and high-fidelity interactive prototypes designed in Figma for seamless user experiences.',
    details: [
      'Responsive website & landing page UI',
      'Mobile application interfaces (iOS & Android)',
      'Wireframing & architecture user flows',
      'Design systems, interactive prototypes & dashboards'
    ],
    iconName: 'Layout'
  },
  {
    id: 'web-development',
    title: 'WEB DEVELOPMENT',
    tagline: 'Modern, High-Performance Applications',
    shortDescription: 'Clean, performant frontend and full-stack web applications built with React, Vite, Next.js, and modern TypeScript architectures.',
    details: [
      'Custom portfolio & agency websites',
      'High-converting business & marketing landing pages',
      'Full-stack React & Node.js web applications',
      'Responsive, accessible & mobile-first builds'
    ],
    iconName: 'Code2'
  }
];

export const clientWorkflow = [
  {
    step: '01',
    title: 'UNDERSTAND',
    description: 'Deep-dive into the brand identity, target demographic, core goals, and project scope before writing a line of code or designing a canvas.'
  },
  {
    step: '02',
    title: 'PLAN',
    description: 'Establish clear creative direction, moodboards, content frameworks, and technical architecture to ensure alignment.'
  },
  {
    step: '03',
    title: 'CREATE',
    description: 'Design, write, edit, or develop the deliverables with disciplined craftsmanship, high visual polish, and clean code.'
  },
  {
    step: '04',
    title: 'REFINE',
    description: 'Review together, test across real devices, and iterate rapidly based on constructive feedback for pixel-perfection.'
  },
  {
    step: '05',
    title: 'DELIVER',
    description: 'Provide packaged, ready-to-deploy digital assets, production builds, source files, and launch support.'
  }
];

export const whyWorkWithMe = [
  {
    title: 'MULTIDISCIPLINARY',
    subtitle: 'Design + Technology + Content',
    description: 'No friction between designer, copywriter, and developer. One cohesive vision that unifies visual aesthetics with technical execution.',
    iconName: 'Layers'
  },
  {
    title: 'CREATIVE THINKING',
    subtitle: 'Ideas to Visual Experiences',
    description: 'Translating raw concepts into striking visuals, memorable campaigns, and intuitive interfaces that resonate with real humans.',
    iconName: 'Sparkles'
  },
  {
    title: 'TECHNICAL FOUNDATION',
    subtitle: 'Computer Science & Design Background',
    description: 'Rigorous engineering background ensuring robust architectures, high performance, clean TypeScript code, and scalable systems.',
    iconName: 'Cpu'
  },
  {
    title: 'END-TO-END APPROACH',
    subtitle: 'From Concept to Deployment',
    description: 'Handling the entire pipeline from ideation and copywriting to wireframing, motion editing, and production deployment.',
    iconName: 'Compass'
  }
];
