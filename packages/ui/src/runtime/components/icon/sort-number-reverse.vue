<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M7 22L3 18M7 22L11 18M7 22V14M7 3V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 4V5.2C21 6.88016 21 7.72024 20.673 8.36197C20.3854 8.92646 19.9265 9.3854 19.362 9.67302C18.7202 10 17.8802 10 16.2 10H16M19 22V14L16.5 16.5M19 22H21M19 22H17M21 4V4C21 2.89543 20.1046 2 19 2H18C16.8954 2 16 2.89543 16 4V4C16 5.10457 16.8954 6 18 6H19C20.1046 6 21 5.10457 21 4Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.12" x="16" y="2" width="5" height="4" rx="2" fill="currentColor"/>
<path d="M21 4V5.2C21 6.88016 21 7.72024 20.673 8.36197C20.3854 8.92646 19.9265 9.3854 19.362 9.67302C18.7202 10 17.8802 10 16.2 10H16M7 22L3 18M7 22L11 18M7 22V14M7 3V10M19 22V14L16.5 16.5M19 22H21M19 22H17M21 4V4C21 2.89543 20.1046 2 19 2H18C16.8954 2 16 2.89543 16 4V4C16 5.10457 16.8954 6 18 6H19C20.1046 6 21 5.10457 21 4Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 4V5.2C21 6.88016 21 7.72024 20.673 8.36197C20.3854 8.92646 19.9265 9.3854 19.362 9.67302C18.7202 10 17.8802 10 16.2 10H16M7 22L3 18M7 22L11 18M7 22V14M7 3V10M19 22V14L16.5 16.5M19 22H21M19 22H17M21 4V4C21 2.89543 20.1046 2 19 2H18C16.8954 2 16 2.89543 16 4V4C16 5.10457 16.8954 6 18 6H19C20.1046 6 21 5.10457 21 4Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 4V5.2C21 6.88016 21 7.72024 20.673 8.36197C20.3854 8.92646 19.9265 9.3854 19.362 9.67302C18.7202 10 17.8802 10 16.2 10H16M7 22L3 18M7 22L11 18M7 22V14M7 3V10M19 22V14L16.5 16.5M19 22H21M19 22H17M21 4V4C21 2.89543 20.1046 2 19 2H18C16.8954 2 16 2.89543 16 4V4C16 5.10457 16.8954 6 18 6H19C20.1046 6 21 5.10457 21 4Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 4V5.2C21 6.88016 21 7.72024 20.673 8.36197C20.3854 8.92646 19.9265 9.3854 19.362 9.67302C18.7202 10 17.8802 10 16.2 10H16M11 18L7 22V14M7 3V10M4.5 19.5L3 18M19 22V14L16.5 16.5M19 22H21M19 22H17M21 4V4C21 2.89543 20.1046 2 19 2H18C16.8954 2 16 2.89543 16 4V4C16 5.10457 16.8954 6 18 6H19C20.1046 6 21 5.10457 21 4Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 4V5.2C21 6.88016 21 7.72024 20.673 8.36197C20.3854 8.92646 19.9265 9.3854 19.362 9.67302C18.7202 10 17.8802 10 16.2 10H16M7 22L3 18M7 22L11 18M7 22V14M7 3V10M19 22V14L16.5 16.5M19 22H21M19 22H17M21 4V4C21 2.89543 20.1046 2 19 2H18C16.8954 2 16 2.89543 16 4V4C16 5.10457 16.8954 6 18 6H19C20.1046 6 21 5.10457 21 4Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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