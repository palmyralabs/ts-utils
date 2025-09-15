import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { extname, relative, resolve } from 'path'
import { fileURLToPath } from 'node:url'
import { glob } from 'glob'


export default defineConfig({
  plugins: [  
  dts({ include: ['src'] })],
  server: {
    proxy: { "/api": "http://localhost:6060/" },
    open: true,
    port: 4000
  },
  build: {
    target: 'esnext',
    modulePreload: {
      polyfill: false,
    },
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'PalmyraTsUtils',
      fileName: 'palmyra-ts-utils',
      formats: ['es']
    },
    rollupOptions: {
      external: [
      ],
      input: Object.fromEntries(
        glob.sync('src/**/*.{ts,tsx}').map(file => [
          relative(
            'src',
            file.slice(0, file.length - extname(file).length)
          ),
          fileURLToPath(new URL(file, import.meta.url))
        ])
      ),
      output: {
        // format: 'iife',
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
        chunkFileNames: 'chunks/[name].js'
      }
    }
  }
})
