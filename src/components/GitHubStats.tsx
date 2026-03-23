import { motion } from 'framer-motion'
import { FaGithub, FaStar, FaCodeBranch, FaCode } from 'react-icons/fa'
import { useGitHubData } from '../hooks/useGitHubData'

// Skeleton loader para mientras carga
function SkeletonCard() {
  return (
    <div className="bg-dark-card border border-dark-border rounded-xl p-5 animate-pulse">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-lg bg-dark-border" />
        <div className="flex-1">
          <div className="h-4 bg-dark-border rounded w-24 mb-2" />
          <div className="h-3 bg-dark-border rounded w-16" />
        </div>
      </div>
      <div className="h-8 bg-dark-border rounded w-full" />
    </div>
  )
}

// Barra de lenguaje individual
function LanguageBar({ name, percent, color }: { name: string; percent: number; color: string }) {
  return (
    <div className="mb-2">
      <div className="flex justify-between text-xs mb-1">
        <span className="text-gray-400">{name}</span>
        <span className="text-gray-500 font-mono">{percent.toFixed(1)}%</span>
      </div>
      <div className="h-2 bg-dark-border rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
        />
      </div>
    </div>
  )
}

export default function GitHubStats() {
  const { stats, loading, error, refresh } = useGitHubData()

  // Estado de carga - mostrar skeletons
  if (loading && !stats) {
    return (
      <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {[...Array(4)].map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    )
  }

  // Estado de error con fallback a datos cacheados
  if (error && !stats) {
    return (
      <div className="w-full max-w-2xl mx-auto text-center">
        <div className="bg-dark-card border border-red-500/30 rounded-xl p-6">
          <p className="text-red-400 text-sm mb-3">
            No se pudieron cargar las stats de GitHub
          </p>
          <p className="text-gray-500 text-xs font-mono mb-4">{error}</p>
          <button
            onClick={refresh}
            className="px-4 py-2 rounded-lg bg-cyan-accent/10 border border-cyan-accent/30 text-cyan-accent text-sm hover:bg-cyan-accent/20 transition-all"
          >
            Reintentar
          </button>
        </div>
      </div>
    )
  }

  // Datos cargados
  if (stats) {
    return (
      <div className="w-full max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {/* Stats principales */}
          {[
            {
              icon: FaCodeBranch,
              label: 'Repositorios',
              value: stats.ownRepos,
              sublabel: `${stats.repos - stats.ownRepos} forks excluidos`,
            },
            {
              icon: FaStar,
              label: 'Stars Totales',
              value: stats.stars,
              sublabel: 'En todos mis repos',
            },
            {
              icon: FaCode,
              label: 'Commits',
              value: stats.commits,
              sublabel: 'En repos propios',
            },
            {
              icon: FaGithub,
              label: 'Followers',
              value: stats.followers,
              sublabel: 'En GitHub',
            },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-dark-card border border-dark-border rounded-xl p-5 hover:border-cyan-accent/25 transition-all group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-accent/10 flex items-center justify-center group-hover:bg-cyan-accent/20 transition-colors">
                  <stat.icon className="text-cyan-accent" />
                </div>
                <div>
                  <div className="text-gray-500 text-xs font-mono">{stat.label}</div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                </div>
              </div>
              <div className="text-gray-600 text-xs">{stat.sublabel}</div>
            </motion.div>
          ))}
        </div>

        {/* Lenguajes */}
        {stats.languages.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-dark-card border border-dark-border rounded-xl p-5"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-semibold text-sm">Lenguajes Más Usados</h3>
              <button
                onClick={refresh}
                className="text-xs text-cyan-accent hover:underline font-mono"
                title="Actualizar datos"
              >
                Actualizar
              </button>
            </div>
            {stats.languages.map((lang, i) => (
              <LanguageBar
                key={lang.name}
                name={lang.name}
                percent={lang.percent}
                color={lang.color}
              />
            ))}
            <div className="mt-4 pt-3 border-t border-dark-border">
              <p className="text-gray-600 text-[10px] font-mono">
                Actualizado: {new Date(stats.updatedAt).toLocaleDateString('es-UY', {
                  day: '2-digit',
                  month: 'short',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </p>
            </div>
          </motion.div>
        )}

        {/* Link al perfil */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-4 text-center"
        >
          <a
            href={stats.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1a1a2e] border border-dark-border hover:border-cyan-accent/40 text-gray-400 hover:text-cyan-accent transition-all text-sm font-medium"
          >
            <FaGithub className="text-base" />
            Ver perfil completo en GitHub
          </a>
        </motion.div>
      </div>
    )
  }

  return null
}
