import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = React.useState({ name: '', email: '', message: '' });
  const [status, setStatus] = React.useState({ type: '', message: '' });
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      // Replace these with your EmailJS credentials
      await emailjs.send(
        'service_i43u76c',      // service id Get from EmailJS dashboard
        'template_0h2spqw',     // template id Get from EmailJS dashboard
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'r2tL5qu5oKFhHnp1A'       // Public key Get from EmailJS dashboard
      );

      setStatus({ type: 'success', message: 'Message sent successfully!' });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
      console.error('EmailJS error:', error);
    } finally {
      setLoading(false);
    }
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
                <a href="mailto:alameenadekunle029@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                  alameenadekunle029@gmail.com
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
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Email</label>
                <input 
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-colors" 
                  placeholder="your@email.com"
                  required
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
                  required
                />
              </div>
              
              {status.message && (
                <div className={`p-3 rounded-lg text-sm ${
                  status.type === 'success' 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/50' 
                    : 'bg-red-500/20 text-red-400 border border-red-500/50'
                }`}>
                  {status.message}
                </div>
              )}

              <button 
                onClick={handleSubmit}
                disabled={loading}
                className="w-full md:w-auto px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send message'}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}