<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M14 10.2002C15.8562 10.577 17.5256 11.4679 18.8533 12.7179M22.3201 10.5398C19.7609 7.74938 16.0847 6 11.9999 6C11.3209 6 10.6532 6.04834 10 6.14176M12.5 18C12.5 18.2761 12.2761 18.5 12 18.5C11.7239 18.5 11.5 18.2761 11.5 18M12.5 18C12.5 17.7239 12.2761 17.5 12 17.5C11.7239 17.5 11.5 17.7239 11.5 18M12.5 18H11.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.14649 12.7177C6.51402 11.4302 8.24419 10.5236 10.1675 10.1675M8.1084 15.4329C9.15606 14.5394 10.5149 14 11.9998 14C12.9247 14 13.8007 14.2093 14.5831 14.5831M1.67969 10.54C3.12143 8.96805 4.91764 7.72646 6.94168 6.94189M3 3L21 21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.12" d="M12 18L1.5 10.5C1.5 10.5 5.5 6 12 6C18.5 6 22.5 10.5 22.5 10.5L12 18Z" fill="currentColor"/>
<path d="M5.14648 12.7177C6.51401 11.4302 8.24419 10.5236 10.1675 10.1675M14 10.2C15.8562 10.5768 17.5256 11.4678 18.8533 12.7177M8.1084 15.4329C9.15606 14.5394 10.5149 14 11.9998 14C12.9247 14 13.8007 14.2093 14.5831 14.5831M22.3201 10.5398C19.7609 7.74938 16.0847 6 11.9999 6C11.3209 6 10.6532 6.04834 10 6.14176M1.67969 10.5398C3.12143 8.96783 4.91764 7.72624 6.94168 6.94168M3 3L21 21M12.5 18C12.5 18.2761 12.2761 18.5 12 18.5C11.7239 18.5 11.5 18.2761 11.5 18M12.5 18C12.5 17.7239 12.2761 17.5 12 17.5C11.7239 17.5 11.5 17.7239 11.5 18M12.5 18H11.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.14648 12.7177C6.51401 11.4302 8.24419 10.5236 10.1675 10.1675M14 10.2C15.8562 10.5768 17.5256 11.4678 18.8533 12.7177M8.1084 15.4329C9.15606 14.5394 10.5149 14 11.9998 14C12.9247 14 13.8007 14.2093 14.5831 14.5831M22.3201 10.5398C19.7609 7.74938 16.0847 6 11.9999 6C11.3209 6 10.6532 6.04834 10 6.14176M1.67969 10.5398C3.12143 8.96783 4.91764 7.72624 6.94168 6.94168M3 3L21 21M12.5 18C12.5 18.2761 12.2761 18.5 12 18.5C11.7239 18.5 11.5 18.2761 11.5 18M12.5 18C12.5 17.7239 12.2761 17.5 12 17.5C11.7239 17.5 11.5 17.7239 11.5 18M12.5 18H11.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.14648 12.7177C6.51401 11.4302 8.24419 10.5236 10.1675 10.1675M14 10.2C15.8562 10.5768 17.5256 11.4678 18.8533 12.7177M8.1084 15.4329C9.15606 14.5394 10.5149 14 11.9998 14C12.9247 14 13.8007 14.2093 14.5831 14.5831M22.3201 10.5398C19.7609 7.74938 16.0847 6 11.9999 6C11.3209 6 10.6532 6.04834 10 6.14176M1.67969 10.5398C3.12143 8.96783 4.91764 7.72624 6.94168 6.94168M3 3L21 21M12.5 18C12.5 18.2761 12.2761 18.5 12 18.5C11.7239 18.5 11.5 18.2761 11.5 18M12.5 18C12.5 17.7239 12.2761 17.5 12 17.5C11.7239 17.5 11.5 17.7239 11.5 18M12.5 18H11.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.1465 12.7177C6.51403 11.4302 8.2442 10.5236 10.1675 10.1675M14 10.2C15.8562 10.5768 17.5256 11.4678 18.8533 12.7177M8.10841 15.4329C9.15607 14.5394 10.5149 14 11.9998 14C12.9247 14 13.8007 14.2093 14.5831 14.5831M1.67969 10.5398C3.12143 8.96783 4.91764 7.72624 6.94168 6.94168M10 6.14176C10.6532 6.04834 11.3209 6 11.9999 6C13.3899 6 14.7326 6.20257 16 6.57979M22.3201 10.5398C21.6208 9.77732 20.8381 9.09257 19.9864 8.5C19.7352 8.32519 19.478 8.1584 19.2151 8M3 3L21 21M12.5 18C12.5 18.2761 12.2761 18.5 12 18.5C11.7239 18.5 11.5 18.2761 11.5 18M12.5 18C12.5 17.7239 12.2761 17.5 12 17.5C11.7239 17.5 11.5 17.7239 11.5 18M12.5 18H11.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.14648 12.7177C6.51401 11.4302 8.24419 10.5236 10.1675 10.1675M14 10.2C15.8562 10.5768 17.5256 11.4678 18.8533 12.7177M8.1084 15.4329C9.15606 14.5394 10.5149 14 11.9998 14C12.9247 14 13.8007 14.2093 14.5831 14.5831M22.3201 10.5398C19.7609 7.74938 16.0847 6 11.9999 6C11.3209 6 10.6532 6.04834 10 6.14176M1.67969 10.5398C3.12143 8.96783 4.91764 7.72624 6.94168 6.94168M3 3L21 21M12.5 18C12.5 18.2761 12.2761 18.5 12 18.5C11.7239 18.5 11.5 18.2761 11.5 18M12.5 18C12.5 17.7239 12.2761 17.5 12 17.5C11.7239 17.5 11.5 17.7239 11.5 18M12.5 18H11.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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