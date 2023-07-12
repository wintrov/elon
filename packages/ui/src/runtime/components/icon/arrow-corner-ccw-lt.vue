<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M21 21C21 19.0487 21 15 21 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 8L8 3M3 8L8 13M3 8C7.96805 8 11.7884 8 14.6047 8C16.8418 8 17.9603 8 18.816 8.43598C19.5686 8.81947 20.1805 9.43139 20.564 10.184C21 11.0397 21 12.1598 21 14.4V14.5V15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 8L8 3M3 8L8 13M3 8C7.96805 8 11.7884 8 14.6047 8C16.8418 8 17.9603 8 18.816 8.43598C19.5686 8.81947 20.1805 9.43139 20.564 10.184C21 11.0397 21 12.1598 21 14.4C21 17.2167 21 20.0924 21 21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 8L8 3M3 8L8 13M3 8C7.96805 8 11.7884 8 14.6047 8C16.8418 8 17.9603 8 18.816 8.43598C19.5686 8.81947 20.1805 9.43139 20.564 10.184C21 11.0397 21 12.1598 21 14.4C21 17.2167 21 20.0924 21 21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 8L8 3M3 8L8 13M3 8C7.96805 8 11.7884 8 14.6047 8C16.8418 8 17.9603 8 18.816 8.43598C19.5686 8.81947 20.1805 9.43139 20.564 10.184C21 11.0397 21 12.1598 21 14.4C21 17.2167 21 20.0924 21 21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 3L3 8C7.96805 8 11.7884 8 14.6047 8C16.8418 8 17.9603 8 18.816 8.43598C19.5686 8.81947 20.1805 9.43139 20.564 10.184C21 11.0397 21 12.1598 21 14.4C21 17.2167 21 20.0924 21 21M8 13L5.5 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 8L8 3M3 8L8 13M3 8C7.96805 8 11.7884 8 14.6047 8C16.8418 8 17.9603 8 18.816 8.43598C19.5686 8.81947 20.1805 9.43139 20.564 10.184C21 11.0397 21 12.1598 21 14.4C21 17.2167 21 20.0924 21 21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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