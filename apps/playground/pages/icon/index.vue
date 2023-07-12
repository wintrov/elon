<template>
  <ul class="divide-y divide-brand-gray-500/20">
    <li v-for="icon in iconSamples" :key="icon.iconName" class="space-y-3 py-8">
      <h3 class="truncate text-sm font-medium text-brand-gray-900">
        Icon Name - {{ icon.iconName }}
      </h3>
      <div class="flex space-x-10">
        <div
          v-for="variant in supportedVariants"
          :key="`${icon.iconName}-${variant}`"
          class="flex flex-col items-center justify-center space-y-1"
        >
          <component
            :is="icon.component"
            :variant="variant"
            class="w-5 h-5 text-brand-500"
          />

          <legend class="text-xs text-brand-gray-500">{{ variant }}</legend>
        </div>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref, shallowRef } from 'vue'
import * as ICONS from '../../../../packages/ui/src/runtime/components/icon'

const supportedVariants = [
  'duocolor',
  'duotone',
  'mono',
  'filled',
  'gestalt',
  'line',
]

const iconsKeys = Object.keys(ICONS)

const iconSamples = ref(iconsKeys.map((iconName) => ({
  iconName,
  component: shallowRef(ICONS[iconName]),
})))

</script>
