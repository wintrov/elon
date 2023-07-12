<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M21 3L17 3M21 3L21 7M21 3L17 7L15 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 21V17M3 21H7M3 21L9 15M3 3V7M3 3H7M3 3L9 9M21 21H17M21 21V17M21 21L15 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.12" x="3" y="3" width="18" height="18" fill="currentColor"/>
<path d="M3 21V17M3 21H7M3 21L9 15M21 3H17M21 3V7M21 3L15 9M3 3V7M3 3H7M3 3L9 9M21 21H17M21 21V17M21 21L15 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 21V17M3 21H7M3 21L9 15M21 3H17M21 3V7M21 3L15 9M3 3V7M3 3H7M3 3L9 9M21 21H17M21 21V17M21 21L15 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 21V17M3 21H7M3 21L9 15M21 3H17M21 3V7M21 3L15 9M3 3V7M3 3H7M3 3L9 9M21 21H17M21 21V17M21 21L15 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 21H3L9 15M17 3H21L15 9M21 6V7.5M3 18V16.5M3 7V3L9 9M21 17V21L15 15M18 21H16.5M6 3H7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 21V17M3 21H7M3 21L9 15M21 3H17M21 3V7M21 3L15 9M3 3V7M3 3H7M3 3L9 9M21 21H17M21 21V17M21 21L15 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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