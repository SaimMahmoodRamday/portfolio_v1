import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const EASE = [0.16, 1, 0.3, 1]

const EXPERIENCES = [
  {
    company: 'Neuronix Technologies',
    role: 'AI Engineer — Intern',
    period: 'Mar 2025 – Present',
    location: 'Islamabad, Pakistan',
    tags: ['Python', 'Go/Gin', 'Kafka', 'YOLO', 'RF-DETR', 'WebRTC', 'WebSockets', 'Docker', 'PostgreSQL'],
    bullets: [
      'Engineered a production-grade UAV-based C4I surveillance platform for real-time multi-modal video intelligence, integrating weapon, fire/smoke, and crowd detection pipelines.',
      'Architected a distributed microservices system (Go + Python) with Kafka, WebRTC/MJPEG, and WebSockets, and built a real-time operator dashboard using React for live video, detection overlays, and monitoring.',
      'Evaluated crowd-counting architectures (CSRNet, MCNN, CAN) for density estimation, and selected fine-tuned, optimized detection-based models (YOLO, RF-DETR) that achieved superior real-time performance (~75%+ precision/accuracy) across aerial scenarios ranging from sparse to highly dense crowds (1000+ individuals).',
      'Deployed the full system using Docker Compose with scalable inference pipelines and PostgreSQL-backed persistence, supporting real-time processing and system reliability.'
    ]
  },
  {
    company: 'Data BI LLC',
    role: 'Data & AI Associate Engineer',
    period: 'Jun 2025 – Dec 2025',
    location: '',
    tags: ['Python', 'PostgreSQL', 'Power BI', 'Azure ML', 'Docker'],
    bullets: [
      'Architected an automated Attendance Intelligence System processing 1,000+ events per refresh with zero manual intervention.',
      'Designed an end-to-end data pipeline enabling daily KPI refresh, eliminating manual reporting overhead.',
      'Engineered ML-ready feature pipelines to support downstream predictive and forecasting models.',
      'Initiated an AI/ML roadmap leveraging Azure ML and Docker for forecasting and predictive analytics.',
      'Reduced manual reporting effort by 30–40% through cross-team automation and system integration.'
    ]
  },
  {
    company: 'Glowlogix',
    role: 'Software Engineer — Intern',
    period: 'Jun 2024 – Sep 2024',
    location: '',
    tags: ['Laravel', 'React', 'Redis', 'MySQL', 'Laravel Queues'],
    bullets: [
      'Built and optimized core modules for a multi-tenant HR SaaS platform using Laravel and React.',
      'Developed Attendance and Leave Management features supporting complex shift-based rules and bulk actions.',
      'Engineered an Excel bulk data ingestion pipeline using Laravel Queues and Redis, significantly improving reliability and throughput.',
      'Refactored backend architecture and normalized database schemas, improving system consistency and long-term maintainability.'
    ]
  }
]

function TimelineEntry({ entry, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 1.0, delay: index * 0.18, ease: EASE }}
      className="relative pl-12 md:pl-20 pb-16 last:pb-0"
    >
      {/* Margin date — left rail */}
      <div className="absolute left-0 top-1 w-9 md:w-16 text-left">
        <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-graphite hidden md:block leading-snug">
          {entry.period.split('–')[0].trim()}
        </div>
      </div>

      {/* Timeline mark — ink dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, delay: index * 0.18 + 0.2, type: 'spring', stiffness: 260, damping: 20 }}
        aria-hidden="true"
        className="absolute left-[14px] md:left-[42px] top-2 w-2.5 h-2.5 rounded-full bg-ink ring-4 ring-paper-2 z-10"
      />

      {/* Entry */}
      <article>
        <header className="mb-5">
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-graphite mb-2">
            {entry.role}
          </div>
          <h3 className="font-serif italic font-bold text-3xl md:text-4xl text-ink leading-tight ink-bleed">
            {entry.company}
          </h3>
          <div className="font-mono text-[11px] text-graphite tracking-wide mt-2">
            {entry.period}
            {entry.location && ` · ${entry.location}`}
          </div>
        </header>

        {/* Tags — typeset */}
        <div className="flex flex-wrap gap-x-3 gap-y-1 mb-5 font-mono text-[10px] uppercase tracking-[0.18em] text-graphite">
          {entry.tags.map((tag, i) => (
            <span key={tag} className="inline-flex items-center">
              {i > 0 && <span className="mr-3 text-pencil">·</span>}
              {tag}
            </span>
          ))}
        </div>

        <ul className="space-y-3">
          {entry.bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-3 font-serif text-ink-2 text-base md:text-lg leading-[1.8]">
              <span className="font-serif italic text-graphite text-base flex-shrink-0 mt-0.5" aria-hidden="true">
                §
              </span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </article>
    </motion.div>
  )
}

export default function Experience() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 60%']
  })
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section id="experience" className="section-shell bg-paper-2">
      <div className="container-xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="flex items-center gap-4 mb-10"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-graphite">Chapter III.</span>
          <span className="h-px flex-1 bg-rule" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-graphite">Experience</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.0, delay: 0.1, ease: EASE }}
          className="text-4xl md:text-6xl lg:text-7xl text-ink mb-16 leading-[1.05] ink-bleed"
        >
          <span className="font-serif italic">Where</span>{' '}
          <span className="font-serif font-semibold">I&rsquo;ve Worked.</span>
        </motion.h2>

        {/* Timeline — printed in the margin of the page */}
        <div ref={containerRef} className="relative max-w-3xl">
          <motion.div
            style={{ scaleY: lineScale, transformOrigin: 'top' }}
            className="absolute left-[19px] md:left-[47px] top-0 bottom-0 w-[1px] bg-ink/30"
            aria-hidden="true"
          />
          {EXPERIENCES.map((entry, i) => (
            <TimelineEntry key={entry.company} entry={entry} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
