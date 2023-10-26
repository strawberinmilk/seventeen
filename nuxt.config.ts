import elementPlus from 'element-plus'; // eslint-disable-line

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'n進数17才メーカー',
      htmlAttrs: {
        lang: 'ja',
        prefix: 'og: http://ogp.me/ns#',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
        { 'http-equiv': 'Pragma', content: 'no-cache"' },
        { 'http-equiv': 'Cache-Control', content: 'no-cache"' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: '@strawberinmilk' },
        { name: 'twitter:creator', content: '@strawberinmilk' },
        { property: 'og:url', content: 'https://seventeen.strawberinmilk.dev' },
        { property: 'og:title', content: 'n進数17才メーカー' },
        {
          property: 'og:description',
          content: 'あなたを数字の力で17才にします',
        },
        // { property: 'og:image', content: 'https://example.com/hoge.png' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  modules: ['@element-plus/nuxt'],
  elementPlus: {
    locale: 'ja',
  },
  typescript: {
    strict: true,
  },
});
