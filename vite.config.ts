import { fileURLToPath, URL } from 'node:url'
import typescript2 from 'rollup-plugin-typescript2'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    typescript2({
      check: false,
      include: ['./src/components/*.vue'],
      tsconfigOverride: {
        compilerOptions: {
          sourceMap: true,
          declaration: true,
          declarationMap: true
        },
        exclude: [
          'vite.config.ts',
          'main.ts'
        ]
      }
    })
  ],
  build: {
    cssCodeSplit: false,
    lib: {
      entry: './src/VueFormElement.ts',
      formats: ['es', 'cjs'],
      name: 'VueFormElement',
      fileName: (format) => (format === 'es' ? 'index.js' : 'index.cjs')
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
