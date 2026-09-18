import { CreativeWork, SocialMediaPost } from '../types';
import polaroidPrintsImg from '../assets/polaroid-prints.png';
import youtubeBannerImg from '../assets/puneeth-stories-banner.png';
import ganeshaPosterImg from '../assets/ganesha-chaturthi-poster.jpg';
import instagramReelsImg from '../assets/instagram-reels-puneeth.png';
import v2logicPosterImg from '../assets/v2logic-consulting-poster.png';
import v2logicPosterV2Img from '../assets/v2logic-consulting-poster-v2.png';
import fitnessPosterImg from '../assets/fitness-motivation-poster.png';
import ishaDosePointImg from '../assets/isha-dose-point-branding.png';
import miniMomentsSocialImg from '../assets/mini-moments-social-media.png';

export const creativePortfolioData: CreativeWork[] = [
  {
    id: 'creative-01',
    title: 'Isha Dose Point – Brand Identity',
    category: 'GRAPHIC DESIGN',
    description: 'South Indian restaurant logo and branding concept with a traditional visual style.',
    tags: ['Logo Design', 'Branding'],
    image: ishaDosePointImg,
    aspectRatio: 'square',
    conceptLabel: 'Featured Artwork',
    externalUrl: 'https://ibb.co/fGy9F4XX',
    customButtonText: 'VIEW ARTWORK'
  },
  {
    id: 'creative-02',
    title: 'Puneeth Stories – YouTube Content',
    category: 'VIDEO EDITING',
    description: 'Fitness-focused YouTube content and visual storytelling.',
    tags: ['Video Editing', 'Content Creation'],
    image: youtubeBannerImg,
    aspectRatio: 'landscape',
    conceptLabel: 'Featured Project',
    externalUrl: 'https://www.youtube.com/@Itspuneethstories',
    customButtonText: 'WATCH VIDEO'
  },
  {
    id: 'creative-03',
    title: 'Ganesha Chaturthi Event Poster',
    category: 'GRAPHIC DESIGN',
    description: 'Traditional Kannada event poster designed for a local Ganesha Chaturthi celebration.',
    tags: ['Poster Design', 'Graphic Design'],
    image: ganeshaPosterImg,
    aspectRatio: 'portrait',
    conceptLabel: 'Featured Artwork',
    externalUrl: 'https://ibb.co/BHTmnm13',
    customButtonText: 'VIEW ARTWORK'
  },
  {
    id: 'creative-04',
    title: 'Instagram Reels – @itspuneeth____',
    category: 'VIDEO EDITING',
    description: 'Fitness and lifestyle reels edited for social media.',
    tags: ['Video Editing', 'Reels', 'Content Creation'],
    image: instagramReelsImg,
    aspectRatio: 'landscape',
    conceptLabel: 'Featured Project',
    externalUrl: 'https://www.instagram.com/itspuneeth____/',
    customButtonText: 'WATCH REELS'
  },
  {
    id: 'creative-05',
    title: 'V2logic Consulting – Recruitment Promotion',
    category: 'ADVERTISEMENT',
    description: 'Corporate promotional design for a recruitment and talent solutions company.',
    tags: ['Advertisement', 'Graphic Design'],
    image: v2logicPosterV2Img,
    aspectRatio: 'portrait',
    conceptLabel: 'Featured Artwork',
    externalUrl: 'https://ibb.co/zTRJrVX3',
    customButtonText: 'VIEW ARTWORK'
  },
  {
    id: 'creative-06',
    title: 'Fitness Motivation Poster',
    category: 'GRAPHIC DESIGN',
    description: 'Creative fitness-themed promotional poster with custom illustration and motivational typography.',
    tags: ['Graphic Design', 'Poster Design', 'Creative'],
    image: fitnessPosterImg,
    aspectRatio: 'landscape',
    conceptLabel: 'Featured Artwork',
    externalUrl: 'https://ibb.co/Mzd6drN',
    customButtonText: 'VIEW ARTWORK'
  },
  {
    id: 'creative-07',
    title: 'Mini Moments – Social Media Post',
    category: 'SOCIAL MEDIA',
    description: 'Aesthetic promotional social media creative for Mini Moments.',
    tags: ['Social Media', 'Promotion'],
    image: miniMomentsSocialImg,
    aspectRatio: 'portrait',
    conceptLabel: 'Featured Artwork',
    externalUrl: 'https://ibb.co/HfptKFsm',
    customButtonText: 'VIEW ARTWORK'
  },
  {
    id: 'creative-08',
    title: 'Mini Moments – Visual Interface Concept',
    category: 'UI/UX',
    description: 'Clean visual layout focused on branding, hierarchy and user-friendly presentation.',
    tags: ['UI Design', 'Visual Design'],
    image: polaroidPrintsImg,
    aspectRatio: 'portrait',
    conceptLabel: 'Featured Artwork',
    externalUrl: 'https://ibb.co/4nTkX7zX',
    customButtonText: 'VIEW ARTWORK'
  }
];

export const socialMediaPostsData: SocialMediaPost[] = [
  {
    id: 'sm-post-1',
    type: 'POST',
    title: 'Visual Hierarchy in Digital Media',
    category: 'Design Education',
    caption: 'Great design isn’t about decorating empty space—it is about directing the human eye with optical weight, deliberate typography, and high contrast. Here are 3 rules I apply on every canvas.',
    image: '/images/social-media/sm-post-01.jpg',
    tags: ['#UIUX', '#DesignTips', '#VisualHierarchy', '#GraphicDesign'],
    statsPlaceholder: 'Educational Carousel'
  },
  {
    id: 'sm-post-2',
    type: 'STORY',
    title: 'Behind the Scenes: Code & Canvas',
    category: 'Interactive Story',
    caption: 'From rough Figma frames to React production in 24 hours. The magic happens when design fidelity meets clean component architecture.',
    image: '/images/social-media/sm-story-01.jpg',
    tags: ['#BuildInPublic', '#WebDev', '#CreativeDev'],
    statsPlaceholder: 'Poll & Q&A Layout'
  },
  {
    id: 'sm-post-3',
    type: 'REEL COVER',
    title: 'Why Most Reels Lose Retention at 0:02',
    category: 'Video Production',
    caption: 'Thumbnail and hook breakdown: the first 2 seconds determine 80% of video reach. How motion typography and sound punch-ins stop the endless scroll.',
    image: '/images/social-media/sm-reel-01.jpg',
    tags: ['#VideoEditing', '#ContentCreator', '#ShortFormVideo'],
    statsPlaceholder: 'Reels Thumbnail'
  },
  {
    id: 'sm-post-4',
    type: 'ADVERTISEMENT',
    title: 'Specialty Cold Brew Launch Campaign',
    category: 'Brand Ad Creative',
    caption: 'Crisp bold typography paired with dark glass textures. Created for high click-through social ad campaigns targeting urban professionals.',
    image: '/images/advertisements/sm-ad-01.jpg',
    tags: ['#AdCreative', '#SocialMediaMarketing', '#ProductAd'],
    statsPlaceholder: 'Paid Social Creative'
  },
  {
    id: 'sm-post-5',
    type: 'PROMOTION',
    title: 'Limited Access Dev Community Pass',
    category: 'Digital Promotion',
    caption: 'Exclusive launch creative designed for multi-channel promotional blasts across Instagram, X, and LinkedIn communities.',
    image: '/images/social-media/sm-promo-01.jpg',
    tags: ['#Promotion', '#DigitalMarketing', '#LaunchCampaign'],
    statsPlaceholder: 'Promo Graphic'
  },
  {
    id: 'sm-post-6',
    type: 'EVENT CREATIVE',
    title: 'National Hackathon Ideathon Keynote',
    category: 'Event Creative',
    caption: 'Keynote promotional banner highlighting speaker lineups, schedule milestones, and registration access codes with high contrast readability.',
    image: '/images/social-media/sm-event-01.jpg',
    tags: ['#EventCreative', '#PosterDesign', '#Hackathon'],
    statsPlaceholder: 'Event Flyer'
  }
];
