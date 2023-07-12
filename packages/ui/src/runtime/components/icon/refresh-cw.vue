<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M22 12C22 14.2512 21.2561 16.3287 20.0007 18M2 12C2 9.74879 2.73846 7.67132 3.98961 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 7.5V4M22 7.5C22 7.5 18.6667 2 12 2C8.70899 2 5.80788 3.57111 3.98961 6M22 7.5H18.5M3 16.5C3 16.5 6.47715 22 12 22C15.2716 22 18.1763 20.4289 20.0007 18M3 16.5H6.5M3 16.5V20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle opacity="0.12" cx="12" cy="12" r="10" fill="currentColor"/>
<path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 3 16.5 3 16.5M2 12C2 6.47715 6.44444 2 12 2C18.6667 2 22 7.5 22 7.5M22 7.5V4M22 7.5H18.5M3 16.5H6.5M3 16.5V20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 3 16.5 3 16.5M2 12C2 6.47715 6.44444 2 12 2C18.6667 2 22 7.5 22 7.5M22 7.5V4M22 7.5H18.5M3 16.5H6.5M3 16.5V20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 3 16.5 3 16.5M2 12C2 6.47715 6.44444 2 12 2C18.6667 2 22 7.5 22 7.5M22 7.5V4M22 7.5H18.5M3 16.5H6.5M3 16.5V20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 7.5V4M22 7.5C22 7.5 18.6667 2 12 2C10.1738 2 8.46768 2.48377 7 3.32943M22 7.5H18.5M3 16.5C3 16.5 6.47715 22 12 22C13.8214 22 15.5291 21.513 17 20.6622M3 16.5H6.5M3 16.5V20M20 18.001C21.2558 16.3295 22 14.2516 22 12M3.98961 6C2.73845 7.67132 2 9.74879 2 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 3 16.5 3 16.5M2 12C2 6.47715 6.44444 2 12 2C18.6667 2 22 7.5 22 7.5M22 7.5V4M22 7.5H18.5M3 16.5H6.5M3 16.5V20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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