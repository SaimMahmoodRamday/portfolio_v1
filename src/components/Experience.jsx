import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const EASE = [0.16, 1, 0.3, 1]
const EXPERIENCES = [
  {
    company: 'Neuronix Technologies',
    role: 'AI Engineer — Intern',
    period: 'Mar 2026 – Apr 2026',
    location: 'Islamabad, Pakistan',
    tags: ['Python', 'Kafka', 'YOLO', 'RF-DETR', 'WebRTC', 'WebSockets', 'Docker', 'PostgreSQL', 'Next.js', 'Modal Labs'],
    bullets: [
      'Contributed to a UAV surveillance platform running 3 parallel AI inference services off a single RTSP feed — YOLOv8 for crowd and fire detection, RF-DETR with a DINOv2 backbone for weapon detection — connected via Unix Domain Socket fan-out.',
      'Built the Kafka event pipeline (3 topics, one consumer per service) linking frame ingestion to PostgreSQL persistence and a live WebSocket dashboard — achieving sub-100ms end-to-end detection latency with zero message loss under sustained load.',
      'Fine-tuned YOLOv8m on a filtered VisDrone dataset (150 epochs on an H100 via Modal Labs) and a YOLOv8s fire/smoke model; exported both to ONNX, reducing model load time by ~40%.',
      'Containerized the full 10-service system with Docker Compose (CPU and CUDA profiles) and built a Next.js C2 dashboard with live WebRTC video, real-time alert feeds, and JWT-secured REST APIs.'
    ]
  },
  {
    company: 'Data BI LLC',
    role: 'Data & AI Associate Engineer',
    period: 'Jun 2025 – Dec 2025',
    location: '',
    tags: ['Python', 'PostgreSQL', 'LLMs', 'Power BI', 'Azure ML', 'Docker'],
    bullets: [
      'Prototyped an LLM-powered reporting tool that generates plain-English KPI summaries from Power BI exports — cutting analyst summarization time by ~50% as part of the team\'s broader AI/ML roadmap.',
      'Built an Attendance Intelligence System processing 1,000+ events per refresh; anomaly detection flagged irregular patterns and shift manipulation at ~80% precision on held-out validation data.',
      'Set up an Azure ML + Docker pipeline for automated model retraining and experiment tracking, reducing manual reporting effort by 35%.',
      'Designed time-series feature stores in PostgreSQL — lag features and rolling aggregates — feeding downstream forecasting models surfaced through Power BI dashboards.'
    ]
  },
  {
    company: 'Glowlogix',
    role: 'Software Engineer — Intern',
    period: 'Jun 2024 – Sep 2024',
    location: '',
    tags: ['Laravel', 'React', 'Redis', 'MySQL', 'Laravel Queues'],
    bullets: [
      'Built core modules for a multi-tenant HR SaaS platform — Attendance and Leave Management features supporting complex shift-based rules, approval workflows, and bulk actions across tenant boundaries.',
      'Engineered an Excel bulk data ingestion pipeline using Laravel Queues and Redis, replacing a synchronous bottleneck with an async queue-backed flow that improved throughput and prevented request timeouts under large imports.',
      'Refactored backend architecture and normalized database schemas to eliminate redundancy across tenant data, improving query consistency and long-term maintainability.',
      'Contributed to frontend UX in React, shipping responsive views for HR workflows that reduced manual data-entry steps for end users.'
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
