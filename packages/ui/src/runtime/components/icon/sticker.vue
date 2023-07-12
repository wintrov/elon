<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M11.6374 2C11.1593 3.00895 10.8918 4.13717 10.8918 5.32786C10.8918 9.62482 14.3752 13.1082 18.6721 13.1082C19.8628 13.1082 20.9911 12.8407 22 12.3626" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 11.9967C2 17.5214 6.47862 22 12.0033 22C17.4055 22 21.8075 17.7178 22 12.3626L11.6374 2C6.28224 2.19253 2 6.59454 2 11.9967Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.12" d="M2 11.9967C2 17.5214 6.47862 22 12.0033 22C17.4055 22 21.8075 17.7178 22 12.3626C20.9911 12.8407 19.8628 13.1082 18.6721 13.1082C14.3752 13.1082 10.8918 9.62482 10.8918 5.32786C10.8918 4.13717 11.1593 3.00895 11.6374 2C6.28224 2.19253 2 6.59454 2 11.9967Z" fill="currentColor"/>
<path d="M11.6374 2C11.1593 3.00895 10.8918 4.13717 10.8918 5.32786C10.8918 9.62482 14.3752 13.1082 18.6721 13.1082C19.8628 13.1082 20.9911 12.8407 22 12.3626M11.6374 2C6.28224 2.19253 2 6.59454 2 11.9967C2 17.5214 6.47862 22 12.0033 22C17.4055 22 21.8075 17.7178 22 12.3626M11.6374 2L22 12.3626" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" d="M1.25 11.9966C1.25 6.90357 4.79049 2.63772 9.54479 1.52573C10.0215 1.41422 10.5166 1.42204 11 1.49998L22.5 13C22.5779 13.4833 22.5857 13.9783 22.4742 14.455C21.3622 19.2094 17.0963 22.7499 12.0033 22.7499C6.06441 22.7499 1.25 17.9355 1.25 11.9966Z" fill="currentColor"/>
<path d="M11 1.5C10.7451 2.03792 10.3511 3.10723 10.2144 3.70054C10.0741 4.30941 10 4.94357 10 5.59503C10 10.237 13.763 14 18.405 14C19.0564 14 19.6906 13.9259 20.2995 13.7856C20.8928 13.6489 21.9621 13.2549 22.5 13L11 1.5Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.2702 1.38239C5.15516 2.21126 1.25 6.64779 1.25 11.9967C1.25 17.9356 6.06441 22.75 12.0033 22.75C17.3522 22.75 21.7887 18.8448 22.6176 13.7298C21.4184 14.2937 20.08 14.6082 18.6721 14.6082C13.5468 14.6082 9.39182 10.4532 9.39182 5.32783C9.39182 3.92003 9.7063 2.58155 10.2702 1.38239Z" fill="currentColor"/>
<path d="M11.6374 1.99997C11.4014 2.49792 11.2168 3.02491 11.0903 3.57413C10.9604 4.13775 10.8918 4.72478 10.8918 5.32783C10.8918 9.62479 14.3752 13.1082 18.6721 13.1082C19.2752 13.1082 19.8622 13.0396 20.4258 12.9097C20.9751 12.7832 21.5021 12.5985 22 12.3626L11.6374 1.99997Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.6374 2C11.1593 3.00895 10.8918 4.13717 10.8918 5.32786C10.8918 9.62482 14.3752 13.1082 18.6721 13.1082C19.8628 13.1082 20.9911 12.8407 22 12.3626L11.6374 2ZM11.6374 2C6.28224 2.19253 2 6.59454 2 11.9967C2 17.5214 6.47862 22 12.0033 22C16.1045 22 19.6293 19.5319 21.1733 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.6374 2C11.1593 3.00895 10.8918 4.13717 10.8918 5.32786C10.8918 9.62482 14.3752 13.1082 18.6721 13.1082C19.8628 13.1082 20.9911 12.8407 22 12.3626M11.6374 2C6.28224 2.19253 2 6.59454 2 11.9967C2 17.5214 6.47862 22 12.0033 22C17.4055 22 21.8075 17.7178 22 12.3626M11.6374 2L22 12.3626" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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