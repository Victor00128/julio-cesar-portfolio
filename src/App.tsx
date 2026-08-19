import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import TypingEffect from './components/TypingEffect'
import ParticleField from './components/ParticleField'
import GitHubStats from './components/GitHubStats'
import TechStack from './components/TechStack'
import FeaturedProject from './components/FeaturedProject'
import CurrentStatus from './components/CurrentStatus'
import Contact from './components/Contact'
import Education from './components/Education'
import Experience from './components/Experience'
import { FaTerminal, FaDownload, FaBriefcase, FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa'

// Navegación — primary marca los que se ven en desktop; en móvil salen todos
const nav = [
  { label: 'Sobre Mí', href: '#about', primary: true },
  { label: 'Tech', href: '#tech', primary: false },
  { label: 'Proyectos', href: '#projects', primary: true },
  { label: 'Experiencia', href: '#experience', primary: true },
  { label: 'Educación', href: '#education', primary: false },
  { label: 'Stats', href: '#stats', primary: false },
  { label: 'Contacto', href: '#contact', primary: true },
]

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-white">{title}</h2>
        <div className="gradient-line w-24 mx-auto mt-4" />
      </motion.div>
      {children}
    </section>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)

  // Cerrar con Escape — si abriste el menú y te arrepentiste
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#0a0a0f]/80 border-b border-dark-border"
      aria-label="Navegación principal"
    >
      <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
        <a
          href="#hero"
          className="flex items-center gap-2 px-2 py-2 -ml-2 rounded-lg text-cyan-accent font-mono font-bold text-lg hover:bg-cyan-accent/5 transition-colors"
        >
          <FaTerminal aria-hidden="true" />
          <span>JC</span>
          <span className="sr-only">Julio Cesar — ir al inicio</span>
        </a>

        {/* Desktop: solo lo esencial */}
        <div className="hidden md:flex items-center gap-1">
          {nav.filter(i => i.primary).map(item => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-2.5 text-sm text-gray-300 hover:text-cyan-accent rounded-lg hover:bg-cyan-accent/5 transition-all font-medium"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Móvil: hamburguesa */}
        <button
          type="button"
          onClick={() => setOpen(o => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          className="md:hidden flex items-center justify-center w-11 h-11 -mr-2 rounded-lg text-gray-300 hover:text-cyan-accent hover:bg-cyan-accent/5 transition-colors"
        >
          {open ? <FaTimes className="text-lg" aria-hidden="true" /> : <FaBars className="text-lg" aria-hidden="true" />}
        </button>
      </div>

      {/* Panel desplegable móvil */}
      {open && (
        <div id="mobile-menu" className="md:hidden border-t border-dark-border bg-[#0a0a0f]/95 backdrop-blur-xl">
          <div className="px-4 py-2 flex flex-col">
            {nav.map(item => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3.5 text-sm text-gray-300 hover:text-cyan-accent rounded-lg hover:bg-cyan-accent/5 transition-all font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </motion.nav>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-dark-bg grid-bg">
      <Navbar />

      <main id="main-content">
        {/* ===== Hero ===== */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <ParticleField />
          <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
            <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-accent/5 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-accent/5 rounded-full blur-[100px]" />
          </div>

          <div className="relative z-10 text-center px-4 py-24">
            {/* Avatar */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="w-28 h-28 mx-auto mb-7 rounded-full bg-gradient-to-br from-cyan-accent to-cyan-dark p-[3px]"
            >
              <div className="w-full h-full rounded-full bg-dark-bg overflow-hidden">
                {/* Foto propia servida desde /public: antes venía de
                    github.com, que añadía una conexión externa en el hero
                    justo donde se mide el LCP. */}
                <img
                  src="/foto-julio.webp"
                  alt="Julio Cesar Morales"
                  width={106}
                  height={106}
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-full object-cover rounded-full"
                  onError={e => {
                    const el = e.target as HTMLImageElement
                    el.style.display = 'none'
                    el.parentElement!.innerHTML =
                      '<span class="text-cyan-accent text-3xl font-bold flex items-center justify-center h-full">JC</span>'
                  }}
                />
              </div>
            </motion.div>

            {/* Título principal — fijo, no animado: es lo primero que tiene que leerse */}
            <h1 className="mb-4">
              <span className="block text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
                Julio Cesar Morales
              </span>
              <span className="block mt-3 text-lg sm:text-2xl font-semibold text-cyan-accent">
                Desarrollador web · React, TypeScript e integración de IA
              </span>
            </h1>

            {/* Línea de terminal decorativa */}
            <TypingEffect />

            {/* Subtítulo */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-gray-300 max-w-lg mx-auto text-sm sm:text-base mb-8"
            >
              Construyo aplicaciones web completas, de la primera línea al despliegue. Cuando el
              proyecto lo pide, les conecto <span className="text-cyan-accent">modelos de IA</span> por
              dentro.
            </motion.p>

            {/* Botones CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-3 justify-center"
            >
              <a
                href="#projects"
                className="px-6 py-3 rounded-lg bg-cyan-accent text-black font-bold text-sm hover:bg-[#00e5ff] transition-all hover:shadow-lg hover:shadow-cyan-accent/20"
              >
                Ver Proyectos
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-lg border border-cyan-accent/40 text-cyan-accent font-medium text-sm hover:bg-cyan-accent/10 transition-all"
              >
                Contáctame
              </a>
              {/*
                CV: Sube tu archivo PDF a /public/CV-Julio-Cesar.pdf
                y este botón funcionará automáticamente.
              */}
              <a
                href="/CV-Julio-Cesar.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-500/50 text-gray-300 font-medium text-sm hover:border-cyan-accent/40 hover:text-cyan-accent transition-all"
              >
                <FaDownload className="text-xs" aria-hidden="true" />
                Descargar CV
              </a>
            </motion.div>

            {/* Badge disponible */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
              className="flex justify-center mt-6"
            >
              <a
                href="#contact"
                className="available-badge flex items-center gap-2 px-4 py-2.5 rounded-full bg-green-500/10 border border-green-500/25 text-green-400 text-xs font-mono hover:bg-green-500/15 transition-all"
              >
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="animate-ping absolute h-full w-full rounded-full bg-green-400 opacity-60" />
                  <span className="relative rounded-full h-2 w-2 bg-green-400" />
                </span>
                Disponible para proyectos
              </a>
            </motion.div>

            {/* Social links rápidos */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="flex justify-center gap-4 mt-6"
            >
              {[
                { href: 'https://github.com/Victor00128', icon: <FaGithub />, label: 'GitHub' },
                { href: 'https://www.linkedin.com/in/julio-cesar-406314373/', icon: <FaLinkedin />, label: 'LinkedIn' },
                { href: 'mailto:juliocesarmoralesalvarado9@gmail.com', icon: <FaEnvelope />, label: 'Email' },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-11 h-11 flex items-center justify-center rounded-lg border border-dark-border text-gray-300 hover:text-cyan-accent hover:border-cyan-accent/40 hover:bg-cyan-accent/5 transition-all text-lg"
                >
                  {s.icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Scroll indicator — hijo de la section, no del bloque de contenido */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:block"
            aria-hidden="true"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-5 h-8 rounded-full border-2 border-cyan-accent/30 flex items-start justify-center p-1"
            >
              <div className="w-1 h-2 rounded-full bg-cyan-accent/60" />
            </motion.div>
          </motion.div>
        </section>

        {/* ===== Sobre Mí ===== */}
        <Section id="about" title="Sobre Mí">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-dark-card border border-dark-border rounded-xl p-6 sm:p-8 glow-border">
              {/* Header tipo terminal */}
              <div className="flex items-center gap-2 mb-5 pb-4 border-b border-dark-border">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-gray-400 text-xs font-mono">about.md</span>
              </div>

              <div className="space-y-5 font-mono text-sm leading-relaxed">
                {/* Párrafo 1: quién soy */}
                <p className="text-gray-300">
                  <span className="text-cyan-accent mr-2" aria-hidden="true">{'>'}</span>
                  Me llamo <span className="text-cyan-accent font-semibold">Julio Cesar</span>, soy
                  desarrollador Full Stack. Llevo cuatro años programando: empecé tocando HTML
                  para cambiarle cosas a una página que no era mía y seguí desde ahí.
                </p>

                {/* Párrafo 2: especialidad */}
                <p className="text-gray-300">
                  <span className="text-cyan-accent mr-2" aria-hidden="true">{'>'}</span>
                  Hoy me especializo en{' '}
                  <span className="text-cyan-accent font-semibold">React + TypeScript + Node.js</span>{' '}
                  con un enfoque especial en integrar{' '}
                  <span className="text-cyan-accent font-semibold">Inteligencia Artificial</span>{' '}
                  en productos reales. Construí{' '}
                  <a href="https://vortex-ia.netlify.app/" target="_blank" rel="noopener noreferrer"
                    className="text-cyan-accent hover:underline">
                    Chatbot Vortex
                  </a>{' '}
                  para entender por dentro cómo se conecta un modelo a una aplicación de verdad.
                </p>

                {/* Párrafo 3: cómo trabajo */}
                <p className="text-gray-300">
                  <span className="text-cyan-accent mr-2" aria-hidden="true">{'>'}</span>
                  Suelo hacer que funcione primero y ordenarlo después. Lo que sí reviso siempre
                  antes de dar algo por terminado es cómo se comporta para{' '}
                  <span className="text-cyan-accent font-semibold">el usuario final</span>: los
                  estados de carga, los errores, qué pasa cuando algo falla.
                </p>

                {/* Párrafo 4: actualmente */}
                <p className="text-gray-300">
                  <span className="text-cyan-accent mr-2" aria-hidden="true">{'>'}</span>
                  Actualmente estoy aprendiendo sobre{' '}
                  <span className="text-cyan-accent font-semibold">
                    arquitecturas RAG, agentes IA y LangChain
                  </span>
                  , que es lo que necesito para la siguiente versión de NEXUS.
                </p>

                {/* Info rápida */}
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-dark-border">
                  {[
                    { label: 'Ubicación', value: 'Montevideo, Uruguay (UTC-3)' },
                    { label: 'Idiomas', value: 'Español (nativo) · Inglés (técnico)' },
                    { label: 'Disponibilidad', value: 'Freelance · Full-time remoto' },
                    { label: 'Intereses', value: 'IA · Web · Open Source' },
                  ].map(item => (
                    <div key={item.label}>
                      <span className="text-gray-400 text-[11px] block mb-0.5">{item.label}</span>
                      <span className="text-gray-300 text-xs">{item.value}</span>
                    </div>
                  ))}
                </div>

                <p aria-hidden="true">
                  <span className="cursor-blink text-cyan-accent">█</span>
                </p>
              </div>
            </div>
          </motion.div>
        </Section>

        <div className="gradient-line max-w-lg mx-auto" />

        {/* ===== Tech Stack ===== */}
        <Section id="tech" title="Tech Stack">
          <TechStack />
        </Section>

        <div className="gradient-line max-w-lg mx-auto" />

        {/* ===== Proyectos ===== */}
        <Section id="projects" title="Proyectos">
          <FeaturedProject />
        </Section>

        <div className="gradient-line max-w-lg mx-auto" />

        {/* ===== Experiencia ===== */}
        <Section id="experience" title="Experiencia práctica">
          <Experience />
        </Section>

        <div className="gradient-line max-w-lg mx-auto" />

        {/* ===== Educación ===== */}
        <Section id="education" title="Educación & Cursos">
          <Education />
        </Section>

        <div className="gradient-line max-w-lg mx-auto" />

        {/* ===== GitHub Stats ===== */}
        <Section id="stats" title="GitHub Stats">
          <GitHubStats />
        </Section>

        <div className="gradient-line max-w-lg mx-auto" />

        {/* ===== Estado Actual ===== */}
        <Section id="status" title="Estado Actual">
          <CurrentStatus />
        </Section>

        <div className="gradient-line max-w-lg mx-auto" />

        {/* ===== Contacto ===== */}
        <Section id="contact" title="Conectemos">
          <Contact />
        </Section>
      </main>

      {/* ===== Footer ===== */}
      <footer className="py-10 text-center border-t border-dark-border">
        <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 mb-3">
          <a
            href="/CV-Julio-Cesar.pdf"
            download
            className="flex items-center gap-2 px-2 py-2 text-xs text-gray-300 hover:text-cyan-accent transition-colors font-mono"
          >
            <FaDownload className="text-[10px]" aria-hidden="true" />
            Descargar CV
          </a>
          <span className="text-gray-500" aria-hidden="true">·</span>
          <a
            href="https://github.com/Victor00128"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2 py-2 text-xs text-gray-300 hover:text-cyan-accent transition-colors font-mono"
          >
            @Victor00128
          </a>
          <span className="text-gray-500" aria-hidden="true">·</span>
          <a
            href="#contact"
            className="flex items-center gap-1.5 px-2 py-2 text-xs text-gray-300 hover:text-cyan-accent transition-colors font-mono"
          >
            <FaBriefcase className="text-[10px]" aria-hidden="true" />
            Disponible
          </a>
        </div>
        <p className="text-gray-400 text-xs font-mono">
          © {new Date().getFullYear()} Julio Cesar Morales · Hecho con React + TypeScript + ☕
        </p>
      </footer>
    </div>
  )
}
