import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  resolve: {
    tsconfigPaths: true,
    alias: {
      src: "/src",
      assets: "/src/assets",
      components: "/src/components",
      lib: "/src/lib",
      pages: "/src/pages",
    },
  },
  base: '/', // default -> placing for explicity
})
