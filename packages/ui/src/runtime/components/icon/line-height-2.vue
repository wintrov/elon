<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M12.0002 20L22.0002 20M12.0002 12L22.0002 12M12.0002 4H22.0002" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 3V21M5 3L2 6M5 3L8 6M5 21L2 18M5 21L8 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0003 20L22.0003 20M12.0002 12L22.0002 12M12.0003 4H22.0003M5.00024 3V21M5.00024 3L2.00024 6M5.00024 3L8.00024 6M5.00024 21L2.00024 18M5.00024 21L8.00024 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 20L22 20M12 12L22 12M12 4H22M5 3V21M5 3L2 6M5 3L8 6M5 21L2 18M5 21L8 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 20L22 20M12 12L22 12M12 4H22M5 3V21M5 3L2 6M5 3L8 6M5 21L2 18M5 21L8 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0003 20L22.0003 20M12.0002 12H16.0002M20.0002 12H22.0002M12.0003 4H22.0003M5.00024 21L2.00024 18M5.00024 21L8.00024 18M5.00024 21V14M5.00024 3L2.00024 6M5.00024 3L8.00024 6M5.00024 3V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0003 20L22.0003 20M12.0002 12L22.0002 12M12.0003 4.00003H22.0003M5.00024 3.00003V21M5.00024 3.00003L2.00024 6.00003M5.00024 3.00003L8.00024 6.00003M5.00024 21L2.00024 18M5.00024 21L8.00024 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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