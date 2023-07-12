<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M20 5V14.5C20 14.8391 19.9775 15.1729 19.9339 15.5M15 11V7C15 4.23858 12.7614 2 10 2C8.87417 2 7.83526 2.37209 6.99951 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 2L5.29737 5.29737M22 22L18.7087 18.7087M5.29737 5.29737C5.10493 5.8288 5 6.40215 5 7V14.5C5 18.6421 8.35786 22 12.5 22C15.0822 22 17.3596 20.6951 18.7087 18.7087M5.29737 5.29737L10 10M18.7087 18.7087L14.9581 14.9581M14.9581 14.9581C14.7429 16.12 13.7242 17 12.5 17C11.1193 17 10 15.8807 10 14.5V10M14.9581 14.9581L10 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 5V14.5C20 14.8391 19.9775 15.1729 19.9339 15.5M2 2L5.29737 5.29737M22 22L18.7087 18.7087M5.29737 5.29737C5.10493 5.8288 5 6.40215 5 7V14.5C5 18.6421 8.35786 22 12.5 22C15.0822 22 17.3596 20.6951 18.7087 18.7087M5.29737 5.29737L10 10M18.7087 18.7087L14.9581 14.9581M15 11V7C15 4.23858 12.7614 2 10 2C8.87418 2 7.83526 2.37209 6.99951 3M14.9581 14.9581C14.7429 16.12 13.7242 17 12.5 17C11.1193 17 10 15.8807 10 14.5V10M14.9581 14.9581L10 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 5V14.5C20 14.8391 19.9775 15.1729 19.9339 15.5M2 2L5.29737 5.29737M22 22L18.7087 18.7087M5.29737 5.29737C5.10493 5.8288 5 6.40215 5 7V14.5C5 18.6421 8.35786 22 12.5 22C15.0822 22 17.3596 20.6951 18.7087 18.7087M5.29737 5.29737L10 10M18.7087 18.7087L14.9581 14.9581M15 11V7C15 4.23858 12.7614 2 10 2C8.87418 2 7.83526 2.37209 6.99951 3M14.9581 14.9581C14.7429 16.12 13.7242 17 12.5 17C11.1193 17 10 15.8807 10 14.5V10M14.9581 14.9581L10 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 5V14.5C20 14.8391 19.9775 15.1729 19.9339 15.5M2 2L5.29737 5.29737M22 22L18.7087 18.7087M5.29737 5.29737C5.10493 5.8288 5 6.40215 5 7V14.5C5 18.6421 8.35786 22 12.5 22C15.0822 22 17.3596 20.6951 18.7087 18.7087M5.29737 5.29737L10 10M18.7087 18.7087L14.9581 14.9581M15 11V7C15 4.23858 12.7614 2 10 2C8.87418 2 7.83526 2.37209 6.99951 3M14.9581 14.9581C14.7429 16.12 13.7242 17 12.5 17C11.1193 17 10 15.8807 10 14.5V10M14.9581 14.9581L10 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 5V14.5C20 14.8391 19.9775 15.1729 19.9339 15.5M2 2L5.29737 5.29737M22 22L18.7087 18.7087M5.29737 5.29737C5.10493 5.8288 5 6.40215 5 7V14.5C5 18.6421 8.35786 22 12.5 22C15.0822 22 17.3596 20.6951 18.7087 18.7087M5.29737 5.29737L7.5 7.5M18.7087 18.7087L14.9581 14.9581M15 11V7C15 4.23858 12.7614 2 10 2C8.87418 2 7.83526 2.37209 6.99951 3M14.9581 14.9581C14.7429 16.12 13.7242 17 12.5 17C11.1193 17 10 15.8807 10 14.5V10L14.9581 14.9581Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 5V14.5C20 14.8391 19.9775 15.1729 19.9339 15.5M2 2L5.29737 5.29737M22 22L18.7087 18.7087M5.29737 5.29737C5.10493 5.8288 5 6.40215 5 7V14.5C5 18.6421 8.35786 22 12.5 22C15.0822 22 17.3596 20.6951 18.7087 18.7087M5.29737 5.29737L10 10M18.7087 18.7087L14.9581 14.9581M15 11V7C15 4.23858 12.7614 2 10 2C8.87418 2 7.83526 2.37209 6.99951 3M14.9581 14.9581C14.7429 16.12 13.7242 17 12.5 17C11.1193 17 10 15.8807 10 14.5V10M14.9581 14.9581L10 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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