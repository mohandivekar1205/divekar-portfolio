import React, { useState } from 'react';
import { ArrowDownToLine, Menu, X } from 'lucide-react';

const links = [
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-6">
      <div className="pointer-events-auto mx-auto flex max-w-6xl items-center justify-between rounded-full border border-border/80 bg-background/95 p-2 shadow-[0_10px_32px_hsl(var(--foreground)/0.12)] backdrop-blur-xl">
        <a href="#about" className="flex shrink-0 items-center gap-2 rounded-full px-3 py-2.5 transition hover:bg-secondary" onClick={closeMenu} aria-label="Mohan Divekar home">
          <span className="relative flex size-8 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground after:absolute after:-right-1 after:bottom-0 after:size-2 after:rounded-full after:bg-accent">M</span>
          <span className="hidden font-semibold tracking-tight sm:inline">Mohan Divekar</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {links.map((link, index) => (
            <a key={link.name} href={link.href} className={`rounded-full px-4 py-3 text-sm font-medium transition hover:bg-secondary hover:text-foreground ${index === 0 ? 'bg-secondary text-foreground' : 'text-muted-foreground'}`}>
              {link.name}
            </a>
          ))}
          <a href="#contact" className="ml-1 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
            <ArrowDownToLine aria-hidden="true" />
            Download CV
          </a>
        </nav>

        <button type="button" className="rounded-full p-3 text-foreground transition hover:bg-secondary md:hidden" onClick={() => setIsMenuOpen((open) => !open)} aria-expanded={isMenuOpen} aria-controls="mobile-navigation" aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}>
          {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      {isMenuOpen && <nav id="mobile-navigation" className="pointer-events-auto mx-auto mt-2 max-w-6xl rounded-3xl border border-border/80 bg-background p-4 shadow-xl md:hidden" aria-label="Mobile navigation"><div className="flex flex-col gap-1">{[...links, { name: 'Contact', href: '#contact' }].map((link) => <a key={link.name} href={link.href} onClick={closeMenu} className="rounded-2xl px-4 py-3 font-medium text-muted-foreground transition hover:bg-secondary hover:text-foreground">{link.name}</a>)}</div></nav>}
    </header>
  );
};

export default Header;
