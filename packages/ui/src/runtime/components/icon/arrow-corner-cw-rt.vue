<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M3 21V15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 8L16 3M21 8L16 13M21 8H9.4C7.15979 8 6.03968 8 5.18404 8.43597C4.43139 8.81947 3.81947 9.43139 3.43597 10.184C3 11.0397 3 12.1598 3 14.4V14.5V15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 8L16 3M21 8L16 13M21 8C17.6005 8 13.3884 8 9.39961 8C7.15966 8 6.03968 8 5.18404 8.43597C4.43139 8.81947 3.81947 9.43139 3.43597 10.184C3 11.0397 3 12.1598 3 14.4V21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 8L16 3M21 8L16 13M21 8C17.6005 8 13.3884 8 9.39961 8C7.15966 8 6.03968 8 5.18404 8.43597C4.43139 8.81947 3.81947 9.43139 3.43597 10.184C3 11.0397 3 12.1598 3 14.4V21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 8L16 3M21 8L16 13M21 8C17.6005 8 13.3884 8 9.39961 8C7.15966 8 6.03968 8 5.18404 8.43597C4.43139 8.81947 3.81947 9.43139 3.43597 10.184C3 11.0397 3 12.1598 3 14.4V21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 3L21 8C17.6005 8 13.3884 8 9.39961 8C7.15966 8 6.03968 8 5.18404 8.43597C4.43139 8.81947 3.81947 9.43139 3.43597 10.184C3 11.0397 3 12.1598 3 14.4V21M16 13L18.5 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 8L16 3M21 8L16 13M21 8C17.6005 8 13.3884 8 9.39961 8C7.15966 8 6.03968 8 5.18404 8.43597C4.43139 8.81947 3.81947 9.43139 3.43597 10.184C3 11.0397 3 12.1598 3 14.4V21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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