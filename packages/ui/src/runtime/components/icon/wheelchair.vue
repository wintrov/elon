<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M9 10C5.68629 10 3 12.6863 3 16C3 19.3137 5.68629 22 9 22C10.777 22 12.3736 21.2275 13.4722 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 22H20V22C18.8954 22 18 21.1046 18 20V19C18 18.0681 18 17.6022 17.8478 17.2346C17.6448 16.7446 17.2554 16.3552 16.7654 16.1522C16.3978 16 15.9319 16 15 16V16C14.0681 16 13.6022 16 13.2346 15.8478C12.7446 15.6448 12.3552 15.2554 12.1522 14.7654C12 14.3978 12 13.9319 12 13V12V9C12 10.6569 13.3431 12 15 12H16M14 4C14 5.10457 13.1046 6 12 6C10.8954 6 10 5.10457 10 4C10 2.89543 10.8954 2 12 2C13.1046 2 14 2.89543 14 4Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.12">
<path d="M14 4C14 5.10457 13.1046 6 12 6C10.8954 6 10 5.10457 10 4C10 2.89543 10.8954 2 12 2C13.1046 2 14 2.89543 14 4Z" fill="currentColor"/>
<path d="M9 22C5.68629 22 3 19.3137 3 16C3 12.6863 5.68629 10 9 10C9 15 8 18.5 13.4722 20C12.3736 21.2275 10.777 22 9 22Z" fill="currentColor"/>
</g>
<path d="M21 22H20V22C18.8954 22 18 21.1046 18 20V19C18 18.0681 18 17.6022 17.8478 17.2346C17.6448 16.7446 17.2554 16.3552 16.7654 16.1522C16.3978 16 15.9319 16 15 16V16C14.0681 16 13.6022 16 13.2346 15.8478C12.7446 15.6448 12.3552 15.2554 12.1522 14.7654C12 14.3978 12 13.9319 12 13V12V9C12 10.6569 13.3431 12 15 12H16M9 10C5.68629 10 3 12.6863 3 16C3 19.3137 5.68629 22 9 22C10.777 22 12.3736 21.2275 13.4722 20M14 4C14 5.10457 13.1046 6 12 6C10.8954 6 10 5.10457 10 4C10 2.89543 10.8954 2 12 2C13.1046 2 14 2.89543 14 4Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 22H20V22C18.8954 22 18 21.1046 18 20V19C18 18.0681 18 17.6022 17.8478 17.2346C17.6448 16.7446 17.2554 16.3552 16.7654 16.1522C16.3978 16 15.9319 16 15 16V16C14.0681 16 13.6022 16 13.2346 15.8478C12.7446 15.6448 12.3552 15.2554 12.1522 14.7654C12 14.3978 12 13.9319 12 13V12V9C12 10.6569 13.3431 12 15 12H16M9 10C5.68629 10 3 12.6863 3 16C3 19.3137 5.68629 22 9 22C10.777 22 12.3736 21.2275 13.4722 20M14 4C14 5.10457 13.1046 6 12 6C10.8954 6 10 5.10457 10 4C10 2.89543 10.8954 2 12 2C13.1046 2 14 2.89543 14 4Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 22H20V22C18.8954 22 18 21.1046 18 20V19C18 18.0681 18 17.6022 17.8478 17.2346C17.6448 16.7446 17.2554 16.3552 16.7654 16.1522C16.3978 16 15.9319 16 15 16V16C14.0681 16 13.6022 16 13.2346 15.8478C12.7446 15.6448 12.3552 15.2554 12.1522 14.7654C12 14.3978 12 13.9319 12 13V12V9C12 10.6569 13.3431 12 15 12H16M9 10C5.68629 10 3 12.6863 3 16C3 19.3137 5.68629 22 9 22C10.777 22 12.3736 21.2275 13.4722 20M14 4C14 5.10457 13.1046 6 12 6C10.8954 6 10 5.10457 10 4C10 2.89543 10.8954 2 12 2C13.1046 2 14 2.89543 14 4Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 22H20V22C18.8954 22 18 21.1046 18 20V19C18 18.0681 18 17.6022 17.8478 17.2346C17.6448 16.7446 17.2554 16.3552 16.7654 16.1522C16.3978 16 15.9319 16 15 16V16C14.0681 16 13.6022 16 13.2346 15.8478C12.7446 15.6448 12.3552 15.2554 12.1522 14.7654C12 14.3978 12 13.9319 12 13V12V9C12 10.6569 13.3431 12 15 12H16M13.4722 20C12.3736 21.2275 10.777 22 9 22C5.68629 22 3 19.3137 3 16C3 15.1078 3.19474 14.2611 3.54404 13.5M5.6822 11C6.63251 10.3682 7.77326 10 9 10M14 4C14 5.10457 13.1046 6 12 6C10.8954 6 10 5.10457 10 4C10 2.89543 10.8954 2 12 2C13.1046 2 14 2.89543 14 4Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 22H20V22C18.8954 22 18 21.1046 18 20V19C18 18.0681 18 17.6022 17.8478 17.2346C17.6448 16.7446 17.2554 16.3552 16.7654 16.1522C16.3978 16 15.9319 16 15 16V16C14.0681 16 13.6022 16 13.2346 15.8478C12.7446 15.6448 12.3552 15.2554 12.1522 14.7654C12 14.3978 12 13.9319 12 13V12V9C12 10.6569 13.3431 12 15 12H16M9 10C5.68629 10 3 12.6863 3 16C3 19.3137 5.68629 22 9 22C10.777 22 12.3736 21.2275 13.4722 20M14 4C14 5.10457 13.1046 6 12 6C10.8954 6 10 5.10457 10 4C10 2.89543 10.8954 2 12 2C13.1046 2 14 2.89543 14 4Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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