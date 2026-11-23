# PB Machinery — Landing Page

Landing de **Pastry & Bakery Machinery (PB Machinery)** implementada a partir del diseño aprobado `PB_Machinery_Landing_Page_Aprobacion_v2.pdf`.

## Stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS v4
- Vitest
- Deploy: GitHub Pages (Actions)

Arquitectura alineada a la plantilla de landings del equipo: `config/` + `data/siteContent.ts` + secciones presentacionales + utilidades (`lib/`, `hooks/`).

## Desarrollo

```bash
npm install
npm run dev
```

App local en `http://127.0.0.1:4317/pb-machinery-landing/`.

## Scripts

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run preview` | Preview del build |
| `npm run test` | Tests |
| `npm run optimize-images` | Optimiza imágenes en `public/images` |

## Personalización

| Archivo | Qué cambia |
|---------|------------|
| `src/data/siteContent.ts` | Textos, productos, CTAs, assets |
| `src/config/site.ts` | SEO, URL, contacto |
| `src/config/sections.ts` | Orden / visibilidad de secciones |
| `src/index.css` | Tokens de color y tipografía |
| `public/images/` | Fotos de máquinas y visuales |

## GitHub Pages

1. Crear el repo `StuartGa/pb-machinery-landing`
2. Settings → Pages → Source: **GitHub Actions**
3. Push a `main` (workflow `.github/workflows/deploy.yml`)

URL esperada: `https://stuartga.github.io/pb-machinery-landing/`

## Contacto del cliente

- Email: eduardo@pbmachineryusa.com
- Web: https://www.pbmachineryusa.com
- Ubicación: Kingwood, TX 77345, USA
