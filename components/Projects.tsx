
import React, { useState } from 'react';
import { RESUME_DATA } from '../constants';
import { ExternalLink, FolderCode, Github, Globe, ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectsProps {
  onViewAll?: () => void;
  featuredOnly?: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ onViewAll, featuredOnly = true }) => {
  const [galleryState, setGalleryState] = useState<{images: string[], currentIndex: number} | null>(null);
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
                        <button 
                          key={idx} 
                          onClick={() => setGalleryState({images: project.images!, currentIndex: idx})}
                          className="block w-40 h-24 sm:w-48 sm:h-28 rounded-lg overflow-hidden border border-gray-700/50 flex-shrink-0 hover:border-indigo-500 transition-colors focus:outline-none"
                        >
                           <img 
                             src={img} 
                             alt={`${project.title} screenshot ${idx + 1}`} 
                             className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                           />
                        </button>
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
              className="group inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-xl active:scale-95"
            >
              Explore Full Gallery
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}
      </div>

      {/* Image Modal (Lightbox) */}
      {galleryState && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 animate-in fade-in duration-300" 
          onClick={() => setGalleryState(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-indigo-400 bg-gray-900/50 hover:bg-gray-800 rounded-full p-2 transition-colors z-[60]"
            onClick={(e) => { e.stopPropagation(); setGalleryState(null); }}
          >
            <X size={28} />
          </button>

          {galleryState.images.length > 1 && (
            <>
              <button 
                className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 text-white hover:text-indigo-400 bg-gray-900/50 hover:bg-gray-800 rounded-full p-3 transition-colors z-[60]"
                onClick={(e) => {
                  e.stopPropagation();
                  setGalleryState(prev => prev ? {
                    ...prev,
                    currentIndex: prev.currentIndex === 0 ? prev.images.length - 1 : prev.currentIndex - 1
                  } : null);
                }}
              >
                <ChevronLeft size={32} />
              </button>
              
              <button 
                className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 text-white hover:text-indigo-400 bg-gray-900/50 hover:bg-gray-800 rounded-full p-3 transition-colors z-[60]"
                onClick={(e) => {
                  e.stopPropagation();
                  setGalleryState(prev => prev ? {
                    ...prev,
                    currentIndex: prev.currentIndex === prev.images.length - 1 ? 0 : prev.currentIndex + 1
                  } : null);
                }}
              >
                <ChevronRight size={32} />
              </button>
            </>
          )}

          <img 
            key={galleryState.currentIndex}
            src={galleryState.images[galleryState.currentIndex]} 
            alt={`Gallery view ${galleryState.currentIndex + 1}`} 
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-[0_0_50px_rgba(0,0,0,0.5)] animate-in zoom-in-95 duration-300" 
            onClick={(e) => e.stopPropagation()}
          />

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-gray-900/50 rounded-full text-white/80 text-sm font-medium tracking-widest z-[60]">
            {galleryState.currentIndex + 1} / {galleryState.images.length}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
