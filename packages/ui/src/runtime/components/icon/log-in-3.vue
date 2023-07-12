<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M2 12L17 12M17 12L13 8M17 12L13 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="8" y="2" width="14" height="20" rx="7" stroke="currentColor" stroke-width="1.5"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.12" x="8" y="2" width="14" height="20" rx="7" fill="currentColor"/>
<path d="M2 12H17M17 12L13 8M17 12L13 16M15 22V22C18.866 22 22 18.866 22 15V9C22 5.13401 18.866 2 15 2V2C11.134 2 8 5.13401 8 9V15C8 18.866 11.134 22 15 22Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" d="M15 1.25C10.7198 1.25 7.25 4.71979 7.25 9V15C7.25 19.2802 10.7198 22.75 15 22.75V22.75C19.2802 22.75 22.75 19.2802 22.75 15V9C22.75 4.71979 19.2802 1.25 15 1.25V1.25Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.4697 7.46973C12.7626 7.17684 13.2374 7.17684 13.5303 7.46973L17.5303 11.4697C17.8232 11.7626 17.8232 12.2375 17.5303 12.5304L13.5303 16.5304C13.2374 16.8233 12.7626 16.8233 12.4697 16.5304C12.1768 16.2375 12.1768 15.7626 12.4697 15.4697L15.1893 12.7501L2 12.7501C1.58579 12.7501 1.25 12.4143 1.25 12.0001C1.25 11.5858 1.58579 11.2501 2 11.2501L15.1893 11.2501L12.4697 8.53039C12.1768 8.2375 12.1768 7.76262 12.4697 7.46973Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.25 9C7.25 4.71979 10.7198 1.25 15 1.25C19.2802 1.25 22.75 4.71979 22.75 9V15C22.75 19.2802 19.2802 22.75 15 22.75C10.7198 22.75 7.25 19.2802 7.25 15V12.75L15.1893 12.75L12.4697 15.4697C12.1768 15.7626 12.1768 16.2375 12.4697 16.5304C12.7626 16.8233 13.2374 16.8233 13.5303 16.5304L17.5303 12.5304C17.8232 12.2375 17.8232 11.7626 17.5303 11.4697L13.5303 7.46971C13.2374 7.17682 12.7626 7.17682 12.4697 7.46971C12.1768 7.7626 12.1768 8.23748 12.4697 8.53037L15.1893 11.25L7.25 11.25V9ZM7.25 11.25H2C1.58579 11.25 1.25 11.5858 1.25 12C1.25 12.4143 1.58579 12.75 2 12.75H7.25V11.25Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 9.5V9C22 5.13401 18.866 2 15 2C11.134 2 8 5.13401 8 9V15C8 18.866 11.134 22 15 22C18.866 22 22 18.866 22 15V14.5M2 12H17M17 12L13 8M17 12L13 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12H17M17 12L13 8M17 12L13 16M15 22V22C18.866 22 22 18.866 22 15V9C22 5.13401 18.866 2 15 2V2C11.134 2 8 5.13401 8 9V15C8 18.866 11.134 22 15 22Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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