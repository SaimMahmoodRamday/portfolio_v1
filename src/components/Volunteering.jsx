import { motion } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1]

const BULLETS = [
  'Led and coordinated a team of 10 volunteers for large-scale on-ground fundraising and awareness campaigns.',
  'Raised over PKR 250,000 — PKR 200,000 through team efforts and PKR 50,000 through individual outreach within a constrained campaign window.',
  'Designed and executed a university-wide Breast Cancer Awareness campaign, managing kiosk operations, event logistics, and volunteer coordination.',
  'Guided volunteers on public communication, donor engagement, and ethical fundraising practices.',
  'Conducted intensive on-ground campaigns to sustain donations and outreach during periods of reduced online contributions due to geo-political constraints.'
]

export default function Volunteering() {
  return (
    <section id="volunteering" className="section-shell bg-surface">
      <div className="container-xl">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="font-syne text-xs uppercase tracking-[0.3em] text-text-muted mb-8"
        >
          COMMUNITY
        </motion.div>

        {/* Heading — editorial mixed typography */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
          className="text-3xl md:text-5xl lg:text-6xl text-text-primary mb-6 leading-[1.1]"
        >
          <span className="font-playfair italic">Giving</span>{' '}
          <span className="font-syne font-bold">Back</span>
        </motion.h2>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          className="text-text-muted text-base md:text-lg italic max-w-3xl mb-16 leading-[1.8]"
        >
          Contributing beyond engineering — working on initiatives focused on real-world impact, particularly in healthcare awareness and fundraising at scale.
        </motion.p>

        {/* Featured card — slides in from right */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1.0, delay: 0.2, ease: EASE }}
          className="relative editorial-card rounded-xl p-6 md:p-10 border-l-2 border-l-ivory/40 max-w-4xl"
        >
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-start gap-4 mb-3">
              <span className="text-2xl mt-1" aria-hidden="true">🎗️</span>
              <div>
                <h3 className="font-playfair italic font-bold text-2xl md:text-3xl text-text-primary">
                  Ambassador
                </h3>
                <div className="text-text-muted text-sm mt-2">
                  Shaukat Khanum Memorial Cancer Hospital & Research Centre
                </div>
              </div>
            </div>
            <div className="ml-12 space-y-1">
              <div className="font-mono text-xs text-text-muted tracking-wide">
                Full-time · Jan 2025 – Jan 2026 · 1 Year 1 Month
              </div>
              <div className="font-mono text-xs text-text-muted tracking-wide">
                Islamabad, Pakistan · Hybrid
              </div>
            </div>
          </div>

          {/* Bullets — staggered from right */}
          <ul className="space-y-4">
            {BULLETS.map((bullet, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: 0.3 + i * 0.1, ease: EASE }}
                className="flex items-start gap-3 text-text-muted text-sm leading-[1.8]"
              >
                <span className="inline-block w-1 h-1 rounded-full bg-white/30 mt-2.5 flex-shrink-0" aria-hidden="true" />
                <span>{bullet}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
