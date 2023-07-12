<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M3.00024 19.0002H7.00024M3.00024 3.00018H21.0002" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 11L18 11C20.2091 11 22 12.7909 22 15V15C22 17.2091 20.2091 19 18 19L12 19M12 19L15 16M12 19L15 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.00024 19.0002H7.00024M3.00024 11.0002L18.0002 11.0002C20.2094 11.0002 22.0002 12.791 22.0002 15.0002V15.0002C22.0002 17.2093 20.2094 19.0002 18.0002 19.0002L12.0002 19.0002M12.0002 19.0002L15.0002 16.0002M12.0002 19.0002L15.0002 22.0002M3.00024 3.00018H21.0002" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 19H7M3 11L18 11C20.2091 11 22 12.7909 22 15V15C22 17.2091 20.2091 19 18 19L12 19M12 19L15 16M12 19L15 22M3 3H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 19H7M3 11L18 11C20.2091 11 22 12.7909 22 15V15C22 17.2091 20.2091 19 18 19L12 19M12 19L15 16M12 19L15 22M3 3H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.00024 19.0002H7.00024M3.00024 11.0002L18.0002 11.0002C20.2094 11.0002 22.0002 12.791 22.0002 15.0002V15.0002C22.0002 17.2093 20.2094 19.0002 18.0002 19.0002L12.0002 19.0002M12.0002 19.0002L15.0002 16.0002M12.0002 19.0002L15.0002 22.0002M3.00024 3.00018H13.0002M17.0002 3.00018H21.0002" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.00024 19.0002H7.00024M3.00024 11.0002L18.0002 11.0002C20.2094 11.0002 22.0002 12.791 22.0002 15.0002V15.0002C22.0002 17.2093 20.2094 19.0002 18.0002 19.0002L12.0002 19.0002M12.0002 19.0002L15.0002 16.0002M12.0002 19.0002L15.0002 22.0002M3.00024 3.00018H21.0002" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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