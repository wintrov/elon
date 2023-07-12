<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M15 9.59961C14.7788 9.29674 14.5167 9.02722 14.2222 8.79971C13.5723 8.29756 12.7644 8 11.8889 8C9.74112 8 8 9.79086 8 12C8 14.2091 9.74112 16 11.8889 16C12.7644 16 13.5723 15.7024 14.2222 15.2003C14.5167 14.9728 14.7788 14.7033 15 14.4004" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="2" y="2" width="20" height="20" rx="10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.12" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"/>
<path d="M15 9.59961C14.7788 9.29674 14.5167 9.02722 14.2222 8.79971C13.5723 8.29756 12.7644 8 11.8889 8C9.74112 8 8 9.79086 8 12C8 14.2091 9.74112 16 11.8889 16C12.7644 16 13.5723 15.7024 14.2222 15.2003C14.5167 14.9728 14.7788 14.7033 15 14.4004M12 22V22C17.5228 22 22 17.5228 22 12V12C22 6.47715 17.5228 2 12 2V2C6.47715 2 2 6.47715 2 12V12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.25 12C7.25 9.3967 9.30713 7.25 11.8889 7.25C12.9378 7.25 13.9055 7.60727 14.6808 8.2062C15.0316 8.47726 15.3431 8.79776 15.6056 9.15722C15.85 9.49171 15.7769 9.96092 15.4424 10.2052C15.1079 10.4496 14.6387 10.3765 14.3944 10.042C14.2145 9.79572 14.0018 9.57719 13.7637 9.39321C13.239 8.98784 12.5909 8.75 11.8889 8.75C10.1751 8.75 8.75 10.185 8.75 12C8.75 13.815 10.1751 15.25 11.8889 15.25C12.5909 15.25 13.239 15.0122 13.7637 14.6068C14.0018 14.4228 14.2145 14.2043 14.3944 13.958C14.6387 13.6235 15.1079 13.5504 15.4424 13.7948C15.7769 14.0391 15.85 14.5083 15.6056 14.8428C15.3431 15.2022 15.0316 15.5227 14.6808 15.7938C13.9055 16.3927 12.9378 16.75 11.8889 16.75C9.30713 16.75 7.25 14.6033 7.25 12Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM11.8889 7.25C9.30713 7.25 7.25 9.3967 7.25 12C7.25 14.6033 9.30713 16.75 11.8889 16.75C12.9378 16.75 13.9055 16.3927 14.6808 15.7938C15.0316 15.5227 15.3431 15.2022 15.6056 14.8428C15.85 14.5083 15.7769 14.0391 15.4424 13.7948C15.1079 13.5504 14.6387 13.6235 14.3944 13.958C14.2145 14.2043 14.0018 14.4228 13.7637 14.6068C13.239 15.0122 12.5909 15.25 11.8889 15.25C10.1751 15.25 8.75 13.815 8.75 12C8.75 10.185 10.1751 8.75 11.8889 8.75C12.5909 8.75 13.239 8.98784 13.7637 9.39321C14.0018 9.57719 14.2145 9.79572 14.3944 10.042C14.6387 10.3765 15.1079 10.4496 15.4424 10.2052C15.7769 9.96092 15.85 9.49171 15.6056 9.15722C15.3431 8.79776 15.0316 8.47726 14.6808 8.2062C13.9055 7.60727 12.9378 7.25 11.8889 7.25Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 2.83209C14.7751 2.2969 13.4222 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.74835 21.2558 7.67051 20 5.99902M15 9.59961C14.7788 9.29674 14.5167 9.02722 14.2222 8.79971C13.5723 8.29756 12.7644 8 11.8889 8C9.74112 8 8 9.79086 8 12C8 14.2091 9.74112 16 11.8889 16C12.7644 16 13.5723 15.7024 14.2222 15.2003C14.5167 14.9728 14.7788 14.7033 15 14.4004" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 9.59961C14.7788 9.29674 14.5167 9.02722 14.2222 8.79971C13.5723 8.29756 12.7644 8 11.8889 8C9.74112 8 8 9.79086 8 12C8 14.2091 9.74112 16 11.8889 16C12.7644 16 13.5723 15.7024 14.2222 15.2003C14.5167 14.9728 14.7788 14.7033 15 14.4004M12 22V22C17.5228 22 22 17.5228 22 12V12C22 6.47715 17.5228 2 12 2V2C6.47715 2 2 6.47715 2 12V12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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