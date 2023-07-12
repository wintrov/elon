<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M3 22H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="7" y="2" width="10" height="16" rx="3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.12" x="7" y="2" width="10" height="16" rx="3" fill="currentColor"/>
<path d="M3 22H21M11.8 18H12.2C13.8802 18 14.7202 18 15.362 17.673C15.9265 17.3854 16.3854 16.9265 16.673 16.362C17 15.7202 17 14.8802 17 13.2V6.8C17 5.11984 17 4.27976 16.673 3.63803C16.3854 3.07354 15.9265 2.6146 15.362 2.32698C14.7202 2 13.8802 2 12.2 2H11.8C10.1198 2 9.27976 2 8.63803 2.32698C8.07354 2.6146 7.6146 3.07354 7.32698 3.63803C7 4.27976 7 5.11984 7 6.8V13.2C7 14.8802 7 15.7202 7.32698 16.362C7.6146 16.9265 8.07354 17.3854 8.63803 17.673C9.27976 18 10.1198 18 11.8 18Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" d="M11.85 1.25C9.88982 1.25 8.90972 1.25 8.16103 1.63148C7.50247 1.96703 6.96703 2.50247 6.63148 3.16103C6.25 3.90972 6.25 4.88982 6.25 6.85V13.15C6.25 15.1102 6.25 16.0903 6.63148 16.839C6.96703 17.4975 7.50247 18.033 8.16103 18.3685C8.90972 18.75 9.88982 18.75 11.85 18.75H12.15C14.1102 18.75 15.0903 18.75 15.839 18.3685C16.4975 18.033 17.033 17.4975 17.3685 16.839C17.75 16.0903 17.75 15.1102 17.75 13.15V6.85C17.75 4.88982 17.75 3.90972 17.3685 3.16103C17.033 2.50247 16.4975 1.96703 15.839 1.63148C15.0903 1.25 14.1102 1.25 12.15 1.25H11.85Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 22C2.25 21.5858 2.58579 21.25 3 21.25H21C21.4142 21.25 21.75 21.5858 21.75 22C21.75 22.4142 21.4142 22.75 21 22.75H3C2.58579 22.75 2.25 22.4142 2.25 22Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.16103 1.63148C8.90972 1.25 9.88982 1.25 11.85 1.25H12.15C14.1102 1.25 15.0903 1.25 15.839 1.63148C16.4975 1.96703 17.033 2.50247 17.3685 3.16103C17.75 3.90972 17.75 4.88982 17.75 6.85V13.15C17.75 15.1102 17.75 16.0903 17.3685 16.839C17.033 17.4975 16.4975 18.033 15.839 18.3685C15.0903 18.75 14.1102 18.75 12.15 18.75H11.85C9.88982 18.75 8.90972 18.75 8.16103 18.3685C7.50247 18.033 6.96703 17.4975 6.63148 16.839C6.25 16.0903 6.25 15.1102 6.25 13.15V6.85C6.25 4.88982 6.25 3.90972 6.63148 3.16103C6.96703 2.50247 7.50247 1.96703 8.16103 1.63148ZM3 21.25C2.58579 21.25 2.25 21.5858 2.25 22C2.25 22.4142 2.58579 22.75 3 22.75H21C21.4142 22.75 21.75 22.4142 21.75 22C21.75 21.5858 21.4142 21.25 21 21.25H3Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 8V7.5V6.8C17 5.11984 17 4.27976 16.673 3.63803C16.3854 3.07354 15.9265 2.6146 15.362 2.32698C14.7202 2 13.8802 2 12.2 2H11.8C10.1198 2 9.27976 2 8.63803 2.32698C8.07354 2.6146 7.6146 3.07354 7.32698 3.63803C7 4.27976 7 5.11984 7 6.8V13.2C7 14.8802 7 15.7202 7.32698 16.362C7.6146 16.9265 8.07354 17.3854 8.63803 17.673C9.27976 18 10.1198 18 11.8 18H12.2C13.8802 18 14.7202 18 15.362 17.673C15.9265 17.3854 16.3854 16.9265 16.673 16.362C17 15.7202 17 14.8802 17 13.2V12.5V12M3 22H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 22H21M11.8 18H12.2C13.8802 18 14.7202 18 15.362 17.673C15.9265 17.3854 16.3854 16.9265 16.673 16.362C17 15.7202 17 14.8802 17 13.2V6.8C17 5.11984 17 4.27976 16.673 3.63803C16.3854 3.07354 15.9265 2.6146 15.362 2.32698C14.7202 2 13.8802 2 12.2 2H11.8C10.1198 2 9.27976 2 8.63803 2.32698C8.07354 2.6146 7.6146 3.07354 7.32698 3.63803C7 4.27976 7 5.11984 7 6.8V13.2C7 14.8802 7 15.7202 7.32698 16.362C7.6146 16.9265 8.07354 17.3854 8.63803 17.673C9.27976 18 10.1198 18 11.8 18Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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