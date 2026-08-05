import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

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
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <a href="#about" className="flex items-center gap-3" onClick={closeMenu} aria-label="Mohan Divekar home">
          <span className="relative flex size-8 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground after:absolute after:-right-1 after:bottom-0 after:size-2 after:rounded-full after:bg-accent">M</span>
          <span className="font-semibold tracking-tight">Mohan Divekar</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {links.map((link) => <a key={link.name} href={link.href} className="text-sm font-medium text-muted-foreground transition hover:text-foreground">{link.name}</a>)}
          <a href="#contact" className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:shadow-lg">Let&apos;s talk</a>
        </nav>

        <button type="button" className="rounded-full p-2 text-foreground transition hover:bg-secondary md:hidden" onClick={() => setIsMenuOpen((open) => !open)} aria-expanded={isMenuOpen} aria-controls="mobile-navigation" aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}>
          {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      {isMenuOpen && <nav id="mobile-navigation" className="border-t border-border bg-background px-5 py-5 md:hidden" aria-label="Mobile navigation"><div className="flex flex-col gap-4">{[...links, { name: 'Contact', href: '#contact' }].map((link) => <a key={link.name} href={link.href} onClick={closeMenu} className="font-medium text-muted-foreground hover:text-foreground">{link.name}</a>)}</div></nav>}
    </header>
  );
};

export default Header;
