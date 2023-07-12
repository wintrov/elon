<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M10 15L14 11M10 11L14 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 3C7.74741 3 4.3 6.55187 4.3 10.9333C4.3 10.9809 4.30041 11.0284 4.30122 11.0758C2.40285 11.5786 1 13.3539 1 15.4667C1 17.9704 2.96995 20 5.4 20H17.5C20.5376 20 23 17.4629 23 14.3333C23 11.9231 21.5395 9.86433 19.4806 9.0452C18.6584 5.5753 15.6211 3 12 3Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.12" d="M12 3C7.74741 3 4.3 6.55187 4.3 10.9333C4.3 10.9809 4.30041 11.0284 4.30122 11.0758C2.40285 11.5786 1 13.3539 1 15.4667C1 17.9704 2.96995 20 5.4 20H17.5C20.5376 20 23 17.4629 23 14.3333C23 11.9231 21.5395 9.86433 19.4806 9.0452C18.6584 5.5753 15.6211 3 12 3Z" fill="currentColor"/>
<path d="M10 15L12 13M12 13L14 11M12 13L10 11M12 13L14 15M4.3 10.9333C4.3 6.55187 7.74741 3 12 3C15.6211 3 18.6584 5.5753 19.4806 9.0452C21.5395 9.86433 23 11.9231 23 14.3333C23 17.4629 20.5376 20 17.5 20H5.4C2.96995 20 1 17.9704 1 15.4667C1 13.3539 2.40285 11.5786 4.30122 11.0758C4.30041 11.0284 4.3 10.9809 4.3 10.9333Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" d="M12 2.25C7.4446 2.25 3.76319 5.9413 3.55893 10.5311C1.61442 11.2944 0.25 13.225 0.25 15.4667C0.25 18.3633 2.53479 20.75 5.4 20.75H17.5C20.9727 20.75 23.75 17.8559 23.75 14.3333C23.75 11.7563 22.268 9.52279 20.1145 8.50352C19.095 4.90344 15.8601 2.25 12 2.25Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.46967 10.4697C9.76256 10.1768 10.2374 10.1768 10.5303 10.4697L12 11.9393L13.4697 10.4697C13.7626 10.1768 14.2374 10.1768 14.5303 10.4697C14.8232 10.7626 14.8232 11.2374 14.5303 11.5303L13.0607 13L14.5303 14.4697C14.8232 14.7626 14.8232 15.2374 14.5303 15.5303C14.2374 15.8232 13.7626 15.8232 13.4697 15.5303L12 14.0607L10.5303 15.5303C10.2374 15.8232 9.76256 15.8232 9.46967 15.5303C9.17678 15.2374 9.17678 14.7626 9.46967 14.4697L10.9393 13L9.46967 11.5303C9.17678 11.2374 9.17678 10.7626 9.46967 10.4697Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.55893 10.5311C3.76319 5.9413 7.4446 2.25 12 2.25C15.8601 2.25 19.095 4.90344 20.1145 8.50352C22.268 9.52279 23.75 11.7563 23.75 14.3333C23.75 17.8559 20.9727 20.75 17.5 20.75H5.4C2.53479 20.75 0.25 18.3633 0.25 15.4667C0.25 13.225 1.61442 11.2944 3.55893 10.5311ZM10.5303 10.4697C10.2374 10.1768 9.76256 10.1768 9.46967 10.4697C9.17678 10.7626 9.17678 11.2374 9.46967 11.5303L10.9393 13L9.46967 14.4697C9.17678 14.7626 9.17678 15.2374 9.46967 15.5303C9.76256 15.8232 10.2374 15.8232 10.5303 15.5303L12 14.0607L13.4697 15.5303C13.7626 15.8232 14.2374 15.8232 14.5303 15.5303C14.8232 15.2374 14.8232 14.7626 14.5303 14.4697L13.0607 13L14.5303 11.5303C14.8232 11.2374 14.8232 10.7626 14.5303 10.4697C14.2374 10.1768 13.7626 10.1768 13.4697 10.4697L12 11.9393L10.5303 10.4697Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.4806 9.0452C21.5395 9.86433 23 11.9231 23 14.3333C23 17.4629 20.5376 20 17.5 20H5.4C2.96995 20 1 17.9704 1 15.4667C1 13.3539 2.40285 11.5786 4.30122 11.0758C4.30041 11.0284 4.3 10.9809 4.3 10.9333C4.3 6.55187 7.74741 3 12 3C13.9084 3 15.6547 3.71532 17 4.89992M10 15L12 13M12 13L14 11M12 13L10 11M12 13L14 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 15L12 13M12 13L14 11M12 13L10 11M12 13L14 15M4.3 10.9333C4.3 6.55187 7.74741 3 12 3C15.6211 3 18.6584 5.5753 19.4806 9.0452C21.5395 9.86433 23 11.9231 23 14.3333C23 17.4629 20.5376 20 17.5 20H5.4C2.96995 20 1 17.9704 1 15.4667C1 13.3539 2.40285 11.5786 4.30122 11.0758C4.30041 11.0284 4.3 10.9809 4.3 10.9333Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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