export interface Project {
  id: string;
  title: string;
  oneLiner: string;
  description: string;
  category: 'ALL' | 'WEB' | 'MOBILE' | 'AI' | 'DASHBOARD';
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  metricsOrHighlights?: string[];
}

export interface CreativeWork {
  id: string;
  title: string;
  category: 'SOCIAL MEDIA' | 'GRAPHIC DESIGN' | 'ADVERTISEMENT' | 'VIDEO' | 'VIDEO EDITING' | 'UI/UX';
  description: string;
  tags: string[];
  image: string;
  aspectRatio?: 'square' | 'portrait' | 'landscape';
  videoDuration?: string;
  conceptLabel?: string;
  externalUrl?: string;
  customButtonText?: string;
}

export interface SocialMediaPost {
  id: string;
  type: 'POST' | 'STORY' | 'REEL COVER' | 'ADVERTISEMENT' | 'PROMOTION' | 'EVENT CREATIVE';
  title: string;
  caption: string;
  image: string;
  category: string;
  statsPlaceholder?: string;
  tags: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  details: string[];
  iconName: string;
  tagline: string;
}

export interface ExperienceItem {
  year: string;
  company: string;
  role: string;
  location?: string;
  acceptedRole?: boolean;
  notes?: string;
  highlights: string[];
  tags: string[];
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: {
    name: string;
    level?: string;
    featured?: boolean;
  }[];
}

export interface ContentSample {
  id: string;
  title: string;
  type: 'SOCIAL MEDIA CAPTIONS' | 'PROMOTIONAL COPY' | 'WEBSITE CONTENT' | 'CAMPAIGN CONTENT' | 'PRODUCT DESCRIPTIONS' | 'CREATIVE CONCEPTS';
  concept: string;
  previewText: string;
  fullContent: string;
  tags: string[];
}
