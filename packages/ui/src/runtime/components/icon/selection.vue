<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M10 2H12H14M2 10V12V14M10 22H12H14M22 14V12V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 2H18.3889V2C20.3832 2 22 3.61675 22 5.61111V5.61111V6M2 6V5.61111V5.61111C2 3.61675 3.61675 2 5.61111 2V2H6M2 18V18.3889V18.3889C2 20.3832 3.61675 22 5.61111 22V22H6M18 22H18.3889V22C20.3833 22 22 20.3833 22 18.3889V18.3889V18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.12" x="2" y="2" width="20" height="20" rx="4" fill="currentColor"/>
<path d="M10 2H12H14M18 2H18.3889V2C20.3832 2 22 3.61675 22 5.61111V5.61111V6M2 6V5.61111V5.61111C2 3.61675 3.61675 2 5.61111 2V2H6M2 10V12V14M2 18V18.3889V18.3889C2 20.3832 3.61675 22 5.61111 22V22H6M10 22H12H14M18 22H18.3889V22C20.3833 22 22 20.3833 22 18.3889V18.3889V18M22 14V12V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 2H12H14M18 2H18.3889V2C20.3832 2 22 3.61675 22 5.61111V5.61111V6M2 6V5.61111V5.61111C2 3.61675 3.61675 2 5.61111 2V2H6M2 10V12V14M2 18V18.3889V18.3889C2 20.3832 3.61675 22 5.61111 22V22H6M10 22H12H14M18 22H18.3889V22C20.3833 22 22 20.3833 22 18.3889V18.3889V18M22 14V12V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 2H12H14M18 2H18.3889V2C20.3832 2 22 3.61675 22 5.61111V5.61111V6M2 6V5.61111V5.61111C2 3.61675 3.61675 2 5.61111 2V2H6M2 10V12V14M2 18V18.3889V18.3889C2 20.3832 3.61675 22 5.61111 22V22H6M10 22H12H14M18 22H18.3889V22C20.3833 22 22 20.3833 22 18.3889V18.3889V18M22 14V12V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 2H12H14M18 2H18.3889V2C20.3832 2 22 3.61675 22 5.61111V5.61111V6M2 6V5.61111V5.61111C2 3.61675 3.61675 2 5.61111 2V2H6M1 10L2 14M2 18V18.3889V18.3889C2 20.3832 3.61675 22 5.61111 22V22H6M10 22H12H14M18 22H18.3889V22C20.3833 22 22 20.3833 22 18.3889V18.3889V18M22 14L23 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 2H12H14M18 2H18.3889V2C20.3832 2 22 3.61675 22 5.61111V5.61111V6M2 6V5.61111V5.61111C2 3.61675 3.61675 2 5.61111 2V2H6M2 10V12V14M2 18V18.3889V18.3889C2 20.3832 3.61675 22 5.61111 22V22H6M10 22H12H14M18 22H18.3889V22C20.3833 22 22 20.3833 22 18.3889V18.3889V18M22 14V12V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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