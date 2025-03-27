
import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-8 bg-background/80 backdrop-blur-sm border-t border-border relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-foreground/70">
              © {new Date().getFullYear()} Mohan Divekar. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-8">
            <a href="#about" className="text-foreground/70 hover:text-primary transition-colors duration-300">
              About
            </a>
            <a href="#projects" className="text-foreground/70 hover:text-primary transition-colors duration-300">
              Projects
            </a>
            <a href="#contact" className="text-foreground/70 hover:text-primary transition-colors duration-300">
              Contact
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 bg-primary/10 rounded-full text-primary hover:bg-primary/20 transition-colors duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
