<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.4">
<path d="M6.00024 4C6.00024 5.10457 5.10481 6 4.00024 6C2.89567 6 2.00024 5.10457 2.00024 4C2.00024 2.89543 2.89567 2 4.00024 2C5.10481 2 6.00024 2.89543 6.00024 4Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.00024 12C6.00024 13.1046 5.10481 14 4.00024 14C2.89567 14 2.00024 13.1046 2.00024 12C2.00024 10.8954 2.89567 10 4.00024 10C5.10481 10 6.00024 10.8954 6.00024 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.00024 20C6.00024 21.1046 5.10481 22 4.00024 22C2.89567 22 2.00024 21.1046 2.00024 20C2.00024 18.8954 2.89567 18 4.00024 18C5.10481 18 6.00024 18.8954 6.00024 20Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<path d="M11.0002 20L22.0002 20M11.0002 12L22.0002 12M11.0002 4H22.0002" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.0002 20L22.0002 20M11.0002 12L22.0002 12M11.0002 4H22.0002M6.00024 4C6.00024 5.10457 5.10481 6 4.00024 6C2.89567 6 2.00024 5.10457 2.00024 4C2.00024 2.89543 2.89567 2 4.00024 2C5.10481 2 6.00024 2.89543 6.00024 4ZM6.00024 12C6.00024 13.1046 5.10481 14 4.00024 14C2.89567 14 2.00024 13.1046 2.00024 12C2.00024 10.8954 2.89567 10 4.00024 10C5.10481 10 6.00024 10.8954 6.00024 12ZM6.00024 20C6.00024 21.1046 5.10481 22 4.00024 22C2.89567 22 2.00024 21.1046 2.00024 20C2.00024 18.8954 2.89567 18 4.00024 18C5.10481 18 6.00024 18.8954 6.00024 20Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 20L22 20M11 12L22 12M11 4H22M6 4C6 5.10457 5.10457 6 4 6C2.89543 6 2 5.10457 2 4C2 2.89543 2.89543 2 4 2C5.10457 2 6 2.89543 6 4ZM6 12C6 13.1046 5.10457 14 4 14C2.89543 14 2 13.1046 2 12C2 10.8954 2.89543 10 4 10C5.10457 10 6 10.8954 6 12ZM6 20C6 21.1046 5.10457 22 4 22C2.89543 22 2 21.1046 2 20C2 18.8954 2.89543 18 4 18C5.10457 18 6 18.8954 6 20Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 20L22 20M11 12L22 12M11 4H22M6 4C6 5.10457 5.10457 6 4 6C2.89543 6 2 5.10457 2 4C2 2.89543 2.89543 2 4 2C5.10457 2 6 2.89543 6 4ZM6 12C6 13.1046 5.10457 14 4 14C2.89543 14 2 13.1046 2 12C2 10.8954 2.89543 10 4 10C5.10457 10 6 10.8954 6 12ZM6 20C6 21.1046 5.10457 22 4 22C2.89543 22 2 21.1046 2 20C2 18.8954 2.89543 18 4 18C5.10457 18 6 18.8954 6 20Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.0002 20H11.0002M22.0002 20H20.0002M17.0002 12H22.0002H11.0002H13.0002M16.0002 4.00001H11.0002M22.0002 4.00001H20.0002M6.00024 12C6.00024 13.1046 5.10481 14 4.00024 14C2.89567 14 2.00024 13.1046 2.00024 12C2.00024 10.8954 2.89567 10 4.00024 10M6.00024 4.00002C6.00024 5.10458 5.10481 6.00002 4.00024 6.00002C2.89567 6.00002 2.00024 5.10458 2.00024 4.00002C2.00024 2.89545 2.89567 2.00002 4.00024 2.00002C5.10481 2.00002 6.00024 2.89545 6.00024 4.00002ZM6.00024 20C6.00024 21.1046 5.10481 22 4.00024 22C2.89567 22 2.00024 21.1046 2.00024 20C2.00024 18.8954 2.89567 18 4.00024 18C5.10481 18 6.00024 18.8954 6.00024 20Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.0002 20L22.0002 20M11.0002 12L22.0002 12M11.0002 4.00002H22.0002M6.00024 4.00002C6.00024 5.10458 5.10481 6.00002 4.00024 6.00002C2.89567 6.00002 2.00024 5.10458 2.00024 4.00002C2.00024 2.89545 2.89567 2.00002 4.00024 2.00002C5.10481 2.00002 6.00024 2.89545 6.00024 4.00002ZM6.00024 12C6.00024 13.1046 5.10481 14 4.00024 14C2.89567 14 2.00024 13.1046 2.00024 12C2.00024 10.8954 2.89567 10 4.00024 10C5.10481 10 6.00024 10.8954 6.00024 12ZM6.00024 20C6.00024 21.1046 5.10481 22 4.00024 22C2.89567 22 2.00024 21.1046 2.00024 20C2.00024 18.8954 2.89567 18 4.00024 18C5.10481 18 6.00024 18.8954 6.00024 20Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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