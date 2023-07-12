<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M2 12H7M22 12H17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="7" y="3" width="10" height="18" rx="3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.12" x="7" y="3" width="10" height="18" rx="3" fill="currentColor"/>
<path d="M17 12H22M2 12H7M11.8 21H12.2C13.8802 21 14.7202 21 15.362 20.673C15.9265 20.3854 16.3854 19.9265 16.673 19.362C17 18.7202 17 17.8802 17 16.2V7.8C17 6.11984 17 5.27976 16.673 4.63803C16.3854 4.07354 15.9265 3.6146 15.362 3.32698C14.7202 3 13.8802 3 12.2 3H11.8C10.1198 3 9.27976 3 8.63803 3.32698C8.07354 3.6146 7.6146 4.07354 7.32698 4.63803C7 5.27976 7 6.11984 7 7.8V16.2C7 17.8802 7 18.7202 7.32698 19.362C7.6146 19.9265 8.07354 20.3854 8.63803 20.673C9.27976 21 10.1198 21 11.8 21Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" d="M11.85 2.25C9.88982 2.25 8.90972 2.25 8.16103 2.63148C7.50247 2.96703 6.96703 3.50247 6.63148 4.16103C6.25 4.90972 6.25 5.88982 6.25 7.85V16.15C6.25 18.1102 6.25 19.0903 6.63148 19.839C6.96703 20.4975 7.50247 21.033 8.16103 21.3685C8.90972 21.75 9.88982 21.75 11.85 21.75H12.15C14.1102 21.75 15.0903 21.75 15.839 21.3685C16.4975 21.033 17.033 20.4975 17.3685 19.839C17.75 19.0903 17.75 18.1102 17.75 16.15V7.85C17.75 5.88982 17.75 4.90972 17.3685 4.16103C17.033 3.50247 16.4975 2.96703 15.839 2.63148C15.0903 2.25 14.1102 2.25 12.15 2.25H11.85Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H5.5H6.25V12.75H5.5H2C1.58579 12.75 1.25 12.4142 1.25 12ZM17.75 11.25H18.5H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H18.5H17.75V11.25Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.16103 2.63148C8.90972 2.25 9.88982 2.25 11.85 2.25H12.15C14.1102 2.25 15.0903 2.25 15.839 2.63148C16.4975 2.96703 17.033 3.50247 17.3685 4.16103C17.75 4.90972 17.75 5.88982 17.75 7.85V11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H17.75V16.15C17.75 18.1102 17.75 19.0903 17.3685 19.839C17.033 20.4975 16.4975 21.033 15.839 21.3685C15.0903 21.75 14.1102 21.75 12.15 21.75H11.85C9.88982 21.75 8.90972 21.75 8.16103 21.3685C7.50247 21.033 6.96703 20.4975 6.63148 19.839C6.25 19.0903 6.25 18.1102 6.25 16.15V12.75H2C1.58579 12.75 1.25 12.4142 1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H6.25V7.85C6.25 5.88982 6.25 4.90972 6.63148 4.16103C6.96703 3.50247 7.50247 2.96703 8.16103 2.63148Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 8V7.5V7.5C17 6.10218 17 5.40326 16.7716 4.85195C16.4672 4.11687 15.8831 3.53284 15.1481 3.22836C14.5967 3 13.8978 3 12.5 3H11.8C10.1198 3 9.27976 3 8.63803 3.32698C8.07354 3.6146 7.6146 4.07354 7.32698 4.63803C7 5.27976 7 6.11984 7 7.8V16.2C7 17.8802 7 18.7202 7.32698 19.362C7.6146 19.9265 8.07354 20.3854 8.63803 20.673C9.27976 21 10.1198 21 11.8 21H12.2C13.8802 21 14.7202 21 15.362 20.673C15.9265 20.3854 16.3854 19.9265 16.673 19.362C17 18.7202 17 17.8802 17 16.2V13.6C17 13.0399 17 12.7599 17.109 12.546C17.2049 12.3578 17.3578 12.2049 17.546 12.109C17.7599 12 18.0399 12 18.6 12H22M2 12H7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 12H22M2 12H7M11.8 21H12.2C13.8802 21 14.7202 21 15.362 20.673C15.9265 20.3854 16.3854 19.9265 16.673 19.362C17 18.7202 17 17.8802 17 16.2V7.8C17 6.11984 17 5.27976 16.673 4.63803C16.3854 4.07354 15.9265 3.6146 15.362 3.32698C14.7202 3 13.8802 3 12.2 3H11.8C10.1198 3 9.27976 3 8.63803 3.32698C8.07354 3.6146 7.6146 4.07354 7.32698 4.63803C7 5.27976 7 6.11984 7 7.8V16.2C7 17.8802 7 18.7202 7.32698 19.362C7.6146 19.9265 8.07354 20.3854 8.63803 20.673C9.27976 21 10.1198 21 11.8 21Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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