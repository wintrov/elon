<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M10 3H6.4C5.55992 3 5.13988 3 4.81901 3.16349C4.53677 3.3073 4.3073 3.53677 4.16349 3.81901C4 4.13988 4 4.55992 4 5.4V9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 12H15.5C17.9853 12 20 14.0147 20 16.5V16.5C20 18.9853 17.9853 21 15.5 21H5.77778C4.79594 21 4 20.2041 4 19.2222V12ZM4 12H12.5C14.9853 12 17 9.98528 17 7.5V7.5C17 5.01472 14.9853 3 12.5 3H9M4 12V8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 12H15.5C17.9853 12 20 14.0147 20 16.5V16.5C20 18.9853 17.9853 21 15.5 21H5.77778C4.79594 21 4 20.2041 4 19.2222V12ZM4 12H12.5C14.9853 12 17 9.98528 17 7.5V7.5C17 5.01472 14.9853 3 12.5 3H5.44444C4.6467 3 4 3.6467 4 4.44444V12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 12H15.5C17.9853 12 20 14.0147 20 16.5V16.5C20 18.9853 17.9853 21 15.5 21H5.77778C4.79594 21 4 20.2041 4 19.2222V12ZM4 12H12.5C14.9853 12 17 9.98528 17 7.5V7.5C17 5.01472 14.9853 3 12.5 3H5.44444C4.6467 3 4 3.6467 4 4.44444V12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 12H15.5C17.9853 12 20 14.0147 20 16.5V16.5C20 18.9853 17.9853 21 15.5 21H5.77778C4.79594 21 4 20.2041 4 19.2222V12ZM4 12H12.5C14.9853 12 17 9.98528 17 7.5V7.5C17 5.01472 14.9853 3 12.5 3H5.44444C4.6467 3 4 3.6467 4 4.44444V12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.3284 12.9999C18.6808 13.2851 18.9892 13.6223 19.242 13.9999C19.7206 14.715 19.9998 15.5749 19.9998 16.4999C19.9998 18.9852 17.985 20.9999 15.4998 20.9999H5.77753C4.79569 20.9999 3.99976 20.204 3.99976 19.2222V4.44438C3.99976 3.64664 4.64646 2.99994 5.4442 2.99994H12.4998C14.985 2.99994 16.9998 5.01466 16.9998 7.49994C16.9998 9.98522 14.985 11.9999 12.4998 11.9999H7.99976" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 12H15.5C17.9853 12 20 14.0147 20 16.5V16.5C20 18.9853 17.9853 21 15.5 21H5.77778C4.79594 21 4 20.2041 4 19.2222V12ZM4 12H12.5C14.9853 12 17 9.98528 17 7.5V7.5C17 5.01472 14.9853 3 12.5 3H5.44444C4.6467 3 4 3.6467 4 4.44444V12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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