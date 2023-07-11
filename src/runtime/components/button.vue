<template>
  <button v-bind="$attrs" :class="buttonClasses">
    <slot name="prefixIcon" v-if="$slots.prefixIcon"></slot>
    <slot></slot>
    <slot name="suffixIcon" v-if="$slots.suffixIcon"></slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

export type Props = {
  variant?: 'primary' | 'secondary' | 'info' | 'warning' | 'danger'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  soft?: boolean
  pill?: boolean
}

const props = defineProps({
  variant: {
    type: String,
    default: 'primary' as Props['variant'],
  },
  size: {
    type: String,
    default: 'md' as Props['size'],
  },
  soft: {
    type: Boolean,
    default: false as Props['soft'],
  },
  pill: {
    type: Boolean,
    default: false as Props['pill'],
  },
})

console.log(props.size)
// generate the button classes based on the props
const buttonClasses = computed(() => {
  return {
    'rounded-full': props.pill,
    rounded: !props.pill && ['xs', 'sm'].includes(props.size),
    'rounded-md': !props.pill && ['md', 'lg', 'xl'].includes(props.size),

    'font-semibold text-white shadow-sm space-x-2': true,
    'px-2 py-1': ['xs', 'sm'].includes(props.size),
    'px-2.5 py-1.5': ['md'].includes(props.size),
    'px-3 py-2': ['lg'].includes(props.size),
    'px-3.5 py-2.5': ['xl'].includes(props.size),

    'text-xs': ['xs'].includes(props.size),
    'text-sm': ['sm', 'md', 'lg', 'xl'].includes(props.size),

    'bg-brand-600 hover:bg-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 dark:focus-visible:outline-brand-500 dark:bg-brand-500 dark:hover:bg-brand-400':
      ['primary'].includes(props.variant),

    'text-brand-gray-900 ring-1 ring-inset ring-brand-gray-300 hover:bg-brand-gray-50 dark:bg-white/10 dark:hover:bg-white/20':
      ['secondary'].includes(props.variant),

    'bg-brand-50 text-brand-600 hover:bg-brand-100': props.soft,
  }
})
</script>
