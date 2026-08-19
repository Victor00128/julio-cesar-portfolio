import { motion } from 'framer-motion'
import { FaGraduationCap, FaLaptopCode, FaBookOpen, FaUniversity } from 'react-icons/fa'

// -----------------------------------------------
// Mis estudios y cursos completados
// (fui agregando esto conforme avanzaba)
// -----------------------------------------------

interface EduItem {
  type: 'degree' | 'course' | 'self'
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
    title: 'Bachillerato completo',
    institution: 'Uruguay',
    year: '2024',
    description:
      'Formación secundaria terminada. La parte de programación no salió de ahí: la aprendí por mi cuenta, en paralelo.',
    tags: ['Secundaria'],
  },
  {
    type: 'course',
    title: 'CS50x – Introduction to Computer Science',
    institution: 'Harvard University · en curso',
    year: 'En curso',
    description:
      'Lo estoy cursando ahora, por las semanas de algoritmos. Llevo entregados los problem sets hasta Tideman, que resuelve elecciones por pares ordenados con un grafo sin ciclos. Es la parte de fundamentos en C que no cubrí aprendiendo por mi cuenta: punteros, memoria y complejidad.',
    tags: ['C', 'Algoritmos', 'Estructuras de datos', 'Grafos'],
    link: 'https://cs50.harvard.edu/x/',
  },
  {
    type: 'self',
    title: 'React, TypeScript e integración de APIs de IA',
    institution: 'Autodidacta: documentación y proyectos propios',
    year: '2022 – Presente',
    description:
      'No lo aprendí en cursos sino construyendo. Cada cosa que sé la saqué de la documentación oficial y de romper algo en un proyecto propio hasta entenderlo: hooks y estado en React, tipado en TypeScript, y cómo se conectan de verdad las APIs de Gemini y OpenAI a una interfaz.',
    tags: ['React', 'TypeScript', 'Gemini API', 'OpenAI API'],
  },
]

const iconMap = {
  degree: FaGraduationCap,
  course: FaUniversity,
  self: FaLaptopCode,
}

const colorMap = {
  degree: 'text-cyan-accent border-cyan-accent/30 bg-cyan-accent/10',
  course: 'text-purple-300 border-purple-300/30 bg-purple-300/10',
  self: 'text-green-400 border-green-400/30 bg-green-400/10',
}

// Nada de "Certificación" para lo que aprendí solo: no lo es, y decirlo
// exacto da más confianza que inflarlo.
const labelMap = {
  degree: 'Formación',
  course: 'Curso',
  self: 'Formación autodidacta',
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
        <p className="text-gray-300 text-sm max-w-xl mx-auto">
          Terminé el bachillerato y el resto lo aprendí solo.
          <span className="text-cyan-accent"> Casi todo lo que sé hacer</span> salió de
          construir algo que no me funcionaba hasta que funcionó.
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
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
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
                          <FaBookOpen className="text-gray-400 text-[10px]" aria-hidden="true" />
                          <span className="text-gray-400 text-xs font-mono">{item.institution}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono border ${colorClass}`}>
                        {label}
                      </span>
                      <span className="text-gray-400 text-xs font-mono">{item.year}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed mb-3 sm:ml-12">
                    {item.description}
                  </p>

                  {item.tags && (
                    <div className="flex flex-wrap gap-1.5 sm:ml-12">
                      {item.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-[10px] font-mono rounded-full bg-[#0a0a14] text-gray-400 border border-[#1a1a2e]"
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
        <p className="text-gray-300 text-sm">
          <span className="text-cyan-accent font-mono" aria-hidden="true">→</span> Actualmente aprendiendo:{' '}
          <span className="text-cyan-accent font-semibold">Arquitecturas de Agentes IA · RAG · LangChain</span>
        </p>
      </motion.div>
    </div>
  )
}
