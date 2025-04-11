import { ExternalLink } from 'lucide-react';

const UxProjectsCard = ({ project }) => {
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
        {project.tools.slice(0, 3).map((tool) => (
          <span key={tool} className="text-xs px-2 py-1 bg-zinc-800 rounded-md">
            {tool}
          </span>
        ))}
      </div>
      <div className="flex">
        <a
          href={project.caseStudy}
          className="text-xs flex items-center gap-1 hover:text-[#E1FF4A] transition-colors duration-200"
        >
          <ExternalLink size={14} /> Case Study
        </a>
      </div>
    </div>
  );
};

export default UxProjectsCard;