import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiGithub, FiExternalLink } from 'react-icons/fi';
import { SiNodedotjs, SiPostgresql, SiRedis, SiKubernetes, SiDocker, SiJest, SiTypescript, SiExpress } from 'react-icons/si';

export default function Projects() {
  const projects = [
    {
      name: 'Scalable Orders API',
      desc: 'Microservices-based orders system with event-driven architecture, PostgreSQL, and Redis caching.',
      impact: 'Processes 50K+ orders daily with 99.9% uptime',
      github: 'https://github.com/Alameen17',
      demo: null,
      tags: [
        { name: 'Node.js', icon: <SiNodedotjs /> },
        { name: 'PostgreSQL', icon: <SiPostgresql /> },
        { name: 'Redis', icon: <SiRedis /> },
        { name: 'Docker', icon: <SiDocker /> },
      ]
    },
    {
      name: 'Cloud-native Auth Service',
      desc: 'OAuth2 / JWT based auth service built for horizontal scalability.',
      impact: 'Reduced authentication latency by 60%',
      github: 'https://github.com/Alameen17',
      demo: null,
      tags: [
        { name: 'Express', icon: <SiExpress /> },
        { name: 'TypeScript', icon: <SiTypescript /> },
        { name: 'Kubernetes', icon: <SiKubernetes /> },
        { name: 'Jest', icon: <SiJest /> },
      ]
    },
    {
      name: 'Documentation & SDKs',
      desc: 'Technical writing, OpenAPI-first design, and generated SDKs for integrations.',
      impact: 'Improved developer onboarding time by 70%',
      github: 'https://github.com/Alameen17',
      demo: null,
      tags: [
        { name: 'Node.js', icon: <SiNodedotjs /> },
        { name: 'TypeScript', icon: <SiTypescript /> },
      ]
    },
  ];

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Selected Projects</h2>
          <p className="text-gray-400 mb-12">Some of my recent work that I'm proud of</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.15)' }}
                className="group block p-6 bg-gray-900/30 border border-gray-800/50 rounded-xl hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {project.name}
                  </h3>
                  <div className="flex gap-2">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FiGithub className="text-xl" />
                    </a>
                    {project.demo && (
                      <a 
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FiExternalLink className="text-xl" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-gray-400 leading-relaxed mb-3">
                  {project.desc}
                </p>

                <div className="mb-4 px-3 py-2 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                  <p className="text-blue-300 text-sm font-medium">
                    💡 {project.impact}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span 
                      key={tag.name}
                      className="inline-flex items-center gap-1 px-2 py-1 bg-gray-800/50 border border-gray-700/50 rounded text-gray-300 text-xs"
                    >
                      {tag.icon}
                      {tag.name}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-gray-500 group-hover:text-gray-300 transition-colors text-sm"
                >
                  View Project <FiArrowRight />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}