<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M3 17V13M21 17V13M4.55556 21H19.4444C21.4081 21 23 19.4081 23 17.4444V17.4444C23 17.199 22.801 17 22.5556 17H1.44444C1.19898 17 1 17.199 1 17.4444V17.4444C1 19.4081 2.59188 21 4.55556 21Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 13V9.4C21 7.15979 21 6.03968 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C17.9603 3 16.8402 3 14.6 3H9.4C7.15979 3 6.03968 3 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3 6.03968 3 7.15979 3 9.4V13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.12" d="M3 9.4C3 7.15979 3 6.03968 3.43597 5.18404C3.81947 4.43139 4.43139 3.81947 5.18404 3.43597C6.03968 3 7.15979 3 9.4 3H14.6C16.8402 3 17.9603 3 18.816 3.43597C19.5686 3.81947 20.1805 4.43139 20.564 5.18404C21 6.03968 21 7.15979 21 9.4V17H3V9.4Z" fill="currentColor"/>
<path d="M21 17V9.4C21 7.15979 21 6.03968 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C17.9603 3 16.8402 3 14.6 3H9.4C7.15979 3 6.03968 3 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3 6.03968 3 7.15979 3 9.4V17M4.55556 21H19.4444C21.4081 21 23 19.4081 23 17.4444V17.4444C23 17.199 22.801 17 22.5556 17H1.44444C1.19898 17 1 17.199 1 17.4444V17.4444C1 19.4081 2.59188 21 4.55556 21Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" d="M10.25 2.25C7.44974 2.25 6.04961 2.25 4.98005 2.79497C4.03924 3.27433 3.27433 4.03924 2.79497 4.98005C2.25 6.04961 2.25 7.44974 2.25 10.25V13.1C2.25 13.9401 2.25 14.3601 2.41349 14.681C2.5573 14.9632 2.78677 15.1927 3.06901 15.3365C3.38988 15.5 3.80992 15.5 4.65 15.5H19.35C20.1901 15.5 20.6101 15.5 20.931 15.3365C21.2132 15.1927 21.4427 14.9632 21.5865 14.681C21.75 14.3601 21.75 13.9401 21.75 13.1V10.25C21.75 7.44974 21.75 6.04961 21.205 4.98005C20.7257 4.03924 19.9608 3.27433 19.02 2.79497C17.9504 2.25 16.5503 2.25 13.75 2.25H10.25Z" fill="currentColor"/>
<path d="M1.54545 17C0.829995 17 0.25 17.58 0.25 18.2955V18.2955C0.25 20.2033 1.79665 21.75 3.70455 21.75H20.2955C22.2033 21.75 23.75 20.2033 23.75 18.2955V18.2955C23.75 17.58 23.17 17 22.4545 17H1.54545Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.25 2.25C7.44974 2.25 6.04961 2.25 4.98005 2.79497C4.03924 3.27433 3.27433 4.03924 2.79497 4.98005C2.25 6.04961 2.25 7.44974 2.25 10.25V13.1C2.25 13.9401 2.25 14.3601 2.41349 14.681C2.5573 14.9632 2.78677 15.1927 3.06901 15.3365C3.38988 15.5 3.80992 15.5 4.65 15.5H19.35C20.1901 15.5 20.6101 15.5 20.931 15.3365C21.2132 15.1927 21.4427 14.9632 21.5865 14.681C21.75 14.3601 21.75 13.9401 21.75 13.1V10.25C21.75 7.44974 21.75 6.04961 21.205 4.98005C20.7257 4.03924 19.9608 3.27433 19.02 2.79497C17.9504 2.25 16.5503 2.25 13.75 2.25H10.25Z" fill="currentColor"/>
<path d="M1.54545 17C0.829995 17 0.25 17.58 0.25 18.2955V18.2955C0.25 20.2033 1.79665 21.75 3.70455 21.75H20.2955C22.2033 21.75 23.75 20.2033 23.75 18.2955V18.2955C23.75 17.58 23.17 17 22.4545 17H1.54545Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 17H1.44444C1.19898 17 1 17.199 1 17.4444V17.4444C1 19.4081 2.59188 21 4.55556 21H19.4444C21.4081 21 23 19.4081 23 17.4444V17.4444C23 17.199 22.801 17 22.5556 17H18.5M21 17V9.4C21 7.15979 21 6.03968 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C17.9603 3 16.8402 3 14.6 3H9.4C7.15979 3 6.03968 3 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3 6.03968 3 7.15979 3 9.4V17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 17V9.4C21 7.15979 21 6.03968 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C17.9603 3 16.8402 3 14.6 3H9.4C7.15979 3 6.03968 3 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3 6.03968 3 7.15979 3 9.4V17M4.55556 21H19.4444C21.4081 21 23 19.4081 23 17.4444V17.4444C23 17.199 22.801 17 22.5556 17H1.44444C1.19898 17 1 17.199 1 17.4444V17.4444C1 19.4081 2.59188 21 4.55556 21Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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