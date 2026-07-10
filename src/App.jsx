import StarsCanvas from './components/StarsCanvas.jsx'
import Cursor from './components/Cursor.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import WhatIBuild from './components/WhatIBuild.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <StarsCanvas />
      <div className="grid-overlay" />
      <div className="nebula" />
      <div className="aurora" />
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <About />
        <WhatIBuild />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
