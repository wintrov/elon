<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M12 3C15.6211 3 18.6584 5.5753 19.4806 9.0452C21.5395 9.86433 23 11.9231 23 14.3333" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 3C7.74741 3 4.3 6.55187 4.3 10.9333C4.3 10.9809 4.30041 11.0284 4.30122 11.0758C2.40285 11.5786 1 13.3539 1 15.4667C1 17.9704 2.96995 20 5.4 20H17.5C20.5376 20 23 17.4629 23 14.3333" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.12" d="M12 3C7.74741 3 4.3 6.55187 4.3 10.9333C4.3 10.9809 4.30041 11.0284 4.30122 11.0758C2.40285 11.5786 1 13.3539 1 15.4667C1 17.9704 2.96995 20 5.4 20H17.5C20.5376 20 23 17.4629 23 14.3333C23 11.9231 21.5395 9.86433 19.4806 9.0452C18.6584 5.5753 15.6211 3 12 3Z" fill="currentColor"/>
<path d="M12 3C7.74741 3 4.3 6.55187 4.3 10.9333C4.3 10.9809 4.30041 11.0284 4.30122 11.0758C2.40285 11.5786 1 13.3539 1 15.4667C1 17.9704 2.96995 20 5.4 20H17.5C20.5376 20 23 17.4629 23 14.3333C23 11.9231 21.5395 9.86433 19.4806 9.0452C18.6584 5.5753 15.6211 3 12 3Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" d="M12 2.25C7.4446 2.25 3.76319 5.9413 3.55893 10.5311C1.61442 11.2944 0.25 13.225 0.25 15.4667C0.25 18.3633 2.53479 20.75 5.4 20.75H17.5C20.9727 20.75 23.75 17.8559 23.75 14.3333C23.75 11.7563 22.268 9.52279 20.1145 8.50352C19.095 4.90344 15.8601 2.25 12 2.25Z" fill="currentColor"/>
<path d="M5.4 20.75C2.53479 20.75 0.25 18.3633 0.25 15.4667H23.6525C23.1324 18.4559 20.5919 20.75 17.5 20.75H5.4Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2.25C7.4446 2.25 3.76319 5.9413 3.55893 10.5311C1.61442 11.2944 0.25 13.225 0.25 15.4667C0.25 18.3633 2.53479 20.75 5.4 20.75H17.5C20.9727 20.75 23.75 17.8559 23.75 14.3333C23.75 11.7563 22.268 9.52279 20.1145 8.50352C19.095 4.90344 15.8601 2.25 12 2.25Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.4806 9.0452C21.5395 9.86433 23 11.9231 23 14.3333C23 17.4629 20.5376 20 17.5 20H5.4C2.96995 20 1 17.9704 1 15.4667C1 13.3539 2.40285 11.5786 4.30122 11.0758C4.30041 11.0284 4.3 10.9809 4.3 10.9333C4.3 6.55187 7.74741 3 12 3C13.9084 3 15.6547 3.71532 17 4.89992" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3C7.74741 3 4.3 6.55187 4.3 10.9333C4.3 10.9809 4.30041 11.0284 4.30122 11.0758C2.40285 11.5786 1 13.3539 1 15.4667C1 17.9704 2.96995 20 5.4 20H17.5C20.5376 20 23 17.4629 23 14.3333C23 11.9231 21.5395 9.86433 19.4806 9.0452C18.6584 5.5753 15.6211 3 12 3Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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