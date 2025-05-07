
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Code, Image, BookOpen } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <Link 
            to="/" 
            className="text-lg sm:text-xl font-semibold flex items-center hover:text-primary transition-colors"
          >
            <Code size={24} className="mr-2" />
            <span>Portfolio</span>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center space-x-1 sm:space-x-8">
            <Link 
              to="/" 
              className="relative px-1 py-2 font-medium text-sm sm:text-base underline-effect"
            >
              Home
            </Link>
            <Link 
              to="/projects" 
              className="relative px-1 py-2 font-medium text-sm sm:text-base flex items-center underline-effect"
            >
              <Image size={16} className="mr-1 sm:mr-2" />
              Projects
            </Link>
            <Link 
              to="/skills" 
              className="relative px-1 py-2 font-medium text-sm sm:text-base flex items-center underline-effect"
            >
              <BookOpen size={16} className="mr-1 sm:mr-2" />
              Skills
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
