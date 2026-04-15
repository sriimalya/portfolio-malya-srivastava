import { motion } from 'framer-motion';
import {
  Code2,
  Database,
  Wrench,
  Server,
  Monitor,
  Terminal,
} from 'lucide-react';

const skillCategories = [
  {
    id: 'backend',
    title: 'Backend & Architecture',
    icon: Server,
    skills: [
      'Node.js', 'Express.js', 'REST APIs', 'Microservices',
      'Authentication & Authorization', 'API Rate Limiting',
      'Caching (Redis)', 'WebSockets', 'Socket.io',
      'System Design', 'SSE (Server-Sent Events)', 'JWT',
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    icon: Monitor,
    skills: [
      'React.js', 'Next.js', 'Redux', 'Tailwind CSS',
      'HTML5', 'CSS3', 'Vite',
    ],
  },
  {
    id: 'databases',
    title: 'Databases & ORMs',
    icon: Database,
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Prisma', 'SQL'],
  },
  {
    id: 'languages',
    title: 'Languages',
    icon: Code2,
    skills: [
      'Java', 'JavaScript', 'TypeScript', 'Python',
      'C', 'C++', 'C#', 'SQL',
    ],
  },
  {
    id: 'devops',
    title: 'DevOps & Tools',
    icon: Wrench,
    skills: [
      'Git', 'GitHub', 'AWS S3', 'Docker',
      'GitHub Actions', 'CI/CD', 'Vercel', 'Netlify',
      'Render', 'Postman',
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20 },
  },
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 200, damping: 15 },
  },
};

const SkillsSection = () => {
  return (
    <section className="mb-16">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.4 }}
        className="font-mono text-2xl font-bold text-[var(--accent)] mb-6"
      >
        Skills & Expertise
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:balance]"
      >
        {skillCategories.map((category) => (
          <motion.div
            key={category.id}
            variants={cardVariants}
            className="glass-card p-5 group mb-4 break-inside-avoid"
          >
            <div className="flex items-center gap-2.5 mb-4">
              <category.icon
                size={18}
                className="text-[var(--accent)] group-hover:rotate-12 transition-transform duration-300"
              />
              <h3 className="font-mono text-sm font-semibold text-[var(--text-primary)]">
                {category.title}
              </h3>
            </div>
            <motion.div
              variants={containerVariants}
              className="flex flex-wrap gap-2"
            >
              {category.skills.map((skill, i) => (
                <motion.span
                  key={`${category.id}-${i}`}
                  variants={tagVariants}
                  className="px-2.5 py-1 rounded-full border border-[var(--glass-border)] text-[var(--text-secondary)] hover:border-[var(--glass-border-hover)] hover:text-[var(--accent)] hover:bg-[var(--accent-wash)] transition-all duration-200 text-xs font-mono cursor-default leading-none"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default SkillsSection;