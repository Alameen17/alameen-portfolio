import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    name: 'Scalable Orders API',
    desc: 'Microservices-based orders system with event-driven architecture, PostgreSQL, and Redis caching.',
    link: 'https://github.com/Alameen17',
  },
  {
    name: 'Cloud-native Auth Service',
    desc: 'OAuth2 / JWT based auth service built for horizontal scalability.',
    link: 'https://github.com/Alameen17',
  },
  {
    name: 'Documentation & SDKs',
    desc: 'Technical writing, OpenAPI-first design, and generated SDKs for integrations.',
    link: 'https://github.com/Alameen17',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-transparent to-[#04050a]/60">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white">Selected Projects</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {projects.map(p => (
            <motion.a key={p.name} whileHover={{ y: -6 }} href={p.link} target="_blank" rel="noreferrer" className="block p-6 bg-[#071126] rounded-lg border border-white/6">
              <h3 className="text-white font-semibold">{p.name}</h3>
              <p className="mt-2 text-gray-300 text-sm">{p.desc}</p>
              <span className="mt-3 block text-gray-400 text-sm">View on GitHub →</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
