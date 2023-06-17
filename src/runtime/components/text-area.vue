<template>
  <div class="w-full relative">
    <label v-if="label" :for="current?.id" class="font-medium align-top">
      {{ label }}

      <span v-if="required" class="text-brand-danger-500 text-xs">*</span>
    </label>

    <textarea
      v-uid
      ref="current"
      v-bind="$attrs"
      class="rounded bg-brand-gray-100/50 border-0 outline-none ring-1 ring-brand-gray-500/50 focus:ring-brand-500/70 focus:outline-none focus:bg-brand-500/10 transition-all ease-in-out py-1 px-2 w-full hover:ring-brand-500/80 hover:bg-brand-500/20 placeholder:text-brand-gray-500"
      :required="required"
      :disabled="disabled"
      :class="{
        'cursor-not-allowed bg-brand-gray-500/50': disabled,
      }"
      :value="modelValue"
      @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    ></textarea>
  </div>
</template>

<script setup lang="ts">
import { ref, PropType } from 'vue'

const current = ref<HTMLTextAreaElement>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

type TextAreaProps = {
  label: string
  required: boolean
  disabled: boolean
  loading: boolean
  modelValue: string
}

const props = defineProps({
  label: {
    type: String as PropType<TextAreaProps['label']>,
  },
  required: {
    type: Boolean as PropType<TextAreaProps['required']>,
    default: false,
  },
  disabled: {
    type: Boolean as PropType<TextAreaProps['loading']>,
    default: false,
  },
  modelValue: {
    type: String as PropType<TextAreaProps['modelValue']>,
    default: '',
  },
})

defineOptions({
  inheritAttrs: false,
})
</script>
