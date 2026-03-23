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
import { FaTerminal, FaDownload, FaBriefcase } from 'react-icons/fa'

// Navegación — agregué Experiencia y Educación
const nav = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Stats', href: '#stats' },
  { label: 'Sobre Mí', href: '#about' },
  { label: 'Tech', href: '#tech' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Experiencia', href: '#experience' },
  { label: 'Educación', href: '#education' },
  { label: 'Contacto', href: '#contact' },
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

export default function App() {
  return (
    <div className="min-h-screen bg-dark-bg grid-bg">

      {/* ===== Navbar ===== */}
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#0a0a0f]/80 border-b border-dark-border"
        role="navigation"
        aria-label="Navegación principal"
      >
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2 text-cyan-accent font-mono font-bold text-lg" aria-label="Ir al inicio">
            <FaTerminal aria-hidden="true" />
            <span className="hidden sm:inline">JC</span>
          </a>
          {/* Scroll horizontal en móvil */}
          <div className="flex items-center gap-0.5 overflow-x-auto scrollbar-none" role="menubar" aria-label="Menú de navegación">
            {nav.map(item => (
              <a
                key={item.href}
                href={item.href}
                role="menuitem"
                className="px-2 sm:px-2.5 py-1.5 text-[11px] sm:text-xs text-gray-400 hover:text-cyan-accent rounded-lg hover:bg-cyan-accent/5 transition-all font-medium whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* ===== Hero ===== */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label="Sección principal">
        <ParticleField />
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-accent/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-accent/5 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 text-center px-4">
          {/* Avatar */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="w-28 h-28 mx-auto mb-8 rounded-full bg-gradient-to-br from-cyan-accent to-cyan-dark p-[3px]"
          >
            <div className="w-full h-full rounded-full bg-dark-bg overflow-hidden">
              <img
                src="https://github.com/Victor00128.png"
                alt="Julio Cesar – Full Stack Developer"
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

          {/* Typing effect */}
          <div className="h-16 sm:h-20 flex items-center justify-center mb-6">
            <TypingEffect />
          </div>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-gray-500 max-w-md mx-auto text-sm sm:text-base mb-8"
          >
            Creo aplicaciones web modernas integrando{' '}
            <span className="text-cyan-accent">Inteligencia Artificial</span> para resolver
            problemas reales
          </motion.p>

          {/* Botones CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="flex flex-wrap gap-3 justify-center"
            role="group"
            aria-label="Acciones principales"
          >
            <a
              href="#projects"
              className="px-6 py-2.5 rounded-lg bg-cyan-accent text-black font-bold text-sm hover:bg-[#00e5ff] transition-all hover:shadow-lg hover:shadow-cyan-accent/20"
              aria-label="Ver mis proyectos"
            >
              Ver Proyectos
            </a>
            <a
              href="#contact"
              className="px-6 py-2.5 rounded-lg border border-cyan-accent/30 text-cyan-accent font-medium text-sm hover:bg-cyan-accent/10 transition-all"
              aria-label="Ir a contacto"
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
              className="flex items-center gap-2 px-6 py-2.5 rounded-lg border border-gray-600/40 text-gray-400 font-medium text-sm hover:border-cyan-accent/40 hover:text-cyan-accent transition-all"
              aria-label="Descargar currículum en PDF"
            >
              <FaDownload className="text-xs" aria-hidden="true" />
              Descargar CV
            </a>
          </motion.div>

          {/* Badge disponible */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7 }}
            className="flex justify-center mt-6"
          >
            <a
              href="#contact"
              className="available-badge flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/25 text-green-400 text-xs font-mono hover:bg-green-500/15 transition-all"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute h-full w-full rounded-full bg-green-400 opacity-60" />
                <span className="relative rounded-full h-2 w-2 bg-green-400" />
              </span>
              Disponible para proyectos
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-5 h-8 rounded-full border-2 border-cyan-accent/30 flex items-start justify-center p-1"
            >
              <div className="w-1 h-2 rounded-full bg-cyan-accent/60" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== Contenido principal ===== */}
      <main id="main-content">
        <span className="sr-only" tabIndex={-1}>Contenido principal</span>

      {/* ===== GitHub Stats ===== */}
      <Section id="stats" title="GitHub Stats">
        <GitHubStats />
      </Section>

      <div className="gradient-line max-w-lg mx-auto" />

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
              <span className="ml-2 text-gray-600 text-xs font-mono">about.md</span>
            </div>

            <div className="space-y-5 font-mono text-sm leading-relaxed">
              {/* Párrafo 1: quién soy */}
              <p className="text-gray-300">
                <span className="text-cyan-accent mr-2">{'>'}</span>
                Me llamo <span className="text-cyan-accent font-semibold">Julio Cesar</span>, soy
                desarrollador Full Stack y comencé a programar casi por accidente: quería
                personalizar una página y terminé aprendiendo HTML a las 2am. Desde ese día no paré.
              </p>

              {/* Párrafo 2: especialidad */}
              <p className="text-gray-300">
                <span className="text-cyan-accent mr-2">{'>'}</span>
                Hoy me especializo en{' '}
                <span className="text-cyan-accent font-semibold">React + TypeScript + Node.js</span>{' '}
                con un enfoque especial en integrar{' '}
                <span className="text-cyan-accent font-semibold">Inteligencia Artificial</span>{' '}
                en productos reales. Construí{' '}
                <a href="https://vortex-ia.netlify.app/" target="_blank" rel="noopener noreferrer"
                  className="text-cyan-accent hover:underline">
                  Chatbot Vortex
                </a>{' '}
                porque quería entender de verdad cómo funcionan los LLMs, no solo usarlos.
              </p>

              {/* Párrafo 3: cómo trabajo */}
              <p className="text-gray-300">
                <span className="text-cyan-accent mr-2">{'>'}</span>
                Me gusta el código limpio pero no soy purista. Si hay que hacerlo funcionar
                primero y refactorizar después, lo hago. Lo que no negocio es que{' '}
                <span className="text-cyan-accent font-semibold">el usuario final</span> tenga
                buena experiencia.
              </p>

              {/* Párrafo 4: actualmente */}
              <p className="text-gray-300">
                <span className="text-cyan-accent mr-2">{'>'}</span>
                Actualmente estoy aprendiendo sobre{' '}
                <span className="text-cyan-accent font-semibold">
                  arquitecturas RAG, agentes IA y LangChain
                </span>
                . Cuando no estoy programando, probablemente estoy viendo cómo otros resuelven
                problemas técnicos complejos.
              </p>

              {/* Info rápida */}
              <div className="mt-4 grid grid-cols-2 gap-3 pt-4 border-t border-dark-border">
                {[
                  { label: 'Ubicación', value: 'Latinoamérica 🌎' },
                  { label: 'Idiomas', value: 'Español (nativo) · Inglés (técnico)' },
                  { label: 'Disponibilidad', value: 'Freelance · Full-time remoto' },
                  { label: 'Intereses', value: 'IA · Web · Open Source' },
                ].map(item => (
                  <div key={item.label}>
                    <span className="text-gray-600 text-[11px] block mb-0.5">{item.label}</span>
                    <span className="text-gray-300 text-xs">{item.value}</span>
                  </div>
                ))}
              </div>

              <p className="text-gray-600">
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
      <Section id="experience" title="Experiencia">
        <Experience />
      </Section>

      <div className="gradient-line max-w-lg mx-auto" />

      {/* ===== Educación ===== */}
      <Section id="education" title="Educación & Cursos">
        <Education />
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
        <div className="flex justify-center items-center gap-4 mb-3">
          <a
            href="/CV-Julio-Cesar.pdf"
            download
            className="flex items-center gap-2 text-xs text-gray-500 hover:text-cyan-accent transition-colors font-mono"
          >
            <FaDownload className="text-[10px]" />
            Descargar CV
          </a>
          <span className="text-gray-700">·</span>
          <a
            href="https://github.com/Victor00128"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-500 hover:text-cyan-accent transition-colors font-mono"
          >
            @Victor00128
          </a>
          <span className="text-gray-700">·</span>
          <a
            href="#contact"
            className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-cyan-accent transition-colors font-mono"
          >
            <FaBriefcase className="text-[10px]" />
            Disponible
          </a>
        </div>
        <p className="text-gray-700 text-xs font-mono">
          © {new Date().getFullYear()} Julio Cesar Morales · Hecho con React + TypeScript + ☕
        </p>
      </footer>
    </div>
  )
}
