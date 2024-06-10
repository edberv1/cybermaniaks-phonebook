import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // This is important for Vercel deployment
  build: {
    outDir: 'dist', // Default output directory
  },
  plugins: [react()],
  server: {
    port: 3000, // Change this to your desired port
  },
})
