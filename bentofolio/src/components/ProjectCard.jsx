import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div className="glass-card p-5 group flex flex-col h-full">
      {/* Image */}
      {project.photoPath && (
        <div className="relative aspect-[16/10] rounded-lg overflow-hidden mb-4 bg-[var(--glass-fill)]">
          <img
            src={project.photoPath}
            alt={project.name}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}

      <h3 className="font-mono text-base font-medium text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors duration-200 mb-1">
        {project.name}
      </h3>
      <p className="font-sans text-xs text-[var(--text-secondary)] mb-3 line-clamp-2 leading-relaxed flex-grow">
        {project.description}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
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
      <div className="flex gap-3 text-xs font-mono mt-auto">
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
    </div>
  );
};

export default ProjectCard;