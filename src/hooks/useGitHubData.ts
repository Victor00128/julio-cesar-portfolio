import { useState, useEffect, useCallback } from 'react'

// Las stats vienen de un JSON que se genera en el deploy
// (scripts/fetch-github-stats.mjs). Antes cada visitante disparaba 14 llamadas
// a la API de GitHub, que sin token permite 60 por hora y por IP: al cuarto
// visitante desde la misma red la sección se caía sola.
const STATS_URL = '/github-stats.json'
const CACHE_KEY = 'gh_stats_v3'
const CACHE_TTL = 3600000 // 1 hora en ms

export interface LanguageData {
  name: string
  bytes: number
  percent: number
  color: string
}

export interface GitHubStats {
  repos: number
  ownRepos: number
  stars: number
  forks: number
  commits: number
  followers: number
  languages: LanguageData[]
  profileUrl: string
  updatedAt: number
}

function readCache(): GitHubStats | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY)
    if (!raw) return null
    const { data, ts } = JSON.parse(raw)
    return Date.now() - ts < CACHE_TTL ? data : null
  } catch {
    return null
  }
}

function writeCache(data: GitHubStats) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ data, ts: Date.now() }))
  } catch {
    // localStorage lleno, ignorar
  }
}

function readStaleCache(): GitHubStats | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY)
    return raw ? JSON.parse(raw).data : null
  } catch {
    return null
  }
}

async function fetchStats(bust = false): Promise<GitHubStats> {
  const url = bust ? `${STATS_URL}?t=${Date.now()}` : STATS_URL
  const res = await fetch(url, { headers: { Accept: 'application/json' } })

  if (!res.ok) {
    throw new Error(
      res.status === 404
        ? 'Faltan las stats — ejecuta: npm run stats'
        : `No se pudo cargar el archivo de stats (${res.status})`
    )
  }

  const data = await res.json()
  if (typeof data?.ownRepos !== 'number' || !Array.isArray(data?.languages)) {
    throw new Error('El archivo de stats tiene un formato inesperado')
  }
  return data as GitHubStats
}

export function useGitHubData() {
  const [stats, setStats] = useState<GitHubStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const load = useCallback(async (skipCache = false) => {
    setLoading(true)
    setError(null)

    if (!skipCache) {
      const cached = readCache()
      if (cached) {
        setStats(cached)
        setLoading(false)
        return
      }
    }

    try {
      const data = await fetchStats(skipCache)
      writeCache(data)
      setStats(data)
    } catch (err: any) {
      setError(err.message || 'Error al cargar datos')
      // Mostrar datos viejos antes de nada
      const stale = readStaleCache()
      if (stale) setStats(stale)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => { load() }, [load])

  return { stats, loading, error, refresh: () => load(true) }
}
