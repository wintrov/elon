<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M9.5 9C9.5 9.27614 9.27614 9.5 9 9.5C8.72386 9.5 8.5 9.27614 8.5 9M9.5 9C9.5 8.72386 9.27614 8.5 9 8.5C8.72386 8.5 8.5 8.72386 8.5 9M9.5 9H8.5M15.5 9C15.5 9.27614 15.2761 9.5 15 9.5C14.7239 9.5 14.5 9.27614 14.5 9M15.5 9C15.5 8.72386 15.2761 8.5 15 8.5C14.7239 8.5 14.5 8.72386 14.5 9M15.5 9H14.5M17 13C17 13 15.7498 17 12 17C8.25019 17 7 13 7 13H17Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.12" fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM17 13C17 13 15.7498 17 12 17C8.25019 17 7 13 7 13H17Z" fill="currentColor"/>
<path d="M9.5 9C9.5 9.27614 9.27614 9.5 9 9.5C8.72386 9.5 8.5 9.27614 8.5 9M9.5 9C9.5 8.72386 9.27614 8.5 9 8.5C8.72386 8.5 8.5 8.72386 8.5 9M9.5 9H8.5M15.5 9C15.5 9.27614 15.2761 9.5 15 9.5C14.7239 9.5 14.5 9.27614 14.5 9M15.5 9C15.5 8.72386 15.2761 8.5 15 8.5C14.7239 8.5 14.5 8.72386 14.5 9M15.5 9H14.5M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM17 13C17 13 15.7498 17 12 17C8.25019 17 7 13 7 13H17Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25Z" fill="currentColor"/>
<path d="M12 17C15.7498 17 17 13 17 13H7C7 13 8.25019 17 12 17Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 9C7.75 8.30964 8.30964 7.75 9 7.75C9.69036 7.75 10.25 8.30964 10.25 9C10.25 9.69036 9.69036 10.25 9 10.25C8.30964 10.25 7.75 9.69036 7.75 9ZM13.75 9C13.75 8.30964 14.3096 7.75 15 7.75C15.6904 7.75 16.25 8.30964 16.25 9C16.25 9.69036 15.6904 10.25 15 10.25C14.3096 10.25 13.75 9.69036 13.75 9Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM9 7.75C8.30964 7.75 7.75 8.30964 7.75 9C7.75 9.69036 8.30964 10.25 9 10.25C9.69036 10.25 10.25 9.69036 10.25 9C10.25 8.30964 9.69036 7.75 9 7.75ZM15 7.75C14.3096 7.75 13.75 8.30964 13.75 9C13.75 9.69036 14.3096 10.25 15 10.25C15.6904 10.25 16.25 9.69036 16.25 9C16.25 8.30964 15.6904 7.75 15 7.75ZM17 13C17 13 15.7498 17 12 17C8.25019 17 7 13 7 13H17Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.5 9C9.5 9.27614 9.27614 9.5 9 9.5C8.72386 9.5 8.5 9.27614 8.5 9M9.5 9C9.5 8.72386 9.27614 8.5 9 8.5C8.72386 8.5 8.5 8.72386 8.5 9M9.5 9H8.5M15.5 9C15.5 9.27614 15.2761 9.5 15 9.5C14.7239 9.5 14.5 9.27614 14.5 9M15.5 9C15.5 8.72386 15.2761 8.5 15 8.5C14.7239 8.5 14.5 8.72386 14.5 9M15.5 9H14.5M16.3641 3C15.0454 2.35934 13.5646 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.51846 21.0961 7.24803 19.5996 5.5M17 13C17 13 15.7498 17 12 17C8.25019 17 7 13 7 13H17Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.5 9C9.5 9.27614 9.27614 9.5 9 9.5C8.72386 9.5 8.5 9.27614 8.5 9M9.5 9C9.5 8.72386 9.27614 8.5 9 8.5C8.72386 8.5 8.5 8.72386 8.5 9M9.5 9H8.5M15.5 9C15.5 9.27614 15.2761 9.5 15 9.5C14.7239 9.5 14.5 9.27614 14.5 9M15.5 9C15.5 8.72386 15.2761 8.5 15 8.5C14.7239 8.5 14.5 8.72386 14.5 9M15.5 9H14.5M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM17 13C17 13 15.7498 17 12 17C8.25019 17 7 13 7 13H17Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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