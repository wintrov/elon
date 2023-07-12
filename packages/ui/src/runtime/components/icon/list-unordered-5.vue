<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M3.50024 5.50012L5.00024 4.00012M5.00024 4.00012L6.50024 2.50012M5.00024 4.00012L3.50024 2.50012M5.00024 4.00012L6.50024 5.50012M3.50024 13.5001L5.00024 12.0001M5.00024 12.0001L6.50024 10.5001M5.00024 12.0001L3.50024 10.5001M5.00024 12.0001L6.50024 13.5001M3.50024 21.5001L5.00024 20.0001M5.00024 20.0001L6.50024 18.5001M5.00024 20.0001L3.50024 18.5001M5.00024 20.0001L6.50024 21.5001" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.0002 20.0001L22.0002 20.0001M11.0002 12.0001L22.0002 12.0001M11.0002 4.00012H22.0002" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.50024 5.50011L5.00024 4.00011M5.00024 4.00011L6.50024 2.50011M5.00024 4.00011L3.50024 2.50011M5.00024 4.00011L6.50024 5.50011M3.50024 13.5001L5.00024 12.0001M5.00024 12.0001L6.50024 10.5001M5.00024 12.0001L3.50024 10.5001M5.00024 12.0001L6.50024 13.5001M3.50024 21.5001L5.00024 20.0001M5.00024 20.0001L6.50024 18.5001M5.00024 20.0001L3.50024 18.5001M5.00024 20.0001L6.50024 21.5001M11.0002 20.0001L22.0002 20.0001M11.0002 12.0001L22.0002 12.0001M11.0002 4.00011H22.0002" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 5.5L5 4M5 4L6.5 2.5M5 4L3.5 2.5M5 4L6.5 5.5M3.5 13.5L5 12M5 12L6.5 10.5M5 12L3.5 10.5M5 12L6.5 13.5M3.5 21.5L5 20M5 20L6.5 18.5M5 20L3.5 18.5M5 20L6.5 21.5M11 20L22 20M11 12L22 12M11 4H22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 5.5L5 4M5 4L6.5 2.5M5 4L3.5 2.5M5 4L6.5 5.5M3.5 13.5L5 12M5 12L6.5 10.5M5 12L3.5 10.5M5 12L6.5 13.5M3.5 21.5L5 20M5 20L6.5 18.5M5 20L3.5 18.5M5 20L6.5 21.5M11 20L22 20M11 12L22 12M11 4H22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.50024 5.50014L5.00024 4.00014M5.00024 4.00014L6.50024 2.50014M5.00024 4.00014L3.50024 2.50014M5.00024 4.00014L6.50024 5.50014M3.50024 13.5001L5.00024 12.0001M5.00024 12.0001L6.50024 10.5001M5.00024 12.0001L3.50024 10.5001M5.00024 12.0001L6.50024 13.5001M3.50024 21.5001L5.00024 20.0001M5.00024 20.0001L6.50024 18.5001M5.00024 20.0001L3.50024 18.5001M5.00024 20.0001L6.50024 21.5001M16.0002 20.0001H11.0002M22.0002 20.0001H20.0002M17.0002 12.0001H22.0002H11.0002H13.0002M16.0002 4.00014H11.0002M22.0002 4.00014H20.0002" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.50024 5.50014L5.00024 4.00014M5.00024 4.00014L6.50024 2.50014M5.00024 4.00014L3.50024 2.50014M5.00024 4.00014L6.50024 5.50014M3.50024 13.5001L5.00024 12.0001M5.00024 12.0001L6.50024 10.5001M5.00024 12.0001L3.50024 10.5001M5.00024 12.0001L6.50024 13.5001M3.50024 21.5001L5.00024 20.0001M5.00024 20.0001L6.50024 18.5001M5.00024 20.0001L3.50024 18.5001M5.00024 20.0001L6.50024 21.5001M11.0002 20.0001L22.0002 20.0001M11.0002 12.0001L22.0002 12.0001M11.0002 4.00014H22.0002" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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