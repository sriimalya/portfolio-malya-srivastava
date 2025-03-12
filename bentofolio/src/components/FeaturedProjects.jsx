import { Link } from 'react-router-dom';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { projectsData } from '../data/projectsData';

const FeaturedProjects = () => {
  // Only show 3 featured projects on the home page
  const featuredProjects = projectsData.slice(0, 3);
  
  return (
    <div id="projects" className="mb-12 mx-8 border border-white border-1 p-8 sm:p-12 rounded-3xl hover:border-[#E1FF4A] transition-colors duration-300">
      <div className="flex gap-4 flex-wrap items-center mb-8">
        <h2 className="text-[#E1FF4A] text-3xl font-bold">PROJECTS</h2>
        <Link to="/projects" className="border border-white px-3 py-1 rounded-full text-sm flex items-center gap-0.5 text-[#E1FF4A] hover:bg-[#E1FF4A] hover:text-black transition-colors duration-200">
          view all <ArrowUpRight size={16} />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-2">
        {featuredProjects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;