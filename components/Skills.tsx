
import React from 'react';
import { RESUME_DATA } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-gray-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Technical <span className="text-gradient">Proficiency</span></h2>
          <div className="w-20 h-1.5 bg-indigo-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {RESUME_DATA.skills.map((skillGroup, index) => (
            <div key={index} className="glass-card p-6 rounded-2xl hover:border-indigo-500/50 transition-all group">
              <h3 className="text-xl font-bold mb-6 text-white group-hover:text-indigo-400 transition-colors">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-3 py-1.5 bg-gray-800 text-gray-300 rounded-lg text-sm border border-gray-700 hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
