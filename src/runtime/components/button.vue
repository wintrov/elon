<template>
  <button v-bind="$attrs" :class="buttonClasses">
    <slot name="prefixIcon" v-if="$slots.prefixIcon"></slot>
    <slot></slot>
    <slot name="suffixIcon" v-if="$slots.suffixIcon"></slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";

export type Props = {
  variant?: "primary" | "secondary" | "info" | "warning" | "danger";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  soft?: boolean;
  pill?: boolean;
};

const props = defineProps({
  variant: {
    type: String,
    default: "primary" as Props["variant"],
  },
  size: {
    type: String,
    default: "md" as Props["size"],
  },
  soft: {
    type: Boolean,
    default: false as Props["soft"],
  },
  pill: {
    type: Boolean,
    default: false as Props["pill"],
  },
});

// generate the button classes based on the props
const buttonClasses = computed(() => {
  return {
    "bg-brand-600 font-semibold text-white shadow-sm hover:bg-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600":
      true,
    "rounded px-2 py-1": props.size === "xs",
  };
});
</script>
