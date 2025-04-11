import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import { codeProjectsData } from '../data/codeProjectsData';

const CodeProjectsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [filter, setFilter] = useState('all');
  
  // Get unique technology categories sorted alphabetically
  const uniqueTechnologies = [...new Set(
    codeProjectsData.flatMap(project => project.technologies)
  )].sort();
  
  // Filter projects based on selected technology
  const filteredProjects = filter === 'all' 
    ? codeProjectsData 
    : codeProjectsData.filter(project => project.technologies.includes(filter));
  
  return (
    <div className="py-12 mx-8">
      {/* Header with back link */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[#E1FF4A] mb-2">Development Projects</h1>
          <p className="text-gray-400">Technical implementations and coding solutions</p>
        </div>
        
      </div>
      
      {/* Filter controls */}
      <div className="mb-12">
        <div className="flex flex-wrap items-center gap-4">
          <span className="text-gray-400 text-sm">Filter by technology:</span>
          <div className="flex flex-wrap gap-2">
            <button 
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-200 
                ${filter === 'all' 
                  ? 'bg-[#E1FF4A] text-black font-medium' 
                  : 'bg-zinc-800 text-white hover:bg-zinc-700'}`}
            >
              All Projects
            </button>
            
            {uniqueTechnologies.map((tech) => (
              <button 
                key={tech}
                onClick={() => setFilter(tech)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-200 
                  ${filter === tech 
                    ? 'bg-[#E1FF4A] text-black font-medium' 
                    : 'bg-zinc-800 text-white hover:bg-zinc-700'}`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Projects grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-400">No projects found with this filter</p>
          <button 
            onClick={() => setFilter('all')}
            className="mt-4 px-4 py-2 bg-[#E1FF4A] text-black rounded-full text-sm font-medium hover:bg-[#E1FF4A]/90 transition-colors duration-200"
          >
            Show All Projects
          </button>
        </div>
      )}
    </div>
  );
};

export default CodeProjectsPage;