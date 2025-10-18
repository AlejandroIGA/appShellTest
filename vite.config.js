import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      // Configuración del manifiesto de la PWA
      manifest: {
        name: 'React PWA Music App',
        short_name: 'MusicApp',
        description: 'Una App Shell de PWA para una aplicación de música.',
        theme_color: '#242424',
        background_color: '#ffffff',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
      // Estrategia de caching del Service Worker
      workbox: {
        // Almacena en caché todos los assets estáticos (JS, CSS, HTML, imágenes, fuentes).
        // Esto asegura que el App Shell funcione sin conexión.
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff,woff2}'],
      },
      devOptions: {
        enabled: true // Habilita PWA en modo de desarrollo
      }
    })
  ],
})
