import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index: React.FC = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Header />
    <main>
      <HeroSection />
      <Education />
      <Projects />
      <Experience />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default Index;
