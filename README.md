# Portafolio - Julio Cesar Morales

Portafolio personal construido con **React 19 + TypeScript + Vite + Tailwind CSS v4**.

**Demo:** [juliocesar-dev.netlify.app](https://juliocesar-dev.netlify.app)

## Caracteristicas

- Diseno moderno y responsive
- Accesibilidad base cuidada
- SEO tecnico y metadata completa
- Stats de GitHub con cache
- Formulario de contacto con Formspree
- Estructura preparada para seguir creciendo

## Stack tecnologico

| Categoria | Tecnologia |
|-----------|-----------|
| Framework | React 19 |
| Lenguaje | TypeScript 5 |
| Build tool | Vite |
| Styling | Tailwind CSS v4 |
| Animaciones | Framer Motion |
| Iconos | React Icons |
| Deploy | Netlify / Vercel |

## Instalacion

```bash
git clone https://github.com/Victor00128/julio-cesar-portfolio.git
cd julio-cesar-portfolio
npm install
npm run dev
```

El proyecto estara disponible en `http://localhost:5173`.

## Variables de entorno

El repositorio incluye `.env.example`.

- `VITE_FORMSPREE_URL`: opcional si quieres sobrescribir el endpoint actual del formulario
- `VITE_GA_ID`: opcional para analytics
- `VITE_GITHUB_URL`, `VITE_LINKEDIN_URL`, `VITE_EMAIL`: overrides opcionales

```bash
cp .env.example .env
```

## Deploy en produccion

### Netlify

1. Sube el codigo a GitHub.
2. Importa el repositorio en Netlify.
3. Usa `npm run build` como build command.
4. Usa `dist` como publish directory.

### Vercel

1. Ejecuta `vercel`.
2. Sigue las instrucciones del CLI.

## Estructura del proyecto

```text
src/
├── components/
├── hooks/
├── App.tsx
├── index.css
└── main.tsx
public/
└── CV-Julio-Cesar.pdf
```

## Comandos disponibles

```bash
npm run dev
npm run build
npm run preview
```

## Notas

- Si haces fork del proyecto, cambia los datos de contacto y el endpoint de Formspree.
- Las instrucciones para preparar el CV quedaron movidas a `docs/CV-INSTRUCTIONS.md`.

## Licencia

MIT. Ver el archivo [LICENSE](LICENSE).
