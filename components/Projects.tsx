
import React from 'react';
import { RESUME_DATA } from '../constants';
import { ExternalLink, FolderCode, Github, Globe, ArrowRight } from 'lucide-react';

interface ProjectsProps {
  onViewAll?: () => void;
  featuredOnly?: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ onViewAll, featuredOnly = true }) => {
  const displayedProjects = featuredOnly 
    ? RESUME_DATA.projects.slice(0, 2) 
    : RESUME_DATA.projects;

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {featuredOnly ? 'Featured' : 'All'} <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-gray-400">
              {featuredOnly 
                ? "A selection of my best work and side projects." 
                : "A complete list of my technical journey and experiments."}
            </p>
          </div>
          <div className="w-20 h-1.5 bg-indigo-500 md:mb-2 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {displayedProjects.map((project, index) => (
            <div key={index} className="glass-card flex flex-col rounded-3xl overflow-hidden group hover:translate-y-[-8px] transition-all duration-300 shadow-2xl">
              <div className="p-8 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-indigo-600/20 rounded-xl text-indigo-400">
                    <FolderCode size={28} />
                  </div>
                  <div className="flex gap-3">
                    {project.sourceUrl && (
                      <a 
                        href={project.sourceUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-2 text-gray-400 hover:text-indigo-400 hover:bg-indigo-500/10 rounded-lg transition-all"
                        title="Source Code"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a 
                        href={project.demoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-2 text-gray-400 hover:text-indigo-400 hover:bg-indigo-500/10 rounded-lg transition-all"
                        title="Live Demo"
                      >
                        <Globe size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="space-y-3 mb-6">
                  {project.points.map((point, pIdx) => (
                    <div key={pIdx} className="flex gap-3 text-sm text-gray-400">
                      <span className="text-indigo-500 mt-1">•</span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {project.images && (
                  <div className="mb-8 overflow-x-auto pb-2 flex-grow">
                    <div className="flex gap-3 w-max">
                      {project.images.map((img, idx) => (
                        <a 
                          key={idx} 
                          href={img} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="block w-40 h-24 sm:w-48 sm:h-28 rounded-lg overflow-hidden border border-gray-700/50 flex-shrink-0 hover:border-indigo-500 transition-colors"
                        >
                           <img 
                             src={img} 
                             alt={`${project.title} screenshot ${idx + 1}`} 
                             className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                           />
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap items-center justify-between gap-4 mt-auto pt-6 border-t border-gray-800">
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-md">
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    {project.demoUrl && (
                      <a 
                        href={project.demoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs font-bold text-indigo-400 hover:text-white transition-colors group/link"
                      >
                        Live Demo
                        <ExternalLink size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {featuredOnly && onViewAll && (
          <div className="mt-16 text-center">
            <button 
              onClick={onViewAll}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gray-900 border border-gray-800 text-white rounded-2xl font-bold hover:bg-indigo-600 hover:border-indigo-600 transition-all shadow-xl"
            >
              Explore Full Gallery
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
