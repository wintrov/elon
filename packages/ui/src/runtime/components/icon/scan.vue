<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M2 12H22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 8V7.5V7.5C22 4.46243 19.5376 2 16.5 2V2H16M22 16V16.5V16.5C22 19.5376 19.5376 22 16.5 22V22H16M2 16V16.5V16.5C2 19.5376 4.46243 22 7.5 22V22H8M2 8V7.5V7.5C2 4.46243 4.46243 2 7.5 2V2H8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.12" x="2" y="2" width="20" height="20" rx="6" fill="currentColor"/>
<path d="M22 8V7.5V7.5C22 4.46243 19.5376 2 16.5 2V2H16M22 16V16.5V16.5C22 19.5376 19.5376 22 16.5 22V22H16M2 16V16.5V16.5C2 19.5376 4.46243 22 7.5 22V22H8M2 8V7.5V7.5C2 4.46243 4.46243 2 7.5 2V2H8M2 12H22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 8V7.5V7.5C22 4.46243 19.5376 2 16.5 2V2H16M22 16V16.5V16.5C22 19.5376 19.5376 22 16.5 22V22H16M2 16V16.5V16.5C2 19.5376 4.46243 22 7.5 22V22H8M2 8V7.5V7.5C2 4.46243 4.46243 2 7.5 2V2H8M2 12H22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 8V7.5V7.5C22 4.46243 19.5376 2 16.5 2V2H16M22 16V16.5V16.5C22 19.5376 19.5376 22 16.5 22V22H16M2 16V16.5V16.5C2 19.5376 4.46243 22 7.5 22V22H8M2 8V7.5V7.5C2 4.46243 4.46243 2 7.5 2V2H8M2 12H22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 8V7.5V7.5C22 4.46243 19.5376 2 16.5 2V2H16M22 16V16.5V16.5C22 19.5376 19.5376 22 16.5 22V22H16M2 16V16.5V16.5C2 19.5376 4.46243 22 7.5 22V22H8M2 8V7.5V7.5C2 4.46243 4.46243 2 7.5 2V2H8M11.0001 12H22M2 12H7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 8V7.5V7.5C22 4.46243 19.5376 2 16.5 2V2H16M22 16V16.5V16.5C22 19.5376 19.5376 22 16.5 22V22H16M2 16V16.5V16.5C2 19.5376 4.46243 22 7.5 22V22H8M2 8V7.5V7.5C2 4.46243 4.46243 2 7.5 2V2H8M2 12H22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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