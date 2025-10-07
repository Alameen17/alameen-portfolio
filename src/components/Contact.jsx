import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = React.useState({ name: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-8 md:p-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get in touch</h2>
          <p className="text-gray-400 text-lg mb-8">
            Interested in collaborating? I'm available for backend and cloud-native work.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <FiMail className="text-blue-400" /> Email
                </h4>
                <a href="mailto:alameen@example.com" className="text-gray-300 hover:text-white transition-colors">
                  alameen@example.com
                </a>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-3">Social</h4>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/Alameen17" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <FiGithub className="text-2xl" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/al-ameen-adekunle-2a085a1b5/" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <FiLinkedin className="text-2xl" />
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Name</label>
                <input 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-colors" 
                  placeholder="Your name" 
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Message</label>
                <textarea 
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-colors resize-none" 
                  rows={4} 
                  placeholder="Brief message" 
                />
              </div>
              <button 
                onClick={handleSubmit}
                className="w-full md:w-auto px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors"
              >
                Send message
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}