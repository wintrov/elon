<template>
  <div
    class="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600"
  >
    <label :for="current?.id" :class="labelClasses">{{ label }}</label>
    <input
      v-uid
      ref="current"
      v-bind="$attrs"
      :required="required"
      :disabled="disabled"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :class="inputClasses"
      @input="
        emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
    />
  </div>
</template>

<script setup lang="ts">
import { ref, PropType, computed, onMounted } from 'vue'

const current = ref<HTMLInputElement>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

type InputProps = {
  label: string
  required: boolean
  disabled: boolean
  type: 'text' | 'password' | 'email' | 'url'
  modelValue: string
  placeholder: string
  helpText: string
  errorText: string
  cornerHint: string
  insetLabel: boolean
}

const { errorText, helpText, label } = defineProps({
  label: {
    type: String as PropType<InputProps['label']>,
    default: '',
  },
  required: {
    type: Boolean as PropType<InputProps['required']>,
    default: false,
  },
  disabled: {
    type: Boolean as PropType<InputProps['disabled']>,
    default: false,
  },
  type: {
    type: String as PropType<InputProps['type']>,
    default: 'text',
  },
  modelValue: {
    type: String as PropType<InputProps['modelValue']>,
    default: '',
  },
  placeholder: {
    type: String as PropType<InputProps['placeholder']>,
    default: '',
  },
  helpText: {
    type: String as PropType<InputProps['helpText']>,
    default: '',
  },
  errorText: {
    type: String as PropType<InputProps['errorText']>,
    default: '',
  },
  cornerHint: {
    type: String as PropType<InputProps['cornerHint']>,
    default: '',
  },
  insetLabel: {
    type: Boolean as PropType<InputProps['insetLabel']>,
    default: false,
  },
})

defineOptions({
  inheritAttrs: false,
})

const labelClasses = computed(() => ({
  'block text-sm font-medium leading-6 text-brand-gray-900': label,
  'sr-only': !label,
}))

const inputClasses = computed(() => ({
  'block w-full rounded-md border-0 p-0 py-1.5 ring-0 ring-inset focus:ring-0 focus:ring-inset sm:text-sm sm:leading-6':
    true,
  'disabled:cursor-not-allowed disabled:bg-brand-gray-50 disabled:text-brand-gray-500 disabled:ring-brand-gray-200':
    true,
  'text-brand-gray-900 ring-brand-gray-300 placeholder:text-brand-gray-400 focus:ring-brand-600':
    !errorText,
}))
</script>
