<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M12 12V8M12.5 15C12.5 15.2761 12.2761 15.5 12 15.5C11.7239 15.5 11.5 15.2761 11.5 15M12.5 15C12.5 14.7239 12.2761 14.5 12 14.5C11.7239 14.5 11.5 14.7239 11.5 15M12.5 15H11.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 21 16.5 21 16.5M22 12C22 6.47715 17.5556 2 12 2C5.33333 2 2 7.5 2 7.5M2 7.5V4M2 7.5H5.5M21 16.5H17.5M21 16.5V20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle opacity="0.12" cx="12" cy="12" r="10" fill="currentColor"/>
<path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 21 16.5 21 16.5M22 12C22 6.47715 17.5556 2 12 2C5.33333 2 2 7.5 2 7.5M2 7.5V4M2 7.5H5.5M21 16.5H17.5M21 16.5V20M12 12V8M12.5 15C12.5 15.2761 12.2761 15.5 12 15.5C11.7239 15.5 11.5 15.2761 11.5 15M12.5 15C12.5 14.7239 12.2761 14.5 12 14.5C11.7239 14.5 11.5 14.7239 11.5 15M12.5 15H11.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 21 16.5 21 16.5M22 12C22 6.47715 17.5556 2 12 2C5.33333 2 2 7.5 2 7.5M2 7.5V4M2 7.5H5.5M21 16.5H17.5M21 16.5V20M12 12V8M12.5 15C12.5 15.2761 12.2761 15.5 12 15.5C11.7239 15.5 11.5 15.2761 11.5 15M12.5 15C12.5 14.7239 12.2761 14.5 12 14.5C11.7239 14.5 11.5 14.7239 11.5 15M12.5 15H11.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 21 16.5 21 16.5M22 12C22 6.47715 17.5556 2 12 2C5.33333 2 2 7.5 2 7.5M2 7.5V4M2 7.5H5.5M21 16.5H17.5M21 16.5V20M12 12V8M12.5 15C12.5 15.2761 12.2761 15.5 12 15.5C11.7239 15.5 11.5 15.2761 11.5 15M12.5 15C12.5 14.7239 12.2761 14.5 12 14.5C11.7239 14.5 11.5 14.7239 11.5 15M12.5 15H11.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12C2 14.2516 2.74418 16.3295 4 18.001M22 12C22 9.74879 21.2615 7.67132 20.0104 6M2 7.5V4M2 7.5C2 7.5 5.33333 2 12 2C13.8262 2 15.5323 2.48377 17 3.32943M2 7.5H5.5M21 16.5C21 16.5 17.5228 22 12 22C10.1786 22 8.47087 21.513 7 20.6622M21 16.5H17.5M21 16.5V20M12 12V8M12.5 15C12.5 15.2761 12.2761 15.5 12 15.5C11.7239 15.5 11.5 15.2761 11.5 15M12.5 15C12.5 14.7239 12.2761 14.5 12 14.5C11.7239 14.5 11.5 14.7239 11.5 15M12.5 15H11.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 21 16.5 21 16.5M22 12C22 6.47715 17.5556 2 12 2C5.33333 2 2 7.5 2 7.5M2 7.5V4M2 7.5H5.5M21 16.5H17.5M21 16.5V20M12 12V8M12.5 15C12.5 15.2761 12.2761 15.5 12 15.5C11.7239 15.5 11.5 15.2761 11.5 15M12.5 15C12.5 14.7239 12.2761 14.5 12 14.5C11.7239 14.5 11.5 14.7239 11.5 15M12.5 15H11.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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