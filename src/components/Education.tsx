import { motion } from 'framer-motion'
import { FaGraduationCap, FaLaptopCode, FaUniversity } from 'react-icons/fa'

interface EduItem {
  type: 'degree' | 'course' | 'self'
  title: string
  institution: string
  year: string
  description: string
  tags: string[]
  link?: string
}

const education: EduItem[] = [
  {
    type: 'degree',
    title: 'Bachillerato completo',
    institution: 'Uruguay',
    year: '2024',
    description: 'Formación secundaria finalizada; aprendí programación por cuenta propia en paralelo.',
    tags: ['Formación secundaria'],
  },
  {
    type: 'course',
    title: 'CS50x – Introduction to Computer Science',
    institution: 'Harvard University',
    year: 'En curso',
    description:
      'Fundamentos en C, algoritmos, memoria, estructuras de datos y grafos. Problem sets completados hasta Tideman.',
    tags: ['C', 'Algoritmos', 'Estructuras de datos'],
    link: 'https://cs50.harvard.edu/x/',
  },
  {
    type: 'self',
    title: 'React, TypeScript e IA aplicada',
    institution: 'Documentación oficial y proyectos propios',
    year: '2022–presente',
    description:
      'Aprendizaje práctico construyendo interfaces, servicios y productos conectados a APIs de IA.',
    tags: ['React', 'TypeScript', 'Node.js', 'APIs de IA'],
  },
]

const iconMap = {
  degree: FaGraduationCap,
  course: FaUniversity,
  self: FaLaptopCode,
}

const colorMap = {
  degree: 'text-cyan-accent border-cyan-accent/40 bg-cyan-accent/10',
  course: 'text-purple-300 border-purple-300/40 bg-purple-300/10',
  self: 'text-green-300 border-green-400/40 bg-green-400/10',
}

export default function Education() {
  return (
    <div className="mx-auto w-full max-w-5xl">
      <p className="mx-auto mb-8 max-w-xl text-center text-sm leading-relaxed text-gray-300 sm:text-base">
        Formación formal, fundamentos en curso y aprendizaje continuo respaldado por proyectos.
      </p>

      <div className="grid gap-4 md:grid-cols-3">
        {education.map((item, index) => {
          const Icon = iconMap[item.type]
          const title = item.link ? (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-4 hover:text-cyan-accent hover:underline"
            >
              {item.title}
            </a>
          ) : item.title

          return (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              className="rounded-xl border border-dark-border bg-dark-card p-5 transition-colors hover:border-cyan-accent/40"
            >
              <div className="flex items-start justify-between gap-3">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border ${colorMap[item.type]}`}>
                  <Icon aria-hidden="true" />
                </div>
                <span className="rounded-full border border-dark-border bg-[#0a0a14] px-2.5 py-1 font-mono text-[10px] font-semibold text-gray-200">
                  {item.year}
                </span>
              </div>

              <h3 className="mt-4 text-base font-bold leading-snug text-white">{title}</h3>
              <p className="mt-1 font-mono text-xs text-cyan-100">{item.institution}</p>
              <p className="mt-3 text-sm leading-relaxed text-gray-300">{item.description}</p>

              <div className="mt-4 flex flex-wrap gap-1.5" aria-label={`Temas de ${item.title}`}>
                {item.tags.map(tag => (
                  <span key={tag} className="rounded-full border border-gray-600/60 px-2 py-0.5 font-mono text-[10px] text-gray-200">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          )
        })}
      </div>
    </div>
  )
}
