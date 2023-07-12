<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M2 3L2 21M22 3V21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="7" y="4" width="10" height="16" rx="3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.12" x="7" y="4" width="10" height="16" rx="3" fill="currentColor"/>
<path d="M2 3L2 21M22 3V21M11.8 20H12.2C13.8802 20 14.7202 20 15.362 19.673C15.9265 19.3854 16.3854 18.9265 16.673 18.362C17 17.7202 17 16.8802 17 15.2V8.8C17 7.11984 17 6.27976 16.673 5.63803C16.3854 5.07354 15.9265 4.6146 15.362 4.32698C14.7202 4 13.8802 4 12.2 4H11.8C10.1198 4 9.27976 4 8.63803 4.32698C8.07354 4.6146 7.6146 5.07354 7.32698 5.63803C7 6.27976 7 7.11984 7 8.8V15.2C7 16.8802 7 17.7202 7.32698 18.362C7.6146 18.9265 8.07354 19.3854 8.63803 19.673C9.27976 20 10.1198 20 11.8 20Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" d="M11.85 3.25C9.88982 3.25 8.90972 3.25 8.16103 3.63148C7.50247 3.96703 6.96703 4.50247 6.63148 5.16103C6.25 5.90972 6.25 6.88982 6.25 8.85V15.15C6.25 17.1102 6.25 18.0903 6.63148 18.839C6.96703 19.4975 7.50247 20.033 8.16103 20.3685C8.90972 20.75 9.88982 20.75 11.85 20.75H12.15C14.1102 20.75 15.0903 20.75 15.839 20.3685C16.4975 20.033 17.033 19.4975 17.3685 18.839C17.75 18.0903 17.75 17.1102 17.75 15.15V8.85C17.75 6.88982 17.75 5.90972 17.3685 5.16103C17.033 4.50247 16.4975 3.96703 15.839 3.63148C15.0903 3.25 14.1102 3.25 12.15 3.25H11.85Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 2.25C2.41421 2.25 2.75 2.58579 2.75 3L2.75 21C2.75 21.4142 2.41421 21.75 2 21.75C1.58579 21.75 1.25 21.4142 1.25 21L1.25 3C1.25 2.58579 1.58579 2.25 2 2.25ZM22 2.25C22.4142 2.25 22.75 2.58579 22.75 3V21C22.75 21.4142 22.4142 21.75 22 21.75C21.5858 21.75 21.25 21.4142 21.25 21V3C21.25 2.58579 21.5858 2.25 22 2.25Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.75 3C2.75 2.58579 2.41421 2.25 2 2.25C1.58579 2.25 1.25 2.58579 1.25 3V21C1.25 21.4142 1.58579 21.75 2 21.75C2.41421 21.75 2.75 21.4142 2.75 21L2.75 3ZM22.75 3C22.75 2.58579 22.4142 2.25 22 2.25C21.5858 2.25 21.25 2.58579 21.25 3V21C21.25 21.4142 21.5858 21.75 22 21.75C22.4142 21.75 22.75 21.4142 22.75 21V3ZM8.16103 3.63148C8.90972 3.25 9.88982 3.25 11.85 3.25H12.15C14.1102 3.25 15.0903 3.25 15.839 3.63148C16.4975 3.96703 17.033 4.50247 17.3685 5.16103C17.75 5.90972 17.75 6.88982 17.75 8.85V15.15C17.75 17.1102 17.75 18.0903 17.3685 18.839C17.033 19.4975 16.4975 20.033 15.839 20.3685C15.0903 20.75 14.1102 20.75 12.15 20.75H11.85C9.88982 20.75 8.90972 20.75 8.16103 20.3685C7.50247 20.033 6.96703 19.4975 6.63148 18.839C6.25 18.0903 6.25 17.1102 6.25 15.15V8.85C6.25 6.88982 6.25 5.90972 6.63148 5.16103C6.96703 4.50247 7.50247 3.96703 8.16103 3.63148Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 10V9.5V8.8C17 7.11984 17 6.27976 16.673 5.63803C16.3854 5.07354 15.9265 4.6146 15.362 4.32698C14.7202 4 13.8802 4 12.2 4H11.8C10.1198 4 9.27976 4 8.63803 4.32698C8.07354 4.6146 7.6146 5.07354 7.32698 5.63803C7 6.27976 7 7.11984 7 8.8V15.2C7 16.8802 7 17.7202 7.32698 18.362C7.6146 18.9265 8.07354 19.3854 8.63803 19.673C9.27976 20 10.1198 20 11.8 20H12.2C13.8802 20 14.7202 20 15.362 19.673C15.9265 19.3854 16.3854 18.9265 16.673 18.362C17 17.7202 17 16.8802 17 15.2V14.5V14M2 3L2 21M22 3V21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 3L2 21M22 3V21M11.8 20H12.2C13.8802 20 14.7202 20 15.362 19.673C15.9265 19.3854 16.3854 18.9265 16.673 18.362C17 17.7202 17 16.8802 17 15.2V8.8C17 7.11984 17 6.27976 16.673 5.63803C16.3854 5.07354 15.9265 4.6146 15.362 4.32698C14.7202 4 13.8802 4 12.2 4H11.8C10.1198 4 9.27976 4 8.63803 4.32698C8.07354 4.6146 7.6146 5.07354 7.32698 5.63803C7 6.27976 7 7.11984 7 8.8V15.2C7 16.8802 7 17.7202 7.32698 18.362C7.6146 18.9265 8.07354 19.3854 8.63803 19.673C9.27976 20 10.1198 20 11.8 20Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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