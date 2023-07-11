import {
  defineNuxtModule,
  addComponentsDir,
  createResolver,
  addPlugin,
} from '@nuxt/kit'
import { name, version } from '../package.json'

export interface ModuleOptions {
  /**
   * @default 'k'
   */
  prefix?: string
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'ui',
    compatibility: {
      nuxt: '^3.0.0',
    },
  },
  defaults: {
    prefix: 'k',
  },
  async setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    // Transpile runtime
    const runtimeDir = resolve('./runtime')
    nuxt.options.build.transpile.push(runtimeDir)

    addPlugin({
      src: resolve(runtimeDir, 'plugins', 'uid'),
    })

    addComponentsDir({
      path: resolve(runtimeDir, 'components'),
      prefix: options.prefix,
      watch: false,
    })
  },
})
