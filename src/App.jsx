import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Volunteering from './components/Volunteering'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'

function SectionDivider() {
  return (
    <div className="container-xl px-5 md:px-8">
      <div className="flex items-center gap-4 py-2">
        <div className="flex-1 h-px bg-rule" />
        <span aria-hidden="true" className="font-serif italic text-pencil text-sm">§</span>
        <div className="flex-1 h-px bg-rule" />
      </div>
    </div>
  )
}

export default function App() {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="app"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="min-h-screen bg-paper text-ink font-sans antialiased"
      >
        <CustomCursor />
        <Navbar />
        <main>
          <Hero />
          <SectionDivider />
          <About />
          <SectionDivider />
          <Projects />
          <SectionDivider />
          <Experience />
          <SectionDivider />
          <Skills />
          <SectionDivider />
          <Volunteering />
          <SectionDivider />
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </AnimatePresence>
  )
}
