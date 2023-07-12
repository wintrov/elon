<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M11 8L10 16M14 8L13 16M8.5 10.5L16 10.5M8 13.5L15.5 13.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle opacity="0.12" cx="12" cy="12" r="10" fill="currentColor"/>
<path d="M11 8L10.6875 10.5M10.6875 10.5L10.3125 13.5M10.6875 10.5H8.5M10.6875 10.5H13.6875M10.3125 13.5L10 16M10.3125 13.5H8M10.3125 13.5H13.3125M14 8L13.6875 10.5M13.6875 10.5L13.3125 13.5M13.6875 10.5H16M13.3125 13.5L13 16M13.3125 13.5H15.5M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5746 6.25372C10.9868 6.29493 11.2875 6.66246 11.2463 7.07462L11.0287 9.24999H13.5213L13.7537 6.92537C13.7949 6.51321 14.1625 6.2125 14.5746 6.25372C14.9868 6.29493 15.2875 6.66246 15.2463 7.07462L15.0287 9.24999H17C17.4142 9.24999 17.75 9.58578 17.75 9.99999C17.75 10.4142 17.4142 10.75 17 10.75H14.8787L14.6287 13.25H16.375C16.7892 13.25 17.125 13.5858 17.125 14C17.125 14.4142 16.7892 14.75 16.375 14.75H14.4787L14.2463 17.0746C14.2051 17.4868 13.8375 17.7875 13.4254 17.7463C13.0132 17.7051 12.7125 17.3375 12.7537 16.9254L12.9713 14.75L10.4787 14.75L10.2463 17.0746C10.2051 17.4868 9.83753 17.7875 9.42537 17.7463C9.01321 17.7051 8.71251 17.3375 8.75372 16.9254L8.97126 14.75H7C6.58579 14.75 6.25 14.4142 6.25 14C6.25 13.5858 6.58579 13.25 7 13.25H9.12126L9.37126 10.75H7.625C7.21079 10.75 6.875 10.4142 6.875 10C6.875 9.58578 7.21079 9.25 7.625 9.25H9.52126L9.75372 6.92537C9.79494 6.51321 10.1625 6.2125 10.5746 6.25372ZM10.8787 10.75L10.6287 13.25L13.1213 13.25L13.3713 10.75H10.8787Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM11.2463 7.07463C11.2875 6.66247 10.9868 6.29494 10.5746 6.25372C10.1625 6.21251 9.79494 6.51321 9.75372 6.92537L9.52126 9.25H7.625C7.21079 9.25 6.875 9.58579 6.875 10C6.875 10.4142 7.21079 10.75 7.625 10.75H9.37126L9.12126 13.25H7C6.58579 13.25 6.25 13.5858 6.25 14C6.25 14.4142 6.58579 14.75 7 14.75H8.97126L8.75372 16.9254C8.71251 17.3375 9.01321 17.7051 9.42537 17.7463C9.83753 17.7875 10.2051 17.4868 10.2463 17.0746L10.4787 14.75H12.9713L12.7537 16.9254C12.7125 17.3375 13.0132 17.7051 13.4254 17.7463C13.8375 17.7875 14.2051 17.4868 14.2463 17.0746L14.4787 14.75H16.375C16.7892 14.75 17.125 14.4142 17.125 14C17.125 13.5858 16.7892 13.25 16.375 13.25H14.6287L14.8787 10.75H17C17.4142 10.75 17.75 10.4142 17.75 10C17.75 9.58579 17.4142 9.25 17 9.25H15.0287L15.2463 7.07463C15.2875 6.66247 14.9868 6.29494 14.5746 6.25372C14.1625 6.21251 13.7949 6.51321 13.7537 6.92537L13.5213 9.25H11.0287L11.2463 7.07463ZM13.1213 13.25H10.6287L10.8787 10.75H13.3713L13.1213 13.25Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 2.83209C14.7751 2.2969 13.4222 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.74835 21.2558 7.67051 20 5.99902M11 8L10 16M14 8L13 16M8.5 10.5H16M8 13.5H15.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 8L10 16M14 8L13 16M8.5 10.5H16M8 13.5H15.5M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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