<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M18 12L23 7M18 7L23 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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
<path d="M18 12L20.5 9.5M20.5 9.5L23 7M20.5 9.5L18 7M20.5 9.5L23 12M13 6C13 8.20914 11.2091 10 9 10C6.79086 10 5 8.20914 5 6C5 3.79086 6.79086 2 9 2C11.2091 2 13 3.79086 13 6ZM5.2 22H12.8C14.5673 22 16 20.5673 16 18.8V18.8C16 16.149 13.851 14 11.2 14H6.8C4.14903 14 2 16.149 2 18.8V18.8C2 20.5673 3.43269 22 5.2 22Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" d="M4.25 6C4.25 3.37665 6.37665 1.25 9 1.25C11.6234 1.25 13.75 3.37665 13.75 6C13.75 8.62335 11.6234 10.75 9 10.75C6.37665 10.75 4.25 8.62335 4.25 6Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.5303 6.46967C18.2374 6.17678 17.7626 6.17678 17.4697 6.46967C17.1768 6.76256 17.1768 7.23744 17.4697 7.53033L19.4393 9.5L17.4697 11.4697C17.1768 11.7626 17.1768 12.2374 17.4697 12.5303C17.7626 12.8232 18.2374 12.8232 18.5303 12.5303L20.5 10.5607L22.4697 12.5303C22.7626 12.8232 23.2374 12.8232 23.5303 12.5303C23.8232 12.2374 23.8232 11.7626 23.5303 11.4697L21.5607 9.5L23.5303 7.53033C23.8232 7.23744 23.8232 6.76256 23.5303 6.46967C23.2374 6.17678 22.7626 6.17678 22.4697 6.46967L20.5 8.43934L18.5303 6.46967ZM1.25 18.95C1.25 15.802 3.80198 13.25 6.95 13.25H11.05C14.198 13.25 16.75 15.802 16.75 18.95C16.75 21.0487 15.0487 22.75 12.95 22.75H5.05C2.95132 22.75 1.25 21.0487 1.25 18.95Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9 1.25C6.37665 1.25 4.25 3.37665 4.25 6C4.25 8.62335 6.37665 10.75 9 10.75C11.6234 10.75 13.75 8.62335 13.75 6C13.75 3.37665 11.6234 1.25 9 1.25ZM1.25 18.95C1.25 15.802 3.80198 13.25 6.95 13.25H11.05C14.198 13.25 16.75 15.802 16.75 18.95C16.75 21.0487 15.0487 22.75 12.95 22.75H5.05C2.95132 22.75 1.25 21.0487 1.25 18.95ZM18.5303 6.46967C18.2374 6.17678 17.7626 6.17678 17.4697 6.46967C17.1768 6.76256 17.1768 7.23744 17.4697 7.53033L19.4393 9.5L17.4697 11.4697C17.1768 11.7626 17.1768 12.2374 17.4697 12.5303C17.7626 12.8232 18.2374 12.8232 18.5303 12.5303L20.5 10.5607L22.4697 12.5303C22.7626 12.8232 23.2374 12.8232 23.5303 12.5303C23.8232 12.2374 23.8232 11.7626 23.5303 11.4697L21.5607 9.5L23.5303 7.53033C23.8232 7.23744 23.8232 6.76256 23.5303 6.46967C23.2374 6.17678 22.7626 6.17678 22.4697 6.46967L20.5 8.43934L18.5303 6.46967Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.5 22H5.2C3.43269 22 2 20.5673 2 18.8V18.8C2 16.149 4.14903 14 6.8 14H11.2C13.851 14 16 16.149 16 18.8V18.8C16 20.5673 14.5673 22 12.8 22H11.5M18 12L20.5 9.5M20.5 9.5L23 7M20.5 9.5L18 7M20.5 9.5L23 12M13 6C13 8.20914 11.2091 10 9 10C6.79086 10 5 8.20914 5 6C5 3.79086 6.79086 2 9 2C11.2091 2 13 3.79086 13 6Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 12L20.5 9.5M20.5 9.5L23 7M20.5 9.5L18 7M20.5 9.5L23 12M13 6C13 8.20914 11.2091 10 9 10C6.79086 10 5 8.20914 5 6C5 3.79086 6.79086 2 9 2C11.2091 2 13 3.79086 13 6ZM5.2 22H12.8C14.5673 22 16 20.5673 16 18.8V18.8C16 16.149 13.851 14 11.2 14H6.8C4.14903 14 2 16.149 2 18.8V18.8C2 20.5673 3.43269 22 5.2 22Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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