<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M14 6L11 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 18L8 12L11 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.12" d="M9.13137 10.8686C8.73535 11.2646 8.53735 11.4627 8.46316 11.691C8.3979 11.8918 8.3979 12.1082 8.46316 12.309C8.53735 12.5373 8.73535 12.7354 9.13137 13.1314L12.2686 16.2686C13.1254 17.1254 13.5538 17.5538 13.9215 17.5827C14.2407 17.6078 14.5525 17.4786 14.7604 17.2352C15 16.9547 15 16.3489 15 15.1373L15 8.86274C15 7.65111 15 7.04529 14.7604 6.76477C14.5525 6.52136 14.2407 6.39218 13.9215 6.4173C13.5538 6.44624 13.1254 6.87462 12.2686 7.73137L9.13137 10.8686Z" fill="currentColor"/>
<path d="M9.13137 10.8685C8.73535 11.2646 8.53735 11.4626 8.46316 11.6909C8.3979 11.8917 8.3979 12.1081 8.46316 12.3089C8.53735 12.5373 8.73535 12.7353 9.13137 13.1313L12.2686 16.2685C13.1254 17.1253 13.5538 17.5537 13.9215 17.5826C14.2407 17.6077 14.5525 17.4786 14.7604 17.2351C15 16.9546 15 16.3488 15 15.1372L15 8.86265C15 7.65102 15 7.0452 14.7604 6.76467C14.5525 6.52126 14.2407 6.39209 13.9215 6.4172C13.5538 6.44615 13.1254 6.87453 12.2686 7.73128L9.13137 10.8685Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" d="M9.13137 10.8685C8.73535 11.2646 8.53735 11.4626 8.46316 11.6909C8.3979 11.8917 8.3979 12.1081 8.46316 12.3089C8.53735 12.5373 8.73535 12.7353 9.13137 13.1313L12.2686 16.2685C13.1254 17.1253 13.5538 17.5537 13.9215 17.5826C14.2407 17.6077 14.5525 17.4786 14.7604 17.2351C15 16.9546 15 16.3488 15 15.1372L15 8.86265C15 7.65102 15 7.0452 14.7604 6.76467C14.5525 6.52126 14.2407 6.39209 13.9215 6.4172C13.5538 6.44615 13.1254 6.87453 12.2686 7.73128L9.13137 10.8685Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.13137 10.8685C8.73535 11.2646 8.53735 11.4626 8.46316 11.6909C8.3979 11.8917 8.3979 12.1081 8.46316 12.3089C8.53735 12.5373 8.73535 12.7353 9.13137 13.1313L12.2686 16.2685C13.1254 17.1253 13.5538 17.5537 13.9215 17.5826C14.2407 17.6077 14.5525 17.4786 14.7604 17.2351C15 16.9546 15 16.3488 15 15.1372L15 8.86265C15 7.65102 15 7.0452 14.7604 6.76467C14.5525 6.52126 14.2407 6.39209 13.9215 6.4172C13.5538 6.44615 13.1254 6.87453 12.2686 7.73128L9.13137 10.8685Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 6L8 12M14 18L10 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 6L8 12L14 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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