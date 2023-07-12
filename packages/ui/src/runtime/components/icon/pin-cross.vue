<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M9.5 9.5L12 12M12 12L14.5 14.5M12 12L9.5 14.5M12 12L14.5 9.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 10.5C3 5.5 7 2 12 2C17 2 21 5.5 21 10.5C21 18.3518 14 21.9998 12 21.9998C10 21.9998 3 18.3518 3 10.5Z" stroke="currentColor" stroke-width="1.5"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.12" d="M3 10.5C3 5.5 7 2 12 2C17 2 21 5.5 21 10.5C21 18.3518 14 21.9998 12 21.9998C10 21.9998 3 18.3518 3 10.5Z" fill="currentColor"/>
<path d="M9.5 9.5L12 12M12 12L14.5 14.5M12 12L9.5 14.5M12 12L14.5 9.5M12 21.9998C14 21.9998 21 18.3518 21 10.5C21 5.5 17 2 12 2C7 2 3 5.5 3 10.5C3 18.3518 10 21.9998 12 21.9998Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" d="M12 1.25C6.64344 1.25 2.25 5.03039 2.25 10.5C2.25 14.6709 4.1156 17.7331 6.23437 19.739C7.29094 20.7393 8.41559 21.4828 9.41692 21.9791C10.3934 22.4631 11.3293 22.7498 12 22.7498C12.6707 22.7498 13.6066 22.4631 14.5831 21.9791C15.5844 21.4828 16.7091 20.7393 17.7656 19.739C19.8844 17.7331 21.75 14.6709 21.75 10.5C21.75 5.03039 17.3566 1.25 12 1.25Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.96967 8.96967C9.26256 8.67678 9.73744 8.67678 10.0303 8.96967L12 10.9393L13.9697 8.96967C14.2626 8.67678 14.7374 8.67678 15.0303 8.96967C15.3232 9.26256 15.3232 9.73744 15.0303 10.0303L13.0607 12L15.0303 13.9697C15.3232 14.2626 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2626 15.3232 13.9697 15.0303L12 13.0607L10.0303 15.0303C9.73744 15.3232 9.26256 15.3232 8.96967 15.0303C8.67678 14.7374 8.67678 14.2626 8.96967 13.9697L10.9393 12L8.96967 10.0303C8.67678 9.73744 8.67678 9.26256 8.96967 8.96967Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 10.5C2.25 5.03039 6.64344 1.25 12 1.25C17.3566 1.25 21.75 5.03039 21.75 10.5C21.75 14.6709 19.8844 17.7331 17.7656 19.739C16.7091 20.7393 15.5844 21.4828 14.5831 21.9791C13.6066 22.4631 12.6707 22.7498 12 22.7498C11.3293 22.7498 10.3934 22.4631 9.41692 21.9791C8.41559 21.4828 7.29094 20.7393 6.23437 19.739C4.1156 17.7331 2.25 14.6709 2.25 10.5ZM10.0303 8.96967C9.73744 8.67678 9.26256 8.67678 8.96967 8.96967C8.67678 9.26256 8.67678 9.73744 8.96967 10.0303L10.9393 12L8.96967 13.9697C8.67678 14.2626 8.67678 14.7374 8.96967 15.0303C9.26256 15.3232 9.73744 15.3232 10.0303 15.0303L12 13.0607L13.9697 15.0303C14.2626 15.3232 14.7374 15.3232 15.0303 15.0303C15.3232 14.7374 15.3232 14.2626 15.0303 13.9697L13.0607 12L15.0303 10.0303C15.3232 9.73744 15.3232 9.26256 15.0303 8.96967C14.7374 8.67678 14.2626 8.67678 13.9697 8.96967L12 10.9393L10.0303 8.96967Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.7315 6C20.5379 7.27435 21 8.80053 21 10.5C21 18.3518 14 21.9998 12 21.9998C10 21.9998 3 18.3518 3 10.5C3 5.5 7 2 12 2C13.5921 2 15.0827 2.35486 16.3752 3M9.5 9.5L12 12M12 12L14.5 14.5M12 12L9.5 14.5M12 12L14.5 9.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.5 9.5L12 12M12 12L14.5 14.5M12 12L9.5 14.5M12 12L14.5 9.5M12 21.9998C14 21.9998 21 18.3518 21 10.5C21 5.5 17 2 12 2C7 2 3 5.5 3 10.5C3 18.3518 10 21.9998 12 21.9998Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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