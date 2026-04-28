import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import useCounter from '../hooks/useCounter'


const EASE = [0.16, 1, 0.3, 1]

const PARAGRAPHS = [
  "I'm a Computer Scientist working at the intersection of artificial intelligence, distributed systems, and full-stack engineering. My work centers on building end-to-end systems — where models are not just trained, but deployed, scaled, and integrated into real-world workflows.",
  'I design architectures that connect data pipelines, backend services, and user-facing interfaces into cohesive, production-ready platforms. This includes GPU-accelerated ML pipelines, streaming systems, and containerized deployments that prioritize performance, reliability, and maintainability.',
  "My focus lies in applied AI: intelligent video analytics, large-scale search systems, predictive data pipelines, and NLP-driven applications. I'm particularly interested in systems where machine learning operates under real constraints — latency, scale, noisy data, and continuous adaptation.",
  "Beyond the technical layer, I care about building systems that are usable, efficient, and impactful — tools that don't just demonstrate capability, but solve problems in a way that holds up in production."
]

const STATS = [
  { value: 3, suffix: '+', label: 'Internships & Work Experiences' },
  { value: 4, suffix: '+', label: 'Projects Shipped' },
  { value: 10, suffix: '+', label: 'Technologies & Frameworks' },
  { value: 250, suffix: 'K+', label: 'PKR Raised (Volunteering)' }
]

function StatItem({ stat, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const count = useCounter(stat.value, inView, 1.5)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay: 0.2 + index * 0.1, ease: EASE }}
      className="flex-1 text-center py-6"
    >
      <div className="font-playfair italic font-bold text-4xl md:text-5xl text-text-primary mb-2">
        {count}
        <span className="text-ivory/80">{stat.suffix}</span>
      </div>
      <div className="text-text-muted text-xs font-mono uppercase tracking-wider">{stat.label}</div>
    </motion.div>
  )
}

export default function About() {
  return (
    <section id="about" className="section-shell bg-surface">
      <div className="container-xl">
        {/* Section label — clean uppercase Syne */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="font-syne text-xs uppercase tracking-[0.3em] text-text-muted mb-8"
        >
          ABOUT ME
        </motion.div>

        {/* Heading — editorial mixed typography */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
          className="text-3xl md:text-5xl lg:text-6xl text-text-primary mb-16 max-w-4xl leading-[1.1]"
        >
          <span className="font-playfair italic">Crafting</span>{' '}
          <span className="font-syne font-bold">AI That Operates Beyond the Lab</span>
        </motion.h2>

        {/* Single-column body text — editorial breathing room */}
        <div className="max-w-3xl mb-20">
          {PARAGRAPHS.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: 0.15 + i * 0.12, ease: EASE }}
              className="text-text-muted text-base md:text-lg leading-[1.8] mb-6 last:mb-0"
            >
              {p}
            </motion.p>
          ))}

          {/* Education — minimal inline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.6, ease: EASE }}
            className="mt-12 pt-8 border-t border-white/10"
          >
            <div className="flex items-start gap-4">
              <span className="text-xl" aria-hidden="true">🎓</span>
              <div>
                <div className="font-syne font-bold text-base text-text-primary">
                  BS Computer Science
                </div>
                <div className="text-text-muted text-sm mt-1">
                  National University of Sciences & Technology (NUST)
                </div>
                <div className="font-mono text-xs text-text-muted mt-1 tracking-wide">
                  2022 – 2026 · Islamabad, Pakistan
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats strip — horizontal, full-width, divided by vertical lines */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1.0, ease: EASE }}
          className="border-t border-b border-white/10"
        >
          <div className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {STATS.map((stat, i) => (
              <StatItem key={stat.label} stat={stat} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
