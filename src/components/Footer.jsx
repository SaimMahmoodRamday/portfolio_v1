import { motion } from 'framer-motion'

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

const SOCIAL_LINKS = [
  { href: 'https://github.com/SaimMahmoodRamday', label: 'GitHub', Icon: GitHubIcon },
  { href: 'https://www.linkedin.com/in/saim-mahmood-1385a5250', label: 'LinkedIn', Icon: LinkedInIcon },
  { href: 'mailto:saimmehmood2004@gmail.com', label: 'Email', Icon: MailIcon }
]

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.8, ease: EASE }}
      className="relative min-h-[40vh] flex items-center justify-center px-5 md:px-8 overflow-hidden bg-paper-deep"
    >
      <div className="absolute inset-x-0 top-0 h-[1px] bg-rule" aria-hidden="true" />

      {/* Watermark — faded large name behind content */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <div className="font-serif italic font-bold text-[7rem] md:text-[14rem] lg:text-[18rem] text-ink/[0.06] leading-none whitespace-nowrap tracking-tight">
          Saim Mahmood
        </div>
      </div>

      <div className="container-xl relative z-10 text-center py-16">
        {/* Colophon */}
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-graphite mb-4">
          — Colophon —
        </div>

        <p className="font-serif italic text-ink text-xl md:text-2xl mb-2 ink-bleed">
          Set in Cormorant Garamond &amp; Inter,
        </p>
        <p className="font-serif text-graphite text-base mb-8">
          pressed onto warm paper by{' '}
          <span className="font-serif italic font-bold text-ink">Saim Mahmood</span>.
        </p>

        <div className="flex items-center justify-center gap-3 mb-8">
          {SOCIAL_LINKS.map(({ href, label, Icon }) => (
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
        </div>

        <p className="text-graphite font-mono text-[10px] tracking-[0.25em] uppercase">
          © {new Date().getFullYear()} · All rights reserved · No. 01
        </p>
      </div>
    </motion.footer>
  )
}
