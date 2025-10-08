import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const skills = [
    'Node.js', '.NET', 'C#', 'Postgres',
    'MongoDB', 'Docker', 'Kubernetes', 'AWS',
    'RESTful APIs', 'Microservices', 'Typescript', 'CI/CD'
  ];

  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About</h2>
          <p className="text-lg text-gray-400 max-w-3xl leading-relaxed mb-8">
            Experienced and results-driven software developer with hands-on involvement across the full SDLC. 
            Skilled in building scalable, maintainable backend systems and cloud-native applications.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {skills.map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="px-4 py-3 bg-gray-900/50 border border-gray-800/50 rounded-lg text-gray-300 text-sm hover:border-gray-700 transition-colors"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}