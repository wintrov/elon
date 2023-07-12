<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M12 19C15.4286 19 20 16 20 11M12 19C8.57143 19 4 16 4 11M12 19V22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="7" y="2" width="10" height="14" rx="5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.12" x="7" y="2" width="10" height="14" rx="5" fill="currentColor"/>
<path d="M12 19C15.4286 19 20 16 20 11M12 19C8.57143 19 4 16 4 11M12 19V22M12 16V16C14.7614 16 17 13.7614 17 11V7C17 4.23858 14.7614 2 12 2V2C9.23858 2 7 4.23858 7 7V11C7 13.7614 9.23858 16 12 16Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" d="M12 1.25C8.82436 1.25 6.25 3.82436 6.25 7V11C6.25 14.1756 8.82436 16.75 12 16.75V16.75C15.1756 16.75 17.75 14.1756 17.75 11V7C17.75 3.82436 15.1756 1.25 12 1.25V1.25Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 10.25C4.41421 10.25 4.75 10.5858 4.75 11C4.75 13.2524 5.77436 15.056 7.20816 16.3106C8.65637 17.5778 10.4846 18.25 12 18.25C13.5154 18.25 15.3436 17.5778 16.7918 16.3106C18.2256 15.056 19.25 13.2524 19.25 11C19.25 10.5858 19.5858 10.25 20 10.25C20.4142 10.25 20.75 10.5858 20.75 11C20.75 13.7476 19.4886 15.944 17.7796 17.4394C16.3031 18.7314 14.4643 19.5261 12.75 19.7092V22C12.75 22.4142 12.4142 22.75 12 22.75C11.5858 22.75 11.25 22.4142 11.25 22V19.7092C9.53571 19.5261 7.69694 18.7314 6.22041 17.4394C4.51136 15.944 3.25 13.7476 3.25 11C3.25 10.5858 3.58579 10.25 4 10.25Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.25 7C6.25 3.82436 8.82436 1.25 12 1.25C15.1756 1.25 17.75 3.82436 17.75 7V11C17.75 14.1756 15.1756 16.75 12 16.75C8.82436 16.75 6.25 14.1756 6.25 11V7ZM4.75 11C4.75 10.5858 4.41421 10.25 4 10.25C3.58579 10.25 3.25 10.5858 3.25 11C3.25 13.7476 4.51136 15.944 6.22041 17.4394C7.69694 18.7314 9.53571 19.5261 11.25 19.7092V22C11.25 22.4142 11.5858 22.75 12 22.75C12.4142 22.75 12.75 22.4142 12.75 22V19.7092C14.4643 19.5261 16.3031 18.7314 17.7796 17.4394C19.4886 15.944 20.75 13.7476 20.75 11C20.75 10.5858 20.4142 10.25 20 10.25C19.5858 10.25 19.25 10.5858 19.25 11C19.25 13.2524 18.2256 15.056 16.7918 16.3106C15.3436 17.5778 13.5154 18.25 12 18.25C10.4846 18.25 8.65637 17.5778 7.20816 16.3106C5.77436 15.056 4.75 13.2524 4.75 11Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 2.41604C13.3875 2.14845 12.7111 2 12 2C9.23858 2 7 4.23858 7 7V11C7 13.7614 9.23858 16 12 16C14.7614 16 17 13.7614 17 11V7C17 6.2889 16.8516 5.61246 16.584 5M20 11C20 16 15.4286 19 12 19V21.5V22M9 18.3266C6.384 17.1785 4 14.6108 4 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 19C15.4286 19 20 16 20 11M12 19C8.57143 19 4 16 4 11M12 19V22M12 16C9.23858 16 7 13.7614 7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V11C17 13.7614 14.7614 16 12 16Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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