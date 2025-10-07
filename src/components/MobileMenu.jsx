import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

export default function MobileMenu({ open }) {
  if (!open) return null;
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-[73px] left-0 w-full bg-[#0a0a0a] border-b border-gray-800/50 z-40 md:hidden"
    >
      <div className="px-6 py-6 flex flex-col gap-4">
        <a href="#about" className="text-gray-300 hover:text-white transition-colors py-2">About</a>
        <a href="#projects" className="text-gray-300 hover:text-white transition-colors py-2">Projects</a>
        <a href="#contact" className="text-gray-300 hover:text-white transition-colors py-2">Contact</a>
        <div className="flex gap-4 pt-4 border-t border-gray-800">
          <a href="https://github.com/Alameen17" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <FiGithub className="text-xl" />
          </a>
          <a href="https://www.linkedin.com/in/al-ameen-adekunle-2a085a1b5/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <FiLinkedin className="text-xl" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}