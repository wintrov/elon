<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2546_11415)">
<path opacity="0.4" d="M2.00024 16H7.00024M4.00024 19H10.0002M14.0002 1H10.0002M12.0002 10V14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 13C3 8.02944 7.02944 4 12 4C16.9706 4 21 8.02944 21 13C21 17.9706 16.9706 22 12 22H7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_2546_11415">
<rect :width="width" :height="height" fill="white"/>
</clipPath>
</defs>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2546_11415)">
<rect opacity="0.12" x="3" y="4" width="18" height="18" rx="9" fill="currentColor"/>
<path d="M2.00024 16H7.00024M4.00024 19H10.0002M3.00024 13C3.00024 8.02944 7.02968 4 12.0002 4C16.9708 4 21.0002 8.02944 21.0002 13C21.0002 17.9706 16.9708 22 12.0002 22H7.00024M14.0002 1H10.0002M12.0002 10V14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_2546_11415">
<rect :width="width" :height="height" fill="white"/>
</clipPath>
</defs>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2546_11415)">
<path d="M2 16H7M4 19H10M3 13C3 8.02944 7.02944 4 12 4C16.9706 4 21 8.02944 21 13C21 17.9706 16.9706 22 12 22H7M14 1H10M12 10V14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_2546_11415">
<rect :width="width" :height="height" fill="white"/>
</clipPath>
</defs>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2546_11415)">
<path d="M2 16H7M4 19H10M3 13C3 8.02944 7.02944 4 12 4C16.9706 4 21 8.02944 21 13C21 17.9706 16.9706 22 12 22H7M14 1H10M12 10V14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_2546_11415">
<rect :width="width" :height="height" fill="white"/>
</clipPath>
</defs>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2546_11415)">
<path d="M2.00024 16H7.00024M4.00024 19H10.0002M3.00024 13C3.00024 8.02944 7.02968 4 12.0002 4C13.8504 4 15.5701 4.55827 17.0002 5.51555M7.00024 22H12.0002C16.9708 22 21.0002 17.9706 21.0002 13C21.0002 11.5632 20.6635 10.205 20.0647 9M14.0002 1H10.0002M12.0002 10V14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_2546_11415">
<rect :width="width" :height="height" fill="white"/>
</clipPath>
</defs>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2546_11415)">
<path d="M2.00024 16H7.00024M4.00024 19H10.0002M3.00024 13C3.00024 8.02944 7.02968 4 12.0002 4C16.9708 4 21.0002 8.02944 21.0002 13C21.0002 17.9706 16.9708 22 12.0002 22H7.00024M14.0002 1H10.0002M12.0002 10V14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_2546_11415">
<rect :width="width" :height="height" fill="white"/>
</clipPath>
</defs>
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