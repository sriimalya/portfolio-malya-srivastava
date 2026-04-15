export const blogData = [
  {
    id: 1,
    title: 'Resolving N+1 Queries in Next.js with Prisma Server Components',
    abstract:
      'How migrating from REST to Next.js Server Components with aggregated Prisma queries cut our database round-trips from ~12 to 1-2 per page load in Snippit.',
    category: 'Backend',
    date: 'Feb 15, 2026',
    readTime: '10 min',
    tags: ['Next.js', 'Prisma', 'PostgreSQL', 'Performance'],
    image: 'https://picsum.photos/seed/n1query/800/500',
  },
  {
    id: 2,
    title: 'Building Real-Time Notification Pipelines with SSE',
    abstract:
      'A deep dive into implementing server-sent events for push notifications — using a globalThis singleton store to achieve <200ms latency without WebSocket overhead.',
    category: 'Backend',
    date: 'Jan 28, 2026',
    readTime: '12 min',
    tags: ['SSE', 'Node.js', 'Real-Time', 'Architecture'],
    image: 'https://picsum.photos/seed/ssepipe/800/500',
  },
  {
    id: 3,
    title: 'Direct-to-S3 File Uploads with Presigned URLs',
    abstract:
      'Engineering direct browser-to-S3 uploads with per-file XHR progress tracking, reducing server load by 100% on media transfers while supporting files up to 50MB.',
    category: 'Full Stack',
    date: 'Jan 10, 2026',
    readTime: '8 min',
    tags: ['AWS S3', 'TypeScript', 'Next.js', 'File Upload'],
    image: 'https://picsum.photos/seed/s3upload/800/500',
  },
  {
    id: 4,
    title: 'From REST to Server Components: A Migration Playbook',
    abstract:
      'Lessons learned migrating a production Next.js app from traditional REST API patterns to React Server Components and Server Actions.',
    category: 'Full Stack',
    date: 'Dec 20, 2025',
    readTime: '15 min',
    tags: ['Next.js', 'React', 'Server Components', 'Migration'],
    image: 'https://picsum.photos/seed/rsc/800/500',
  },
  {
    id: 5,
    title: 'Designing RESTful APIs That Scale: Lessons from Lenstrack',
    abstract:
      'Patterns and anti-patterns discovered while building and maintaining 10+ production API endpoints during my backend internship at Lenstrack.',
    category: 'Backend',
    date: 'Nov 15, 2025',
    readTime: '7 min',
    tags: ['REST APIs', 'Node.js', 'Express', 'Best Practices'],
    image: 'https://picsum.photos/seed/restapi/800/500',
  },
  {
    id: 6,
    title: 'Infinite Scroll Done Right: IntersectionObserver + Ref Deduplication',
    abstract:
      'How to build performant infinite scroll across multiple feed types using IntersectionObserver with reference-based deduplication to eliminate redundant API calls.',
    category: 'Full Stack',
    date: 'Oct 28, 2025',
    readTime: '9 min',
    tags: ['React', 'Performance', 'JavaScript', 'UX'],
    image: 'https://picsum.photos/seed/infinitescroll/800/500',
  },
];

export const blogCategories = ['All', 'Backend', 'Full Stack', 'Systems'];
