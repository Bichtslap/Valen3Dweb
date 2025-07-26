import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// La importación correcta es con "reactClickToComponent"
import { reactClickToComponent } from "vite-plugin-react-click-to-component";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Y lo llamas aquí
    reactClickToComponent()
  ], 
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});