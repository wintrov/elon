<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M3 22H21M3 2H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="4" y="7" width="16" height="10" rx="3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.12" x="4" y="7" width="16" height="10" rx="3" fill="currentColor"/>
<path d="M3 22H21M3 2H21M8.8 17H15.2C16.8802 17 17.7202 17 18.362 16.673C18.9265 16.3854 19.3854 15.9265 19.673 15.362C20 14.7202 20 13.8802 20 12.2V11.8C20 10.1198 20 9.27976 19.673 8.63803C19.3854 8.07354 18.9265 7.6146 18.362 7.32698C17.7202 7 16.8802 7 15.2 7H8.8C7.11984 7 6.27976 7 5.63803 7.32698C5.07354 7.6146 4.6146 8.07354 4.32698 8.63803C4 9.27976 4 10.1198 4 11.8V12.2C4 13.8802 4 14.7202 4.32698 15.362C4.6146 15.9265 5.07354 16.3854 5.63803 16.673C6.27976 17 7.11984 17 8.8 17Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" d="M8.85 6.25C6.88982 6.25 5.90972 6.25 5.16103 6.63148C4.50247 6.96703 3.96703 7.50247 3.63148 8.16103C3.25 8.90972 3.25 9.88982 3.25 11.85V12.15C3.25 14.1102 3.25 15.0903 3.63148 15.839C3.96703 16.4975 4.50247 17.033 5.16103 17.3685C5.90972 17.75 6.88982 17.75 8.85 17.75H15.15C17.1102 17.75 18.0903 17.75 18.839 17.3685C19.4975 17.033 20.033 16.4975 20.3685 15.839C20.75 15.0903 20.75 14.1102 20.75 12.15V11.85C20.75 9.88982 20.75 8.90972 20.3685 8.16103C20.033 7.50247 19.4975 6.96703 18.839 6.63148C18.0903 6.25 17.1102 6.25 15.15 6.25H8.85Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 2C2.25 1.58579 2.58579 1.25 3 1.25H21C21.4142 1.25 21.75 1.58579 21.75 2C21.75 2.41421 21.4142 2.75 21 2.75H3C2.58579 2.75 2.25 2.41421 2.25 2ZM2.25 22C2.25 21.5858 2.58579 21.25 3 21.25H21C21.4142 21.25 21.75 21.5858 21.75 22C21.75 22.4142 21.4142 22.75 21 22.75H3C2.58579 22.75 2.25 22.4142 2.25 22Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 1.25C2.58579 1.25 2.25 1.58579 2.25 2C2.25 2.41421 2.58579 2.75 3 2.75H21C21.4142 2.75 21.75 2.41421 21.75 2C21.75 1.58579 21.4142 1.25 21 1.25H3ZM3 21.25C2.58579 21.25 2.25 21.5858 2.25 22C2.25 22.4142 2.58579 22.75 3 22.75H21C21.4142 22.75 21.75 22.4142 21.75 22C21.75 21.5858 21.4142 21.25 21 21.25H3ZM5.16103 6.63148C5.90972 6.25 6.88982 6.25 8.85 6.25H15.15C17.1102 6.25 18.0903 6.25 18.839 6.63148C19.4975 6.96703 20.033 7.50247 20.3685 8.16103C20.75 8.90972 20.75 9.88982 20.75 11.85V12.15C20.75 14.1102 20.75 15.0903 20.3685 15.839C20.033 16.4975 19.4975 17.033 18.839 17.3685C18.0903 17.75 17.1102 17.75 15.15 17.75H8.85C6.88982 17.75 5.90972 17.75 5.16103 17.3685C4.50247 17.033 3.96703 16.4975 3.63148 15.839C3.25 15.0903 3.25 14.1102 3.25 12.15V11.85C3.25 9.88982 3.25 8.90972 3.63148 8.16103C3.96703 7.50247 4.50247 6.96703 5.16103 6.63148Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 7H9.5H8.8C7.11984 7 6.27976 7 5.63803 7.32698C5.07354 7.6146 4.6146 8.07354 4.32698 8.63803C4 9.27976 4 10.1198 4 11.8V12.2C4 13.8802 4 14.7202 4.32698 15.362C4.6146 15.9265 5.07354 16.3854 5.63803 16.673C6.27976 17 7.11984 17 8.8 17H15.2C16.8802 17 17.7202 17 18.362 16.673C18.9265 16.3854 19.3854 15.9265 19.673 15.362C20 14.7202 20 13.8802 20 12.2V11.8C20 10.1198 20 9.27976 19.673 8.63803C19.3854 8.07354 18.9265 7.6146 18.362 7.32698C17.7202 7 16.8802 7 15.2 7H14.5H14M3 22H21M3 2H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 22H21M3 2H21M8.8 17H15.2C16.8802 17 17.7202 17 18.362 16.673C18.9265 16.3854 19.3854 15.9265 19.673 15.362C20 14.7202 20 13.8802 20 12.2V11.8C20 10.1198 20 9.27976 19.673 8.63803C19.3854 8.07354 18.9265 7.6146 18.362 7.32698C17.7202 7 16.8802 7 15.2 7H8.8C7.11984 7 6.27976 7 5.63803 7.32698C5.07354 7.6146 4.6146 8.07354 4.32698 8.63803C4 9.27976 4 10.1198 4 11.8V12.2C4 13.8802 4 14.7202 4.32698 15.362C4.6146 15.9265 5.07354 16.3854 5.63803 16.673C6.27976 17 7.11984 17 8.8 17Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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