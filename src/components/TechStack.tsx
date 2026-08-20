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

// Nombro las APIs, no los modelos: un modelo concreto caduca en meses
// y deja el portfolio con pinta de viejo.
const ai = [
  { icon: OpenAIIcon, name: 'OpenAI API' },
  { icon: OpenRouterIcon, name: 'OpenRouter' },
  // Gemini va aparte porque lleva degradado propio, no currentColor
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
      <span className="text-xs text-gray-300 group-hover:text-white transition-colors font-mono">
        {name}
      </span>
    </motion.div>
  );
}

// Gemini, OpenRouter y OpenAI van a mano. Los dos primeros nunca estuvieron en
// react-icons; SiOpenai sí existía, pero lo quitaron en la 5.6.0. Como el rango
// del package.json es ^5.5.0, cualquiera que clonara e instalara de cero se
// llevaba la 5.7.0 y el build no compilaba, aunque con el lockfile local pasara.
// Dibujado aquí no depende de que la librería lo mantenga.
function OpenAIIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M22.28 9.82a5.99 5.99 0 0 0-.52-4.91 6.05 6.05 0 0 0-6.51-2.9A6 6 0 0 0 4.98 4.18a5.99 5.99 0 0 0-4 2.9 6.05 6.05 0 0 0 .74 7.1 5.98 5.98 0 0 0 .51 4.91 6.05 6.05 0 0 0 6.52 2.9A5.98 5.98 0 0 0 13.26 24a6.06 6.06 0 0 0 5.77-4.21 5.99 5.99 0 0 0 4-2.9 6.06 6.06 0 0 0-.75-7.07Zm-9.02 12.6a4.48 4.48 0 0 1-2.88-1.04l.14-.08 4.78-2.76a.79.79 0 0 0 .39-.68v-6.74l2.02 1.17a.07.07 0 0 1 .04.06v5.58a4.5 4.5 0 0 1-4.5 4.49ZM3.6 18.3a4.47 4.47 0 0 1-.54-3.01l.14.09 4.79 2.76a.77.77 0 0 0 .78 0l5.84-3.37v2.33a.08.08 0 0 1-.03.06L9.74 19.95a4.5 4.5 0 0 1-6.14-1.65ZM2.34 7.9a4.49 4.49 0 0 1 2.35-1.97V11.6a.77.77 0 0 0 .38.67l5.82 3.36-2.02 1.17a.08.08 0 0 1-.07 0l-4.84-2.79A4.5 4.5 0 0 1 2.34 7.9Zm16.61 3.87-5.84-3.4L15.13 7.2a.08.08 0 0 1 .07 0l4.84 2.8a4.49 4.49 0 0 1-.68 8.1v-5.66a.79.79 0 0 0-.4-.67Zm2.01-3.03-.14-.08-4.79-2.79a.78.78 0 0 0-.79 0L9.4 9.23V6.9a.07.07 0 0 1 .03-.06l4.84-2.79a4.5 4.5 0 0 1 6.68 4.66ZM8.3 12.86l-2.02-1.16a.08.08 0 0 1-.04-.06V6.07a4.5 4.5 0 0 1 7.37-3.45l-.14.08L8.69 5.46a.79.79 0 0 0-.39.68v6.72Zm1.1-2.36 2.6-1.5 2.6 1.5v3l-2.6 1.5-2.6-1.5v-3Z" />
    </svg>
  );
}

// Ni Gemini ni OpenRouter están en react-icons, así que van a mano.

// La chispa de cuatro puntas de Gemini, con su degradado de marca.
function GeminiIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="grad-gemini" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4796E3" />
          <stop offset="52%" stopColor="#9177C7" />
          <stop offset="100%" stopColor="#D96570" />
        </linearGradient>
      </defs>
      <path
        d="M12 1c0 6.08 4.92 11 11 11-6.08 0-11 4.92-11 11 0-6.08-4.92-11-11-11 6.08 0 11-4.92 11-11Z"
        fill="url(#grad-gemini)"
      />
    </svg>
  );
}

// OpenRouter: una entrada que se bifurca en dos salidas, que es literalmente
// lo que hace — enrutar la misma petición a distintos modelos.
function OpenRouterIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      // 1em como los iconos de react-icons: así el text-3xl de la tarjeta
      // lo escala igual que a los demás en vez de estirarlo al contenedor
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M2 12h4.2l3.4-4.6h4" />
      <path d="M2 12h4.2l3.4 4.6h4" />
      <path d="M14.4 3.9 21 7.4l-6.6 3.5V3.9Z" fill="currentColor" stroke="none" />
      <path d="M14.4 13.1 21 16.6l-6.6 3.5v-7Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

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
      {/* Algo mayor que el resto: la chispa tiene los brazos finos y a
          igual tamaño pesa menos que un logo macizo */}
      <GeminiIcon className="w-9 h-9" />
      <span className="text-xs text-gray-300 group-hover:text-white transition-colors font-mono">
        Gemini API
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
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-cyan-accent font-mono text-sm mb-4 flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-accent inline-block" />
          Frontend
        </motion.h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {frontend.map((t, i) => (
            <TechCard key={t.name} icon={t.icon} name={t.name} index={i} />
          ))}
        </div>
      </div>

      {/* Backend & Herramientas */}
      <div>
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-cyan-accent font-mono text-sm mb-4 flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-accent inline-block" />
          Backend & Herramientas
        </motion.h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {backend.map((t, i) => (
            <TechCard key={t.name} icon={t.icon} name={t.name} index={i} />
          ))}
        </div>
      </div>

      {/* IA & APIs */}
      <div>
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-cyan-accent font-mono text-sm mb-4 flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-accent inline-block animate-pulse" />
          Inteligencia Artificial
        </motion.h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {ai.map((t, i) => (
            <TechCard key={t.name} icon={t.icon} name={t.name} index={i} accent />
          ))}
          <GeminiCard index={2} />
        </div>
      </div>
    </div>
  );
}
