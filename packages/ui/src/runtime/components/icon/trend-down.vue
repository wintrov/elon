<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M2 6L6 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 17.9999V12M22 17.9999H16M22 17.9999L15 11C14.4548 10.4547 14.1821 10.1821 13.888 10.0363C13.3285 9.75905 12.6715 9.75905 12.112 10.0363C11.8179 10.1821 11.5452 10.4547 11 11V11C10.4547 11.5452 10.1821 11.8179 9.88799 11.9636C9.32844 12.2409 8.6715 12.2409 8.11195 11.9636C7.81785 11.8179 7.54522 11.5452 6.99995 11L6.49994 10.4999L6 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 17.9999V12M22 17.9999H16M22 17.9999L15 11C14.4548 10.4547 14.1821 10.1821 13.888 10.0363C13.3285 9.75905 12.6715 9.75905 12.112 10.0363C11.8179 10.1821 11.5452 10.4547 11 11V11C10.4547 11.5452 10.1821 11.8179 9.88799 11.9636C9.32844 12.2409 8.6715 12.2409 8.11195 11.9636C7.81785 11.8179 7.54522 11.5452 6.99995 11L2 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 17.9999V12M22 17.9999H16M22 17.9999L15 11C14.4548 10.4547 14.1821 10.1821 13.888 10.0363C13.3285 9.75905 12.6715 9.75905 12.112 10.0363C11.8179 10.1821 11.5452 10.4547 11 11V11C10.4547 11.5452 10.1821 11.8179 9.88799 11.9636C9.32844 12.2409 8.6715 12.2409 8.11195 11.9636C7.81785 11.8179 7.54522 11.5452 6.99995 11L2 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 17.9999V12M22 17.9999H16M22 17.9999L15 11C14.4548 10.4547 14.1821 10.1821 13.888 10.0363C13.3285 9.75905 12.6715 9.75905 12.112 10.0363C11.8179 10.1821 11.5452 10.4547 11 11V11C10.4547 11.5452 10.1821 11.8179 9.88799 11.9636C9.32844 12.2409 8.6715 12.2409 8.11195 11.9636C7.81785 11.8179 7.54522 11.5452 6.99995 11L2 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 17.9999V12M22 17.9999H16M22 17.9999L17.5 13.4999M2 6L6.99995 11C7.54522 11.5452 7.81785 11.8179 8.11195 11.9636C8.6715 12.2409 9.32844 12.2409 9.88799 11.9636C10.1821 11.8179 10.4547 11.5452 11 11L11.5 10.4999C11.5797 10.4203 11.6195 10.3805 11.6547 10.3484C12.4176 9.65502 13.5824 9.65502 14.3453 10.3484C14.3805 10.3805 14.4203 10.4203 14.5 10.4999V10.4999L15.0001 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 17.9999V12M22 17.9999H16M22 17.9999L15 11C14.4548 10.4547 14.1821 10.1821 13.888 10.0363C13.3285 9.75905 12.6715 9.75905 12.112 10.0363C11.8179 10.1821 11.5452 10.4547 11 11V11C10.4547 11.5452 10.1821 11.8179 9.88799 11.9636C9.32844 12.2409 8.6715 12.2409 8.11195 11.9636C7.81785 11.8179 7.54522 11.5452 6.99995 11L2 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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