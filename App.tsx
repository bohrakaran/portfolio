
// Portfolio Application - Trigger Deployment
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';
import { ArrowLeft, Github, Linkedin } from 'lucide-react';
import { RESUME_DATA } from './constants';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'all-projects' | 'about' | 'certifications'>('home');

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const handleNavigate = (hash?: string) => {
    // Determine which views should be standalone pages
    const pageViews: Record<string, typeof view> = {
      '#about': 'about',
      '#certifications': 'certifications'
    };

    if (hash && pageViews[hash]) {
      setView(pageViews[hash]);
      return;
    }

    // If navigating to a specific section on home, ensure we are on the home view
    if (view !== 'home' && hash) {
      setView('home');
    }

    if (hash) {
      // Use a timeout to wait for the view to switch if necessary
      setTimeout(() => {
        const id = hash.startsWith('#') ? hash.slice(1) : hash;
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, (view !== 'home') ? 150 : 10);
    } else {
      // If no hash, just go to top of home
      setView('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
      <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0B1120] to-[#1E1B4B] text-white selection:bg-indigo-500 selection:text-white overflow-x-hidden">
      {/* Dynamic background element */}
        <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
        {/* Left Glow */}
        <div className="absolute top-[10%] left-[-10%] w-[35vw] h-[35vw] max-w-[600px] max-h-[600px] bg-indigo-500/40 rounded-full blur-[100px] md:blur-[140px]"></div>
        {/* Right Glow */}
        <div className="absolute bottom-[10%] right-[-10%] w-[35vw] h-[35vw] max-w-[600px] max-h-[600px] bg-purple-500/40 rounded-full blur-[100px] md:blur-[140px]"></div>
        {/* Center/Top Glow */}
        <div className="absolute top-[-10%] left-[40%] w-[25vw] h-[25vw] max-w-[400px] max-h-[400px] bg-blue-500/30 rounded-full blur-[90px]"></div>
        </div>

      <Navbar onNavigate={handleNavigate} currentView={view} />
      
      <main className="transition-all duration-500">
        {view === 'home' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <Hero onNavigate={handleNavigate} />
            <Skills />
            <Projects featuredOnly={true} onViewAll={() => setView('all-projects')} />
            <Experience />
            {/* We still show a preview on home, but it links to the page */}
            <section className="py-20 px-4">
              <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Certifications</h2>
                <button 
                  onClick={() => setView('certifications')}
                  className="px-8 py-3 bg-gray-900 border border-gray-800 rounded-xl hover:bg-indigo-600 transition-all"
                >
                  View All Certifications
                </button>
              </div>
            </section>
            <Contact />
          </div>
        )}

        {view === 'about' && (
          <div className="pt-32 pb-20 px-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="max-w-7xl mx-auto">
              <button 
                onClick={() => setView('home')}
                className="group mb-8 flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </button>
              <About />
            </div>
          </div>
        )}

        {view === 'certifications' && (
          <div className="pt-32 pb-20 px-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="max-w-7xl mx-auto">
              <button 
                onClick={() => setView('home')}
                className="group mb-8 flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </button>
              <Certifications isFullPage={true} />
            </div>
          </div>
        )}

        {view === 'all-projects' && (
          <div className="pt-32 pb-20 px-4 animate-in fade-in slide-in-from-right-4 duration-700">
            <div className="max-w-7xl mx-auto">
              <button 
                onClick={() => setView('home')}
                className="group mb-8 flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </button>
              
              <Projects featuredOnly={false} />

              <div className="mt-20 p-12 glass-card rounded-3xl text-center">
                <h3 className="text-2xl font-bold mb-4">Want to see more technical details?</h3>
                <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                  I'm constantly building and learning. Connect with me on GitHub or LinkedIn for more experiments and smaller scripts.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a 
                    href={RESUME_DATA.contact.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-8 py-3 bg-white text-black rounded-xl font-bold hover:bg-gray-200 transition-all shadow-xl"
                  >
                    <Github size={20} />
                    Visit GitHub
                  </a>
                  <a 
                    href={RESUME_DATA.contact.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-8 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-xl"
                  >
                    <Linkedin size={20} />
                    View LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;
