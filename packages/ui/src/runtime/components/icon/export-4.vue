<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M12 16V2M12 2L8 6M12 2L16 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 16C2 12.6863 4.68629 10 8 10H16C19.3137 10 22 12.6863 22 16V16C22 19.3137 19.3137 22 16 22H8C4.68629 22 2 19.3137 2 16V16Z" stroke="currentColor" stroke-width="1.5"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.12" x="2" y="10" width="20" height="12" rx="6" fill="currentColor"/>
<path d="M12 16V2M12 2L8 6M12 2L16 6M8 22H16C19.3137 22 22 19.3137 22 16V16C22 12.6863 19.3137 10 16 10H8C4.68629 10 2 12.6863 2 16V16C2 19.3137 4.68629 22 8 22Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" d="M8 9.25C4.27208 9.25 1.25 12.2721 1.25 16V16C1.25 19.7279 4.27208 22.75 8 22.75H16C19.7279 22.75 22.75 19.7279 22.75 16V16C22.75 12.2721 19.7279 9.25 16 9.25H8Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.4697 1.46967C11.7626 1.17678 12.2374 1.17678 12.5303 1.46967L16.5303 5.46967C16.8232 5.76256 16.8232 6.23744 16.5303 6.53033C16.2374 6.82322 15.7626 6.82322 15.4697 6.53033L12.75 3.81066V16C12.75 16.4142 12.4142 16.75 12 16.75C11.5858 16.75 11.25 16.4142 11.25 16V3.81066L8.53033 6.53033C8.23744 6.82322 7.76256 6.82322 7.46967 6.53033C7.17678 6.23744 7.17678 5.76256 7.46967 5.46967L11.4697 1.46967Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.5303 1.46967C12.2374 1.17678 11.7626 1.17678 11.4697 1.46967L7.46967 5.46967C7.17678 5.76256 7.17678 6.23744 7.46967 6.53033C7.76256 6.82322 8.23744 6.82322 8.53033 6.53033L11.25 3.81066V9.25H8C4.27208 9.25 1.25 12.2721 1.25 16C1.25 19.7279 4.27208 22.75 8 22.75H16C19.7279 22.75 22.75 19.7279 22.75 16C22.75 12.2721 19.7279 9.25 16 9.25H12.75V3.81066L15.4697 6.53033C15.7626 6.82322 16.2374 6.82322 16.5303 6.53033C16.8232 6.23744 16.8232 5.76256 16.5303 5.46967L12.5303 1.46967ZM12.75 9.25L11.25 9.25L11.25 16C11.25 16.4142 11.5858 16.75 12 16.75C12.4142 16.75 12.75 16.4142 12.75 16L12.75 9.25Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.5 22H8C4.68629 22 2 19.3137 2 16C2 12.6863 4.68629 10 8 10H16C19.3137 10 22 12.6863 22 16C22 19.3137 19.3137 22 16 22H14.5M12 16V2M12 2L8 6M12 2L16 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 16V2M12 2L8 6M12 2L16 6M8 22H16C19.3137 22 22 19.3137 22 16V16C22 12.6863 19.3137 10 16 10H8C4.68629 10 2 12.6863 2 16V16C2 19.3137 4.68629 22 8 22Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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