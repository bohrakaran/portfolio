
import React from 'react';
import { RESUME_DATA } from '../constants';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-4 border-t border-gray-800 bg-gray-950">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <div className="text-2xl font-bold tracking-tight text-white mb-2">
            KSB<span className="text-indigo-500">.</span>
          </div>
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} {RESUME_DATA.name}. All rights reserved.</p>
        </div>

        <div className="flex items-center gap-6">
          <a href={RESUME_DATA.contact.github} className="text-gray-400 hover:text-white transition-colors">
            <Github size={20} />
          </a>
          <a href={RESUME_DATA.contact.linkedin} className="text-gray-400 hover:text-white transition-colors">
            <Linkedin size={20} />
          </a>
          <a href={`mailto:${RESUME_DATA.contact.email}`} className="text-gray-400 hover:text-white transition-colors">
            <Mail size={20} />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
