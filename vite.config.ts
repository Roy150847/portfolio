import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Set the main entry point for the application
  build: {
    rollupOptions: {
      input: path.resolve(__dirname, 'src/main.jsx'), // Specify the main entry
    },
  },
});
