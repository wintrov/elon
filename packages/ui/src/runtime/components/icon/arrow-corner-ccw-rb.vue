<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M3 3V9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 16L16 21M21 16L16 11M21 16H9.4C7.15979 16 6.03968 16 5.18404 15.564C4.43139 15.1805 3.81947 14.5686 3.43597 13.816C3 12.9603 3 11.8402 3 9.6V9.5V9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 16L16 21M21 16L16 11M21 16C18.1926 16 13.3531 16 9.39883 16C7.1594 16 6.03968 16 5.18404 15.564C4.43139 15.1805 3.81947 14.5686 3.43597 13.816C3 12.9603 3 11.8402 3 9.6V3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 16L16 21M21 16L16 11M21 16C18.1926 16 13.3531 16 9.39883 16C7.1594 16 6.03968 16 5.18404 15.564C4.43139 15.1805 3.81947 14.5686 3.43597 13.816C3 12.9603 3 11.8402 3 9.6V3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 16L16 21M21 16L16 11M21 16C18.1926 16 13.3531 16 9.39883 16C7.1594 16 6.03968 16 5.18404 15.564C4.43139 15.1805 3.81947 14.5686 3.43597 13.816C3 12.9603 3 11.8402 3 9.6V3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21L18.5 18.5M16 11L21 16C18.1926 16 13.3531 16 9.39883 16C7.1594 16 6.03968 16 5.18404 15.564C4.43139 15.1805 3.81947 14.5686 3.43597 13.816C3 12.9603 3 11.8402 3 9.6V3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 16L16 21M21 16L16 11M21 16C18.1926 16 13.3531 16 9.39883 16C7.1594 16 6.03968 16 5.18404 15.564C4.43139 15.1805 3.81947 14.5686 3.43597 13.816C3 12.9603 3 11.8402 3 9.6V3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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