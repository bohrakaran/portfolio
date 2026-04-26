
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigate: (hash?: string) => void;
  currentView: 'home' | 'all-projects' | 'about' | 'certifications';
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    onNavigate(href);
    setIsOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isActive = (href: string) => {
    if (href === '#about' && currentView === 'about') return true;
    if (href === '#certifications' && currentView === 'certifications') return true;
    if (href === '#hero' && currentView === 'home' && !window.scrollY) return true;
    return false;
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || currentView !== 'home' ? 'bg-gray-950/80 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a href="/" onClick={handleLogoClick} className="text-2xl font-bold tracking-tight text-white hover:opacity-80 transition-opacity">
          KSB<span className="text-indigo-500">.</span>
        </a>
        
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? 'text-indigo-400'
                  : 'text-gray-300 hover:text-indigo-400'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-card absolute top-full left-0 w-full animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-4 shadow-xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`block text-base font-medium px-3 py-2 ${isActive(link.href) ? 'text-indigo-400' : 'text-gray-300 hover:text-indigo-400'}`}
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
