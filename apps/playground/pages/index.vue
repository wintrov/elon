<template>
  <div class="space-y-8">
    <div class="space-y-4">
      <div class="space-x-2 flex items-center justify-between">
        <h2 class="text-lg leading-6 font-medium text-brand-gray-900">
          @salfatigroup/ui
        </h2>
        <code
          class="inline-block p-2 text-xs font-mono text-brand-gray-500 rounded-lg border border-brand-gray-200"
        >
          npm i @salfatigroup/ui
        </code>
      </div>
    </div>

    <ul
      role="list"
      class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      <li
        v-for="component in components"
        :key="component.title"
        class="flex flex-col bg-brand-gray-50 col-span-1 rounded-lg shadow"
      >
        <div class="bg-white space-y-6 p-6 flex-1">
          <div class="space-y-1">
            <div class="flex w-full items-center justify-between">
              <h2 class="truncate text-sm font-medium text-brand-gray-900">
                {{ component.title }}
              </h2>

              <nuxt-link
                :to="component.to"
                class="flex items-center space-x-2 text-xs text-brand-500 hover:text-brand-700"
              >
                <span>Learn more</span>
                <KIconChevronRight class="h-4 w-4" />
              </nuxt-link>
            </div>

            <p
              v-if="component.description"
              class="text-xs text-brand-gray-500"
              v-html="component.description"
            ></p>
          </div>

          <div align="center">
            <keep-alive>
              <component :is="component.element" v-bind="component.props">
                <template v-for="slt in component.slots" :slot="slt.name">
                  {{ slt.content }}
                </template>
              </component>
            </keep-alive>
          </div>
        </div>

        <code
          class="block w-full p-6 text-sm font-mono text-brand-gray-500 rounded-b-lg overflow-x-scroll whitespace-nowrap"
        >
          {{ component.codeExample }}
        </code>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, shallowRef } from 'vue'

import KButton from '../../../packages/ui/src/runtime/components/button.vue'
import KDrowdown from '../../../packages/ui/src/runtime/components/dropdown.vue'
import KBadge from '../../../packages/ui/src/runtime/components/badge.vue'
import KSelect from '../../../packages/ui/src/runtime/components/select.vue'
import KInput from '../../../packages/ui/src/runtime/components/input/default-input.vue'
import KTextArea from '../../../packages/ui/src/runtime/components/text-area.vue'
import IStar from '../../../packages/ui/src/runtime/components/icon/star.vue'

const components = ref([
  {
    title: 'Button',
    to: '/button',
    element: shallowRef(KButton),
    props: {
      class: 'w-full',
    },
    slots: [
      {
        name: 'default',
        content: 'Button',
      },
    ],
    codeExample: `<k-button>Button</k-button>`,
  },
  {
    title: 'Dropdown',
    to: '/dropdown',
    element: shallowRef(KDrowdown),
    props: {
      class: 'w-full',
      items: [
        {
          value: '1',
          label: 'Option 1',
        },
        {
          value: '2',
          label: 'Option 2',
        },
      ],
    },
    slots: [
      {
        name: 'default',
        content: 'Dropdown',
      },
    ],
    codeExample: `<k-dropdown>Dropdown</k-dropdown>`,
  },
  {
    title: 'Badge',
    to: '/badge',
    element: shallowRef(KBadge),
    props: {
      dot: true,
    },
    slots: [
      {
        name: 'default',
        content: 'Badge',
      },
    ],
    codeExample: `<k-badge>Badge</k-badge>`,
  },
  {
    title: 'Select',
    to: '/select',
    element: shallowRef(KSelect),
    props: {
      class: 'w-full',
      options: [
        {
          id: '1',
          text: 'Wade Cooper',
        },
        {
          id: '2',
          text: 'Arlene Mccoy',
          avatar:
            'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      ],
    },
    slots: [
      {
        name: 'default',
        content: 'Select',
      },
    ],
    codeExample: `<k-select>Select</k-select>`,
  },
  {
    title: 'Input',
    to: '/input',
    element: shallowRef(KInput),
    props: {
      class: 'w-full',
    },
    slots: [
      {
        name: 'default',
        content: 'Input',
      },
    ],
    codeExample: `<k-input>Input</k-input>`,
  },
  {
    title: 'Text area',
    to: '/text-area',
    element: shallowRef(KTextArea),
    props: {
      class: 'w-full',
    },
    slots: [
      {
        name: 'default',
        content: 'Text area',
      },
    ],
    codeExample: `<k-text-area>Text area</k-text-area>`,
  },
  {
    title: 'Icon',
    description:
      'You can find the full icon list <a target="_blank" class="text-brand-500 hover:text-brand-700" href="https://www.figma.com/file/kNBOQOHOM9muhOOG3HxaYM/Anron-Icons-10?type=design&node-id=2542%3A5990&mode=design&t=6DiKPOPQ1BsiKzkG-1">here.</a>',
    to: '/icon',
    element: shallowRef(IStar),
    props: {
      class: 'w-5 h-5 text-brand-500',
      variant: 'duotone',
    },
    slots: [],
    codeExample: `<KIconStar variant="duotone" class="w-5 h-5" />`,
  },
])
</script>
