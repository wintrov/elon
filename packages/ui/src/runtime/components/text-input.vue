<template>
  <InsetLabelInput v-if="insetLabel" v-bind="$attrs"
    ><template v-for="(_, slot) of $slots" v-slot:[slot]="scope"
      ><slot :name="slot" v-bind="scope" /></template
  ></InsetLabelInput>
  <DefaultInput v-else v-bind="$attrs">
    <template v-for="(_, slot) of $slots" v-slot:[slot]="scope"
      ><slot :name="slot" v-bind="scope"
    /></template>
  </DefaultInput>
</template>

<script setup lang="ts">
import DefaultInput from './input/default-input'
import InsetLabelInput from './input/inset-label-input'

const { insetLabel } = defineProps({
  insetLabel: {
    type: Boolean,
    default: false,
  },
})

defineSlots()
</script>
