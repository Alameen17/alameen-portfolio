import React from 'react'
import { FiGithub, FiLinkedin } from 'react-icons/fi'

export default function Contact() {
  const social = [
    { icon: <FiGithub />, label: 'GitHub', href: 'https://github.com/Alameen17' },
    { icon: <FiLinkedin />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/al-ameen-adekunle-2a085a1b5/' },
  ]

  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-[#071126] p-8 rounded-lg border border-white/6">
          <h2 className="text-2xl font-bold text-white">Get in touch</h2>
          <p className="mt-2 text-gray-400">Interested in collaborating? I’m available for backend and cloud-native work.</p>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-white font-semibold">Email</h4>
              <p className="text-gray-300">alameen@example.com</p>
              <div className="flex gap-3 mt-3">
                {social.map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="text-2xl text-gray-300">{s.icon}</a>
                ))}
              </div>
            </div>

            <form className="space-y-4">
              <div>
                <label className="text-sm text-gray-300">Name</label>
                <input className="mt-1 w-full bg-transparent border border-white/6 rounded px-3 py-2 text-white" placeholder="Your name" />
              </div>
              <div>
                <label className="text-sm text-gray-300">Message</label>
                <textarea className="mt-1 w-full bg-transparent border border-white/6 rounded px-3 py-2 text-white" rows={4} placeholder="Brief message" />
              </div>
              <button type="submit" className="inline-flex items-center gap-2 px-4 py-2 rounded bg-white/10 text-white">Send message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
