<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M2 17.9999L6 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 6V12M22 6H16M22 6L15 13C14.4548 13.5452 14.1821 13.8179 13.888 13.9636C13.3285 14.2409 12.6715 14.2409 12.112 13.9636C11.8179 13.8179 11.5452 13.5452 11 13V13C10.4547 12.4547 10.1821 12.1821 9.88799 12.0364C9.32844 11.7591 8.6715 11.7591 8.11195 12.0364C7.81785 12.1821 7.54522 12.4547 6.99995 13L6.5 13.4999L6 13.9999" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 6V12M22 6H16M22 6L15 13C14.4548 13.5452 14.1821 13.8179 13.888 13.9636C13.3285 14.2409 12.6715 14.2409 12.112 13.9636C11.8179 13.8179 11.5452 13.5452 11 13V13C10.4547 12.4547 10.1821 12.1821 9.88799 12.0364C9.32844 11.7591 8.6715 11.7591 8.11195 12.0364C7.81785 12.1821 7.54522 12.4547 6.99995 13L2 17.9999" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 6V12M22 6H16M22 6L15 13C14.4548 13.5452 14.1821 13.8179 13.888 13.9636C13.3285 14.2409 12.6715 14.2409 12.112 13.9636C11.8179 13.8179 11.5452 13.5452 11 13V13C10.4547 12.4547 10.1821 12.1821 9.88799 12.0364C9.32844 11.7591 8.6715 11.7591 8.11195 12.0364C7.81785 12.1821 7.54522 12.4547 6.99995 13L2 17.9999" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 6V12M22 6H16M22 6L15 13C14.4548 13.5452 14.1821 13.8179 13.888 13.9636C13.3285 14.2409 12.6715 14.2409 12.112 13.9636C11.8179 13.8179 11.5452 13.5452 11 13V13C10.4547 12.4547 10.1821 12.1821 9.88799 12.0364C9.32844 11.7591 8.6715 11.7591 8.11195 12.0364C7.81785 12.1821 7.54522 12.4547 6.99995 13L2 17.9999" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 6V12M22 6H16M22 6L18 10M2 17.9999L6.99995 13C7.54522 12.4547 7.81785 12.1821 8.11195 12.0364C8.6715 11.7591 9.32844 11.7591 9.88799 12.0364C10.1821 12.1821 10.4547 12.4547 11 13V13C11.5452 13.5452 11.8179 13.8179 12.112 13.9636C12.6715 14.2409 13.3285 14.2409 13.888 13.9636C14.1821 13.8179 14.4548 13.5452 15 13V13L15.5 12.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 6V12M22 6H16M22 6L15 13C14.4548 13.5452 14.1821 13.8179 13.888 13.9636C13.3285 14.2409 12.6715 14.2409 12.112 13.9636C11.8179 13.8179 11.5452 13.5452 11 13V13C10.4547 12.4547 10.1821 12.1821 9.88799 12.0364C9.32844 11.7591 8.6715 11.7591 8.11195 12.0364C7.81785 12.1821 7.54522 12.4547 6.99995 13L2 17.9999" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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