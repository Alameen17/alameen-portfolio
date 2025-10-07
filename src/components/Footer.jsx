import React from 'react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="border-t border-gray-800/50 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-sm">
          © 2025 Al-ameen Adekunle. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="https://github.com/Alameen17" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">
            <FiGithub />
          </a>
          <a href="https://www.linkedin.com/in/al-ameen-adekunle-2a085a1b5/" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">
            <FiLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}