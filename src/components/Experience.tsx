
import React, { useEffect } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
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
    <section id="experience" className="py-20 bg-background relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute left-0 top-1/3 h-80 w-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute right-0 bottom-1/3 h-80 w-80 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto">Professional Experience</h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-3xl mx-auto">
            My journey in the tech industry and the professional skills I've developed
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-primary/20 pl-8 pb-8 reveal">
            <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary"></div>
            <div className="glass rounded-xl p-8 card-hover">
              <div className="flex items-start">
                <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="ml-5">
                  <h3 className="text-xl font-bold text-foreground">Java Developer Intern</h3>
                  <p className="text-primary/80 font-medium">Company Name</p>
                  
                  <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-foreground/70">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>2022 - 2023 (1 year)</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>Location</span>
                    </div>
                  </div>
                  
                  <p className="mt-6 text-foreground/80">
                    Gained valuable hands-on experience in Java development during a comprehensive one-year 
                    internship, working with enterprise applications and modern development practices.
                  </p>
                  
                  <div className="mt-6 space-y-4">
                    <div>
                      <h4 className="font-semibold">Key Responsibilities:</h4>
                      <ul className="mt-2 space-y-2 text-foreground/80">
                        <li className="flex items-start">
                          <span className="inline-block h-1.5 w-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          <span>Developed and maintained Java-based backend services for enterprise applications</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-block h-1.5 w-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          <span>Collaborated with senior developers to implement new features and fix bugs</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-block h-1.5 w-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          <span>Participated in code reviews and agile development processes</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-block h-1.5 w-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          <span>Assisted in the design and implementation of RESTful APIs</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold">Technologies Used:</h4>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">Java</span>
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">Spring Boot</span>
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">Hibernate</span>
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">MySQL</span>
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">Git</span>
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">Jenkins</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
