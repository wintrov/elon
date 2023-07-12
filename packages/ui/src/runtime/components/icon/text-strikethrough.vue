<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M17.5553 7.5C17.5553 5.01472 15.5655 3 13.1109 3H10.8887C8.43406 3 6.44421 5.01472 6.44421 7.5C6.44421 7.88846 6.49283 8.26543 6.58423 8.625" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.8886 12H13.1108C15.5654 12 17.5553 14.0147 17.5553 16.5C17.5553 18.9853 15.5654 21 13.1108 21H10.8886C8.43402 21 6.44417 18.9853 6.44417 16.5M3 12H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.8886 12H13.1108C15.5654 12 17.5553 14.0147 17.5553 16.5C17.5553 18.9853 15.5654 21 13.1108 21H10.8886C8.43402 21 6.44417 18.9853 6.44417 16.5M17.5553 7.5C17.5553 5.01472 15.5654 3 13.1108 3H10.8886C8.43402 3 6.44417 5.01472 6.44417 7.5C6.44417 7.88846 6.49279 8.26543 6.58419 8.625M3 12H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.8886 12H13.1108C15.5654 12 17.5553 14.0147 17.5553 16.5C17.5553 18.9853 15.5654 21 13.1108 21H10.8886C8.43402 21 6.44417 18.9853 6.44417 16.5M17.5553 7.5C17.5553 5.01472 15.5654 3 13.1108 3H10.8886C8.43402 3 6.44417 5.01472 6.44417 7.5C6.44417 7.88846 6.49279 8.26543 6.58419 8.625M3 12H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.8886 12H13.1108C15.5654 12 17.5553 14.0147 17.5553 16.5C17.5553 18.9853 15.5654 21 13.1108 21H10.8886C8.43402 21 6.44417 18.9853 6.44417 16.5M17.5553 7.5C17.5553 5.01472 15.5654 3 13.1108 3H10.8886C8.43402 3 6.44417 5.01472 6.44417 7.5C6.44417 7.88846 6.49279 8.26543 6.58419 8.625M3 12H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 12C15.4546 12 17.5553 14.0147 17.5553 16.5C17.5553 18.9853 15.5654 21 13.1108 21H10.8886C8.43402 21 6.44417 18.9853 6.44417 16.5M13 12H11M13 12H21M17.5553 7.5C17.5553 5.01472 15.5654 3 13.1108 3H10.8886C8.43402 3 6.44417 5.01472 6.44417 7.5C6.44417 7.88846 6.49279 8.26543 6.58419 8.625M3 12H7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.8886 12H13.1108C15.5654 12 17.5553 14.0147 17.5553 16.5C17.5553 18.9853 15.5654 21 13.1108 21H10.8886C8.43402 21 6.44417 18.9853 6.44417 16.5M17.5553 7.5C17.5553 5.01472 15.5654 3 13.1108 3H10.8886C8.43402 3 6.44417 5.01472 6.44417 7.5C6.44417 7.88846 6.49279 8.26543 6.58419 8.625M3 12H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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