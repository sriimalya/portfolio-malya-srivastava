import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div>
      <div className="transform hover:scale-105 transition-transform duration-300 border border-white border-1 rounded-3xl aspect-video bg-zinc-700 overflow-hidden">
        <img
          src={project.photoPath}
          alt={project.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className='py-4'>
        <h3 className="text-[#E1FF4A] font-bold mb-2">{project.name}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, i) => (
            <span key={i} className="px-3 py-1 bg-zinc-700 rounded-full text-sm hover:bg-zinc-600 transition-colors duration-200">
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
              className="text-sm flex items-center gap-1 hover:text-[#E1FF4A] transition-colors duration-200"
            >
              <Github size={16} /> Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm flex items-center gap-1 hover:text-[#E1FF4A] transition-colors duration-200"
            >
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;