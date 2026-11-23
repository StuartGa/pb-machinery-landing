/** Resolves public asset paths against Vite `import.meta.env.BASE_URL`. */
export function assetUrl(path: string): string {
  if (!path) return path
  if (/^(https?:|data:|blob:)/i.test(path)) return path
  const raw = import.meta.env.BASE_URL || '/'
  const base = raw.endsWith('/') ? raw.slice(0, -1) : raw
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${base}${normalized}`
}
