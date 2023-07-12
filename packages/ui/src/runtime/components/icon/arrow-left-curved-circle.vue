<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M11 16H13C14.6569 16 16 14.6569 16 13V13C16 11.3431 14.6569 10 13 10H8L10 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle opacity="0.12" cx="12" cy="12" r="10" fill="currentColor"/>
<path d="M11 16H13C14.6569 16 16 14.6569 16 13C16 11.3431 14.6569 10 13 10H8L10 8M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5304 7.46967C10.8232 7.76256 10.8232 8.23744 10.5304 8.53033L9.81068 9.25H13C15.0711 9.25 16.75 10.9289 16.75 13C16.75 15.0711 15.0711 16.75 13 16.75H11C10.5858 16.75 10.25 16.4142 10.25 16C10.25 15.5858 10.5858 15.25 11 15.25H13C14.2427 15.25 15.25 14.2426 15.25 13C15.25 11.7574 14.2427 10.75 13 10.75H8.00002C7.69668 10.75 7.4232 10.5673 7.30711 10.287C7.19103 10.0068 7.25519 9.68417 7.46969 9.46967L9.46969 7.46967C9.76259 7.17678 10.2375 7.17678 10.5304 7.46967Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM10.5303 8.53033C10.8232 8.23744 10.8232 7.76256 10.5303 7.46967C10.2374 7.17678 9.76256 7.17678 9.46967 7.46967L7.46967 9.46967C7.25517 9.68417 7.191 10.0068 7.30709 10.287C7.42318 10.5673 7.69665 10.75 8 10.75H13C14.2426 10.75 15.25 11.7574 15.25 13C15.25 14.2426 14.2426 15.25 13 15.25H11C10.5858 15.25 10.25 15.5858 10.25 16C10.25 16.4142 10.5858 16.75 11 16.75H13C15.0711 16.75 16.75 15.0711 16.75 13C16.75 10.9289 15.0711 9.25 13 9.25H9.81066L10.5303 8.53033Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 2.83209C14.7751 2.2969 13.4222 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.74835 21.2558 7.67051 20 5.99902M11 16H13C14.6569 16 16 14.6569 16 13C16 11.3431 14.6569 10 13 10H8L10 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 16H13C14.6569 16 16 14.6569 16 13C16 11.3431 14.6569 10 13 10H8L10 8M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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