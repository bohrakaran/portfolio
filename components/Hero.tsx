
import React from 'react';
import { RESUME_DATA } from '../constants';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

interface HeroProps {
  onNavigate: (hash?: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 leading-tight">
            Hi, I'm <span className="text-gradient">{RESUME_DATA.name}</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-400 mb-6 font-medium">
            {RESUME_DATA.role}
          </p>
          <p className="text-gray-300 text-lg max-w-2xl mb-8 leading-relaxed">
            {RESUME_DATA.summary}
          </p>
          
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10 text-sm">
            <a 
              href={`mailto:${RESUME_DATA.contact.email}`}
              className="flex items-center gap-2 text-gray-400 bg-gray-900/50 px-4 py-2 rounded-full border border-gray-800 hover:border-indigo-500 hover:text-white hover:bg-indigo-500/10 transition-all duration-300 group"
            >
              <Mail size={16} className="text-indigo-500 group-hover:scale-110 transition-transform" />
              <span>{RESUME_DATA.contact.email}</span>
            </a>
            <a 
              href={`tel:${RESUME_DATA.contact.phone}`}
              className="flex items-center gap-2 text-gray-400 bg-gray-900/50 px-4 py-2 rounded-full border border-gray-800 hover:border-indigo-500 hover:text-white hover:bg-indigo-500/10 transition-all duration-300 group"
            >
              <Phone size={16} className="text-indigo-500 group-hover:scale-110 transition-transform" />
              <span>{RESUME_DATA.contact.phone}</span>
            </a>
            <div className="flex items-center gap-2 text-gray-400 bg-gray-900/50 px-4 py-2 rounded-full border border-gray-800">
              <MapPin size={16} className="text-indigo-500" />
              <span>{RESUME_DATA.contact.location}</span>
            </div>
          </div>

          <div className="flex justify-center lg:justify-start gap-6">
            <a 
              href={RESUME_DATA.contact.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-gray-900 rounded-xl hover:bg-indigo-600 transition-all duration-300 border border-gray-800 group shadow-lg"
            >
              <Github size={24} className="text-gray-300 group-hover:text-white" />
            </a>
            <a 
              href={RESUME_DATA.contact.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-gray-900 rounded-xl hover:bg-indigo-600 transition-all duration-300 border border-gray-800 group shadow-lg"
            >
              <Linkedin size={24} className="text-gray-300 group-hover:text-white" />
            </a>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => onNavigate('#projects')}
                className="px-8 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] active:scale-95"
              >
                View Projects
              </button>
              <a 
                href={RESUME_DATA.contact.resume}
                download
                className="flex items-center gap-2 px-8 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] active:scale-95"
              >
                Resume
              </a>
            </div>
          </div>
        </div>

        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 bg-indigo-500 rounded-full blur-[100px] opacity-20 animate-pulse"></div>
            
            <div className="relative w-full h-full rounded-full border-4 border-indigo-500/30 p-4 overflow-hidden shadow-2xl bg-gray-900/40 backdrop-blur-sm group transition-transform duration-500 hover:scale-[1.02]">
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-indigo-500/50 flex items-center justify-center bg-gray-800">
                <img 
                  src="./profile.jpg" 
                  alt={RESUME_DATA.name} 
                  className="w-full h-full object-cover object-[35%_top] rounded-full transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
