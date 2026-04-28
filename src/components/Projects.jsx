import { motion } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1]

function GitHubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 007.86 10.94c.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.87-1.54-3.87-1.54-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.2-3.1-.12-.3-.52-1.49.11-3.1 0 0 .98-.32 3.2 1.18a11.1 11.1 0 015.83 0c2.22-1.5 3.2-1.18 3.2-1.18.63 1.61.23 2.8.11 3.1.75.81 1.2 1.84 1.2 3.1 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.67.8.56A11.5 11.5 0 0023.5 12C23.5 5.73 18.27.5 12 .5z" />
    </svg>
  )
}

function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  )
}

const PROJECTS = [
  {
    title: 'Project Inspector',
    github: 'https://github.com/SaimMahmoodRamday/project-inspector',
    tags: ['Python', 'FastAPI', 'React', 'LangChain', 'Docker', 'NetworkX', 'Graphviz'],
    badge: 'AI-Powered · Full-Stack',
    description:
      'A Dockerized full-stack system that deconstructs codebases into interpretable structures. Generates dependency and call graphs using NetworkX and Graphviz, while leveraging LLMs via LangChain to produce contextual code summaries — enabling rapid understanding of unfamiliar projects through a clean web UI.',
    imageKey: 'project-inspector',
    perfStrip: null
  },
  {
    title: 'VisionSlice',
    github: 'https://github.com/SaimMahmoodRamday/vision-slice',
    tags: ['YOLOv8', 'ByteTrack', 'DeepLabV3', 'Streamlit', 'Docker', 'CUDA', 'Python'],
    badge: 'Computer Vision · GPU-Deployed',
    description:
      'A real-time computer vision system designed for operational environments. Combines object detection, multi-object tracking with persistent IDs, semantic segmentation, and zone-based spatial reasoning to monitor safety conditions — deployed with GPU-accelerated Docker inference on Vast.ai for low-latency performance.',
    imageKey: 'vision-slice',
    perfStrip: null
  },
  {
    title: 'Distributed Medical Search Engine',
    github: 'https://github.com/SaimMahmoodRamday/Distributed-Medical-Search-Engine',
    tags: ['Apache Solr', 'ZooKeeper', 'Docker', 'Node.js', 'Gemini LLM', 'JMeter'],
    badge: 'Distributed Systems · LLM-Powered',
    description:
      'A fault-tolerant distributed search platform for large-scale medical literature. Implements sharding, replication, and automatic failover via Apache ZooKeeper, enhanced with Gemini LLM-powered abstractive summarization. Handles 1,000 concurrent requests at 13ms average response time.',
    imageKey: 'medical-search',
    perfStrip: '1,000 reqs  ·  13ms avg  ·  95% success rate'
  },
  {
    title: 'Pak Econ RAG',
    github: 'https://github.com/SaimMahmoodRamday/pak-econ-rag',
    tags: ['Python', 'LangChain', 'RAG', 'Vector DB', 'LLM'],
    badge: 'RAG · Economic Intelligence',
    description:
      'A retrieval-augmented generation system that grounds LLM responses in verified economic data. Bridges the gap between raw financial documents and interpretable insights through structured retrieval pipelines and generation — enabling accurate, explainable answers to complex economic questions.',
    imageKey: null,
    perfStrip: null
  }
]

const IMAGE_MONO = {
  'project-inspector': 'PI',
  'vision-slice': 'VS',
  'medical-search': 'DMS'
}

function ProjectCard({ project, index }) {
  const monogram = IMAGE_MONO[project.imageKey] || 'PE'
  // alternating slight rotation for stacked-paper feel
  const tilt = index % 2 === 0 ? '-0.4deg' : '0.4deg'

  return (
    <motion.article
      initial={{ opacity: 0, y: 36, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 1.0, delay: index * 0.12, ease: EASE }}
      style={{ transform: `rotate(${tilt})` }}
      className="paper-card group flex flex-col overflow-hidden"
    >
      {/* Case study header — printed metadata strip */}
      <header className="px-7 pt-7 pb-4 border-b border-rule">
        <div className="flex items-center justify-between mb-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-graphite">
            Case № {String(index + 1).padStart(2, '0')}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink">
            {project.badge}
          </span>
        </div>
        <h3 className="font-serif italic font-bold text-3xl md:text-4xl text-ink leading-tight ink-bleed">
          {project.title}
        </h3>
      </header>

      {/* Plate / preview — paper-mounted */}
      <div className="px-7 pt-6">
        <div className="relative aspect-[16/9] overflow-hidden bg-paper-deep border border-rule">
          {project.imageKey ? (
            <>
              <div className="w-full h-full shimmer" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="font-serif italic font-bold text-6xl text-ink/15">{monogram}</div>
              </div>
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="font-serif italic font-bold text-6xl text-ink/15">PE</div>
            </div>
          )}
          {/* corner caption */}
          <div className="absolute bottom-2 left-2 font-mono text-[9px] uppercase tracking-wider text-graphite bg-paper/85 px-1.5 py-0.5">
            Fig. {index + 1}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-7">
        {/* Tags — typeset list */}
        <div className="flex flex-wrap gap-x-3 gap-y-1 mb-5 font-mono text-[10px] uppercase tracking-[0.18em] text-graphite">
          {project.tags.map((tag, i) => (
            <span key={tag} className="inline-flex items-center">
              {i > 0 && <span className="mr-3 text-pencil">·</span>}
              {tag}
            </span>
          ))}
        </div>

        <p className="font-serif text-ink-2 text-base leading-[1.75] flex-1">
          {project.description}
        </p>

        {project.perfStrip && (
          <div className="mt-5 py-2 border-t border-b border-rule font-mono text-[11px] tracking-[0.15em] text-ink text-center">
            {project.perfStrip}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between mt-6 pt-5 border-t border-rule">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} on GitHub`}
            className="inline-flex items-center gap-2 text-graphite hover:text-ink transition-colors duration-500"
          >
            <GitHubIcon className="w-4 h-4" />
            <span className="font-mono text-[10px] uppercase tracking-[0.22em]">Source</span>
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.title}`}
            className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-ink group/link"
          >
            Read in full
            <ArrowIcon className="w-3.5 h-3.5 transition-transform duration-500 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
          </a>
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section-shell bg-paper">
      <div className="container-xl">
        {/* Folio header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="flex items-center gap-4 mb-10"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-graphite">Chapter II.</span>
          <span className="h-px flex-1 bg-rule" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-graphite">Projects</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.0, delay: 0.1, ease: EASE }}
          className="text-4xl md:text-6xl lg:text-7xl text-ink mb-4 leading-[1.05] ink-bleed"
        >
          <span className="font-serif italic">What</span>{' '}
          <span className="font-serif font-semibold">I&rsquo;ve Built.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          className="font-serif italic text-graphite text-lg max-w-2xl mb-16"
        >
          Production-grade systems across AI, distributed computing, and computer vision —
          set in print as case studies.
        </motion.p>

        {/* Two-column grid of paper case studies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
