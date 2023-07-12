<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M4 3.26294C5.92132 2.49859 8.97159 2 12 2C15.0284 2 18.0787 2.49859 20 3.26294" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 5V19C22 20.5 19 22 15 22V8C19 8 22 6.30622 22 5ZM22 5C22 4.35261 21.2322 3.75313 20 3.26294M2 5V19C2 20.5 6 22 9 22V8C5.5 8 2 6.30622 2 5ZM2 5C2 4.35261 2.76784 3.75313 4 3.26294" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.12">
<path d="M2 19V5C2 6.30622 5.5 8 9 8V22C6 22 2 20.5 2 19Z" fill="currentColor"/>
<path d="M22 19V5C22 6.30622 19 8 15 8V22C19 22 22 20.5 22 19Z" fill="currentColor"/>
</g>
<path d="M22 5C22 3.34315 16.9706 2 12 2C7.02944 2 2 3.34315 2 5M22 5V19C22 20.5 19 22 15 22V8C19 8 22 6.30622 22 5ZM2 5V19C2 20.5 6 22 9 22V8C5.5 8 2 6.30622 2 5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C11.5858 1.25 11.25 1.58579 11.25 2C11.25 2.41421 11.5858 2.75 12 2.75C14.4271 2.75 16.8556 3.079 18.6557 3.5992C19.5607 3.86072 20.2652 4.15877 20.7262 4.46008C21.2254 4.78636 21.25 4.98532 21.25 5C21.25 5.04093 21.2177 5.21121 20.9394 5.4885C20.6742 5.7527 20.2539 6.04214 19.6813 6.3109C18.5402 6.8465 16.9005 7.25 15 7.25C14.5858 7.25 14.25 7.58579 14.25 8V22C14.25 22.4142 14.5858 22.75 15 22.75C17.0854 22.75 18.9438 22.3603 20.3078 21.7464C20.9882 21.4403 21.5761 21.0646 22.005 20.6259C22.432 20.1892 22.75 19.6364 22.75 19V5C22.75 4.18625 22.1459 3.596 21.5468 3.20445C20.9095 2.78793 20.0459 2.43954 19.0722 2.15816C17.115 1.59257 14.5434 1.25 12 1.25ZM2 5V19C2 20.5 6 22 9 22V8C5.5 8 2 6.30622 2 5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.27382 4.46008C2.77952 4.78313 2.75053 4.98136 2.75001 4.99951C2.75028 5.00297 2.75423 5.041 2.80077 5.11877C2.85399 5.20769 2.9489 5.32422 3.10163 5.46085C3.40851 5.7354 3.88177 6.03164 4.49358 6.30513C5.71439 6.85087 7.36042 7.25 9 7.25C9.41421 7.25 9.75 7.58579 9.75 8V22C9.75 22.4142 9.41421 22.75 9 22.75C7.39376 22.75 5.54759 22.3525 4.09103 21.7567C3.36343 21.459 2.6937 21.096 2.19174 20.6777C1.71355 20.2792 1.25 19.7129 1.25 19V5C1.25 4.18625 1.85411 3.596 2.45321 3.20445C3.09053 2.78793 3.95413 2.43954 4.92783 2.15816C6.88505 1.59257 9.45656 1.25 12 1.25C12.4142 1.25 12.75 1.58579 12.75 2C12.75 2.41421 12.4142 2.75 12 2.75C9.57288 2.75 7.14439 3.079 5.34425 3.5992C4.43927 3.86072 3.73485 4.15877 3.27382 4.46008Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.80077 5.11877C2.75423 5.041 2.75028 5.00297 2.75001 4.99951C2.75053 4.98136 2.77952 4.78313 3.27382 4.46008C3.73485 4.15877 4.43927 3.86072 5.34425 3.5992C7.14439 3.079 9.57288 2.75 12 2.75C14.4271 2.75 16.8556 3.079 18.6557 3.5992C19.5607 3.86072 20.2652 4.15877 20.7262 4.46008C21.2254 4.78636 21.25 4.98532 21.25 5C21.25 5.04093 21.2177 5.21121 20.9394 5.4885C20.6742 5.7527 20.2539 6.04214 19.6813 6.3109C18.5402 6.8465 16.9005 7.25 15 7.25C14.5858 7.25 14.25 7.58579 14.25 8V22C14.25 22.4142 14.5858 22.75 15 22.75C17.0854 22.75 18.9438 22.3603 20.3078 21.7464C20.9882 21.4403 21.5761 21.0646 22.005 20.6259C22.432 20.1892 22.75 19.6364 22.75 19V5C22.75 4.18625 22.1459 3.596 21.5468 3.20445C20.9095 2.78793 20.0459 2.43954 19.0722 2.15816C17.115 1.59257 14.5434 1.25 12 1.25C9.45656 1.25 6.88505 1.59257 4.92783 2.15816C3.95413 2.43954 3.09053 2.78793 2.45321 3.20445C1.85411 3.596 1.25 4.18625 1.25 5V19C1.25 19.7129 1.71355 20.2792 2.19174 20.6777C2.6937 21.096 3.36343 21.459 4.09103 21.7567C5.54759 22.3525 7.39376 22.75 9 22.75C9.41421 22.75 9.75 22.4142 9.75 22V8C9.75 7.58579 9.41421 7.25 9 7.25C7.36042 7.25 5.71439 6.85087 4.49358 6.30513C3.88177 6.03164 3.40851 5.7354 3.10163 5.46085C2.9489 5.32422 2.85399 5.20769 2.80077 5.11877Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 5C22 3.34315 16.9706 2 12 2C7.02944 2 2 3.34315 2 5V19C2 20.5 6 22 9 22V8C7.97029 8 6.94058 7.85339 6 7.61318M22 5V19C22 20.5 19 22 15 22V17M22 5C22 6.30622 19 8 15 8V12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 5C22 3.34315 16.9706 2 12 2C7.02944 2 2 3.34315 2 5M22 5V19C22 20.5 19 22 15 22V8C19 8 22 6.30622 22 5ZM2 5V19C2 20.5 6 22 9 22V8C5.5 8 2 6.30622 2 5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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