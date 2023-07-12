<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M9 9V15M13.5 15V15C14.3284 15 15 14.3284 15 13.5V10.5C15 9.67157 14.3284 9 13.5 9V9C12.6716 9 12 9.67157 12 10.5V13.5C12 14.3284 12.6716 15 13.5 15Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.44444 2 12 2C18.6667 2 22 7.55556 22 7.55556V2.55556" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle opacity="0.12" cx="12" cy="12" r="10" fill="currentColor"/>
<path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.44444 2 12 2C18.6667 2 22 7.55556 22 7.55556V2.55556M9 9V15M13.5 15V15C14.3284 15 15 14.3284 15 13.5V10.5C15 9.67157 14.3284 9 13.5 9V9C12.6716 9 12 9.67157 12 10.5V13.5C12 14.3284 12.6716 15 13.5 15Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.44444 2 12 2C18.6667 2 22 7.55556 22 7.55556V2.55556M9 9V15M13.5 15V15C14.3284 15 15 14.3284 15 13.5V10.5C15 9.67157 14.3284 9 13.5 9V9C12.6716 9 12 9.67157 12 10.5V13.5C12 14.3284 12.6716 15 13.5 15Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.44444 2 12 2C18.6667 2 22 7.55556 22 7.55556V2.55556M9 9V15M13.5 15V15C14.3284 15 15 14.3284 15 13.5V10.5C15 9.67157 14.3284 9 13.5 9V9C12.6716 9 12 9.67157 12 10.5V13.5C12 14.3284 12.6716 15 13.5 15Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 2.55556V7.55556C22 7.55556 18.6667 2 12 2C6.44444 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C13.8214 22 15.5291 21.513 17 20.6622M20.0007 18C21.2561 16.3287 22 14.2512 22 12M9 9V15M13.5 15V15C14.3284 15 15 14.3284 15 13.5V10.5C15 9.67157 14.3284 9 13.5 9V9C12.6716 9 12 9.67157 12 10.5V13.5C12 14.3284 12.6716 15 13.5 15Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.44444 2 12 2C18.6667 2 22 7.55556 22 7.55556V2.55556M9 9V15M13.5 15V15C14.3284 15 15 14.3284 15 13.5V10.5C15 9.67157 14.3284 9 13.5 9V9C12.6716 9 12 9.67157 12 10.5V13.5C12 14.3284 12.6716 15 13.5 15Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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