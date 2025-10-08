import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar } from 'react-icons/fi';

export default function Experience() {
  const experiences = [
    {
      role: 'Senior Backend Developer',
      company: 'Tech Company',
      period: '2023 - Present',
      description: 'Led development of microservices architecture handling 100K+ daily requests. Reduced API response time by 60% through caching optimization.',
      achievements: [
        'Architected and deployed 5+ microservices on Kubernetes',
        'Implemented CI/CD pipelines reducing deployment time by 75%',
        'Mentored 3 junior developers in best practices'
      ]
    },
    {
      role: 'Backend Developer',
      company: 'Startup Inc',
      period: '2021 - 2023',
      description: 'Built RESTful APIs and database schemas for a rapidly growing SaaS platform. Collaborated with frontend team to deliver features.',
      achievements: [
        'Designed database architecture supporting 50K+ users',
        'Integrated OAuth2 authentication with multiple providers',
        'Reduced database query time by 40% through indexing'
      ]
    },
    {
      role: 'Junior Developer',
      company: 'Ambrey Limited',
      period: '2020 - 2021',
      description: 'Developed backend services for client projects using Node.js and Express. Worked on API integrations and database design.',
      achievements: [
        'Built and maintained 10+ client REST APIs',
        'Implemented automated testing achieving 85% coverage',
        'Collaborated with cross-functional teams on 15+ projects'
      ]
    }
  ];

  return (
    <section id="experience" className="py-32 px-6 bg-gradient-to-b from-transparent to-gray-900/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Experience</h2>
          <p className="text-gray-400 mb-12">My professional journey in software development</p>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />

            <div className="space-y-12">
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-8 md:pl-20"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-8 top-2 w-4 h-4 bg-blue-500 rounded-full border-4 border-[#0a0a0a] transform -translate-x-[7px]" />

                  <div className="bg-gray-900/30 border border-gray-800/50 rounded-xl p-6 hover:border-gray-700 transition-all">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                        <div className="flex items-center gap-2 text-blue-400 font-medium">
                          <FiBriefcase className="text-sm" />
                          {exp.company}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 mt-2 md:mt-0">
                        <FiCalendar className="text-sm" />
                        {exp.period}
                      </div>
                    </div>

                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-2">
                      {exp.achievements.map((achievement, j) => (
                        <div key={j} className="flex items-start gap-2">
                          <span className="text-green-400 mt-1">✓</span>
                          <span className="text-gray-300 text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}