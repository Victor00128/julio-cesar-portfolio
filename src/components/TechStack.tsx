import { motion } from 'framer-motion';
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaJsSquare,
  FaGitAlt,
  FaPython,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiSupabase,
  SiVite,
  SiOpenai,
} from 'react-icons/si';

// Stack que uso en el día a día
// El orden no es aleatorio: de lo que más uso a lo que menos

const frontend = [
  { icon: FaHtml5, name: 'HTML5' },
  { icon: FaCss3Alt, name: 'CSS3' },
  { icon: FaJsSquare, name: 'JavaScript' },
  { icon: SiTypescript, name: 'TypeScript' },
  { icon: FaReact, name: 'React' },
  { icon: SiNextdotjs, name: 'Next.js' },
  { icon: SiTailwindcss, name: 'Tailwind' },
  { icon: SiVite, name: 'Vite' },
];

const backend = [
  { icon: FaNodeJs, name: 'Node.js' },
  { icon: SiSupabase, name: 'Supabase' },
  { icon: FaPython, name: 'Python' },
  { icon: FaGitAlt, name: 'Git' },
];

const ai = [
  { icon: SiOpenai, name: 'GPT-4' },
  // Gemini con SVG personalizado inline ya que react-icons no lo tiene aún
];

// Componente de tarjeta individual
function TechCard({
  icon: Icon,
  name,
  index,
  accent = false,
}: {
  icon: React.ComponentType<{ className?: string }>
  name: string
  index: number
  accent?: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.35 }}
      whileHover={{ scale: 1.08, y: -4 }}
      className={`flex flex-col items-center gap-2 p-4 rounded-xl border transition-all duration-300 group cursor-default ${
        accent
          ? 'bg-cyan-accent/5 border-cyan-accent/20 hover:border-cyan-accent/50'
          : 'bg-dark-card border-dark-border hover:border-cyan-accent/35'
      }`}
    >
      <Icon
        className={`text-3xl transition-colors duration-300 ${
          accent ? 'text-cyan-accent' : 'text-gray-400 group-hover:text-cyan-accent'
        }`}
      />
      <span className="text-xs text-gray-500 group-hover:text-gray-300 transition-colors font-mono">
        {name}
      </span>
    </motion.div>
  );
}

// Tarjeta para IA (Gemini no tiene icono en react-icons, lo hacemos con SVG)
function GeminiCard({ index }: { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 + 0.3, duration: 0.35 }}
      whileHover={{ scale: 1.08, y: -4 }}
      className="flex flex-col items-center gap-2 p-4 rounded-xl bg-cyan-accent/5 border border-cyan-accent/20 hover:border-cyan-accent/50 transition-all duration-300 group cursor-default"
    >
      <svg
        className="w-8 h-8 text-cyan-accent"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.49 0 2.87.42 4.04 1.15L5.15 16.04A7.93 7.93 0 0 1 4 12c0-4.41 3.59-8 8-8zm0 14c-1.49 0-2.87-.42-4.04-1.15L18.85 7.96A7.93 7.93 0 0 1 20 12c0 4.41-3.59 8-8 8z" />
      </svg>
      <span className="text-xs text-gray-500 group-hover:text-gray-300 transition-colors font-mono">
        Gemini AI
      </span>
    </motion.div>
  );
}

export default function TechStack() {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      {/* Frontend */}
      <div>
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-cyan-accent font-mono text-sm mb-4 flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-accent inline-block" />
          Frontend
        </motion.h3>
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-3">
          {frontend.map((t, i) => (
            <TechCard key={t.name} icon={t.icon} name={t.name} index={i} />
          ))}
        </div>
      </div>

      {/* Backend & Herramientas */}
      <div>
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-cyan-accent font-mono text-sm mb-4 flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-accent inline-block" />
          Backend & Herramientas
        </motion.h3>
        <div className="grid grid-cols-4 sm:grid-cols-4 gap-3">
          {backend.map((t, i) => (
            <TechCard key={t.name} icon={t.icon} name={t.name} index={i} />
          ))}
        </div>
      </div>

      {/* IA & APIs */}
      <div>
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-cyan-accent font-mono text-sm mb-4 flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-accent inline-block animate-pulse" />
          Inteligencia Artificial
        </motion.h3>
        <div className="grid grid-cols-4 sm:grid-cols-4 gap-3">
          {ai.map((t, i) => (
            <TechCard key={t.name} icon={t.icon} name={t.name} index={i} accent />
          ))}
          <GeminiCard index={1} />
        </div>
      </div>
    </div>
  );
}
