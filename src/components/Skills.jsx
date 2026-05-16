import { motion } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1]

const SKILL_GROUPS = [
  {
    label: 'Languages',
    skills: ['Python', 'C', 'Java', 'JavaScript', 'PHP', 'SQL', 'DAX', 'HTML5', 'CSS3']
  },
  {
    label: 'Frameworks & Libraries',
    skills: ['FastAPI', 'React', 'Next.js', 'Laravel', 'LangChain', 'PyTorch', 'TensorFlow', 'Keras']
  },
  {
    label: 'AI/ML & Computer Vision',
    featured: true,
    skills: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'YOLO', 'RF-DETR', 'ByteTrack', 'CNNs', 'Time-Series Analysis', 'LLMs', 'RAG', 'ONNX', 'Pinecone', 'FAISS', 'Feature Engineering']
  },
  {
    label: 'Systems & DevOps',
    skills: ['Docker', 'Docker Compose', 'Git', 'Redis', 'Kafka', 'WebRTC', 'WebSockets', 'Apache Solr', 'ZooKeeper', 'AWS', 'Azure ML']
  },
  {
    label: 'Databases & Analytics',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Power BI']
  }
]

function SkillGroup({ group, groupIndex }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, delay: groupIndex * 0.1, ease: EASE }}
      className={`relative ${group.featured ? 'md:col-span-2' : ''}`}
    >
      {/* Group header — magazine subheader */}
      <div className="flex items-baseline gap-3 mb-5 pb-3 border-b border-rule">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-graphite">
          {String(groupIndex + 1).padStart(2, '0')}
        </span>
        <h3 className="font-serif italic font-semibold text-2xl text-ink ink-bleed">
          {group.label}
        </h3>
      </div>

      {/* Typeset list — flowing serif */}
      <p className="font-serif text-ink-2 text-lg leading-[2] tracking-tight">
        {group.skills.map((skill, i) => (
          <span key={skill}>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: groupIndex * 0.06 + i * 0.04, ease: EASE }}
              className="inline-block hover:text-ink transition-colors duration-300"
            >
              {skill}
            </motion.span>
            {i < group.skills.length - 1 && (
              <span className="text-pencil mx-2 font-serif italic" aria-hidden="true">·</span>
            )}
          </span>
        ))}
      </p>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section-shell bg-paper">
      <div className="container-xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="flex items-center gap-4 mb-10"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-graphite">Chapter IV.</span>
          <span className="h-px flex-1 bg-rule" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-graphite">Stack &amp; Craft</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.0, delay: 0.1, ease: EASE }}
          className="text-4xl md:text-6xl lg:text-7xl text-ink mb-6 leading-[1.05] ink-bleed"
        >
          <span className="font-serif italic">Technical</span>{' '}
          <span className="font-serif font-semibold">Stack &amp; Systems Expertise.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          className="font-hand text-2xl text-graphite mb-16"
        >
          — set in print, by category.
        </motion.p>

        {/* Editorial grid — typeset categorized lists */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {SKILL_GROUPS.map((g, i) => (
            <SkillGroup key={g.label} group={g} groupIndex={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
