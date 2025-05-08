
import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 sm:py-16 border-t border-gray-100">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 - Logo and tagline */}
          <div className="flex flex-col">
            <Link 
              to="/" 
              className="text-lg font-semibold flex items-center hover:text-primary transition-colors mb-3"
            >
              <Code size={20} className="mr-2" />
              <span>Portfolio</span>
            </Link>
            <p className="text-muted-foreground text-sm mt-1">
              Creating minimal, effective digital experiences through code and design.
            </p>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div className="flex flex-col">
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <div className="flex flex-col space-y-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link to="/projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </Link>
              <Link to="/skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Skills
              </Link>
            </div>
          </div>
          
          {/* Column 3 - Social Links */}
          <div className="flex flex-col">
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider">
              Connect
            </h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/TM23-sanji" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Github"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/%C6%AD%E2%B2%99-cs-a96208354/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:tusharmishra802@gmail.com" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-100">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
