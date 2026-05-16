// import { motion } from 'framer-motion'

// const EASE = [0.16, 1, 0.3, 1]

// const SKILL_GROUPS = [
//   {
//     label: 'Languages',
//     skills: ['Python', 'C', 'Java', 'JavaScript', 'PHP', 'SQL', 'DAX', 'HTML5', 'CSS3']
//   },
//   {
//     label: 'Frameworks & Libraries',
//     skills: ['FastAPI', 'React', 'Next.js', 'Laravel', 'LangChain', 'PyTorch', 'TensorFlow', 'Keras']
//   },
//   {
//     label: 'AI/ML & Computer Vision',
//     featured: true,
//     skills: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'YOLO', 'RF-DETR', 'ByteTrack', 'CNNs', 'Time-Series Analysis', 'LLMs', 'RAG', 'ONNX', 'Pinecone', 'FAISS', 'Feature Engineering']
//   },
//   {
//     label: 'Systems & DevOps',
//     skills: ['Docker', 'Docker Compose', 'Git', 'Redis', 'Kafka', 'WebRTC', 'WebSockets', 'Apache Solr', 'ZooKeeper', 'AWS', 'Azure ML']
//   },
//   {
//     label: 'Databases & Analytics',
//     skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Power BI']
//   }
// ]

// function SkillGroup({ group, groupIndex }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
//       whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
//       viewport={{ once: true, margin: '-60px' }}
//       transition={{ duration: 0.9, delay: groupIndex * 0.1, ease: EASE }}
//       className={`relative ${group.featured ? 'md:col-span-2' : ''}`}
//     >
//       {/* Group header — magazine subheader */}
//       <div className="flex items-baseline gap-3 mb-5 pb-3 border-b border-rule">
//         <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-graphite">
//           {String(groupIndex + 1).padStart(2, '0')}
//         </span>
//         <h3 className="font-serif italic font-semibold text-2xl text-ink ink-bleed">
//           {group.label}
//         </h3>
//       </div>

//       {/* Typeset list — flowing serif */}
//       <p className="font-serif text-ink-2 text-lg leading-[2] tracking-tight">
//         {group.skills.map((skill, i) => (
//           <span key={skill}>
//             <motion.span
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true, margin: '-30px' }}
//               transition={{ duration: 0.5, delay: groupIndex * 0.06 + i * 0.04, ease: EASE }}
//               className="inline-block hover:text-ink transition-colors duration-300"
//             >
//               {skill}
//             </motion.span>
//             {i < group.skills.length - 1 && (
//               <span className="text-pencil mx-2 font-serif italic" aria-hidden="true">·</span>
//             )}
//           </span>
//         ))}
//       </p>
//     </motion.div>
//   )
// }

// export default function Skills() {
//   return (
//     <section id="skills" className="section-shell bg-paper">
//       <div className="container-xl">
//         <motion.div
//           initial={{ opacity: 0, y: 12 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: '-80px' }}
//           transition={{ duration: 0.8, ease: EASE }}
//           className="flex items-center gap-4 mb-10"
//         >
//           <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-graphite">Chapter IV.</span>
//           <span className="h-px flex-1 bg-rule" />
//           <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-graphite">Stack &amp; Craft</span>
//         </motion.div>

//         <motion.h2
//           initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
//           whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
//           viewport={{ once: true, margin: '-80px' }}
//           transition={{ duration: 1.0, delay: 0.1, ease: EASE }}
//           className="text-4xl md:text-6xl lg:text-7xl text-ink mb-6 leading-[1.05] ink-bleed"
//         >
//           <span className="font-serif italic">Technical</span>{' '}
//           <span className="font-serif font-semibold">Stack &amp; Systems Expertise.</span>
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
//           className="font-hand text-2xl text-graphite mb-16"
//         >
//           — set in print, by category.
//         </motion.p>

//         {/* Editorial grid — typeset categorized lists */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
//           {SKILL_GROUPS.map((g, i) => (
//             <SkillGroup key={g.label} group={g} groupIndex={i} />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

import { motion } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1]

const COLUMNS = [
  {
    num: '01',
    title: 'Make it think.',
    philosophy: 'Models are one part of the equation — everything around them matters just as much.',
    skills: [
      'PyTorch', 'TensorFlow', 'LangChain', 'LLMs', 'RAG',
      'ONNX', 'YOLOv8', 'RF-DETR', 'DeepLabV3', 'ByteTrack',
      'CNNs', 'Transformers', 'Pinecone', 'FAISS', 'Time-Series',
    ],
  },
  {
    num: '02',
    title: 'Make it survive.',
    philosophy: 'Building AI is easy. Building AI that survives real-world systems is the real engineering.',
    skills: [
      'Kafka', 'FastAPI', 'Docker', 'Redis', 'PostgreSQL',
      'MongoDB', 'WebSockets', 'WebRTC', 'AWS', 'Azure ML',
      'GitHub Actions', 'Modal Labs', 'Vast.ai',
    ],
  },
  {
    num: '03',
    title: 'Make it legible.',
    philosophy: "The toughest challenge isn't solving the problem — it's understanding it from the perspective of the person it serves.",
    skills: [
      'React', 'Next.js', 'Streamlit', 'Power BI',
      'Python', 'JavaScript', 'C++', 'SQL',
    ],
  },
]

function DotList({ skills, delay }) {
  return (
    <p
      style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: '1.15rem',
        lineHeight: 2.1,
        color: '#2a2520',
        letterSpacing: '-0.01em',
        margin: 0,
      }}
    >
      {skills.map((skill, i) => (
        <motion.span
          key={skill}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: delay + i * 0.035, ease: EASE }}
          style={{ display: 'inline' }}
        >
          <span
            style={{
              display: 'inline-block',
              transition: 'color 0.2s',
              cursor: 'default',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#171411')}
            onMouseLeave={e => (e.currentTarget.style.color = '#2a2520')}
          >
            {skill}
          </span>
          {i < skills.length - 1 && (
            <span
              style={{ color: '#8a8278', margin: '0 7px', fontStyle: 'italic' }}
              aria-hidden="true"
            >
              ·
            </span>
          )}
        </motion.span>
      ))}
    </p>
  )
}

function Column({ col, index }) {
  const delay = index * 0.13

  return (
    <motion.div
      initial={{ opacity: 0, y: 28, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.95, delay, ease: EASE }}
      style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
    >
      {/* Number + italic title */}
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: '0.8rem',
          paddingBottom: '0.9rem',
          borderBottom: '1px solid rgba(23,20,17,0.18)',
        }}
      >
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '10px',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#8a8278',
            flexShrink: 0,
          }}
        >
          {col.num}
        </span>
        <h3
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: 'italic',
            fontWeight: 600,
            fontSize: '1.55rem',
            color: '#171411',
            lineHeight: 1,
            margin: 0,
            textShadow:
              '0 0 0.5px currentColor, 0 0 1.2px rgba(23,20,17,0.12)',
          }}
        >
          {col.title}
        </h3>
      </div>

      {/* Philosophy — Caveat handwriting */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: delay + 0.15, ease: EASE }}
        style={{
          fontFamily: "'Caveat', cursive",
          fontSize: '1rem',
          color: '#5b554d',
          lineHeight: 1.55,
          margin: 0,
        }}
      >
        {col.philosophy}
      </motion.p>

      {/* Skills — dot-separated Cormorant */}
      <DotList skills={col.skills} delay={delay + 0.22} />
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section-shell bg-paper">
      <div className="container-xl">

        {/* Chapter header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="flex items-center gap-4 mb-10"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-graphite">
            Chapter IV.
          </span>
          <span className="h-px flex-1 bg-rule" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-graphite">
            Stack &amp; Craft
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.0, delay: 0.08, ease: EASE }}
          className="text-4xl md:text-6xl lg:text-7xl text-ink mb-3 leading-[1.05] ink-bleed"
        >
          <span className="font-serif italic">Technical</span>{' '}
          <span className="font-serif font-semibold">Stack &amp; Systems Expertise.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.18, ease: EASE }}
          className="font-hand text-2xl text-graphite mb-16"
        >
          — the way I think about building.
        </motion.p>

        {/* Three columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '3.5rem 4rem',
          }}
        >
          {COLUMNS.map((col, i) => (
            <Column key={col.num} col={col} index={i} />
          ))}
        </div>

        {/* Footer rule */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.45, ease: EASE }}
          style={{
            marginTop: '4rem',
            paddingTop: '1.25rem',
            borderTop: '1px solid rgba(23,20,17,0.12)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            flexWrap: 'wrap',
            gap: '0.5rem',
          }}
        >
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '10px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#8a8278',
            }}
          >
            Full-stack AI engineering · 2024–2026
          </span>
          <span
            style={{
              fontFamily: "'Caveat', cursive",
              fontSize: '13px',
              color: '#8a8278',
            }}
          >
            models are only one part of the equation.
          </span>
        </motion.div>

      </div>
    </section>
  )
}