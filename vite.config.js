import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const { resolve } = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // 设置别名
    alias: {
      '@/': resolve(__dirname, 'src/'),
      '@/views': resolve(__dirname, 'src/views/'),
      '@/style': resolve(__dirname, 'src/style/'),
      '@/utils': resolve(__dirname, 'src/utils/')
    }
  }
})
