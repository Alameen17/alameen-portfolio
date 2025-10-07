import React from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin } from 'react-icons/fi'

export default function MobileMenu({ open }) {
  const social = [
    { icon: <FiGithub />, label: 'GitHub', href: 'https://github.com/Alameen17' },
    { icon: <FiLinkedin />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/al-ameen-adekunle-2a085a1b5/' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: open ? 1 : 0, y: open ? 0 : -10 }}
      className={`md:hidden bg-[#0b1220]/90 backdrop-blur-sm text-gray-200 absolute w-full left-0 top-16 z-30`}
      style={{ display: open ? 'block' : 'none' }}
    >
      <div className="flex flex-col gap-4 px-6 py-6">
        <a href="#about" className="py-2">About</a>
        <a href="#projects" className="py-2">Projects</a>
        <a href="#contact" className="py-2">Contact</a>
        <div className="flex gap-4 pt-2">
          {social.map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="text-2xl">
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
