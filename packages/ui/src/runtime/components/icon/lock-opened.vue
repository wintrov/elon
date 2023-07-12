<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M8 7V5.2C8 4.0799 8 3.51984 8.21799 3.09202C8.40973 2.71569 8.71569 2.40973 9.09202 2.21799C9.51984 2 10.0799 2 11.2 2H14.5C15.3284 2 16 2.67157 16 3.5V3.5V4M12 13V15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="4" y="6" width="16" height="16" rx="8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.12" x="4" y="6" width="16" height="16" rx="8" fill="currentColor"/>
<path d="M12 13V15M8 7V5.2C8 4.0799 8 3.51984 8.21799 3.09202C8.40973 2.71569 8.71569 2.40973 9.09202 2.21799C9.51984 2 10.0799 2 11.2 2H14.5C15.3284 2 16 2.67157 16 3.5V3.5V4M12 22V22C16.4183 22 20 18.4183 20 14V14C20 9.58172 16.4183 6 12 6V6C7.58172 6 4 9.58172 4 14V14C4 18.4183 7.58172 22 12 22Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" fill-rule="evenodd" clip-rule="evenodd" d="M3.25 14C3.25 9.16751 7.16751 5.25 12 5.25C16.8325 5.25 20.75 9.16751 20.75 14C20.75 18.8325 16.8325 22.75 12 22.75C7.16751 22.75 3.25 18.8325 3.25 14Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.1696 1.25L11.2 1.25H14.5C15.7426 1.25 16.75 2.25736 16.75 3.5V4C16.75 4.41421 16.4142 4.75 16 4.75C15.5858 4.75 15.25 4.41421 15.25 4V3.5C15.25 3.08579 14.9142 2.75 14.5 2.75H11.2C10.6276 2.75 10.2434 2.75058 9.94748 2.77476C9.66036 2.79822 9.52307 2.8401 9.43251 2.88624C9.19731 3.00608 9.00608 3.19731 8.88624 3.43251C8.8401 3.52307 8.79822 3.66036 8.77476 3.94748C8.75058 4.24336 8.75 4.62757 8.75 5.2V7C8.75 7.41421 8.41421 7.75 8 7.75C7.58579 7.75 7.25 7.41421 7.25 7V5.2L7.25 5.16957C7.24999 4.63541 7.24998 4.18956 7.27974 3.82533C7.31078 3.44545 7.37789 3.08879 7.54973 2.75153C7.81338 2.23408 8.23408 1.81338 8.75153 1.54973C9.08879 1.37789 9.44545 1.31078 9.82533 1.27974C10.1896 1.24998 10.6354 1.24999 11.1696 1.25ZM12 12.25C12.4142 12.25 12.75 12.5858 12.75 13V15C12.75 15.4142 12.4142 15.75 12 15.75C11.5858 15.75 11.25 15.4142 11.25 15V13C11.25 12.5858 11.5858 12.25 12 12.25Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.2 1.25H11.1696H11.1695C10.6354 1.24999 10.1896 1.24998 9.82533 1.27974C9.44545 1.31078 9.08879 1.37789 8.75153 1.54973C8.23408 1.81339 7.81338 2.23408 7.54973 2.75153C7.37789 3.08879 7.31078 3.44545 7.27974 3.82533C7.24998 4.18956 7.24999 4.63541 7.25 5.16956V5.16957L7.25 5.2V6.65029C4.84281 8.20922 3.25 10.9186 3.25 14C3.25 18.8325 7.16751 22.75 12 22.75C16.8325 22.75 20.75 18.8325 20.75 14C20.75 9.16751 16.8325 5.25 12 5.25C10.8516 5.25 9.75479 5.47125 8.75 5.87345V5.2C8.75 4.62757 8.75058 4.24336 8.77476 3.94748C8.79822 3.66036 8.8401 3.52307 8.88624 3.43251C9.00608 3.19731 9.19731 3.00609 9.43251 2.88624C9.52307 2.8401 9.66035 2.79822 9.94748 2.77476C10.2434 2.75059 10.6276 2.75 11.2 2.75H14.5C14.9142 2.75 15.25 3.08579 15.25 3.5V4C15.25 4.41422 15.5858 4.75 16 4.75C16.4142 4.75 16.75 4.41422 16.75 4V3.5C16.75 2.25736 15.7426 1.25 14.5 1.25H11.2ZM11.25 12.75C11.25 12.3358 11.5858 12 12 12C12.4142 12 12.75 12.3358 12.75 12.75V15.25C12.75 15.6642 12.4142 16 12 16C11.5858 16 11.25 15.6642 11.25 15.25V12.75Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.25204 16C4.08751 15.3608 4 14.6906 4 14C4 9.58172 7.58172 6 12 6C16.4183 6 20 9.58172 20 14C20 18.4183 16.4183 22 12 22C9.97111 22 8.11862 21.2447 6.70835 20M12 13V15M8 7V5.2C8 4.0799 8 3.51984 8.21799 3.09202C8.40973 2.71569 8.71569 2.40973 9.09202 2.21799C9.51984 2 10.0799 2 11.2 2H14.5C15.3284 2 16 2.67157 16 3.5V3.5V4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 13V15M8 7V5.2C8 4.0799 8 3.51984 8.21799 3.09202C8.40973 2.71569 8.71569 2.40973 9.09202 2.21799C9.51984 2 10.0799 2 11.2 2H14.5C15.3284 2 16 2.67157 16 3.5V3.5V4M12 22V22C16.4183 22 20 18.4183 20 14V14C20 9.58172 16.4183 6 12 6V6C7.58172 6 4 9.58172 4 14V14C4 18.4183 7.58172 22 12 22Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
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