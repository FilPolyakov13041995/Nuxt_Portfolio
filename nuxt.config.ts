import { repositoryName } from './slicemachine.config.json'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: false as any,

  app: {
    head: {
      title: 'Prismic + Nuxt Minimal Starter',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: "stylesheet", href: "https://unpkg.com/aos@2.3.4/dist/aos.css" },
      ],
    }
  },
  css: ['~/assets/css/tailwind.css'],
  modules: ['@nuxtjs/prismic', 'nuxt-quasar-ui', '@nuxtjs/tailwindcss'],

  routeRules: {
    "/": { prerender: true },
    "/work": { swr: 3600 },
    "/about": { swr: 3600 }
  },

  prismic: {
    endpoint: 'my-new-site-prismic',
    preview: '/api/preview',
    clientConfig: {
      accessToken: process.env.PRISMIC_TOKEN,
      routes: [
        {
          type: 'page',
          path: '/:uid',
        },
        {
          type: 'page',
          uid: 'home',
          path: '/',
        },
      ]
    }
  },
})