<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M16 2V4.8C16 5.92011 16 6.48016 16.218 6.90798C16.4097 7.28431 16.7157 7.59027 17.092 7.78201C17.5198 8 18.0799 8 19.2 8H22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 2V4.8C8 5.92011 8 6.48016 7.78201 6.90798C7.59027 7.28431 7.28431 7.59027 6.90798 7.78201C6.48016 8 5.9201 8 4.8 8H2M8 22V19.2C8 18.0799 8 17.5198 7.78201 17.092C7.59027 16.7157 7.28431 16.4097 6.90798 16.218C6.48016 16 5.9201 16 4.8 16H2M16 22V19.2C16 18.0799 16 17.5198 16.218 17.092C16.4097 16.7157 16.7157 16.4097 17.092 16.218C17.5198 16 18.0799 16 19.2 16H22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.12" d="M8 4.8V2H16V4.8C16 5.9201 16 6.48016 16.218 6.90798C16.4097 7.28431 16.7157 7.59027 17.092 7.78201C17.5198 8 18.0799 8 19.2 8H22V16H19.2C18.0799 16 17.5198 16 17.092 16.218C16.7157 16.4097 16.4097 16.7157 16.218 17.092C16 17.5198 16 18.0799 16 19.2V22H8V19.2C8 18.0799 8 17.5198 7.78201 17.092C7.59027 16.7157 7.28431 16.4097 6.90798 16.218C6.48016 16 5.9201 16 4.8 16H2V8H4.8C5.9201 8 6.48016 8 6.90798 7.78201C7.28431 7.59027 7.59027 7.28431 7.78201 6.90798C8 6.48016 8 5.9201 8 4.8Z" fill="currentColor"/>
<path d="M8 2V4.8C8 5.92011 8 6.48016 7.78201 6.90798C7.59027 7.28431 7.28431 7.59027 6.90798 7.78201C6.48016 8 5.9201 8 4.8 8H2M8 22V19.2C8 18.0799 8 17.5198 7.78201 17.092C7.59027 16.7157 7.28431 16.4097 6.90798 16.218C6.48016 16 5.9201 16 4.8 16H2M16 2V4.8C16 5.92011 16 6.48016 16.218 6.90798C16.4097 7.28431 16.7157 7.59027 17.092 7.78201C17.5198 8 18.0799 8 19.2 8H22M16 22V19.2C16 18.0799 16 17.5198 16.218 17.092C16.4097 16.7157 16.7157 16.4097 17.092 16.218C17.5198 16 18.0799 16 19.2 16H22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2V4.8C8 5.92011 8 6.48016 7.78201 6.90798C7.59027 7.28431 7.28431 7.59027 6.90798 7.78201C6.48016 8 5.9201 8 4.8 8H2M8 22V19.2C8 18.0799 8 17.5198 7.78201 17.092C7.59027 16.7157 7.28431 16.4097 6.90798 16.218C6.48016 16 5.9201 16 4.8 16H2M16 2V4.8C16 5.92011 16 6.48016 16.218 6.90798C16.4097 7.28431 16.7157 7.59027 17.092 7.78201C17.5198 8 18.0799 8 19.2 8H22M16 22V19.2C16 18.0799 16 17.5198 16.218 17.092C16.4097 16.7157 16.7157 16.4097 17.092 16.218C17.5198 16 18.0799 16 19.2 16H22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2V4.8C8 5.92011 8 6.48016 7.78201 6.90798C7.59027 7.28431 7.28431 7.59027 6.90798 7.78201C6.48016 8 5.9201 8 4.8 8H2M8 22V19.2C8 18.0799 8 17.5198 7.78201 17.092C7.59027 16.7157 7.28431 16.4097 6.90798 16.218C6.48016 16 5.9201 16 4.8 16H2M16 2V4.8C16 5.92011 16 6.48016 16.218 6.90798C16.4097 7.28431 16.7157 7.59027 17.092 7.78201C17.5198 8 18.0799 8 19.2 8H22M16 22V19.2C16 18.0799 16 17.5198 16.218 17.092C16.4097 16.7157 16.7157 16.4097 17.092 16.218C17.5198 16 18.0799 16 19.2 16H22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2V4.8C8 5.92011 8 6.48016 7.78201 6.90798C7.59027 7.28431 7.28431 7.59027 6.90798 7.78201C6.48016 8 5.9201 8 4.8 8H2M8 22V19.2C8 18.0799 8 17.5198 7.78201 17.092C7.59027 16.7157 7.28431 16.4097 6.90798 16.218C6.48016 16 5.9201 16 4.8 16H2M16 2V4.8C16 5.92011 16 6.48016 16.218 6.90798C16.4097 7.28431 16.7157 7.59027 17.092 7.78201C17.5198 8 18.0799 8 19.2 8H22M16 22V19.2C16 18.0799 16 17.5198 16.218 17.092C16.4097 16.7157 16.7157 16.4097 17.092 16.218C17.5198 16 18.0799 16 19.2 16H22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2V4.8C8 5.92011 8 6.48016 7.78201 6.90798C7.59027 7.28431 7.28431 7.59027 6.90798 7.78201C6.48016 8 5.9201 8 4.8 8H2M8 22V19.2C8 18.0799 8 17.5198 7.78201 17.092C7.59027 16.7157 7.28431 16.4097 6.90798 16.218C6.48016 16 5.9201 16 4.8 16H2M16 2V4.8C16 5.92011 16 6.48016 16.218 6.90798C16.4097 7.28431 16.7157 7.59027 17.092 7.78201C17.5198 8 18.0799 8 19.2 8H22M16 22V19.2C16 18.0799 16 17.5198 16.218 17.092C16.4097 16.7157 16.7157 16.4097 17.092 16.218C17.5198 16 18.0799 16 19.2 16H22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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