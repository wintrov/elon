<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M5 4H20L18.4311 7.13783C17.9064 8.18729 17.644 8.71202 17.5407 9.26241C17.4493 9.74988 17.4493 10.2501 17.5407 10.7376C17.644 11.288 17.9064 11.8127 18.4311 12.8622L20 16H5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 22V2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.12" d="M20 4H5V16H20L18.4311 12.8622C17.9064 11.8127 17.644 11.288 17.5407 10.7376C17.4493 10.2501 17.4493 9.74988 17.5407 9.26241C17.644 8.71202 17.9064 8.18729 18.4311 7.13784L18.4311 7.13783L20 4Z" fill="currentColor"/>
<path d="M5 4H20L18.4311 7.13783C17.9064 8.18729 17.644 8.71202 17.5407 9.26241C17.4493 9.74988 17.4493 10.2501 17.5407 10.7376C17.644 11.288 17.9064 11.8127 18.4311 12.8622L20 16H5M5 4V16M5 4V2M5 22V16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" d="M4.25 3.25V16.75H19.9191C20.3477 16.75 20.562 16.75 20.6911 16.6597C20.8038 16.5809 20.879 16.4591 20.8991 16.3231C20.9222 16.1673 20.8263 15.9756 20.6346 15.5922L19.2696 12.8622C18.7449 11.8127 18.4825 11.288 18.3793 10.7376C18.2878 10.2501 18.2878 9.74988 18.3793 9.26241C18.4825 8.71202 18.7449 8.18729 19.2696 7.13783L20.6346 4.40777C20.8263 4.02441 20.9222 3.83273 20.8991 3.67692C20.879 3.54086 20.8038 3.4191 20.6911 3.34027C20.562 3.25 20.3477 3.25 19.9191 3.25H4.25Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 1.25C5.41421 1.25 5.75 1.58579 5.75 2V4V16V22C5.75 22.4142 5.41421 22.75 5 22.75C4.58579 22.75 4.25 22.4142 4.25 22V16V4V2C4.25 1.58579 4.58579 1.25 5 1.25Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.75 2C5.75 1.58579 5.41421 1.25 5 1.25C4.58579 1.25 4.25 1.58579 4.25 2V4V16V22C4.25 22.4142 4.58579 22.75 5 22.75C5.41421 22.75 5.75 22.4142 5.75 22V16.75H20C20.2599 16.75 20.5013 16.6154 20.638 16.3943C20.7746 16.1732 20.7871 15.8971 20.6708 15.6646L19.1019 12.5268C18.5577 11.4384 18.3572 11.0222 18.2779 10.5993C18.2036 10.2032 18.2036 9.79678 18.2779 9.40071C18.3572 8.97777 18.5577 8.56158 19.1019 7.47324L20.6708 4.33541C20.7871 4.10292 20.7746 3.82681 20.638 3.6057C20.5013 3.38459 20.2599 3.25 20 3.25H5.75V2Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 4H20L18.4311 7.13783C17.9064 8.18729 17.644 8.71202 17.5407 9.26241C17.4493 9.74988 17.4493 10.2501 17.5407 10.7376C17.644 11.288 17.9064 11.8127 18.4311 12.8622L20 16H9M5 4V16V22M5 4V2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 4H20L18.4311 7.13783C17.9064 8.18729 17.644 8.71202 17.5407 9.26241C17.4493 9.74988 17.4493 10.2501 17.5407 10.7376C17.644 11.288 17.9064 11.8127 18.4311 12.8622L20 16H5M5 4V16M5 4V2M5 22V16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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