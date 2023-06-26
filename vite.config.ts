import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      imports: ['vue']
      // dts: '/auto-import.d.ts'
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  base: './',
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js',
      '@': resolve(__dirname, 'src') //配置@路径
    }
  }
})
