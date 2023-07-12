<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M22 12V11.6C22 8.23969 22 6.55953 21.346 5.27606C20.7708 4.14708 19.8529 3.2292 18.7239 2.65396C17.4405 2 15.7603 2 12.4 2H12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 2H11.5V2C8.234 2 6.601 2 5.34627 2.61876C4.16167 3.20294 3.20294 4.16167 2.61876 5.34627C2 6.601 2 8.234 2 11.5V12.4C2 15.7603 2 17.4405 2.65396 18.7239C3.2292 19.8529 4.14708 20.7708 5.27606 21.346C6.55953 22 8.23969 22 11.6 22H12.5C15.766 22 17.399 22 18.6537 21.3812C19.8383 20.7971 20.7971 19.8383 21.3812 18.6537C22 17.399 22 15.766 22 12.5V12.5V12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.12" x="2" y="2" width="20" height="20" rx="6" fill="currentColor"/>
<rect x="2" y="2" width="20" height="20" rx="6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" d="M10.85 1.25C7.48969 1.25 5.80953 1.25 4.52606 1.90396C3.39708 2.4792 2.4792 3.39708 1.90396 4.52606C1.25 5.80953 1.25 7.48968 1.25 10.85V13.15C1.25 16.5103 1.25 18.1905 1.90396 19.4739C2.4792 20.6029 3.39708 21.5208 4.52606 22.096C5.80953 22.75 7.48968 22.75 10.85 22.75H13.15C16.5103 22.75 18.1905 22.75 19.4739 22.096C20.6029 21.5208 21.5208 20.6029 22.096 19.4739C22.75 18.1905 22.75 16.5103 22.75 13.15V10.85C22.75 7.48969 22.75 5.80953 22.096 4.52606C21.5208 3.39708 20.6029 2.4792 19.4739 1.90396C18.1905 1.25 16.5103 1.25 13.15 1.25H10.85Z" fill="currentColor"/>
<path d="M13.15 1.25H10.85C7.48969 1.25 5.80953 1.25 4.52606 1.90396C3.39708 2.4792 2.4792 3.39708 1.90396 4.52606C1.25 5.80953 1.25 7.48969 1.25 10.85V12H22.75V10.85C22.75 7.48969 22.75 5.80953 22.096 4.52606C21.5208 3.39708 20.6029 2.4792 19.4739 1.90396C18.1905 1.25 16.5103 1.25 13.15 1.25Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.85 1.25C7.48969 1.25 5.80953 1.25 4.52606 1.90396C3.39708 2.4792 2.4792 3.39708 1.90396 4.52606C1.25 5.80953 1.25 7.48968 1.25 10.85V13.15C1.25 16.5103 1.25 18.1905 1.90396 19.4739C2.4792 20.6029 3.39708 21.5208 4.52606 22.096C5.80953 22.75 7.48968 22.75 10.85 22.75H13.15C16.5103 22.75 18.1905 22.75 19.4739 22.096C20.6029 21.5208 21.5208 20.6029 22.096 19.4739C22.75 18.1905 22.75 16.5103 22.75 13.15V10.85C22.75 7.48969 22.75 5.80953 22.096 4.52606C21.5208 3.39708 20.6029 2.4792 19.4739 1.90396C18.1905 1.25 16.5103 1.25 13.15 1.25H10.85Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 9.5V9V9C22 8.07116 22 7.60674 21.9487 7.21684C21.5942 4.52444 19.4756 2.40579 16.7832 2.05133C16.3933 2 15.9288 2 15 2H11.6C8.23969 2 6.55953 2 5.27606 2.65396C4.14708 3.2292 3.2292 4.14708 2.65396 5.27606C2 6.55953 2 8.23969 2 11.6V12.4C2 15.7603 2 17.4405 2.65396 18.7239C3.2292 19.8529 4.14708 20.7708 5.27606 21.346C6.55953 22 8.23969 22 11.6 22H15C15.9288 22 16.3933 22 16.7832 21.9487C19.4756 21.5942 21.5942 19.4756 21.9487 16.7832C22 16.3933 22 15.9288 22 15V15V14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="2" y="2" width="20" height="20" rx="6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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