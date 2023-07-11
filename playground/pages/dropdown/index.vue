<template>
  <div class="w-full flex flex-col space-y-2 px-[40%] mt-10">
    <k-dropdown :items="items" title="Menu"></k-dropdown>
  </div>
</template>

<script setup lang="ts">
const items = [
  {
    label: 'Option 1',
    value: 'option-1',
    onClick: () => console.log('option 1 clicked'),
  },
  { label: 'Option 2', value: 'option-2' },
]
</script>
