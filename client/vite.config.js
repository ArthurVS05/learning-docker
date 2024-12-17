import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  preview: {
    port: 8080,
    strictPort: true,
  },
  server: {
    // Pour voir le hot reload
    watch: {
      usePolling: true,
    },
    hmr: true,
    strictPort: true,
    host: true,
    port: 8080,
    origin: "http://0.0.0.0:8080",
  },
});
