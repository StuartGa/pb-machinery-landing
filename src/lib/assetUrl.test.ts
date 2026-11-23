import { describe, expect, it } from 'vitest'
import { assetUrl } from './assetUrl'

describe('assetUrl', () => {
  it('prefixes the GitHub Pages base path', () => {
    expect(assetUrl('/images/hero-cake.webp')).toBe(
      '/pb-machinery-landing/images/hero-cake.webp',
    )
  })

  it('leaves absolute URLs untouched', () => {
    expect(assetUrl('https://example.com/a.png')).toBe('https://example.com/a.png')
  })
})
