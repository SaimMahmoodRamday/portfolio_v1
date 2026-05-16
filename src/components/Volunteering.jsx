// import { motion } from 'framer-motion'

// const EASE = [0.16, 1, 0.3, 1]

// const BULLETS = [
//   'Led and coordinated a team of 10 volunteers for large-scale on-ground fundraising and awareness campaigns.',
//   'Raised over PKR 250,000 — PKR 200,000 through team efforts and PKR 50,000 through individual outreach within a constrained campaign window.',
//   'Designed and executed a university-wide Breast Cancer Awareness campaign, managing kiosk operations, event logistics, and volunteer coordination.',
//   'Guided volunteers on public communication, donor engagement, and ethical fundraising practices.',
//   'Conducted intensive on-ground campaigns to sustain donations and outreach during periods of reduced online contributions due to geo-political constraints.'
// ]

// export default function Volunteering() {
//   return (
//     <section id="volunteering" className="section-shell bg-paper-2">
//       <div className="container-xl">
//         <motion.div
//           initial={{ opacity: 0, y: 12 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: '-80px' }}
//           transition={{ duration: 0.8, ease: EASE }}
//           className="flex items-center gap-4 mb-10"
//         >
//           <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-graphite">Chapter V.</span>
//           <span className="h-px flex-1 bg-rule" />
//           <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-graphite">Community</span>
//         </motion.div>

//         <motion.h2
//           initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
//           whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
//           viewport={{ once: true, margin: '-80px' }}
//           transition={{ duration: 1.0, delay: 0.1, ease: EASE }}
//           className="text-4xl md:text-6xl lg:text-7xl text-ink mb-6 leading-[1.05] ink-bleed"
//         >
//           <span className="font-serif italic">Giving</span>{' '}
//           <span className="font-serif font-semibold">Back.</span>
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0, y: 12 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: '-80px' }}
//           transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
//           className="font-serif italic text-graphite text-lg max-w-3xl mb-16 leading-[1.8]"
//         >
//           Contributing beyond engineering — working on initiatives focused on real-world impact,
//           particularly in healthcare awareness and fundraising at scale.
//         </motion.p>

//         {/* Featured printed page */}
//         <motion.article
//           initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
//           whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
//           viewport={{ once: true, margin: '-60px' }}
//           transition={{ duration: 1.1, delay: 0.2, ease: EASE }}
//           className="paper-card max-w-4xl px-8 md:px-12 py-10 md:py-14"
//           style={{ transform: 'rotate(-0.4deg)' }}
//         >
//           {/* Header */}
//           <header className="border-b border-rule pb-6 mb-8">
//             <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-graphite mb-3">
//               Field Notes — Ambassador
//             </div>
//             <h3 className="font-serif italic font-bold text-3xl md:text-5xl text-ink leading-tight ink-bleed mb-3">
//               Shaukat Khanum Memorial<br />Cancer Hospital &amp; Research Centre
//             </h3>
//             <div className="font-mono text-[11px] text-graphite tracking-wide">
//               Full-time · Jan 2025 – Jan 2026 · 1 Year 1 Month · Islamabad, Pakistan · Hybrid
//             </div>
//           </header>

//           {/* Body — two columns on desktop */}
//           <ul className="space-y-5 columns-1 md:columns-2 md:gap-12">
//             {BULLETS.map((bullet, i) => (
//               <motion.li
//                 key={i}
//                 initial={{ opacity: 0, y: 16 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: '-40px' }}
//                 transition={{ duration: 0.8, delay: 0.3 + i * 0.1, ease: EASE }}
//                 className="break-inside-avoid font-serif text-ink-2 text-base md:text-lg leading-[1.85]"
//               >
//                 <span className="font-serif italic text-graphite mr-2" aria-hidden="true">§</span>
//                 {bullet}
//               </motion.li>
//             ))}
//           </ul>

//           {/* Sign-off */}
//           <div className="mt-10 pt-6 border-t border-rule flex items-center justify-between">
//             <span className="font-hand text-2xl text-ink">— in service,</span>
//             <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-graphite">PKR 250K+ raised</span>
//           </div>
//         </motion.article>
//       </div>
//     </section>
//   )
// }


import { motion } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1]

const HIGHLIGHTS = [
  { num: 'PKR 250K+', label: 'raised across campaigns' },
  { num: '10',        label: 'volunteers led' },
  { num: '1 yr',     label: 'on the ground' },
]

export default function Volunteering() {
  return (
    <section id="volunteering" className="section-shell bg-paper-2">
      <div className="container-xl">

        {/* Chapter header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="flex items-center gap-4 mb-10"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-graphite">Chapter V.</span>
          <span className="h-px flex-1 bg-rule" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-graphite">Community</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.0, delay: 0.1, ease: EASE }}
          className="text-4xl md:text-6xl lg:text-7xl text-ink mb-6 leading-[1.05] ink-bleed"
        >
          <span className="font-serif italic">Beyond</span>{' '}
          <span className="font-serif font-semibold">the screen.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          className="font-hand text-2xl text-graphite mb-16"
        >
          — engineering is only part of who I am.
        </motion.p>

        {/* Paper card */}
        <motion.article
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1.1, delay: 0.2, ease: EASE }}
          className="paper-card max-w-4xl px-8 md:px-12 py-10 md:py-14"
          style={{ transform: 'rotate(-0.4deg)' }}
        >
          {/* Card header */}
          <header className="border-b border-rule pb-6 mb-8">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-graphite mb-3">
              Ambassador · Jan 2025 – Jan 2026 · Islamabad
            </div>
            <h3 className="font-serif italic font-bold text-3xl md:text-4xl text-ink leading-tight ink-bleed mb-0">
              Shaukat Khanum Memorial<br />Cancer Hospital &amp; Research Centre
            </h3>
          </header>

          {/* Pull quote — the question that started it */}
          <motion.blockquote
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
            style={{
              fontFamily: "'Caveat', cursive",
              fontSize: '1.35rem',
              color: '#2a2520',
              borderLeft: '2px solid rgba(23,20,17,0.35)',
              paddingLeft: '1.1rem',
              marginBottom: '1.75rem',
              lineHeight: 1.65,
            }}
          >
            "When will you start giving back? After 20 years benefiting from society, isn't it time?"
          </motion.blockquote>

          {/* Narrative — short, punchy paragraphs. Not bullets. */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '0 3.5rem',
            }}
          >
            {[
              'That question stuck. So at 20, I said now. I spent a year on the ground as a fundraising ambassador — leading a team of ten, running university campaigns, managing kiosk operations, and keeping volunteers motivated when online contributions dried up due to geo-political constraints.',
              'What I learned about leadership surprised me: it\'s less about directing and more about presence. Getting people to genuinely care about a cause takes more than a brief. The fundraising was the visible part — the real work was the people.',
            ].map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.35 + i * 0.12, ease: EASE }}
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1.2rem',
                  color: '#2a2520',
                  lineHeight: 1.95,
                  margin: '0 0 1rem',
                }}
              >
                {para}
              </motion.p>
            ))}
          </div>

          {/* Stats row — inline, not cards */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.55, ease: EASE }}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0',
              borderTop: '1px solid rgba(23,20,17,0.13)',
              borderBottom: '1px solid rgba(23,20,17,0.13)',
              margin: '1.75rem 0',
            }}
          >
            {HIGHLIGHTS.map((h, i) => (
              <div
                key={h.label}
                style={{
                  flex: '1 1 120px',
                  padding: '1.1rem 1.25rem',
                  borderRight: i < HIGHLIGHTS.length - 1
                    ? '1px solid rgba(23,20,17,0.13)'
                    : 'none',
                }}
              >
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: 'italic',
                    fontWeight: 700,
                    fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)',
                    color: '#171411',
                    lineHeight: 1,
                    marginBottom: '0.3rem',
                    textShadow:
                      '0 0 0.5px currentColor, 0 0 1.2px rgba(23,20,17,0.12)',
                  }}
                >
                  {h.num}
                </div>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '10px',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: '#8a8278',
                  }}
                >
                  {h.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Sign-off */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.65, ease: EASE }}
            className="flex items-end justify-between flex-wrap gap-4"
          >
            <p
              style={{
                fontFamily: "'Caveat', cursive",
                fontSize: '1.15rem',
                color: '#5b554d',
                lineHeight: 1.6,
                maxWidth: '36rem',
                margin: 0,
              }}
            >
              Helping others doesn't always require money. Sometimes kind words or simply showing up matters far more.
            </p>
            <span className="font-hand text-2xl text-ink">— in service,</span>
          </motion.div>
        </motion.article>

      </div>
    </section>
  )
}