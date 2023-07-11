<template>
  <a href="/"> back</a>
  <div class="w-full flex flex-col space-y-2 px-[40%] mt-10">
    <k-select :options="options" />
  </div>
</template>

<script setup lang="ts">
const options = [
  {
    label: 'Option 1',
    value: 'option-1',
  },
  {
    label: 'Option 2',
    value: 'option-2',
  },
  {
    label: 'Option 3',
    value: 'option-3',
  },
]
</script>
