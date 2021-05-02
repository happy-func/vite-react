import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import gzipPlugin from 'rollup-plugin-gzip';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  base: '/vite-react/',
  build: {
    rollupOptions: {
      external: ['echarts'],
      output: {
        globals: {
          echarts: 'echarts'
        }
      },
      plugins:[gzipPlugin()]
    }
  }
})
