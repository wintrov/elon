<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M17 10L19 12L23 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 18.8C2 16.149 4.14903 14 6.8 14H11.2C13.851 14 16 16.149 16 18.8V18.8C16 20.5673 14.5673 22 12.8 22H5.2C3.43269 22 2 20.5673 2 18.8V18.8Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 6C13 8.20914 11.2091 10 9 10C6.79086 10 5 8.20914 5 6C5 3.79086 6.79086 2 9 2C11.2091 2 13 3.79086 13 6Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.12">
<path d="M2 18.8C2 16.149 4.14903 14 6.8 14H11.2C13.851 14 16 16.149 16 18.8V18.8C16 20.5673 14.5673 22 12.8 22H5.2C3.43269 22 2 20.5673 2 18.8V18.8Z" fill="currentColor"/>
<path d="M13 6C13 8.20914 11.2091 10 9 10C6.79086 10 5 8.20914 5 6C5 3.79086 6.79086 2 9 2C11.2091 2 13 3.79086 13 6Z" fill="currentColor"/>
</g>
<path d="M17 10L19 12L23 8M13 6C13 8.20914 11.2091 10 9 10C6.79086 10 5 8.20914 5 6C5 3.79086 6.79086 2 9 2C11.2091 2 13 3.79086 13 6ZM5.2 22H12.8C14.5673 22 16 20.5673 16 18.8V18.8C16 16.149 13.851 14 11.2 14H6.8C4.14903 14 2 16.149 2 18.8V18.8C2 20.5673 3.43269 22 5.2 22Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" d="M4.25 6C4.25 3.37665 6.37665 1.25 9 1.25C11.6234 1.25 13.75 3.37665 13.75 6C13.75 8.62335 11.6234 10.75 9 10.75C6.37665 10.75 4.25 8.62335 4.25 6Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.5303 8.53033C23.8232 8.23744 23.8232 7.76256 23.5303 7.46967C23.2374 7.17678 22.7626 7.17678 22.4697 7.46967L19 10.9393L17.5303 9.46967C17.2374 9.17678 16.7626 9.17678 16.4697 9.46967C16.1768 9.76256 16.1768 10.2374 16.4697 10.5303L18.4697 12.5303C18.7626 12.8232 19.2374 12.8232 19.5303 12.5303L23.5303 8.53033ZM1.25 18.95C1.25 15.802 3.80198 13.25 6.95 13.25H11.05C14.198 13.25 16.75 15.802 16.75 18.95C16.75 21.0487 15.0487 22.75 12.95 22.75H5.05C2.95132 22.75 1.25 21.0487 1.25 18.95Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9 1.25C6.37665 1.25 4.25 3.37665 4.25 6C4.25 8.62335 6.37665 10.75 9 10.75C11.6234 10.75 13.75 8.62335 13.75 6C13.75 3.37665 11.6234 1.25 9 1.25ZM1.25 18.95C1.25 15.802 3.80198 13.25 6.95 13.25H11.05C14.198 13.25 16.75 15.802 16.75 18.95C16.75 21.0487 15.0487 22.75 12.95 22.75H5.05C2.95132 22.75 1.25 21.0487 1.25 18.95ZM23.5303 8.53033C23.8232 8.23744 23.8232 7.76256 23.5303 7.46967C23.2374 7.17678 22.7626 7.17678 22.4697 7.46967L19 10.9393L17.5303 9.46967C17.2374 9.17678 16.7626 9.17678 16.4697 9.46967C16.1768 9.76256 16.1768 10.2374 16.4697 10.5303L18.4697 12.5303C18.7626 12.8232 19.2374 12.8232 19.5303 12.5303L23.5303 8.53033Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.5 22H5.2C3.43269 22 2 20.5673 2 18.8V18.8C2 16.149 4.14903 14 6.8 14H11.2C13.851 14 16 16.149 16 18.8V18.8C16 20.5673 14.5673 22 12.8 22H11.5M17 10L19 12L23 8M13 6C13 8.20914 11.2091 10 9 10C6.79086 10 5 8.20914 5 6C5 3.79086 6.79086 2 9 2C11.2091 2 13 3.79086 13 6Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 10L19 12L23 8M13 6C13 8.20914 11.2091 10 9 10C6.79086 10 5 8.20914 5 6C5 3.79086 6.79086 2 9 2C11.2091 2 13 3.79086 13 6ZM5.2 22H12.8C14.5673 22 16 20.5673 16 18.8V18.8C16 16.149 13.851 14 11.2 14H6.8C4.14903 14 2 16.149 2 18.8V18.8C2 20.5673 3.43269 22 5.2 22Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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