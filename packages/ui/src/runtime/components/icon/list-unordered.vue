<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M3.5 4C3.5 4.27614 3.27614 4.5 3 4.5C2.72386 4.5 2.5 4.27614 2.5 4M3.5 4C3.5 3.72386 3.27614 3.5 3 3.5C2.72386 3.5 2.5 3.72386 2.5 4M3.5 4H2.5M3.5 12C3.5 12.2761 3.27614 12.5 3 12.5C2.72386 12.5 2.5 12.2761 2.5 12M3.5 12C3.5 11.7239 3.27614 11.5 3 11.5C2.72386 11.5 2.5 11.7239 2.5 12M3.5 12H2.5M3.5 20C3.5 20.2761 3.27614 20.5 3 20.5C2.72386 20.5 2.5 20.2761 2.5 20M3.5 20C3.5 19.7239 3.27614 19.5 3 19.5C2.72386 19.5 2.5 19.7239 2.5 20M3.5 20H2.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.00024 20.0002H22.0002M9.00024 12.0002L22.0002 12.0002M9.00024 4.00018H22.0002" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 20H22M9 12L22 12M9 4H22M3.5 4C3.5 4.27614 3.27614 4.5 3 4.5C2.72386 4.5 2.5 4.27614 2.5 4M3.5 4C3.5 3.72386 3.27614 3.5 3 3.5C2.72386 3.5 2.5 3.72386 2.5 4M3.5 4H2.5M3.5 12C3.5 12.2761 3.27614 12.5 3 12.5C2.72386 12.5 2.5 12.2761 2.5 12M3.5 12C3.5 11.7239 3.27614 11.5 3 11.5C2.72386 11.5 2.5 11.7239 2.5 12M3.5 12H2.5M3.5 20C3.5 20.2761 3.27614 20.5 3 20.5C2.72386 20.5 2.5 20.2761 2.5 20M3.5 20C3.5 19.7239 3.27614 19.5 3 19.5C2.72386 19.5 2.5 19.7239 2.5 20M3.5 20H2.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 20H22M9 12L22 12M9 4H22M3.5 4C3.5 4.27614 3.27614 4.5 3 4.5C2.72386 4.5 2.5 4.27614 2.5 4M3.5 4C3.5 3.72386 3.27614 3.5 3 3.5C2.72386 3.5 2.5 3.72386 2.5 4M3.5 4H2.5M3.5 12C3.5 12.2761 3.27614 12.5 3 12.5C2.72386 12.5 2.5 12.2761 2.5 12M3.5 12C3.5 11.7239 3.27614 11.5 3 11.5C2.72386 11.5 2.5 11.7239 2.5 12M3.5 12H2.5M3.5 20C3.5 20.2761 3.27614 20.5 3 20.5C2.72386 20.5 2.5 20.2761 2.5 20M3.5 20C3.5 19.7239 3.27614 19.5 3 19.5C2.72386 19.5 2.5 19.7239 2.5 20M3.5 20H2.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 20H22M9 12L22 12M9 4H22M3.5 4C3.5 4.27614 3.27614 4.5 3 4.5C2.72386 4.5 2.5 4.27614 2.5 4M3.5 4C3.5 3.72386 3.27614 3.5 3 3.5C2.72386 3.5 2.5 3.72386 2.5 4M3.5 4H2.5M3.5 12C3.5 12.2761 3.27614 12.5 3 12.5C2.72386 12.5 2.5 12.2761 2.5 12M3.5 12C3.5 11.7239 3.27614 11.5 3 11.5C2.72386 11.5 2.5 11.7239 2.5 12M3.5 12H2.5M3.5 20C3.5 20.2761 3.27614 20.5 3 20.5C2.72386 20.5 2.5 20.2761 2.5 20M3.5 20C3.5 19.7239 3.27614 19.5 3 19.5C2.72386 19.5 2.5 19.7239 2.5 20M3.5 20H2.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.00024 20.0002H15.0002M19.0002 20.0002H22.0002M16.0002 12H22.0002H9.00024H12.0002M9.00024 4.00018H15.0002M22.0002 4.00018H19.0002M3.50024 4.00018C3.50024 4.27633 3.27639 4.50018 3.00024 4.50018C2.7241 4.50018 2.50024 4.27633 2.50024 4.00018M3.50024 4.00018C3.50024 3.72404 3.27639 3.50018 3.00024 3.50018C2.7241 3.50018 2.50024 3.72404 2.50024 4.00018M3.50024 4.00018H2.50024M3.50024 12.0002C3.50024 12.2763 3.27639 12.5002 3.00024 12.5002C2.7241 12.5002 2.50024 12.2763 2.50024 12.0002M3.50024 12.0002C3.50024 11.724 3.27639 11.5002 3.00024 11.5002C2.7241 11.5002 2.50024 11.724 2.50024 12.0002M3.50024 12.0002H2.50024M3.50024 20.0002C3.50024 20.2763 3.27639 20.5002 3.00024 20.5002C2.7241 20.5002 2.50024 20.2763 2.50024 20.0002M3.50024 20.0002C3.50024 19.724 3.27639 19.5002 3.00024 19.5002C2.7241 19.5002 2.50024 19.724 2.50024 20.0002M3.50024 20.0002H2.50024" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.00024 20.0002H22.0002M9.00024 12.0002L22.0002 12.0002M9.00024 4.0002H22.0002M3.50024 4.0002C3.50024 4.27634 3.27639 4.5002 3.00024 4.5002C2.7241 4.5002 2.50024 4.27634 2.50024 4.0002M3.50024 4.0002C3.50024 3.72406 3.27639 3.5002 3.00024 3.5002C2.7241 3.5002 2.50024 3.72406 2.50024 4.0002M3.50024 4.0002H2.50024M3.50024 12.0002C3.50024 12.2763 3.27639 12.5002 3.00024 12.5002C2.7241 12.5002 2.50024 12.2763 2.50024 12.0002M3.50024 12.0002C3.50024 11.7241 3.27639 11.5002 3.00024 11.5002C2.7241 11.5002 2.50024 11.7241 2.50024 12.0002M3.50024 12.0002H2.50024M3.50024 20.0002C3.50024 20.2763 3.27639 20.5002 3.00024 20.5002C2.7241 20.5002 2.50024 20.2763 2.50024 20.0002M3.50024 20.0002C3.50024 19.7241 3.27639 19.5002 3.00024 19.5002C2.7241 19.5002 2.50024 19.7241 2.50024 20.0002M3.50024 20.0002H2.50024" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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