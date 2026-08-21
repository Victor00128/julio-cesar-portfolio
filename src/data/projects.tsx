import type { ReactNode } from 'react'
import { FaBrain, FaCarSide, FaCode, FaRobot } from 'react-icons/fa'

/**
 * Modelo único para cada proyecto del portafolio.
 * Para agregar otro, crea un objeto en `projects` y coloca su imagen en `public/projects/`.
 */
export interface Project {
  slug: string
  title: string
  summary: string
  problem: string
  built: string
  technical: string
  result: string
  icon: ReactNode
  image: string
  tags: string[]
  github: string
  demo?: string
  featured?: boolean
  status: 'live' | 'development' | 'completed' | 'code'
}

export const projects: Project[] = [
  {
    slug: 'nexus',
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
    slug: 'chatbot-vortex',
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
    slug: 'editor-code',
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
    slug: 'escape-driver',
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
