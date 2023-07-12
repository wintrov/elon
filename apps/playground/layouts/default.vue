<template>
  <div class="max-w-6xl mx-auto px-10 py-6 space-y-6">
    <nav class="flex" aria-label="Breadcrumb">
      <ol role="list" class="flex items-center space-x-4">
        <li>
          <div>
            <nuxt-link to="/" class="text-brand-gray-400 hover:text-brand-500">
              <KIconHome
                class="w-5 h-5 flex-shrink-0"
                aria-hidden="true"
                variant="duotone"
              />
              <span class="sr-only">Home</span>
            </nuxt-link>
          </div>
        </li>
        <li v-for="crumb in crumbs" :key="crumb.href">
          <div class="flex items-center">
            <KIconChevronRight
              class="w-5 h-5 flex-shrink-0 text-brand-gray-400"
              aria-hidden="true"
            />
            <nuxt-link
              :to="crumb.href"
              class="ml-4 text-sm font-medium text-brand-gray-500 hover:text-brand-500"
              :aria-current="crumb.current ? 'page' : undefined"
            >
              {{ crumb.title }}
            </nuxt-link>
          </div>
        </li>
      </ol>
    </nav>

    <main class="">
      <slot></slot>
    </main>

    <footer class="space-y-3 pt-10 pb-2">
      <hr class="border-brand-gray-200 mb-3" aria-hidden="true" />
      <h3 class="text-sm font-medium text-brand-gray-900">Contributors</h3>
      <div class="flex space-x-4">
        <nuxt-link
          v-for="cont in contributors"
          :to="cont.linkedinUrl"
          class="group block flex-shrink-0"
        >
          <div class="flex items-center">
            <div>
              <img
                class="inline-block h-9 w-9 rounded-full"
                :src="cont.avatar"
                :alt="`${cont.name}'s Profile Picture'`"
              />
            </div>
            <div class="ml-3">
              <p
                class="text-sm font-medium text-brand-gray-700 group-hover:text-brand-gray-900"
              >
                {{ cont.name }}
              </p>
              <p
                class="text-xs font-medium text-brand-gray-500 group-hover:text-brand-gray-800"
              >
                View profile
              </p>
            </div>
          </div>
        </nuxt-link>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute, useRouter, RouteLocation } from 'vue-router'

const route = useRoute()
const router = useRouter()

const contributors = ref([
  {
    name: 'Omer Hochman',
    avatar:
      'https://media.licdn.com/dms/image/D4D03AQGYOduRuUh9Pw/profile-displayphoto-shrink_800_800/0/1678706450166?e=2147483647&v=beta&t=IZodxrSPfNZfyDTzQ_S-t75LoYJR_ToyCVHrsrMczQI',
    linkedinUrl: 'https://www.linkedin.com/in/omer-hochman/',
  },
  {
    name: 'Elon Salfati',
    avatar:
      'https://media.licdn.com/dms/image/C4E03AQFFZp_4ZyHSiQ/profile-displayphoto-shrink_800_800/0/1618893530656?e=2147483647&v=beta&t=lxGV8-QHMxeSjFWNBN0H9veexjL8D_TioTLgGmL7onE',
    linkedinUrl: 'https://www.linkedin.com/in/elonsalfati/',
  },
])

function titleCase(text: string): string {
  return text
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

type RouteObject = RouteLocation & {
  href: string
}

type Crumb = RouteObject & {
  title: string
  current?: boolean
}

const crumbs = computed(() => {
  const fullPath = route.fullPath
  const params = fullPath.startsWith('/')
    ? fullPath.substring(1).split('/')
    : fullPath.split('/')

  const crumbs: Crumb[] = []
  let path = ''
  params.forEach((param, index) => {
    path = `${path}/${param}`
    const routeObject = router.resolve(path)
    if (routeObject.name !== null && routeObject.name !== 'index') {
      crumbs.push({
        title: titleCase(param.replace(/-/g, ' ')),
        ...routeObject,
      })
    }
  })

  return crumbs
})
</script>
