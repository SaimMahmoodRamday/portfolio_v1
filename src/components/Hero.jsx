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
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
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
      className="relative min-h-screen w-full flex items-center overflow-hidden pt-24 md:pt-28 bg-paper"
    >
      <div className="container-xl px-5 md:px-8 w-full relative">
        {/* Masthead — magazine cover top strip */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
          className="flex items-end justify-between border-b border-ink/80 pb-3 mb-10"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink">
            Vol. I &nbsp;·&nbsp; Portfolio
          </div>
          <div className="hidden sm:block font-serif italic text-graphite text-sm">
            an editorial of work, ink-pressed
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink">
            № 01
          </div>
        </motion.div>

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          className="font-mono text-[11px] uppercase tracking-[0.3em] text-graphite mb-8"
        >
          The Folio of <span className="text-ink">— Saim Mahmood</span> &nbsp;·&nbsp; Full-Stack AI/ML Engineer
        </motion.div>

        {/* Name + Photo row */}
        <div className="flex flex-col md:flex-row md:items-end md:gap-12 mb-10">
          {/* Name — massive Cormorant italic, magazine cover */}
          <motion.h1
            initial={{ opacity: 0, y: 60, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, delay: 0.3, ease: EASE }}
            className="font-serif italic font-bold text-7xl sm:text-8xl md:text-[10rem] leading-[0.85] tracking-tight text-ink ink-bleed"
          >
            Saim
            <br />
            <span className="not-italic font-normal">Mahmood</span>
          </motion.h1>

          {/* Photo — framed plate, paper-mounted */}
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.0, delay: 0.6, ease: EASE }}
            className="relative mt-10 md:mt-0 md:mb-3 flex-shrink-0 self-center md:self-end"
          >
            {/* Paper mat — soft drop shadow simulating stacked paper */}
            <motion.div
              whileHover={{ y: -6, rotate: -0.4 }}
              transition={{ type: 'spring', stiffness: 200, damping: 18 }}
              className="relative bg-paper p-3 shadow-paper"
              style={{ transform: 'rotate(-1.2deg)' }}
            >
              <div className="relative w-[230px] h-[280px] sm:w-[260px] sm:h-[315px] md:w-[280px] md:h-[340px] overflow-hidden bg-paper-deep">
                <img
                  src={profilePhoto}
                  alt="Saim Mahmood"
                  className="w-full h-full object-cover"
                  style={{ filter: 'grayscale(1) contrast(1.05) sepia(0.12)' }}
                />
                {/* Ink wash overlay */}
                <div className="absolute inset-0 pointer-events-none mix-blend-multiply" style={{ background: 'linear-gradient(180deg, transparent 60%, rgba(23,20,17,0.18) 100%)' }} />
              </div>
              {/* Caption — handwritten */}
              <div className="mt-3 px-1 flex items-center justify-between">
                <span className="font-hand text-base text-ink">— the engineer</span>
                <span className="font-mono text-[9px] tracking-wider uppercase text-graphite">Plate I.</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Pull quote / typewriter — between rules */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9, ease: EASE }}
          className="max-w-2xl mb-10"
        >
          <div className="border-t border-b border-rule py-4">
            <div className="font-mono text-sm md:text-base text-graphite" aria-live="polite">
              <span className="text-ink">› </span>
              <span>{typed}</span>
              <span className="caret" aria-hidden="true" />
            </div>
          </div>
        </motion.div>

        {/* Lede — drop-cap editorial paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0, ease: EASE }}
          className="font-serif text-lg md:text-xl max-w-2xl leading-[1.7] mb-12 text-ink-2 drop-cap"
        >
          The notebook is where intelligence begins. Production is where engineering starts. 
          I’m an AI/ML Engineer building systems that bridge that gap — from raw data ingestion 
          to real-time inference and deployment. I design end-to-end pipelines, scalable architectures, 
          and AI-driven applications that turn complex, unstructured problems into reliable, 
          measurable production systems.
        </motion.p>

        {/* Editorial CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: EASE }}
          className="flex flex-wrap gap-10 mb-14"
        >
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            aria-label="View projects"
            className="group font-mono text-xs uppercase tracking-[0.22em] text-ink"
          >
            Turn the page → Projects
            <span className="block h-[1px] w-full bg-ink scale-x-100 group-hover:scale-x-110 origin-left transition-transform duration-500 mt-1.5" />
          </button>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            aria-label="Download resume"
            className="group font-mono text-xs uppercase tracking-[0.22em] text-graphite hover:text-ink transition-colors duration-500"
          >
            Resume — printed
            <span className="block h-[1px] w-full bg-graphite scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 mt-1.5" />
          </a>
        </motion.div>

        {/* Social — minimal ink stamps */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.35, ease: EASE }}
          className="flex items-center gap-3"
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
              className="inline-flex items-center justify-center w-10 h-10 border border-rule text-graphite hover:text-ink hover:border-ink transition-all duration-500"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll mark */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-graphite font-mono text-[10px] uppercase tracking-widest"
        aria-hidden="true"
      >
        <span>turn page</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-ink/50 to-transparent"
        />
      </motion.div>
    </section>
  )
}
