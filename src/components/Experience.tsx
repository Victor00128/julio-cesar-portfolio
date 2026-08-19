import { motion } from 'framer-motion'
import { FaCode, FaRocket, FaUsers, FaStar } from 'react-icons/fa'

// Mi experiencia: productos propios, construidos enteros y publicados.
// Todavía sin clientes; lo que hay aquí se puede abrir y revisar.

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
    role: 'PrimeHub – Tienda online con panel de administración',
    company: 'Proyecto propio, e-commerce completo',
    period: 'Mar 2026 – Jun 2026',
    type: 'personal',
    description:
      'Una tienda con reparto para Montevideo, construida entera: catálogo, carrito, checkout con dirección y método de pago, y un panel aparte para empleados y administración. Tres áreas separadas, cada una protegida por sesión y rol.',
    achievements: [
      'Tres roles con permisos distintos: cliente, empleado y administración',
      'Funciona con datos locales y escala a Netlify Blobs o Supabase sin tocar el código',
      'React Router 7 sobre un servidor Hono, desplegado en Netlify',
    ],
    tech: ['React 19', 'React Router 7', 'Hono', 'Tailwind CSS', 'Netlify'],
  },
  {
    role: 'NEXUS – Agente que ejecuta el código que escribe',
    company: 'Proyecto propio',
    period: '2026 – Presente',
    type: 'personal',
    description:
      'Un espacio de trabajo donde el agente planifica, corre el código en un sandbox de E2B y devuelve los archivos que genera. Lo que más trabajo dio fue el loop del agente: decidir cuándo tiene que parar y cómo recuperar lo que produce dentro del contenedor.',
    achievements: [
      'Orquestación entre varios modelos a través de OpenRouter',
      'Ejecución aislada en sandbox cloud y descarga de los artefactos generados',
      'Interfaz que muestra el plan y el razonamiento paso a paso',
    ],
    tech: ['Next.js', 'TypeScript', 'E2B Sandbox', 'OpenRouter'],
  },
  {
    role: 'Chatbot Vortex – Cliente multiproveedor de IA',
    company: 'Proyecto propio, con demo pública',
    period: 'Sep 2024 – Presente',
    type: 'personal',
    description:
      'Un chatbot multimodal sobre Gemini y GPT, hecho desde cero. El problema de fondo fue el contexto: cuánto historial mandar en cada turno sin disparar el coste, y qué recortar cuando la conversación se alarga.',
    achievements: [
      'PDFs, imágenes y texto en una sola interfaz',
      'Modo local y BYOK: cada quien usa su propia clave',
      'Historial y exportación de conversaciones, desplegado en Netlify',
    ],
    tech: ['React', 'Gemini API', 'OpenAI API', 'PDF.js', 'Netlify'],
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
                <p className="text-gray-400 text-xs font-mono mt-0.5">{exp.company}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span
                className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono border ${typeConfig[exp.type].color}`}
              >
                {typeConfig[exp.type].label}
              </span>
              <span className="text-gray-400 text-xs font-mono">{exp.period}</span>
            </div>
          </div>

          {/* Descripción */}
          <p className="text-gray-300 text-sm leading-relaxed mb-4">{exp.description}</p>

          {/* Logros */}
          <ul className="space-y-1.5 mb-4">
            {exp.achievements.map((a, j) => (
              <li key={j} className="flex items-start gap-2 text-sm text-gray-300">
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
