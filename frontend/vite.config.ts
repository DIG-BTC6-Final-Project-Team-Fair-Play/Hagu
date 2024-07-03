import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import { VitePWA } from "vite-plugin-pwa"; // added

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), // added
    VitePWA({
      registerType: "autoUpdate",
      // includeAssets: ["favicon.ico", "apple-touch-icon.png"],
      includeAssets: ["favicon.ico"],
      injectRegister: "auto", // added
      workbox: {
        navigateFallbackDenylist: [
          new RegExp("/api/auth"),
          new RegExp("/api/callback"),
          new RegExp("/api/logout"),
        ],
      }, // added
      manifest: {
        lang: "ja", // added
        name: "はぐはぐ",
        short_name: "はぐ", // added
        description: "家庭菜園支援アプリ",
        theme_color: "#5F907B",
        background_color: "#F2EBD9",
        display: "standalone",
        // scope: "/", // added
        start_url: "http://localhost:3000/api/auth", // added
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
    }),
    // added
  ],
  build: {
    outDir: "../backend/dist",
  },
  server: {
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
});
