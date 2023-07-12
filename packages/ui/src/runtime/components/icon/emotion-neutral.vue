<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M9.5 10C9.5 10.2761 9.27614 10.5 9 10.5C8.72386 10.5 8.5 10.2761 8.5 10M9.5 10C9.5 9.72386 9.27614 9.5 9 9.5C8.72386 9.5 8.5 9.72386 8.5 10M9.5 10H8.5M15.5 10C15.5 10.2761 15.2761 10.5 15 10.5C14.7239 10.5 14.5 10.2761 14.5 10M15.5 10C15.5 9.72386 15.2761 9.5 15 9.5C14.7239 9.5 14.5 9.72386 14.5 10M15.5 10H14.5M15 15H9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 3.33782C15.5291 2.48697 13.8214 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.96818 21.394 8.0779 20.353 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.12" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"/>
<path d="M9.5 10C9.5 10.2761 9.27614 10.5 9 10.5C8.72386 10.5 8.5 10.2761 8.5 10M9.5 10C9.5 9.72386 9.27614 9.5 9 9.5C8.72386 9.5 8.5 9.72386 8.5 10M9.5 10H8.5M15.5 10C15.5 10.2761 15.2761 10.5 15 10.5C14.7239 10.5 14.5 10.2761 14.5 10M15.5 10C15.5 9.72386 15.2761 9.5 15 9.5C14.7239 9.5 14.5 9.72386 14.5 10M15.5 10H14.5M15 15H9M12 22V22C17.5228 22 22 17.5228 22 12V12C22 6.47715 17.5228 2 12 2V2C6.47715 2 2 6.47715 2 12V12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 10C7.75 9.30964 8.30964 8.75 9 8.75C9.69036 8.75 10.25 9.30964 10.25 10C10.25 10.6904 9.69036 11.25 9 11.25C8.30964 11.25 7.75 10.6904 7.75 10ZM13.75 10C13.75 9.30964 14.3096 8.75 15 8.75C15.6904 8.75 16.25 9.30964 16.25 10C16.25 10.6904 15.6904 11.25 15 11.25C14.3096 11.25 13.75 10.6904 13.75 10ZM8.25 15C8.25 14.5858 8.58579 14.25 9 14.25H15C15.4142 14.25 15.75 14.5858 15.75 15C15.75 15.4142 15.4142 15.75 15 15.75H9C8.58579 15.75 8.25 15.4142 8.25 15Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM9 8.75C8.30964 8.75 7.75 9.30964 7.75 10C7.75 10.6904 8.30964 11.25 9 11.25C9.69036 11.25 10.25 10.6904 10.25 10C10.25 9.30964 9.69036 8.75 9 8.75ZM15 8.75C14.3096 8.75 13.75 9.30964 13.75 10C13.75 10.6904 14.3096 11.25 15 11.25C15.6904 11.25 16.25 10.6904 16.25 10C16.25 9.30964 15.6904 8.75 15 8.75ZM9 14.25C8.58579 14.25 8.25 14.5858 8.25 15C8.25 15.4142 8.58579 15.75 9 15.75H15C15.4142 15.75 15.75 15.4142 15.75 15C15.75 14.5858 15.4142 14.25 15 14.25H9Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.5 10C9.5 10.2761 9.27614 10.5 9 10.5C8.72386 10.5 8.5 10.2761 8.5 10M9.5 10C9.5 9.72386 9.27614 9.5 9 9.5C8.72386 9.5 8.5 9.72386 8.5 10M9.5 10H8.5M15.5 10C15.5 10.2761 15.2761 10.5 15 10.5C14.7239 10.5 14.5 10.2761 14.5 10M15.5 10C15.5 9.72386 15.2761 9.5 15 9.5C14.7239 9.5 14.5 9.72386 14.5 10M15.5 10H14.5M15 15H9M17 3.33782C15.5291 2.48697 13.8214 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.96818 21.394 8.0779 20.353 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.5 10C9.5 10.2761 9.27614 10.5 9 10.5C8.72386 10.5 8.5 10.2761 8.5 10M9.5 10C9.5 9.72386 9.27614 9.5 9 9.5C8.72386 9.5 8.5 9.72386 8.5 10M9.5 10H8.5M15.5 10C15.5 10.2761 15.2761 10.5 15 10.5C14.7239 10.5 14.5 10.2761 14.5 10M15.5 10C15.5 9.72386 15.2761 9.5 15 9.5C14.7239 9.5 14.5 9.72386 14.5 10M15.5 10H14.5M15 15H9M12 22V22C17.5228 22 22 17.5228 22 12V12C22 6.47715 17.5228 2 12 2V2C6.47715 2 2 6.47715 2 12V12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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