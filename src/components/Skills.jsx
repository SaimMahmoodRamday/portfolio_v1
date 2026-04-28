import { motion } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1]

const SKILL_GROUPS = [
  {
    label: 'Languages',
    accent: 'white',
    skills: ['Python', 'C', 'Java', 'JavaScript', 'PHP', 'SQL', 'DAX', 'HTML5', 'CSS3']
  },
  {
    label: 'Frameworks & Libraries',
    accent: 'white',
    skills: ['FastAPI', 'React', 'Next.js', 'Laravel', 'LangChain', 'PyTorch', 'TensorFlow', 'Keras', 'Java Swing', 'Unity', 'MERN']
  },
  {
    label: 'AI/ML & Computer Vision',
    accent: 'cyan',
    skills: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'YOLO', 'RF-DETR', 'DeepSORT', 'ByteTrack', 'CNNs', 'Time-Series Analysis', 'LLMs', 'RAG', 'Feature Engineering']
  },
  {
    label: 'Systems & DevOps',
    accent: 'white',
    skills: ['Docker', 'Docker Compose', 'Git', 'Redis', 'Kafka', 'WebRTC', 'WebSockets', 'Azure ML', 'Apache Solr', 'ZooKeeper']
  },
  {
    label: 'Databases & Analytics',
    accent: 'white',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Power BI', 'Apache Solr']
  }
]

function SkillGroup({ group, groupIndex, position }) {
  const borderColor = group.accent === 'cyan' ? 'border-cyan-400/40' : 'border-white/15'
  const labelColor = group.accent === 'cyan' ? 'text-cyan-400/70' : 'text-white/40'

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, delay: groupIndex * 0.12, ease: EASE }}
      className={position}
    >
      {/* Group label */}
      <div className={`font-mono text-[10px] uppercase tracking-[0.2em] ${labelColor} mb-4`}>
        {group.label}
      </div>

      {/* Skills list — editorial, left-aligned, one per line with thin left border */}
      <div className="space-y-0">
        {group.skills.map((skill, i) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.6, delay: groupIndex * 0.08 + i * 0.03, ease: EASE }}
            className={`border-l ${borderColor} pl-4 py-1.5 text-sm text-white/50 font-sans hover:text-text-primary hover:border-white/40 transition-all duration-400`}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section-shell bg-bg">
      <div className="container-xl">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="font-syne text-xs uppercase tracking-[0.3em] text-text-muted mb-8"
        >
          SKILLS
        </motion.div>

        {/* Heading — editorial mixed typography */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
          className="text-3xl md:text-5xl lg:text-6xl text-text-primary mb-20 leading-[1.1]"
        >
          <span className="font-playfair italic">Technical</span>{' '}
          <span className="font-syne font-bold">Stack & Systems Expertise</span>
        </motion.h2>

        {/* Diagonal layout: two groups above line, two below, one crossing */}
        <div className="relative">
          {/* Top row — 2 groups above the diagonal */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-12">
            <SkillGroup group={SKILL_GROUPS[0]} groupIndex={0} position="" />
            <SkillGroup group={SKILL_GROUPS[1]} groupIndex={1} position="md:mt-8" />
          </div>

          {/* Diagonal line — the visual separator */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1.2, ease: EASE }}
            className="relative my-12 md:my-16 overflow-hidden"
            style={{ transformOrigin: 'left center' }}
          >
            <div
              className="w-full h-[1px]"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.25) 20%, rgba(0,212,255,0.15) 50%, rgba(255,255,255,0.25) 80%, transparent)',
                transform: 'rotate(-2deg)'
              }}
            />
            {/* Label on the diagonal */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6, ease: EASE }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-bg px-6 py-1"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/20">
                Core Stack
              </span>
            </motion.div>
          </motion.div>

          {/* Center — AI/ML group bridging the divide, offset */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            <SkillGroup group={SKILL_GROUPS[2]} groupIndex={2} position="md:col-span-1 md:-mt-6" />
            <SkillGroup group={SKILL_GROUPS[3]} groupIndex={3} position="md:col-span-1 md:mt-4" />
            <SkillGroup group={SKILL_GROUPS[4]} groupIndex={4} position="md:col-span-1 md:mt-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
