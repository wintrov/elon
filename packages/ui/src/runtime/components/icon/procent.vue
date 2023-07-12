<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M18 3L6 21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 6C9 7.65685 7.65685 9 6 9C4.34315 9 3 7.65685 3 6C3 4.34315 4.34315 3 6 3C7.65685 3 9 4.34315 9 6Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18C15 16.3431 16.3431 15 18 15C19.6569 15 21 16.3431 21 18Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.0001 3L6.00012 21M9 6C9 7.65685 7.65685 9 6 9C4.34315 9 3 7.65685 3 6C3 4.34315 4.34315 3 6 3C7.65685 3 9 4.34315 9 6ZM21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18C15 16.3431 16.3431 15 18 15C19.6569 15 21 16.3431 21 18Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.32">
<path d="M2.25 6C2.25 3.92893 3.92893 2.25 6 2.25C8.07107 2.25 9.75 3.92893 9.75 6C9.75 8.07107 8.07107 9.75 6 9.75C3.92893 9.75 2.25 8.07107 2.25 6Z" fill="currentColor"/>
<path d="M18 14.25C15.9289 14.25 14.25 15.9289 14.25 18C14.25 20.0711 15.9289 21.75 18 21.75C20.0711 21.75 21.75 20.0711 21.75 18C21.75 15.9289 20.0711 14.25 18 14.25Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.4161 2.37604C18.7608 2.60581 18.8539 3.07146 18.6241 3.4161L6.62412 21.4161C6.39435 21.7608 5.9287 21.8539 5.58405 21.6241C5.23941 21.3944 5.14628 20.9287 5.37604 20.5841L17.376 2.58405C17.6058 2.23941 18.0715 2.14628 18.4161 2.37604Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 2.24988C3.92893 2.24988 2.25 3.92881 2.25 5.99988C2.25 8.07095 3.92893 9.74988 6 9.74988C8.07107 9.74988 9.75 8.07095 9.75 5.99988C9.75 3.92881 8.07107 2.24988 6 2.24988ZM14.25 17.9999C14.25 15.9288 15.9289 14.2499 18 14.2499C20.0711 14.2499 21.75 15.9288 21.75 17.9999C21.75 20.0709 20.0711 21.7499 18 21.7499C15.9289 21.7499 14.25 20.0709 14.25 17.9999ZM18.6243 3.41606C18.854 3.07142 18.7609 2.60576 18.4163 2.376C18.0716 2.14624 17.606 2.23937 17.3762 2.58401L5.37621 20.584C5.14644 20.9287 5.23957 21.3943 5.58422 21.6241C5.92887 21.8538 6.39452 21.7607 6.62428 21.4161L18.6243 3.41606Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.0001 3L6.00012 21M3 6C3 7.65685 4.34315 9 6 9C7.65685 9 9 7.65685 9 6C9 4.34315 7.65685 3 6 3M21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18C15 16.3431 16.3431 15 18 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.0001 3L6.00012 21M9 6C9 7.65685 7.65685 9 6 9C4.34315 9 3 7.65685 3 6C3 4.34315 4.34315 3 6 3C7.65685 3 9 4.34315 9 6ZM21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18C15 16.3431 16.3431 15 18 15C19.6569 15 21 16.3431 21 18Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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