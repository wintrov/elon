<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M13 11L22 2M22 2H17M22 2V7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle opacity="0.12" cx="12" cy="12" r="10" fill="currentColor"/>
<path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2M13 11L22 2M22 2H17M22 2V7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" d="M11 2.5C5.20101 2.5 0.5 7.20101 0.5 13C0.5 18.799 5.20101 23.5 11 23.5C16.799 23.5 21.5 18.799 21.5 13C21.5 7.20101 16.799 2.5 11 2.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17 2.75C16.5858 2.75 16.25 2.41421 16.25 2C16.25 1.58579 16.5858 1.25 17 1.25H22C22.4142 1.25 22.75 1.58579 22.75 2V7C22.75 7.41421 22.4142 7.75 22 7.75C21.5858 7.75 21.25 7.41421 21.25 7V3.81066L11.5303 13.5303C11.2374 13.8232 10.7626 13.8232 10.4697 13.5303C10.1768 13.2374 10.1768 12.7626 10.4697 12.4697L20.1893 2.75H17Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.25 2C16.25 2.41421 16.5858 2.75 17 2.75H20.1893L17.8754 5.0639C16.0334 3.46661 13.6296 2.5 11 2.5C5.20101 2.5 0.5 7.20101 0.5 13C0.5 18.799 5.20101 23.5 11 23.5C16.799 23.5 21.5 18.799 21.5 13C21.5 10.3704 20.5334 7.96665 18.9361 6.12456L21.25 3.81066V7C21.25 7.41421 21.5858 7.75 22 7.75C22.4142 7.75 22.75 7.41421 22.75 7V2C22.75 1.58579 22.4142 1.25 22 1.25H17C16.5858 1.25 16.25 1.58579 16.25 2ZM18.9361 6.12456C18.6082 5.74636 18.2536 5.39184 17.8754 5.0639L10.4697 12.4697C10.1768 12.7626 10.1768 13.2374 10.4697 13.5303C10.7626 13.8232 11.2374 13.8232 11.5303 13.5303L18.9361 6.12456Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12C22 17.5228 17.5228 22 12 22C10.1786 22 8.47087 21.513 7 20.6622M12 2C6.47715 2 2 6.47715 2 12C2 13.8214 2.48697 15.5291 3.33782 17M22 2H17M22 2V7M22 2L13 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2M13 11L22 2M22 2H17M22 2V7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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