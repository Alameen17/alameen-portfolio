import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl text-center"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-blue-400 font-medium mb-4"
        >
          Backend Developer
        </motion.div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Hi, I'm Al-ameen<br />Adekunle
        </h1>

        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Experienced backend developer with hands-on expertise in building scalable, cloud-native applications and RESTful APIs.
        </p>

        <div className="flex gap-4 justify-center mt-8">
          <a 
            href="#projects" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors"
          >
            View Projects <FiArrowRight />
          </a>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 px-6 py-3 border border-gray-700 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </motion.div>
    </section>
  );
}