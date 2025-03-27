
import React, { useEffect, useRef } from 'react';
import { ArrowDownCircle, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection: React.FC = () => {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 pt-32 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 space-y-8">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary font-medium rounded-full text-sm reveal">
              Java Developer
            </span>
            
            <h1 ref={textRef} className="text-4xl md:text-6xl font-display font-bold text-foreground leading-tight reveal">
              Hi, I'm <span className="text-primary">Mohan Divekar</span>
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl reveal">
              A passionate Java Developer with expertise in Microservices and full-stack development. 
              I recently completed my Master's in Computer Science and have hands-on experience building 
              innovative applications.
            </p>
            
            <div className="flex flex-wrap gap-4 reveal">
              <a href="#contact" className="btn-primary">
                Contact Me
              </a>
              <a href="#projects" className="btn-secondary">
                View Projects
              </a>
            </div>
            
            <div className="flex items-center space-x-6 reveal">
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-300">
                <Github size={20} />
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-300">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-2 reveal">
            <div className="relative">
              <div className="w-full h-80 md:h-96 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl overflow-hidden"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-white shadow-lg flex items-center justify-center text-6xl font-bold text-primary">
                  MD
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-pulse">
          <a href="#education" aria-label="Scroll Down">
            <ArrowDownCircle className="text-primary/70 w-10 h-10" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
