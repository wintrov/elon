<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M20 2L11.5 10.5M22 6L18.5 9.5L13.5 8.5L19 3L22 6Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="8" cy="16" r="6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.12" d="M14 16C14 19.3137 11.3137 22 8 22C4.68629 22 2 19.3137 2 16C2 12.6863 4.68629 10 8 10C11.3137 10 14 12.6863 14 16Z" fill="currentColor"/>
<path d="M20 2L11.5 10.5M14 16C14 19.3137 11.3137 22 8 22C4.68629 22 2 19.3137 2 16C2 12.6863 4.68629 10 8 10C11.3137 10 14 12.6863 14 16ZM22 6L18.5 9.5L13.5 8.5L19 3L22 6Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" d="M1.25 16C1.25 19.7279 4.27208 22.75 8 22.75C10.6503 22.75 12.9438 21.2226 14.0484 19L5 9.95166C2.77742 11.0562 1.25 13.3497 1.25 16Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.5303 2.53033C20.8232 2.23744 20.8232 1.76256 20.5303 1.46967C20.2374 1.17678 19.7626 1.17678 19.4697 1.46967L18.4698 2.46954L18.4697 2.46967L12.9697 7.96967L10.9918 9.94755C10.0901 9.501 9.07438 9.25 8.00002 9.25C6.92238 9.25 5.90372 9.50253 5 9.95165C5 9.95165 5 13 8 16C11 19 14.0484 19 14.0484 19C14.4975 18.0963 14.75 17.0776 14.75 16C14.75 13.8968 13.7881 12.0183 12.2803 10.7804L13.7465 9.31415L18.3529 10.2354C18.5988 10.2846 18.853 10.2076 19.0303 10.0303L22.5303 6.53033C22.8232 6.23744 22.8232 5.76256 22.5303 5.46967L20.0607 3L20.5303 2.53033Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.5303 2.53033C20.8232 2.23744 20.8232 1.76256 20.5303 1.46967C20.2374 1.17678 19.7626 1.17678 19.4697 1.46967L18.4699 2.46941L18.4697 2.46967L12.9697 7.96967L10.9918 9.94756C10.0901 9.501 9.07436 9.25 8 9.25C4.27208 9.25 1.25 12.2721 1.25 16C1.25 19.7279 4.27208 22.75 8 22.75C11.7279 22.75 14.75 19.7279 14.75 16C14.75 13.8968 13.7881 12.0183 12.2803 10.7804L13.7465 9.31415L18.3529 10.2354C18.5988 10.2846 18.853 10.2076 19.0303 10.0303L22.5303 6.53033C22.8232 6.23744 22.8232 5.76256 22.5303 5.46967L20.0607 3L20.5303 2.53033Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 16C14 19.3137 11.3137 22 8 22C4.68629 22 2 19.3137 2 16C2 12.6863 4.68629 10 8 10C10.087 10 11.9251 11.0655 13 12.6822M20 2L11.5 10.5M19 3L22 6L18.5 9.5L17 9.2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 2L11.5 10.5M14 16C14 19.3137 11.3137 22 8 22C4.68629 22 2 19.3137 2 16C2 12.6863 4.68629 10 8 10C11.3137 10 14 12.6863 14 16ZM22 6L18.5 9.5L13.5 8.5L19 3L22 6Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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