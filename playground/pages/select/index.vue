<template>
  <div class="w-full flex flex-col space-y-2 mt-10">
    <k-select
      :options="people"
      v-model="selectedSingle"
      label="Assign to one"
    />
    <k-select
      :options="people"
      v-model="selected"
      multiple
      label="Assign to many"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const selected = ref([])
const selectedSingle = ref([])

const people = [
  { id: 1, text: 'Wade Cooper', online: true },
  {
    id: 2,
    text: 'Arlene Mccoy',
    avatar:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  { id: 3, text: 'Devon Webb' },
  { id: 4, text: 'Tom Cook' },
  { id: 5, text: 'Tanya Fox' },
  { id: 6, text: 'Hellen Schmidt' },
  { id: 7, text: 'Caroline Schultz' },
  { id: 8, text: 'Mason Heaney' },
  { id: 9, text: 'Claudie Smitham' },
  { id: 10, text: 'Emil Schaefer' },
]

// const modelValue = [people[1], people[2]]
</script>
