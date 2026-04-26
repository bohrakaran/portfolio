
import React from 'react';
import { RESUME_DATA } from '../constants';
import { Award, Trophy, CheckCircle2, ShieldCheck, ExternalLink } from 'lucide-react';

interface CertificationsProps {
  isFullPage?: boolean;
}

const Certifications: React.FC<CertificationsProps> = ({ isFullPage = false }) => {
  return (
    <section id="certifications" className={`${isFullPage ? 'py-10' : 'py-20'} px-4`}>
      <div className="max-w-7xl mx-auto">
        <div className={`${isFullPage ? 'mb-16' : 'text-center mb-16'}`}>
          <h2 className={`${isFullPage ? 'text-4xl sm:text-5xl font-extrabold' : 'text-3xl sm:text-4xl font-bold'} mb-4`}>
            Certifications & <span className="text-gradient">Achievements</span>
          </h2>
          <p className={`text-gray-400 max-w-2xl ${isFullPage ? 'text-lg' : 'mx-auto'}`}>
            Validation of my technical skills and continuous learning journey through industry-recognized programs.
          </p>
          {!isFullPage && <div className="w-20 h-1.5 bg-indigo-500 mx-auto mt-6 rounded-full"></div>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {RESUME_DATA.certifications.map((cert, index) => (
            <div key={index} className="glass-card p-8 rounded-3xl flex flex-col hover:border-indigo-500/50 transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 text-indigo-500/5 group-hover:text-indigo-500/10 transition-colors">
                <ShieldCheck size={80} />
              </div>
              
              <div className="w-14 h-14 bg-indigo-600/20 rounded-2xl flex items-center justify-center mb-6 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-lg shadow-indigo-500/10">
                <Award size={28} />
              </div>

              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-indigo-400 transition-colors">{cert.title}</h3>
                <p className="text-gray-400 font-medium text-sm mb-4 flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-indigo-500" />
                  {cert.issuer}
                </p>
              </div>

              <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-800">
                <div className="text-gray-500 text-xs uppercase tracking-widest font-bold">{cert.year}</div>
                {cert.certificateUrl ? (
                  <a 
                    href={cert.certificateUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-indigo-400 font-bold hover:text-indigo-300 transition-colors group/link"
                  >
                    View Certificate <ExternalLink size={12} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                ) : (
                  <div className="flex items-center gap-1 text-xs text-indigo-400 font-bold cursor-default">
                    Verified <ExternalLink size={12} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {isFullPage && (
          <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 glass-card p-10 rounded-3xl">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Trophy className="text-yellow-500" />
                Key Achievements
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-4 items-start">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-indigo-500 flex-shrink-0"></div>
                  <p className="text-gray-300">Successfully completed Python Programming Internship at CodSoft, working on advanced problem sets.</p>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-indigo-500 flex-shrink-0"></div>
                  <p className="text-gray-300">Earned Machine Learning specialization certification from IBM SkillsBuild.</p>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-indigo-500 flex-shrink-0"></div>
                  <p className="text-gray-300">Consistently maintaining a strong academic record while building real-world projects.</p>
                </li>
              </ul>
            </div>

            <div className="glass-card p-10 rounded-3xl bg-indigo-600/5">
              <h3 className="text-2xl font-bold mb-6">Hobbies</h3>
              <div className="flex flex-wrap gap-3">
                {RESUME_DATA.hobbies.map((hobby, idx) => (
                  <span key={idx} className="px-4 py-2 bg-gray-950 border border-gray-800 rounded-xl text-gray-300 text-sm font-medium">
                    {hobby}
                  </span>
                ))}
              </div>
              <p className="mt-8 text-sm text-gray-500 leading-relaxed italic">
                "Outside of the technical realm, I believe in maintaining a balanced lifestyle through physical activity and creative exploration."
              </p>
            </div>
          </div>
        )}

        {!isFullPage && (
          <div className="mt-20 glass-card p-10 rounded-3xl flex flex-col md:flex-row items-center gap-10">
            <div className="w-24 h-24 bg-indigo-600 rounded-3xl flex items-center justify-center text-white flex-shrink-0 shadow-xl">
              <Trophy size={48} />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">Hobbies & Interests</h3>
              <div className="flex flex-wrap gap-4">
                {RESUME_DATA.hobbies.map((hobby, idx) => (
                  <span key={idx} className="px-6 py-3 bg-gray-900 border border-gray-800 rounded-xl text-gray-300 font-medium">
                    {hobby}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;
