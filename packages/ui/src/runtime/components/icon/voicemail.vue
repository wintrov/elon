<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M18 16C20.2091 16 22 14.2091 22 12C22 9.79086 20.2091 8 18 8C15.7909 8 14 9.79086 14 12C14 14.2091 15.7909 16 18 16ZM18 16H12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 16C8.20914 16 10 14.2091 10 12C10 9.79086 8.20914 8 6 8C3.79086 8 2 9.79086 2 12C2 14.2091 3.79086 16 6 16ZM6 16H12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.12">
<path d="M10 12C10 14.2091 8.20914 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C8.20914 8 10 9.79086 10 12Z" fill="currentColor"/>
<path d="M22 12C22 14.2091 20.2091 16 18 16C15.7909 16 14 14.2091 14 12C14 9.79086 15.7909 8 18 8C20.2091 8 22 9.79086 22 12Z" fill="currentColor"/>
</g>
<path d="M6 16C8.20914 16 10 14.2091 10 12C10 9.79086 8.20914 8 6 8C3.79086 8 2 9.79086 2 12C2 14.2091 3.79086 16 6 16ZM6 16H18M18 16C20.2091 16 22 14.2091 22 12C22 9.79086 20.2091 8 18 8C15.7909 8 14 9.79086 14 12C14 14.2091 15.7909 16 18 16Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" d="M9.46412 15.25C8.59758 16.1733 7.36614 16.75 6 16.75H18C20.6234 16.75 22.75 14.6234 22.75 12C22.75 9.37665 20.6234 7.25 18 7.25C15.3766 7.25 13.25 9.37665 13.25 12C13.25 13.2572 13.7384 14.4003 14.5359 15.25H9.46412Z" fill="currentColor"/>
<path d="M6 7.25C3.37665 7.25 1.25 9.37665 1.25 12C1.25 14.6234 3.37665 16.75 6 16.75C8.62335 16.75 10.75 14.6234 10.75 12C10.75 9.37665 8.62335 7.25 6 7.25Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.46412 15.25C10.2616 14.4003 10.75 13.2572 10.75 12C10.75 9.37665 8.62335 7.25 6 7.25C3.37665 7.25 1.25 9.37665 1.25 12C1.25 14.6234 3.37665 16.75 6 16.75H18C20.6234 16.75 22.75 14.6234 22.75 12C22.75 9.37665 20.6234 7.25 18 7.25C15.3766 7.25 13.25 9.37665 13.25 12C13.25 13.2572 13.7384 14.4003 14.5359 15.25H9.46412Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 16C8.20914 16 10 14.2091 10 12C10 9.79086 8.20914 8 6 8C3.79086 8 2 9.79086 2 12C2 14.2091 3.79086 16 6 16ZM6 16H18M18 16C20.2091 16 22 14.2091 22 12C22 11.2714 21.8052 10.5883 21.4649 10M18 16C15.7909 16 14 14.2091 14 12C14 9.79086 15.7909 8 18 8C18.3453 8 18.6804 8.04375 19 8.12602" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 16C8.20914 16 10 14.2091 10 12C10 9.79086 8.20914 8 6 8C3.79086 8 2 9.79086 2 12C2 14.2091 3.79086 16 6 16ZM6 16H18M18 16C20.2091 16 22 14.2091 22 12C22 9.79086 20.2091 8 18 8C15.7909 8 14 9.79086 14 12C14 14.2091 15.7909 16 18 16Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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