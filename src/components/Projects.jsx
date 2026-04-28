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
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
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

const IMAGE_COMMENTS = {
  'project-inspector': 'PI',
  'vision-slice': 'VS',
  'medical-search': 'DMS'
}

function ProjectCard({ project, index, large }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, delay: index * 0.15, ease: EASE }}
      whileHover={{ y: -4 }}
      className={`group editorial-card rounded-xl overflow-hidden flex flex-col transition-all duration-500 ${
        large ? 'md:col-span-7' : 'md:col-span-5'
      }`}
    >
      {/* Image area */}
      <div className="relative aspect-video overflow-hidden bg-surface">
        {project.imageKey ? (
          <>
            {project.imageKey === 'project-inspector' && (
              <>
                {/*
                  PROJECT IMAGE — Replace with:
                  <img src="./assets/project-inspector.jpg" alt="Project Inspector" className="w-full h-full object-cover" />
                  Download from: https://github.com/SaimMahmoodRamday/project-inspector/raw/main/assets/projectinspectorgit.jpg
                  Save as: src/assets/project-inspector.jpg
                */}
                <div className="w-full h-full shimmer" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="font-playfair italic font-bold text-5xl text-white/10">PI</div>
                </div>
              </>
            )}
            {project.imageKey === 'vision-slice' && (
              <>
                {/*
                  PROJECT IMAGE — Replace with:
                  <img src="./assets/vision-slice.jpg" alt="VisionSlice" className="w-full h-full object-cover" />
                  Download from: https://github.com/SaimMahmoodRamday/vision-slice/raw/main/assets/visionslicegit.png
                  Save as: src/assets/vision-slice.jpg
                */}
                <div className="w-full h-full shimmer" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="font-playfair italic font-bold text-5xl text-white/10">VS</div>
                </div>
              </>
            )}
            {project.imageKey === 'medical-search' && (
              <>
                {/*
                  PROJECT IMAGE — Replace with:
                  <img src="./assets/medical-search.jpg" alt="Distributed Medical Search Engine" className="w-full h-full object-cover" />
                  Download from: https://github.com/SaimMahmoodRamday/Distributed-Medical-Search-Engine/raw/main/assets/searchenginegit.jpg
                  Save as: src/assets/medical-search.jpg
                */}
                <div className="w-full h-full shimmer" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="font-playfair italic font-bold text-5xl text-white/10">DMS</div>
                </div>
              </>
            )}
          </>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-white/[0.03] to-white/[0.01] flex items-center justify-center">
                  <div className="font-playfair italic font-bold text-5xl text-white/10">PE</div>
                  </div>
        )}
      </div>

      {/* Badge — editorial ivory */}
      <div className="absolute top-3 right-3 z-10">
        <span className="inline-block px-2.5 py-1 font-mono text-[10px] text-ivory/70 tracking-wider uppercase">
          {project.badge}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        {/* Tags — minimal editorial */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block px-2 py-0.5 rounded bg-white/[0.06] font-mono text-[10px] text-white/50 tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="font-syne font-bold text-xl text-text-primary mb-3 group-hover:text-ivory transition-colors duration-500">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-text-muted text-sm leading-[1.7] flex-1">{project.description}</p>

        {/* Performance strip */}
        {project.perfStrip && (
          <div className="mt-4 py-2 border-t border-white/[0.06] font-mono text-[11px] text-text-muted tracking-wider">
            {project.perfStrip}
          </div>
        )}

        {/* Bottom links */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/[0.06]">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} on GitHub`}
            className="inline-flex items-center gap-2 text-text-muted hover:text-text-primary transition-colors duration-500 text-sm"
          >
            <GitHubIcon className="w-4 h-4" />
            <span className="font-mono text-[11px] uppercase tracking-wider">Source</span>
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.title}`}
            className="inline-flex items-center justify-center w-8 h-8 rounded border border-white/10 text-text-muted hover:text-text-primary hover:border-white/30 transition-all duration-500"
          >
            <ArrowIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section-shell bg-bg">
      <div className="container-xl">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="font-syne text-xs uppercase tracking-[0.3em] text-text-muted mb-8"
        >
          PROJECTS
        </motion.div>

        {/* Heading — editorial mixed typography */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
          className="text-3xl md:text-5xl lg:text-6xl text-text-primary mb-4 leading-[1.1]"
        >
          <span className="font-playfair italic">What</span>{' '}
          <span className="font-syne font-bold">I&rsquo;ve Built</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          className="text-text-muted text-base md:text-lg max-w-2xl mb-16"
        >
          Production-grade systems across AI, distributed computing, and computer vision
        </motion.p>

        {/* Asymmetric editorial grid */}
        {/* Row 1: large (60%) + small (40%) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
          <ProjectCard project={PROJECTS[0]} index={0} large={true} />
          <ProjectCard project={PROJECTS[1]} index={1} large={false} />
        </div>
        {/* Row 2: small (40%) + large (60%) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <ProjectCard project={PROJECTS[2]} index={2} large={false} />
          <ProjectCard project={PROJECTS[3]} index={3} large={true} />
        </div>
      </div>
    </section>
  )
}
