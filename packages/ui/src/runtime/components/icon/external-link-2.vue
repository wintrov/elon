<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M12 12L22 2M22 2H17M22 2V7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 4H10C7.19974 4 5.79961 4 4.73005 4.54497C3.78924 5.02433 3.02433 5.78924 2.54497 6.73005C2 7.79961 2 9.19974 2 12V14C2 16.8003 2 18.2004 2.54497 19.27C3.02433 20.2108 3.78924 20.9757 4.73005 21.455C5.79961 22 7.19974 22 10 22H12C14.8003 22 16.2004 22 17.27 21.455C18.2108 20.9757 18.9757 20.2108 19.455 19.27C20 18.2004 20 16.8003 20 14V11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.12" x="2" y="4" width="18" height="18" rx="5" fill="currentColor"/>
<path d="M13 4H10C7.19974 4 5.79961 4 4.73005 4.54497C3.78924 5.02433 3.02433 5.78924 2.54497 6.73005C2 7.79961 2 9.19974 2 12V14C2 16.8003 2 18.2004 2.54497 19.27C3.02433 20.2108 3.78924 20.9757 4.73005 21.455C5.79961 22 7.19974 22 10 22H12C14.8003 22 16.2004 22 17.27 21.455C18.2108 20.9757 18.9757 20.2108 19.455 19.27C20 18.2004 20 16.8003 20 14V11M12 12L22 2M22 2H17M22 2V7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" d="M9.25 5.25C6.44974 5.25 5.04961 5.25 3.98005 5.79497C3.03924 6.27433 2.27433 7.03924 1.79497 7.98005C1.25 9.04961 1.25 10.4497 1.25 13.25V14.75C1.25 17.5503 1.25 18.9504 1.79497 20.02C2.27433 20.9608 3.03924 21.7257 3.98005 22.205C5.04961 22.75 6.44974 22.75 9.25 22.75H10.75C13.5503 22.75 14.9504 22.75 16.02 22.205C16.9608 21.7257 17.7257 20.9608 18.205 20.02C18.75 18.9504 18.75 17.5503 18.75 14.75V13.25C18.75 10.4497 18.75 9.04961 18.205 7.98005C17.7257 7.03924 16.9608 6.27433 16.02 5.79497C14.9504 5.25 13.5503 5.25 10.75 5.25H9.25Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17 2.75C16.5858 2.75 16.25 2.41421 16.25 2C16.25 1.58579 16.5858 1.25 17 1.25H22C22.4142 1.25 22.75 1.58579 22.75 2V7C22.75 7.41421 22.4142 7.75 22 7.75C21.5858 7.75 21.25 7.41421 21.25 7V3.81066L10.5303 14.5303C10.2374 14.8232 9.76256 14.8232 9.46967 14.5303C9.17678 14.2374 9.17678 13.7626 9.46967 13.4697L20.1893 2.75H17Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.25 2C16.25 2.41421 16.5858 2.75 17 2.75H20.1893L16.7152 6.22413C16.4966 6.06311 16.2642 5.91942 16.02 5.79497C14.9504 5.25 13.5503 5.25 10.75 5.25H9.25C6.44974 5.25 5.04961 5.25 3.98005 5.79497C3.03924 6.27433 2.27433 7.03924 1.79497 7.98005C1.25 9.04961 1.25 10.4497 1.25 13.25V14.75C1.25 17.5503 1.25 18.9504 1.79497 20.02C2.27433 20.9608 3.03924 21.7257 3.98005 22.205C5.04961 22.75 6.44974 22.75 9.25 22.75H10.75C13.5503 22.75 14.9504 22.75 16.02 22.205C16.9608 21.7257 17.7257 20.9608 18.205 20.02C18.75 18.9504 18.75 17.5503 18.75 14.75V13.25C18.75 10.4497 18.75 9.04961 18.205 7.98005C18.0806 7.7358 17.9369 7.50341 17.7759 7.28479L21.25 3.81066V7C21.25 7.41421 21.5858 7.75 22 7.75C22.4142 7.75 22.75 7.41421 22.75 7V2C22.75 1.58579 22.4142 1.25 22 1.25H17C16.5858 1.25 16.25 1.58579 16.25 2ZM17.7759 7.28479C17.4777 6.87994 17.1201 6.52233 16.7152 6.22413L9.46967 13.4697C9.17678 13.7626 9.17678 14.2374 9.46967 14.5303C9.76256 14.8232 10.2374 14.8232 10.5303 14.5303L17.7759 7.28479Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 4H8.5C7.10547 4 6.40821 4 5.83277 4.13815C4.00453 4.57707 2.57707 6.00453 2.13815 7.83277C2 8.40821 2 9.10547 2 10.5V10.5V11M20 11V14C20 16.8003 20 18.2004 19.455 19.27C18.9757 20.2108 18.2108 20.9757 17.27 21.455C16.2004 22 14.8003 22 12 22H8.5C7.10547 22 6.40821 22 5.83277 21.8618C4.00453 21.4229 2.57707 19.9955 2.13815 18.1672C2 17.5918 2 16.8945 2 15.5V15.5V15M22 2H17M22 2V7M22 2L17 7M12 12L14.5 9.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 4H10C7.19974 4 5.79961 4 4.73005 4.54497C3.78924 5.02433 3.02433 5.78924 2.54497 6.73005C2 7.79961 2 9.19974 2 12V14C2 16.8003 2 18.2004 2.54497 19.27C3.02433 20.2108 3.78924 20.9757 4.73005 21.455C5.79961 22 7.19974 22 10 22H12C14.8003 22 16.2004 22 17.27 21.455C18.2108 20.9757 18.9757 20.2108 19.455 19.27C20 18.2004 20 16.8003 20 14V11M12 12L22 2M22 2H17M22 2V7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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