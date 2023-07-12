<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M16 16H11.2C10.0799 16 9.51984 16 9.09202 15.782C8.71569 15.5903 8.40973 15.2843 8.21799 14.908C8 14.4802 8 13.9201 8 12.8V8M16 16V18M16 16H18M8 8V6M8 8H6M10.5 8H12.8C13.9201 8 14.4802 8 14.908 8.21799C15.2843 8.40973 15.5903 8.71569 15.782 9.09202C16 9.51984 16 10.0799 16 11.2V13.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 12C22 6.47715 17.5228 2 12 2L13.5 4.5M2 12C2 17.5228 6.47715 22 12 22L10.5 19.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.12" d="M8 8H12.8C13.9201 8 14.4802 8 14.908 8.21799C15.2843 8.40973 15.5903 8.71569 15.782 9.09202C16 9.51984 16 10.0799 16 11.2V16H11.2C10.0799 16 9.51984 16 9.09202 15.782C8.71569 15.5903 8.40973 15.2843 8.21799 14.908C8 14.4802 8 13.9201 8 12.8V8Z" fill="currentColor"/>
<path d="M16 16H11.2C10.0799 16 9.51984 16 9.09202 15.782C8.71569 15.5903 8.40973 15.2843 8.21799 14.908C8 14.4802 8 13.9201 8 12.8V8M16 16V18M16 16H18M8 8V6M8 8H6M10.5 8H12.8C13.9201 8 14.4802 8 14.908 8.21799C15.2843 8.40973 15.5903 8.71569 15.782 9.09202C16 9.51984 16 10.0799 16 11.2V13.5M2 12C2 17.5228 6.47715 22 12 22L10.5 19.5M22 12C22 6.47715 17.5228 2 12 2L13.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 16H11.2C10.0799 16 9.51984 16 9.09202 15.782C8.71569 15.5903 8.40973 15.2843 8.21799 14.908C8 14.4802 8 13.9201 8 12.8V8M16 16V18M16 16H18M8 8V6M8 8H6M2 12C2 17.5228 6.47715 22 12 22L10.5 19.5M22 12C22 6.47715 17.5228 2 12 2L13.5 4.5M10.5 8H12.8C13.9201 8 14.4802 8 14.908 8.21799C15.2843 8.40973 15.5903 8.71569 15.782 9.09202C16 9.51984 16 10.0799 16 11.2V13.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 16H11.2C10.0799 16 9.51984 16 9.09202 15.782C8.71569 15.5903 8.40973 15.2843 8.21799 14.908C8 14.4802 8 13.9201 8 12.8V8M16 16V18M16 16H18M8 8V6M8 8H6M2 12C2 17.5228 6.47715 22 12 22L10.5 19.5M22 12C22 6.47715 17.5228 2 12 2L13.5 4.5M10.5 8H12.8C13.9201 8 14.4802 8 14.908 8.21799C15.2843 8.40973 15.5903 8.71569 15.782 9.09202C16 9.51984 16 10.0799 16 11.2V13.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 16H11.2C10.0799 16 9.51984 16 9.09202 15.782C8.71569 15.5903 8.40973 15.2843 8.21799 14.908C8 14.4802 8 13.9201 8 12.8V8M16 16V18M16 16H18M8 8V6M8 8H6M10.5 8H12.8C13.9201 8 14.4802 8 14.908 8.21799C15.2843 8.40973 15.5903 8.71569 15.782 9.09202C16 9.51984 16 10.0799 16 11.2V13.5M2 12C2 17.5228 6.47715 22 12 22L10.5 19.5M22 12C22 6.47715 17.5228 2 12 2L13.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 16H11.2C10.0799 16 9.51984 16 9.09202 15.782C8.71569 15.5903 8.40973 15.2843 8.21799 14.908C8 14.4802 8 13.9201 8 12.8V8M16 16V18M16 16H18M8 8V6M8 8H6M2 12C2 17.5228 6.47715 22 12 22L10.5 19.5M22 12C22 6.47715 17.5228 2 12 2L13.5 4.5M10.5 8H12.8C13.9201 8 14.4802 8 14.908 8.21799C15.2843 8.40973 15.5903 8.71569 15.782 9.09202C16 9.51984 16 10.0799 16 11.2V13.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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