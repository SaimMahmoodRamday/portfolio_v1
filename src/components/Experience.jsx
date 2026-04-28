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
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, delay: index * 0.2, ease: EASE }}
      className="relative pl-10 md:pl-14 pb-20 last:pb-0"
    >
      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, delay: index * 0.2 + 0.2, type: 'spring', stiffness: 260, damping: 20 }}
        className="absolute left-0 md:left-[1px] top-2 w-3 h-3 rounded-full bg-white/80 border-4 border-bg z-10"
      />

      {/* Card */}
      <div className="editorial-card rounded-xl p-6 md:p-8 transition-all duration-500">
        {/* Header */}
        <div className="mb-6">
          <h3 className="font-syne font-bold text-2xl md:text-3xl text-text-primary mb-2">
            {entry.company}
          </h3>
          <div className="font-mono text-sm text-ivory/70 mb-1">{entry.role}</div>
          <div className="font-mono text-xs text-text-muted tracking-wide">
            {entry.period}
            {entry.location && ` · ${entry.location}`}
          </div>
        </div>

        {/* Tags — minimal editorial */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {entry.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block px-2 py-0.5 rounded bg-white/[0.06] font-mono text-[10px] text-white/50 tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Bullets */}
        <ul className="space-y-3">
          {entry.bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-3 text-text-muted text-sm leading-[1.7]">
              <span className="inline-block w-1 h-1 rounded-full bg-white/30 mt-2.5 flex-shrink-0" aria-hidden="true" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
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
    <section id="experience" className="section-shell bg-surface">
      <div className="container-xl">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="font-syne text-xs uppercase tracking-[0.3em] text-text-muted mb-8"
        >
          EXPERIENCE
        </motion.div>

        {/* Heading — editorial mixed typography */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
          className="text-3xl md:text-5xl lg:text-6xl text-text-primary mb-16 leading-[1.1]"
        >
          <span className="font-playfair italic">Where</span>{' '}
          <span className="font-syne font-bold">I&rsquo;ve Worked</span>
        </motion.h2>

        {/* Timeline container */}
        <div ref={containerRef} className="relative max-w-3xl">
          {/* Animated vertical line — thin, editorial */}
          <motion.div
            style={{ scaleY: lineScale, transformOrigin: 'top' }}
            className="absolute left-[5px] md:left-[6px] top-0 bottom-0 w-[1px] bg-white/20"
            aria-hidden="true"
          />

          {/* Entries */}
          {EXPERIENCES.map((entry, i) => (
            <TimelineEntry key={entry.company} entry={entry} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
