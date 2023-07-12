<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M17 17C19.7614 17 22 14.7614 22 12C22 9.23858 19.7614 7 17 7C15.8742 7 14.8353 7.37209 13.9995 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 17C14.2386 17 12 14.7614 12 12C12 9.23858 9.76142 7 7 7C4.23858 7 2 9.23858 2 12C2 14.7614 4.23858 17 7 17C8.12561 17 9.16434 16.6281 10 16.0004" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.12" d="M7.00003 17C9.76145 17 12 14.7614 12 12C12 14.7614 14.2386 17 17 17C19.7615 17 22 14.7614 22 12C22 9.23858 19.7615 7 17 7C14.2386 7 12 9.23858 12 12C12 9.23858 9.76145 7 7.00003 7C4.23861 7 2.00003 9.23858 2.00003 12C2.00003 14.7614 4.23861 17 7.00003 17Z" fill="currentColor"/>
<path d="M10 16.0004C9.16434 16.6281 8.12561 17 7 17C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7C9.76142 7 12 9.23858 12 12C12 14.7614 14.2386 17 17 17C19.7614 17 22 14.7614 22 12C22 9.23858 19.7614 7 17 7C15.8742 7 14.8353 7.37209 13.9995 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 16.0004C9.16434 16.6281 8.12561 17 7 17C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7C9.76142 7 12 9.23858 12 12C12 14.7614 14.2386 17 17 17C19.7614 17 22 14.7614 22 12C22 9.23858 19.7614 7 17 7C15.8742 7 14.8353 7.37209 13.9995 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 16.0004C9.16434 16.6281 8.12561 17 7 17C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7C9.76142 7 12 9.23858 12 12C12 14.7614 14.2386 17 17 17C19.7614 17 22 14.7614 22 12C22 9.23858 19.7614 7 17 7C15.8742 7 14.8353 7.37209 13.9995 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 16.0004C9.16434 16.6281 8.12561 17 7 17C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7C9.76142 7 12 9.23858 12 12C12 14.7614 14.2386 17 17 17C19.7614 17 22 14.7614 22 12C22 11.0893 21.7565 10.2354 21.3311 9.5M13.9995 8C14.8353 7.37209 15.8742 7 17 7C17.7111 7 18.3875 7.14845 19 7.41604" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 16.0004C9.16434 16.6281 8.12561 17 7 17C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7C9.76142 7 12 9.23858 12 12C12 14.7614 14.2386 17 17 17C19.7614 17 22 14.7614 22 12C22 9.23858 19.7614 7 17 7C15.8742 7 14.8353 7.37209 13.9995 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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