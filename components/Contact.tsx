
import React from 'react';
import { RESUME_DATA } from '../constants';
import { Github, Linkedin, Mail, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In <span className="text-gradient">Touch</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <div className="w-20 h-1.5 bg-indigo-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <a 
            href={RESUME_DATA.contact.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="glass-card p-8 rounded-3xl flex flex-col items-center text-center group hover:border-indigo-500/50 transition-all duration-300"
          >
            <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center text-gray-400 group-hover:text-white group-hover:bg-indigo-600 transition-all mb-6">
              <Github size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">GitHub</h3>
            <p className="text-gray-400 text-sm">Check out my open-source projects and code experiments.</p>
          </a>

          <a 
            href={RESUME_DATA.contact.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="glass-card p-8 rounded-3xl flex flex-col items-center text-center group hover:border-indigo-500/50 transition-all duration-300"
          >
            <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center text-gray-400 group-hover:text-white group-hover:bg-indigo-600 transition-all mb-6">
              <Linkedin size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">LinkedIn</h3>
            <p className="text-gray-400 text-sm">Let's connect professionally and talk about tech.</p>
          </a>

          <a 
            href={`mailto:${RESUME_DATA.contact.email}`}
            className="glass-card p-8 rounded-3xl flex flex-col items-center text-center group hover:border-indigo-500/50 transition-all duration-300"
          >
            <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center text-gray-400 group-hover:text-white group-hover:bg-indigo-600 transition-all mb-6">
              <Mail size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Email</h3>
            <p className="text-gray-400 text-sm">Send me a direct message for any inquiries.</p>
          </a>
        </div>

        <div className="mt-16 text-center">
          <a 
            href={`mailto:${RESUME_DATA.contact.email}`}
            className="inline-flex items-center gap-3 px-10 py-5 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-[0_0_30px_rgba(79,70,229,0.4)] group"
          >
            Say Hello
            <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
