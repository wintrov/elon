<template>
  <div class="w-full relative">
    <label v-if="label" class="font-medium align-top">
      {{ label }}

      <span v-if="required" class="text-brand-danger-500 text-xs">*</span>
    </label>

    <button
      class="rounded bg-brand-gray-100/50 border-0 outline-none ring-1 ring-brand-gray-500/50 focus:ring-brand-500/70 focus:outline-none focus:bg-brand-500/10 transition-all ease-in-out py-1 px-2 w-full hover:ring-brand-500/80 hover:bg-brand-500/20 placeholder:text-brand-gray-500"
      :disabled="disabled"
      :class="{
        'cursor-not-allowed bg-brand-gray-500/50': disabled,
      }"
    >
      {{ Array.isArray(modelValue) ? modelValue.map((option) => option.name).join(', ') : modelValue.name }}
    </button>

    <ul>
      <li
        v-for="option in options"
        :key="option.value"
        @click="emit('update:modelValue', option)"
      >
        {{ option.name }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'

type SelectOption = {
  name: string
  value: string
}

type SelectProps = {
  label: string
  required: boolean
  disabled: boolean
  loading: boolean
  options: SelectOption[]
  modelValue: SelectOption | SelectOption[]
};

const emit = defineEmits<{
  'update:modelValue': [value: SelectOption | SelectOption[]]
}>()

const props = defineProps({
  label: {
    type: String as PropType<SelectProps['label']>,
  },
  required: {
    type: Boolean as PropType<SelectProps['required']>,
    default: false,
  },
  disabled: {
    type: Boolean as PropType<SelectProps['loading']>,
    default: false,
  },
  options: {
    type: Array as PropType<SelectProps['options']>,
    default: () => [],
  },
  modelValue: {
    type: [Object, Array] as PropType<SelectProps['modelValue']>,
    default: () => [],
  },
})
</script>
