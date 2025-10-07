import React, { useState } from "react";
import { FiGithub, FiLinkedin, FiMenu } from "react-icons/fi";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">Al-ameen Adekunle</div>

      <nav className="hidden md:flex gap-6">
        <a href="#projects" className="hover:text-blue-400">Projects</a>
        <a href="#contact" className="hover:text-blue-400">Contact</a>
        <a href="https://github.com/Alameen17" target="_blank" rel="noopener noreferrer">
          <FiGithub className="inline text-2xl" />
        </a>
        <a href="https://www.linkedin.com/in/al-ameen-adekunle-2a085a1b5/" target="_blank" rel="noopener noreferrer">
          <FiLinkedin className="inline text-2xl" />
        </a>
      </nav>

      {/* Mobile menu button */}
      <button
        className="md:hidden p-2"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <FiMenu className="text-2xl" />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-800 p-4 flex flex-col gap-4 md:hidden">
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <a href="https://github.com/Alameen17" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/al-ameen-adekunle-2a085a1b5/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      )}
    </header>
  );
}
