<template>
  <button
    class="px-2 py-1.5 w-full rounded bg-brand-500 text-white font-medium hover:bg-brand-600 transition-all ease-in-out focus:outline-none focus:ring-1 focus:ring-brand-500/80 focus:ring-offset-1 focus:ring-offset-brand-500/20 focus:bg-brand-500/20 focus:text-brand-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
    :disabled="disabled"
    :class="{
      'cursor-not-allowed bg-brand-gray-500/50': disabled,
    }"
  >
    <template v-if="loading">
      <spinner label="Loading" />
    </template>
    <template v-else>
      <slot></slot>
    </template>
  </button>
</template>

<script setup lang="ts">
import spinner from './spinner.vue'
import { PropType } from 'vue'

type ButtonProps = {
  disabled: boolean
  loading: boolean
}

const props = defineProps({
  disabled: {
    type: Boolean as PropType<ButtonProps['disabled']>,
    default: false,
  },
  loading: {
    type: Boolean as PropType<ButtonProps['loading']>,
    default: false,
  },
})
</script>

