<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M21 3V9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 16L8 21M3 16L8 11M3 16H14.6C16.8402 16 17.9603 16 18.816 15.564C19.5686 15.1805 20.1805 14.5686 20.564 13.816C21 12.9603 21 11.8402 21 9.6V9.5V9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 16L8 21M3 16L8 11M3 16H14.6C16.8402 16 17.9603 16 18.816 15.564C19.5686 15.1805 20.1805 14.5686 20.564 13.816C21 12.9603 21 11.8402 21 9.6V3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 16L8 21M3 16L8 11M3 16H14.6C16.8402 16 17.9603 16 18.816 15.564C19.5686 15.1805 20.1805 14.5686 20.564 13.816C21 12.9603 21 11.8402 21 9.6V3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 16L8 21M3 16L8 11M3 16H14.6C16.8402 16 17.9603 16 18.816 15.564C19.5686 15.1805 20.1805 14.5686 20.564 13.816C21 12.9603 21 11.8402 21 9.6V3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 21L5.5 18.5M8 11L3 16H14.6C16.8402 16 17.9603 16 18.816 15.564C19.5686 15.1805 20.1805 14.5686 20.564 13.816C21 12.9603 21 11.8402 21 9.6V3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 16L8 21M3 16L8 11M3 16H14.6C16.8402 16 17.9603 16 18.816 15.564C19.5686 15.1805 20.1805 14.5686 20.564 13.816C21 12.9603 21 11.8402 21 9.6V3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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