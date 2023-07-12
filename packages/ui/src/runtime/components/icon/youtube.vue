<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M10 15L15 12L10 9V15Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 12C22 4 21 3 12 3C3 3 2 4 2 12C2 20.0001 3 21 12 21C21 21 22 20.0001 22 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.12" fill-rule="evenodd" clip-rule="evenodd" d="M12 3C21 3 22 4 22 12C22 20.0001 21 21 12 21C3 21 2 20.0001 2 12C2 4 3 3 12 3ZM15 12L10 15V9L15 12Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 15L15 12L10 9V15Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" d="M12 2.25C9.74786 2.25 7.94527 2.31166 6.52147 2.54078C5.09658 2.77007 3.96228 3.17979 3.12049 3.94505C2.26929 4.71887 1.81192 5.76906 1.56037 7.07713C1.3112 8.3728 1.25 9.99883 1.25 12C1.25 14.0012 1.3112 15.6273 1.56037 16.9229C1.81192 18.231 2.26929 19.2812 3.1205 20.055C3.96228 20.8203 5.09658 21.23 6.52147 21.4593C7.94527 21.6884 9.74786 21.75 12 21.75C14.2521 21.75 16.0547 21.6884 17.4785 21.4593C18.9034 21.23 20.0377 20.8203 20.8795 20.055C21.7307 19.2812 22.1881 18.231 22.4396 16.9229C22.6888 15.6273 22.75 14.0012 22.75 12C22.75 9.99883 22.6888 8.3728 22.4396 7.07713C22.1881 5.76906 21.7307 4.71887 20.8795 3.94505C20.0377 3.17979 18.9034 2.77007 17.4785 2.54078C16.0547 2.31166 14.2521 2.25 12 2.25Z" fill="currentColor"/>
<path d="M10.3859 8.35688C10.1542 8.21786 9.86561 8.21422 9.63048 8.34735C9.39534 8.48048 9.25 8.7298 9.25 9V15C9.25 15.2702 9.39534 15.5195 9.63048 15.6526C9.86561 15.7858 10.1542 15.7821 10.3859 15.6431L15.3859 12.6431C15.6118 12.5076 15.75 12.2634 15.75 12C15.75 11.7366 15.6118 11.4924 15.3859 11.3569L10.3859 8.35688Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.52147 2.54078C7.94527 2.31166 9.74786 2.25 12 2.25C14.2521 2.25 16.0547 2.31166 17.4785 2.54078C18.9034 2.77007 20.0377 3.17979 20.8795 3.94505C21.7307 4.71887 22.1881 5.76906 22.4396 7.07713C22.6888 8.3728 22.75 9.99883 22.75 12C22.75 14.0012 22.6888 15.6273 22.4396 16.9229C22.1881 18.231 21.7307 19.2812 20.8795 20.055C20.0377 20.8203 18.9034 21.23 17.4785 21.4593C16.0547 21.6884 14.2521 21.75 12 21.75C9.74786 21.75 7.94527 21.6884 6.52147 21.4593C5.09658 21.23 3.96228 20.8203 3.1205 20.055C2.26929 19.2812 1.81192 18.231 1.56037 16.9229C1.3112 15.6273 1.25 14.0012 1.25 12C1.25 9.99883 1.3112 8.3728 1.56037 7.07713C1.81192 5.76906 2.26929 4.71887 3.12049 3.94505C3.96228 3.17979 5.09658 2.77007 6.52147 2.54078ZM9.63048 8.34735C9.86561 8.21422 10.1542 8.21786 10.3859 8.35688L15.3859 11.3569C15.6118 11.4924 15.75 11.7366 15.75 12C15.75 12.2634 15.6118 12.5076 15.3859 12.6431L10.3859 15.6431C10.1542 15.7821 9.86561 15.7858 9.63048 15.6526C9.39534 15.5195 9.25 15.2702 9.25 15V9C9.25 8.7298 9.39534 8.48048 9.63048 8.34735Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 3.02197C2.84719 3.20342 2 4.63653 2 12C2 20 3 21 12 21C21 21 22 20 22 12C22 4.63653 21.1528 3.20342 14 3.02197M10 15L15 12L10 8.99995V15Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 15L15 12L10 9V15Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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