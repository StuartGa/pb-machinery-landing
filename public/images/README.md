# Imágenes del cliente

Coloca aquí los assets del cliente antes de optimizar.

## Nombres esperados (ver `src/data/siteContent.ts`)

- `hero.webp` — imagen principal
- `operational.webp`, `capacity.webp`
- `category-1.webp`, `category-2.webp`, `category-3.webp`
- `product-1.webp` … `product-7.webp`
- `logo-header.webp`, `logo-icon.webp`, `logo.webp`, `logo-white.webp`

## Flujo

```bash
# 1. Copiar JPG/PNG del cliente
# 2. Optimizar
npm run optimize-images
# 3. Borrar JPG/PNG si solo usarás WebP
```

Para desarrollo sin assets reales:

```bash
npm run generate:placeholders
```
