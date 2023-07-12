<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M2 9H22M2 15H22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.12" x="2" y="2" width="20" height="20" rx="5" fill="currentColor"/>
<path d="M2 9H22M2 15H22M10 22H14C16.8003 22 18.2004 22 19.27 21.455C20.2108 20.9757 20.9757 20.2108 21.455 19.27C22 18.2004 22 16.8003 22 14V10C22 7.19974 22 5.79961 21.455 4.73005C20.9757 3.78924 20.2108 3.02433 19.27 2.54497C18.2004 2 16.8003 2 14 2H10C7.19974 2 5.79961 2 4.73005 2.54497C3.78924 3.02433 3.02433 3.78924 2.54497 4.73005C2 5.79961 2 7.19974 2 10V14C2 16.8003 2 18.2004 2.54497 19.27C3.02433 20.2108 3.78924 20.9757 4.73005 21.455C5.79961 22 7.19974 22 10 22Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.32">
<path d="M17.75 22.75H6.25C3.48858 22.75 1.25 20.5114 1.25 17.75C1.25 17.1977 1.69772 16.75 2.25 16.75H21.75C22.3023 16.75 22.75 17.1977 22.75 17.75C22.75 20.5114 20.5114 22.75 17.75 22.75Z" fill="currentColor"/>
<path d="M21.75 7.25H2.25C1.69772 7.25 1.25 6.80228 1.25 6.25C1.25 3.48858 3.48858 1.25 6.25 1.25H17.75C20.5114 1.25 22.75 3.48858 22.75 6.25C22.75 6.80228 22.3023 7.25 21.75 7.25Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.85 15.25C2.28995 15.25 2.00992 15.25 1.79601 15.141C1.60785 15.0451 1.45487 14.8922 1.35899 14.704C1.25 14.4901 1.25 14.2101 1.25 13.65V10.35C1.25 9.78995 1.25 9.50992 1.35899 9.29601C1.45487 9.10785 1.60785 8.95487 1.79601 8.85899C2.00992 8.75 2.28995 8.75 2.85 8.75H21.15C21.7101 8.75 21.9901 8.75 22.204 8.85899C22.3922 8.95487 22.5451 9.10785 22.641 9.29601C22.75 9.50992 22.75 9.78995 22.75 10.35V13.65C22.75 14.2101 22.75 14.4901 22.641 14.704C22.5451 14.8922 22.3922 15.0451 22.204 15.141C21.9901 15.25 21.7101 15.25 21.15 15.25H2.85Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.85 15.25C2.28995 15.25 2.00992 15.25 1.79601 15.141C1.60785 15.0451 1.45487 14.8922 1.35899 14.704C1.25 14.4901 1.25 14.2101 1.25 13.65V10.35C1.25 9.78995 1.25 9.50992 1.35899 9.29601C1.45487 9.10785 1.60785 8.95487 1.79601 8.85899C2.00992 8.75 2.28995 8.75 2.85 8.75H21.15C21.7101 8.75 21.9901 8.75 22.204 8.85899C22.3922 8.95487 22.5451 9.10785 22.641 9.29601C22.75 9.50992 22.75 9.78995 22.75 10.35V13.65C22.75 14.2101 22.75 14.4901 22.641 14.704C22.5451 14.8922 22.3922 15.0451 22.204 15.141C21.9901 15.25 21.7101 15.25 21.15 15.25H2.85ZM2.25 16.75C1.69772 16.75 1.25 17.1977 1.25 17.75V17.75C1.25 20.5114 3.48858 22.75 6.25 22.75H17.75C20.5114 22.75 22.75 20.5114 22.75 17.75V17.75C22.75 17.1977 22.3023 16.75 21.75 16.75H2.25ZM22.75 6.25C22.75 6.80228 22.3023 7.25 21.75 7.25H2.25C1.69772 7.25 1.25 6.80228 1.25 6.25V6.25C1.25 3.48858 3.48858 1.25 6.25 1.25H17.75C20.5114 1.25 22.75 3.48858 22.75 6.25V6.25Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9H22M18 15H2V10C2 7.19974 2 5.79961 2.54497 4.73005C3.02433 3.78924 3.78924 3.02433 4.73005 2.54497C5.79961 2 7.19974 2 10 2H14C16.8003 2 18.2004 2 19.27 2.54497C20.2108 3.02433 20.9757 3.78924 21.455 4.73005C22 5.79961 22 7.19974 22 10V14C22 16.8003 22 18.2004 21.455 19.27C20.9757 20.2108 20.2108 20.9757 19.27 21.455C18.2004 22 16.8003 22 14 22H10C7.19974 22 5.79961 22 4.73005 21.455C3.78924 20.9757 3.02433 20.2108 2.54497 19.27" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9H22M2 15H22M10 22H14C16.8003 22 18.2004 22 19.27 21.455C20.2108 20.9757 20.9757 20.2108 21.455 19.27C22 18.2004 22 16.8003 22 14V10C22 7.19974 22 5.79961 21.455 4.73005C20.9757 3.78924 20.2108 3.02433 19.27 2.54497C18.2004 2 16.8003 2 14 2H10C7.19974 2 5.79961 2 4.73005 2.54497C3.78924 3.02433 3.02433 3.78924 2.54497 4.73005C2 5.79961 2 7.19974 2 10V14C2 16.8003 2 18.2004 2.54497 19.27C3.02433 20.2108 3.78924 20.9757 4.73005 21.455C5.79961 22 7.19974 22 10 22Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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