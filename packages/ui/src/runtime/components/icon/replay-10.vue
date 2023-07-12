<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M9 9V15M13.5 15V15C14.3284 15 15 14.3284 15 13.5V10.5C15 9.67157 14.3284 9 13.5 9V9C12.6716 9 12 9.67157 12 10.5V13.5C12 14.3284 12.6716 15 13.5 15Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5556 2 12 2C5.33333 2 2 7.55556 2 7.55556V2.55556" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle opacity="0.12" cx="12" cy="12" r="10" fill="currentColor"/>
<path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5556 2 12 2C5.33333 2 2 7.55556 2 7.55556V2.55556" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 9V15M13.5 15V15C14.3284 15 15 14.3284 15 13.5V10.5C15 9.67157 14.3284 9 13.5 9V9C12.6716 9 12 9.67157 12 10.5V13.5C12 14.3284 12.6716 15 13.5 15Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5556 2 12 2C5.33333 2 2 7.55556 2 7.55556V2.55556M9 9V15M13.5 15V15C14.3284 15 15 14.3284 15 13.5V10.5C15 9.67157 14.3284 9 13.5 9V9C12.6716 9 12 9.67157 12 10.5V13.5C12 14.3284 12.6716 15 13.5 15Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5556 2 12 2C5.33333 2 2 7.55556 2 7.55556V2.55556M9 9V15M13.5 15V15C14.3284 15 15 14.3284 15 13.5V10.5C15 9.67157 14.3284 9 13.5 9V9C12.6716 9 12 9.67157 12 10.5V13.5C12 14.3284 12.6716 15 13.5 15Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12C2 14.2512 2.74389 16.3287 3.99927 18M2 2.55556V7.55556C2 7.55556 5.33333 2 12 2C17.5556 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C10.1786 22 8.47087 21.513 7 20.6622M9 9V15M13.5 15V15C14.3284 15 15 14.3284 15 13.5V10.5C15 9.67157 14.3284 9 13.5 9V9C12.6716 9 12 9.67157 12 10.5V13.5C12 14.3284 12.6716 15 13.5 15Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5556 2 12 2C5.33333 2 2 7.55556 2 7.55556V2.55556M9 9V15M13.5 15V15C14.3284 15 15 14.3284 15 13.5V10.5C15 9.67157 14.3284 9 13.5 9V9C12.6716 9 12 9.67157 12 10.5V13.5C12 14.3284 12.6716 15 13.5 15Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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