<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M20.9999 21H15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.99994 3L3 7.99994M7.99994 3L12.9999 7.99994M7.99994 3V14.6C7.99994 16.8402 7.99994 17.9603 8.43591 18.816C8.81941 19.5686 9.43133 20.1805 10.184 20.564C11.0396 21 12.1597 21 14.3999 21H14.5H15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.99994 3L3 7.99994M7.99994 3L12.9999 7.99994M7.99994 3V14.6C7.99994 16.8402 7.99994 17.9603 8.43591 18.816C8.81941 19.5686 9.43133 20.1805 10.184 20.564C11.0396 21 12.1597 21 14.3999 21H20.9999" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.99994 3L3 7.99994M7.99994 3L12.9999 7.99994M7.99994 3V14.6C7.99994 16.8402 7.99994 17.9603 8.43591 18.816C8.81941 19.5686 9.43133 20.1805 10.184 20.564C11.0396 21 12.1597 21 14.3999 21H20.9999" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.99994 3L3 7.99994M7.99994 3L12.9999 7.99994M7.99994 3V14.6C7.99994 16.8402 7.99994 17.9603 8.43591 18.816C8.81941 19.5686 9.43133 20.1805 10.184 20.564C11.0396 21 12.1597 21 14.3999 21H20.9999" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 7.99994L7.99994 3V14.6C7.99994 16.8402 7.99994 17.9603 8.43591 18.816C8.81941 19.5686 9.43133 20.1805 10.184 20.564C11.0396 21 12.1597 21 14.3999 21H20.9999M12.9999 7.99994L10.4999 5.49997" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.99994 3L3 7.99994M7.99994 3L12.9999 7.99994M7.99994 3V14.6C7.99994 16.8402 7.99994 17.9603 8.43591 18.816C8.81941 19.5686 9.43133 20.1805 10.184 20.564C11.0396 21 12.1597 21 14.3999 21H20.9999" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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