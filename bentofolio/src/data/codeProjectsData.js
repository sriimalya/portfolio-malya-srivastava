import Snippit from '../assets/images/ogimage.png';
import ChefGemini from '../assets/images/ChefGemini.png';
import EventListing from '../assets/images/Event Listing.png';
import chatAppPhoto from '../assets/images/Chat App.png';
import ResourceTracker from '../assets/images/ResourceTracker.png';
import taskManager from '../assets/images/taskManager.png';

export const codeProjectsData = [
  {
    name: 'Snippit',
    description:
      'A content curation platform with real-time notifications, direct-to-S3 media uploads, and infinite scroll — built on Next.js 16+ with Prisma and PostgreSQL.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'AWS S3', 'Upstash Redis'],
    highlights: [
      'Real-time SSE notification pipeline with <200ms latency using a globalThis singleton store',
      'Direct-to-S3 uploads via presigned URLs with per-file XHR progress tracking, supporting up to 50MB',
      'Resolved N+1 queries by migrating from REST to Next.js Server Components with aggregated Prisma queries, cutting DB round-trips from ~12 to 1-2',
      'Infinite scroll across 5+ feed types using IntersectionObserver with ref-based deduplication',
      'Integrated NextAuth.js with Google OAuth and credential providers across 12+ pages',
    ],
    photoPath: Snippit,
    github: 'https://github.com/sriimalya/snippitt/',
    demo: 'https://snippitt.vercel.app',
    featured: true,
    flagship: true,
  },
  {
    name: 'Chef Gemini',
    description:
      'A full-stack Gemini AI API integrated recipe generator, serving 50+ recipe generations with SSE streaming and reduced response latency by ~70%.',
    technologies: ['React', 'Node.js', 'Gemini AI API', 'JWT Auth', 'GitHub Actions CI/CD'],
    highlights: [
      'Server-sent event streaming for real-time recipe generation',
      'Refined prompt design increasing usable output rate to ~85%+ per request',
    ],
    photoPath: ChefGemini,
    github: 'https://github.com/sriimalya/chef-gemini/',
    demo: 'https://chef-gemini-iota.vercel.app/',
    featured: true,
  },
  {
    name: 'Sydney Events Scraper',
    description:
      'A Next.js web app with server-side scraping (Puppeteer), real-time event updates, and email-based ticketing — all connected to PostgreSQL via Prisma.',
    technologies: ['Next.js', 'TypeScript', 'Puppeteer', 'PostgreSQL', 'Prisma'],
    photoPath: EventListing,
    github: 'https://github.com/sriimalya/louder-scrape-sydney-events',
    demo: 'https://louder-scrape-sydney-events.vercel.app/',
    featured: true,
  },
  {
    name: 'Winsock Chatroom',
    description:
      'Interactive multi-client chat application leveraging C++ socket programming with Winsock API.',
    technologies: ['C++', 'Winsock'],
    photoPath: chatAppPhoto,
    github: 'https://github.com/sriimalya/winsock-chatroom',
    demo: null,
    featured: true,
  },
  {
    name: 'Node Resource Tracker',
    description:
      'Real-time CPU and memory usage monitor built with Node.js for system performance visibility.',
    technologies: ['Node.js'],
    photoPath: ResourceTracker,
    github: 'https://github.com/sriimalya/Node-Resource-Tracker',
    featured: false,
  },
  {
    name: 'Task Manager',
    description:
      'A task manager with add, edit, delete and search functionality built with Redux Toolkit.',
    technologies: ['React', 'CSS', 'Redux Toolkit'],
    photoPath: taskManager,
    github: 'https://github.com/sriimalya/task-manager-redux-toolkit',
    featured: false,
  },
];