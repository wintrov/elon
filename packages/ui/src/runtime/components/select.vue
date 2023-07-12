<template>
  <Listbox
    as="div"
    :model-value="modelValue"
    @update:model-value="emit('update:modelValue', $event)"
    :multiple="multiple"
  >
    <ListboxLabel
      class="block text-sm font-medium leading-6 text-brand-gray-900"
      >{{ label }}</ListboxLabel
    >
    <div class="relative mt-2">
      <ListboxButton
        class="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-brand-gray-900 shadow-sm ring-1 ring-inset ring-brand-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-600 sm:text-sm sm:leading-6"
      >
        <Option :option="modelValue" v-if="!Array.isArray(modelValue)" />
        <Option :option="modelValue[0]" v-else-if="modelValue.length > 0"
          ><template v-if="modelValue.length > 1">
            <span class="text-brand-gray-500 text-ellipsis"
              >+{{ modelValue.length - 1 }} more</span
            >
          </template>
        </Option>
        <span class="block truncate text-brand-gray-500/50" v-else>
          {{ placeholder }}
        </span>
        <span
          class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
        >
          <IChevronDown
            class="h-5 w-5 text-brand-gray-400"
            aria-hidden="true"
          />
        </span>
      </ListboxButton>

      <transition
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions
          class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
        >
          <ListboxOption
            as="template"
            v-for="option in options"
            :key="option.id"
            :value="option"
            v-slot="{ active, selected }"
          >
            <li
              :class="[
                active ? 'bg-brand-600 text-white' : 'text-brand-gray-900',
                'relative cursor-default select-none py-2 pl-3 pr-9',
              ]"
            >
              <Option :active="active" :selected="selected" :option="option" />
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/vue'
import { IChevronDown } from './icon'
import Option, { OptionType } from './select/option.vue'

type Props = {
  options: OptionType[]
  modelValue: OptionType | OptionType[]
  multiple: boolean
  placeholder: string
  label: string
}

defineProps({
  options: {
    type: Array as PropType<Props['options']>,
    default: () => [],
  },
  modelValue: {
    type: [Object, Array] as PropType<Props['modelValue']>,
    default: () => [],
  },
  multiple: {
    type: Boolean as PropType<Props['multiple']>,
    default: false,
  },
  placeholder: {
    type: String as PropType<Props['placeholder']>,
    default: 'Select an option',
  },
  label: {
    type: String as PropType<Props['label']>,
    default: '',
  },
})

const emit = defineEmits<{
  'update:modelValue': [value: OptionType | OptionType[]]
}>()
</script>
