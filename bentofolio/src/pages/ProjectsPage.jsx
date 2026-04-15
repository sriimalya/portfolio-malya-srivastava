import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { codeProjectsData } from '../data/codeProjectsData';

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

const ProjectsPage = () => {
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    document.title = 'Projects — Malya Srivastava';
    window.scrollTo(0, 0);
  }, []);

  const uniqueTechnologies = [
    ...new Set(codeProjectsData.flatMap((project) => project.technologies)),
  ].sort();

  const filteredProjects =
    filter === 'all'
      ? codeProjectsData
      : codeProjectsData.filter((project) =>
          project.technologies.includes(filter)
        );

  return (
    <div className="min-h-[80vh]">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-8"
      >
        <h1 className="font-mono text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-2">
          All <span className="text-[var(--accent)]">Projects</span>
        </h1>
        <p className="font-sans text-base text-[var(--text-secondary)]">
          Technical implementations, full-stack applications, and engineering experiments.
        </p>
      </motion.div>

      {/* Filter */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
        className="mb-10"
      >
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-xs text-[var(--text-muted)]">
            filter:
          </span>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-full font-mono text-xs transition-all duration-200 ${
                filter === 'all'
                  ? 'bg-lime-electric text-ink-dark font-medium'
                  : 'border border-[var(--glass-border)] text-[var(--text-secondary)] hover:border-[var(--glass-border-hover)] hover:bg-[var(--accent-wash)]'
              }`}
            >
              all
            </button>
            {uniqueTechnologies.map((tech) => (
              <button
                key={tech}
                onClick={() => setFilter(tech)}
                className={`px-3 py-1.5 rounded-full font-mono text-xs transition-all duration-200 ${
                  filter === tech
                    ? 'bg-lime-electric text-ink-dark font-medium'
                    : 'border border-[var(--glass-border)] text-[var(--text-secondary)] hover:border-[var(--glass-border-hover)] hover:bg-[var(--accent-wash)]'
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.name} variants={cardVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <div className="glass-card text-center py-16">
          <p className="font-sans text-base text-[var(--text-secondary)]">
            No projects found with this filter.
          </p>
          <button
            onClick={() => setFilter('all')}
            className="mt-3 font-mono text-sm text-[var(--accent)] hover:underline"
          >
            Show all
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;