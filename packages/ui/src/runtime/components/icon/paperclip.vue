<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M13 7L8.25 11.75C7.2835 12.7165 7.2835 14.2835 8.25 15.25V15.25C9.2165 16.2165 10.7835 16.2165 11.75 15.25L15 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 12L15.25 18.75C12.3505 21.6495 7.64949 21.6495 4.75 18.75V18.75C1.85051 15.8505 1.8505 11.1495 4.75 8.25L9.5 3.5C11.433 1.56701 14.567 1.567 16.5 3.5V3.5C18.433 5.433 18.433 8.567 16.5 10.5L15 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12L15.25 18.75C12.3505 21.6495 7.64949 21.6495 4.75 18.75V18.75C1.85051 15.8505 1.8505 11.1495 4.75 8.25L9.5 3.5C11.433 1.56701 14.567 1.567 16.5 3.5V3.5C18.433 5.433 18.433 8.567 16.5 10.5L11.75 15.25C10.7835 16.2165 9.2165 16.2165 8.25 15.25V15.25C7.2835 14.2835 7.2835 12.7165 8.25 11.75L13 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12L15.25 18.75C12.3505 21.6495 7.64949 21.6495 4.75 18.75V18.75C1.85051 15.8505 1.8505 11.1495 4.75 8.25L9.5 3.5C11.433 1.56701 14.567 1.567 16.5 3.5V3.5C18.433 5.433 18.433 8.567 16.5 10.5L11.75 15.25C10.7835 16.2165 9.2165 16.2165 8.25 15.25V15.25C7.2835 14.2835 7.2835 12.7165 8.25 11.75L13 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12L15.25 18.75C12.3505 21.6495 7.64949 21.6495 4.75 18.75V18.75C1.85051 15.8505 1.8505 11.1495 4.75 8.25L9.5 3.5C11.433 1.56701 14.567 1.567 16.5 3.5V3.5C18.433 5.433 18.433 8.567 16.5 10.5L11.75 15.25C10.7835 16.2165 9.2165 16.2165 8.25 15.25V15.25C7.2835 14.2835 7.2835 12.7165 8.25 11.75L13 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12L15.25 18.75C12.3505 21.6495 7.64949 21.6495 4.75 18.75V18.75C1.85051 15.8505 1.85051 11.1495 4.75 8.25L5 8L5.5 7.5M13 7L8.25 11.75C7.2835 12.7165 7.2835 14.2835 8.25 15.25V15.25C9.2165 16.2165 10.7835 16.2165 11.75 15.25L16.5 10.5C18.433 8.567 18.433 5.433 16.5 3.5V3.5C14.567 1.567 11.433 1.567 9.5 3.5L9 4L8.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12L15.25 18.75C12.3505 21.6495 7.64949 21.6495 4.75 18.75V18.75C1.85051 15.8505 1.8505 11.1495 4.75 8.25L9.5 3.5C11.433 1.56701 14.567 1.567 16.5 3.5V3.5C18.433 5.433 18.433 8.567 16.5 10.5L11.75 15.25C10.7835 16.2165 9.2165 16.2165 8.25 15.25V15.25C7.2835 14.2835 7.2835 12.7165 8.25 11.75L13 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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