import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projectsData';
import { useEffect } from "react";

const ProjectsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  const [filter, setFilter] = useState('all');
  
  // Get unique technology categories
  const allTechnologies = projectsData.flatMap(project => project.technologies);
  const uniqueTechnologies = [...new Set(allTechnologies)];
  
  // Filter projects based on selected technology
  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.technologies.includes(filter));
  
  return (
    <div className="py-8 mx-8">
      <h1 className="text-4xl font-bold mb-8 text-[#E1FF4A]">All Projects</h1>
      
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-gray-400">Filter by:</span>
          <button 
            onClick={() => setFilter('all')}
            className={`px-3 py-1 rounded-full text-sm transition-colors duration-200 
              ${filter === 'all' 
                ? 'bg-[#E1FF4A] text-black' 
                : 'bg-zinc-700 text-white hover:bg-zinc-600'}`}
          >
            All
          </button>
          
          {uniqueTechnologies.map((tech, index) => (
            <button 
              key={index}
              onClick={() => setFilter(tech)}
              className={`px-3 py-1 rounded-full text-sm transition-colors duration-200 
                ${filter === tech 
                  ? 'bg-[#E1FF4A] text-black' 
                  : 'bg-zinc-700 text-white hover:bg-zinc-600'}`}
            >
              {tech}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;