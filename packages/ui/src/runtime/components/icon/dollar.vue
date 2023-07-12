<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M12 2L12 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 16C6 18.2091 7.79086 20 10 20H14.5132C16.4389 20 18 18.4389 18 16.5132C18 15.0123 17.0396 13.6799 15.6158 13.2053L8.3842 10.7947C6.96038 10.3201 6 8.98767 6 7.48683C6 5.56111 7.56111 4 9.48683 4H14C16.2091 4 18 5.79086 18 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 16C6 18.2091 7.79086 20 10 20H14.5132C16.4389 20 18 18.4389 18 16.5132C18 15.0123 17.0396 13.6799 15.6158 13.2053L8.3842 10.7947C6.96038 10.3201 6 8.98767 6 7.48683C6 5.56111 7.56111 4 9.48683 4H14C16.2091 4 18 5.79086 18 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 2L12 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 16C6 18.2091 7.79086 20 10 20H14.5132C16.4389 20 18 18.4389 18 16.5132C18 15.0123 17.0396 13.6799 15.6158 13.2053L8.3842 10.7947C6.96038 10.3201 6 8.98767 6 7.48683C6 5.56111 7.56111 4 9.48683 4H14C16.2091 4 18 5.79086 18 8M12 2L12 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 16C6 18.2091 7.79086 20 10 20H14.5132C16.4389 20 18 18.4389 18 16.5132C18 15.0123 17.0396 13.6799 15.6158 13.2053L8.3842 10.7947C6.96038 10.3201 6 8.98767 6 7.48683C6 5.56111 7.56111 4 9.48683 4H14C16.2091 4 18 5.79086 18 8M12 2L12 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.3842 10.7947C6.96038 10.3201 6 8.98767 6 7.48683C6 5.56111 7.56111 4 9.48683 4H12M6 16C6 18.2091 7.79086 20 10 20H14.5132C16.4389 20 18 18.4389 18 16.5132C18 15.0123 17.0396 13.6799 15.6158 13.2053L12 12M18 8C18 5.79086 16.2091 4 14 4H12M12 2V4M12 4L12 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 16C6 18.2091 7.79086 20 10 20H14.5132C16.4389 20 18 18.4389 18 16.5132C18 15.0123 17.0396 13.6799 15.6158 13.2053L8.3842 10.7947C6.96038 10.3201 6 8.98767 6 7.48683C6 5.56111 7.56111 4 9.48683 4H14C16.2091 4 18 5.79086 18 8M12 2L12 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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