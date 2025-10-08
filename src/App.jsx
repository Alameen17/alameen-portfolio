import React from 'react';
import { ThemeProvider } from './components/ThemeContext';
import LoadingScreen from './components/LoadingScreen3D';
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
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulate loading time (minimum 2 seconds for effect)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <LoadingScreen isLoading={isLoading} />
      
      <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-white transition-colors duration-300">
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
    </ThemeProvider>
  );
}