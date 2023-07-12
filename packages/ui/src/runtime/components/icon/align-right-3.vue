<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M22 3L22 21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="2" y="7" width="16" height="10" rx="3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.12" x="2" y="7" width="16" height="10" rx="3" fill="currentColor"/>
<path d="M22 3V21M6.8 17H13.2C14.8802 17 15.7202 17 16.362 16.673C16.9265 16.3854 17.3854 15.9265 17.673 15.362C18 14.7202 18 13.8802 18 12.2V11.8C18 10.1198 18 9.27976 17.673 8.63803C17.3854 8.07354 16.9265 7.6146 16.362 7.32698C15.7202 7 14.8802 7 13.2 7H6.8C5.11984 7 4.27976 7 3.63803 7.32698C3.07354 7.6146 2.6146 8.07354 2.32698 8.63803C2 9.27976 2 10.1198 2 11.8V12.2C2 13.8802 2 14.7202 2.32698 15.362C2.6146 15.9265 3.07354 16.3854 3.63803 16.673C4.27976 17 5.11984 17 6.8 17Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" d="M6.85 6.25C4.88982 6.25 3.90972 6.25 3.16103 6.63148C2.50247 6.96703 1.96703 7.50247 1.63148 8.16103C1.25 8.90972 1.25 9.88982 1.25 11.85V12.15C1.25 14.1102 1.25 15.0903 1.63148 15.839C1.96703 16.4975 2.50247 17.033 3.16103 17.3685C3.90972 17.75 4.88982 17.75 6.85 17.75H13.15C15.1102 17.75 16.0903 17.75 16.839 17.3685C17.4975 17.033 18.033 16.4975 18.3685 15.839C18.75 15.0903 18.75 14.1102 18.75 12.15V11.85C18.75 9.88982 18.75 8.90972 18.3685 8.16103C18.033 7.50247 17.4975 6.96703 16.839 6.63148C16.0903 6.25 15.1102 6.25 13.15 6.25H6.85Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M22 2.25C22.4142 2.25 22.75 2.58579 22.75 3L22.75 21C22.75 21.4142 22.4142 21.75 22 21.75C21.5858 21.75 21.25 21.4142 21.25 21L21.25 3C21.25 2.58579 21.5858 2.25 22 2.25Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.75 3C22.75 2.58579 22.4142 2.25 22 2.25C21.5858 2.25 21.25 2.58579 21.25 3V21C21.25 21.4142 21.5858 21.75 22 21.75C22.4142 21.75 22.75 21.4142 22.75 21V3ZM3.16103 6.63148C3.90972 6.25 4.88982 6.25 6.85 6.25H13.15C15.1102 6.25 16.0903 6.25 16.839 6.63148C17.4975 6.96703 18.033 7.50247 18.3685 8.16103C18.75 8.90972 18.75 9.88982 18.75 11.85V12.15C18.75 14.1102 18.75 15.0903 18.3685 15.839C18.033 16.4975 17.4975 17.033 16.839 17.3685C16.0903 17.75 15.1102 17.75 13.15 17.75H6.85C4.88982 17.75 3.90972 17.75 3.16103 17.3685C2.50247 17.033 1.96703 16.4975 1.63148 15.839C1.25 15.0903 1.25 14.1102 1.25 12.15V11.85C1.25 9.88982 1.25 8.90972 1.63148 8.16103C1.96703 7.50247 2.50247 6.96703 3.16103 6.63148Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 17H7.5H6.8C5.11984 17 4.27976 17 3.63803 16.673C3.07354 16.3854 2.6146 15.9265 2.32698 15.362C2 14.7202 2 13.8802 2 12.2V11.8C2 10.1198 2 9.27976 2.32698 8.63803C2.6146 8.07354 3.07354 7.6146 3.63803 7.32698C4.27976 7 5.11984 7 6.8 7H13.2C14.8802 7 15.7202 7 16.362 7.32698C16.9265 7.6146 17.3854 8.07354 17.673 8.63803C18 9.27976 18 10.1198 18 11.8V12.2C18 13.8802 18 14.7202 17.673 15.362C17.3854 15.9265 16.9265 16.3854 16.362 16.673C15.7202 17 14.8802 17 13.2 17H12.5H12M22 3V21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 3V21M6.8 17H13.2C14.8802 17 15.7202 17 16.362 16.673C16.9265 16.3854 17.3854 15.9265 17.673 15.362C18 14.7202 18 13.8802 18 12.2V11.8C18 10.1198 18 9.27976 17.673 8.63803C17.3854 8.07354 16.9265 7.6146 16.362 7.32698C15.7202 7 14.8802 7 13.2 7H6.8C5.11984 7 4.27976 7 3.63803 7.32698C3.07354 7.6146 2.6146 8.07354 2.32698 8.63803C2 9.27976 2 10.1198 2 11.8V12.2C2 13.8802 2 14.7202 2.32698 15.362C2.6146 15.9265 3.07354 16.3854 3.63803 16.673C4.27976 17 5.11984 17 6.8 17Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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