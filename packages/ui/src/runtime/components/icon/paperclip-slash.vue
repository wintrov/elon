<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M22 12L19 15M13 7L12 8M15.5 11.5L16.5 10.5C18.433 8.567 18.433 5.433 16.5 3.5V3.5C14.567 1.567 11.433 1.567 9.5 3.5L8.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L10 10M21 21L17 17M10 10L8.25 11.75C7.2835 12.7165 7.2835 14.2835 8.25 15.25V15.25C9.2165 16.2165 10.7835 16.2165 11.75 15.25L13.5 13.5M10 10L13.5 13.5M6.25 6.75L4.75 8.25C1.8505 11.1495 1.85051 15.8505 4.75 18.75V18.75C7.64949 21.6495 12.3505 21.6495 15.25 18.75L17 17M13.5 13.5L17 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12L19 15M13 7L12 8M3 3L10 10M21 21L17 17M10 10L8.25 11.75C7.2835 12.7165 7.2835 14.2835 8.25 15.25V15.25C9.2165 16.2165 10.7835 16.2165 11.75 15.25L13.5 13.5M10 10L13.5 13.5M6.25 6.75L4.75 8.25C1.8505 11.1495 1.85051 15.8505 4.75 18.75V18.75C7.64949 21.6495 12.3505 21.6495 15.25 18.75L17 17M13.5 13.5L17 17M15.5 11.5L16.5 10.5C18.433 8.567 18.433 5.433 16.5 3.5V3.5C14.567 1.567 11.433 1.567 9.5 3.5L8.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12L19 15M13 7L12 8M3 3L10 10M21 21L17 17M10 10L8.25 11.75C7.2835 12.7165 7.2835 14.2835 8.25 15.25V15.25C9.2165 16.2165 10.7835 16.2165 11.75 15.25L13.5 13.5M10 10L13.5 13.5M6.25 6.75L4.75 8.25C1.8505 11.1495 1.85051 15.8505 4.75 18.75V18.75C7.64949 21.6495 12.3505 21.6495 15.25 18.75L17 17M13.5 13.5L17 17M15.5 11.5L16.5 10.5C18.433 8.567 18.433 5.433 16.5 3.5V3.5C14.567 1.567 11.433 1.567 9.5 3.5L8.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12L19 15M13 7L12 8M3 3L10 10M21 21L17 17M10 10L8.25 11.75C7.2835 12.7165 7.2835 14.2835 8.25 15.25V15.25C9.2165 16.2165 10.7835 16.2165 11.75 15.25L13.5 13.5M10 10L13.5 13.5M6.25 6.75L4.75 8.25C1.8505 11.1495 1.85051 15.8505 4.75 18.75V18.75C7.64949 21.6495 12.3505 21.6495 15.25 18.75L17 17M13.5 13.5L17 17M15.5 11.5L16.5 10.5C18.433 8.567 18.433 5.433 16.5 3.5V3.5C14.567 1.567 11.433 1.567 9.5 3.5L8.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12L19 15M13 7L12 8M3 3L6.5 6.5L4.75 8.25C1.85051 11.1495 1.85051 15.8505 4.75 18.75V18.75C7.64949 21.6495 12.3505 21.6495 15.25 18.75L17 17M21 21L17 17M10 10L8.25 11.75C7.2835 12.7165 7.2835 14.2835 8.25 15.25V15.25C9.2165 16.2165 10.7835 16.2165 11.75 15.25L13.5 13.5M10 10L13.5 13.5M10 10L8.5 8.5M13.5 13.5L15.5 15.5L17 17M15.5 11.5L16.5 10.5C18.433 8.567 18.433 5.433 16.5 3.5V3.5C14.567 1.567 11.433 1.567 9.5 3.5L8.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12L19 15M13 7L12 8M3 3L10 10M21 21L17 17M10 10L8.25 11.75C7.2835 12.7165 7.2835 14.2835 8.25 15.25V15.25C9.2165 16.2165 10.7835 16.2165 11.75 15.25L13.5 13.5M10 10L13.5 13.5M6.25 6.75L4.75 8.25C1.8505 11.1495 1.85051 15.8505 4.75 18.75V18.75C7.64949 21.6495 12.3505 21.6495 15.25 18.75L17 17M13.5 13.5L17 17M15.5 11.5L16.5 10.5C18.433 8.567 18.433 5.433 16.5 3.5V3.5C14.567 1.567 11.433 1.567 9.5 3.5L8.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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