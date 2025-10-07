import React from 'react'
import { FiGithub, FiLinkedin } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-gray-400">
        <div>© {new Date().getFullYear()} Al-ameen Adekunle</div>
        <div className="flex gap-4 mt-3 md:mt-0">
          <a href="https://github.com/Alameen17" target="_blank" rel="noreferrer" className="text-xl"><FiGithub /></a>
          <a href="https://www.linkedin.com/in/al-ameen-adekunle-2a085a1b5/" target="_blank" rel="noreferrer" className="text-xl"><FiLinkedin /></a>
        </div>
      </div>
    </footer>
  )
}
