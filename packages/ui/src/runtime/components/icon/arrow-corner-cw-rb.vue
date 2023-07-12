<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M3 3H9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 21L21 16M16 21L11 16M16 21V9.4C16 7.15979 16 6.03968 15.564 5.18404C15.1805 4.43139 14.5686 3.81947 13.816 3.43597C12.9603 3 11.8402 3 9.6 3H9.5H9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21L21 16M16 21L11 16M16 21V9.4C16 7.15979 16 6.03968 15.564 5.18404C15.1805 4.43139 14.5686 3.81947 13.816 3.43597C12.9603 3 11.8402 3 9.6 3H3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21L21 16M16 21L11 16M16 21V9.4C16 7.15979 16 6.03968 15.564 5.18404C15.1805 4.43139 14.5686 3.81947 13.816 3.43597C12.9603 3 11.8402 3 9.6 3H3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21L21 16M16 21L11 16M16 21V9.4C16 7.15979 16 6.03968 15.564 5.18404C15.1805 4.43139 14.5686 3.81947 13.816 3.43597C12.9603 3 11.8402 3 9.6 3H3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 16L16 21V9.4C16 7.15979 16 6.03968 15.564 5.18404C15.1805 4.43139 14.5686 3.81947 13.816 3.43597C12.9603 3 11.8402 3 9.6 3H3M11 16L13.5 18.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21L21 16M16 21L11 16M16 21V9.4C16 7.15979 16 6.03968 15.564 5.18404C15.1805 4.43139 14.5686 3.81947 13.816 3.43597C12.9603 3 11.8402 3 9.6 3H3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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