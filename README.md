# 🚀 Portafolio - Julio Cesar Morales

Portafolio personal moderno construido con **React 19 + TypeScript + Vite + Tailwind CSS v4**.

**Demo:** [En producción](https://juliocesar-dev.netlify.app) (actualizar URL cuando se deploye)

---

## ✨ Características

- 🎨 **Diseño moderno** con tema oscuro y acentos cyan
- 📱 **100% responsive** - móvil, tablet, desktop
- ♿ **Accesible** - ARIA labels, skip links, reduced motion support
- ⚡ **Performance optimizado** - lazy loading, code splitting, cache
- 🎯 **SEO completo** - Open Graph, Twitter Cards, JSON-LD
- 📊 **GitHub Stats en tiempo real** - con cache y fallback
- 📧 **Formulario funcional** - Formspree integration
- 🌐 **Multi-language ready** - preparado para i18n

---

## 🛠️ Stack Tecnológico

| Categoría | Tecnología |
|-----------|-----------|
| **Framework** | React 19 |
| **Lenguaje** | TypeScript 5.9 |
| **Build Tool** | Vite 7 |
| **Styling** | Tailwind CSS v4 |
| **Animaciones** | Framer Motion |
| **Íconos** | React Icons |
| **Deploy** | Netlify / Vercel |

---

## 📦 Instalación

### Prerrequisitos

- Node.js 18+ (`node -v`)
- npm o pnpm

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/Victor00128/julio-cesar-portfolio.git
cd julio-cesar-portfolio

# 2. Instalar dependencias
npm install

# 3. Copiar variables de entorno
cp .env.example .env

# 4. Editar .env con tus datos
# - Formspree URL para el formulario
# - (Opcional) Google Analytics ID

# 5. Iniciar servidor de desarrollo
npm run dev
```

El proyecto estará disponible en `http://localhost:5173`

---

## 🚀 Deploy en Producción

### Netlify (Recomendado)

1. Subí tu código a GitHub
2. Andá a [Netlify](https://netlify.com)
3. Click en "Add new site" → "Import an existing project"
4. Conectá tu repo de GitHub
5. Configuración:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click en "Deploy site"

### Vercel

1. Instalá Vercel CLI: `npm i -g vercel`
2. Ejecutá: `vercel`
3. Seguí las instrucciones

### Variables de Entorno en Producción

No olvides agregar tus variables de entorno en la plataforma de deploy:
- `VITE_FORMSPREE_URL`

---

## 📁 Estructura del Proyecto

```
PORTAFOLIO-JULIO-GITHUB/
├── public/
│   └── CV-Julio-Cesar.pdf       # Tu CV en PDF
├── src/
│   ├── components/
│   │   ├── Contact.tsx          # Formulario + redes
│   │   ├── CurrentStatus.tsx    # Estado actual
│   │   ├── Education.tsx        # Timeline educación
│   │   ├── Experience.tsx       # Timeline experiencia
│   │   ├── FeaturedProject.tsx  # Cards de proyectos
│   │   ├── GitHubStats.tsx      # Stats de GitHub
│   │   ├── ParticleField.tsx    # Fondo animado
│   │   ├── TechStack.tsx        # Grid de tecnologías
│   │   └── TypingEffect.tsx     # Efecto de escritura
│   ├── hooks/
│   │   └── useGitHubData.ts     # Hook para GitHub API
│   ├── App.tsx                  # Componente principal
│   ├── index.css                # Estilos globales
│   └── main.tsx                 # Entry point
├── index.html                   # HTML base + SEO
├── package.json
├── tsconfig.json
├── vite.config.ts
└── .env.example                 # Template de variables
```

---

## 🎨 Personalización

### Cambiar Colores

Editá `src/index.css`:

```css
@theme {
  --color-cyan-accent: #00C9FF;      /* Tu color principal */
  --color-cyan-dark: #0099cc;
  --color-purple-accent: #7c5cbf;
  --color-dark-bg: #0a0a0f;
  --color-dark-card: #111119;
  --color-dark-border: #1a1a2e;
}
```

### Actualizar Información

- **App.tsx:** Navegación, hero section, estructura de secciones
- **FeaturedProject.tsx:** Tus proyectos
- **Experience.tsx:** Tu experiencia laboral
- **Education.tsx:** Tu formación académica
- **Contact.tsx:** Tus redes sociales y email

### GitHub Stats

El hook `useGitHubData.ts` automáticamente:
- Fetchea datos de la API de GitHub
- Cachea por 1 hora en localStorage
- Maneja rate limits
- Muestra datos stale si hay error

Para cambiar el username, editá `src/hooks/useGitHubData.ts`:

```typescript
const USERNAME = 'Victor00128'  // Tu username de GitHub
```

---

## 🧪 Comandos Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor local

# Producción
npm run build        # Build optimizado
npm run preview      # Preview del build

# Linting (si se agrega ESLint)
npm run lint
```

---

## ♿ Accesibilidad

Este portafolio incluye:

- ✅ **Skip link** para navegación por teclado
- ✅ **ARIA labels** en botones y links
- ✅ **Reduced motion** support
- ✅ **Focus visible** en todos los elementos interactivos
- ✅ **Contraste de colores** WCAG AA
- ✅ **Form labels** asociados correctamente

### Testear Accesibilidad

```bash
# Instalar Axe DevTools (extensión de Chrome)
# O usar Lighthouse en Chrome DevTools
```

---

## 📊 Performance

Optimizaciones incluidas:

- ✅ **Lazy loading** de componentes
- ✅ **Code splitting** automático con Vite
- ✅ **Cache de API** para GitHub stats
- ✅ **Partículas reducidas** en dispositivos low-end
- ✅ **Imágenes optimizadas** (GitHub avatar)

### Lighthouse Score Esperado

- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

---

## 🐛 Troubleshooting

### El formulario no envía

1. Verificá que `VITE_FORMSPREE_URL` esté configurado en `.env`
2. Testeá el endpoint directamente en Formspree
3. Revisá la consola del navegador por errores

### GitHub Stats no carga

1. Podés haber alcanzado el rate limit de la API (60 requests/hora)
2. El hook usa cache - esperá 1 hora o limpiá localStorage
3. Verificá que el username en `useGitHubData.ts` sea correcto

### Las animaciones van lentas

1. El dispositivo puede ser low-end - el código ya reduce partículas automáticamente
2. El usuario puede tener `prefers-reduced-motion` activado

---

## 📄 Licencia

MIT License - sentite libre de usar este código para tu propio portafolio.

---

## 🤝 Contribuciones

¿Encontraste un bug o tenés una mejora? Abrí un issue o mandá un PR.

---

## 📬 Contacto

- **GitHub:** [@Victor00128](https://github.com/Victor00128)
- **LinkedIn:** [Julio Cesar](https://www.linkedin.com/in/julio-cesar-406314373/)
- **Email:** juliocesarmoralesalvarado9@gmail.com

---

**Hecho con ☕ y mucho código**
