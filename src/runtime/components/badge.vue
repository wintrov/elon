<template>
  <span :class="badgeClasses">
    <svg :class="dotClasses" viewBox="0 0 6 6" aria-hidden="true">
      <circle cx="3" cy="3" r="3" />
    </svg>
    <slot></slot>
    <button type="button" :class="buttonClasses">
      <span class="sr-only">Remove</span>
      <svg viewBox="0 0 14 14" :class="buttonIconClasses">
        <path d="M4 4l6 6m0-6l-6 6" />
      </svg>
      <span class="absolute -inset-1"></span></button
  ></span>
</template>

<script setup lang="ts">
import { computed } from 'vue'
export type Props = {
  variant?: 'primary' | 'secondary' | 'info' | 'warn' | 'danger' | 'success'
  size?: 'sm' | 'md'
  soft?: boolean
  button?: boolean
  flat?: boolean
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
  button: {
    type: Boolean,
    default: false as Props['button'],
  },
  flat: {
    type: Boolean,
    default: false as Props['flat'],
  },
  dot: {
    type: Boolean,
    default: false as Props['soft'],
  },
  pill: {
    type: Boolean,
    default: false as Props['pill'],
  },
})

const primaryDefaultClasses = 'inline-flex items-center text-xs font-medium'

const primaryClasses = computed(() => ({
  [primaryDefaultClasses]: true,
  'bg-brand-50 text-brand-700 ring-brand-700/10': !props.dot && !props.flat,
  'bg-brand-100 text-brand-700': props.flat,
}))

const secondaryClasses = computed(() => ({
  [primaryDefaultClasses]: true,
  'bg-brand-gray-50 text-brand-gray-600 ring-brand-gray-500/10':
    !props.dot && !props.flat,
  'bg-brand-gray-100 text-brand-gray-600': props.flat,
}))

const infoClasses = computed(() => ({
  [primaryDefaultClasses]: true,
  'bg-brand-info-50 text-brand-info-700 ring-brand-info-700/10':
    !props.dot && !props.flat,
  'bg-brand-info-100 text-brand-info-700': props.flat,
}))

const warnClasses = computed(() => ({
  [primaryDefaultClasses]: true,
  'bg-brand-warn-50 text-brand-warn-700 ring-brand-warn-700/10':
    !props.dot && !props.flat,
  'bg-brand-warn-100 text-brand-warn-700': props.flat,
}))

const dangerClasses = computed(() => ({
  [primaryDefaultClasses]: true,
  'bg-brand-danger-50 text-brand-danger-700 ring-brand-danger-700/10':
    !props.dot && !props.flat,
  'bg-brand-danger-100 text-brand-danger-700': props.flat,
}))

const successClasses = computed(() => ({
  [primaryDefaultClasses]: true,
  'bg-brand-success-50 text-brand-success-700 ring-brand-success-700/10':
    !props.dot && !props.flat,
  'bg-brand-success-100 text-brand-success-700': props.flat,
}))

// generate the badge classes based on the props
const badgeClasses = computed(() => {
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
    'px-1.5 py-0.5': ['sm'].includes(props.size),
    'px-2 py-1': ['md'].includes(props.size),

    'gap-x-1.5': props.dot,
    'gap-x-0.5': props.button,

    'rounded-full': props.pill,
    'rounded-md': !props.pill,

    'text-brand-gray-900 ring-brand-gray-200': props.dot && !props.flat,

    'ring-1 ring-inset': !props.flat,
  }
})

const dotClasses = computed(() => ({
  'fill-brand-500': props.variant === 'primary',
  'fill-brand-gray-500': props.variant === 'secondary',
  'fill-brand-info-500': props.variant === 'info',
  'fill-brand-warn-500': props.variant === 'warn',
  'fill-brand-danger-500': props.variant === 'danger',
  'fill-brand-success-500': props.variant === 'success',
  'h-1.5 w-1.5': true,
  hidden: !props.dot,
}))

console.log(props.button)
const buttonClasses = computed(() => ({
  'group relative -mr-1 h-3.5 w-3.5 rounded-sm': true,
  'hover:bg-brand-600/20': props.variant === 'primary',
  'hover:bg-brand-gray-600/20': props.variant === 'secondary',
  'hover:bg-brand-info-600/20': props.variant === 'info',
  'hover:bg-brand-warn-600/20': props.variant === 'warn',
  'hover:bg-brand-danger-600/20': props.variant === 'danger',
  'hover:bg-brand-success-600/20': props.variant === 'success',
  hidden: !props.button,
}))

const buttonIconClasses = computed(() => ({
  'h-3.5 w-3.5': true,
  'stroke-indigo-600/50 group-hover:stroke-indigo-600/75':
    props.variant === 'primary',
  'stroke-brand-gray-600/50 group-hover:stroke-brand-gray-600/75':
    props.variant === 'secondary',
  'stroke-brand-info-600/50 group-hover:stroke-brand-info-600/75':
    props.variant === 'info',
  'stroke-brand-warn-600/50 group-hover:stroke-brand-warn-600/75':
    props.variant === 'warn',
  'stroke-brand-danger-600/50 group-hover:stroke-brand-danger-600/75':
    props.variant === 'danger',
  'stroke-brand-success-600/50 group-hover:stroke-brand-success-600/75':
    props.variant === 'success',
}))
</script>
