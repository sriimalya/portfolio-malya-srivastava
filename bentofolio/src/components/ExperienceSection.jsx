import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Description,
} from '@headlessui/react';
import { ArrowUpRight, X } from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: 'Backend Development Intern',
    company: 'Lenstrack Pvt. Ltd.',
    period: 'Jul, 2025 - Aug, 2025',
    skills: 'Node.js, Express.js, MongoDB, PostgreSQL, REST APIs, Git',
    description:
      'Implemented and maintained scalable RESTful APIs, designed database schemas, and optimized queries for high-performance backend services. Collaborated with cross-functional teams to deliver secure and reliable backend features.',
    achievements: [
      'Built and maintained 10+ RESTful API endpoints using Node.js, Express.js, and MongoDB/PostgreSQL',
      'Improved code reliability by adding unit tests, increasing coverage to ~60%',
      'Collaborated with cross-functional teams to integrate backend services across 2+ modules/features',
    ],
  },
  {
    id: 2,
    title: 'System Engineer',
    company: 'Infosys Ltd.',
    period: 'Sept, 2025 - Present',
    skills: 'Java, SQL, MERN Stack, OOP, Software Engineering',
    description:
      'Completed enterprise Java, SQL, and MERN stack training. Building hands-on full-stack applications implementing 5+ core features/modules with focus on performance and clean architecture.',
    achievements: [
      'Completed enterprise Java, SQL and MERN stack training, building hands-on projects',
      'Developed full-stack applications implementing 5+ core features/modules with focus on performance and clean architecture',
      'Collaborated in agile teams of 4-6 members, contributing to sprint planning and project delivery',
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20 },
  },
};

const ExperienceSection = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);

  return (
    <section className="mb-16">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.4 }}
        className="font-mono text-2xl font-bold text-[var(--accent)] mb-8"
      >
        Experience
      </motion.h2>

      {/* Timeline */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="relative"
      >
        {/* Timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-px bg-[var(--glass-border)]" />

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="relative pl-12"
            >
              {/* Timeline dot */}
              <div className="absolute left-2.5 top-6 w-3 h-3 rounded-full bg-[var(--accent)] ring-4 ring-[var(--bg-canvas)]" />

              {/* Card */}
              <div className="glass-card p-6 group cursor-pointer" onClick={() => setSelectedExperience(exp)}>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-mono text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors duration-200">
                      {exp.title}
                    </h3>
                    <p className="font-sans text-base font-medium text-[var(--text-secondary)]">
                      @ {exp.company}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-[var(--text-muted)] shrink-0">
                    {exp.period}
                  </span>
                </div>
                <p className="font-sans text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-2">
                  {exp.description}
                </p>

                {/* View details indicator */}
                <div className="mt-4 flex items-center gap-1 text-xs font-mono text-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  View details <ArrowUpRight size={12} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Detail Modal */}
      <Dialog
        open={!!selectedExperience}
        onClose={() => setSelectedExperience(null)}
        className="relative z-50"
      >
        <div
          className="fixed inset-0 bg-[#0A0A0B]/80 backdrop-blur-sm"
          aria-hidden="true"
        />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          {selectedExperience && (
            <DialogPanel className="glass-card bg-[var(--bg-surface)] p-6 sm:p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto scrollbar-hide relative">
              <button
                onClick={() => setSelectedExperience(null)}
                className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full border border-[var(--glass-border)] hover:border-[var(--glass-border-hover)] hover:bg-[var(--accent-wash)] transition-all duration-200"
                aria-label="Close"
              >
                <X size={16} className="text-[var(--text-secondary)]" />
              </button>

              <DialogTitle className="font-mono text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-1 pr-10">
                {selectedExperience.title}
              </DialogTitle>

              <p className="font-sans text-base font-medium text-[var(--accent)] mb-1">
                @ {selectedExperience.company}
              </p>
              <p className="font-mono text-xs text-[var(--text-muted)] mb-6">
                {selectedExperience.period}
              </p>

              <div className="border-t border-[var(--glass-border)] pt-5">
                <p className="font-mono text-xs text-[var(--text-muted)] mb-1">
                  Tech Stack
                </p>
                <p className="font-sans text-sm text-[var(--text-secondary)] mb-5">
                  {selectedExperience.skills}
                </p>

                <Description className="font-sans text-base text-[var(--text-secondary)] mb-6 leading-relaxed">
                  {selectedExperience.description}
                </Description>

                <p className="font-mono text-sm font-bold text-[var(--text-primary)] mb-3">
                  Key Achievements
                </p>
                <ul className="space-y-2.5">
                  {selectedExperience.achievements.map((achievement, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm text-[var(--text-secondary)]"
                    >
                      <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full mt-1.5 flex-shrink-0" />
                      <span className="font-sans leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </DialogPanel>
          )}
        </div>
      </Dialog>
    </section>
  );
};

export default ExperienceSection;
