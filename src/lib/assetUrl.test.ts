import { describe, expect, it } from 'vitest'
import { assetUrl } from './assetUrl'

describe('assetUrl', () => {
  it('prefixes Vite BASE_URL (root by default)', () => {
    expect(assetUrl('/images/hero-cake.webp')).toBe('/images/hero-cake.webp')
  })

  it('leaves absolute URLs untouched', () => {
    expect(assetUrl('https://example.com/a.png')).toBe('https://example.com/a.png')
  })
})
