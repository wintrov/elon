<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M20 14C20 5.81818 12 2 12 2C12 3.83649 12.2108 6.09457 12.1485 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 14C20 18.5455 16.5 22 12 22C7.5 22 4 18.5455 4 14C4 9.45455 7.5 6.5 7.5 6.5C7.5 10 8 12 10 12C11.6226 12 12.0751 10.2447 12.1485 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.12" d="M4 14C4 18.5455 7.5 22 12 22C16.5 22 20 18.5455 20 14C20 5.81818 12 2 12 2C12 6 13 12 10 12C8 12 7.5 10 7.5 6.5C7.5 6.5 4 9.45455 4 14Z" fill="currentColor"/>
<path d="M4 14C4 18.5455 7.5 22 12 22C16.5 22 20 18.5455 20 14C20 5.81818 12 2 12 2C12 6 13 12 10 12C8 12 7.5 10 7.5 6.5C7.5 6.5 4 9.45455 4 14Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" d="M5.1268 8.12821C4.19985 9.51262 3.25 11.5317 3.25 14C3.25 18.9625 7.08859 22.75 12 22.75C16.9114 22.75 20.75 18.9625 20.75 14C20.75 9.64306 18.6151 6.46259 16.5273 4.3985C14.9567 2.84575 13.1755 1.83783 11.25 0.811035C11.25 2.3934 13.1182 11.25 10 11.25C7.50784 11.25 8.25 6.63434 8.25 4.88542C7.03689 5.90947 6.04322 6.75953 5.1268 8.12821Z" fill="currentColor"/>
<path d="M3.25 14.2258C3.25 19 7 22.75 12 22.75C17 22.75 20.75 18.9853 20.75 14C20.75 14 20.4375 17.5161 18.1875 17.5161C15.9375 17.5161 15.375 12.0323 15.375 12.0323C15.375 12.0323 14.25 18.6129 10.875 18.6129C5.025 18.6129 5.2825 9.29032 6.97 6C6.97 6 3.25 9 3.25 14.2258Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.1268 8.12818C4.19985 9.51259 3.25 11.5317 3.25 14C3.25 18.9625 7.08859 22.75 12 22.75C16.9114 22.75 20.75 18.9625 20.75 14C20.75 9.64303 18.6151 6.46256 16.5273 4.39847C14.9567 2.84572 13.1755 1.8378 11.25 0.811005C11.25 2.39337 13.1182 11.25 10 11.25C7.50784 11.25 8.25 6.63431 8.25 4.88539C7.03689 5.90944 6.04322 6.7595 5.1268 8.12818Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 14C20 18.5455 16.5 22 12 22C7.5 22 4 18.5455 4 14C4 9.45455 7.5 6.5 7.5 6.5C7.5 10 8 12 10 12C13 12 12 6 12 2C12 2 17.3774 4.56647 19.3147 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14C4 18.5455 7.5 22 12 22C16.5 22 20 18.5455 20 14C20 5.81818 12 2 12 2C12 6 13 12 10 12C8 12 7.5 10 7.5 6.5C7.5 6.5 4 9.45455 4 14Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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