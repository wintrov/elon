<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M3 2H21M3 22H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="3" y="6" width="18" height="12" rx="3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.12" x="3" y="6" width="18" height="12" rx="3" fill="currentColor"/>
<path d="M3 2H21M3 22H21M7.8 18H16.2C17.8802 18 18.7202 18 19.362 17.673C19.9265 17.3854 20.3854 16.9265 20.673 16.362C21 15.7202 21 14.8802 21 13.2V10.8C21 9.11984 21 8.27976 20.673 7.63803C20.3854 7.07354 19.9265 6.6146 19.362 6.32698C18.7202 6 17.8802 6 16.2 6H7.8C6.11984 6 5.27976 6 4.63803 6.32698C4.07354 6.6146 3.6146 7.07354 3.32698 7.63803C3 8.27976 3 9.11984 3 10.8V13.2C3 14.8802 3 15.7202 3.32698 16.362C3.6146 16.9265 4.07354 17.3854 4.63803 17.673C5.27976 18 6.11984 18 7.8 18Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" d="M8.65 5.25C6.40979 5.25 5.28968 5.25 4.43404 5.68597C3.68139 6.06947 3.06947 6.68139 2.68597 7.43404C2.25 8.28968 2.25 9.40979 2.25 11.65V12.35C2.25 14.5902 2.25 15.7103 2.68597 16.566C3.06947 17.3186 3.68139 17.9305 4.43404 18.314C5.28968 18.75 6.40979 18.75 8.65 18.75H15.35C17.5902 18.75 18.7103 18.75 19.566 18.314C20.3186 17.9305 20.9305 17.3186 21.314 16.566C21.75 15.7103 21.75 14.5902 21.75 12.35V11.65C21.75 9.40979 21.75 8.28968 21.314 7.43404C20.9305 6.68139 20.3186 6.06947 19.566 5.68597C18.7103 5.25 17.5902 5.25 15.35 5.25H8.65Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 2C2.25 1.58579 2.58579 1.25 3 1.25H21C21.4142 1.25 21.75 1.58579 21.75 2C21.75 2.41421 21.4142 2.75 21 2.75H3C2.58579 2.75 2.25 2.41421 2.25 2ZM2.25 22C2.25 21.5858 2.58579 21.25 3 21.25H21C21.4142 21.25 21.75 21.5858 21.75 22C21.75 22.4142 21.4142 22.75 21 22.75H3C2.58579 22.75 2.25 22.4142 2.25 22Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 1.25C2.58579 1.25 2.25 1.58579 2.25 2C2.25 2.41421 2.58579 2.75 3 2.75H21C21.4142 2.75 21.75 2.41421 21.75 2C21.75 1.58579 21.4142 1.25 21 1.25H3ZM3 21.25C2.58579 21.25 2.25 21.5858 2.25 22C2.25 22.4142 2.58579 22.75 3 22.75H21C21.4142 22.75 21.75 22.4142 21.75 22C21.75 21.5858 21.4142 21.25 21 21.25H3ZM4.43404 5.68597C5.28968 5.25 6.40979 5.25 8.65 5.25H15.35C17.5902 5.25 18.7103 5.25 19.566 5.68597C20.3186 6.06947 20.9305 6.68139 21.314 7.43404C21.75 8.28968 21.75 9.40979 21.75 11.65V12.35C21.75 14.5902 21.75 15.7103 21.314 16.566C20.9305 17.3186 20.3186 17.9305 19.566 18.314C18.7103 18.75 17.5902 18.75 15.35 18.75H8.65C6.40979 18.75 5.28968 18.75 4.43404 18.314C3.68139 17.9305 3.06947 17.3186 2.68597 16.566C2.25 15.7103 2.25 14.5902 2.25 12.35V11.65C2.25 9.40979 2.25 8.28968 2.68597 7.43404C3.06947 6.68139 3.68139 6.06947 4.43404 5.68597Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 10V9.5V9.5C21 9.03558 21 8.80337 20.9743 8.60842C20.7971 7.26222 19.7378 6.2029 18.3916 6.02567C18.1966 6 17.9644 6 17.5 6H7.8C6.11984 6 5.27976 6 4.63803 6.32698C4.07354 6.6146 3.6146 7.07354 3.32698 7.63803C3 8.27976 3 9.11984 3 10.8V13.2C3 14.8802 3 15.7202 3.32698 16.362C3.6146 16.9265 4.07354 17.3854 4.63803 17.673C5.27976 18 6.11984 18 7.8 18H17.5C17.9644 18 18.1966 18 18.3916 17.9743C19.7378 17.7971 20.7971 16.7378 20.9743 15.3916C21 15.1966 21 14.9644 21 14.5V14.5V14M3 2H21M3 22H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 2H21M3 22H21M7.8 18H16.2C17.8802 18 18.7202 18 19.362 17.673C19.9265 17.3854 20.3854 16.9265 20.673 16.362C21 15.7202 21 14.8802 21 13.2V10.8C21 9.11984 21 8.27976 20.673 7.63803C20.3854 7.07354 19.9265 6.6146 19.362 6.32698C18.7202 6 17.8802 6 16.2 6H7.8C6.11984 6 5.27976 6 4.63803 6.32698C4.07354 6.6146 3.6146 7.07354 3.32698 7.63803C3 8.27976 3 9.11984 3 10.8V13.2C3 14.8802 3 15.7202 3.32698 16.362C3.6146 16.9265 4.07354 17.3854 4.63803 17.673C5.27976 18 6.11984 18 7.8 18Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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