<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M12 6C8.68629 6 6 8.68629 6 12C6 13.2267 6.36815 14.3675 7 15.3178M16 7.52779C17.2275 8.62643 18 10.223 18 12C18 15.3137 15.3137 18 12 18C11.2987 18 10.6256 17.8797 10 17.6586M12 10V14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 12C22 6.47715 17.5228 2 12 2C10.5778 2 9.22492 2.2969 8 2.83209M3.99927 6C2.74389 7.67132 2 9.74879 2 12C2 16.8379 5.43552 20.8734 10 21.8M20.6622 17C19.2531 19.4359 16.846 21.2223 14 21.8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.12" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"/>
<path d="M22 12C22 6.47715 17.5228 2 12 2C10.5778 2 9.22492 2.2969 8 2.83209M3.99927 6C2.74389 7.67132 2 9.74879 2 12C2 16.8379 5.43552 20.8734 10 21.8M20.6622 17C19.2531 19.4359 16.846 21.2223 14 21.8M12 6C8.68629 6 6 8.68629 6 12C6 13.2267 6.36815 14.3675 7 15.3178M16 7.52779C17.2275 8.62643 18 10.223 18 12C18 15.3137 15.3137 18 12 18C11.2987 18 10.6256 17.8797 10 17.6586M12 10V14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12C22 6.47715 17.5228 2 12 2C10.5778 2 9.22492 2.2969 8 2.83209M3.99927 6C2.74389 7.67132 2 9.74879 2 12C2 16.8379 5.43552 20.8734 10 21.8M20.6622 17C19.2531 19.4359 16.846 21.2223 14 21.8M12 6C8.68629 6 6 8.68629 6 12C6 13.2267 6.36815 14.3675 7 15.3178M16 7.52779C17.2275 8.62643 18 10.223 18 12C18 15.3137 15.3137 18 12 18C11.2987 18 10.6256 17.8797 10 17.6586M12 10V14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12C22 6.47715 17.5228 2 12 2C10.5778 2 9.22492 2.2969 8 2.83209M3.99927 6C2.74389 7.67132 2 9.74879 2 12C2 16.8379 5.43552 20.8734 10 21.8M20.6622 17C19.2531 19.4359 16.846 21.2223 14 21.8M12 6C8.68629 6 6 8.68629 6 12C6 13.2267 6.36815 14.3675 7 15.3178M16 7.52779C17.2275 8.62643 18 10.223 18 12C18 15.3137 15.3137 18 12 18C11.2987 18 10.6256 17.8797 10 17.6586M12 10V14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12C22 6.47715 17.5228 2 12 2C10.5778 2 9.22492 2.2969 8 2.83209M3.99927 6C2.74389 7.67132 2 9.74879 2 12C2 16.8379 5.43552 20.8734 10 21.8M20.6622 17C19.2531 19.4359 16.846 21.2223 14 21.8M12 6C8.68629 6 6 8.68629 6 12C6 13.2267 6.36815 14.3675 7 15.3178M16 7.52779C17.2275 8.62643 18 10.223 18 12C18 15.3137 15.3137 18 12 18C11.2987 18 10.6256 17.8797 10 17.6586M12 10V14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12C22 6.47715 17.5228 2 12 2C10.5778 2 9.22492 2.2969 8 2.83209M3.99927 6C2.74389 7.67132 2 9.74879 2 12C2 16.8379 5.43552 20.8734 10 21.8M20.6622 17C19.2531 19.4359 16.846 21.2223 14 21.8M12 6C8.68629 6 6 8.68629 6 12C6 13.2267 6.36815 14.3675 7 15.3178M16 7.52779C17.2275 8.62643 18 10.223 18 12C18 15.3137 15.3137 18 12 18C11.2987 18 10.6256 17.8797 10 17.6586M12 10V14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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