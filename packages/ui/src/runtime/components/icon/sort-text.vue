<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M7 3V10M7 22L3 18M7 22L11 18M7 22V14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 14H21L16 22H21M16 10V7M16 7V4.5C16 3.11929 17.1193 2 18.5 2C19.8807 2 21 3.11929 21 4.5V7M16 7H21M21 7V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.12">
<path d="M16 14H21V22H16V14Z" fill="currentColor"/>
<path d="M16 10H21V4.5C21 3.11929 19.8807 2 18.5 2C17.1193 2 16 3.11929 16 4.5V10Z" fill="currentColor"/>
</g>
<path d="M7 22L3 18M7 22L11 18M7 22V14M7 3V10M16 14H21L16 22H21M16 10V7M16 7V4.5C16 3.11929 17.1193 2 18.5 2C19.8807 2 21 3.11929 21 4.5V7M16 7H21M21 7V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 22L3 18M7 22L11 18M7 22V14M7 3V10M16 14H21L16 22H21M16 10V7M16 7V4.5C16 3.11929 17.1193 2 18.5 2C19.8807 2 21 3.11929 21 4.5V7M16 7H21M21 7V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 22L3 18M7 22L11 18M7 22V14M7 3V10M16 14H21L16 22H21M16 10V7M16 7V4.5C16 3.11929 17.1193 2 18.5 2C19.8807 2 21 3.11929 21 4.5V7M16 7H21M21 7V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 18L7 22V14M7 3V10M4.5 19.5L3 18M16 14H21L16 22H21M16 10V7M16 7V4.5C16 3.11929 17.1193 2 18.5 2C19.8807 2 21 3.11929 21 4.5V7M16 7H21M21 7V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 22L3 18M7 22L11 18M7 22V14M7 3V10M16 14H21L16 22H21M16 10V7M16 7V4.5C16 3.11929 17.1193 2 18.5 2C19.8807 2 21 3.11929 21 4.5V7M16 7H21M21 7V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import { IconProps, IconVariants } from './types'

const props = defineProps({
	width: {
		type: Number as PropType<IconProps['width']>,
		default: 24,
	},
	height: {
		type: Number as PropType<IconProps['height']>,
		default: 24,
	},
	variant: {
		type: String as PropType<IconVariants>,
		default: 'duocolor',
	},
})
</script>