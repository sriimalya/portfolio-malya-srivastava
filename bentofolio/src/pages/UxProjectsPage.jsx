import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import UxProjectCard from '../components/UxProjectsCard';
import { uxProjectsData } from '../data/uxProjectsData';

const UxCaseStudiesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [filter, setFilter] = useState('all');
  
  // Get unique design tool categories sorted alphabetically
  const uniqueTools = [...new Set(
    uxProjectsData.flatMap(project => project.tools)
  )].sort();
  
  // Filter projects based on selected tool
  const filteredProjects = filter === 'all' 
    ? uxProjectsData 
    : uxProjectsData.filter(project => project.tools.includes(filter));
  
  return (
    <div className="py-12 mx-8">
      {/* Header with back link */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[#E1FF4A] mb-2">UX Projects/Case Studies</h1>
          <p className="text-gray-400">User-centered design process and solutions</p>
        </div>
        
      </div>
      
      {/* Filter controls */}
      <div className="mb-12">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex flex-wrap gap-2">
            <button 
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-200 
                ${filter === 'all' 
                  ? 'bg-[#E1FF4A] text-black font-medium' 
                  : 'bg-zinc-800 text-white hover:bg-zinc-700'}`}
            >
              All Case Studies
            </button>
            
            {uniqueTools.map((tool) => (
              <button 
                key={tool}
                onClick={() => setFilter(tool)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-200 
                  ${filter === tool 
                    ? 'bg-[#E1FF4A] text-black font-medium' 
                    : 'bg-zinc-800 text-white hover:bg-zinc-700'}`}
              >
                {tool}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Projects grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <UxProjectCard key={project.name} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-400">No case studies found with this filter</p>
          <button 
            onClick={() => setFilter('all')}
            className="mt-4 px-4 py-2 bg-[#E1FF4A] text-black rounded-full text-sm font-medium hover:bg-[#E1FF4A]/90 transition-colors duration-200"
          >
            Show All Case Studies
          </button>
        </div>
      )}
    </div>
  );
};

export default UxCaseStudiesPage;