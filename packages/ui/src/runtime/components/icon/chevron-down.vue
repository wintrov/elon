<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M18 9L15 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 9L12 15L15 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.12" d="M10.3029 14.3029L9.09706 13.0971C7.81193 11.8119 7.16936 11.1694 7.12594 10.6177C7.08827 10.139 7.28203 9.67123 7.64715 9.35939C8.06794 9 8.97667 9 10.7941 9H13.2059C15.0233 9 15.9321 9 16.3529 9.35939C16.718 9.67123 16.9117 10.139 16.8741 10.6177C16.8306 11.1694 16.1881 11.8119 14.9029 13.0971L13.6971 14.3029L13.6971 14.3029C13.103 14.897 12.806 15.194 12.4635 15.3053C12.1623 15.4032 11.8377 15.4032 11.5365 15.3053C11.194 15.194 10.897 14.897 10.3029 14.3029Z" fill="currentColor"/>
<path d="M10.8686 14.8686L7.73137 11.7314C6.87462 10.8746 6.44624 10.4462 6.4173 10.0785C6.39218 9.75934 6.52136 9.44749 6.76477 9.23959C7.04529 9 7.65111 9 8.86274 9H15.1373C16.3489 9 16.9547 9 17.2352 9.23959C17.4786 9.44749 17.6078 9.75934 17.5827 10.0785C17.5538 10.4462 17.1254 10.8746 16.2686 11.7314L13.1314 14.8686C12.7354 15.2646 12.5373 15.4627 12.309 15.5368C12.1082 15.6021 11.8918 15.6021 11.691 15.5368C11.4627 15.4627 11.2646 15.2646 10.8686 14.8686Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" d="M10.8686 14.8686L7.73137 11.7314C6.87462 10.8746 6.44624 10.4462 6.4173 10.0785C6.39218 9.75934 6.52136 9.44749 6.76477 9.23959C7.04529 9 7.65111 9 8.86274 9H15.1373C16.3489 9 16.9547 9 17.2352 9.23959C17.4786 9.44749 17.6078 9.75934 17.5827 10.0785C17.5538 10.4462 17.1254 10.8746 16.2686 11.7314L13.1314 14.8686C12.7354 15.2646 12.5373 15.4627 12.309 15.5368C12.1082 15.6021 11.8918 15.6021 11.691 15.5368C11.4627 15.4627 11.2646 15.2646 10.8686 14.8686Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.8686 14.8686L7.73137 11.7314C6.87462 10.8746 6.44624 10.4462 6.4173 10.0785C6.39218 9.75934 6.52136 9.44749 6.76477 9.23959C7.04529 9 7.65111 9 8.86274 9H15.1373C16.3489 9 16.9547 9 17.2352 9.23959C17.4786 9.44749 17.6078 9.75934 17.5827 10.0785C17.5538 10.4462 17.1254 10.8746 16.2686 11.7314L13.1314 14.8686C12.7354 15.2646 12.5373 15.4627 12.309 15.5368C12.1082 15.6021 11.8918 15.6021 11.691 15.5368C11.4627 15.4627 11.2646 15.2646 10.8686 14.8686Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9L12 15M18 9L14 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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