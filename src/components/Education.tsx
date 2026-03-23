import { motion } from 'framer-motion'
import { FaGraduationCap, FaCertificate, FaBookOpen } from 'react-icons/fa'
import { SiUdemy } from 'react-icons/si'

// -----------------------------------------------
// Mis estudios y cursos completados
// (fui agregando esto conforme avanzaba)
// -----------------------------------------------

interface EduItem {
  type: 'degree' | 'course' | 'cert'
  title: string
  institution: string
  year: string
  description: string
  tags?: string[]
  link?: string
}

const education: EduItem[] = [
  {
    type: 'degree',
    title: 'Bachillerato Técnico en Informática',
    institution: 'Institución Educativa Técnica',
    year: '2022 – 2024',
    description:
      'Base sólida en fundamentos de programación, redes, bases de datos y lógica de sistemas. Donde empecé a entender por qué la tecnología me apasiona tanto.',
    tags: ['Programación', 'Redes', 'Bases de Datos'],
  },
  {
    type: 'course',
    title: 'React + TypeScript – De cero a experto',
    institution: 'Udemy',
    year: '2023',
    description:
      'Curso completo donde aprendí hooks, context API, patrones modernos y TypeScript aplicado a proyectos reales. Lo hice en paralelo mientras construía mis primeros proyectos.',
    tags: ['React', 'TypeScript', 'Hooks', 'Context API'],
    link: 'https://www.udemy.com',
  },
  {
    type: 'course',
    title: 'Node.js, Express & REST APIs',
    institution: 'Udemy / Platzi',
    year: '2023',
    description:
      'Aprendí a construir APIs RESTful, manejo de autenticación con JWT, bases de datos con PostgreSQL y despliegue en servicios cloud.',
    tags: ['Node.js', 'Express', 'JWT', 'PostgreSQL'],
  },
  {
    type: 'cert',
    title: 'Integración de LLMs y APIs de IA',
    institution: 'Autodidacta + Documentación oficial',
    year: '2024',
    description:
      'Aprendí a integrar Gemini AI y GPT-4 en aplicaciones web reales, construyendo el Chatbot Vortex como proyecto final. Mucho trial & error 😅 pero valió la pena.',
    tags: ['Gemini AI', 'GPT-4', 'LangChain', 'Prompt Engineering'],
  },
  {
    type: 'course',
    title: 'Tailwind CSS + Diseño UI Moderno',
    institution: 'YouTube / Documentación',
    year: '2023',
    description:
      'Dominio de Tailwind CSS v3/v4, diseño responsive, dark mode y sistemas de diseño. La mayor parte la aprendí construyendo interfaces y viendo qué se veía bien.',
    tags: ['Tailwind CSS', 'UI/UX', 'Diseño Responsive'],
  },
]

const iconMap = {
  degree: FaGraduationCap,
  course: SiUdemy,
  cert: FaCertificate,
}

const colorMap = {
  degree: 'text-cyan-accent border-cyan-accent/30 bg-cyan-accent/10',
  course: 'text-purple-accent border-purple-accent/30 bg-purple-accent/10',
  cert: 'text-green-400 border-green-400/30 bg-green-400/10',
}

const labelMap = {
  degree: 'Formación',
  course: 'Curso',
  cert: 'Certificación',
}

export default function Education() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Intro */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <p className="text-gray-400 text-sm max-w-xl mx-auto">
          Mi aprendizaje es una mezcla de formación técnica y autodidactismo.
          <span className="text-cyan-accent"> Construir proyectos reales</span> siempre fue
          mi método favorito para aprender.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Línea vertical */}
        <div className="absolute left-6 top-0 bottom-0 w-px timeline-line hidden sm:block" />

        <div className="space-y-5">
          {education.map((item, i) => {
            const Icon = iconMap[item.type]
            const colorClass = colorMap[item.type]
            const label = labelMap[item.type]

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.45 }}
                className="sm:pl-16 relative"
              >
                {/* Punto en la línea */}
                <div
                  className={`absolute left-4 top-5 w-5 h-5 rounded-full border-2 ${colorClass} hidden sm:flex items-center justify-center -translate-x-1/2`}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-current" />
                </div>

                <div className="bg-dark-card border border-dark-border rounded-xl p-5 hover:border-cyan-accent/25 transition-colors group">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-lg border flex items-center justify-center flex-shrink-0 ${colorClass}`}>
                        <Icon className="text-sm" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-sm leading-tight">
                          {item.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-0.5">
                          <FaBookOpen className="text-gray-600 text-[10px]" />
                          <span className="text-gray-500 text-xs font-mono">{item.institution}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono border ${colorClass}`}>
                        {label}
                      </span>
                      <span className="text-gray-600 text-xs font-mono">{item.year}</span>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-3 ml-12">
                    {item.description}
                  </p>

                  {item.tags && (
                    <div className="flex flex-wrap gap-1.5 ml-12">
                      {item.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-[10px] font-mono rounded-full bg-[#0a0a14] text-gray-500 border border-[#1a1a2e]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Nota de aprendizaje continuo */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-8 p-4 rounded-xl border border-cyan-accent/15 bg-cyan-accent/5 text-center"
      >
        <p className="text-gray-400 text-sm">
          <span className="text-cyan-accent font-mono">→</span> Actualmente aprendiendo:{' '}
          <span className="text-cyan-accent font-semibold">Arquitecturas de Agentes IA · RAG · LangChain</span>
        </p>
      </motion.div>
    </div>
  )
}
