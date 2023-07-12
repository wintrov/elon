<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M17.5 17.5L21 21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 11C20 15.9706 15.9706 20 11 20C6.02944 20 2 15.9706 2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.12" d="M20 11C20 15.9706 15.9706 20 11 20C6.02944 20 2 15.9706 2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11Z" fill="currentColor"/>
<path d="M20.4697 21.5303C20.7626 21.8232 21.2374 21.8232 21.5303 21.5303C21.8232 21.2374 21.8232 20.7626 21.5303 20.4697L20.4697 21.5303ZM11 19.25C6.44365 19.25 2.75 15.5563 2.75 11H1.25C1.25 16.3848 5.61522 20.75 11 20.75V19.25ZM2.75 11C2.75 6.44365 6.44365 2.75 11 2.75V1.25C5.61522 1.25 1.25 5.61522 1.25 11H2.75ZM11 2.75C15.5563 2.75 19.25 6.44365 19.25 11H20.75C20.75 5.61522 16.3848 1.25 11 1.25V2.75ZM19.25 11C19.25 13.2784 18.3274 15.3399 16.8336 16.8336L17.8943 17.8943C19.6579 16.1307 20.75 13.6922 20.75 11H19.25ZM16.8336 16.8336C15.3399 18.3274 13.2784 19.25 11 19.25V20.75C13.6922 20.75 16.1307 19.6579 17.8943 17.8943L16.8336 16.8336ZM16.8336 17.8943L20.4697 21.5303L21.5303 20.4697L17.8943 16.8336L16.8336 17.8943Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" d="M11 1.25C5.61522 1.25 1.25 5.61522 1.25 11C1.25 16.3848 5.61522 20.75 11 20.75C13.6922 20.75 16.1307 19.6579 17.8943 17.8943C19.6579 16.1307 20.75 13.6922 20.75 11C20.75 5.61522 16.3848 1.25 11 1.25Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.4697 18.4697C18.7626 18.1768 19.2374 18.1768 19.5303 18.4697L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L18.4697 19.5303C18.1768 19.2374 18.1768 18.7626 18.4697 18.4697Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11 1.25C5.61522 1.25 1.25 5.61522 1.25 11C1.25 16.3848 5.61522 20.75 11 20.75C13.6922 20.75 16.1307 19.6579 17.8943 17.8943C19.6579 16.1307 20.75 13.6922 20.75 11C20.75 5.61522 16.3848 1.25 11 1.25ZM19.5303 18.4697C19.2374 18.1768 18.7626 18.1768 18.4697 18.4697C18.1768 18.7626 18.1768 19.2374 18.4697 19.5303L20.4697 21.5303C20.7626 21.8232 21.2374 21.8232 21.5303 21.5303C21.8232 21.2374 21.8232 20.7626 21.5303 20.4697L19.5303 18.4697Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 21L18.4953 18.4953C18.1033 18.1033 17.9073 17.9073 17.7092 17.8311C17.5121 17.7553 17.3684 17.7425 17.161 17.7825C16.9527 17.8226 16.6814 18.0117 16.1387 18.3897C14.6817 19.4048 12.9104 20 11 20C6.02944 20 2 15.9706 2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11C20 12.2414 19.7487 13.4241 19.2941 14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 21L17.364 17.364M17.364 17.364C18.9926 15.7353 20 13.4853 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C13.4853 20 15.7353 18.9926 17.364 17.364Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
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