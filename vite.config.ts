import react from '@vitejs/plugin-react'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig } from 'vite'
import noBundlePlugin from 'vite-plugin-no-bundle'

export default defineConfig({
  plugins: [
    react(),
    noBundlePlugin({ copy: '**/*.css' }),
    visualizer({
      emitFile: true,
      filename: 'stats.html',
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  build: {
    outDir: 'dist',
    sourcemap: true,
    lib: {
      entry: 'src/index.ts',
      formats: ['es'],
      fileName: (format, entryName) => `${entryName}.${format === 'es' ? 'mjs' : 'cjs'}`,
    },
    rollupOptions: {
      plugins: [peerDepsExternal() as Plugin],
    },
  },
})
