<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M12.312 21C16.2711 21 19.6531 18.4658 21.0002 14.8926C19.9333 15.4066 18.742 15.6939 17.4852 15.6939C15.8323 15.6939 14.2925 15.1969 13.0002 14.3407" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.3118 21C7.16904 21 3 16.7238 3 11.4489C3 6.65034 6.45002 2.6783 10.9446 2C9.85605 3.4373 9.20787 5.24299 9.20787 7.20396C9.20787 9.9729 10.5002 12.4322 12.5 13.982C12.6621 14.1076 12.8289 14.2273 13 14.3407" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.12" d="M3 11.4489C3 16.7238 7.16904 21 12.3118 21C16.2709 21 19.6529 18.4657 21 14.8925C19.9331 15.4065 18.7418 15.6938 17.485 15.6938C12.9137 15.6938 9.20787 11.8928 9.20787 7.20396C9.20787 5.24299 9.85605 3.4373 10.9446 2C6.45002 2.6783 3 6.65034 3 11.4489Z" fill="currentColor"/>
<path d="M3 11.4489C3 16.7238 7.16904 21 12.3118 21C16.2709 21 19.6529 18.4657 21 14.8925C19.9331 15.4065 18.7418 15.6938 17.485 15.6938C12.9137 15.6938 9.20787 11.8928 9.20787 7.20396C9.20787 5.24299 9.85605 3.4373 10.9446 2C6.45002 2.6783 3 6.65034 3 11.4489Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" d="M11.5425 2.45285C11.7267 2.20966 11.7452 1.87914 11.5894 1.61688C11.4335 1.35463 11.1344 1.2129 10.8327 1.25842C5.96272 1.99337 2.25 6.28809 2.25 11.4489C2.25 17.12 6.737 21.75 12.3118 21.75C16.6025 21.75 20.2516 19.0038 21.7018 15.1571C21.81 14.8702 21.7326 14.5463 21.5064 14.3393C21.2802 14.1323 20.9507 14.0838 20.6745 14.2169C19.7065 14.6832 18.6262 14.9439 17.485 14.9439C13.3457 14.9439 9.95787 11.4967 9.95787 7.20398C9.95787 5.41053 10.5502 3.76308 11.5425 2.45285Z" fill="currentColor"/>
<path d="M11.5425 2.45285C11.7267 2.20966 11.7452 1.87914 11.5894 1.61688C11.4335 1.35463 11.1344 1.2129 10.8327 1.25842C5.96272 1.99337 2.25 6.28809 2.25 11.4489C2.25 14.4331 3.49245 17.129 5.48205 19.0138L11.9958 12.5C10.7334 11.1182 9.95787 9.25786 9.95787 7.20398C9.95787 5.41053 10.5502 3.76308 11.5425 2.45285Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5425 2.45285C11.7267 2.20966 11.7452 1.87914 11.5894 1.61688C11.4335 1.35463 11.1344 1.2129 10.8327 1.25842C5.96272 1.99337 2.25 6.28809 2.25 11.4489C2.25 17.12 6.737 21.75 12.3118 21.75C16.6025 21.75 20.2516 19.0038 21.7018 15.1571C21.81 14.8702 21.7326 14.5463 21.5064 14.3393C21.2802 14.1323 20.9507 14.0838 20.6745 14.2169C19.7065 14.6832 18.6262 14.9439 17.485 14.9439C13.3457 14.9439 9.95787 11.4967 9.95787 7.20398C9.95787 5.41053 10.5502 3.76308 11.5425 2.45285Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.443 5C6.85467 3.41901 8.77832 2.32693 10.9446 2C9.85605 3.4373 9.20787 5.24299 9.20787 7.20396C9.20787 11.8928 12.9137 15.6938 17.485 15.6938C18.7418 15.6938 19.9331 15.4065 21 14.8925C19.6529 18.4657 16.2709 21 12.3118 21C7.16904 21 3 16.7238 3 11.4489C3 10.6024 3.10737 9.78154 3.30891 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 11.4489C3 16.7238 7.16904 21 12.3118 21C16.2709 21 19.6529 18.4657 21 14.8925C19.9331 15.4065 18.7418 15.6938 17.485 15.6938C12.9137 15.6938 9.20787 11.8928 9.20787 7.20396C9.20787 5.24299 9.85605 3.4373 10.9446 2C6.45002 2.6783 3 6.65034 3 11.4489Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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