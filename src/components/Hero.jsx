import { motion } from 'framer-motion'
import useTypewriter from '../hooks/useTypewriter'
import profilePhoto from '../assets/profile.jpg'

const TYPE_PHRASES = [
  'Building Intelligent Systems',
  'End-to-End AI Pipelines',
  'Scalable ML Solutions',
  'Real-Time Inference at Scale'
]

const EASE = [0.16, 1, 0.3, 1]

function GitHubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 007.86 10.94c.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.87-1.54-3.87-1.54-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.2-3.1-.12-.3-.52-1.49.11-3.1 0 0 .98-.32 3.2 1.18a11.1 11.1 0 015.83 0c2.22-1.5 3.2-1.18 3.2-1.18.63 1.61.23 2.8.11 3.1.75.81 1.2 1.84 1.2 3.1 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.67.8.56A11.5 11.5 0 0023.5 12C23.5 5.73 18.27.5 12 .5z" />
    </svg>
  )
}

function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0z" />
    </svg>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  )
}

export default function Hero() {
  const typed = useTypewriter(TYPE_PHRASES)

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center overflow-hidden pt-24 md:pt-28"
    >
      {/* Background — static subtle radial gradient only */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 30% 40%, rgba(0, 212, 255, 0.06), transparent 60%), radial-gradient(ellipse 60% 50% at 70% 60%, rgba(139, 92, 246, 0.04), transparent 50%)'
          }}
        />
        {/* Vignette */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 40%, rgba(10, 15, 30, 0.7) 100%)'
          }}
        />
      </div>

      <div className="container-xl px-5 md:px-8 w-full">
        {/* Label above name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
          className="font-mono text-[11px] uppercase tracking-[0.25em] text-text-muted mb-6"
        >
          Full-Stack AI/ML Engineer
        </motion.div>

        {/* Name + Photo row */}
        <div className="flex flex-col md:flex-row md:items-end md:gap-10 mb-8">
          {/* Name — massive Playfair italic */}
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.2, ease: EASE }}
            className="font-playfair italic font-bold text-7xl sm:text-8xl md:text-[9rem] leading-[0.85] tracking-tight hero-name-glow text-text-primary"
          >
            Saim
            <br className="md:hidden" />
            <span className="md:ml-6"> Mahmood</span>
          </motion.h1>

          {/* Photo placeholder — positioned right of name on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1, y: [0, -8, 0], rotate: [0, 0.6, 0] }}
            transition={{ duration: 6, delay: 0.5, ease: 'easeInOut', repeat: Infinity }}
            className="relative mt-8 md:mt-0 md:mb-4 flex-shrink-0 self-center md:self-end"
          >
            {/* Soft rotating aura for depth */}
            <motion.div
              aria-hidden="true"
              className="absolute -inset-5 rounded-[2rem] opacity-50"
              style={{
                background: 'conic-gradient(from 0deg, rgba(56,189,248,0.34), rgba(168,85,247,0.25), rgba(244,114,182,0.2), rgba(56,189,248,0.34))',
                filter: 'blur(16px)'
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 16, ease: 'linear', repeat: Infinity }}
            />
            {/* Thin rotating accent ring */}
            <motion.div
              aria-hidden="true"
              className="absolute -inset-2 rounded-[1.95rem] border border-white/20"
              style={{
                maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)'
              }}
              animate={{ rotate: -360 }}
              transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
            />
            {/* Frame */}
            <motion.div
              whileHover={{ scale: 1.035, y: -4 }}
              transition={{ type: 'spring', stiffness: 180, damping: 14 }}
              className="relative w-[235px] h-[235px] sm:w-[270px] sm:h-[270px] md:w-[315px] md:h-[315px] rounded-[1.75rem] border border-white/20 overflow-hidden bg-surface/80 backdrop-blur-sm shadow-[0_24px_70px_rgba(0,0,0,0.5)]"
            >
              <img
                src={profilePhoto}
                alt="Saim Mahmood"
                className="w-full h-full object-cover rounded-[1.75rem]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e]/30 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 rounded-[1.75rem] ring-1 ring-inset ring-white/15 pointer-events-none" />
              <motion.div
                aria-hidden="true"
                className="absolute -inset-x-8 -top-12 h-24 bg-white/15 blur-2xl pointer-events-none"
                animate={{ x: ['-30%', '130%'] }}
                transition={{ duration: 2.8, ease: 'easeInOut', repeat: Infinity, repeatDelay: 3.2 }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Typewriter — framed with rules like a magazine pull quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7, ease: EASE }}
          className="max-w-2xl mb-10"
        >
          <div className="border-t border-b border-white/10 py-4">
            <div className="font-mono text-sm md:text-base text-text-muted" aria-live="polite">
              <span>&gt; {typed}</span>
              <span className="caret" aria-hidden="true" />
            </div>
          </div>
        </motion.div>

        {/* Body paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: EASE }}
          className="text-text-muted text-base md:text-lg max-w-2xl leading-relaxed mb-10"
        >
          AI/ML Engineer focused on building production-grade intelligent systems — from
          raw data ingestion to real-time inference and deployment. I design and implement
          end-to-end pipelines, scalable backend architectures, and AI-driven applications
          that turn complex, unstructured problems into reliable, measurable outcomes.
        </motion.p>

        {/* CTA — editorial text links, no filled buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease: EASE }}
          className="flex flex-wrap gap-8 mb-12"
        >
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            aria-label="View projects"
            className="group font-syne text-sm uppercase tracking-[0.12em] text-text-primary hover:text-ivory transition-colors duration-500"
          >
            View Projects
            <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
            <span className="block h-[1px] w-0 group-hover:w-full bg-white/40 transition-all duration-500 mt-1" />
          </button>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            aria-label="Download resume"
            className="group font-syne text-sm uppercase tracking-[0.12em] text-text-muted hover:text-text-primary transition-colors duration-500"
          >
            Download Resume
            <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
            <span className="block h-[1px] w-0 group-hover:w-full bg-white/20 transition-all duration-500 mt-1" />
          </a>
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3, ease: EASE }}
          className="flex items-center gap-4"
        >
          {[
            { href: 'https://github.com/SaimMahmoodRamday', label: 'GitHub', Icon: GitHubIcon },
            { href: 'https://www.linkedin.com/in/saim-mahmood-1385a5250', label: 'LinkedIn', Icon: LinkedInIcon },
            { href: 'mailto:saimmehmood2004@gmail.com', label: 'Email', Icon: MailIcon }
          ].map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={label}
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 text-text-muted hover:text-text-primary hover:border-white/30 transition-all duration-500"
            >
              <Icon className="w-4.5 h-4.5" />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted font-mono text-[10px] uppercase tracking-widest"
        aria-hidden="true"
      >
        <span>Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
        />
      </motion.div>
    </section>
  )
}
