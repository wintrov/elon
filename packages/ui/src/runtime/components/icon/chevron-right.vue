<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M10 6L13 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 18L16 12L13 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.12" d="M14.8686 10.8686C15.2646 11.2646 15.4627 11.4627 15.5368 11.691C15.6021 11.8918 15.6021 12.1082 15.5368 12.309C15.4627 12.5373 15.2646 12.7354 14.8686 13.1314L11.7314 16.2686C10.8746 17.1254 10.4462 17.5538 10.0785 17.5827C9.75934 17.6078 9.44749 17.4786 9.23959 17.2352C9 16.9547 9 16.3489 9 15.1373L9 8.86274C9 7.65111 9 7.04529 9.23959 6.76477C9.44749 6.52136 9.75934 6.39218 10.0785 6.4173C10.4462 6.44624 10.8746 6.87462 11.7314 7.73137L14.8686 10.8686Z" fill="currentColor"/>
<path d="M14.8686 10.8685C15.2646 11.2646 15.4627 11.4626 15.5368 11.6909C15.6021 11.8917 15.6021 12.1081 15.5368 12.3089C15.4627 12.5373 15.2646 12.7353 14.8686 13.1313L11.7314 16.2685C10.8746 17.1253 10.4462 17.5537 10.0785 17.5826C9.75934 17.6077 9.44749 17.4786 9.23959 17.2351C9 16.9546 9 16.3488 9 15.1372L9 8.86265C9 7.65102 9 7.0452 9.23959 6.76467C9.44749 6.52126 9.75934 6.39209 10.0785 6.4172C10.4462 6.44615 10.8746 6.87453 11.7314 7.73128L14.8686 10.8685Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" d="M14.8686 10.8685C15.2646 11.2646 15.4627 11.4626 15.5368 11.6909C15.6021 11.8917 15.6021 12.1081 15.5368 12.3089C15.4627 12.5373 15.2646 12.7353 14.8686 13.1313L11.7314 16.2685C10.8746 17.1253 10.4462 17.5537 10.0785 17.5826C9.75934 17.6077 9.44749 17.4786 9.23959 17.2351C9 16.9546 9 16.3488 9 15.1372L9 8.86265C9 7.65102 9 7.0452 9.23959 6.76467C9.44749 6.52126 9.75934 6.39209 10.0785 6.4172C10.4462 6.44615 10.8746 6.87453 11.7314 7.73128L14.8686 10.8685Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.8686 10.8687C15.2646 11.2647 15.4627 11.4627 15.5368 11.691C15.6021 11.8919 15.6021 12.1082 15.5368 12.3091C15.4627 12.5374 15.2646 12.7354 14.8686 13.1314L11.7314 16.2687C10.8746 17.1254 10.4462 17.5538 10.0785 17.5828C9.75934 17.6079 9.44749 17.4787 9.23959 17.2353C9 16.9548 9 16.349 9 15.1373L9 8.8628C9 7.65117 9 7.04536 9.23959 6.76483C9.44749 6.52142 9.75934 6.39224 10.0785 6.41736C10.4462 6.4463 10.8746 6.87468 11.7314 7.73143L14.8686 10.8687Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 6L14 10M16 12L10 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 6L16 12L10 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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