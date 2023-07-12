<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M17 6.99989L19.3642 4.63574M4.63623 19.3637L7.00019 16.9997M7.00038 6.99989L4.63623 4.63574M19.3642 19.3637L17.0002 16.9997" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.6566 12H22M2 12H5.34315M12 5.34341V2M12 22V18.6569" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle opacity="0.12" cx="12" cy="12" r="8" fill="currentColor"/>
<path d="M17 6.99989L19.3642 4.63574M4.63623 19.3637L7.00019 16.9997M7.00038 6.99989L4.63623 4.63574M19.3642 19.3637L17.0002 16.9997M18.6566 12H22M2 12H5.34315M12 5.34341V2M12 22V18.6569" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 6.99989L19.3642 4.63574M4.63623 19.3637L7.00019 16.9997M7.00038 6.99989L4.63623 4.63574M19.3642 19.3637L17.0002 16.9997M18.6566 12H22M2 12H5.34315M12 5.34341V2M12 22V18.6569" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 6.99989L19.3642 4.63574M4.63623 19.3637L7.00019 16.9997M7.00038 6.99989L4.63623 4.63574M19.3642 19.3637L17.0002 16.9997M18.6566 12H22M2 12H5.34315M12 5.34341V2M12 22V18.6569" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 7.00038L19.3642 4.63623M4.63623 19.3642L7.00019 17.0002M7.00038 7.00038L4.63623 4.63623M19.3642 19.3642L17.0002 17.0002M16 12H17M20 12H22M2 12H4M7 12H8M12 8V7M12 4V2M12 22V20M12 17V16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 6.99989L19.3642 4.63574M4.63623 19.3637L7.00019 16.9997M7.00038 6.99989L4.63623 4.63574M19.3642 19.3637L17.0002 16.9997M18.6566 12H22M2 12H5.34315M12 5.34341V2M12 22V18.6569" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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