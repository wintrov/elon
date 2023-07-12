<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M2 12L5 9M2 12L5 15M2 12H12H22M22 12L19 9M22 12L19 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 2L9 5M12 2L15 5M12 2L12 12L12 22M12 22L9 19M12 22L15 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.12" d="M2 12L12 2L22 12L12 22L2 12Z" fill="currentColor"/>
<path d="M2 12L5 9M2 12L5 15M2 12H12M12 12H22M12 12V22M12 12V2M22 12L19 9M22 12L19 15M12 2L9 5M12 2L15 5M12 22L9 19M12 22L15 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12L5 9M2 12L5 15M2 12H12M12 12H22M12 12V22M12 12V2M22 12L19 9M22 12L19 15M12 2L9 5M12 2L15 5M12 22L9 19M12 22L15 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12L5 9M2 12L5 15M2 12H12M12 12H22M12 12V22M12 12V2M22 12L19 9M22 12L19 15M12 2L9 5M12 2L15 5M12 22L9 19M12 22L15 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 15L2 12H9M19 9L22 12H15M20 14L19 15M4 10L5 9M9 5L12 2V22L15 19M14 4L15 5M10 20L9 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12L5 9M2 12L5 15M2 12H12M12 12H22M12 12V22M12 12V2M22 12L19 9M22 12L19 15M12 2L9 5M12 2L15 5M12 22L9 19M12 22L15 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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