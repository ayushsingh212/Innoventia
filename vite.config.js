import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base:"/Student_M_S/",
  plugins: [react()],
  assetsInclude: ['**/*.pdf', '**/*.pptx'],
})
