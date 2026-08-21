import { motion } from 'framer-motion'
import { FaBrain, FaCarSide, FaCode, FaExternalLinkAlt, FaGithub, FaRobot } from 'react-icons/fa'

interface Project {
  title: string
  summary: string
  problem: string
  built: string
  technical: string
  result: string
  icon: React.ReactNode
  image: string
  tags: string[]
  github: string
  demo?: string
  featured?: boolean
  status: 'live' | 'development' | 'completed' | 'code'
}

const projects: Project[] = [
  {
    title: 'NEXUS',
    summary:
      'Agente de IA capaz de planificar tareas, ejecutar código en un sandbox aislado y devolver archivos utilizables.',
    problem:
      'Los asistentes tradicionales describen cómo resolver una tarea, pero dejan la ejecución y los archivos finales en manos del usuario.',
    built:
      'Construí el loop del agente, la selección automática de habilidades, la ejecución de herramientas y una interfaz que expone cada paso.',
    technical:
      'Orquestación multi-modelo con OpenRouter, sandbox Linux de E2B y recuperación de artefactos generados dentro del contenedor.',
    result:
      'Una demo pública donde el agente puede ejecutar y probar código, procesar archivos y entregar resultados descargables.',
    icon: <FaBrain className="text-5xl sm:text-7xl" />,
    image: '/projects/nexus.webp',
    tags: ['Next.js', 'TypeScript', 'AI Agents', 'E2B Sandbox', 'OpenRouter', 'Tailwind'],
    github: 'https://github.com/Victor00128/NEXUS',
    demo: 'https://nexus-exec.vercel.app/',
    featured: true,
    status: 'live',
  },
  {
    title: 'Chatbot Vortex',
    summary:
      'Cliente multimodal para conversar con varios proveedores de IA, analizar archivos y conservar el contexto entre turnos.',
    problem:
      'Probar modelos, adjuntar documentos y conservar conversaciones suele exigir herramientas separadas o una configuración opaca.',
    built:
      'Desarrollé la experiencia de chat, el historial persistente, la búsqueda, la exportación y el análisis de PDFs, imágenes y otros adjuntos.',
    technical:
      'React 19, TypeScript, almacenamiento local y BYOK para conectar Gemini, OpenAI, Groq, DeepSeek u OpenRouter desde una sola interfaz.',
    result:
      'Demo pública con modo offline por defecto, estados de error claros y flujos listos para validar conversaciones y claves propias.',
    icon: <FaRobot className="text-5xl sm:text-7xl" />,
    image: '/projects/vortex.webp',
    tags: ['React 19', 'TypeScript', 'BYOK', 'PDF e imágenes', 'Vite'],
    github: 'https://github.com/Victor00128/Chatbot-Vortex',
    demo: 'https://chatbot-vortex.vercel.app/',
    status: 'live',
  },
  {
    title: 'Editor Code',
    summary:
      'IDE local con edición, terminal, contexto de archivos y un agente de IA que propone cambios revisables.',
    problem:
      'Los flujos de desarrollo asistido pierden contexto cuando editor, terminal, archivos y vista previa viven en superficies distintas.',
    built:
      'Integré explorador de archivos, Monaco Editor, terminal real, diffs multiarchivo y una vista previa que devuelve errores al agente.',
    technical:
      'Electron IPC conecta React con Node.js, node-pty, el sistema de archivos y Chokidar sin convertir la interfaz en un simple chat.',
    result:
      'Prototipo funcional en desarrollo con CI para lint, tipos y tests; el código y la guía de instalación están disponibles.',
    icon: <FaCode className="text-5xl sm:text-7xl" />,
    image: '/projects/zenith.webp',
    tags: ['Electron', 'React', 'TypeScript', 'Monaco', 'Node-PTY'],
    github: 'https://github.com/Victor00128/EDITOR-CODE',
    status: 'development',
  },
  {
    title: 'Escape Driver',
    summary:
      'Juego arcade de persecución policial con física, dificultad progresiva y una ciudad de neón renderizada en Canvas.',
    problem:
      'Una persecución cenital necesita movimiento legible, colisiones consistentes y rivales que presionen sin limitarse a seguir al jugador.',
    built:
      'Programé el loop de juego, el HUD, los vehículos, los power-ups, la progresión de estrellas y roles coordinados para la policía.',
    technical:
      'Motor Canvas 2D desacoplado de React, mapa procedural y audio de motor y sirenas sintetizado con Web Audio API.',
    result:
      'Juego publicado y controlable con teclado, con tres dificultades, cuatro vehículos y logros persistidos en el navegador.',
    icon: <FaCarSide className="text-5xl sm:text-7xl" />,
    image: '/projects/escape-driver.png',
    tags: ['React 19', 'TypeScript', 'Canvas 2D', 'Web Audio', 'Game AI'],
    github: 'https://github.com/Victor00128/Escape-Driver',
    demo: 'https://escape-driver.vercel.app/',
    status: 'live',
  },
]

const statusConfig = {
  live: { label: 'Demo en vivo', color: 'text-green-300', bg: 'bg-green-400' },
  code: { label: 'Código disponible', color: 'text-cyan-accent', bg: 'bg-cyan-accent' },
  development: { label: 'En desarrollo', color: 'text-yellow-300', bg: 'bg-yellow-300' },
  completed: { label: 'Completado', color: 'text-gray-200', bg: 'bg-gray-200' },
}

const detailLabels = {
  problem: 'Problema',
  built: 'Qué construí',
  technical: 'Decisión técnica',
  result: 'Estado / resultado',
} as const

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Ver código de ${project.title} en GitHub`}
        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-gray-500/70 bg-[#1a1a2e] px-4 py-2 text-sm font-semibold text-white transition-all hover:border-cyan-accent/60 hover:bg-[#20203b]"
      >
        <FaGithub className="text-base" aria-hidden="true" />
        Ver código
      </a>
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Probar demo en vivo de ${project.title}`}
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-cyan-accent px-4 py-2 text-sm font-bold text-black transition-all hover:bg-[#00e5ff] hover:shadow-lg hover:shadow-cyan-accent/20"
        >
          <FaExternalLinkAlt className="text-xs" aria-hidden="true" />
          Probar demo
        </a>
      )}
    </div>
  )
}

function ProjectVisual({ project }: { project: Project }) {
  const status = statusConfig[project.status]

  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-[#0a1628] to-[#0a0a14] ${project.featured ? 'aspect-[16/8.5]' : 'aspect-[16/9]'}`}>
      <img
        src={project.image}
        alt={`Vista previa de ${project.title}`}
        loading="lazy"
        className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.025]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-dark-card/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 sm:p-6">
        <div>
          <h3 className={`font-bold text-white drop-shadow-lg ${project.featured ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'}`}>
            {project.title}
          </h3>
          <div className="mt-1.5 flex items-center gap-2">
            <span className={`h-2 w-2 rounded-full ${status.bg}`} aria-hidden="true" />
            <span className={`${status.color} text-xs font-semibold uppercase tracking-wide`}>{status.label}</span>
          </div>
        </div>
        <span className="hidden text-3xl text-cyan-accent/80 sm:block sm:text-4xl" aria-hidden="true">
          {project.icon}
        </span>
      </div>
    </div>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      className="group overflow-hidden rounded-2xl border border-dark-border bg-dark-card transition-colors duration-300 hover:border-cyan-accent/50"
    >
      <ProjectVisual project={project} />

      <div className="p-5 sm:p-6">
        <div className="mb-4 flex flex-wrap gap-2" aria-label={`Tecnologías de ${project.title}`}>
          {project.tags.map(tag => (
            <span
              key={tag}
              className="rounded-full border border-cyan-accent/35 bg-cyan-accent/10 px-2.5 py-1 font-mono text-[11px] font-medium text-cyan-100"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="mb-5 text-sm leading-relaxed text-gray-200">{project.summary}</p>

        <dl className="mb-5 divide-y divide-dark-border rounded-xl border border-dark-border bg-[#0a0a14] px-4">
          {(Object.keys(detailLabels) as Array<keyof typeof detailLabels>).map(key => (
            <div key={key} className="py-3">
              <dt className="mb-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-cyan-accent">
                {detailLabels[key]}
              </dt>
              <dd className="text-xs leading-relaxed text-gray-200">{project[key]}</dd>
            </div>
          ))}
        </dl>

        <ProjectLinks project={project} />
      </div>
    </motion.article>
  )
}

function NexusCase({ project }: { project: Project }) {
  const facts = [
    { label: 'Problema', text: project.problem },
    { label: 'Solución', text: project.built },
    { label: 'Resultado técnico', text: project.result },
  ]

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group overflow-hidden rounded-2xl border border-cyan-accent/45 bg-dark-card shadow-[0_0_40px_rgba(0,201,255,0.08)]"
    >
      <div className="relative">
        <ProjectVisual project={project} />
        <div className="absolute right-4 top-4 rounded-full border border-cyan-accent/60 bg-[#07111d]/90 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-cyan-accent backdrop-blur-sm">
          Caso principal
        </div>
      </div>

      <div className="p-5 sm:p-8">
        <p className="max-w-3xl text-base font-medium leading-relaxed text-white sm:text-lg">
          {project.summary}
        </p>

        <div className="my-6 grid gap-3 md:grid-cols-3">
          {facts.map(fact => (
            <div key={fact.label} className="rounded-xl border border-dark-border bg-[#0a0a14] p-4">
              <h4 className="mb-2 font-mono text-xs font-bold uppercase tracking-wider text-cyan-accent">
                {fact.label}
              </h4>
              <p className="text-sm leading-relaxed text-gray-200">{fact.text}</p>
            </div>
          ))}
        </div>

        <div className="mb-6 rounded-xl border border-cyan-accent/25 bg-cyan-accent/5 p-4">
          <p className="mb-1 font-mono text-xs font-semibold uppercase tracking-wider text-cyan-accent">
            Decisión técnica clave
          </p>
          <p className="text-sm leading-relaxed text-gray-200">{project.technical}</p>
        </div>

        <div className="mb-6 flex flex-wrap gap-2" aria-label="Tecnologías de NEXUS">
          {project.tags.map(tag => (
            <span key={tag} className="rounded-full border border-cyan-accent/40 bg-cyan-accent/10 px-3 py-1 font-mono text-[11px] font-medium text-cyan-100">
              {tag}
            </span>
          ))}
        </div>

        <ProjectLinks project={project} />
      </div>
    </motion.article>
  )
}

export default function FeaturedProject() {
  return (
    <div className="mx-auto w-full max-w-5xl">
      <p className="mx-auto mb-8 max-w-2xl text-center text-sm leading-relaxed text-gray-300 sm:text-base">
        Productos propios que se pueden abrir, probar y revisar en código. NEXUS es el trabajo más
        completo; los demás muestran amplitud entre IA, herramientas de desarrollo y Canvas.
      </p>

      <NexusCase project={projects[0]} />

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.slice(1).map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index + 1} />
        ))}
      </div>
    </div>
  )
}
