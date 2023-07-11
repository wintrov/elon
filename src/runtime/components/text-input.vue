<template>
  <div>
    <div class="flex justify-between">
      <label :for="current?.id" :class="labelClasses">{{ label }}</label>
      <span class="text-sm leading-6 text-brand-gray-500" id="email-optional">{{
        cornerHint
      }}</span>
    </div>

    <div :class="inputWrapperClasses">
      <div
        class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
      >
        <slot name="leadingIcon"></slot>
      </div>
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
      <div
        class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"
      >
        <slot name="trailingIcon"></slot>
      </div>
      <div :class="errorIconClasses">
        <ExclamationCircleIcon
          class="h-5 w-5 text-brand-danger-500"
          aria-hidden="true"
        />
      </div>
    </div>
    <p :class="bottomTextClasses">
      {{ errorText?.length > 0 ? errorText : helpText }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, PropType, computed } from 'vue'
import { ExclamationCircleIcon } from '@heroicons/vue/20/solid'

const current = ref<HTMLInputElement>()

;('relative mt-2 rounded-md shadow-sm')
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
})

defineOptions({
  inheritAttrs: false,
})

const { leadingIcon, trailingIcon } = defineSlots()
const labelClasses = computed(() => ({
  'block text-sm font-medium leading-6 text-brand-gray-900': label,
  'sr-only': !label,
}))
const inputWrapperClasses = computed(() => ({
  'mt-2': true,
  'relative rounded-md shadow-sm': errorText || leadingIcon,
}))

const bottomTextClasses = computed(() => ({
  'mt-2 text-sm': true,
  hidden: !errorText && !helpText,
  'text-brand-gray-500': !errorText,
  'text-brand-danger-500': errorText,
}))

const errorIconClasses = computed(() => ({
  'pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3': true,
  hidden: !errorText,
}))

const inputClasses = computed(() => ({
  'block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6':
    true,
  'disabled:cursor-not-allowed disabled:bg-brand-gray-50 disabled:text-brand-gray-500 disabled:ring-brand-gray-200':
    true,
  'text-brand-gray-900 ring-brand-gray-300 placeholder:text-brand-gray-400 focus:ring-brand-600':
    !errorText,
  'pr-10 text-brand-danger-900 ring-brand-danger-300 placeholder:text-brand-danger-400 focus:ring-brand-danger-500':
    errorText || trailingIcon,
  'pl-10': leadingIcon,
}))
</script>
