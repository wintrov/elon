<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M10 14L20 4M10 14V9M10 14H15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.0001 2.20005C13.3538 2.06886 12.685 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.3151 21.9311 10.6462 21.8 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle opacity="0.12" cx="12" cy="12" r="10" fill="currentColor"/>
<path d="M14.0001 2.20005C13.3538 2.06886 12.685 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.3151 21.9311 10.6462 21.8 10M10 14L20 4M10 14V9M10 14H15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" d="M11 2.5C5.20101 2.5 0.5 7.20101 0.5 13C0.5 18.799 5.20101 23.5 11 23.5C16.799 23.5 21.5 18.799 21.5 13C21.5 7.20101 16.799 2.5 11 2.5Z" fill="currentColor"/>
<path opacity="0.9" fill-rule="evenodd" clip-rule="evenodd" d="M22.5303 1.46967C22.8232 1.76256 22.8232 2.23744 22.5303 2.53033L11.8107 13.25H15C15.4142 13.25 15.75 13.5858 15.75 14C15.75 14.4142 15.4142 14.75 15 14.75H10C9.58579 14.75 9.25 14.4142 9.25 14V9C9.25 8.58579 9.58579 8.25 10 8.25C10.4142 8.25 10.75 8.58579 10.75 9V12.1893L21.4697 1.46967C21.7626 1.17678 22.2374 1.17678 22.5303 1.46967Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.5303 2.53033C22.8232 2.23744 22.8232 1.76256 22.5303 1.46967C22.2374 1.17678 21.7626 1.17678 21.4697 1.46967L17.8754 5.0639C16.0334 3.46661 13.6296 2.5 11 2.5C5.20101 2.5 0.5 7.20101 0.5 13C0.5 18.799 5.20101 23.5 11 23.5C16.799 23.5 21.5 18.799 21.5 13C21.5 10.3704 20.5334 7.96665 18.9361 6.12456L22.5303 2.53033ZM18.9361 6.12456C18.6082 5.74636 18.2536 5.39184 17.8754 5.0639L10.75 12.1893V9C10.75 8.58579 10.4142 8.25 10 8.25C9.58579 8.25 9.25 8.58579 9.25 9V14C9.25 14.4142 9.58579 14.75 10 14.75H15C15.4142 14.75 15.75 14.4142 15.75 14C15.75 13.5858 15.4142 13.25 15 13.25H11.8107L18.9361 6.12456Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.0001 2.20005C13.3538 2.06886 12.685 2 12 2C6.47715 2 2 6.47715 2 12C2 13.8214 2.48697 15.5291 3.33782 17M21.8 10C21.9311 10.6462 22 11.3151 22 12C22 17.5228 17.5228 22 12 22C10.1786 22 8.47087 21.513 7 20.6622M10 14V9M10 14H15M10 14L20 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.0001 2.20005C13.3538 2.06886 12.685 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.3151 21.9311 10.6462 21.8 10M10 14L20 4M10 14V9M10 14H15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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