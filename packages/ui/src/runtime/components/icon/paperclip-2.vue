<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M10 7V14.5C10 15.8807 11.1193 17 12.5 17V17C13.8807 17 15 15.8807 15 14.5V9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 5V14.5C20 18.6421 16.6421 22 12.5 22V22C8.35786 22 5 18.6421 5 14.5L5 7C5 4.23858 7.23858 2 10 2V2C12.7614 2 15 4.23858 15 7V9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 5V14.5C20 18.6421 16.6421 22 12.5 22V22C8.35786 22 5 18.6421 5 14.5L5 7C5 4.23858 7.23858 2 10 2V2C12.7614 2 15 4.23858 15 7V14.5C15 15.8807 13.8807 17 12.5 17V17C11.1193 17 10 15.8807 10 14.5V7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 5V14.5C20 18.6421 16.6421 22 12.5 22V22C8.35786 22 5 18.6421 5 14.5L5 7C5 4.23858 7.23858 2 10 2V2C12.7614 2 15 4.23858 15 7V14.5C15 15.8807 13.8807 17 12.5 17V17C11.1193 17 10 15.8807 10 14.5V7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 5V14.5C20 18.6421 16.6421 22 12.5 22V22C8.35786 22 5 18.6421 5 14.5L5 7C5 4.23858 7.23858 2 10 2V2C12.7614 2 15 4.23858 15 7V14.5C15 15.8807 13.8807 17 12.5 17V17C11.1193 17 10 15.8807 10 14.5V7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 5V14.5C20 18.6421 16.6421 22 12.5 22V22C8.35786 22 5 18.6421 5 14.5V12.5V12M10 7V14.5C10 15.8807 11.1193 17 12.5 17V17C13.8807 17 15 15.8807 15 14.5V7C15 4.23858 12.7614 2 10 2V2C7.23858 2 5 4.23858 5 7V7.5V8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 5V14.5C20 18.6421 16.6421 22 12.5 22V22C8.35786 22 5 18.6421 5 14.5L5 7C5 4.23858 7.23858 2 10 2V2C12.7614 2 15 4.23858 15 7V14.5C15 15.8807 13.8807 17 12.5 17V17C11.1193 17 10 15.8807 10 14.5V7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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