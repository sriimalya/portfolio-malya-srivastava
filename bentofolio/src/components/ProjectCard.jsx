import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div className="group">
      <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-3 border border-white/10 group-hover:border-white/30 transition-colors duration-300">
        <img
          src={project.photoPath}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <h3 className="font-medium text-[#E1FF4A] mb-1">{project.name}</h3>
      <p className="text-sm text-gray-400 mb-3 line-clamp-2">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {project.technologies.map((tech) => (
          <span key={tech} className="text-xs px-2 py-1 bg-zinc-800 rounded-md">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs flex items-center gap-1 hover:text-[#E1FF4A] transition-colors duration-200"
          >
            <Github size={14} /> Code
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs flex items-center gap-1 hover:text-[#E1FF4A] transition-colors duration-200"
          >
            <ExternalLink size={14} /> Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;