import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import useCounter from '../hooks/useCounter'

const EASE = [0.16, 1, 0.3, 1]

const PARAGRAPHS = [
  "I'm a Computer Scientist working at the intersection of artificial intelligence, distributed systems, and full-stack engineering, focused on building end-to-end systems where models are trained, deployed, scaled, and integrated into real-world workflows.",
  "I design architectures that connect data pipelines, backend services, and user-facing interfaces into cohesive, production-ready platforms, including GPU-accelerated ML pipelines, streaming systems, and containerized deployments optimized for performance, reliability, and maintainability.",
  "My focus lies in applied AI, including intelligent video analytics, large-scale search systems, predictive data pipelines, and NLP-driven applications, with experience in real-time multi-modal systems involving detection models, streaming architectures, and interactive dashboards under production constraints.",
  "I am particularly interested in machine learning systems operating under real-world limitations such as latency, scale, noisy data, and continuous adaptation, including evaluation and fine-tuning of detection and density-based models for complex visual environments.",
  "Beyond the technical layer, I aim to build systems that are usable, efficient, and impactful — combining AI and software engineering to improve decision-making, enhance accessibility, and solve real-world problems through practical, scalable technology solutions."
];

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
      initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, delay: 0.2 + index * 0.1, ease: EASE }}
      className="flex-1 text-center py-6 px-4"
    >
      <div className="font-serif italic font-bold text-5xl md:text-6xl text-ink mb-2 ink-bleed">
        {count}
        <span className="text-graphite">{stat.suffix}</span>
      </div>
      <div className="text-graphite text-[10px] font-mono uppercase tracking-[0.2em]">{stat.label}</div>
    </motion.div>
  )
}

export default function About() {
  return (
    <section id="about" className="section-shell bg-paper-2">
      <div className="container-xl">
        {/* Folio header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="flex items-center gap-4 mb-10"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-graphite">Chapter I.</span>
          <span className="h-px flex-1 bg-rule" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-graphite">About</span>
        </motion.div>

        {/* Headline — magazine feature */}
        <motion.h2
          initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.0, delay: 0.1, ease: EASE }}
          className="text-4xl md:text-6xl lg:text-7xl text-ink mb-4 max-w-4xl leading-[1.05] ink-bleed"
        >
          <span className="font-serif italic">Crafting</span>{' '}
          <span className="font-serif font-semibold">AI That Operates Beyond the Lab.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25, ease: EASE }}
          className="font-hand text-2xl text-graphite mb-16"
        >
          — a note on intent.
        </motion.p>

        {/* Two-column editorial body */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 mb-20">
          {/* Marginalia — left rail */}
          <aside className="md:col-span-3 md:border-r md:border-rule md:pr-8">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-graphite mb-3">
              Profile
            </div>
            <p className="font-serif italic text-graphite text-base leading-relaxed mb-8">
              Computer scientist. Builder of systems where models meet the world.
            </p>
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-graphite mb-3">
              Origin
            </div>
            <p className="text-ink-2 text-sm leading-relaxed">
              Islamabad, Pakistan
            </p>
          </aside>

          {/* Main body */}
          <div className="md:col-span-9 max-w-3xl">
            {PARAGRAPHS.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 18, filter: 'blur(4px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.9, delay: 0.15 + i * 0.1, ease: EASE }}
                className={`text-ink-2 text-base md:text-lg leading-[1.85] mb-6 last:mb-0 font-serif ${i === 0 ? 'text-xl md:text-2xl' : ''}`}
              >
                {p}
              </motion.p>
            ))}

            {/* Education — printed footnote */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: 0.6, ease: EASE }}
              className="mt-12 pt-6 border-t border-rule"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-graphite mb-3">
                Footnote · Education
              </div>
              <div>
                <div className="font-serif italic text-xl text-ink">
                  BS Computer Science
                </div>
                <div className="text-ink-2 text-sm mt-1">
                  National University of Sciences &amp; Technology (NUST)
                </div>
                <div className="font-mono text-[11px] text-graphite mt-1 tracking-wide">
                  2022 – 2026 · Islamabad, Pakistan
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats — between double rules, magazine masthead style */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1.0, ease: EASE }}
          className="border-t-2 border-b-2 border-double border-ink/40"
        >
          <div className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-rule">
            {STATS.map((stat, i) => (
              <StatItem key={stat.label} stat={stat} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
