
import React, { useEffect, useState } from 'react';
import { ExternalLink, Github, Music, MessageSquare, Code } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  icon: React.ReactNode;
  color: string;
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      title: "Spotify Clone Application",
      description: "A full-featured music streaming application with user authentication, playlist management, and audio playback capabilities.",
      technologies: ["Java", "Spring Boot", "React", "PostgreSQL", "AWS"],
      icon: <Music className="h-6 w-6" />,
      color: "from-green-500/20 to-green-500/10"
    },
    {
      id: 2,
      title: "Microservice Chat Application",
      description: "Real-time chat platform built with a microservices architecture, featuring message persistence, user presence detection, and end-to-end encryption.",
      technologies: ["Java", "Spring Cloud", "Kafka", "Docker", "Kubernetes", "WebSockets"],
      icon: <MessageSquare className="h-6 w-6" />,
      color: "from-blue-500/20 to-blue-500/10"
    }
  ]);

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
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-secondary/50 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 h-64 w-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 h-64 w-64 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto">Featured Projects</h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-3xl mx-auto">
            A showcase of my technical skills and problem-solving abilities
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="glass rounded-xl overflow-hidden card-hover reveal" 
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className={`h-3 w-full bg-gradient-to-r ${project.color}`}></div>
              <div className="p-8">
                <div className="flex justify-between items-start">
                  <div className="flex items-center">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${project.color}`}>
                      {project.icon}
                    </div>
                    <h3 className="text-xl font-bold ml-4">{project.title}</h3>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 text-foreground/70 hover:text-primary transition-colors duration-300">
                      <Github className="h-5 w-5" />
                    </button>
                    <button className="p-2 text-foreground/70 hover:text-primary transition-colors duration-300">
                      <ExternalLink className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <p className="mt-6 text-foreground/80">
                  {project.description}
                </p>
                
                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-foreground/60 mb-3">TECHNOLOGIES</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center reveal">
          <a href="#" className="btn-primary">
            <Code className="mr-2 h-4 w-4" />
            View More Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
