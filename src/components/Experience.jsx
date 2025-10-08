import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar } from 'react-icons/fi';

export default function Experience() {
  const experiences = [
    {
      role: 'Backend Developer',
      company: 'The TechSpace',
      period: '2024 - Present',
      description: 'Engineered scalable backend applications using C# and .NET Core, enabling business-critical services to handle increased user loads with minimal latency.',
      achievements: [
        'Built a Blazor Server web application using C# and .NET Core to streamline internal operations, reducing admin processing time by 60%, which improved task turnaround and reduced manual workload.',
        'Integrated real-time monitoring with AWS CloudWatch and Application Insights, reducing downtime by 15% and enabling proactive incident response.',
        'Built serverless applications using AWS Lambda, lowering infrastructure costs by 20% while increasing performance for intermittent workloads.'
      ]
    },
    {
      role: 'Backend Developer',
      company: 'Natview Foundation',
      period: '2022 - 2023',
      description: 'Developed and deployed RESTful APIs using ASP.NET Core, hosted by Azure App Services, to support seamless data exchange between client and server systems.',
      achievements: [
        'Led the migration from a monolithic architecture to microservices, deploying services to Azure Kubernetes Service (AKS), which accelerated development cycles and reduced deployment-related issues by 40%.',
        'Automated backend testing pipelines using Azure DevOps and xUnit, reducing manual QA efforts by 30% and improving release confidence across development sprints.',
        'Utilized C++ modules for performance-critical components in the backend (e.g., data processing and transformation services), improving execution speed by 20% compared to equivalent C# implementations.'
      ]
    },
    {
      role: 'Backend Developer (Intern)',
      company: 'Ambrey Limited',
      period: '2021 - 2022',
      description: 'Contributed to process improvements regarding technical designs, user experience, and functional perspectives.',
      achievements: [
        'Transformed design mockups into functional backend features, integrating SOAP web services.',
        'Enhanced data retrieval efficiency by optimizing database schemas for MySQL and MongoDB.',
        'Contributed to the development of user-friendly web applications by integrating backend functionality using React.js and Angular.'
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