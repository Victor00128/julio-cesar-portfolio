import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaRobot, FaCarSide, FaCode } from 'react-icons/fa';

// Mis proyectos — los fui construyendo mientras aprendía
// Chatbot Vortex es el que más me costó y del que más orgulloso estoy

interface Project {
  title: string
  description: string
  story: string           // la historia real detrás del proyecto
  icon: React.ReactNode
  tags: string[]
  github: string
  demo?: string
  gradient: string
  featured?: boolean
  status: 'live' | 'development' | 'completed'
}

const projects: Project[] = [
  {
    title: 'Chatbot Vortex',
    description:
      'Chatbot multimodal que integra Gemini AI y GPT con análisis de PDFs e imágenes. Soporte de conversación contextual multi-turno y múltiples formatos de entrada.',
    story:
      'Lo empecé porque quería entender de verdad cómo funcionan los LLMs, no solo usar las APIs. El mayor reto fue el manejo del contexto entre turnos y hacer que el análisis de PDFs fuera rápido. Aprendí muchísimo sobre rate limiting y optimización de prompts.',
    icon: <FaRobot className="text-5xl sm:text-7xl" />,
    tags: ['React', 'Gemini AI', 'GPT-4', 'PDF Analysis', 'TypeScript', 'Netlify'],
    github: 'https://github.com/Victor00128/Chatbot-Vortex',
    demo: 'https://vortex-ia.netlify.app/',
    gradient: 'from-[#0a1628] to-[#0a0a14]',
    featured: true,
    status: 'live',
  },
  {
    title: 'Escape Driver',
    description:
      'Juego de persecución policial con sistema de estrellas estilo GTA. Canvas 2D con física de colisiones y niveles progresivos de dificultad.',
    story:
      'Lo hice para practicar Canvas API. Nunca había hecho un juego antes, así que fue un experimento puro — mucho debugging de colisiones a las 3am.',
    icon: <FaCarSide className="text-5xl sm:text-7xl" />,
    tags: ['TypeScript', 'React', 'Canvas 2D', 'Game Dev'],
    github: 'https://github.com/Victor00128/Escape-Driver',
    gradient: 'from-[#1a0a28] to-[#0a0a14]',
    status: 'completed',
  },
  {
    title: 'Editor Code',
    description:
      'IDE en el navegador con IA integrada, gestión de archivos, terminal real y vista previa auto-recuperable. Inspirado en VS Code.',
    story:
      'Empezó como una herramienta personal para probar snippets rápido. Después le fui agregando funciones hasta que se convirtió en un mini-IDE.',
    icon: <FaCode className="text-5xl sm:text-7xl" />,
    tags: ['TypeScript', 'React', 'AI', 'Monaco Editor'],
    github: 'https://github.com/Victor00128/EDITOR-CODE',
    gradient: 'from-[#0a2818] to-[#0a0a14]',
    status: 'development',
  },
]

const statusConfig = {
  live: { label: 'LIVE', color: 'text-green-400', bg: 'bg-green-400' },
  development: { label: 'EN DESARROLLO', color: 'text-yellow-400', bg: 'bg-yellow-400' },
  completed: { label: 'COMPLETADO', color: 'text-gray-400', bg: 'bg-gray-400' },
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const status = statusConfig[project.status]

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.15 }}
      className={`relative rounded-2xl overflow-hidden bg-dark-card border border-dark-border glow-border group ${
        project.featured ? 'md:col-span-2' : ''
      }`}
    >
      {/* Badge destacado */}
      {project.featured && (
        <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-cyan-accent/20 border border-cyan-accent/40 text-cyan-accent text-[10px] font-mono uppercase tracking-wider flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-accent animate-pulse" />
          Destacado
        </div>
      )}

      {/* Banner visual */}
      <div
        className={`relative overflow-hidden bg-gradient-to-br ${project.gradient} ${
          project.featured ? 'h-52 sm:h-60' : 'h-44 sm:h-52'
        }`}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-cyan-accent/20 blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-cyan-accent/10 blur-3xl" />
          </div>
          <div className="relative z-10 text-center">
            <motion.div
              animate={
                project.featured
                  ? { rotate: [0, 8, -8, 0] }
                  : { y: [0, -5, 0] }
              }
              transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
              className="text-cyan-accent mx-auto mb-3"
            >
              {project.icon}
            </motion.div>
            <h3 className={`text-white font-bold ${project.featured ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'}`}>
              {project.title}
            </h3>
            {/* Status badge */}
            <div className="flex items-center justify-center gap-2 mt-2">
              <span className={`w-2 h-2 rounded-full ${status.bg} animate-pulse`} />
              <span className={`${status.color} text-xs font-mono`}>{status.label}</span>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-cyan-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Contenido */}
      <div className="p-5 sm:p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="px-2.5 py-0.5 text-[11px] font-mono rounded-full bg-cyan-accent/10 text-cyan-accent border border-cyan-accent/20"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Descripción */}
        <p className="text-gray-400 text-sm leading-relaxed mb-3">{project.description}</p>

        {/* Historia (toque humano) */}
        <div className="bg-[#0a0a14] border border-[#1a1a2e] rounded-lg px-3 py-2.5 mb-5">
          <p className="text-gray-500 text-xs leading-relaxed font-mono">
            <span className="text-cyan-accent/60 mr-1.5">//</span>
            {project.story}
          </p>
        </div>

        {/* Botones */}
        <div className="flex flex-wrap gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ver código de ${project.title} en GitHub`}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1a1a2e] border border-dark-border hover:border-cyan-accent/40 text-white text-sm font-medium transition-all hover:bg-[#1a1a3e]"
          >
            <FaGithub className="text-base" aria-hidden="true" />
            Ver Código
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Probar demo en vivo de ${project.title}`}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-accent text-black text-sm font-bold transition-all hover:bg-[#00e5ff] hover:shadow-lg hover:shadow-cyan-accent/20"
            >
              <FaExternalLinkAlt className="text-xs" aria-hidden="true" />
              Probar Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function FeaturedProject() {
  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Proyecto destacado (ancho completo) */}
      <ProjectCard project={projects[0]} index={0} />

      {/* Resto de proyectos en grilla */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {projects.slice(1).map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i + 1} />
        ))}
      </div>
    </div>
  )
}
