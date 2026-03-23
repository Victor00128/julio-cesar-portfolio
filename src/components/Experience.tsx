import { motion } from 'framer-motion'
import { FaCode, FaRocket, FaUsers, FaStar } from 'react-icons/fa'

// Mi experiencia real - proyectos freelance y personales
// La mayoría son clientes directos, no agencias

interface ExpItem {
  role: string
  company: string
  period: string
  type: 'freelance' | 'personal' | 'colaboracion'
  description: string
  achievements: string[]
  tech: string[]
}

const experiences: ExpItem[] = [
  {
    role: 'Full Stack Developer – Freelance',
    company: 'Clientes directos / Proyectos independientes',
    period: 'Ene 2024 – Presente',
    type: 'freelance',
    description:
      'Desarrollo de aplicaciones web a medida para clientes que me contactaron principalmente a través de LinkedIn y referencias. Me enfoco en entregar productos funcionales, responsivos y con buen rendimiento.',
    achievements: [
      'Chatbots con IA integrada para automatizar atención al cliente',
      'Landing pages y tiendas con tasas de conversión medibles',
      'Integraciones con APIs externas (pagos, notificaciones, CRMs)',
    ],
    tech: ['React', 'TypeScript', 'Node.js', 'Supabase', 'Tailwind CSS'],
  },
  {
    role: 'Creador – Chatbot Vortex',
    company: 'Proyecto Personal',
    period: 'Sep 2024 – Presente',
    type: 'personal',
    description:
      'Diseñé y construí desde cero un chatbot multimodal que combina Gemini AI y GPT. El mayor reto fue manejar el contexto de conversaciones largas y el análisis de PDFs en tiempo real. Actualmente está en uso por usuarios beta.',
    achievements: [
      'Soporte para PDFs, imágenes y texto en una sola interfaz',
      'Sistema de contexto persistente entre sesiones',
      'Desplegado en Netlify con CI/CD automático',
    ],
    tech: ['React', 'Gemini AI', 'GPT-4', 'PDF.js', 'Netlify'],
  },
  {
    role: 'Desarrollador de Herramientas Web',
    company: 'Colaboraciones Open Source',
    period: '2023 – Presente',
    type: 'colaboracion',
    description:
      'Participé en pequeñas colaboraciones y aporté mejoras a proyectos de la comunidad. Me gusta revisar código ajeno porque siempre se aprende algo nuevo.',
    achievements: [
      'Corrección de bugs y mejoras de rendimiento',
      'Documentación y README de proyectos',
      'Code reviews en proyectos de compañeros',
    ],
    tech: ['Git', 'GitHub', 'TypeScript', 'React'],
  },
]

const typeConfig = {
  freelance: { color: 'text-cyan-accent bg-cyan-accent/10 border-cyan-accent/30', label: 'Freelance' },
  personal: { color: 'text-green-400 bg-green-400/10 border-green-400/30', label: 'Proyecto Propio' },
  colaboracion: { color: 'text-purple-400 bg-purple-400/10 border-purple-400/30', label: 'Colaboración' },
}

export default function Experience() {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-5">
      {experiences.map((exp, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.12, duration: 0.5 }}
          className="bg-dark-card border border-dark-border rounded-xl p-5 sm:p-6 hover:border-cyan-accent/25 transition-all duration-300 group"
        >
          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-cyan-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-accent/20 transition-colors">
                {exp.type === 'freelance' ? (
                  <FaCode className="text-cyan-accent" />
                ) : exp.type === 'personal' ? (
                  <FaRocket className="text-green-400" />
                ) : (
                  <FaUsers className="text-purple-400" />
                )}
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm">{exp.role}</h3>
                <p className="text-gray-500 text-xs font-mono mt-0.5">{exp.company}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span
                className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono border ${typeConfig[exp.type].color}`}
              >
                {typeConfig[exp.type].label}
              </span>
              <span className="text-gray-600 text-xs font-mono">{exp.period}</span>
            </div>
          </div>

          {/* Descripción */}
          <p className="text-gray-400 text-sm leading-relaxed mb-4">{exp.description}</p>

          {/* Logros */}
          <ul className="space-y-1.5 mb-4">
            {exp.achievements.map((a, j) => (
              <li key={j} className="flex items-start gap-2 text-sm text-gray-400">
                <FaStar className="text-cyan-accent/60 text-[10px] mt-1.5 flex-shrink-0" />
                {a}
              </li>
            ))}
          </ul>

          {/* Tech */}
          <div className="flex flex-wrap gap-2">
            {exp.tech.map(t => (
              <span
                key={t}
                className="px-2 py-0.5 text-[10px] font-mono rounded-full bg-[#0a0a14] text-cyan-accent border border-cyan-accent/20"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
