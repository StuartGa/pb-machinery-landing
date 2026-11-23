import { siteConfig } from '@/config/site'

/** Resolves public asset paths against the Vite/GitHub Pages base. */
export function assetUrl(path: string): string {
  if (!path) return path
  if (/^(https?:|data:|blob:)/i.test(path)) return path
  const base = siteConfig.basePath.endsWith('/')
    ? siteConfig.basePath.slice(0, -1)
    : siteConfig.basePath
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${base}${normalized}`
}
