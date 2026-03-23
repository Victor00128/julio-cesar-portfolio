import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa'

// -----------------------------------------------------
// INSTRUCCIONES PARA ACTIVAR EL FORMULARIO:
// 1. Ve a https://formspree.io y crea una cuenta gratis
// 2. Crea un nuevo formulario
// 3. Reemplaza el ACTION_URL de abajo con tu endpoint
// -----------------------------------------------------
const FORMSPREE_URL = 'https://formspree.io/f/mvzbnkwk'

const socialLinks = [
  {
    icon: FaEnvelope,
    label: 'Gmail',
    href: 'mailto:juliocesarmoralesalvarado9@gmail.com',
    description: 'juliocesarmoralesalvarado9@gmail.com',
    color: 'hover:bg-red-500/10 hover:border-red-500/40 hover:text-red-400',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/julio-cesar-406314373/',
    description: 'Julio Cesar',
    color: 'hover:bg-blue-500/10 hover:border-blue-500/40 hover:text-blue-400',
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    href: 'https://github.com/Victor00128',
    description: '@Victor00128',
    color: 'hover:bg-gray-500/10 hover:border-gray-400/40 hover:text-gray-300',
  },
]

type FormState = 'idle' | 'loading' | 'success' | 'error'

export default function Contact() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('loading')

    try {
      // Si no has configurado Formspree aún, cae al mailto
      if (FORMSPREE_URL.includes('TU_ID_AQUI')) {
        // Fallback a mailto mientras se configura Formspree
        const body = encodeURIComponent(
          `Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`
        )
        window.open(`mailto:juliocesarmoralesalvarado9@gmail.com?subject=${encodeURIComponent(formData.subject || 'Mensaje desde portafolio')}&body=${body}`)
        setFormState('success')
        return
      }

      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setFormState('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setFormState('error')
      }
    } catch {
      setFormState('error')
    }
  }

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

        {/* ---- Columna izquierda: info + redes ---- */}
        <div className="lg:col-span-2 space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold text-lg mb-2">¿Hablamos?</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Estoy disponible para proyectos freelance, colaboraciones o simplemente para charlar
              sobre tecnología e IA. Respondo en menos de 24 horas.
            </p>
          </motion.div>

          {/* Badge disponible */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="available-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute h-full w-full rounded-full bg-green-400 opacity-60" />
              <span className="relative rounded-full h-2 w-2 bg-green-400" />
            </span>
            <span className="text-green-400 text-sm font-mono">Disponible para trabajar</span>
          </motion.div>

          {/* Redes sociales */}
          <div className="space-y-3" role="list" aria-label="Redes sociales y contacto">
            {socialLinks.map((l, i) => (
              <motion.a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                role="listitem"
                aria-label={`Contactar por ${l.label}: ${l.description}`}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 + 0.2 }}
                whileHover={{ x: 4 }}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl bg-dark-card border border-dark-border text-gray-400 transition-all duration-200 ${l.color}`}
              >
                <l.icon className="text-lg flex-shrink-0" aria-hidden="true" />
                <div>
                  <div className="font-medium text-sm leading-tight">{l.label}</div>
                  <div className="text-xs text-gray-600 font-mono">{l.description}</div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* ---- Columna derecha: formulario ---- */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-3"
        >
          <div className="bg-dark-card border border-dark-border rounded-2xl p-6 glow-border">
            {/* Barra de título tipo terminal */}
            <div className="flex items-center gap-2 mb-5 pb-4 border-b border-dark-border">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-2 text-gray-600 text-xs font-mono">contact.tsx</span>
            </div>

            {formState === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <FaCheckCircle className="text-green-400 text-4xl mb-4" />
                <h4 className="text-white font-semibold text-lg mb-2">¡Mensaje enviado!</h4>
                <p className="text-gray-400 text-sm">Te respondo antes de 24 horas. Gracias por escribir 🙌</p>
                <button
                  onClick={() => setFormState('idle')}
                  className="mt-6 px-4 py-2 rounded-lg border border-cyan-accent/30 text-cyan-accent text-sm hover:bg-cyan-accent/10 transition-all"
                >
                  Enviar otro mensaje
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" aria-label="Formulario de contacto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="text-gray-500 text-xs font-mono mb-1.5 block">Nombre *</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      className="form-input"
                      autoComplete="name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-gray-500 text-xs font-mono mb-1.5 block">Email *</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      className="form-input"
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="text-gray-500 text-xs font-mono mb-1.5 block">Asunto</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input"
                  >
                    <option value="" disabled>Selecciona un asunto...</option>
                    <option value="Proyecto Freelance">💼 Proyecto Freelance</option>
                    <option value="Colaboración">🤝 Colaboración</option>
                    <option value="Oportunidad Laboral">🚀 Oportunidad Laboral</option>
                    <option value="Consulta sobre IA">🤖 Consulta sobre IA</option>
                    <option value="Otro">💬 Otro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="text-gray-500 text-xs font-mono mb-1.5 block">Mensaje *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Cuéntame sobre tu proyecto o idea..."
                    className="form-input resize-none"
                  />
                </div>

                {formState === 'error' && (
                  <div className="flex items-center gap-2 text-red-400 text-xs bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
                    <FaExclamationTriangle />
                    <span>Algo falló. Intenta escribirme directamente al correo.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formState === 'loading'}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-cyan-accent text-black font-bold text-sm hover:bg-[#00e5ff] transition-all hover:shadow-lg hover:shadow-cyan-accent/20 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {formState === 'loading' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="text-xs" />
                      Enviar mensaje
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
