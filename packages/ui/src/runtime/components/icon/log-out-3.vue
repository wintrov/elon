<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M8 12L22.0001 12M22.0001 12L18.0001 8M22.0001 12L18.0001 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="2" y="2" width="12" height="20" rx="6" stroke="currentColor" stroke-width="1.5"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.12" x="2" y="2" width="12" height="20" rx="6" fill="currentColor"/>
<path d="M8 12H22.0001M22.0001 12L18.0001 8M22.0001 12L18.0001 16M8 22V22C11.3137 22 14 19.3137 14 16V8C14 4.68629 11.3137 2 8 2V2C4.68629 2 2 4.68629 2 8V16C2 19.3137 4.68629 22 8 22Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" d="M8 1.25C4.27208 1.25 1.25 4.27208 1.25 8V16C1.25 19.7279 4.27208 22.75 8 22.75V22.75C11.7279 22.75 14.75 19.7279 14.75 16V8C14.75 4.27208 11.7279 1.25 8 1.25V1.25Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.4698 7.46973C17.7627 7.17684 18.2376 7.17684 18.5305 7.46973L22.5305 11.4697C22.8233 11.7626 22.8233 12.2375 22.5305 12.5304L18.5305 16.5304C18.2376 16.8233 17.7627 16.8233 17.4698 16.5304C17.1769 16.2375 17.1769 15.7626 17.4698 15.4697L20.1895 12.7501L8 12.7501C7.58579 12.7501 7.25 12.4143 7.25 12.0001C7.25 11.5858 7.58579 11.2501 8 11.2501L20.1895 11.2501L17.4698 8.53039C17.1769 8.2375 17.1769 7.76262 17.4698 7.46973Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 8C1.25 4.27208 4.27208 1.25 8 1.25C11.7279 1.25 14.75 4.27208 14.75 8V11.25H8C7.58579 11.25 7.25 11.5858 7.25 12C7.25 12.4143 7.58579 12.75 8 12.75H14.75V16C14.75 19.7279 11.7279 22.75 8 22.75C4.27208 22.75 1.25 19.7279 1.25 16L1.25 8ZM14.75 12.75L20.1895 12.75L17.4698 15.4697C17.1769 15.7626 17.1769 16.2375 17.4698 16.5304C17.7627 16.8233 18.2376 16.8233 18.5305 16.5304L22.5305 12.5304C22.8233 12.2375 22.8233 11.7626 22.5305 11.4697L18.5305 7.46971C18.2376 7.17682 17.7627 7.17682 17.4698 7.46971C17.1769 7.7626 17.1769 8.23748 17.4698 8.53037L20.1895 11.25L14.75 11.25V12.75Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.5V8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8V16C14 19.3137 11.3137 22 8 22C4.68629 22 2 19.3137 2 16V14.5M8 12H22.0001M22.0001 12L18.0001 8M22.0001 12L18.0001 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 12H22.0001M22.0001 12L18.0001 8M22.0001 12L18.0001 16M8 22V22C11.3137 22 14 19.3137 14 16V8C14 4.68629 11.3137 2 8 2V2C4.68629 2 2 4.68629 2 8V16C2 19.3137 4.68629 22 8 22Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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