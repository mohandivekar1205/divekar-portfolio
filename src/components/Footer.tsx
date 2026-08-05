import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => <footer className="border-t border-border bg-secondary/60"><div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10"><div><a href="#about" className="font-semibold tracking-tight">Mohan Divekar</a><p className="mt-1 text-sm text-muted-foreground">Java developer building for the web.</p></div><div className="flex items-center gap-6 text-sm font-medium text-muted-foreground"><a href="#projects" className="hover:text-foreground">Projects</a><a href="#contact" className="hover:text-foreground">Contact</a><button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="rounded-full bg-background p-3 text-foreground shadow-sm transition hover:bg-primary hover:text-primary-foreground" aria-label="Scroll to top"><ArrowUp size={17} aria-hidden="true" /></button></div><p className="text-xs text-muted-foreground md:order-[-1]">© {new Date().getFullYear()} Mohan Divekar</p></div></footer>;

export default Footer;
