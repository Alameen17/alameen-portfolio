import React from 'react';
import Nav from './components/Nav';
import MobileMenu from './components/MobileMenu';
import ScrollProgress from './components/ScrollProgress';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <ScrollProgress />
      <Nav onOpen={() => setOpen(v => !v)} open={open} />
      <MobileMenu open={open} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}