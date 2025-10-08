import React from 'react';
import { FiGithub, FiLinkedin, FiMenu, FiX } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';
import AvailabilityStatus from './AvailabilityStatus';

export default function Nav({ open, onOpen }) {
  return (
    <header className="fixed top-0 w-full bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800/50 z-50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4">
        {/* Availability Status - Desktop & Mobile */}
        <div className="flex justify-center mb-3">
          <AvailabilityStatus />
        </div>

        {/* Main Nav */}
        <div className="flex justify-between items-center">
          <a href="#" className="text-xl font-bold text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
            Al-ameen
          </a>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">About</a>
            <a href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Contact</a>
            <div className="flex items-center gap-4 ml-2">
              <ThemeToggle />
              <a href="https://github.com/Alameen17" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <FiGithub className="text-xl" />
              </a>
              <a href="https://www.linkedin.com/in/al-ameen-adekunle-2a085a1b5/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <FiLinkedin className="text-xl" />
              </a>
            </div>
          </nav>

          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button onClick={onOpen} className="text-gray-900 dark:text-white">
              {open ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}