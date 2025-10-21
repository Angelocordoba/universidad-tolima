
import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
 plugins: [react()],
  build: {
    outDir: "dist"
  },
  server: {
    port: 5173
  },
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png'],
      manifest: {
        name: 'UT Visitantes',
        short_name: 'Visitantes UT',
        start_url: '/ventanilla',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#0d6b1e',
        icons: [
          {
            src: '/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
