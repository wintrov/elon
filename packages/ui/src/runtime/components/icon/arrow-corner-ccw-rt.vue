<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M3 21H9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 3L21 8M16 3L11 8M16 3V14.6C16 16.8402 16 17.9603 15.564 18.816C15.1805 19.5686 14.5686 20.1805 13.816 20.564C12.9603 21 11.8402 21 9.6 21H9.5H9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 3L21 8M16 3L11 8M16 3C16 5.80745 16 10.6469 16 14.6012C16 16.8406 16 17.9603 15.564 18.816C15.1805 19.5686 14.5686 20.1805 13.816 20.564C12.9603 21 11.8402 21 9.6 21H3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 3L21 8M16 3L11 8M16 3C16 5.80745 16 10.6469 16 14.6012C16 16.8406 16 17.9603 15.564 18.816C15.1805 19.5686 14.5686 20.1805 13.816 20.564C12.9603 21 11.8402 21 9.6 21H3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 3L21 8M16 3L11 8M16 3C16 5.80745 16 10.6469 16 14.6012C16 16.8406 16 17.9603 15.564 18.816C15.1805 19.5686 14.5686 20.1805 13.816 20.564C12.9603 21 11.8402 21 9.6 21H3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 8L18.5 5.5M11 8L16 3C16 5.80745 16 10.6469 16 14.6012C16 16.8406 16 17.9603 15.564 18.816C15.1805 19.5686 14.5686 20.1805 13.816 20.564C12.9603 21 11.8402 21 9.6 21H3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 3L21 8M16 3L11 8M16 3C16 5.80745 16 10.6469 16 14.6012C16 16.8406 16 17.9603 15.564 18.816C15.1805 19.5686 14.5686 20.1805 13.816 20.564C12.9603 21 11.8402 21 9.6 21H3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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