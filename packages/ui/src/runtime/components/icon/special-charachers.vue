<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M22 12.0588C22 6.50349 17.5228 2 12 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 12.0588C22 15.9515 19.8017 19.3277 16.5858 21H22M12 2C6.47715 2 2 6.50349 2 12.0588C2 15.9515 4.19827 19.3277 7.41422 21H2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.12" d="M12 2C6.47715 2 2 6.50349 2 12.0588C2 15.9515 4.19827 19.3277 7.41422 21H16.5858C19.8017 19.3277 22 15.9515 22 12.0588C22 6.50349 17.5228 2 12 2Z" fill="currentColor"/>
<path d="M2 21H7.41422C4.19827 19.3277 2 15.9515 2 12.0588C2 6.50349 6.47715 2 12 2C17.5228 2 22 6.50349 22 12.0588C22 15.9515 19.8017 19.3277 16.5858 21H22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 21H7.41422C4.19827 19.3277 2 15.9515 2 12.0588C2 6.50349 6.47715 2 12 2C17.5228 2 22 6.50349 22 12.0588C22 15.9515 19.8017 19.3277 16.5858 21H22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 21H7.41422C4.19827 19.3277 2 15.9515 2 12.0588C2 6.50349 6.47715 2 12 2C17.5228 2 22 6.50349 22 12.0588C22 15.9515 19.8017 19.3277 16.5858 21H22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 21H7.41422C4.19827 19.3277 2 15.9515 2 12.0588C2 6.50349 6.47715 2 12 2C13.8214 2 15.5291 2.48984 17 3.34569M22 21H16.5858C19.8017 19.3277 22 15.9515 22 12.0588C22 10.2145 21.5065 8.48615 20.6452 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 21H7.41422C4.19827 19.3277 2 15.9515 2 12.0588C2 6.50349 6.47715 2 12 2C17.5228 2 22 6.50349 22 12.0588C22 15.9515 19.8017 19.3277 16.5858 21H22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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