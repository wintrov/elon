<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M18.8533 12.7177C17.0634 11.0326 14.6522 10 11.9999 10C9.34754 10 6.93639 11.0326 5.14648 12.7177M12.5 18C12.5 18.2761 12.2761 18.5 12 18.5C11.7239 18.5 11.5 18.2761 11.5 18M12.5 18C12.5 17.7239 12.2761 17.5 12 17.5C11.7239 17.5 11.5 17.7239 11.5 18M12.5 18H11.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.8912 15.4329C14.8435 14.5394 13.4846 14 11.9998 14C10.5149 14 9.15605 14.5394 8.10839 15.4329M1.67969 10.5398C4.23895 7.74938 7.91513 6 11.9999 6C16.0847 6 19.7609 7.74938 22.3201 10.5398" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.12" d="M12 18L1.5 10.5C1.5 10.5 5.5 6 12 6C18.5 6 22.5 10.5 22.5 10.5L12 18Z" fill="currentColor"/>
<path d="M1.67969 10.5398C4.23895 7.74938 7.91513 6 11.9999 6C16.0847 6 19.7609 7.74938 22.3201 10.5398M18.8533 12.7177C17.0634 11.0326 14.6522 10 11.9999 10C9.34754 10 6.93639 11.0326 5.14648 12.7177M15.8912 15.4329C14.8435 14.5394 13.4846 14 11.9998 14C10.5149 14 9.15606 14.5394 8.1084 15.4329M12.5 18C12.5 18.2761 12.2761 18.5 12 18.5C11.7239 18.5 11.5 18.2761 11.5 18M12.5 18C12.5 17.7239 12.2761 17.5 12 17.5C11.7239 17.5 11.5 17.7239 11.5 18M12.5 18H11.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.67969 10.5398C4.23895 7.74938 7.91513 6 11.9999 6C16.0847 6 19.7609 7.74938 22.3201 10.5398M18.8533 12.7177C17.0634 11.0326 14.6522 10 11.9999 10C9.34754 10 6.93639 11.0326 5.14648 12.7177M15.8912 15.4329C14.8435 14.5394 13.4846 14 11.9998 14C10.5149 14 9.15606 14.5394 8.1084 15.4329M12.5 18C12.5 18.2761 12.2761 18.5 12 18.5C11.7239 18.5 11.5 18.2761 11.5 18M12.5 18C12.5 17.7239 12.2761 17.5 12 17.5C11.7239 17.5 11.5 17.7239 11.5 18M12.5 18H11.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.67969 10.5398C4.23895 7.74938 7.91513 6 11.9999 6C16.0847 6 19.7609 7.74938 22.3201 10.5398M18.8533 12.7177C17.0634 11.0326 14.6522 10 11.9999 10C9.34754 10 6.93639 11.0326 5.14648 12.7177M15.8912 15.4329C14.8435 14.5394 13.4846 14 11.9998 14C10.5149 14 9.15606 14.5394 8.1084 15.4329M12.5 18C12.5 18.2761 12.2761 18.5 12 18.5C11.7239 18.5 11.5 18.2761 11.5 18M12.5 18C12.5 17.7239 12.2761 17.5 12 17.5C11.7239 17.5 11.5 17.7239 11.5 18M12.5 18H11.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.67969 10.5398C4.23895 7.74938 7.91513 6 11.9999 6C13.0297 6 14.0335 6.11118 15 6.3222M18 7.34731C19.6409 8.12685 21.1062 9.21621 22.3201 10.5398M18.8533 12.7177C17.0634 11.0326 14.6522 10 11.9999 10C11.315 10 10.6462 10.0689 10 10.2M5.14648 12.7177C5.70724 12.1898 6.32898 11.7259 7 11.3378M15.8912 15.4329C14.8435 14.5394 13.4846 14 11.9998 14C10.5149 14 9.15606 14.5394 8.1084 15.4329M12.5 18C12.5 18.2761 12.2761 18.5 12 18.5C11.7239 18.5 11.5 18.2761 11.5 18M12.5 18C12.5 17.7239 12.2761 17.5 12 17.5C11.7239 17.5 11.5 17.7239 11.5 18M12.5 18H11.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.67969 10.5398C4.23895 7.74938 7.91513 6 11.9999 6C16.0847 6 19.7609 7.74938 22.3201 10.5398M18.8533 12.7177C17.0634 11.0326 14.6522 10 11.9999 10C9.34754 10 6.93639 11.0326 5.14648 12.7177M15.8912 15.4329C14.8435 14.5394 13.4846 14 11.9998 14C10.5149 14 9.15606 14.5394 8.1084 15.4329M12.5 18C12.5 18.2761 12.2761 18.5 12 18.5C11.7239 18.5 11.5 18.2761 11.5 18M12.5 18C12.5 17.7239 12.2761 17.5 12 17.5C11.7239 17.5 11.5 17.7239 11.5 18M12.5 18H11.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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