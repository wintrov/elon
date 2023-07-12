<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M3.00024 21.0001H21.0002M3.00024 15.0001H21.0002" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.0002 3.00006L21.0002 3.00006M13.0002 9.00006L21.0002 9.00006M9.00024 6.00006C9.00024 7.65692 7.6571 9.00006 6.00024 9.00006C4.34339 9.00006 3.00024 7.65692 3.00024 6.00006C3.00024 4.34321 4.34339 3.00006 6.00024 3.00006C7.6571 3.00006 9.00024 4.34321 9.00024 6.00006Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.00024 21.0001H21.0002M13.0002 3.00006L21.0002 3.00006M13.0002 9.00006L21.0002 9.00006M3.00024 15.0001H21.0002M9.00024 6.00006C9.00024 7.65692 7.6571 9.00006 6.00024 9.00006C4.34339 9.00006 3.00024 7.65692 3.00024 6.00006C3.00024 4.34321 4.34339 3.00006 6.00024 3.00006C7.6571 3.00006 9.00024 4.34321 9.00024 6.00006Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 21H21M13 3L21 3M13 9L21 9M3 15H21M9 6C9 7.65686 7.65685 9 6 9C4.34315 9 3 7.65686 3 6C3 4.34315 4.34315 3 6 3C7.65685 3 9 4.34315 9 6Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 21H21M13 3L21 3M13 9L21 9M3 15H21M9 6C9 7.65686 7.65685 9 6 9C4.34315 9 3 7.65686 3 6C3 4.34315 4.34315 3 6 3C7.65685 3 9 4.34315 9 6Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.0002 3.00006L21.0002 3.00006M13.0002 9.00006L21.0002 9.00006M6.00024 21.0001H3.00024M21.0002 21.0001H10.0002M18.0002 15.0001H21.0002M3.00024 15.0001H14.0002M9.00024 6.00006C9.00024 7.65692 7.6571 9.00006 6.00024 9.00006C4.34339 9.00006 3.00024 7.65692 3.00024 6.00006C3.00024 4.34321 4.34339 3.00006 6.00024 3.00006C7.6571 3.00006 9.00024 4.34321 9.00024 6.00006Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.00024 21.0001H21.0002M13.0002 3.00006L21.0002 3.00006M13.0002 9.00006L21.0002 9.00006M3.00024 15.0001H21.0002M9.00024 6.00006C9.00024 7.65692 7.6571 9.00006 6.00024 9.00006C4.34339 9.00006 3.00024 7.65692 3.00024 6.00006C3.00024 4.34321 4.34339 3.00006 6.00024 3.00006C7.6571 3.00006 9.00024 4.34321 9.00024 6.00006Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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