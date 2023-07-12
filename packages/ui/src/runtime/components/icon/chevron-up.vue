<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M18 14.9999L15 11.9999" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 15L12 9L15 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.12" d="M10.8686 9.13137L7.73137 12.2686C6.87462 13.1254 6.44624 13.5538 6.4173 13.9215C6.39218 14.2407 6.52136 14.5525 6.76477 14.7604C7.04529 15 7.65111 15 8.86274 15H15.1373C16.3489 15 16.9547 15 17.2352 14.7604C17.4786 14.5525 17.6078 14.2407 17.5827 13.9215C17.5538 13.5538 17.1254 13.1254 16.2686 12.2686L13.1314 9.13137C12.7354 8.73535 12.5373 8.53735 12.309 8.46316C12.1082 8.3979 11.8918 8.3979 11.691 8.46316C11.4627 8.53735 11.2646 8.73535 10.8686 9.13137Z" fill="currentColor"/>
<path d="M10.8686 9.1314L7.73137 12.2687C6.87462 13.1254 6.44624 13.5538 6.4173 13.9216C6.39218 14.2407 6.52136 14.5525 6.76477 14.7604C7.04529 15 7.65111 15 8.86274 15H15.1373C16.3489 15 16.9547 15 17.2352 14.7604C17.4786 14.5525 17.6078 14.2407 17.5827 13.9216C17.5538 13.5538 17.1254 13.1254 16.2686 12.2687L13.1314 9.1314C12.7354 8.73538 12.5373 8.53738 12.309 8.46319C12.1082 8.39793 11.8918 8.39793 11.691 8.46319C11.4627 8.53738 11.2646 8.73538 10.8686 9.1314Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" d="M10.8686 9.1314L7.73137 12.2687C6.87462 13.1254 6.44624 13.5538 6.4173 13.9216C6.39218 14.2407 6.52136 14.5525 6.76477 14.7604C7.04529 15 7.65111 15 8.86274 15H15.1373C16.3489 15 16.9547 15 17.2352 14.7604C17.4786 14.5525 17.6078 14.2407 17.5827 13.9216C17.5538 13.5538 17.1254 13.1254 16.2686 12.2687L13.1314 9.1314C12.7354 8.73538 12.5373 8.53738 12.309 8.46319C12.1082 8.39793 11.8918 8.39793 11.691 8.46319C11.4627 8.53738 11.2646 8.73538 10.8686 9.1314Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.8686 9.1314L7.73137 12.2687C6.87462 13.1254 6.44624 13.5538 6.4173 13.9216C6.39218 14.2407 6.52136 14.5525 6.76477 14.7604C7.04529 15 7.65111 15 8.86274 15H15.1373C16.3489 15 16.9547 15 17.2352 14.7604C17.4786 14.5525 17.6078 14.2407 17.5827 13.9216C17.5538 13.5538 17.1254 13.1254 16.2686 12.2687L13.1314 9.1314C12.7354 8.73538 12.5373 8.53738 12.309 8.46319C12.1082 8.39793 11.8918 8.39793 11.691 8.46319C11.4627 8.53738 11.2646 8.73538 10.8686 9.1314Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 15L12 9M18 15L14 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 15L12 9L18 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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