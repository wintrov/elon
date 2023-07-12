<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M12 8V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="4" y="2" width="16" height="20" rx="8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.12" x="4" y="2" width="16" height="20" rx="8" fill="currentColor"/>
<path d="M12 8V10M12 22V22C16.4183 22 20 18.4183 20 14V10C20 5.58172 16.4183 2 12 2V2C7.58172 2 4 5.58172 4 10V14C4 18.4183 7.58172 22 12 22Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" fill-rule="evenodd" clip-rule="evenodd" d="M12 22.75C7.16751 22.75 3.25 18.8325 3.25 14V10C3.25 5.16751 7.16751 1.25 12 1.25V1.25C16.8325 1.25 20.75 5.16751 20.75 10V14C20.75 18.8325 16.8325 22.75 12 22.75V22.75Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 7.25C12.4142 7.25 12.75 7.58579 12.75 8V10C12.75 10.4142 12.4142 10.75 12 10.75C11.5858 10.75 11.25 10.4142 11.25 10V8C11.25 7.58579 11.5858 7.25 12 7.25Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 22.75C7.16751 22.75 3.25 18.8325 3.25 14V10C3.25 5.16751 7.16751 1.25 12 1.25V1.25C16.8325 1.25 20.75 5.16751 20.75 10V14C20.75 18.8325 16.8325 22.75 12 22.75V22.75ZM12 7C11.4477 7 11 7.44772 11 8V10C11 10.5523 11.4477 11 12 11V11C12.5523 11 13 10.5523 13 10V8C13 7.44772 12.5523 7 12 7V7Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 2.58152C14.0736 2.20651 13.0609 2 12 2C7.58172 2 4 5.58172 4 10V14C4 18.4183 7.58172 22 12 22C16.4183 22 20 18.4183 20 14V10C20 8.10811 19.3433 6.3696 18.2454 5M12 8V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 8V10M12 22V22C16.4183 22 20 18.4183 20 14V10C20 5.58172 16.4183 2 12 2V2C7.58172 2 4 5.58172 4 10V14C4 18.4183 7.58172 22 12 22Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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