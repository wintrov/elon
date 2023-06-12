<template>
  <div class="flex items-center justify-center">
    <div
      class="text-xs rounded-full py-0.5 px-1"
      :class="{
        'bg-brand-success-500/10 text-brand-success-500 border border-brand-success-500/80': success,
        'bg-brand-warning-500/10 text-brand-warning-500 border border-brand-warning-500/80': warning,
        'bg-brand-danger-500/10 text-brand-danger-500 border border-brand-danger-500/80': danger,
        'bg-brand-500/10 text-brand-500 border border-brand-500/80': brand,
        'bg-brand-gray-500/10 text-brand-gray-500 border border-brand-gray-500/80': !success && !warning && !danger && !brand,
      }"
      :aria-label="ariaLabel"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType, computed } from 'vue'

type TagProps = {
  success: boolean
  warning: boolean
  danger: boolean
  brand: boolean
}

const props = defineProps({
  success: {
    type: Boolean as PropType<TagProps['success']>,
    default: false,
  },
  warning: {
    type: Boolean as PropType<TagProps['warning']>,
    default: false,
  },
  danger: {
    type: Boolean as PropType<TagProps['danger']>,
    default: false,
  },
  brand: {
    type: Boolean as PropType<TagProps['brand']>,
    default: false,
  },
})

const ariaLabel = computed(() => {
  if (props.success) {
    return 'Success Tag'
  }

  if (props.warning) {
    return 'Warning Tag'
  }

  if (props.danger) {
    return 'Error Tag'
  }

  return 'Tag'
})
</script>
