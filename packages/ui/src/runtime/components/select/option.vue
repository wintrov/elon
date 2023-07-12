<template>
  <div
    class="flex items-center text-left"
    v-if="option.online !== undefined || option.avatar"
  >
    <img
      :src="option.avatar"
      alt=""
      class="h-5 w-5 flex-shrink-0 rounded-full"
      v-if="option.avatar"
    />
    <span
      :class="[
        option.online ? 'bg-green-400' : 'bg-gray-200',
        'inline-block h-2 w-2 flex-shrink-0 rounded-full',
      ]"
      aria-hidden="true"
      v-if="option.online !== undefined"
    />
    <span
      :class="[
        selected ? 'font-semibold' : 'font-normal',
        'ml-3 block truncate',
      ]"
    >
      {{ option.text }}
      <span class="sr-only" v-if="option.online !== undefined">
        is {{ option.online ? 'online' : 'offline' }}
      </span>
      <slot></slot>
    </span>
  </div>
  <span
    v-else
    class="text-left"
    :class="[selected ? 'font-semibold' : 'font-normal', 'block truncate']"
  >
    {{ option.text }}
    <slot></slot>
  </span>

  <span
    v-if="selected"
    :class="[
      active ? 'text-white' : 'text-brand-600',
      'absolute inset-y-0 right-0 flex items-center pr-4',
    ]"
  >
    <CheckIcon class="h-5 w-5" aria-hidden="true" />
  </span>
</template>
<script setup lang="ts">
import { PropType } from 'vue'
import { CheckIcon } from '@heroicons/vue/20/solid'

export type OptionType = {
  id: number
  text: string
  online?: boolean
  avatar?: string
}

defineProps({
  option: {
    type: Object as PropType<OptionType>,
    required: true,
  },
  selected: {
    type: Boolean,
    default: false,
  },
  active: {
    type: Boolean,
    default: false,
  },
})
</script>
