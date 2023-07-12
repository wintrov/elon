<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M2 3L2 21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="6" y="7" width="16" height="10" rx="3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.12" x="6" y="7" width="16" height="10" rx="3" fill="currentColor"/>
<path d="M2 3L2 21M10.8 17H17.2C18.8802 17 19.7202 17 20.362 16.673C20.9265 16.3854 21.3854 15.9265 21.673 15.362C22 14.7202 22 13.8802 22 12.2V11.8C22 10.1198 22 9.27976 21.673 8.63803C21.3854 8.07354 20.9265 7.6146 20.362 7.32698C19.7202 7 18.8802 7 17.2 7H10.8C9.11984 7 8.27976 7 7.63803 7.32698C7.07354 7.6146 6.6146 8.07354 6.32698 8.63803C6 9.27976 6 10.1198 6 11.8V12.2C6 13.8802 6 14.7202 6.32698 15.362C6.6146 15.9265 7.07354 16.3854 7.63803 16.673C8.27976 17 9.11984 17 10.8 17Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" d="M10.85 6.25C8.88982 6.25 7.90972 6.25 7.16103 6.63148C6.50247 6.96703 5.96703 7.50247 5.63148 8.16103C5.25 8.90972 5.25 9.88982 5.25 11.85V12.15C5.25 14.1102 5.25 15.0903 5.63148 15.839C5.96703 16.4975 6.50247 17.033 7.16103 17.3685C7.90972 17.75 8.88982 17.75 10.85 17.75H17.15C19.1102 17.75 20.0903 17.75 20.839 17.3685C21.4975 17.033 22.033 16.4975 22.3685 15.839C22.75 15.0903 22.75 14.1102 22.75 12.15V11.85C22.75 9.88982 22.75 8.90972 22.3685 8.16103C22.033 7.50247 21.4975 6.96703 20.839 6.63148C20.0903 6.25 19.1102 6.25 17.15 6.25H10.85Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 2.25C2.41421 2.25 2.75 2.58579 2.75 3L2.75 21C2.75 21.4142 2.41421 21.75 2 21.75C1.58579 21.75 1.25 21.4142 1.25 21L1.25 3C1.25 2.58579 1.58579 2.25 2 2.25Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.75 3C2.75 2.58579 2.41421 2.25 2 2.25C1.58579 2.25 1.25 2.58579 1.25 3V21C1.25 21.4142 1.58579 21.75 2 21.75C2.41421 21.75 2.75 21.4142 2.75 21L2.75 3ZM7.16103 6.63148C7.90972 6.25 8.88982 6.25 10.85 6.25H17.15C19.1102 6.25 20.0903 6.25 20.839 6.63148C21.4975 6.96703 22.033 7.50247 22.3685 8.16103C22.75 8.90972 22.75 9.88982 22.75 11.85V12.15C22.75 14.1102 22.75 15.0903 22.3685 15.839C22.033 16.4975 21.4975 17.033 20.839 17.3685C20.0903 17.75 19.1102 17.75 17.15 17.75H10.85C8.88982 17.75 7.90972 17.75 7.16103 17.3685C6.50247 17.033 5.96703 16.4975 5.63148 15.839C5.25 15.0903 5.25 14.1102 5.25 12.15V11.85C5.25 9.88982 5.25 8.90972 5.63148 8.16103C5.96703 7.50247 6.50247 6.96703 7.16103 6.63148Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 7H11.5H10.8C9.11984 7 8.27976 7 7.63803 7.32698C7.07354 7.6146 6.6146 8.07354 6.32698 8.63803C6 9.27976 6 10.1198 6 11.8V12.2C6 13.8802 6 14.7202 6.32698 15.362C6.6146 15.9265 7.07354 16.3854 7.63803 16.673C8.27976 17 9.11984 17 10.8 17H17.2C18.8802 17 19.7202 17 20.362 16.673C20.9265 16.3854 21.3854 15.9265 21.673 15.362C22 14.7202 22 13.8802 22 12.2V11.8C22 10.1198 22 9.27976 21.673 8.63803C21.3854 8.07354 20.9265 7.6146 20.362 7.32698C19.7202 7 18.8802 7 17.2 7H16.5H16M2 3L2 21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 3L2 21M10.8 17H17.2C18.8802 17 19.7202 17 20.362 16.673C20.9265 16.3854 21.3854 15.9265 21.673 15.362C22 14.7202 22 13.8802 22 12.2V11.8C22 10.1198 22 9.27976 21.673 8.63803C21.3854 8.07354 20.9265 7.6146 20.362 7.32698C19.7202 7 18.8802 7 17.2 7H10.8C9.11984 7 8.27976 7 7.63803 7.32698C7.07354 7.6146 6.6146 8.07354 6.32698 8.63803C6 9.27976 6 10.1198 6 11.8V12.2C6 13.8802 6 14.7202 6.32698 15.362C6.6146 15.9265 7.07354 16.3854 7.63803 16.673C8.27976 17 9.11984 17 10.8 17Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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