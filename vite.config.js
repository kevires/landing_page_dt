import dns from 'dns'
import path from 'path'
const { createVuePlugin } = require('vite-plugin-vue2')
dns.setDefaultResultOrder('verbatim')

module.exports = {
  plugins: [createVuePlugin()],
  externals: ['vue'],
  server: {
    port: 8000,
    host: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@validations': path.resolve(
        __dirname,
        './src/utils/validations/validations.js'
      ),
      vue: 'vue/dist/vue.esm'
    }
  }
}
