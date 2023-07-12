<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M3 2H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="7" y="6" width="10" height="16" rx="3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.12" x="7" y="6" width="10" height="16" rx="3" fill="currentColor"/>
<path d="M3 2H21M11.8 22H12.2C13.8802 22 14.7202 22 15.362 21.673C15.9265 21.3854 16.3854 20.9265 16.673 20.362C17 19.7202 17 18.8802 17 17.2V10.8C17 9.11984 17 8.27976 16.673 7.63803C16.3854 7.07354 15.9265 6.6146 15.362 6.32698C14.7202 6 13.8802 6 12.2 6H11.8C10.1198 6 9.27976 6 8.63803 6.32698C8.07354 6.6146 7.6146 7.07354 7.32698 7.63803C7 8.27976 7 9.11984 7 10.8V17.2C7 18.8802 7 19.7202 7.32698 20.362C7.6146 20.9265 8.07354 21.3854 8.63803 21.673C9.27976 22 10.1198 22 11.8 22Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" d="M11.85 5.25C9.88982 5.25 8.90972 5.25 8.16103 5.63148C7.50247 5.96703 6.96703 6.50247 6.63148 7.16103C6.25 7.90972 6.25 8.88982 6.25 10.85V17.15C6.25 19.1102 6.25 20.0903 6.63148 20.839C6.96703 21.4975 7.50247 22.033 8.16103 22.3685C8.90972 22.75 9.88982 22.75 11.85 22.75H12.15C14.1102 22.75 15.0903 22.75 15.839 22.3685C16.4975 22.033 17.033 21.4975 17.3685 20.839C17.75 20.0903 17.75 19.1102 17.75 17.15V10.85C17.75 8.88982 17.75 7.90972 17.3685 7.16103C17.033 6.50247 16.4975 5.96703 15.839 5.63148C15.0903 5.25 14.1102 5.25 12.15 5.25H11.85Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 2C2.25 1.58579 2.58579 1.25 3 1.25H21C21.4142 1.25 21.75 1.58579 21.75 2C21.75 2.41421 21.4142 2.75 21 2.75H3C2.58579 2.75 2.25 2.41421 2.25 2Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 1.25C2.58579 1.25 2.25 1.58579 2.25 2C2.25 2.41421 2.58579 2.75 3 2.75H21C21.4142 2.75 21.75 2.41421 21.75 2C21.75 1.58579 21.4142 1.25 21 1.25H3ZM8.16103 5.63148C8.90972 5.25 9.88982 5.25 11.85 5.25H12.15C14.1102 5.25 15.0903 5.25 15.839 5.63148C16.4975 5.96703 17.033 6.50247 17.3685 7.16103C17.75 7.90972 17.75 8.88982 17.75 10.85V17.15C17.75 19.1102 17.75 20.0903 17.3685 20.839C17.033 21.4975 16.4975 22.033 15.839 22.3685C15.0903 22.75 14.1102 22.75 12.15 22.75H11.85C9.88982 22.75 8.90972 22.75 8.16103 22.3685C7.50247 22.033 6.96703 21.4975 6.63148 20.839C6.25 20.0903 6.25 19.1102 6.25 17.15V10.85C6.25 8.88982 6.25 7.90972 6.63148 7.16103C6.96703 6.50247 7.50247 5.96703 8.16103 5.63148Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 12V11.5V10.8C7 9.11984 7 8.27976 7.32698 7.63803C7.6146 7.07354 8.07354 6.6146 8.63803 6.32698C9.27976 6 10.1198 6 11.8 6H12.2C13.8802 6 14.7202 6 15.362 6.32698C15.9265 6.6146 16.3854 7.07354 16.673 7.63803C17 8.27976 17 9.11984 17 10.8V17.2C17 18.8802 17 19.7202 16.673 20.362C16.3854 20.9265 15.9265 21.3854 15.362 21.673C14.7202 22 13.8802 22 12.2 22H11.8C10.1198 22 9.27976 22 8.63803 21.673C8.07354 21.3854 7.6146 20.9265 7.32698 20.362C7 19.7202 7 18.8802 7 17.2V16.5V16M3 2H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 2H21M11.8 22H12.2C13.8802 22 14.7202 22 15.362 21.673C15.9265 21.3854 16.3854 20.9265 16.673 20.362C17 19.7202 17 18.8802 17 17.2V10.8C17 9.11984 17 8.27976 16.673 7.63803C16.3854 7.07354 15.9265 6.6146 15.362 6.32698C14.7202 6 13.8802 6 12.2 6H11.8C10.1198 6 9.27976 6 8.63803 6.32698C8.07354 6.6146 7.6146 7.07354 7.32698 7.63803C7 8.27976 7 9.11984 7 10.8V17.2C7 18.8802 7 19.7202 7.32698 20.362C7.6146 20.9265 8.07354 21.3854 8.63803 21.673C9.27976 22 10.1198 22 11.8 22Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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