<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M17 5L22 10L17 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 10L13 5M18 10L13 15M18 10H6.8C5.11984 10 4.27976 10 3.63803 10.327C3.07354 10.6146 2.6146 11.0735 2.32698 11.638C2 12.2798 2 13.1198 2 14.8V16.5V17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 5L22 10L17 15M18 10L13 5M18 10L13 15M18 10H5.2C4.07989 10 3.51984 10 3.09202 10.218C2.71569 10.4097 2.40973 10.7157 2.21799 11.092C2 11.5198 2 12.0799 2 13.2V16.5V17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 5L22 10L17 15M18 10L13 5M18 10L13 15M18 10H5.2C4.07989 10 3.51984 10 3.09202 10.218C2.71569 10.4097 2.40973 10.7157 2.21799 11.092C2 11.5198 2 12.0799 2 13.2V16.5V17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 5L22 10L17 15M18 10L13 5M18 10L13 15M18 10H5.2C4.07989 10 3.51984 10 3.09202 10.218C2.71569 10.4097 2.40973 10.7157 2.21799 11.092C2 11.5198 2 12.0799 2 13.2V16.5V17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 5L18 10H6.8C5.11984 10 4.27976 10 3.63803 10.327C3.07354 10.6146 2.6146 11.0735 2.32698 11.638C2 12.2798 2 13.1198 2 14.8V16.5V17M13 15L15.5 12.5M17 5L22 10L17 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 5L22 10L17 15M18 10L13 5M18 10L13 15M18 10H5.2C4.07989 10 3.51984 10 3.09202 10.218C2.71569 10.4097 2.40973 10.7157 2.21799 11.092C2 11.5198 2 12.0799 2 13.2V16.5V17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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