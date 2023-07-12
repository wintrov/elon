<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M12 7V17M12 7H8M12 7H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.12" x="2" y="2" width="20" height="20" rx="5" fill="currentColor"/>
<path d="M12 7V17M12 7H8M12 7H16M10 22H14C16.8003 22 18.2004 22 19.27 21.455C20.2108 20.9757 20.9757 20.2108 21.455 19.27C22 18.2004 22 16.8003 22 14V10C22 7.19974 22 5.79961 21.455 4.73005C20.9757 3.78924 20.2108 3.02433 19.27 2.54497C18.2004 2 16.8003 2 14 2H10C7.19974 2 5.79961 2 4.73005 2.54497C3.78924 3.02433 3.02433 3.78924 2.54497 4.73005C2 5.79961 2 7.19974 2 10V14C2 16.8003 2 18.2004 2.54497 19.27C3.02433 20.2108 3.78924 20.9757 4.73005 21.455C5.79961 22 7.19974 22 10 22Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" d="M9.25 1.25C6.44974 1.25 5.04961 1.25 3.98005 1.79497C3.03924 2.27433 2.27433 3.03924 1.79497 3.98005C1.25 5.04961 1.25 6.44974 1.25 9.25V14.75C1.25 17.5503 1.25 18.9504 1.79497 20.02C2.27433 20.9608 3.03924 21.7257 3.98005 22.205C5.04961 22.75 6.44974 22.75 9.25 22.75H14.75C17.5503 22.75 18.9504 22.75 20.02 22.205C20.9608 21.7257 21.7257 20.9608 22.205 20.02C22.75 18.9504 22.75 17.5503 22.75 14.75V9.25C22.75 6.44974 22.75 5.04961 22.205 3.98005C21.7257 3.03924 20.9608 2.27433 20.02 1.79497C18.9504 1.25 17.5503 1.25 14.75 1.25H9.25Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.25 7C7.25 6.58579 7.58579 6.25 8 6.25H12H16C16.4142 6.25 16.75 6.58579 16.75 7C16.75 7.41421 16.4142 7.75 16 7.75H12.75V17C12.75 17.4142 12.4142 17.75 12 17.75C11.5858 17.75 11.25 17.4142 11.25 17V7.75H8C7.58579 7.75 7.25 7.41421 7.25 7Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.98005 1.79497C5.04961 1.25 6.44974 1.25 9.25 1.25H14.75C17.5503 1.25 18.9504 1.25 20.02 1.79497C20.9608 2.27433 21.7257 3.03924 22.205 3.98005C22.75 5.04961 22.75 6.44974 22.75 9.25V14.75C22.75 17.5503 22.75 18.9504 22.205 20.02C21.7257 20.9608 20.9608 21.7257 20.02 22.205C18.9504 22.75 17.5503 22.75 14.75 22.75H9.25C6.44974 22.75 5.04961 22.75 3.98005 22.205C3.03924 21.7257 2.27433 20.9608 1.79497 20.02C1.25 18.9504 1.25 17.5503 1.25 14.75V9.25C1.25 6.44974 1.25 5.04961 1.79497 3.98005C2.27433 3.03924 3.03924 2.27433 3.98005 1.79497ZM8 6.25C7.58579 6.25 7.25 6.58579 7.25 7C7.25 7.41421 7.58579 7.75 8 7.75H11.25V17C11.25 17.4142 11.5858 17.75 12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V7.75H16C16.4142 7.75 16.75 7.41421 16.75 7C16.75 6.58579 16.4142 6.25 16 6.25H12H8Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.5 2L9 2V2C7.13872 2 6.20808 2 5.45492 2.24472C3.93273 2.73931 2.73931 3.93273 2.24472 5.45492C2 6.20808 2 7.13872 2 9L2 14C2 16.8003 2 18.2004 2.54497 19.27C3.02434 20.2108 3.78924 20.9757 4.73005 21.455C5.79961 22 7.19974 22 10 22H14C16.8003 22 18.2004 22 19.27 21.455C20.2108 20.9757 20.9757 20.2108 21.455 19.27C22 18.2004 22 16.8003 22 14V9C22 7.13872 22 6.20808 21.7553 5.45492C21.2607 3.93273 20.0673 2.73931 18.5451 2.24472C17.7919 2 16.8613 2 15 2V2L14.5 2M12 7V17M12 7H8M12 7H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 7V17M12 7H8M12 7H16M10 22H14C16.8003 22 18.2004 22 19.27 21.455C20.2108 20.9757 20.9757 20.2108 21.455 19.27C22 18.2004 22 16.8003 22 14V10C22 7.19974 22 5.79961 21.455 4.73005C20.9757 3.78924 20.2108 3.02433 19.27 2.54497C18.2004 2 16.8003 2 14 2H10C7.19974 2 5.79961 2 4.73005 2.54497C3.78924 3.02433 3.02433 3.78924 2.54497 4.73005C2 5.79961 2 7.19974 2 10V14C2 16.8003 2 18.2004 2.54497 19.27C3.02433 20.2108 3.78924 20.9757 4.73005 21.455C5.79961 22 7.19974 22 10 22Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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