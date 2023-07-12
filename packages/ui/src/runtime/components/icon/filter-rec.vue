<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M7 8H17M9 12H15M11 16H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
<rect x="2" y="2" width="20" height="20" rx="6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.12" x="2" y="2" width="20" height="20" rx="6" fill="currentColor"/>
<path d="M7 8H17M9 12H15M11 16H13M11.6 22H12.4C15.7603 22 17.4405 22 18.7239 21.346C19.8529 20.7708 20.7708 19.8529 21.346 18.7239C22 17.4405 22 15.7603 22 12.4V11.6C22 8.23969 22 6.55953 21.346 5.27606C20.7708 4.14708 19.8529 3.2292 18.7239 2.65396C17.4405 2 15.7603 2 12.4 2H11.6C8.23969 2 6.55953 2 5.27606 2.65396C4.14708 3.2292 3.2292 4.14708 2.65396 5.27606C2 6.55953 2 8.23969 2 11.6V12.4C2 15.7603 2 17.4405 2.65396 18.7239C3.2292 19.8529 4.14708 20.7708 5.27606 21.346C6.55953 22 8.23969 22 11.6 22Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" d="M10.85 1.25C7.48969 1.25 5.80953 1.25 4.52606 1.90396C3.39709 2.4792 2.4792 3.39708 1.90396 4.52606C1.25 5.80953 1.25 7.48968 1.25 10.85L1.25 13.15C1.25 16.5103 1.25 18.1905 1.90396 19.4739C2.4792 20.6029 3.39708 21.5208 4.52606 22.096C5.80953 22.75 7.48969 22.75 10.85 22.75H13.15C16.5103 22.75 18.1905 22.75 19.4739 22.096C20.6029 21.5208 21.5208 20.6029 22.096 19.4739C22.75 18.1905 22.75 16.5103 22.75 13.15V10.85C22.75 7.48969 22.75 5.80953 22.096 4.52606C21.5208 3.39709 20.6029 2.4792 19.4739 1.90396C18.1905 1.25 16.5103 1.25 13.15 1.25L10.85 1.25Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.25 8C6.25 7.58579 6.58579 7.25 7 7.25H17C17.4142 7.25 17.75 7.58579 17.75 8C17.75 8.41421 17.4142 8.75 17 8.75H7C6.58579 8.75 6.25 8.41421 6.25 8ZM8.25 12C8.25 11.5858 8.58579 11.25 9 11.25H15C15.4142 11.25 15.75 11.5858 15.75 12C15.75 12.4142 15.4142 12.75 15 12.75H9C8.58579 12.75 8.25 12.4142 8.25 12ZM10.25 16C10.25 15.5858 10.5858 15.25 11 15.25H13C13.4142 15.25 13.75 15.5858 13.75 16C13.75 16.4142 13.4142 16.75 13 16.75H11C10.5858 16.75 10.25 16.4142 10.25 16Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.52606 1.90396C5.80953 1.25 7.48969 1.25 10.85 1.25H13.15C16.5103 1.25 18.1905 1.25 19.4739 1.90396C20.6029 2.4792 21.5208 3.39709 22.096 4.52606C22.75 5.80953 22.75 7.48969 22.75 10.85V13.15C22.75 16.5103 22.75 18.1905 22.096 19.4739C21.5208 20.6029 20.6029 21.5208 19.4739 22.096C18.1905 22.75 16.5103 22.75 13.15 22.75H10.85C7.48969 22.75 5.80953 22.75 4.52606 22.096C3.39708 21.5208 2.4792 20.6029 1.90396 19.4739C1.25 18.1905 1.25 16.5103 1.25 13.15V10.85C1.25 7.48969 1.25 5.80953 1.90396 4.52606C2.4792 3.39708 3.39709 2.4792 4.52606 1.90396ZM7 7.25C6.58578 7.25 6.25 7.58579 6.25 8C6.25 8.41422 6.58578 8.75 7 8.75H17C17.4142 8.75 17.75 8.41422 17.75 8C17.75 7.58579 17.4142 7.25 17 7.25H7ZM9 11.25C8.58578 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58578 12.75 9 12.75H15C15.4142 12.75 15.75 12.4142 15.75 12C15.75 11.5858 15.4142 11.25 15 11.25H9ZM11 15.25C10.5858 15.25 10.25 15.5858 10.25 16C10.25 16.4142 10.5858 16.75 11 16.75H13C13.4142 16.75 13.75 16.4142 13.75 16C13.75 15.5858 13.4142 15.25 13 15.25H11Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.5 2L9 2V2C8.07116 2 7.60674 2 7.21684 2.05133C4.52444 2.40579 2.40579 4.52444 2.05133 7.21684C2 7.60674 2 8.07116 2 9L2 12.4C2 15.7603 2 17.4405 2.65396 18.7239C3.2292 19.8529 4.14709 20.7708 5.27606 21.346C6.55953 22 8.23969 22 11.6 22H12.4C15.7603 22 17.4405 22 18.7239 21.346C19.8529 20.7708 20.7708 19.8529 21.346 18.7239C22 17.4405 22 15.7603 22 12.4V9C22 8.07116 22 7.60674 21.9487 7.21684C21.5942 4.52444 19.4756 2.40579 16.7832 2.05133C16.3933 2 15.9288 2 15 2V2L14.5 2M7 8H17M9 12H15M11 16H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 8H17M9 12H15M11 16H13M11.6 22H12.4C15.7603 22 17.4405 22 18.7239 21.346C19.8529 20.7708 20.7708 19.8529 21.346 18.7239C22 17.4405 22 15.7603 22 12.4V11.6C22 8.23969 22 6.55953 21.346 5.27606C20.7708 4.14708 19.8529 3.2292 18.7239 2.65396C17.4405 2 15.7603 2 12.4 2H11.6C8.23969 2 6.55953 2 5.27606 2.65396C4.14708 3.2292 3.2292 4.14708 2.65396 5.27606C2 6.55953 2 8.23969 2 11.6V12.4C2 15.7603 2 17.4405 2.65396 18.7239C3.2292 19.8529 4.14708 20.7708 5.27606 21.346C6.55953 22 8.23969 22 11.6 22Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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