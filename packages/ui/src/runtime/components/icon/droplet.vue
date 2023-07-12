<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M11.9998 1.99988C11.9998 1.99988 20 6.93815 20 13.8517" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.9998 1.99966C11.9998 1.99966 4 6.93793 4 13.8515C4 24.7157 20 24.7158 20 13.8515" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.12" d="M20 13.8516C20 24.7159 4 24.7158 4 13.8516C4 8.92376 8.0643 4.99948 10.399 3.15172C10.8516 2.79352 11.0779 2.61442 11.4706 2.50668C11.7562 2.42831 12.2434 2.4283 12.529 2.50666C12.9216 2.6144 13.148 2.79349 13.6006 3.15168C15.9354 4.99941 20 8.92372 20 13.8516Z" fill="currentColor"/>
<path d="M20 13.8519C20 24.7161 4 24.7161 4 13.8518C4 8.924 8.0643 4.99972 10.399 3.15197C10.8516 2.79377 11.0779 2.61467 11.4706 2.50692C11.7562 2.42855 12.2434 2.42855 12.529 2.50691C12.9216 2.61464 13.148 2.79373 13.6006 3.15192C15.9354 4.99966 20 8.92397 20 13.8519Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" d="M20.75 13.8519C20.75 7.5 14 1.5 12 1.5C10 1.5 3.25 7.5 3.25 13.8519C3.25 18.8307 6.97296 22.7501 12 22.7501C17.0271 22.7501 20.75 18.8307 20.75 13.8519Z" fill="currentColor"/>
<path d="M3.25 13.8519C3.25 18.8307 6.97296 22.75 12 22.75C17.0271 22.7501 20.75 18.8307 20.75 13.8519C20.75 13.8519 18 16.4998 12 16.4998C6 16.4998 3.25 13.8519 3.25 13.8519Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.75 13.8519C20.75 7.49997 14 1.49997 12 1.49997C10 1.49997 3.25 7.49997 3.25 13.8519C3.25 18.8307 6.97296 22.75 12 22.75C17.0271 22.75 20.75 18.8307 20.75 13.8519Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.6079 6C15.5647 4.80325 14.465 3.83609 13.6016 3.15274C13.1484 2.79402 12.9218 2.61466 12.5291 2.50691C12.2435 2.42854 11.7562 2.42853 11.4706 2.5069C11.0779 2.61464 10.8516 2.79375 10.399 3.15197C8.0643 4.99972 4 8.924 4 13.8518C4 24.7161 20 24.7161 20 13.8519C20 12.4828 19.6863 11.1911 19.1831 10C19.0387 9.65821 18.8787 9.3247 18.706 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13.8519C20 24.7161 4 24.7161 4 13.8518C4 8.924 8.0643 4.99972 10.399 3.15197C10.8516 2.79377 11.0779 2.61467 11.4706 2.50692C11.7562 2.42855 12.2434 2.42855 12.529 2.50691C12.9216 2.61464 13.148 2.79373 13.6006 3.15192C15.9354 4.99966 20 8.92397 20 13.8519Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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