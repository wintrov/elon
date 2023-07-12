<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M4.51555 8C3.55827 9.4301 3 11.1499 3 13C3 14.8501 3.55827 16.5699 4.51555 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.00008 4.44325C9.89906 4.16831 10.8991 4 12.0001 4C16.9706 4 21.0001 8.02944 21.0001 13C21.0001 17.9706 16.9706 22 12.0001 22C8.87966 22 6.13015 20.412 4.51562 18M9.00008 4.44325L12.0001 1M9.00008 4.44325L12.5001 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle opacity="0.12" cx="12" cy="13" r="9" fill="currentColor"/>
<path d="M9 4.44325C9.89898 4.16831 10.899 4 12 4C16.9706 4 21 8.02944 21 13C21 17.9706 16.9706 22 12 22C7.02944 22 3 17.9706 3 13C3 11.1499 3.55827 9.4301 4.51555 8M9 4.44325L12 1M9 4.44325L12.5 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 4.44325C9.89898 4.16831 10.899 4 12 4C16.9706 4 21 8.02944 21 13C21 17.9706 16.9706 22 12 22C7.02944 22 3 17.9706 3 13C3 11.1499 3.55827 9.4301 4.51555 8M9 4.44325L12 1M9 4.44325L12.5 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 4.44325C9.89898 4.16831 10.899 4 12 4C16.9706 4 21 8.02944 21 13C21 17.9706 16.9706 22 12 22C7.02944 22 3 17.9706 3 13C3 11.1499 3.55827 9.4301 4.51555 8M9 4.44325L12 1M9 4.44325L12.5 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 4.44325C9.89898 4.16831 10.899 4 12 4C16.9706 4 21 8.02944 21 13C21 17.9706 16.9706 22 12 22C10.1599 22 8.44877 21.4478 7.02331 20.5M9 4.44325L12 1M9 4.44325L12.5 7M4.51555 8C3.55827 9.4301 3 11.1499 3 13C3 14.8501 3.55827 16.5699 4.51555 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 4.44325C9.89898 4.16831 10.899 4 12 4C16.9706 4 21 8.02944 21 13C21 17.9706 16.9706 22 12 22C7.02944 22 3 17.9706 3 13C3 11.1499 3.55827 9.4301 4.51555 8M9 4.44325L12 1M9 4.44325L12.5 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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