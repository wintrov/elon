<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle opacity="0.4" cx="15" cy="12" r="3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 9H12M9 9C7.34315 9 6 10.3431 6 12C6 13.6569 7.34315 15 9 15M9 9C7.34315 9 6 7.65685 6 6C6 4.34315 7.34315 3 9 3H12M12 9V15M12 9H15M12 9V3M9 15H12M9 15C7.34315 15 6 16.3431 6 18C6 19.6569 7.34315 21 9 21C10.6569 21 12 19.6569 12 18V15M12 3H15C16.6569 3 18 4.34315 18 6C18 7.65685 16.6569 9 15 9M15 9C13.3431 9 12 10.3431 12 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.12">
<path d="M12 9H9C7.34315 9 6 10.3431 6 12C6 13.6569 7.34315 15 9 15H12V9Z" fill="currentColor"/>
<path d="M12 3H15C16.6569 3 18 4.34315 18 6C18 7.65685 16.6569 9 15 9H12H9C7.34315 9 6 7.65685 6 6C6 4.34315 7.34315 3 9 3H12Z" fill="currentColor"/>
<path d="M12 15H9C7.34315 15 6 16.3431 6 18C6 19.6569 7.34315 21 9 21C10.6569 21 12 19.6569 12 18V15Z" fill="currentColor"/>
<path d="M18 12C18 13.6569 16.6569 15 15 15C13.3431 15 12 13.6569 12 12C12 10.3431 13.3431 9 15 9C16.6569 9 18 10.3431 18 12Z" fill="currentColor"/>
</g>
<path d="M9 9H12M9 9C7.34315 9 6 10.3431 6 12C6 13.6569 7.34315 15 9 15M9 9C7.34315 9 6 7.65685 6 6C6 4.34315 7.34315 3 9 3H12M12 9V15M12 9H15M12 9V3M9 15H12M9 15C7.34315 15 6 16.3431 6 18C6 19.6569 7.34315 21 9 21C10.6569 21 12 19.6569 12 18V15M12 3H15C16.6569 3 18 4.34315 18 6C18 7.65685 16.6569 9 15 9M15 9C13.3431 9 12 10.3431 12 12C12 13.6569 13.3431 15 15 15C16.6569 15 18 13.6569 18 12C18 10.3431 16.6569 9 15 9Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.32">
<path d="M11.25 9H8.25C6.59315 9 5.25 10.3431 5.25 12C5.25 13.6569 6.59315 15 8.25 15H11.25V9Z" fill="currentColor"/>
<path d="M12.25 2.25H15.25C16.9069 2.25 18.25 3.59315 18.25 5.25C18.25 6.90685 16.9069 8.25 15.25 8.25H12.25V2.25Z" fill="currentColor"/>
</g>
<path d="M11.25 2.25H8.25C6.59315 2.25 5.25 3.59315 5.25 5.25C5.25 6.90685 6.59315 8.25 8.25 8.25H11.25V2.25Z" fill="currentColor"/>
<path d="M11.25 15.75H8.25C6.59315 15.75 5.25 17.0931 5.25 18.75C5.25 20.4069 6.59315 21.75 8.25 21.75C9.90685 21.75 11.25 20.4069 11.25 18.75V15.75Z" fill="currentColor"/>
<path d="M15 15C16.6569 15 18 13.6569 18 12C18 10.3431 16.6569 9 15 9C13.3431 9 12 10.3431 12 12C12 13.6569 13.3431 15 15 15Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.25 2.25H8.25C6.59315 2.25 5.25 3.59315 5.25 5.25C5.25 6.90685 6.59315 8.25 8.25 8.25H11.25V2.25Z" fill="currentColor"/>
<path d="M11.25 9H8.25C6.59315 9 5.25 10.3431 5.25 12C5.25 13.6569 6.59315 15 8.25 15H11.25V9Z" fill="currentColor"/>
<path d="M15.25 2.25H12.25V8.25H15.25C16.9069 8.25 18.25 6.90685 18.25 5.25C18.25 3.59315 16.9069 2.25 15.25 2.25Z" fill="currentColor"/>
<path d="M11.25 15.75H8.25C6.59315 15.75 5.25 17.0931 5.25 18.75C5.25 20.4069 6.59315 21.75 8.25 21.75C9.90685 21.75 11.25 20.4069 11.25 18.75V15.75Z" fill="currentColor"/>
<path d="M15 15C16.6569 15 18 13.6569 18 12C18 10.3431 16.6569 9 15 9C13.3431 9 12 10.3431 12 12C12 13.6569 13.3431 15 15 15Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 9H12M9 9C7.34315 9 6 10.3431 6 12C6 13.6569 7.34315 15 9 15M9 9C7.34315 9 6 7.65685 6 6C6 4.34315 7.34315 3 9 3H12M12 9V15M12 9H15M12 9V3M9 15H12M9 15C7.34315 15 6 16.3431 6 18C6 19.6569 7.34315 21 9 21C10.6569 21 12 19.6569 12 18V15M12 3H15C16.6569 3 18 4.34315 18 6C18 7.65685 16.6569 9 15 9M15 9C13.3431 9 12 10.3431 12 12C12 13.6569 13.3431 15 15 15C16.6569 15 18 13.6569 18 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 9H12M9 9C7.34315 9 6 10.3431 6 12C6 13.6569 7.34315 15 9 15M9 9C7.34315 9 6 7.65685 6 6C6 4.34315 7.34315 3 9 3H12M12 9V15M12 9H15M12 9V3M9 15H12M9 15C7.34315 15 6 16.3431 6 18C6 19.6569 7.34315 21 9 21C10.6569 21 12 19.6569 12 18V15M12 3H15C16.6569 3 18 4.34315 18 6C18 7.65685 16.6569 9 15 9M15 9C13.3431 9 12 10.3431 12 12C12 13.6569 13.3431 15 15 15C16.6569 15 18 13.6569 18 12C18 10.3431 16.6569 9 15 9Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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