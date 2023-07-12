<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M3 21L3 15.375M3 21L8.625 21M3 21L21 3M21 3L15.375 3M21 3L21 8.625" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L3 8.625M3 3L8.625 3M3 3L21 21M21 21L15.375 21M21 21L21 15.375" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.12" x="3" y="3" width="18" height="18" fill="currentColor"/>
<path d="M3 21V15.375M3 21H8.625M3 21L21 3M21 3H15.375M21 3V8.625M3 3V8.625M3 3H8.625M3 3L21 21M21 21H15.375M21 21V15.375" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 21V15.375M3 21H8.625M3 21L21 3M21 3H15.375M21 3V8.625M3 3V8.625M3 3H8.625M3 3L21 21M21 21H15.375M21 21V15.375" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 21V15.375M3 21H8.625M3 21L21 3M21 3H15.375M21 3V8.625M3 3V8.625M3 3H8.625M3 3L21 21M21 21H15.375M21 21V15.375" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 21V15.375M3 21H8.625M3 21L7 17M21 3H15.375M21 3V8.625M21 3L17 7M10 14L14 10M3 3V8.625M3 3H8.625M3 3L21 21M21 21H15.375M21 21V15.375" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 21V15.375M3 21H8.625M3 21L21 3M21 3H15.375M21 3V8.625M3 3V8.625M3 3H8.625M3 3L21 21M21 21H15.375M21 21V15.375" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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