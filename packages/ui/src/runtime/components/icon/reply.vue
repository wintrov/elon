<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M22 18V17.5V17.4C22 15.1598 22 14.0397 21.564 13.184C21.1805 12.4314 20.5686 11.8195 19.816 11.436C18.9603 11 17.8402 11 15.6 11H14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 11L7 6M2 11L7 16M2 11H13.5H14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 11L7 6M2 11L7 16M2 11H15.6C17.8402 11 18.9603 11 19.816 11.436C20.5686 11.8195 21.1805 12.4314 21.564 13.184C22 14.0397 22 15.1598 22 17.4V17.5V18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 11L7 6M2 11L7 16M2 11H15.6C17.8402 11 18.9603 11 19.816 11.436C20.5686 11.8195 21.1805 12.4314 21.564 13.184C22 14.0397 22 15.1598 22 17.4V17.5V18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 11L7 6M2 11L7 16M2 11H15.6C17.8402 11 18.9603 11 19.816 11.436C20.5686 11.8195 21.1805 12.4314 21.564 13.184C22 14.0397 22 15.1598 22 17.4V17.5V18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 6L2 11H15.6C17.8402 11 18.9603 11 19.816 11.436C20.5686 11.8195 21.1805 12.4314 21.564 13.184C22 14.0397 22 15.1598 22 17.4V17.5V18M7 16L4.5 13.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 11L7 6M2 11L7 16M2 11H15.6C17.8402 11 18.9603 11 19.816 11.436C20.5686 11.8195 21.1805 12.4314 21.564 13.184C22 14.0397 22 15.1598 22 17.4V17.5V18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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