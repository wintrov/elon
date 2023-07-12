<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M9 12L11 14L16 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 10.5C3 5.5 7 2 12 2C17 2 21 5.5 21 10.5C21 18.3518 14 21.9998 12 21.9998C10 21.9998 3 18.3518 3 10.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.12" d="M3 10.5C3 5.5 7 2 12 2C17 2 21 5.5 21 10.5C21 18.3518 14 21.9998 12 21.9998C10 21.9998 3 18.3518 3 10.5Z" fill="currentColor"/>
<path d="M9 12L11 14L16 9M12 21.9998C14 21.9998 21 18.3518 21 10.5C21 5.5 17 2 12 2C7 2 3 5.5 3 10.5C3 18.3518 10 21.9998 12 21.9998Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" d="M12 1.25C6.64344 1.25 2.25 5.03039 2.25 10.5C2.25 14.6709 4.1156 17.7331 6.23437 19.739C7.29094 20.7393 8.41559 21.4828 9.41692 21.9791C10.3934 22.4631 11.3293 22.7498 12 22.7498C12.6707 22.7498 13.6066 22.4631 14.5831 21.9791C15.5844 21.4828 16.7091 20.7393 17.7656 19.739C19.8844 17.7331 21.75 14.6709 21.75 10.5C21.75 5.03039 17.3566 1.25 12 1.25Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.5303 8.46967C16.8232 8.76256 16.8232 9.23744 16.5303 9.53033L11.5303 14.5303C11.2374 14.8232 10.7626 14.8232 10.4697 14.5303L8.46967 12.5303C8.17678 12.2374 8.17678 11.7626 8.46967 11.4697C8.76256 11.1768 9.23744 11.1768 9.53033 11.4697L11 12.9393L15.4697 8.46967C15.7626 8.17678 16.2374 8.17678 16.5303 8.46967Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 10.5C2.25 5.03039 6.64344 1.25 12 1.25C17.3566 1.25 21.75 5.03039 21.75 10.5C21.75 14.6709 19.8844 17.7331 17.7656 19.739C16.7091 20.7393 15.5844 21.4828 14.5831 21.9791C13.6066 22.4631 12.6707 22.7498 12 22.7498C11.3293 22.7498 10.3934 22.4631 9.41692 21.9791C8.41559 21.4828 7.29094 20.7393 6.23437 19.739C4.1156 17.7331 2.25 14.6709 2.25 10.5ZM16.5303 9.53033C16.8232 9.23744 16.8232 8.76256 16.5303 8.46967C16.2374 8.17678 15.7626 8.17678 15.4697 8.46967L11 12.9393L9.53033 11.4697C9.23744 11.1768 8.76256 11.1768 8.46967 11.4697C8.17678 11.7626 8.17678 12.2374 8.46967 12.5303L10.4697 14.5303C10.7626 14.8232 11.2374 14.8232 11.5303 14.5303L16.5303 9.53033Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.7315 6C20.5379 7.27435 21 8.80053 21 10.5C21 18.3518 14 21.9998 12 21.9998C10 21.9998 3 18.3518 3 10.5C3 5.5 7 2 12 2C13.5921 2 15.0827 2.35486 16.3752 3M9 12L11 14L16 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 12L11 14L16 9M12 21.9998C14 21.9998 21 18.3518 21 10.5C21 5.5 17 2 12 2C7 2 3 5.5 3 10.5C3 18.3518 10 21.9998 12 21.9998Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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