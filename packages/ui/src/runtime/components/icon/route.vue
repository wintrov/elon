<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle opacity="0.4" cx="18" cy="5" r="3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 19H16.5C18.433 19 20 17.433 20 15.5V15.5C20 13.567 18.433 12 16.5 12H6.5C4.567 12 3 10.433 3 8.5V8.5C3 6.567 4.567 5 6.5 5H12M8 19C8 20.6569 6.65685 22 5 22C3.34315 22 2 20.6569 2 19C2 17.3431 3.34315 16 5 16C6.65685 16 8 17.3431 8 19ZM12 5L9.5 2.5M12 5L9.5 7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.12">
<path d="M21 5C21 6.65685 19.6569 8 18 8C16.3431 8 15 6.65685 15 5C15 3.34315 16.3431 2 18 2C19.6569 2 21 3.34315 21 5Z" fill="currentColor"/>
<path d="M8 19C8 20.6569 6.65685 22 5 22C3.34315 22 2 20.6569 2 19C2 17.3431 3.34315 16 5 16C6.65685 16 8 17.3431 8 19Z" fill="currentColor"/>
</g>
<path d="M8 19H16.5C18.433 19 20 17.433 20 15.5V15.5C20 13.567 18.433 12 16.5 12H6.5C4.567 12 3 10.433 3 8.5V8.5C3 6.567 4.567 5 6.5 5H12M8 19C8 20.6569 6.65685 22 5 22C3.34315 22 2 20.6569 2 19C2 17.3431 3.34315 16 5 16C6.65685 16 8 17.3431 8 19ZM12 5L9.5 2.5M12 5L9.5 7.5M21 5C21 6.65685 19.6569 8 18 8C16.3431 8 15 6.65685 15 5C15 3.34315 16.3431 2 18 2C19.6569 2 21 3.34315 21 5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" fill-rule="evenodd" clip-rule="evenodd" d="M8.96967 1.96967C9.26256 1.67678 9.73744 1.67678 10.0303 1.96967L12.5303 4.46967C12.8232 4.76256 12.8232 5.23744 12.5303 5.53033L10.0303 8.03033C9.73744 8.32322 9.26256 8.32322 8.96967 8.03033C8.67678 7.73744 8.67678 7.26256 8.96967 6.96967L10.1893 5.75H6.5C4.98122 5.75 3.75 6.98122 3.75 8.5C3.75 10.0188 4.98122 11.25 6.5 11.25H16.5C18.8472 11.25 20.75 13.1528 20.75 15.5C20.75 17.8472 18.8472 19.75 16.5 19.75H8C7.58579 19.75 7.25 19.4142 7.25 19C7.25 18.5858 7.58579 18.25 8 18.25H16.5C18.0188 18.25 19.25 17.0188 19.25 15.5C19.25 13.9812 18.0188 12.75 16.5 12.75H6.5C4.15279 12.75 2.25 10.8472 2.25 8.5C2.25 6.15279 4.15279 4.25 6.5 4.25H10.1893L8.96967 3.03033C8.67678 2.73744 8.67678 2.26256 8.96967 1.96967Z" fill="currentColor"/>
<path d="M21 5C21 6.65685 19.6569 8 18 8C16.3431 8 15 6.65685 15 5C15 3.34315 16.3431 2 18 2C19.6569 2 21 3.34315 21 5Z" fill="currentColor"/>
<path d="M8 19C8 20.6569 6.65685 22 5 22C3.34315 22 2 20.6569 2 19C2 17.3431 3.34315 16 5 16C6.65685 16 8 17.3431 8 19Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.0303 1.96967C9.73744 1.67678 9.26256 1.67678 8.96967 1.96967C8.67678 2.26256 8.67678 2.73744 8.96967 3.03033L10.1893 4.25H6.5C4.15279 4.25 2.25 6.15279 2.25 8.5C2.25 10.8472 4.15279 12.75 6.5 12.75H16.5C18.0188 12.75 19.25 13.9812 19.25 15.5C19.25 17.0188 18.0188 18.25 16.5 18.25H8C7.96849 18.25 7.93744 18.2519 7.90695 18.2557C7.57591 16.9589 6.39994 16 5 16C3.34315 16 2 17.3431 2 19C2 20.6569 3.34315 22 5 22C6.39994 22 7.57591 21.0411 7.90695 19.7443C7.93744 19.7481 7.96849 19.75 8 19.75H16.5C18.8472 19.75 20.75 17.8472 20.75 15.5C20.75 13.1528 18.8472 11.25 16.5 11.25H6.5C4.98122 11.25 3.75 10.0188 3.75 8.5C3.75 6.98122 4.98122 5.75 6.5 5.75H10.1893L8.96967 6.96967C8.67678 7.26256 8.67678 7.73744 8.96967 8.03033C9.26256 8.32322 9.73744 8.32322 10.0303 8.03033L12.5303 5.53033C12.8232 5.23744 12.8232 4.76256 12.5303 4.46967L10.0303 1.96967ZM18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 19H16.5C18.433 19 20 17.433 20 15.5V15.5C20 13.567 18.433 12 16.5 12H6.5C4.567 12 3 10.433 3 8.5V8.5C3 6.567 4.567 5 6.5 5H12M8 19C8 20.6569 6.65685 22 5 22C3.34315 22 2 20.6569 2 19M8 19C8 17.3431 6.65685 16 5 16M12 5L9.5 2.5M12 5L9.5 7.5M21 5C21 6.65685 19.6569 8 18 8C16.3431 8 15 6.65685 15 5C15 3.34315 16.3431 2 18 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 19H16.5C18.433 19 20 17.433 20 15.5V15.5C20 13.567 18.433 12 16.5 12H6.5C4.567 12 3 10.433 3 8.5V8.5C3 6.567 4.567 5 6.5 5H12M8 19C8 20.6569 6.65685 22 5 22C3.34315 22 2 20.6569 2 19C2 17.3431 3.34315 16 5 16C6.65685 16 8 17.3431 8 19ZM12 5L9.5 2.5M12 5L9.5 7.5M21 5C21 6.65685 19.6569 8 18 8C16.3431 8 15 6.65685 15 5C15 3.34315 16.3431 2 18 2C19.6569 2 21 3.34315 21 5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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