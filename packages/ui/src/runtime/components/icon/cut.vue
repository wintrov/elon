<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2546_6083)">
<path opacity="0.4" d="M7.00003 14.0001L17.5 1.50006M17.5 14.0001L12.25 7.75006M10.36 5.50006L7.00003 1.50006" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 18.0001C22 20.2092 20.2092 22.0001 18 22.0001C15.7909 22.0001 14 20.2092 14 18.0001C14 15.7909 15.7909 14.0001 18 14.0001C20.2092 14.0001 22 15.7909 22 18.0001Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 18.0001C10 20.2092 8.20917 22.0001 6.00003 22.0001C3.79089 22.0001 2.00003 20.2092 2.00003 18.0001C2.00003 15.7909 3.79089 14.0001 6.00003 14.0001C8.20917 14.0001 10 15.7909 10 18.0001Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_2546_6083">
<rect :width="width" :height="height" fill="white"/>
</clipPath>
</defs>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2546_6083)">
<g opacity="0.12">
<path d="M22 18.0001C22 20.2092 20.2092 22.0001 18 22.0001C15.7909 22.0001 14 20.2092 14 18.0001C14 15.7909 15.7909 14.0001 18 14.0001C20.2092 14.0001 22 15.7909 22 18.0001Z" fill="currentColor"/>
<path d="M10 18.0001C10 20.2092 8.20917 22.0001 6.00003 22.0001C3.79089 22.0001 2.00003 20.2092 2.00003 18.0001C2.00003 15.7909 3.79089 14.0001 6.00003 14.0001C8.20917 14.0001 10 15.7909 10 18.0001Z" fill="currentColor"/>
</g>
<path d="M7.00006 14.0001L17.5001 1.50012M17.5001 14.0001L12.2501 7.75012M10.3601 5.50012L7.00006 1.50012M22 18C22 20.2092 20.2092 22 18 22C15.7909 22 14 20.2092 14 18C14 15.7909 15.7909 14 18 14C20.2092 14 22 15.7909 22 18ZM10.0001 18.0001C10.0001 20.2093 8.2092 22.0001 6.00006 22.0001C3.79092 22.0001 2.00006 20.2093 2.00006 18.0001C2.00006 15.791 3.79092 14.0001 6.00006 14.0001C8.2092 14.0001 10.0001 15.791 10.0001 18.0001Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_2546_6083">
<rect :width="width" :height="height" fill="white"/>
</clipPath>
</defs>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2546_6083)">
<path opacity="0.32" fill-rule="evenodd" clip-rule="evenodd" d="M6.51768 0.925678C6.83485 0.659259 7.30794 0.700397 7.57436 1.01756L10.9344 5.01756C11.2008 5.33473 11.1596 5.80782 10.8425 6.07424C10.5253 6.34065 10.0522 6.29952 9.7858 5.98235L6.4258 1.98235C6.15938 1.66519 6.20052 1.1921 6.51768 0.925678ZM17.9864 0.929024C18.3017 1.19763 18.3396 1.67099 18.071 1.98631L13.1851 7.72194L17.398 13.0339C17.6554 13.3584 17.601 13.8302 17.2765 14.0876C16.9519 14.345 16.4802 14.2905 16.2228 13.966L12.1937 8.8858L8.35463 13.3925L7.84879 13.9863C7.58019 14.3016 7.10683 14.3395 6.79151 14.0709C6.47619 13.8023 6.43832 13.3289 6.70693 13.0136L7.21276 12.4198L16.9291 1.01361C17.1978 0.698289 17.6711 0.66042 17.9864 0.929024Z" fill="currentColor"/>
<path d="M18.0001 13.25C15.3768 13.25 13.2501 15.3766 13.2501 18C13.2501 20.6234 15.3768 22.75 18.0001 22.75C20.6235 22.75 22.7501 20.6234 22.7501 18C22.7501 15.3766 20.6235 13.25 18.0001 13.25Z" fill="currentColor"/>
<path d="M6.00012 13.25C3.37677 13.25 1.25012 15.3766 1.25012 18C1.25012 20.6234 3.37677 22.75 6.00012 22.75C8.62347 22.75 10.7501 20.6234 10.7501 18C10.7501 15.3766 8.62347 13.25 6.00012 13.25Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2546_6083">
<rect :width="width" :height="height" fill="white"/>
</clipPath>
</defs>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2546_6083)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.57427 1.01762C7.30785 0.700459 6.83476 0.659321 6.5176 0.92574C6.20043 1.19216 6.15929 1.66525 6.42571 1.98241L9.78571 5.98241C10.0521 6.29958 10.5252 6.34072 10.8424 6.0743C11.1596 5.80788 11.2007 5.33479 10.9343 5.01762L7.57427 1.01762ZM18.0709 1.98637C18.3395 1.67105 18.3017 1.19769 17.9863 0.929086C17.671 0.660482 17.1977 0.698351 16.9291 1.01367L6.48471 13.2744C6.32534 13.2583 6.16363 13.25 6 13.25C3.37664 13.25 1.25 15.3766 1.25 18C1.25 20.6234 3.37664 22.75 6 22.75C8.62335 22.75 10.75 20.6234 10.75 18C10.75 16.1194 9.65712 14.4941 8.07182 13.7244L12.1936 8.88586L16.0029 13.689C14.3773 14.4433 13.25 16.09 13.25 18C13.25 20.6234 15.3766 22.75 18 22.75C20.6233 22.75 22.75 20.6234 22.75 18C22.75 15.3766 20.6233 13.25 18 13.25C17.8597 13.25 17.7208 13.2561 17.5836 13.268L13.185 7.722L18.0709 1.98637Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2546_6083">
<rect :width="width" :height="height" fill="white"/>
</clipPath>
</defs>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2546_6083)">
<path d="M14 18.0001C14 20.2093 15.7909 22.0001 18 22.0001C20.2092 22.0001 22 20.2093 22 18.0001C22 15.791 20.2092 14.0001 18 14.0001C16.9856 14.0001 16.0593 14.3778 15.3542 15.0001M7.00003 14.0001L17.5 1.50012M17.5 14.0001L12.25 7.75012M10.36 5.50012L7.00003 1.50012M10 18.0001C10 20.2093 8.20917 22.0001 6.00003 22.0001C3.79089 22.0001 2.00003 20.2093 2.00003 18.0001C2.00003 15.791 3.79089 14.0001 6.00003 14.0001C8.20917 14.0001 10 15.791 10 18.0001Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_2546_6083">
<rect :width="width" :height="height" fill="white"/>
</clipPath>
</defs>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2546_6083)">
<path d="M7.00003 14.0001L17.5 1.50012M17.5 14.0001L12.25 7.75012M10.36 5.50012L7.00003 1.50012M22 18.0001C22 20.2093 20.2092 22.0001 18 22.0001C15.7909 22.0001 14 20.2093 14 18.0001C14 15.791 15.7909 14.0001 18 14.0001C20.2092 14.0001 22 15.791 22 18.0001ZM10 18.0001C10 20.2093 8.20917 22.0001 6.00003 22.0001C3.79089 22.0001 2.00003 20.2093 2.00003 18.0001C2.00003 15.791 3.79089 14.0001 6.00003 14.0001C8.20917 14.0001 10 15.791 10 18.0001Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_2546_6083">
<rect :width="width" :height="height" fill="white"/>
</clipPath>
</defs>
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