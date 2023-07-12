<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M2 4V20M22 4V20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="6" y="3" width="12" height="18" rx="3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.12" x="6" y="3" width="12" height="18" rx="3" fill="currentColor"/>
<path d="M2 4V20M22 4V20M10.8 21H13.2C14.8802 21 15.7202 21 16.362 20.673C16.9265 20.3854 17.3854 19.9265 17.673 19.362C18 18.7202 18 17.8802 18 16.2V7.8C18 6.11984 18 5.27976 17.673 4.63803C17.3854 4.07354 16.9265 3.6146 16.362 3.32698C15.7202 3 14.8802 3 13.2 3H10.8C9.11984 3 8.27976 3 7.63803 3.32698C7.07354 3.6146 6.6146 4.07354 6.32698 4.63803C6 5.27976 6 6.11984 6 7.8V16.2C6 17.8802 6 18.7202 6.32698 19.362C6.6146 19.9265 7.07354 20.3854 7.63803 20.673C8.27976 21 9.11984 21 10.8 21Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" d="M11.65 2.25C9.40979 2.25 8.28968 2.25 7.43404 2.68597C6.68139 3.06947 6.06947 3.68139 5.68597 4.43404C5.25 5.28968 5.25 6.40979 5.25 8.65V15.35C5.25 17.5902 5.25 18.7103 5.68597 19.566C6.06947 20.3186 6.68139 20.9305 7.43404 21.314C8.28968 21.75 9.40979 21.75 11.65 21.75H12.35C14.5902 21.75 15.7103 21.75 16.566 21.314C17.3186 20.9305 17.9305 20.3186 18.314 19.566C18.75 18.7103 18.75 17.5902 18.75 15.35V8.65C18.75 6.40979 18.75 5.28968 18.314 4.43404C17.9305 3.68139 17.3186 3.06947 16.566 2.68597C15.7103 2.25 14.5902 2.25 12.35 2.25H11.65Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 3.25C2.41421 3.25 2.75 3.58579 2.75 4V20C2.75 20.4142 2.41421 20.75 2 20.75C1.58579 20.75 1.25 20.4142 1.25 20V4C1.25 3.58579 1.58579 3.25 2 3.25ZM22 3.25C22.4142 3.25 22.75 3.58579 22.75 4V20C22.75 20.4142 22.4142 20.75 22 20.75C21.5858 20.75 21.25 20.4142 21.25 20V4C21.25 3.58579 21.5858 3.25 22 3.25Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.43404 2.68597C8.28968 2.25 9.40979 2.25 11.65 2.25H12.35C14.5902 2.25 15.7103 2.25 16.566 2.68597C17.3186 3.06947 17.9305 3.68139 18.314 4.43404C18.75 5.28968 18.75 6.40979 18.75 8.65V15.35C18.75 17.5902 18.75 18.7103 18.314 19.566C17.9305 20.3186 17.3186 20.9305 16.566 21.314C15.7103 21.75 14.5902 21.75 12.35 21.75H11.65C9.40979 21.75 8.28968 21.75 7.43404 21.314C6.68139 20.9305 6.06947 20.3186 5.68597 19.566C5.25 18.7103 5.25 17.5902 5.25 15.35V8.65C5.25 6.40979 5.25 5.28968 5.68597 4.43404C6.06947 3.68139 6.68139 3.06947 7.43404 2.68597ZM2.75 4C2.75 3.58579 2.41421 3.25 2 3.25C1.58579 3.25 1.25 3.58579 1.25 4V20C1.25 20.4142 1.58579 20.75 2 20.75C2.41421 20.75 2.75 20.4142 2.75 20V4ZM22.75 4C22.75 3.58579 22.4142 3.25 22 3.25C21.5858 3.25 21.25 3.58579 21.25 4V20C21.25 20.4142 21.5858 20.75 22 20.75C22.4142 20.75 22.75 20.4142 22.75 20V4Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 10V9.4375V7.8C18 6.11984 18 5.27976 17.673 4.63803C17.3854 4.07354 16.9265 3.6146 16.362 3.32698C15.7202 3 14.8802 3 13.2 3H10.8C9.11984 3 8.27976 3 7.63803 3.32698C7.07354 3.6146 6.6146 4.07354 6.32698 4.63803C6 5.27976 6 6.11984 6 7.8V16.2C6 17.8802 6 18.7202 6.32698 19.362C6.6146 19.9265 7.07354 20.3854 7.63803 20.673C8.27976 21 9.11984 21 10.8 21H13.2C14.8802 21 15.7202 21 16.362 20.673C16.9265 20.3854 17.3854 19.9265 17.673 19.362C18 18.7202 18 17.8802 18 16.2V14.5625V14M2 4V20M22 4V20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 4V20M22 4V20M10.8 21H13.2C14.8802 21 15.7202 21 16.362 20.673C16.9265 20.3854 17.3854 19.9265 17.673 19.362C18 18.7202 18 17.8802 18 16.2V7.8C18 6.11984 18 5.27976 17.673 4.63803C17.3854 4.07354 16.9265 3.6146 16.362 3.32698C15.7202 3 14.8802 3 13.2 3H10.8C9.11984 3 8.27976 3 7.63803 3.32698C7.07354 3.6146 6.6146 4.07354 6.32698 4.63803C6 5.27976 6 6.11984 6 7.8V16.2C6 17.8802 6 18.7202 6.32698 19.362C6.6146 19.9265 7.07354 20.3854 7.63803 20.673C8.27976 21 9.11984 21 10.8 21Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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