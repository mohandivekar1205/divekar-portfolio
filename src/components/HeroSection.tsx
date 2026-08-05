import React from 'react';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection: React.FC = () => (
  <section id="about" className="relative overflow-hidden bg-background">
    <div className="section-container grid min-h-[calc(100vh-5rem)] items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="reveal flex flex-col items-start gap-7">
        <p className="eyebrow">Java developer · builder · problem solver</p>
        <h1 className="max-w-4xl text-5xl font-semibold leading-[1.03] tracking-[-0.06em] sm:text-7xl lg:text-[5.7rem]">Building useful software for the <span className="text-primary">real world.</span></h1>
        <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">I&apos;m Mohan Divekar, a Java developer focused on microservices, full-stack applications, and thoughtful digital experiences that make complex things feel simple.</p>
        <div className="flex flex-wrap gap-3"><a href="#projects" className="btn-primary">Explore my work <ArrowUpRight className="ml-2" aria-hidden="true" /></a><a href="#contact" className="btn-secondary">Start a conversation</a></div>
        <div className="flex items-center gap-5 pt-3" aria-label="Social links"><a href="#contact" className="text-muted-foreground transition hover:text-primary" aria-label="Email Mohan"><Mail /></a><a href="#projects" className="text-muted-foreground transition hover:text-primary" aria-label="View GitHub projects"><Github /></a><a href="#experience" className="text-muted-foreground transition hover:text-primary" aria-label="View LinkedIn experience"><Linkedin /></a></div>
      </div>
      <div className="reveal relative mx-auto w-full max-w-md lg:max-w-none">
        <div className="absolute -left-6 top-10 size-20 rounded-full bg-accent/80 sm:-left-10 sm:size-28" />
        <div className="absolute -right-4 bottom-6 size-24 rounded-[2rem] bg-destructive/80 sm:-right-8 sm:size-36" />
        <div className="relative flex aspect-square items-center justify-center rounded-[3rem] bg-secondary p-8 sm:p-12">
          <div className="flex aspect-square w-full items-center justify-center rounded-full border-[18px] border-primary bg-background shadow-2xl sm:border-[24px]"><div className="flex aspect-square w-3/4 items-center justify-center rounded-full bg-foreground text-6xl font-semibold tracking-[-0.08em] text-background sm:text-8xl">MD</div></div>
          <div className="absolute bottom-8 left-8 rounded-2xl bg-background px-4 py-3 shadow-lg sm:bottom-10 sm:left-10"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Currently</p><p className="mt-1 font-semibold">Learning & shipping</p></div>
        </div>
      </div>
      <a href="#education" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-sm font-medium text-muted-foreground md:flex">Scroll to explore <ArrowDown size={16} aria-hidden="true" /></a>
    </div>
  </section>
);

export default HeroSection;
