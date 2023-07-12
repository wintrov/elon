<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M8 12H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.5 5H15V5C18.866 5 22 8.13401 22 12V12C22 15.866 18.866 19 15 19V19H14.5M9.5 5H9V5C5.13401 5 2 8.13401 2 12V12C2 15.866 5.13401 19 9 19V19H9.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5 5H15V5C18.866 5 22 8.13401 22 12V12C22 15.866 18.866 19 15 19V19H14.5M9.5 5H9V5C5.13401 5 2 8.13401 2 12V12C2 15.866 5.13401 19 9 19V19H9.5M8 12H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5 5H15V5C18.866 5 22 8.13401 22 12V12C22 15.866 18.866 19 15 19V19H14.5M9.5 5H9V5C5.13401 5 2 8.13401 2 12V12C2 15.866 5.13401 19 9 19V19H9.5M8 12H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5 5H15V5C18.866 5 22 8.13401 22 12V12C22 15.866 18.866 19 15 19V19H14.5M9.5 5H9V5C5.13401 5 2 8.13401 2 12V12C2 15.866 5.13401 19 9 19V19H9.5M8 12H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5 5H15C16.3197 5 17.554 5.36518 18.6076 6M14.5 19H15C18.866 19 22 15.866 22 12C22 10.9264 21.7583 9.90926 21.3264 9M9.5 19H9C5.13401 19 2 15.866 2 12C2 8.13401 5.13401 5 9 5H9.5M8 12H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5 5H15V5C18.866 5 22 8.13401 22 12V12C22 15.866 18.866 19 15 19V19H14.5M9.5 5H9V5C5.13401 5 2 8.13401 2 12V12C2 15.866 5.13401 19 9 19V19H9.5M8 12H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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