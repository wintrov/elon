const merge = require('deepmerge')
const config = require('@salfatigroup/tailwind-config')

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...merge(config, {
    theme: {
      extend: {
        height: {
          app: 'var(--app-height)',
        },
      },
    },
  }),
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './node_modules/@salfatigroup/ui/src/runtime/components/**/*.{js,vue,ts}',
  ],
}
