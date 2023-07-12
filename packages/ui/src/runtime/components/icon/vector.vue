<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M6 15C6 10 10 6 15 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 5.5C22 7.433 20.433 9 18.5 9C16.567 9 15 7.433 15 5.5C15 3.567 16.567 2 18.5 2C20.433 2 22 3.567 22 5.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 18.5C9 20.433 7.433 22 5.5 22C3.567 22 2 20.433 2 18.5C2 16.567 3.567 15 5.5 15C7.433 15 9 16.567 9 18.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.12">
<path d="M22 5.5C22 7.433 20.433 9 18.5 9C16.567 9 15 7.433 15 5.5C15 3.567 16.567 2 18.5 2C20.433 2 22 3.567 22 5.5Z" fill="currentColor"/>
<path d="M9 18.5C9 20.433 7.433 22 5.5 22C3.567 22 2 20.433 2 18.5C2 16.567 3.567 15 5.5 15C7.433 15 9 16.567 9 18.5Z" fill="currentColor"/>
</g>
<path d="M6 15C6 10 10 6 15 6M22 5.5C22 7.433 20.433 9 18.5 9C16.567 9 15 7.433 15 5.5C15 3.567 16.567 2 18.5 2C20.433 2 22 3.567 22 5.5ZM9 18.5C9 20.433 7.433 22 5.5 22C3.567 22 2 20.433 2 18.5C2 16.567 3.567 15 5.5 15C7.433 15 9 16.567 9 18.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" fill-rule="evenodd" clip-rule="evenodd" d="M15 6.75C10.4142 6.75 6.75 10.4142 6.75 15C6.75 15.4142 6.41421 15.75 6 15.75C5.58579 15.75 5.25 15.4142 5.25 15C5.25 9.58579 9.58579 5.25 15 5.25C15.4142 5.25 15.75 5.58579 15.75 6C15.75 6.41421 15.4142 6.75 15 6.75Z" fill="currentColor"/>
<path d="M14.25 5.5C14.25 3.15279 16.1528 1.25 18.5 1.25C20.8472 1.25 22.75 3.15279 22.75 5.5C22.75 7.84721 20.8472 9.75 18.5 9.75C16.1528 9.75 14.25 7.84721 14.25 5.5Z" fill="currentColor"/>
<path d="M5.5 14.25C3.15279 14.25 1.25 16.1528 1.25 18.5C1.25 20.8472 3.15279 22.75 5.5 22.75C7.84721 22.75 9.75 20.8472 9.75 18.5C9.75 16.1528 7.84721 14.25 5.5 14.25Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.4424 6.76818C10.305 7.03905 7.03905 10.305 6.76818 14.4424C8.49597 14.9819 9.75 16.5945 9.75 18.5C9.75 20.8472 7.84721 22.75 5.5 22.75C3.15279 22.75 1.25 20.8472 1.25 18.5C1.25 16.2274 3.03373 14.3714 5.27753 14.2557C5.63529 9.43941 9.43941 5.63529 14.2557 5.27753C14.3714 3.03373 16.2274 1.25 18.5 1.25C20.8472 1.25 22.75 3.15279 22.75 5.5C22.75 7.84721 20.8472 9.75 18.5 9.75C16.5945 9.75 14.9819 8.49597 14.4424 6.76818Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.5 2C16.567 2 15 3.567 15 5.5C15 7.433 16.567 9 18.5 9C20.433 9 22 7.433 22 5.5C22 4.9632 21.8792 4.45463 21.6632 4M6 15C6 13.1444 6.55147 11.4268 7.5 10C7.73387 9.64821 7.99189 9.31411 8.27177 9M12.0146 6.5C12.9473 6.17589 13.9516 6 15 6M9 18.5C9 20.433 7.433 22 5.5 22C3.567 22 2 20.433 2 18.5C2 16.567 3.567 15 5.5 15C7.433 15 9 16.567 9 18.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 15C6 10 10 6 15 6M22 5.5C22 7.433 20.433 9 18.5 9C16.567 9 15 7.433 15 5.5C15 3.567 16.567 2 18.5 2C20.433 2 22 3.567 22 5.5ZM9 18.5C9 20.433 7.433 22 5.5 22C3.567 22 2 20.433 2 18.5C2 16.567 3.567 15 5.5 15C7.433 15 9 16.567 9 18.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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