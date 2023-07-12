<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M12 2.99976H18C18.465 2.99976 18.6975 2.99976 18.8882 3.05087C19.4059 3.18957 19.8102 3.59389 19.9489 4.11153C20 4.30228 20 4.53477 20 4.99976V4.99976V5.99976M12 2.99976H8.5M12 2.99976V6.99976" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 21H16M12 21H8M12 21V12M4 4L20 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3H17.5C17.9647 3 18.197 3 18.3902 3.03843C19.1836 3.19624 19.8038 3.81644 19.9616 4.60982C20 4.80302 20 5.03534 20 5.5V5.5V6M12 3H8.5M12 3V7M12 21H16M12 21H8M12 21V12M4 4L20 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3H17.5C17.9647 3 18.197 3 18.3902 3.03843C19.1836 3.19624 19.8038 3.81644 19.9616 4.60982C20 4.80302 20 5.03534 20 5.5V5.5V6M12 3H8.5M12 3V7M12 21H16M12 21H8M12 21V12M4 4L20 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3H17.5C17.9647 3 18.197 3 18.3902 3.03843C19.1836 3.19624 19.8038 3.81644 19.9616 4.60982C20 4.80302 20 5.03534 20 5.5V5.5V6M12 3H8.5M12 3V7M12 21H16M12 21H8M12 21V12M4 4L20 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3H17.5C17.9647 3 18.197 3 18.3902 3.03843C19.1836 3.19624 19.8038 3.81644 19.9616 4.60982C20 4.80302 20 5.03534 20 5.5V5.5V6M12 3H8.5M12 3V7M12 21H16M12 21H8M12 21V16.5M4 4L20 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3H17.5C17.9647 3 18.197 3 18.3902 3.03843C19.1836 3.19624 19.8038 3.81644 19.9616 4.60982C20 4.80302 20 5.03534 20 5.5V5.5V6M12 3H8.5M12 3V7M12 21H16M12 21H8M12 21V12M4 4L20 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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