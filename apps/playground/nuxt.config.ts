// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@salfatigroup/ui', '@nuxtjs/google-fonts'],
  googleFonts: {
    prefetch: true,
    display: 'swap',
    families: {
      Inter: true,
    },
  },
})
