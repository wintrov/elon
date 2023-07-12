<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M9 5H10.5M9 8H10.5M9 11H10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 13V5C15 3.34315 13.6569 2 12 2C10.3431 2 9 3.34315 9 5V13C7.78583 13.9122 7 15.3644 7 17C7 19.7614 9.23858 22 12 22C14.7614 22 17 19.7614 17 17C17 15.3644 16.2142 13.9122 15 13Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.12" d="M15 13V5.00007C15 3.34318 13.6568 2 11.9999 2C10.3431 2 8.99994 3.34309 8.99987 4.99993L8.99951 13C7.78534 13.9122 7 15.3644 7 17C7 19.7614 9.23858 22 12 22C14.7614 22 17 19.7614 17 17C17 15.3644 16.2142 13.9122 15 13Z" fill="currentColor"/>
<path d="M9 5H10.5M9 8H10.5M9 11H10.5M15 13V5C15 3.34315 13.6569 2 12 2V2C10.3431 2 9 3.34315 9 5V13C7.78583 13.9122 7 15.3644 7 17C7 19.7614 9.23858 22 12 22C14.7614 22 17 19.7614 17 17C17 15.3644 16.2142 13.9122 15 13Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" d="M11.9999 1.25C9.92888 1.25 8.24994 2.92888 8.24987 4.99993L8.2496 12.6413C7.02634 13.6949 6.25 15.2569 6.25 17C6.25 20.1756 8.82436 22.75 12 22.75C15.1756 22.75 17.75 20.1756 17.75 17C17.75 15.2568 16.9732 13.6949 15.75 12.6414V5.00007C15.75 2.92896 14.071 1.25 11.9999 1.25V1.25Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 4.25H9H11C11.4142 4.25 11.75 4.58579 11.75 5C11.75 5.41421 11.4142 5.75 11 5.75H9H8.25V4.25ZM8.25 7.25H9H11C11.4142 7.25 11.75 7.58579 11.75 8C11.75 8.41421 11.4142 8.75 11 8.75H9H8.25V7.25ZM8.25 10.25H9H11C11.4142 10.25 11.75 10.5858 11.75 11C11.75 11.4142 11.4142 11.75 11 11.75H9H8.25V10.25Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.24987 4.99993C8.24994 2.92888 9.92888 1.25 11.9999 1.25C14.071 1.25 15.75 2.92896 15.75 5.00007V12.6414C16.9732 13.6949 17.75 15.2568 17.75 17C17.75 20.1756 15.1756 22.75 12 22.75C8.82436 22.75 6.25 20.1756 6.25 17C6.25 15.2569 7.02634 13.6949 8.2496 12.6413L8.24987 4.99993ZM10 4.25C9.58579 4.25 9.25 4.58579 9.25 5C9.25 5.41421 9.58579 5.75 10 5.75H11C11.4142 5.75 11.75 5.41421 11.75 5C11.75 4.58579 11.4142 4.25 11 4.25H10ZM10 7.25C9.58579 7.25 9.25 7.58579 9.25 8C9.25 8.41421 9.58579 8.75 10 8.75H11C11.4142 8.75 11.75 8.41421 11.75 8C11.75 7.58579 11.4142 7.25 11 7.25H10ZM10 10.25C9.58579 10.25 9.25 10.5858 9.25 11C9.25 11.4142 9.58579 11.75 10 11.75H11C11.4142 11.75 11.75 11.4142 11.75 11C11.75 10.5858 11.4142 10.25 11 10.25H10Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 9V8.5V5C15 3.34315 13.6569 2 12 2V2C10.3431 2 9 3.34315 9 5V13C7.78583 13.9122 7 15.3644 7 17C7 19.7614 9.23858 22 12 22C14.7614 22 17 19.7614 17 17C17 15.3644 16.2147 13.9122 15.0005 13M9 5H10.5M9 8H10.5M9 11H10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 5H10.5M9 8H10.5M9 11H10.5M15 13V5C15 3.34315 13.6569 2 12 2V2C10.3431 2 9 3.34315 9 5V13C7.78583 13.9122 7 15.3644 7 17C7 19.7614 9.23858 22 12 22C14.7614 22 17 19.7614 17 17C17 15.3644 16.2142 13.9122 15 13Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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