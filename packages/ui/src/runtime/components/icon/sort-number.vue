<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M7 3V10M7 22L3 18M7 22L11 18M7 22V14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 16V17.2C21 18.8802 21 19.7202 20.673 20.362C20.3854 20.9265 19.9265 21.3854 19.362 21.673C18.7202 22 17.8802 22 16.2 22H16M19 10V2L16.5 4.5M19 10H21M19 10H17M21 16V16C21 14.8954 20.1046 14 19 14H18C16.8954 14 16 14.8954 16 16V16C16 17.1046 16.8954 18 18 18H19C20.1046 18 21 17.1046 21 16Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.12" x="16" y="14" width="5" height="4" rx="2" fill="currentColor"/>
<path d="M21 16V17.2C21 18.8802 21 19.7202 20.673 20.362C20.3854 20.9265 19.9265 21.3854 19.362 21.673C18.7202 22 17.8802 22 16.2 22H16M7 22L3 18M7 22L11 18M7 22V14M7 3V10M19 10V2L16.5 4.5M19 10H21M19 10H17M21 16V16C21 14.8954 20.1046 14 19 14H18C16.8954 14 16 14.8954 16 16V16C16 17.1046 16.8954 18 18 18H19C20.1046 18 21 17.1046 21 16Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 16V17.2C21 18.8802 21 19.7202 20.673 20.362C20.3854 20.9265 19.9265 21.3854 19.362 21.673C18.7202 22 17.8802 22 16.2 22H16M7 22L3 18M7 22L11 18M7 22V14M7 3V10M19 10V2L16.5 4.5M19 10H21M19 10H17M21 16V16C21 14.8954 20.1046 14 19 14H18C16.8954 14 16 14.8954 16 16V16C16 17.1046 16.8954 18 18 18H19C20.1046 18 21 17.1046 21 16Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 16V17.2C21 18.8802 21 19.7202 20.673 20.362C20.3854 20.9265 19.9265 21.3854 19.362 21.673C18.7202 22 17.8802 22 16.2 22H16M7 22L3 18M7 22L11 18M7 22V14M7 3V10M19 10V2L16.5 4.5M19 10H21M19 10H17M21 16V16C21 14.8954 20.1046 14 19 14H18C16.8954 14 16 14.8954 16 16V16C16 17.1046 16.8954 18 18 18H19C20.1046 18 21 17.1046 21 16Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 16V17.2C21 18.8802 21 19.7202 20.673 20.362C20.3854 20.9265 19.9265 21.3854 19.362 21.673C18.7202 22 17.8802 22 16.2 22H16M3 18L4.5 19.5M11 18L7 22V14M7 3V10M19 10V2L16.5 4.5M19 10H21M19 10H17M21 16V16C21 14.8954 20.1046 14 19 14H18C16.8954 14 16 14.8954 16 16V16C16 17.1046 16.8954 18 18 18H19C20.1046 18 21 17.1046 21 16Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 16V17.2C21 18.8802 21 19.7202 20.673 20.362C20.3854 20.9265 19.9265 21.3854 19.362 21.673C18.7202 22 17.8802 22 16.2 22H16M7 22L3 18M7 22L11 18M7 22V14M7 3V10M19 10V2L16.5 4.5M19 10H21M19 10H17M21 16V16C21 14.8954 20.1046 14 19 14H18C16.8954 14 16 14.8954 16 16V16C16 17.1046 16.8954 18 18 18H19C20.1046 18 21 17.1046 21 16Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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