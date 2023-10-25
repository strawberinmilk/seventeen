import elementPlus from 'element-plus';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@element-plus/nuxt'
  ],
  elementPlus: {
    locale: 'ja'
  },
  typescript: {
    strict: true
  }
})
