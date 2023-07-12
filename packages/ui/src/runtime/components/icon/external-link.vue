<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M12 12L21 3M21 3H15M21 3V9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 3H9.5V3C8.10547 3 7.40821 3 6.83277 3.13815C5.00453 3.57707 3.57707 5.00453 3.13815 6.83277C3 7.40821 3 8.10547 3 9.5V13C3 15.8003 3 17.2004 3.54497 18.27C4.02433 19.2108 4.78924 19.9757 5.73005 20.455C6.79961 21 8.19974 21 11 21H14.5C15.8945 21 16.5918 21 17.1672 20.8618C18.9955 20.4229 20.4229 18.9955 20.8618 17.1672C21 16.5918 21 15.8945 21 14.5V14.5V14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.12" d="M3 11C3 8.19974 3 6.79961 3.54497 5.73005C4.02433 4.78924 4.78924 4.02433 5.73005 3.54497C6.79961 3 8.19974 3 11 3H21V13C21 15.8003 21 17.2004 20.455 18.27C19.9757 19.2108 19.2108 19.9757 18.27 20.455C17.2004 21 15.8003 21 13 21H11C8.19974 21 6.79961 21 5.73005 20.455C4.78924 19.9757 4.02433 19.2108 3.54497 18.27C3 17.2004 3 15.8003 3 13V11Z" fill="currentColor"/>
<path d="M10 3H9.5V3C8.10547 3 7.40821 3 6.83277 3.13815C5.00453 3.57707 3.57707 5.00453 3.13815 6.83277C3 7.40821 3 8.10547 3 9.5V13C3 15.8003 3 17.2004 3.54497 18.27C4.02433 19.2108 4.78924 19.9757 5.73005 20.455C6.79961 21 8.19974 21 11 21H14.5C15.8945 21 16.5918 21 17.1672 20.8618C18.9955 20.4229 20.4229 18.9955 20.8618 17.1672C21 16.5918 21 15.8945 21 14.5V14.5V14M12 12L21 3M21 3H15M21 3V9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 3H9.5V3C8.10547 3 7.40821 3 6.83277 3.13815C5.00453 3.57707 3.57707 5.00453 3.13815 6.83277C3 7.40821 3 8.10547 3 9.5V13C3 15.8003 3 17.2004 3.54497 18.27C4.02433 19.2108 4.78924 19.9757 5.73005 20.455C6.79961 21 8.19974 21 11 21H14.5C15.8945 21 16.5918 21 17.1672 20.8618C18.9955 20.4229 20.4229 18.9955 20.8618 17.1672C21 16.5918 21 15.8945 21 14.5V14.5V14M12 12L21 3M21 3H15M21 3V9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 3H9.5V3C8.10547 3 7.40821 3 6.83277 3.13815C5.00453 3.57707 3.57707 5.00453 3.13815 6.83277C3 7.40821 3 8.10547 3 9.5V13C3 15.8003 3 17.2004 3.54497 18.27C4.02433 19.2108 4.78924 19.9757 5.73005 20.455C6.79961 21 8.19974 21 11 21H14.5C15.8945 21 16.5918 21 17.1672 20.8618C18.9955 20.4229 20.4229 18.9955 20.8618 17.1672C21 16.5918 21 15.8945 21 14.5V14.5V14M12 12L21 3M21 3H15M21 3V9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 3H9.5V3C8.10547 3 7.40821 3 6.83277 3.13815C5.00453 3.57707 3.57707 5.00453 3.13815 6.83277C3 7.40821 3 8.10547 3 9.5V9.5V10M21 14V14.5V14.5C21 15.8945 21 16.5918 20.8618 17.1672C20.4229 18.9955 18.9955 20.4229 17.1672 20.8618C16.5918 21 15.8945 21 14.5 21H9.5C8.10547 21 7.40821 21 6.83277 20.8618C5.00453 20.4229 3.57707 18.9955 3.13815 17.1672C3 16.5918 3 15.8945 3 14.5V14.5V14M21 3H15M21 3V9M21 3L17 7M12 12L14.5 9.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 3H9.5V3C8.10547 3 7.40821 3 6.83277 3.13815C5.00453 3.57707 3.57707 5.00453 3.13815 6.83277C3 7.40821 3 8.10547 3 9.5V13C3 15.8003 3 17.2004 3.54497 18.27C4.02433 19.2108 4.78924 19.9757 5.73005 20.455C6.79961 21 8.19974 21 11 21H14.5C15.8945 21 16.5918 21 17.1672 20.8618C18.9955 20.4229 20.4229 18.9955 20.8618 17.1672C21 16.5918 21 15.8945 21 14.5V14.5V14M12 12L21 3M21 3H15M21 3V9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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