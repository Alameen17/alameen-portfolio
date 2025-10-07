import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

export default function Projects() {
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Selected Projects</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.a
                key={project.name}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="group block p-6 bg-gray-900/30 border border-gray-800/50 rounded-xl hover:border-gray-700 transition-all"
              >
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.name}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  {project.desc}
                </p>
                <span className="inline-flex items-center gap-2 text-gray-500 group-hover:text-gray-300 transition-colors">
                  View on GitHub <FiArrowRight />
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}