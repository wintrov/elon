<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle opacity="0.4" cx="10" cy="12" r="4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="1" y="3" width="22" height="18" rx="9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.12" fill-rule="evenodd" clip-rule="evenodd" d="M23 12C23 7.02944 18.9706 3 14 3H10C5.02944 3 1 7.02944 1 12V12C1 16.9706 5.02944 21 10 21H14C18.9706 21 23 16.9706 23 12V12ZM10 16C12.2091 16 14 14.2091 14 12C14 9.79086 12.2091 8 10 8C7.79086 8 6 9.79086 6 12C6 14.2091 7.79086 16 10 16Z" fill="currentColor"/>
<path d="M1 12C1 7.02944 5.02944 3 10 3H14C18.9706 3 23 7.02944 23 12V12C23 16.9706 18.9706 21 14 21H10C5.02944 21 1 16.9706 1 12V12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 12C14 14.2091 12.2091 16 10 16C7.79086 16 6 14.2091 6 12C6 9.79086 7.79086 8 10 8C12.2091 8 14 9.79086 14 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" fill-rule="evenodd" clip-rule="evenodd" d="M0.25 12C0.25 6.61522 4.61522 2.25 10 2.25H14C19.3848 2.25 23.75 6.61522 23.75 12V12C23.75 17.3848 19.3848 21.75 14 21.75H10C4.61522 21.75 0.25 17.3848 0.25 12V12Z" fill="currentColor"/>
<path d="M10 16C12.2091 16 14 14.2091 14 12C14 9.79086 12.2091 8 10 8C7.79086 8 6 9.79086 6 12C6 14.2091 7.79086 16 10 16Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.25 12C0.25 6.61522 4.61522 2.25 10 2.25H14C19.3848 2.25 23.75 6.61522 23.75 12V12C23.75 17.3848 19.3848 21.75 14 21.75H10C4.61522 21.75 0.25 17.3848 0.25 12V12ZM10 16C12.2091 16 14 14.2091 14 12C14 9.79086 12.2091 8 10 8C7.79086 8 6 9.79086 6 12C6 14.2091 7.79086 16 10 16Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 8C7.79086 8 6 9.79086 6 12C6 14.2091 7.79086 16 10 16C12.2091 16 14 14.2091 14 12C14 11.2969 13.8186 10.6361 13.5 10.062M10 21H14C18.9706 21 23 16.9706 23 12V12C23 7.02944 18.9706 3 14 3H10C5.02944 3 1 7.02944 1 12V12C1 16.9706 5.02944 21 10 21Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 12C1 7.02944 5.02944 3 10 3H14C18.9706 3 23 7.02944 23 12V12C23 16.9706 18.9706 21 14 21H10C5.02944 21 1 16.9706 1 12V12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 12C14 14.2091 12.2091 16 10 16C7.79086 16 6 14.2091 6 12C6 9.79086 7.79086 8 10 8C12.2091 8 14 9.79086 14 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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