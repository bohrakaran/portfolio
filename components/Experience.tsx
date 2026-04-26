
import React from 'react';
import { RESUME_DATA } from '../constants';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-gray-950/50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Work Experience */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-indigo-600 rounded-xl text-white">
              <Briefcase size={24} />
            </div>
            <h2 className="text-3xl font-bold">Experience</h2>
          </div>

          <div className="space-y-8">
            {RESUME_DATA.internships.map((job, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-indigo-500/30 pb-4">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
                <div className="glass-card p-6 rounded-2xl">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{job.role}</h3>
                      <p className="text-indigo-400 font-medium">{job.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400 bg-gray-900 px-3 py-1 rounded-full">
                      <Calendar size={14} />
                      {job.duration}
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {job.points.map((p, i) => (
                      <li key={i} className="text-gray-400 text-sm leading-relaxed flex gap-3">
                        <span className="text-indigo-500">•</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-indigo-600 rounded-xl text-white">
              <GraduationCap size={24} />
            </div>
            <h2 className="text-3xl font-bold">Education</h2>
          </div>

          <div className="space-y-8">
            {RESUME_DATA.education.map((edu, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-indigo-500/30 pb-4">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
                <div className="glass-card p-6 rounded-2xl">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                      <p className="text-indigo-400 font-medium">{edu.institution}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400 bg-gray-900 px-3 py-1 rounded-full">
                      <Calendar size={14} />
                      {edu.period}
                    </div>
                  </div>
                  <div className="inline-block px-3 py-1 bg-green-500/10 text-green-400 text-xs font-bold rounded-lg border border-green-500/20">
                    {edu.score}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
