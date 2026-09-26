import React from 'react';
import { Award, Calendar, Code, GraduationCap } from 'lucide-react';

const Education: React.FC = () => (
  <section id="education" className="bg-secondary/60">
    <div className="section-container">
      <div className="mb-14 max-w-2xl"><p className="eyebrow">The foundations</p><h2 className="section-title mt-4">Curiosity is part of the job.</h2><p className="mt-5 text-lg leading-8 text-muted-foreground">A strong academic base, a habit of learning, and a steady appetite for better ways to solve problems.</p></div>
      <div className="grid gap-5 lg:grid-cols-3">
        <article className="feature-card lg:col-span-2"><div className="flex items-start gap-5"><div className="rounded-2xl bg-primary p-3 text-primary-foreground"><GraduationCap aria-hidden="true" /></div><div><p className="eyebrow">2021 — 2023</p><h3 className="mt-2 text-2xl font-semibold">Master of Computer Science</h3><p className="mt-1 font-medium text-primary">University Name</p><p className="mt-5 max-w-2xl leading-7 text-muted-foreground">Focused on advanced programming concepts, software engineering, system design, and the practical discipline required to build reliable applications.</p></div></div></article>
        <article className="feature-card bg-primary text-primary-foreground"><Award aria-hidden="true" className="mb-10" /><p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary-foreground/70">Certified in 2023</p><h3 className="mt-3 text-2xl font-semibold">Oracle Certified Java Developer</h3><p className="mt-4 leading-7 text-primary-foreground/80">Professional validation of Java programming, object-oriented design, and enterprise development skills.</p></article>
        <article className="feature-card"><Code className="mb-10 text-primary" aria-hidden="true" /><p className="eyebrow">2022 — Present</p><h3 className="mt-3 text-2xl font-semibold">Data Structures & Algorithms</h3><p className="mt-4 leading-7 text-muted-foreground">300+ problems solved in Java across multiple platforms, sharpening algorithmic thinking and efficient implementation.</p></article>
        <article className="feature-card lg:col-span-2"><div className="flex flex-wrap items-center justify-between gap-4"><div><p className="eyebrow">Always in progress</p><h3 className="mt-2 text-2xl font-semibold">Learning never ships a final version.</h3></div><Calendar className="text-primary" aria-hidden="true" /></div><p className="mt-5 max-w-2xl leading-7 text-muted-foreground">I keep expanding my toolkit through hands-on projects, online courses, and the kind of self-directed learning that turns ideas into working software.</p></article>
      </div>
    </div>
  </section>
);

export default Education;
