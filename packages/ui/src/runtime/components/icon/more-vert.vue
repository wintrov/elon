<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M11.5 7C12.875 7 14 5.875 14 4.5C14 3.125 12.875 2 11.5 2C10.125 2 9 3.125 9 4.5C9 5.875 10.125 7 11.5 7Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
<path d="M11.5 9.5C10.125 9.5 9 10.625 9 12C9 13.375 10.125 14.5 11.5 14.5C12.875 14.5 14 13.375 14 12C14 10.625 12.875 9.5 11.5 9.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
<path d="M11.5 17C10.125 17 9 18.125 9 19.5C9 20.875 10.125 22 11.5 22C12.875 22 14 20.875 14 19.5C14 18.125 12.875 17 11.5 17Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.12">
<path d="M11.5 7C12.875 7 14 5.875 14 4.5C14 3.125 12.875 2 11.5 2C10.125 2 9 3.125 9 4.5C9 5.875 10.125 7 11.5 7Z" fill="currentColor"/>
<path d="M11.5 9.5C10.125 9.5 9 10.625 9 12C9 13.375 10.125 14.5 11.5 14.5C12.875 14.5 14 13.375 14 12C14 10.625 12.875 9.5 11.5 9.5Z" fill="currentColor"/>
<path d="M11.5 17C10.125 17 9 18.125 9 19.5C9 20.875 10.125 22 11.5 22C12.875 22 14 20.875 14 19.5C14 18.125 12.875 17 11.5 17Z" fill="currentColor"/>
</g>
<path d="M11.5 7C12.875 7 14 5.875 14 4.5C14 3.125 12.875 2 11.5 2C10.125 2 9 3.125 9 4.5C9 5.875 10.125 7 11.5 7Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
<path d="M11.5 9.5C10.125 9.5 9 10.625 9 12C9 13.375 10.125 14.5 11.5 14.5C12.875 14.5 14 13.375 14 12C14 10.625 12.875 9.5 11.5 9.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
<path d="M11.5 17C10.125 17 9 18.125 9 19.5C9 20.875 10.125 22 11.5 22C12.875 22 14 20.875 14 19.5C14 18.125 12.875 17 11.5 17Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" d="M11.5 9.5C10.125 9.5 9 10.625 9 12C9 13.375 10.125 14.5 11.5 14.5C12.875 14.5 14 13.375 14 12C14 10.625 12.875 9.5 11.5 9.5Z" fill="currentColor"/>
<path d="M11.5 7C12.875 7 14 5.875 14 4.5C14 3.125 12.875 2 11.5 2C10.125 2 9 3.125 9 4.5C9 5.875 10.125 7 11.5 7Z" fill="currentColor"/>
<path d="M11.5 17C10.125 17 9 18.125 9 19.5C9 20.875 10.125 22 11.5 22C12.875 22 14 20.875 14 19.5C14 18.125 12.875 17 11.5 17Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5 7C12.875 7 14 5.875 14 4.5C14 3.125 12.875 2 11.5 2C10.125 2 9 3.125 9 4.5C9 5.875 10.125 7 11.5 7Z" fill="currentColor"/>
<path d="M11.5 9.5C10.125 9.5 9 10.625 9 12C9 13.375 10.125 14.5 11.5 14.5C12.875 14.5 14 13.375 14 12C14 10.625 12.875 9.5 11.5 9.5Z" fill="currentColor"/>
<path d="M9 19.5C9 18.125 10.125 17 11.5 17C12.875 17 14 18.125 14 19.5C14 20.875 12.875 22 11.5 22C10.125 22 9 20.875 9 19.5Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5 9.5C10.125 9.5 9 10.625 9 12C9 13.375 10.125 14.5 11.5 14.5C12.875 14.5 14 13.375 14 12M11.5 7C12.875 7 14 5.875 14 4.5C14 3.125 12.875 2 11.5 2C10.125 2 9 3.125 9 4.5C9 5.875 10.125 7 11.5 7ZM11.5 17C10.125 17 9 18.125 9 19.5C9 20.875 10.125 22 11.5 22C12.875 22 14 20.875 14 19.5C14 18.125 12.875 17 11.5 17Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5 7C12.875 7 14 5.875 14 4.5C14 3.125 12.875 2 11.5 2C10.125 2 9 3.125 9 4.5C9 5.875 10.125 7 11.5 7Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
<path d="M11.5 9.5C10.125 9.5 9 10.625 9 12C9 13.375 10.125 14.5 11.5 14.5C12.875 14.5 14 13.375 14 12C14 10.625 12.875 9.5 11.5 9.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
<path d="M11.5 17C10.125 17 9 18.125 9 19.5C9 20.875 10.125 22 11.5 22C12.875 22 14 20.875 14 19.5C14 18.125 12.875 17 11.5 17Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
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