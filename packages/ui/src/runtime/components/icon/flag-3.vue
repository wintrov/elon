<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M5 4C13 4 12 8 20 8C19.2313 11.0749 17.2807 12.2292 15 12.7691" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 22V16M5 16V4V2M5 16C6.84692 12.9218 11.3469 13.6337 15 12.7691" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.12" d="M5 16V4C13 4 12 8 20 8C18 16 8 11 5 16Z" fill="currentColor"/>
<path d="M5 4V16M5 4V2M5 4C13 4 12 8 20 8C18 16 8 11 5 16M5 22V16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" d="M5.75 16.218C6.36416 15.3085 7.30031 14.8059 8.51578 14.4918C9.49605 14.2384 10.5676 14.1265 11.7183 14.0064C12.124 13.964 12.5395 13.9206 12.9644 13.8696C14.5372 13.6809 16.2025 13.3877 17.6108 12.5706C19.32 11.5788 20.1482 10.0007 20.6884 8.23769C20.786 7.91908 20.8348 7.75977 20.7984 7.62192C20.7672 7.50358 20.6885 7.39538 20.5856 7.32915C20.4657 7.252 20.2891 7.24913 19.936 7.2434C18.4825 7.21981 17.0348 7.11471 15.6376 6.66157C14.5634 6.31315 13.749 5.84987 12.8721 5.3488L12.8546 5.33877C11.9864 4.84269 11.0551 4.31046 9.82513 3.91157C8.73787 3.55894 7.44054 3.31694 5.75 3.2619V16.218Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 1.25C5.41421 1.25 5.75 1.58579 5.75 2V4V16V22C5.75 22.4142 5.41421 22.75 5 22.75C4.58579 22.75 4.25 22.4142 4.25 22V16V4V2C4.25 1.58579 4.58579 1.25 5 1.25Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.75 2C5.75 1.58579 5.41421 1.25 5 1.25C4.58579 1.25 4.25 1.58579 4.25 2V4V16V22C4.25 22.4142 4.58579 22.75 5 22.75C5.41421 22.75 5.75 22.4142 5.75 22V16.218C6.36416 15.3085 7.30031 14.8059 8.51578 14.4918C9.49605 14.2384 10.5676 14.1265 11.7183 14.0064C12.124 13.964 12.5395 13.9206 12.9644 13.8697C14.5372 13.6809 16.2025 13.3878 17.6108 12.5706C19.0609 11.7291 20.1811 10.3681 20.7276 8.1819C20.7836 7.95785 20.7333 7.72048 20.5912 7.53844C20.449 7.3564 20.231 7.25 20 7.25C18.0652 7.25 16.7074 7.00853 15.6376 6.66158C14.5634 6.31317 13.749 5.84989 12.8721 5.34882L12.8546 5.33879C11.9864 4.84271 11.0551 4.31048 9.82513 3.91158C8.73787 3.55896 7.44054 3.31696 5.75 3.26192V2Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 4V16V22M5 4V2M5 4C13 4 12 8 20 8C18.5788 13.6847 13.1181 12.8052 9 13.6141" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 4V16M5 4V2M5 4C13 4 12 8 20 8C18 16 8 11 5 16M5 22V16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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