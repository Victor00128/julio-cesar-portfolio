import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        // Por id, no por nombre de paquete: la forma anterior
        // ({ vendor: ['react', 'react-dom'] }) dejaba vendor en 4 KB y metía
        // React DOM entero en el bundle principal, porque los imports reales
        // son 'react-dom/client' y 'react-icons/fa', que no coinciden.
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          if (id.includes('framer-motion') || id.includes('/motion-dom/') || id.includes('/motion-utils/')) {
            return 'motion'
          }
          if (id.includes('react-icons')) return 'icons'
          if (id.includes('/react-dom/') || id.includes('/react/') || id.includes('/scheduler/')) {
            return 'react'
          }
        },
      },
    },
    // Sourcemaps para debugging en producción (opcional)
    sourcemap: false,
    // Minificación
    minify: 'esbuild',
  },
  // Optimizaciones para desarrollo
  esbuild: {
    drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : [],
  },
});
