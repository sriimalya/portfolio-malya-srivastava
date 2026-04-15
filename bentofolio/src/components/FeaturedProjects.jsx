import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import { codeProjectsData } from '../data/codeProjectsData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
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

const FeaturedProjects = () => {
  const flagshipProject = codeProjectsData.find((p) => p.flagship);
  const otherFeatured = codeProjectsData
    .filter((p) => p.featured && !p.flagship)
    .slice(0, 3);

  return (
    <section id="projects" className="mb-16">
      <div className="flex flex-col sm:flex-row justify-between sm:items-end mb-6 gap-3">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4 }}
          className="font-mono text-2xl font-bold text-[var(--accent)]"
        >
          Featured Work
        </motion.h2>
        <Link
          to="/projects"
          className="glass-card px-4 py-2 text-xs font-mono flex items-center gap-1.5 text-[var(--text-secondary)] hover:text-[var(--accent)] w-fit"
        >
          View All <ArrowUpRight size={14} />
        </Link>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="flex flex-col gap-4"
      >
        {/* ── Flagship Project — hero card ── */}
        {flagshipProject && (
          <motion.div
            variants={cardVariants}
            className="glass-card overflow-hidden group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image side */}
              {flagshipProject.photoPath && (
                <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-[var(--glass-fill)]">
                  <img
                    src={flagshipProject.photoPath}
                    alt={flagshipProject.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  />
                  {/* Subtle gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--bg-primary)]/10 hidden lg:block" />
                </div>
              )}

              {/* Content side */}
              <div className="p-6 sm:p-8 flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="inline-block font-mono text-[10px] uppercase tracking-widest text-[var(--accent)] bg-[var(--accent-wash)] px-2 py-0.5 rounded mb-2">
                      Flagship
                    </span>
                    <h3 className="font-mono text-xl sm:text-2xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors duration-200">
                      {flagshipProject.name}
                    </h3>
                  </div>
                  <div className="flex gap-2">
                    {flagshipProject.github && (
                      <a
                        href={flagshipProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 flex items-center justify-center rounded-full border border-[var(--glass-border)] hover:border-[var(--glass-border-hover)] hover:bg-[var(--accent-wash)] transition-all duration-200"
                        aria-label="GitHub"
                      >
                        <Github size={16} className="text-[var(--text-secondary)]" />
                      </a>
                    )}
                    {flagshipProject.demo && (
                      <a
                        href={flagshipProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 flex items-center justify-center rounded-full border border-[var(--glass-border)] hover:border-[var(--glass-border-hover)] hover:bg-[var(--accent-wash)] transition-all duration-200"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={16} className="text-[var(--text-secondary)]" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="font-sans text-sm text-[var(--text-secondary)] leading-relaxed mb-5 max-w-[60ch]">
                  {flagshipProject.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {flagshipProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-full border border-[var(--glass-border)] text-[var(--text-muted)] text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                {flagshipProject.highlights && (
                  <div className="mt-auto">
                    <p className="font-mono text-xs text-[var(--text-muted)] mb-3 uppercase tracking-widest">
                      Key Highlights
                    </p>
                    <div className="space-y-2">
                      {flagshipProject.highlights.map((highlight, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 text-sm"
                        >
                          <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full mt-1.5 flex-shrink-0" />
                          <span className="font-sans text-[var(--text-secondary)] leading-relaxed">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {/* ── Other Featured Projects — uniform grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherFeatured.map((project) => (
            <motion.div
              key={project.name}
              variants={cardVariants}
              className="glass-card p-5 group flex flex-col"
            >
              {/* Image */}
              {project.photoPath && (
                <div className="relative aspect-[16/10] rounded-lg overflow-hidden mb-4 bg-[var(--glass-fill)]">
                  <img
                    src={project.photoPath}
                    alt={project.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}

              <h3 className="font-mono text-base font-medium text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors duration-200 mb-1">
                {project.name}
              </h3>
              <p className="font-sans text-xs text-[var(--text-secondary)] mb-3 line-clamp-2 leading-relaxed">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5 mb-4 mt-auto">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] px-2 py-0.5 rounded-full border border-[var(--glass-border)] text-[var(--text-muted)] font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3 text-xs font-mono">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-200"
                  >
                    <Github size={13} /> code
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-200"
                  >
                    <ExternalLink size={13} /> demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturedProjects;
