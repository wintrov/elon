import { defineNuxtPlugin } from '#imports'
import { UidPlugin } from '@shimyshack/uid'

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.use(UidPlugin)
})

