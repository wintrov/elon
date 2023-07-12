<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M7 15L11 11L13 13L17 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.12" x="2" y="2" width="20" height="20" rx="5" fill="currentColor"/>
<path d="M7 15L11 11L13 13L17 9M10 22H14C16.8003 22 18.2004 22 19.27 21.455C20.2108 20.9757 20.9757 20.2108 21.455 19.27C22 18.2004 22 16.8003 22 14V10C22 7.19974 22 5.79961 21.455 4.73005C20.9757 3.78924 20.2108 3.02433 19.27 2.54497C18.2004 2 16.8003 2 14 2H10C7.19974 2 5.79961 2 4.73005 2.54497C3.78924 3.02433 3.02433 3.78924 2.54497 4.73005C2 5.79961 2 7.19974 2 10V14C2 16.8003 2 18.2004 2.54497 19.27C3.02433 20.2108 3.78924 20.9757 4.73005 21.455C5.79961 22 7.19974 22 10 22Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" d="M9.25 1.25C6.44974 1.25 5.04961 1.25 3.98005 1.79497C3.03924 2.27433 2.27433 3.03924 1.79497 3.98005C1.25 5.04961 1.25 6.44974 1.25 9.25V14.75C1.25 17.5503 1.25 18.9504 1.79497 20.02C2.27433 20.9608 3.03924 21.7257 3.98005 22.205C5.04961 22.75 6.44974 22.75 9.25 22.75H14.75C17.5503 22.75 18.9504 22.75 20.02 22.205C20.9608 21.7257 21.7257 20.9608 22.205 20.02C22.75 18.9504 22.75 17.5503 22.75 14.75V9.25C22.75 6.44974 22.75 5.04961 22.205 3.98005C21.7257 3.03924 20.9608 2.27433 20.02 1.79497C18.9504 1.25 17.5503 1.25 14.75 1.25H9.25Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5303 8.46967C17.8232 8.76256 17.8232 9.23744 17.5303 9.53033L13.5303 13.5303C13.3897 13.671 13.1989 13.75 13 13.75C12.8011 13.75 12.6103 13.671 12.4697 13.5303L11 12.0607L7.53033 15.5303C7.23744 15.8232 6.76256 15.8232 6.46967 15.5303C6.17678 15.2374 6.17678 14.7626 6.46967 14.4697L10.4697 10.4697C10.7626 10.1768 11.2374 10.1768 11.5303 10.4697L13 11.9393L16.4697 8.46967C16.7626 8.17678 17.2374 8.17678 17.5303 8.46967Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.98005 1.79497C5.04961 1.25 6.44974 1.25 9.25 1.25H14.75C17.5503 1.25 18.9504 1.25 20.02 1.79497C20.9608 2.27433 21.7257 3.03924 22.205 3.98005C22.75 5.04961 22.75 6.44974 22.75 9.25V14.75C22.75 17.5503 22.75 18.9504 22.205 20.02C21.7257 20.9608 20.9608 21.7257 20.02 22.205C18.9504 22.75 17.5503 22.75 14.75 22.75H9.25C6.44974 22.75 5.04961 22.75 3.98005 22.205C3.03924 21.7257 2.27433 20.9608 1.79497 20.02C1.25 18.9504 1.25 17.5503 1.25 14.75V9.25C1.25 6.44974 1.25 5.04961 1.79497 3.98005C2.27433 3.03924 3.03924 2.27433 3.98005 1.79497ZM17.5303 9.53033C17.8232 9.23744 17.8232 8.76256 17.5303 8.46967C17.2374 8.17678 16.7626 8.17678 16.4697 8.46967L13 11.9393L11.5303 10.4697C11.2374 10.1768 10.7626 10.1768 10.4697 10.4697L6.46967 14.4697C6.17678 14.7626 6.17678 15.2374 6.46967 15.5303C6.76256 15.8232 7.23744 15.8232 7.53033 15.5303L11 12.0607L12.4697 13.5303C12.6103 13.671 12.8011 13.75 13 13.75C13.1989 13.75 13.3897 13.671 13.5303 13.5303L17.5303 9.53033Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 9.5V9V9C22 7.13872 22 6.20808 21.7553 5.45492C21.2607 3.93273 20.0673 2.73931 18.5451 2.24472C17.7919 2 16.8613 2 15 2H10C7.19974 2 5.79961 2 4.73005 2.54497C3.78924 3.02433 3.02433 3.78924 2.54497 4.73005C2 5.79961 2 7.19974 2 10V14C2 16.8003 2 18.2004 2.54497 19.27C3.02433 20.2108 3.78924 20.9757 4.73005 21.455C5.79961 22 7.19974 22 10 22H15C16.8613 22 17.7919 22 18.5451 21.7553C20.0673 21.2607 21.2607 20.0673 21.7553 18.5451C22 17.7919 22 16.8613 22 15V15V14.5M7 15L11 11L13 13L17 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 15L11 11L13 13L17 9M10 22H14C16.8003 22 18.2004 22 19.27 21.455C20.2108 20.9757 20.9757 20.2108 21.455 19.27C22 18.2004 22 16.8003 22 14V10C22 7.19974 22 5.79961 21.455 4.73005C20.9757 3.78924 20.2108 3.02433 19.27 2.54497C18.2004 2 16.8003 2 14 2H10C7.19974 2 5.79961 2 4.73005 2.54497C3.78924 3.02433 3.02433 3.78924 2.54497 4.73005C2 5.79961 2 7.19974 2 10V14C2 16.8003 2 18.2004 2.54497 19.27C3.02433 20.2108 3.78924 20.9757 4.73005 21.455C5.79961 22 7.19974 22 10 22Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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