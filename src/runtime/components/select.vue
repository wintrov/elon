<!-- <template>
  <Listbox as="div" :modelValue="selected">
    <ListboxLabel class="block text-sm font-medium leading-6 text-gray-900"
      >Assigned to</ListboxLabel
    >
    <div class="relative mt-2">
      <ListboxButton
        class="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
      >
        <span class="block truncate">{{ selected.name }}</span>
        <span
          class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
        >
          <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
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
            v-for="person in people"
            :key="person.id"
            :value="person"
            v-slot="{ active, selected }"
          >
            <li
              :class="[
                active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                'relative cursor-default select-none py-2 pl-3 pr-9',
              ]"
            >
              <span
                :class="[
                  selected ? 'font-semibold' : 'font-normal',
                  'block truncate',
                ]"
                >{{ person.name }}</span
              >

              <span
                v-if="selected"
                :class="[
                  active ? 'text-white' : 'text-indigo-600',
                  'absolute inset-y-0 right-0 flex items-center pr-4',
                ]"
              >
                <CheckIcon class="h-5 w-5" aria-hidden="true" />
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'

const people = [
  { id: 1, name: 'Wade Cooper' },
  { id: 2, name: 'Arlene Mccoy' },
  { id: 3, name: 'Devon Webb' },
  { id: 4, name: 'Tom Cook' },
  { id: 5, name: 'Tanya Fox' },
  { id: 6, name: 'Hellen Schmidt' },
  { id: 7, name: 'Caroline Schultz' },
  { id: 8, name: 'Mason Heaney' },
  { id: 9, name: 'Claudie Smitham' },
  { id: 10, name: 'Emil Schaefer' },
]

const selected = ref(people[3])
const multipleRef = ref([people[3], people[4]])
onMounted(() => {
  watch(selected, (value, prev) => {
    console.log('prev', prev)
    console.log(value)
  })
})
</script> -->

<template>
  <div class="w-full relative">
    <label v-if="label" class="font-medium align-top">
      {{ label }}

      <span v-if="required" class="text-brand-danger-500 text-xs">*</span>
    </label>

    <button
      type="button"
      class="rounded bg-brand-gray-100/50 border-0 outline-none ring-1 ring-brand-gray-500/50 focus:ring-brand-500/70 focus:outline-none focus:bg-brand-500/10 transition-all ease-in-out py-1 px-2 w-full hover:ring-brand-500/80 hover:bg-brand-500/20 placeholder:text-brand-gray-500"
      :disabled="disabled"
      :class="{
        'cursor-not-allowed bg-brand-gray-500/50': disabled,
      }"
    >
      {{
        Array.isArray(modelValue)
          ? modelValue.map((option) => option.name).join(', ')
          : modelValue.name
      }}
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
}

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
