import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaRobot, FaCarSide, FaCode, FaBrain } from 'react-icons/fa';

// Mis proyectos — los fui construyendo mientras aprendía.
// NEXUS es el más ambicioso: un agente de IA que ejecuta código de verdad.

interface Project {
  title: string
  description: string
  story: string           // la historia real detrás del proyecto
  icon: React.ReactNode
  image?: string          // screenshot real (banner); si falta, se usa el icono
  tags: string[]
  github: string
  demo?: string
  gradient: string
  featured?: boolean
  status: 'live' | 'development' | 'completed'
}

const projects: Project[] = [
  {
    title: 'NEXUS',
    description:
      'Workspace de IA multi-modelo con un agente autónomo: planifica, ejecuta código en un sandbox cloud real y construye archivos por ti. Orquestación multi-modelo (RACE/SYNTHESIS), análisis de archivos y UI de razonamiento estilo Claude.',
    story:
      'Lo construí para ir más allá del chat: que la IA realmente *haga* el trabajo, no solo que responda. El mayor reto fue el loop del agente sobre el sandbox E2B y capturar los archivos que genera como artefactos descargables.',
    icon: <FaBrain className="text-5xl sm:text-7xl" />,
    image: '/projects/nexus.png',
    tags: ['Next.js', 'TypeScript', 'AI Agents', 'E2B Sandbox', 'OpenRouter', 'Tailwind'],
    github: 'https://github.com/Victor00128/NEXUS',
    gradient: 'from-[#0a1628] to-[#0a0a14]',
    featured: true,
    status: 'live',
  },
  {
    title: 'Chatbot Vortex',
    description:
      'Chatbot multimodal que integra Gemini AI y GPT con análisis de PDFs e imágenes. Conversación contextual multi-turno y múltiples formatos de entrada.',
    story:
      'Lo empecé porque quería entender de verdad cómo funcionan los LLMs, no solo usar las APIs. El mayor reto fue el manejo del contexto entre turnos y hacer que el análisis de PDFs fuera rápido.',
    icon: <FaRobot className="text-5xl sm:text-7xl" />,
    image: '/projects/vortex.png',
    tags: ['React', 'Gemini AI', 'GPT-4', 'PDF Analysis', 'TypeScript', 'Netlify'],
    github: 'https://github.com/Victor00128/Chatbot-Vortex',
    demo: 'https://vortex-ia.netlify.app/',
    gradient: 'from-[#0a1628] to-[#0a0a14]',
    status: 'live',
  },
  {
    title: 'Editor Code',
    description:
      'IDE en el navegador con IA integrada, gestión de archivos, terminal real y vista previa auto-recuperable. Inspirado en VS Code.',
    story:
      'Empezó como una herramienta personal para probar snippets rápido. Después le fui agregando funciones hasta que se convirtió en un mini-IDE con IA.',
    icon: <FaCode className="text-5xl sm:text-7xl" />,
    image: '/projects/zenith.png',
    tags: ['TypeScript', 'React', 'AI', 'Monaco Editor'],
    github: 'https://github.com/Victor00128/EDITOR-CODE',
    gradient: 'from-[#0a2818] to-[#0a0a14]',
    status: 'development',
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
      transition={{ duration: 0.55, delay: index * 0.12 }}
      className={`relative rounded-2xl overflow-hidden bg-dark-card border border-dark-border glow-border group hover:border-cyan-accent/40 transition-colors duration-500 ${
        project.featured ? 'md:col-span-2' : ''
      }`}
    >
      {/* Badge destacado */}
      {project.featured && (
        <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-cyan-accent/20 border border-cyan-accent/40 text-cyan-accent text-[10px] font-mono uppercase tracking-wider flex items-center gap-1.5 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-accent animate-pulse" />
          Destacado
        </div>
      )}

      {/* Banner visual */}
      <div
        className={`relative overflow-hidden bg-gradient-to-br ${project.gradient} ${
          project.featured ? 'h-60 sm:h-80' : 'h-48 sm:h-56'
        }`}
      >
        {project.image ? (
          <>
            {/* Screenshot real del proyecto */}
            <img
              src={project.image}
              alt={`Vista previa de ${project.title}`}
              loading="lazy"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
            />
            {/* Scrim para legibilidad del título */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-dark-card/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
              <div>
                <h3 className={`text-white font-bold drop-shadow-lg ${project.featured ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'}`}>
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 mt-1.5">
                  <span className={`w-2 h-2 rounded-full ${status.bg} animate-pulse`} />
                  <span className={`${status.color} text-xs font-mono`}>{status.label}</span>
                </div>
              </div>
              <span className="text-cyan-accent/70 text-3xl sm:text-4xl hidden sm:block">{project.icon}</span>
            </div>
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-cyan-accent/20 blur-3xl" />
              <div className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-cyan-accent/10 blur-3xl" />
            </div>
            <div className="relative z-10 text-center">
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
                className="text-cyan-accent mx-auto mb-3"
              >
                {project.icon}
              </motion.div>
              <h3 className={`text-white font-bold ${project.featured ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'}`}>
                {project.title}
              </h3>
              <div className="flex items-center justify-center gap-2 mt-2">
                <span className={`w-2 h-2 rounded-full ${status.bg} animate-pulse`} />
                <span className={`${status.color} text-xs font-mono`}>{status.label}</span>
              </div>
            </div>
          </div>
        )}
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
