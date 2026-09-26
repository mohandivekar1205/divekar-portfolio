import React from 'react';
import { ArrowUpRight, Code2, MessageSquare, Music } from 'lucide-react';

const projects = [
  { title: 'Spotify Clone Application', description: 'A full-featured music streaming application with authentication, playlist management, and audio playback.', tech: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'AWS'], icon: Music, tone: 'bg-accent' },
  { title: 'Microservice Chat Application', description: 'A real-time chat platform with message persistence, presence detection, and a resilient microservices architecture.', tech: ['Java', 'Spring Cloud', 'Kafka', 'Docker', 'WebSockets'], icon: MessageSquare, tone: 'bg-primary' },
  { title: 'AI Recommendation System', description: 'An intelligent recommendation engine that turns user behavior into personalized content suggestions.', tech: ['TensorFlow', 'Python', 'React', 'Flask', 'MongoDB'], icon: Code2, tone: 'bg-destructive' },
];

const Projects: React.FC = () => (
  <section id="projects" className="bg-background">
    <div className="section-container"><div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="eyebrow">Selected work</p><h2 className="section-title mt-4">Ideas, made real.</h2></div><p className="max-w-md text-lg leading-8 text-muted-foreground">A few projects that show how I think, build, and collaborate across the stack.</p></div>
      <div className="grid gap-5 lg:grid-cols-3">{projects.map(({ title, description, tech, icon: Icon, tone }) => <article key={title} className="feature-card flex min-h-[28rem] flex-col"><div className={`mb-10 flex size-14 items-center justify-center rounded-2xl ${tone} text-primary-foreground`}><Icon aria-hidden="true" /></div><h3 className="text-2xl font-semibold tracking-tight">{title}</h3><p className="mt-4 leading-7 text-muted-foreground">{description}</p><div className="mt-auto flex flex-wrap gap-2 pt-8">{tech.map((item) => <span key={item} className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">{item}</span>)}</div><a href="#contact" className="mt-7 inline-flex items-center gap-2 font-semibold text-primary hover:underline">Discuss a similar project <ArrowUpRight size={16} aria-hidden="true" /></a></article>)}</div>
    </div>
  </section>
);

export default Projects;
