import React from 'react'

const skills = [
  'Node.js', 'Express', 'NestJS', 'Postgres', 'MongoDB',
  'Docker', 'Kubernetes', 'AWS', 'RESTful APIs',
  'Microservices', 'Jest', 'CI/CD'
]

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-6">About</h2>
        <p className="text-gray-400 max-w-3xl">
          Experienced and results-driven software developer with hands-on involvement across the full SDLC.
          Skilled in building scalable, maintainable backend systems and cloud-native applications.
        </p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {skills.map(skill => (
            <span key={skill} className="px-3 py-2 text-sm bg-white/5 rounded text-gray-200">{skill}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
