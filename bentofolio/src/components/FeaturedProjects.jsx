import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import ProjectCard from './ProjectCard';
import UxProjectsCard from './UxProjectsCard';
import { codeProjectsData } from '../data/codeProjectsData';
import { uxProjectsData } from '../data/uxProjectsData';

const FeaturedProjects = () => {
  const featuredCodeProjects = codeProjectsData.filter(p => p.featured).slice(0, 4);
  const featuredUxProjects = uxProjectsData.filter(p => p.featured).slice(0, 4);

  return (
    <div id="projects" className="mb-24 mx-8">
      {/* Unified Header */}
      <div className="flex flex-col md:flex-row justify-between md:items-end mb-6 ">
        <div>
          <h2 className="text-[#E1FF4A] text-3xl font-bold">Featured Work</h2>
        </div>
        <div className="flex gap-3">
          {uxProjectsData.length > 2 && (
            <Link
              to="/ux-projects"
              className="border border-white px-4 py-2 rounded-full text-sm flex items-center gap-1 hover:bg-[#E1FF4A] hover:text-black transition-all duration-200"
            >
              All Design Work <ArrowUpRight size={16} />
            </Link>
          )}
          {codeProjectsData.length > 2 && (
            <Link
              to="/dev-projects"
              className="border border-white px-4 py-2 rounded-full text-sm flex items-center gap-1 hover:bg-[#E1FF4A] hover:text-black transition-all duration-200"
            >
              All Code Projects <ArrowUpRight size={16} />
            </Link>
          )}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="space-y-8">
        {/* Code Projects Section */}
        <div className="relative group">
          <div className="absolute inset-0 bg-blue-500/5 rounded-xl -z-10 group-hover:bg-blue-500/10 transition-colors duration-300"></div>
          <div className="p-1">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="text-blue-400">Development</span>
              <span className="text-white">Projects</span>
              <ArrowDownRight size={24} />
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
              {featuredCodeProjects.map((project) => (
                <ProjectCard key={project.name} project={project} />
              ))}
            </div>
          </div>
        </div>

        {/* UX Projects Section */}
        <div className="relative group">
          <div className="absolute inset-0 bg-[#E1FF4A]/5 rounded-xl -z-10 group-hover:bg-[#E1FF4A]/10 transition-colors duration-300"></div>
          <div className="p-1">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="text-[#E1FF4A]">UI/UX</span>
              <span className="text-white">Case Studies</span>
              <ArrowDownRight size={24} />
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
              {featuredUxProjects.map((project) => (
                <UxProjectsCard key={project.name} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
