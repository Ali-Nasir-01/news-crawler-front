import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import "dotenv/config";

const apiUrl = process.env.VITE_API_URL;

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@public": path.resolve(__dirname, "public"),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: apiUrl,
        changeOrigin: true,
      },
    },
  },
});
