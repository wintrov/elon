<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M21 3L15 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 21L3 16M8 21L13 16M8 21L8.00002 9.39999C8.00002 7.15978 8.00002 6.03968 8.436 5.18403C8.81949 4.43139 9.43141 3.81947 10.1841 3.43597C11.0397 3 12.1598 3 14.4 3H14.5H15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 21L3 16M8 21L13 16M8 21L8.00002 9.39999C8.00002 7.15978 8.00002 6.03968 8.436 5.18403C8.81949 4.43139 9.43141 3.81947 10.1841 3.43597C11.0397 3 12.1598 3 14.4 3L21 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 21L3 16M8 21L13 16M8 21L8.00002 9.39999C8.00002 7.15978 8.00002 6.03968 8.436 5.18403C8.81949 4.43139 9.43141 3.81947 10.1841 3.43597C11.0397 3 12.1598 3 14.4 3L21 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 21L3 16M8 21L13 16M8 21L8.00002 9.39999C8.00002 7.15978 8.00002 6.03968 8.436 5.18403C8.81949 4.43139 9.43141 3.81947 10.1841 3.43597C11.0397 3 12.1598 3 14.4 3L21 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 16L8 21L8.00002 9.39999C8.00002 7.15978 8.00002 6.03968 8.436 5.18403C8.81949 4.43139 9.43141 3.81947 10.1841 3.43597C11.0397 3 12.1598 3 14.4 3L21 3M13 16L10.5 18.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 21L3 16M8 21L13 16M8 21L8.00002 9.39999C8.00002 7.15978 8.00002 6.03968 8.436 5.18403C8.81949 4.43139 9.43141 3.81947 10.1841 3.43597C11.0397 3 12.1598 3 14.4 3L21 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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