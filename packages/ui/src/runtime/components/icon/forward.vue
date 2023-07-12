<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M2 18V17.5V17.4C2 15.1598 2 14.0397 2.43597 13.184C2.81947 12.4314 3.43139 11.8195 4.18404 11.436C5.03968 11 6.15979 11 8.4 11H10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 11L17 6M22 11L17 16M22 11H10.5H10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11L17 6M22 11L17 16M22 11H8.4C6.15979 11 5.03968 11 4.18404 11.436C3.43139 11.8195 2.81947 12.4314 2.43597 13.184C2 14.0397 2 15.1598 2 17.4V17.5V18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11L17 6M22 11L17 16M22 11H8.4C6.15979 11 5.03968 11 4.18404 11.436C3.43139 11.8195 2.81947 12.4314 2.43597 13.184C2 14.0397 2 15.1598 2 17.4V17.5V18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11L17 6M22 11L17 16M22 11H8.4C6.15979 11 5.03968 11 4.18404 11.436C3.43139 11.8195 2.81947 12.4314 2.43597 13.184C2 14.0397 2 15.1598 2 17.4V17.5V18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 6L22 11H8.4C6.15979 11 5.03968 11 4.18404 11.436C3.43139 11.8195 2.81947 12.4314 2.43597 13.184C2 14.0397 2 15.1598 2 17.4V17.5V18M17 16L19.5 13.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11L17 6M22 11L17 16M22 11H8.4C6.15979 11 5.03968 11 4.18404 11.436C3.43139 11.8195 2.81947 12.4314 2.43597 13.184C2 14.0397 2 15.1598 2 17.4V17.5V18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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