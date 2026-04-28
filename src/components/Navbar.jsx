import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll } from 'framer-motion'

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'volunteering', label: 'Volunteering' },
  { id: 'contact', label: 'Contact' }
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [mobileOpen, setMobileOpen] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    const unsub = scrollY.on('change', (v) => setScrolled(v > 80))
    return () => unsub()
  }, [scrollY])

  useEffect(() => {
    const sectionIds = LINKS.map((l) => l.id)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { threshold: 0.35, rootMargin: '-15% 0px -55% 0px' }
    )
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const handleNavClick = (id) => {
    setMobileOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? 'bg-paper/85 backdrop-blur-[2px] border-b border-rule'
            : 'bg-transparent'
        }`}
      >
        <nav
          aria-label="Primary"
          className="container-xl flex items-center justify-between px-5 md:px-8 h-16 md:h-20"
        >
          {/* Logo — serif italic monogram with revolving editorial mark */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Go to top"
            className="relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center outline-none"
          >
            <motion.svg
              viewBox="0 0 120 120"
              className="absolute inset-0 w-full h-full"
              aria-hidden="true"
              animate={{ rotate: 360 }}
              transition={{ duration: 22, ease: 'linear', repeat: Infinity }}
            >
              <defs>
                <path
                  id="nav-global-circle-path"
                  d="M 60,60 m -46,0 a 46,46 0 1,1 92,0 a 46,46 0 1,1 -92,0"
                />
              </defs>
              <text
                className="font-mono uppercase tracking-[0.18em] fill-graphite"
                fontSize="9"
                letterSpacing="1"
              >
                <textPath href="#nav-global-circle-path" startOffset="50%" textAnchor="middle">
                  · GLOBALLY · AVAILABLE · SAIM MAHMOOD ·
                </textPath>
              </text>
            </motion.svg>
            <span className="relative z-10 font-serif italic font-bold text-3xl tracking-tight text-ink ink-bleed">
              SM
            </span>
          </button>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1 font-mono text-[11px]">
            {LINKS.map((link) => {
              const isActive = active === link.id
              return (
                <li key={link.id} className="relative">
                  <button
                    onClick={() => handleNavClick(link.id)}
                    aria-label={`Go to ${link.label}`}
                    className={`relative px-3 py-2 uppercase tracking-[0.18em] transition-all duration-500 ${
                      isActive ? 'text-ink' : 'text-graphite hover:text-ink'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute left-3 right-3 -bottom-0.5 h-[1px] bg-ink"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                </li>
              )
            })}
          </ul>

          {/* Mobile toggle */}
          <button
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            className="md:hidden relative w-10 h-10 flex items-center justify-center text-ink"
            onClick={() => setMobileOpen((o) => !o)}
          >
            <span className="sr-only">Toggle menu</span>
            <div className="flex flex-col gap-1.5">
              <motion.span
                animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 6 : 0 }}
                className="block h-[1px] w-6 bg-ink"
              />
              <motion.span
                animate={{ opacity: mobileOpen ? 0 : 1 }}
                className="block h-[1px] w-6 bg-ink"
              />
              <motion.span
                animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -6 : 0 }}
                className="block h-[1px] w-6 bg-ink"
              />
            </div>
          </button>
        </nav>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 md:hidden bg-paper/97"
          >
            <ul className="h-full flex flex-col items-center justify-center gap-8 font-serif text-4xl italic text-ink">
              {LINKS.map((link, i) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, y: -20, filter: 'blur(6px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ delay: 0.08 * i + 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className="tracking-tight hover:text-graphite transition-colors duration-500 ink-bleed"
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
