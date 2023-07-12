<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M3.5 8.00012V3.00012L2 4.00006M3.5 8.00012H2M3.5 8.00012L5 8.00006M2.00024 15.0001H5.00024L5 17.5001H2V20.0001H5.00024" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.00024 20.0001L22.0002 20.0001M9.00024 12.0001L22.0002 12.0001M9.00024 4.00012H22.0002" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.00022 20.0001L22.0002 20.0001M9.00022 12.0001L22.0002 12.0001M9.00022 4.00011H22.0002M3.50024 8.00023V3.00023L2.00024 4.00017M3.50024 8.00023H2.00024M3.50024 8.00023L5.00024 8.00017M2.00049 15.0002H5.00049L5.00024 17.5002H2.00024V20.0002H5.00049" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 20H22M9 12L22 12M9 4H22M3.5 8V3L2 3.99994M3.5 8H2M3.5 8L5 7.99994M2.00024 15H5.00024L5 17.5H2V20H5.00024" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 20H22M9 12L22 12M9 4H22M3.5 8V3L2 3.99994M3.5 8H2M3.5 8L5 7.99994M2.00024 15H5.00024L5 17.5H2V20H5.00024" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.0001 20.0001H16.0001M20.0001 20.0001H22.0001M9.0001 12.0001H22.0001M9.00012 4.00014H16.0001M20.0001 4.00014H22.0001M3.5 8.00014V3.00014L2 4.00008M3.5 8.00014H2M3.5 8.00014L5 8.00008M2.00024 15.0001H5.00024L5 17.5001H2V20.0001H5.00024" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.00024 20.0001H22.0002M9.00024 12.0001L22.0002 12.0001M9.00024 4.00014H22.0002M3.50024 8.00014V3.00014L2.00024 4.00008M3.50024 8.00014H2.00024M3.50024 8.00014L5.00024 8.00008M2.00049 15.0001H5.00049L5.00024 17.5001H2.00024V20.0001H5.00049" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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