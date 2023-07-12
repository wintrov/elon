<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle opacity="0.4" cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 12C21 16.9706 16.9706 21 12 21M21 12C21 7.02944 16.9706 3 12 3M21 12H23M12 21C7.02944 21 3 16.9706 3 12M12 21V23M3 12C3 7.02944 7.02944 3 12 3M3 12H1M12 3V1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.12" fill-rule="evenodd" clip-rule="evenodd" d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill="currentColor"/>
<path d="M21 12C21 16.9706 16.9706 21 12 21M21 12C21 7.02944 16.9706 3 12 3M21 12H23M12 21C7.02944 21 3 16.9706 3 12M12 21V23M3 12C3 7.02944 7.02944 3 12 3M3 12H1M12 3V1M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" fill-rule="evenodd" clip-rule="evenodd" d="M12 0.25C12.4142 0.25 12.75 0.585786 12.75 1V2.27842C17.5368 2.64256 21.3574 6.4632 21.7216 11.25H23C23.4142 11.25 23.75 11.5858 23.75 12C23.75 12.4142 23.4142 12.75 23 12.75H21.7216C21.3574 17.5368 17.5368 21.3574 12.75 21.7216V23C12.75 23.4142 12.4142 23.75 12 23.75C11.5858 23.75 11.25 23.4142 11.25 23V21.7216C6.4632 21.3574 2.64256 17.5368 2.27842 12.75H1C0.585786 12.75 0.25 12.4142 0.25 12C0.25 11.5858 0.585786 11.25 1 11.25H2.27842C2.64256 6.4632 6.4632 2.64256 11.25 2.27842V1C11.25 0.585786 11.5858 0.25 12 0.25ZM12 3.75C7.44365 3.75 3.75 7.44365 3.75 12C3.75 16.5563 7.44365 20.25 12 20.25C16.5563 20.25 20.25 16.5563 20.25 12C20.25 7.44365 16.5563 3.75 12 3.75Z" fill="currentColor"/>
<path d="M12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.75 1C12.75 0.585786 12.4142 0.25 12 0.25C11.5858 0.25 11.25 0.585786 11.25 1V2.27842C6.4632 2.64256 2.64256 6.4632 2.27842 11.25H1C0.585786 11.25 0.25 11.5858 0.25 12C0.25 12.4142 0.585786 12.75 1 12.75H2.27842C2.64256 17.5368 6.4632 21.3574 11.25 21.7216V23C11.25 23.4142 11.5858 23.75 12 23.75C12.4142 23.75 12.75 23.4142 12.75 23V21.7216C17.5368 21.3574 21.3574 17.5368 21.7216 12.75H23C23.4142 12.75 23.75 12.4142 23.75 12C23.75 11.5858 23.4142 11.25 23 11.25H21.7216C21.3574 6.4632 17.5368 2.64256 12.75 2.27842V1ZM3.75 12C3.75 7.44365 7.44365 3.75 12 3.75C16.5564 3.75 20.25 7.44365 20.25 12C20.25 16.5564 16.5564 20.25 12 20.25C7.44365 20.25 3.75 16.5564 3.75 12ZM8.25 12C8.25 9.92893 9.92893 8.25 12 8.25C14.0711 8.25 15.75 9.92893 15.75 12C15.75 14.0711 14.0711 15.75 12 15.75C9.92893 15.75 8.25 14.0711 8.25 12Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 21C16.9706 21 21 16.9706 21 12H23M12 21C7.02944 21 3 16.9706 3 12M12 21V23M3 12C3 7.02944 7.02944 3 12 3M3 12H1M12 3C15.5337 3 18.5918 5.03656 20.0645 8M12 3V1M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 12C21 16.9706 16.9706 21 12 21M21 12C21 7.02944 16.9706 3 12 3M21 12H23M12 21C7.02944 21 3 16.9706 3 12M12 21V23M3 12C3 7.02944 7.02944 3 12 3M3 12H1M12 3V1M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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