<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M1.99976 10H11.9998M1.99976 14H9.99976" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 6.0469C18.3247 4.17845 15.8736 3 13.1429 3C8.0934 3 4 7.02944 4 12C4 16.9706 8.0934 21 13.1429 21C15.8736 21 18.3247 19.8216 20 17.9531" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6.0469C18.3247 4.17845 15.8736 3 13.1429 3C8.0934 3 4 7.02944 4 12C4 16.9706 8.0934 21 13.1429 21C15.8736 21 18.3247 19.8216 20 17.9531M1.99976 10H11.9998M1.99976 14H9.99976" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.0002 6.0469C18.3249 4.17845 15.8738 3 13.1431 3C8.09364 3 4.00024 7.02944 4.00024 12C4.00024 16.9706 8.09364 21 13.1431 21C15.8738 21 18.3249 19.8216 20.0002 17.9531M2 10H12M2 14H10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.0002 6.0469C18.3249 4.17845 15.8738 3 13.1431 3C8.09364 3 4.00024 7.02944 4.00024 12C4.00024 16.9706 8.09364 21 13.1431 21C15.8738 21 18.3249 19.8216 20.0002 17.9531M2 10H12M2 14H10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6.0469C18.3247 4.17845 15.8736 3 13.1429 3C11.6316 3 10.206 3.36093 8.95014 4M20 17.9531C18.3247 19.8216 15.8736 21 13.1429 21C8.0934 21 4 16.9706 4 12C4 10.1499 4.56713 8.4301 5.53961 7M1.99976 10H11.9998M1.99976 14H9.99976" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6.0469C18.3247 4.17845 15.8736 3 13.1429 3C8.0934 3 4 7.02944 4 12C4 16.9706 8.0934 21 13.1429 21C15.8736 21 18.3247 19.8216 20 17.9531M1.99976 10H11.9998M1.99976 14H9.99976" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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