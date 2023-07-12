<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M12 2L12 7M12 22L12 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="3" y="7" width="18" height="10" rx="3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.12" x="3" y="7" width="18" height="10" rx="3" fill="currentColor"/>
<path d="M12 2V7M12 17V22M7.8 17H16.2C17.8802 17 18.7202 17 19.362 16.673C19.9265 16.3854 20.3854 15.9265 20.673 15.362C21 14.7202 21 13.8802 21 12.2V11.8C21 10.1198 21 9.27976 20.673 8.63803C20.3854 8.07354 19.9265 7.6146 19.362 7.32698C18.7202 7 17.8802 7 16.2 7H7.8C6.11984 7 5.27976 7 4.63803 7.32698C4.07354 7.6146 3.6146 8.07354 3.32698 8.63803C3 9.27976 3 10.1198 3 11.8V12.2C3 13.8802 3 14.7202 3.32698 15.362C3.6146 15.9265 4.07354 16.3854 4.63803 16.673C5.27976 17 6.11984 17 7.8 17Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" d="M7.85 6.25C5.88982 6.25 4.90972 6.25 4.16103 6.63148C3.50247 6.96703 2.96703 7.50247 2.63148 8.16103C2.25 8.90972 2.25 9.88982 2.25 11.85V12.15C2.25 14.1102 2.25 15.0903 2.63148 15.839C2.96703 16.4975 3.50247 17.033 4.16103 17.3685C4.90972 17.75 5.88982 17.75 7.85 17.75H16.15C18.1102 17.75 19.0903 17.75 19.839 17.3685C20.4975 17.033 21.033 16.4975 21.3685 15.839C21.75 15.0903 21.75 14.1102 21.75 12.15V11.85C21.75 9.88982 21.75 8.90972 21.3685 8.16103C21.033 7.50247 20.4975 6.96703 19.839 6.63148C19.0903 6.25 18.1102 6.25 16.15 6.25H7.85Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2L12.75 5.5L12.75 6.25L11.25 6.25L11.25 5.5L11.25 2C11.25 1.58579 11.5858 1.25 12 1.25ZM12.75 17.75L12.75 18.5L12.75 22C12.75 22.4142 12.4142 22.75 12 22.75C11.5858 22.75 11.25 22.4142 11.25 22L11.25 18.5L11.25 17.75L12.75 17.75Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.75 2C12.75 1.58579 12.4142 1.25 12 1.25C11.5858 1.25 11.25 1.58579 11.25 2V6.25H7.85C5.88982 6.25 4.90972 6.25 4.16103 6.63148C3.50247 6.96703 2.96703 7.50247 2.63148 8.16103C2.25 8.90972 2.25 9.88982 2.25 11.85V12.15C2.25 14.1102 2.25 15.0903 2.63148 15.839C2.96703 16.4975 3.50247 17.033 4.16103 17.3685C4.90972 17.75 5.88982 17.75 7.85 17.75H11.25V22C11.25 22.4142 11.5858 22.75 12 22.75C12.4142 22.75 12.75 22.4142 12.75 22V17.75H16.15C18.1102 17.75 19.0903 17.75 19.839 17.3685C20.4975 17.033 21.033 16.4975 21.3685 15.839C21.75 15.0903 21.75 14.1102 21.75 12.15V11.85C21.75 9.88982 21.75 8.90972 21.3685 8.16103C21.033 7.50247 20.4975 6.96703 19.839 6.63148C19.0903 6.25 18.1102 6.25 16.15 6.25H12.75V2Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 7H16.5V7C17.8978 7 18.5967 7 19.1481 7.22836C19.8831 7.53284 20.4672 8.11687 20.7716 8.85195C21 9.40326 21 10.1022 21 11.5V12.2C21 13.8802 21 14.7202 20.673 15.362C20.3854 15.9265 19.9265 16.3854 19.362 16.673C18.7202 17 17.8802 17 16.2 17H7.8C6.11984 17 5.27976 17 4.63803 16.673C4.07354 16.3854 3.6146 15.9265 3.32698 15.362C3 14.7202 3 13.8802 3 12.2V11.8C3 10.1198 3 9.27976 3.32698 8.63803C3.6146 8.07354 4.07354 7.6146 4.63803 7.32698C5.27976 7 6.11984 7 7.8 7H10.4C10.9601 7 11.2401 7 11.454 6.89101C11.6422 6.79513 11.7951 6.64215 11.891 6.45399C12 6.24008 12 5.96005 12 5.4V2M12 17V22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2V7M12 17V22M7.8 17H16.2C17.8802 17 18.7202 17 19.362 16.673C19.9265 16.3854 20.3854 15.9265 20.673 15.362C21 14.7202 21 13.8802 21 12.2V11.8C21 10.1198 21 9.27976 20.673 8.63803C20.3854 8.07354 19.9265 7.6146 19.362 7.32698C18.7202 7 17.8802 7 16.2 7H7.8C6.11984 7 5.27976 7 4.63803 7.32698C4.07354 7.6146 3.6146 8.07354 3.32698 8.63803C3 9.27976 3 10.1198 3 11.8V12.2C3 13.8802 3 14.7202 3.32698 15.362C3.6146 15.9265 4.07354 16.3854 4.63803 16.673C5.27976 17 6.11984 17 7.8 17Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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