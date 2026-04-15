import talkImage from '../assets/images/talk.jpg';
import hackerImage from '../assets/images/hacker.jpg';
import workingImage from '../assets/images/working.jpg';
import workLaptopImage from '../assets/images/workLaptop.jpg';

export const devDiariesData = [
  {
    id: 1,
    media: talkImage,
    mediaType: 'image',
    title: "SheHacks '23 — IIT Allahabad",
    date: '2023',
    category: 'Hackathon',
    contextLeft: {
      label: '36-hr Hackathon grind',
      detail: 'Built an AR workout MVP to improve fitness access for women in remote regions.',
    },
    contextRight: {
      label: 'First Runner Up',
      detail: 'SheHacks, IIT Allahabad. 4-member team. AR + fitness + social impact.',
    },
  },
  {
    id: 2,
    media: hackerImage,
    mediaType: 'image',
    title: "Hack The Mountains '23 — MLH",
    date: '2023',
    category: 'Hackathon',
    contextLeft: {
      label: 'Built in 24 hours',
      detail: 'A zero-interest loan platform for fintech innovation. Fastn and MongoDB Track Prize Winner.',
    },
    contextRight: {
      label: 'Track Prize Winner',
      detail: 'Recognized by Fastn and MongoDB for fintech innovation in a 36-hr hackathon.',
    },
  },
  {
    id: 3,
    media: workLaptopImage,
    mediaType: 'image',
    title: 'API Design @ Lenstrack',
    date: '2025',
    category: 'Internship',
    contextLeft: {
      label: 'Backend Intern',
      detail: 'Built and maintained 10+ RESTful API endpoints using Node.js, Express.js, and MongoDB.',
    },
    contextRight: {
      label: 'Impact',
      detail: 'Improved code reliability by adding unit tests, increasing coverage to ~60%.',
    },
  },
  {
    id: 4,
    media: workingImage,
    mediaType: 'image',
    title: 'Building Snippit — Late Night Sessions',
    date: '2026',
    category: 'Project',
    contextLeft: {
      label: 'Flagship Project',
      detail: 'Content curation platform with SSE real-time pipeline and N+1 query resolution.',
    },
    contextRight: {
      label: 'Tech Stack',
      detail: 'Next.js 16+, TypeScript, Prisma, PostgreSQL, AWS S3, Upstash Redis.',
    },
  },
];
