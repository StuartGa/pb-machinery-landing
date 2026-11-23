# Guía de personalización

Checklist para crear una landing nueva a partir de esta plantilla.

## 1. Bootstrap del proyecto

### Opción A — Script automático (recomendado)

```bash
npm run setup -- \
  --name "Nombre del Cliente" \
  --slug "nombre-cliente-landing" \
  --url "https://usuario.github.io/nombre-cliente-landing" \
  --email "contacto@cliente.com"
```

Actualiza: `package.json`, `vite.config.ts`, `site.ts`, `siteContent.ts`, `index.html`, `manifest`, `sitemap`, `robots.txt`.

### Opción B — Manual

Editar estos valores en sincronía:

| Campo | Archivos |
|-------|----------|
| Nombre de marca | `siteContent.ts`, `site.ts`, `index.html` |
| URL producción | `site.ts`, `index.html`, `sitemap.xml`, `robots.txt` |
| Base path (`/repo/`) | `vite.config.ts`, `manifest.webmanifest` |

## 2. Contenido (`src/data/siteContent.ts`)

Todo el copy editable vive aquí:

- `brand` — nombre, rutas de logos
- `navigation` — menú (debe incluir los anchors de `siteConfig.requiredNavAnchors`)
- `hero` — titular, imagen, CTAs
- `categories` — 3 tarjetas de líneas de producto/servicio
- `experience` — estadísticas
- `operational` — banner con imagen de fondo
- `products` — catálogo destacado (7 items por defecto, 5 visibles)
- `capacity` — capacidad operativa
- `about` — misión, visión, valores
- `cta` + `footer`

**Importante:** cada imagen necesita un `imageAlt` descriptivo para SEO y accesibilidad.

## 3. Imágenes

### Desarrollo local

```bash
npm run generate:placeholders
```

### Producción

1. Copiar JPG/PNG del cliente a `public/images/`
2. Nombrar según rutas en `siteContent.ts` (o actualizar rutas)
3. Optimizar:

```bash
npm run optimize-images
```

4. Eliminar JPG/PNG originales si solo usarás WebP

### Tamaños recomendados

| Asset | Ancho máx. |
|-------|------------|
| Hero / operational | 1920px |
| Categorías | 800px |
| Productos | 600px |
| Logos | 400px |

## 4. Tema / colores (`src/index.css`)

```css
@theme {
  --color-primary: #f26522;        /* Acento de marca */
  --color-primary-strong: #b84a0f; /* Botones (contraste WCAG) */
  --color-background: #131313;     /* Fondo */
  /* … */
}
```

Cambiar fuentes: sustituir imports `@fontsource/` en `index.css`.

## 5. Secciones (`src/config/sections.ts`)

Ocultar bloques que el cliente no necesite:

```ts
export const enabledSections: SectionId[] = [
  'hero',
  'categories',
  'products',
  'about',
  'cta',
  // quitar: 'operational', 'capacity', 'experience'
]
```

El orden del array es el orden visual en la página.

## 6. SEO (`src/config/site.ts` + `index.html`)

- `description` ≤ 160 caracteres
- `keywords` relevantes
- `ogImage` apunta al hero WebP
- Verificar `canonical` en `index.html` tras el setup

JSON-LD se genera automáticamente desde `site.ts` + `siteContent.ts`.

## 7. Validación y deploy

```bash
npm run test
npm run build
npm run preview   # revisar en /tu-repo/
```

Push a `main` → GitHub Actions despliega automáticamente.

## 8. Checklist Lighthouse

- [ ] Todas las imágenes tienen `alt`
- [ ] `description` ≤ 160 chars
- [ ] Botones con contraste suficiente (`primary-strong`)
- [ ] Imágenes en WebP optimizado
- [ ] `theme-color` = color de fondo (scrollbar nativo)

Ver también [SEO.md](SEO.md).

## Estructura recomendada por cliente

```
github.com/tu-org/acme-landing     ← fork o repo nuevo desde plantilla
github.com/tu-org/pb-machinery-landing   ← cliente existente (referencia)
github.com/tu-org/landing-template   ← plantilla maestra (este repo)
```

Mantén la plantilla actualizada; porta mejoras del engine a los repos de clientes con cherry-pick o release tags.
