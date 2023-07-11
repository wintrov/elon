<template>
  <button v-bind="$attrs" :class="buttonClasses">
    <slot name="prefixIcon" v-if="$slots.prefixIcon"></slot>
    <slot></slot>
    <slot name="suffixIcon" v-if="$slots.suffixIcon"></slot>
  </button>
</template>

<script setup lang="ts">
import { computed, ComputedRef } from 'vue'

export type Props = {
  variant?: 'primary' | 'secondary' | 'info' | 'warn' | 'danger' | 'success'
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

const primaryFocusVisible =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'

const primaryClasses = computed(() => ({
  [primaryFocusVisible]: true,
  'focus-visible:outline-brand-600 dark:focus-visible:outline-brand-500': true,
  'bg-brand-600 text-white hover:bg-brand-500 dark:bg-brand-500 dark:hover:bg-brand-400':
    !props.soft,
  'bg-brand-50 text-brand-600 hover:bg-brand-100': props.soft,
}))

const secondaryClasses = computed(() => ({
  'ring-1 ring-inset ring-brand-gray-300': true,
  'text-brand-gray-900 hover:bg-brand-gray-50 dark:bg-white/10 dark:hover:bg-white/20':
    !props.soft,
  'bg-brand-50 text-brand-600 hover:bg-brand-100': props.soft,
}))

const infoClasses = computed(() => ({
  [primaryFocusVisible]: true,
  'focus-visible:outline-brand-info-600 dark:focus-visible:outline-brand-info-500':
    true,
  'bg-brand-info-600 text-white hover:bg-brand-info-500 dark:bg-brand-info-500 dark:hover:bg-brand-info-400':
    !props.soft,
  'bg-brand-info-50 text-brand-info-600 hover:bg-brand-info-100': props.soft,
}))

const warnClasses = computed(() => ({
  [primaryFocusVisible]: true,
  'focus-visible:outline-brand-warn-600 dark:focus-visible:outline-brand-warn-500':
    true,
  'bg-brand-warn-600 text-white hover:bg-brand-warn-500 dark:bg-brand-warn-500 dark:hover:bg-brand-warn-400':
    !props.soft,
  'bg-brand-warn-50 text-brand-warn-600 hover:bg-brand-warn-100': props.soft,
}))

const dangerClasses = computed(() => ({
  [primaryFocusVisible]: true,
  'focus-visible:outline-brand-danger-600 dark:focus-visible:outline-brand-danger-500':
    true,
  'bg-brand-danger-600 text-white hover:bg-brand-danger-500 dark:bg-brand-danger-500 dark:hover:bg-brand-danger-400':
    !props.soft,
  'bg-brand-danger-50 text-brand-danger-600 hover:bg-brand-danger-100':
    props.soft,
}))

const successClasses = computed(() => ({
  [primaryFocusVisible]: true,
  'focus-visible:outline-brand-success-600 dark:focus-visible:outline-brand-success-500':
    true,
  'bg-brand-success-600 text-white hover:bg-brand-success-500 dark:bg-brand-success-500 dark:hover:bg-brand-success-400':
    !props.soft,
  'bg-brand-success-50 text-brand-success-600 hover:bg-brand-success-100':
    props.soft,
}))

// generate the button classes based on the props
const buttonClasses = computed(() => {
  const baseClasses: Record<string, Record<string, boolean>> = {
    primary: primaryClasses.value,
    info: infoClasses.value,
    warn: warnClasses.value,
    danger: dangerClasses.value,
    success: successClasses.value,
    secondary: secondaryClasses.value,
  }

  return {
    ...baseClasses[props.variant ?? 'primary'],
    'font-semibold shadow-sm space-x-2': true,
    'px-2 py-1': ['xs', 'sm'].includes(props.size),
    'px-2.5 py-1.5': ['md'].includes(props.size),
    'px-3 py-2': ['lg'].includes(props.size),
    'px-3.5 py-2.5': ['xl'].includes(props.size),

    'text-xs': ['xs'].includes(props.size),
    'text-sm': ['sm', 'md', 'lg', 'xl'].includes(props.size),

    // Pill
    'rounded-full': props.pill,
    rounded: !props.pill && ['xs', 'sm'].includes(props.size),
    'rounded-md': !props.pill && ['md', 'lg', 'xl'].includes(props.size),
  }
})
</script>
