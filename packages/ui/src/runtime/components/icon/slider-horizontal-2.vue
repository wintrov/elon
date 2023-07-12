<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M18 6L18 18M22 9L22 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="2" y="3" width="12" height="18" rx="3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.12" x="2" y="3" width="12" height="18" rx="3" fill="currentColor"/>
<path d="M18 6V18M22 9V15M6.8 21H9.2C10.8802 21 11.7202 21 12.362 20.673C12.9265 20.3854 13.3854 19.9265 13.673 19.362C14 18.7202 14 17.8802 14 16.2V7.8C14 6.11984 14 5.27976 13.673 4.63803C13.3854 4.07354 12.9265 3.6146 12.362 3.32698C11.7202 3 10.8802 3 9.2 3H6.8C5.11984 3 4.27976 3 3.63803 3.32698C3.07354 3.6146 2.6146 4.07354 2.32698 4.63803C2 5.27976 2 6.11984 2 7.8V16.2C2 17.8802 2 18.7202 2.32698 19.362C2.6146 19.9265 3.07354 20.3854 3.63803 20.673C4.27976 21 5.11984 21 6.8 21Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" d="M7.65 2.25C5.40979 2.25 4.28968 2.25 3.43404 2.68597C2.68139 3.06947 2.06947 3.68139 1.68597 4.43404C1.25 5.28968 1.25 6.40979 1.25 8.65V15.35C1.25 17.5902 1.25 18.7103 1.68597 19.566C2.06947 20.3186 2.68139 20.9305 3.43404 21.314C4.28968 21.75 5.40979 21.75 7.65 21.75H8.35C10.5902 21.75 11.7103 21.75 12.566 21.314C13.3186 20.9305 13.9305 20.3186 14.314 19.566C14.75 18.7103 14.75 17.5902 14.75 15.35V8.65C14.75 6.40979 14.75 5.28968 14.314 4.43404C13.9305 3.68139 13.3186 3.06947 12.566 2.68597C11.7103 2.25 10.5902 2.25 8.35 2.25H7.65Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18 5.25C18.4142 5.25 18.75 5.58579 18.75 6L18.75 18C18.75 18.4142 18.4142 18.75 18 18.75C17.5858 18.75 17.25 18.4142 17.25 18L17.25 6C17.25 5.58579 17.5858 5.25 18 5.25ZM22 8.25C22.4142 8.25 22.75 8.58579 22.75 9L22.75 15C22.75 15.4142 22.4142 15.75 22 15.75C21.5858 15.75 21.25 15.4142 21.25 15L21.25 9C21.25 8.58579 21.5858 8.25 22 8.25Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.43404 2.68597C4.28969 2.25 5.40979 2.25 7.65 2.25H8.35C10.5902 2.25 11.7103 2.25 12.566 2.68597C13.3186 3.06947 13.9305 3.68139 14.314 4.43404C14.75 5.28968 14.75 6.40979 14.75 8.65V15.35C14.75 17.5902 14.75 18.7103 14.314 19.566C13.9305 20.3186 13.3186 20.9305 12.566 21.314C11.7103 21.75 10.5902 21.75 8.35 21.75H7.65C5.40979 21.75 4.28969 21.75 3.43404 21.314C2.68139 20.9305 2.06947 20.3186 1.68597 19.566C1.25 18.7103 1.25 17.5902 1.25 15.35V8.65C1.25 6.40979 1.25 5.28968 1.68597 4.43404C2.06947 3.68139 2.68139 3.06947 3.43404 2.68597ZM18.75 6C18.75 5.58579 18.4142 5.25 18 5.25C17.5858 5.25 17.25 5.58579 17.25 6L17.25 18C17.25 18.4142 17.5858 18.75 18 18.75C18.4142 18.75 18.75 18.4142 18.75 18V6ZM22.75 9C22.75 8.58579 22.4142 8.25 22 8.25C21.5858 8.25 21.25 8.58579 21.25 9V15C21.25 15.4142 21.5858 15.75 22 15.75C22.4142 15.75 22.75 15.4142 22.75 15V9Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 10V9.5V7.8C2 6.11984 2 5.27976 2.32698 4.63803C2.6146 4.07354 3.07354 3.6146 3.63803 3.32698C4.27976 3 5.11984 3 6.8 3H9.2C10.8802 3 11.7202 3 12.362 3.32698C12.9265 3.6146 13.3854 4.07354 13.673 4.63803C14 5.27976 14 6.11984 14 7.8V16.2C14 17.8802 14 18.7202 13.673 19.362C13.3854 19.9265 12.9265 20.3854 12.362 20.673C11.7202 21 10.8802 21 9.2 21H6.8C5.11984 21 4.27976 21 3.63803 20.673C3.07354 20.3854 2.6146 19.9265 2.32698 19.362C2 18.7202 2 17.8802 2 16.2V14.5V14M18 6V18M22 9V15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6V18M22 9V15M6.8 21H9.2C10.8802 21 11.7202 21 12.362 20.673C12.9265 20.3854 13.3854 19.9265 13.673 19.362C14 18.7202 14 17.8802 14 16.2V7.8C14 6.11984 14 5.27976 13.673 4.63803C13.3854 4.07354 12.9265 3.6146 12.362 3.32698C11.7202 3 10.8802 3 9.2 3H6.8C5.11984 3 4.27976 3 3.63803 3.32698C3.07354 3.6146 2.6146 4.07354 2.32698 4.63803C2 5.27976 2 6.11984 2 7.8V16.2C2 17.8802 2 18.7202 2.32698 19.362C2.6146 19.9265 3.07354 20.3854 3.63803 20.673C4.27976 21 5.11984 21 6.8 21Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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