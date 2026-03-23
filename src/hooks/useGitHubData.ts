import { useState, useEffect, useCallback } from 'react'

// GitHub username — si cambias de cuenta acuérdate de actualizar esto también
const USERNAME = 'Victor00128'
const CACHE_KEY = 'gh_stats_v2'
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

// Tuve que mapear los colores manualmente porque la API de GitHub
// no siempre devuelve los colores correctos 😅
const langColors: Record<string, string> = {
  JavaScript: '#00C9FF',
  TypeScript: '#0099cc',
  HTML: '#00e5ff',
  CSS: '#0077aa',
  Python: '#005577',
  Java: '#00aadd',
  Shell: '#00b8e6',
  'C++': '#008fbf',
  Go: '#00ddff',
  Dart: '#004466',
  Kotlin: '#007799',
  Ruby: '#009dcc',
  PHP: '#00bbee',
  SCSS: '#006688',
  Swift: '#008CAA',
  Astro: '#00B4D8',
}

function colorFor(name: string, i: number) {
  return langColors[name] || `hsl(${185 + (i * 17) % 45}, 90%, ${55 - (i * 6) % 25}%)`
}

async function get(url: string) {
  const res = await fetch(url, {
    headers: { Accept: 'application/vnd.github.v3+json' },
  })

  if (res.status === 403) {
    const reset = res.headers.get('X-RateLimit-Reset')
    if (reset) {
      const mins = Math.ceil((parseInt(reset) * 1000 - Date.now()) / 60000)
      throw new Error(`Rate limit — se restablece en ~${mins} min`)
    }
    throw new Error('Rate limit alcanzado')
  }

  if (!res.ok) throw new Error(`GitHub API: ${res.status}`)
  return res.json()
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

async function fetchStats(): Promise<GitHubStats> {
  const [user, allRepos] = await Promise.all([
    get(`https://api.github.com/users/${USERNAME}`),
    get(`https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated`),
  ])

  const ownRepos = allRepos.filter((r: any) => !r.fork)

  const stars = allRepos.reduce((s: number, r: any) => s + (r.stargazers_count || 0), 0)
  const forks = allRepos.reduce((s: number, r: any) => s + (r.forks_count || 0), 0)

  // Lenguajes y commits — solo de repos propios, no forks
  const repoData = await Promise.all(
    ownRepos.map(async (r: any) => {
      const [langs, contributors] = await Promise.all([
        get(`https://api.github.com/repos/${USERNAME}/${r.name}/languages`).catch(() => ({})),
        get(`https://api.github.com/repos/${USERNAME}/${r.name}/contributors?per_page=100`).catch(() => []),
      ])

      const me = Array.isArray(contributors)
        ? contributors.find((c: any) => c.login?.toLowerCase() === USERNAME.toLowerCase())
        : null

      return { langs, commits: me?.contributions || 0 }
    })
  )

  const langBytes: Record<string, number> = {}
  let totalCommits = 0

  for (const { langs, commits } of repoData) {
    totalCommits += commits
    for (const [lang, bytes] of Object.entries(langs)) {
      langBytes[lang] = (langBytes[lang] || 0) + (bytes as number)
    }
  }

  const totalBytes = Object.values(langBytes).reduce((a, b) => a + b, 0)
  const languages = Object.entries(langBytes)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)
    .map(([name, bytes], i) => ({
      name,
      bytes,
      percent: totalBytes > 0 ? Math.round((bytes / totalBytes) * 1000) / 10 : 0,
      color: colorFor(name, i),
    }))

  return {
    repos: allRepos.length,
    ownRepos: ownRepos.length,
    stars,
    forks,
    commits: totalCommits,
    followers: user.followers || 0,
    languages,
    profileUrl: user.html_url,
    updatedAt: Date.now(),
  }
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
      const data = await fetchStats()
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
