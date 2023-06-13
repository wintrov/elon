<template>
  <div class="w-full relative">
    <label v-if="label" :for="current?.id" class="font-medium align-top">
      {{ label }}

      <span v-if="required" class="text-brand-danger-500 text-xs">*</span>
    </label>

    <input
      v-uid
      ref="current"
      v-bind="$attrs"
      class="rounded bg-brand-gray-100/50 border-0 outline-none ring-1 ring-brand-gray-500/50 focus:ring-brand-500/70 focus:outline-none focus:bg-brand-500/10 transition-all ease-in-out py-1 px-2 w-full hover:ring-brand-500/80 hover:bg-brand-500/20 placeholder:text-brand-gray-500"
      :required="required"
      :disabled="disabled"
      :class="{
        'cursor-not-allowed bg-brand-gray-500/50': disabled,
      }"
      :type="type"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, PropType } from 'vue'

const current = ref<HTMLInputElement>()

type InputProps = {
  label: string
  required: boolean
  disabled: boolean
  loading: boolean
  type: 'text' | 'password' | 'email'
}

const props = defineProps({
  label: {
    type: String as PropType<InputProps['label']>,
  },
  required: {
    type: Boolean as PropType<InputProps['required']>,
    default: false,
  },
  disabled: {
    type: Boolean as PropType<InputProps['loading']>,
    default: false,
  },
  type: {
    type: String as PropType<InputProps['type']>,
    default: 'text',
  },
})

defineOptions({
  inheritAttrs: false,
})
</script>
