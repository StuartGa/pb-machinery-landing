import sharp from 'sharp'
import fs from 'fs'
import path from 'path'

const out = 'public/images'
fs.mkdirSync(out, { recursive: true })

const jobs = [
  ['/tmp/pb-assets/52c6c6a4-9ab8-41de-a8e8-a3d351130e26.jpg', 'machine-depositor.webp', 1200],
  ['/tmp/pb-assets/da1ba65a-fdf8-48f9-8b52-8c1bb6a634c3.jpg', 'machine-conveyor.webp', 1200],
  ['/tmp/pb-assets/e20854f8-c577-4292-ab90-e974eefb1214.jpg', 'machine-injector.webp', 1200],
  ['/tmp/pb-assets/33a5c6b4-aa2c-4bc4-b651-28b4285136f8.jpg', 'machine-lineup.webp', 1400],
  ['/tmp/pb-assets/79373061-629f-4a68-b8ad-121fb8a466a9.jpg', 'machine-press.webp', 1000],
  ['/tmp/pb-design/extracts/unsplash-cake.jpg', 'hero-cake.webp', 900],
  ['/tmp/pb-design/extracts/unsplash-cake.jpg', 'industry-pastry.webp', 800],
  ['/tmp/pb-design/extracts/unsplash-loaves.jpg', 'industry-bread.webp', 800],
  ['/tmp/pb-design/extracts/unsplash-flour.jpg', 'evolve-dough.webp', 1100],
  ['/tmp/pb-design/extracts/cta-bread.png', 'cta-bread.webp', 1600],
  ['/tmp/pb-assets/e20854f8-c577-4292-ab90-e974eefb1214.jpg', 'robotina.webp', 900],
  ['/tmp/pb-assets/33a5c6b4-aa2c-4bc4-b651-28b4285136f8.jpg', 'cream-levain.webp', 700],
  ['/tmp/pb-assets/79373061-629f-4a68-b8ad-121fb8a466a9.jpg', 'silex.webp', 900],
  ['/tmp/pb-assets/da1ba65a-fdf8-48f9-8b52-8c1bb6a634c3.jpg', 'line-galleteria.webp', 600],
  ['/tmp/pb-assets/52c6c6a4-9ab8-41de-a8e8-a3d351130e26.jpg', 'line-dosificacion.webp', 600],
  ['/tmp/pb-assets/e20854f8-c577-4292-ab90-e974eefb1214.jpg', 'line-tarteletas.webp', 600],
  ['/tmp/pb-assets/da1ba65a-fdf8-48f9-8b52-8c1bb6a634c3.jpg', 'line-transferencia.webp', 600],
]

for (const [src, name, width] of jobs) {
  if (!fs.existsSync(src) || fs.statSync(src).size < 1000) {
    console.log('skip', src)
    continue
  }
  await sharp(src)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(path.join(out, name))
  console.log('ok', name)
}

await sharp('/tmp/pb-design/extracts/unsplash-flour.jpg')
  .resize({ width: 1800 })
  .modulate({ brightness: 0.45, saturation: 0.7 })
  .webp({ quality: 75 })
  .toFile(path.join(out, 'hero-bg.webp'))

console.log('hero-bg done')
