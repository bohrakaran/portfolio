
import React from 'react';
import { RESUME_DATA } from '../constants';
import { GraduationCap, Code2, Heart, Award, Sparkles, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* Header Section */}
      <div className="relative overflow-hidden p-8 sm:p-12 rounded-[2.5rem] glass-card">
        <div className="absolute top-0 right-0 p-8 text-indigo-500/10 -z-10">
          <Sparkles size={120} />
        </div>
        
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
            About <span className="text-gradient">Me</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8">
            I am a passionate <span className="text-indigo-400 font-semibold">Full Stack Web Developer</span> and 
            Computer Science Engineering student from Uttarakhand, India. My journey in tech is driven by 
            a deep curiosity for how things work and a desire to build tools that make a real difference.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-sm font-medium">
              <Code2 size={16} />
              Problem Solver
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium">
              <BookOpen size={16} />
              Lifelong Learner
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Personal Bio */}
        <div className="lg:col-span-2 space-y-8">
          <div className="glass-card p-8 rounded-3xl">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Sparkles className="text-indigo-500" />
              My Story
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Currently pursuing my B. Tech in Computer Science Engineering, I've spent the last few years 
                immersing myself in the world of web development. I started with simple HTML/CSS and 
                quickly fell in love with the power of modern frameworks like React and the robustness 
                of Node.js.
              </p>
              <p>
                My approach to development is centered around <span className="text-white">clean code</span>, 
                <span className="text-white">user-centric design</span>, and 
                <span className="text-white">scalable architecture</span>. Whether it's crafting a 
                responsive frontend or building complex backend logic, I enjoy every step of the process.
              </p>
              <p>
                Beyond coding, I have a strong interest in Machine Learning and Data Science, exploring 
                how intelligent systems can be integrated into web applications to provide 
                smarter user experiences.
              </p>
            </div>
          </div>

          <div className="glass-card p-8 rounded-3xl">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <GraduationCap className="text-indigo-500" />
              Academic Journey
            </h2>
            <div className="space-y-6">
              {RESUME_DATA.education.map((edu, idx) => (
                <div key={idx} className="border-l-2 border-indigo-500/30 pl-6 py-2">
                  <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                  <p className="text-indigo-400 font-medium mb-2">{edu.institution}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{edu.period}</span>
                    <span className="px-3 py-1 bg-green-500/10 text-green-400 text-xs font-bold rounded-lg border border-green-500/20">
                      {edu.score}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-8">
          <div className="glass-card p-8 rounded-3xl bg-indigo-600/5">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Heart className="text-pink-500" />
              Interests
            </h2>
            <div className="flex flex-wrap gap-3">
              {RESUME_DATA.hobbies.map((hobby, idx) => (
                <div key={idx} className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-xl text-gray-300 text-sm">
                  {hobby}
                </div>
              ))}
              <div className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-xl text-gray-300 text-sm">Tech Blogging</div>
              <div className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-xl text-gray-300 text-sm">Open Source</div>
            </div>
          </div>

          <div className="glass-card p-8 rounded-3xl">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Award className="text-yellow-500" />
              Philosophy
            </h2>
            <p className="text-gray-400 italic text-sm leading-relaxed">
              "Technology is best when it brings people together and solves problems effectively. 
              My goal is to create software that is not just functional, but a joy to use."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
