
import React, { useEffect } from 'react';
import { Calendar, Award, GraduationCap, Code } from 'lucide-react';

const Education: React.FC = () => {
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
    <section id="education" className="py-20 bg-background relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute right-0 top-0 h-80 w-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute left-0 bottom-0 h-80 w-80 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto">Education & Certifications</h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-3xl mx-auto">
            My academic journey and professional achievements that have shaped my expertise
          </p>
        </div>
        
        {/* Education */}
        <h3 className="text-xl font-bold mb-8 border-b border-border pb-2">Education</h3>
        <div className="mb-16">
          <div className="glass rounded-xl p-8 reveal card-hover">
            <div className="flex items-start">
              <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div className="ml-5">
                <h3 className="text-xl font-bold text-foreground">Master of Computer Science</h3>
                <p className="text-primary/80 font-medium">University Name</p>
                <div className="flex items-center mt-2 text-sm text-foreground/70">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>2021 - 2023</span>
                </div>
                <p className="mt-4 text-foreground/80">
                  Completed a comprehensive Master's program with a focus on advanced programming concepts, 
                  software engineering, and system design. Maintained a distinguished academic record 
                  throughout the program.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Certifications */}
        <h3 className="text-xl font-bold mb-8 border-b border-border pb-2">Certifications & Achievements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass rounded-xl p-8 reveal card-hover">
            <div className="flex items-start">
              <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div className="ml-5">
                <h3 className="text-xl font-bold text-foreground">Oracle Certified Java Developer</h3>
                <p className="text-primary/80 font-medium">Oracle Corporation</p>
                <div className="flex items-center mt-2 text-sm text-foreground/70">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>2023</span>
                </div>
                <p className="mt-4 text-foreground/80">
                  Achieved Oracle's professional certification that validates extensive knowledge in Java programming, 
                  object-oriented design principles, and enterprise application development using Java technologies.
                </p>
              </div>
            </div>
          </div>
          
          <div className="glass rounded-xl p-8 reveal card-hover" style={{ transitionDelay: '0.2s' }}>
            <div className="flex items-start">
              <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <div className="ml-5">
                <h3 className="text-xl font-bold text-foreground">Data Structures & Algorithms</h3>
                <p className="text-primary/80 font-medium">Competitive Programming</p>
                <div className="flex items-center mt-2 text-sm text-foreground/70">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>2022 - Present</span>
                </div>
                <p className="mt-4 text-foreground/80">
                  Successfully solved 300+ DSA problems in Java across multiple platforms, demonstrating strong 
                  problem-solving skills, algorithmic thinking, and efficient code implementation.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center reveal">
          <p className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-lg font-medium">
            Continuously learning and expanding my skill set with online courses and self-directed learning
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
