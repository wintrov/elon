<template>
  <div class="w-full relative">
    <label
      v-if="label"
      :for="current?.id"
      class="block text-sm font-medium leading-6 text-brand-gray-900"
    >
      {{ label }}

      <span v-if="required" class="text-brand-danger-500 text-xs">*</span>
    </label>
    <div class="mt-2">
      <textarea
        v-uid
        ref="current"
        v-bind="$attrs"
        class="block w-full rounded-md border-0 py-1.5 text-brand-gray-900 shadow-sm ring-1 ring-inset ring-brand-gray-300 placeholder:text-brand-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:text-sm sm:leading-6"
        :required="required"
        :disabled="disabled"
        :class="{
          'cursor-not-allowed bg-brand-gray-500/50': disabled,
        }"
        :value="modelValue"
        @input="
          emit('update:modelValue', ($event.target as HTMLInputElement).value)
        "
      ></textarea>
    </div>
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
