<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M2.00024 4.00018L3.00024 5.00018L6.00024 2.00018M2.00024 12.0002L3.00024 13.0002L6.00024 10.0002M2.00024 20.0002L3.00024 21.0002L6.00024 18.0002" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.0002 20.0002L22.0002 20.0002M11.0002 12.0002L22.0002 12.0002M11.0002 4.00018H22.0002" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.0002 20.0002L22.0002 20.0002M11.0002 12.0002L22.0002 12.0002M11.0002 4.00017H22.0002M2.00024 4.00017L3.00024 5.00017L6.00024 2.00017M2.00024 12.0002L3.00024 13.0002L6.00024 10.0002M2.00024 20.0002L3.00024 21.0002L6.00024 18.0002" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 20L22 20M11 12L22 12M11 4H22M2 4L3 5L6 2M2 12L3 13L6 10M2 20L3 21L6 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 20L22 20M11 12L22 12M11 4H22M2 4L3 5L6 2M2 12L3 13L6 10M2 20L3 21L6 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.0002 20.0002H11.0002M22.0002 20.0002H20.0002M17.0002 12.0002H22.0002H11.0002H13.0002M16.0002 4.0002H11.0002M22.0002 4.0002H20.0002M2.00024 4.0002L3.00024 5.0002L6.00024 2.0002M2.00024 12.0002L3.00024 13.0002L6.00024 10.0002M2.00024 20.0002L3.00024 21.0002L6.00024 18.0002" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.0002 20.0002L22.0002 20.0002M11.0002 12.0002L22.0002 12.0002M11.0002 4.0002H22.0002M2.00024 4.0002L3.00024 5.0002L6.00024 2.0002M2.00024 12.0002L3.00024 13.0002L6.00024 10.0002M2.00024 20.0002L3.00024 21.0002L6.00024 18.0002" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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