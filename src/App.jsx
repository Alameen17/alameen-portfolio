import React from 'react'
import Nav from './components/Nav'
import MobileMenu from './components/MobileMenu'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="min-h-screen font-sans antialiased bg-[#05060a] text-white">
      <Nav onOpen={() => setOpen(v => !v)} open={open} />
      <MobileMenu open={open} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
