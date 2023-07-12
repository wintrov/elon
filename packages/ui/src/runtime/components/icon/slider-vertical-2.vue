<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M6 18H18M9 22H15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="3" y="2" width="18" height="12" rx="3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.12" x="3" y="2" width="18" height="12" rx="3" fill="currentColor"/>
<path d="M6 18H18M9 22H15M7.8 14H16.2C17.8802 14 18.7202 14 19.362 13.673C19.9265 13.3854 20.3854 12.9265 20.673 12.362C21 11.7202 21 10.8802 21 9.2V6.8C21 5.11984 21 4.27976 20.673 3.63803C20.3854 3.07354 19.9265 2.6146 19.362 2.32698C18.7202 2 17.8802 2 16.2 2H7.8C6.11984 2 5.27976 2 4.63803 2.32698C4.07354 2.6146 3.6146 3.07354 3.32698 3.63803C3 4.27976 3 5.11984 3 6.8V9.2C3 10.8802 3 11.7202 3.32698 12.362C3.6146 12.9265 4.07354 13.3854 4.63803 13.673C5.27976 14 6.11984 14 7.8 14Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" d="M7.85 1.25C5.88982 1.25 4.90972 1.25 4.16103 1.63148C3.50247 1.96703 2.96703 2.50247 2.63148 3.16103C2.25 3.90972 2.25 4.88982 2.25 6.85V9.15C2.25 11.1102 2.25 12.0903 2.63148 12.839C2.96703 13.4975 3.50247 14.033 4.16103 14.3685C4.90972 14.75 5.88982 14.75 7.85 14.75H16.15C18.1102 14.75 19.0903 14.75 19.839 14.3685C20.4975 14.033 21.033 13.4975 21.3685 12.839C21.75 12.0903 21.75 11.1102 21.75 9.15V6.85C21.75 4.88982 21.75 3.90972 21.3685 3.16103C21.033 2.50247 20.4975 1.96703 19.839 1.63148C19.0903 1.25 18.1102 1.25 16.15 1.25H7.85Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.25 18C5.25 17.5858 5.58579 17.25 6 17.25H18C18.4142 17.25 18.75 17.5858 18.75 18C18.75 18.4142 18.4142 18.75 18 18.75H6C5.58579 18.75 5.25 18.4142 5.25 18ZM8.25 22C8.25 21.5858 8.58579 21.25 9 21.25H15C15.4142 21.25 15.75 21.5858 15.75 22C15.75 22.4142 15.4142 22.75 15 22.75H9C8.58579 22.75 8.25 22.4142 8.25 22Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.16103 1.63148C4.90972 1.25 5.88982 1.25 7.85 1.25H16.15C18.1102 1.25 19.0903 1.25 19.839 1.63148C20.4975 1.96703 21.033 2.50246 21.3685 3.16103C21.75 3.90972 21.75 4.88981 21.75 6.85V9.15C21.75 11.1102 21.75 12.0903 21.3685 12.839C21.033 13.4975 20.4975 14.033 19.839 14.3685C19.0903 14.75 18.1102 14.75 16.15 14.75H7.85C5.88982 14.75 4.90972 14.75 4.16103 14.3685C3.50247 14.033 2.96703 13.4975 2.63148 12.839C2.25 12.0903 2.25 11.1102 2.25 9.15V6.85C2.25 4.88982 2.25 3.90972 2.63148 3.16103C2.96703 2.50246 3.50247 1.96703 4.16103 1.63148ZM6 17.25C5.58579 17.25 5.25 17.5858 5.25 18C5.25 18.4142 5.58579 18.75 6 18.75H18C18.4142 18.75 18.75 18.4142 18.75 18C18.75 17.5858 18.4142 17.25 18 17.25H6ZM9 21.25C8.58579 21.25 8.25 21.5858 8.25 22C8.25 22.4142 8.58579 22.75 9 22.75H15C15.4142 22.75 15.75 22.4142 15.75 22C15.75 21.5858 15.4142 21.25 15 21.25H9Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 2H9.4375H7.8C6.11984 2 5.27976 2 4.63803 2.32698C4.07354 2.6146 3.6146 3.07354 3.32698 3.63803C3 4.27976 3 5.11984 3 6.8V9.2C3 10.8802 3 11.7202 3.32698 12.362C3.6146 12.9265 4.07354 13.3854 4.63803 13.673C5.27976 14 6.11984 14 7.8 14H16.2C17.8802 14 18.7202 14 19.362 13.673C19.9265 13.3854 20.3854 12.9265 20.673 12.362C21 11.7202 21 10.8802 21 9.2V6.8C21 5.11984 21 4.27976 20.673 3.63803C20.3854 3.07354 19.9265 2.6146 19.362 2.32698C18.7202 2 17.8802 2 16.2 2H14.5625H14M6 18H18M9 22H15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 18H18M9 22H15M7.8 14H16.2C17.8802 14 18.7202 14 19.362 13.673C19.9265 13.3854 20.3854 12.9265 20.673 12.362C21 11.7202 21 10.8802 21 9.2V6.8C21 5.11984 21 4.27976 20.673 3.63803C20.3854 3.07354 19.9265 2.6146 19.362 2.32698C18.7202 2 17.8802 2 16.2 2H7.8C6.11984 2 5.27976 2 4.63803 2.32698C4.07354 2.6146 3.6146 3.07354 3.32698 3.63803C3 4.27976 3 5.11984 3 6.8V9.2C3 10.8802 3 11.7202 3.32698 12.362C3.6146 12.9265 4.07354 13.3854 4.63803 13.673C5.27976 14 6.11984 14 7.8 14Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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