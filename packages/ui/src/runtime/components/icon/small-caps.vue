<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M18 13V21M18 13H14.8C14.52 13 14.38 13 14.273 13.0545C14.1789 13.1024 14.1024 13.1789 14.0545 13.273C14 13.38 14 13.52 14 13.8V14.5M18 13H21.2C21.48 13 21.62 13 21.727 13.0545C21.8211 13.1024 21.8976 13.1789 21.9455 13.273C22 13.38 22 13.52 22 13.8V14.5M18 21H19.5M18 21H16.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 3V21M9 3H4.4C3.55992 3 3.13988 3 2.81901 3.16349C2.53677 3.3073 2.3073 3.53677 2.16349 3.81901C2 4.13988 2 4.55992 2 5.4V5.5V6M9 3H13.6C14.4401 3 14.8601 3 15.181 3.16349C15.4632 3.3073 15.6927 3.53677 15.8365 3.81901C16 4.13988 16 4.55992 16 5.4V5.5V6M9 21H11M9 21H7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 13V21M18 13H14.8C14.52 13 14.38 13 14.273 13.0545C14.1789 13.1024 14.1024 13.1789 14.0545 13.273C14 13.38 14 13.52 14 13.8V14.5M18 13H21.2C21.48 13 21.62 13 21.727 13.0545C21.8211 13.1024 21.8976 13.1789 21.9455 13.273C22 13.38 22 13.52 22 13.8V14.5M18 21H19.5M18 21H16.5M9 3V21M9 3H4.5C4.03534 3 3.80302 3 3.60982 3.03843C2.81644 3.19624 2.19624 3.81644 2.03843 4.60982C2 4.80302 2 5.03534 2 5.5V5.5V6M9 3H13.5C13.9647 3 14.197 3 14.3902 3.03843C15.1836 3.19624 15.8038 3.81644 15.9616 4.60982C16 4.80302 16 5.03534 16 5.5V5.5V6M9 21H11M9 21H7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 13V21M18 13H14.8C14.52 13 14.38 13 14.273 13.0545C14.1789 13.1024 14.1024 13.1789 14.0545 13.273C14 13.38 14 13.52 14 13.8V14.5M18 13H21.2C21.48 13 21.62 13 21.727 13.0545C21.8211 13.1024 21.8976 13.1789 21.9455 13.273C22 13.38 22 13.52 22 13.8V14.5M18 21H19.5M18 21H16.5M9 3V21M9 3H4.5C4.03534 3 3.80302 3 3.60982 3.03843C2.81644 3.19624 2.19624 3.81644 2.03843 4.60982C2 4.80302 2 5.03534 2 5.5V5.5V6M9 3H13.5C13.9647 3 14.197 3 14.3902 3.03843C15.1836 3.19624 15.8038 3.81644 15.9616 4.60982C16 4.80302 16 5.03534 16 5.5V5.5V6M9 21H11M9 21H7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 13V21M18 13H14.8C14.52 13 14.38 13 14.273 13.0545C14.1789 13.1024 14.1024 13.1789 14.0545 13.273C14 13.38 14 13.52 14 13.8V14.5M18 13H21.2C21.48 13 21.62 13 21.727 13.0545C21.8211 13.1024 21.8976 13.1789 21.9455 13.273C22 13.38 22 13.52 22 13.8V14.5M18 21H19.5M18 21H16.5M9 3V21M9 3H4.5C4.03534 3 3.80302 3 3.60982 3.03843C2.81644 3.19624 2.19624 3.81644 2.03843 4.60982C2 4.80302 2 5.03534 2 5.5V5.5V6M9 3H13.5C13.9647 3 14.197 3 14.3902 3.03843C15.1836 3.19624 15.8038 3.81644 15.9616 4.60982C16 4.80302 16 5.03534 16 5.5V5.5V6M9 21H11M9 21H7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 21H19.5M18 21H16.5M18 21V16M14 14.5V13.8C14 13.52 14 13.38 14.0545 13.273C14.1024 13.1789 14.1789 13.1024 14.273 13.0545C14.38 13 14.52 13 14.8 13H18H21.2C21.48 13 21.62 13 21.727 13.0545C21.8211 13.1024 21.8976 13.1789 21.9455 13.273C22 13.38 22 13.52 22 13.8V14.5M9 21H11M9 21H7M9 21V6.5M16 6V5.5V5.5C16 5.03534 16 4.80302 15.9616 4.60982C15.8038 3.81644 15.1836 3.19624 14.3902 3.03843C14.197 3 13.9647 3 13.5 3H9H4.5C4.03534 3 3.80302 3 3.60982 3.03843C2.81644 3.19624 2.19624 3.81644 2.03843 4.60982C2 4.80302 2 5.03534 2 5.5V5.5V6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 13V21M18 13H14.8C14.52 13 14.38 13 14.273 13.0545C14.1789 13.1024 14.1024 13.1789 14.0545 13.273C14 13.38 14 13.52 14 13.8V14.5M18 13H21.2C21.48 13 21.62 13 21.727 13.0545C21.8211 13.1024 21.8976 13.1789 21.9455 13.273C22 13.38 22 13.52 22 13.8V14.5M18 21H19.5M18 21H16.5M9 3V21M9 3H4.5C4.03534 3 3.80302 3 3.60982 3.03843C2.81644 3.19624 2.19624 3.81644 2.03843 4.60982C2 4.80302 2 5.03534 2 5.5V5.5V6M9 3H13.5C13.9647 3 14.197 3 14.3902 3.03843C15.1836 3.19624 15.8038 3.81644 15.9616 4.60982C16 4.80302 16 5.03534 16 5.5V5.5V6M9 21H11M9 21H7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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