/**
 * Generates WebP assets for the landing page (run via `npm run optimize-images`).
 * Add your JPG/PNG files to `public/images/` first, then run this script.
 */
import { readdir, stat } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const IMAGES_DIR = path.resolve('public/images')

/** @type {Record<string, number | undefined>} */
const MAX_WIDTH = {
  'hero.jpg': 1920,
  'hero.png': 1920,
  'operational.jpg': 1920,
  'capacity.jpg': 1280,
  'category-1.jpg': 800,
  'category-2.jpg': 800,
  'category-3.jpg': 800,
  'product-1.jpg': 600,
  'product-2.jpg': 600,
  'product-3.jpg': 600,
  'product-4.jpg': 600,
  'product-5.jpg': 600,
  'product-6.jpg': 800,
  'product-7.jpg': 800,
  'logo-header.png': 400,
  'logo.png': 400,
  'logo-icon.png': 192,
  'logo-white.png': 400,
}

async function optimizeFile(filename) {
  const input = path.join(IMAGES_DIR, filename)
  const output = path.join(IMAGES_DIR, filename.replace(/\.(jpe?g|png)$/i, '.webp'))

  const meta = await sharp(input).metadata()
  const maxWidth = MAX_WIDTH[filename] ?? 1200
  const width = meta.width && meta.width > maxWidth ? maxWidth : meta.width

  const pipeline = sharp(input).rotate()
  if (width && meta.width && meta.width > maxWidth) {
    pipeline.resize(width, null, { withoutEnlargement: true })
  }

  await pipeline.webp({ quality: 82, effort: 6 }).toFile(output)

  const [inStat, outStat] = await Promise.all([stat(input), stat(output)])
  const savings = ((1 - outStat.size / inStat.size) * 100).toFixed(0)
  console.log(`${filename} → ${path.basename(output)} (${Math.round(inStat.size / 1024)}KB → ${Math.round(outStat.size / 1024)}KB, -${savings}%)`)
}

const files = (await readdir(IMAGES_DIR)).filter((f) => /\.(jpe?g|png)$/i.test(f))
if (files.length === 0) {
  console.log('No JPG/PNG files found in public/images/. Add source images first.')
  process.exit(0)
}

for (const file of files) {
  await optimizeFile(file)
}

console.log(`\nOptimized ${files.length} images.`)
