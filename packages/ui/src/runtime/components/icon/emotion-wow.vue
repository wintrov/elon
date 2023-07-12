<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M9.5 9C9.5 9.27614 9.27614 9.5 9 9.5C8.72386 9.5 8.5 9.27614 8.5 9M9.5 9C9.5 8.72386 9.27614 8.5 9 8.5C8.72386 8.5 8.5 8.72386 8.5 9M9.5 9H8.5M15.5 9C15.5 9.27614 15.2761 9.5 15 9.5C14.7239 9.5 14.5 9.27614 14.5 9M15.5 9C15.5 8.72386 15.2761 8.5 15 8.5C14.7239 8.5 14.5 8.72386 14.5 9M15.5 9H14.5M12 18C10.8954 18 10 17.1046 10 16V14C10 12.8954 10.8954 12 12 12C13.1046 12 14 12.8954 14 14V16C14 17.1046 13.1046 18 12 18Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 12C2 6.47715 6.47715 2 12 2V2C17.5228 2 22 6.47715 22 12V12C22 17.5228 17.5228 22 12 22V22C6.47715 22 2 17.5228 2 12V12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.12" fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 12C10.8954 12 10 12.8954 10 14V16C10 17.1046 10.8954 18 12 18C13.1046 18 14 17.1046 14 16V14C14 12.8954 13.1046 12 12 12Z" fill="currentColor"/>
<path d="M9.5 9C9.5 9.27614 9.27614 9.5 9 9.5C8.72386 9.5 8.5 9.27614 8.5 9M9.5 9C9.5 8.72386 9.27614 8.5 9 8.5C8.72386 8.5 8.5 8.72386 8.5 9M9.5 9H8.5M15.5 9C15.5 9.27614 15.2761 9.5 15 9.5C14.7239 9.5 14.5 9.27614 14.5 9M15.5 9C15.5 8.72386 15.2761 8.5 15 8.5C14.7239 8.5 14.5 8.72386 14.5 9M15.5 9H14.5M12 18C10.8954 18 10 17.1046 10 16V14C10 12.8954 10.8954 12 12 12C13.1046 12 14 12.8954 14 14V16C14 17.1046 13.1046 18 12 18ZM12 22V22C17.5228 22 22 17.5228 22 12V12C22 6.47715 17.5228 2 12 2V2C6.47715 2 2 6.47715 2 12V12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25Z" fill="currentColor"/>
<path d="M10 9C10 9.55228 9.55228 10 9 10C8.44772 10 8 9.55228 8 9C8 8.44772 8.44772 8 9 8C9.55228 8 10 8.44772 10 9Z" fill="currentColor"/>
<path d="M16 9C16 9.55228 15.5523 10 15 10C14.4477 10 14 9.55228 14 9C14 8.44772 14.4477 8 15 8C15.5523 8 16 8.44772 16 9Z" fill="currentColor"/>
<path d="M12 12C10.8954 12 10 12.8954 10 14V16C10 17.1046 10.8954 18 12 18C13.1046 18 14 17.1046 14 16V14C14 12.8954 13.1046 12 12 12Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM10 9C10 9.55228 9.55228 10 9 10C8.44772 10 8 9.55228 8 9C8 8.44772 8.44772 8 9 8C9.55228 8 10 8.44772 10 9ZM16 9C16 9.55228 15.5523 10 15 10C14.4477 10 14 9.55228 14 9C14 8.44772 14.4477 8 15 8C15.5523 8 16 8.44772 16 9ZM10 14C10 12.8954 10.8954 12 12 12C13.1046 12 14 12.8954 14 14V16C14 17.1046 13.1046 18 12 18C10.8954 18 10 17.1046 10 16V14Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.5 9C9.5 9.27614 9.27614 9.5 9 9.5C8.72386 9.5 8.5 9.27614 8.5 9M9.5 9C9.5 8.72386 9.27614 8.5 9 8.5C8.72386 8.5 8.5 8.72386 8.5 9M9.5 9H8.5M15.5 9C15.5 9.27614 15.2761 9.5 15 9.5C14.7239 9.5 14.5 9.27614 14.5 9M15.5 9C15.5 8.72386 15.2761 8.5 15 8.5C14.7239 8.5 14.5 8.72386 14.5 9M15.5 9H14.5M16.3641 3C15.0454 2.35934 13.5646 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.46388 21.0559 7.14827 19.5 5.38544M12 18C10.8954 18 10 17.1046 10 16V14C10 12.8954 10.8954 12 12 12C13.1046 12 14 12.8954 14 14V16C14 17.1046 13.1046 18 12 18Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.5 9C9.5 9.27614 9.27614 9.5 9 9.5C8.72386 9.5 8.5 9.27614 8.5 9M9.5 9C9.5 8.72386 9.27614 8.5 9 8.5C8.72386 8.5 8.5 8.72386 8.5 9M9.5 9H8.5M15.5 9C15.5 9.27614 15.2761 9.5 15 9.5C14.7239 9.5 14.5 9.27614 14.5 9M15.5 9C15.5 8.72386 15.2761 8.5 15 8.5C14.7239 8.5 14.5 8.72386 14.5 9M15.5 9H14.5M12 18C10.8954 18 10 17.1046 10 16V14C10 12.8954 10.8954 12 12 12C13.1046 12 14 12.8954 14 14V16C14 17.1046 13.1046 18 12 18ZM12 22V22C17.5228 22 22 17.5228 22 12V12C22 6.47715 17.5228 2 12 2V2C6.47715 2 2 6.47715 2 12V12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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