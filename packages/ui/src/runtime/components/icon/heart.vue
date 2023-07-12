<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M12 5.00062C13 3.50068 14.5 2.97897 16 3.00068C19 3.04408 22 5.5006 22 9.00046C22 12.1698 20.1549 14.9291 18.0428 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 5.00043C11 3.50049 9.47405 3.00049 8 3.00049C5 3.00049 2 5.50041 2 9.00027C2 16.0001 11 20.9998 12 20.9998C12.6805 20.9998 17.0652 18.6848 19.7979 14.9998" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.12" d="M12 21C13 21 22 16.0003 22 9.00046C22 5.5006 19 3.04408 16 3.00068C14.5 2.97897 13 3.50068 12 5.00062C11 3.50068 9.47405 3.00068 8 3.00068C5 3.00068 2 5.5006 2 9.00046C2 16.0003 11 21 12 21Z" fill="currentColor"/>
<path d="M12 21C13 21 22 16.0003 22 9.00046C22 5.5006 19 3.04408 16 3.00068C14.5 2.97897 13 3.50068 12 5.00062C11 3.50068 9.47405 3.00068 8 3.00068C5 3.00068 2 5.5006 2 9.00046C2 16.0003 11 21 12 21Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" d="M1.25 9.00042C1.25 5.04651 4.62678 2.25064 8 2.25064C9.37536 2.25064 10.86 2.64677 11.9984 3.81005C13.1283 2.6447 14.5981 2.23028 16.0109 2.25072C19.3659 2.29926 22.75 5.03776 22.75 9.00042C22.75 15.0194 16.9805 19.3484 12 21.8385C7.01949 19.3484 1.25 15.0194 1.25 9.00042Z" fill="currentColor"/>
<path d="M12 21.8385C9.61009 20.6436 7.0385 19.0253 5.00989 17C5.00989 17 6 11 11.9984 11C17.9969 11 18.9901 17 18.9901 17C16.9615 19.0253 14.3899 20.6436 12 21.8385Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.25 9.00042C1.25 5.04651 4.62678 2.25064 8 2.25064C9.37536 2.25064 10.86 2.64677 11.9984 3.81005C13.1283 2.6447 14.5981 2.23028 16.0109 2.25072C19.3659 2.29926 22.75 5.03776 22.75 9.00042C22.75 15.0194 16.9805 19.3484 12 21.8385C7.01949 19.3484 1.25 15.0194 1.25 9.00042Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.9895 16.0002C20.6772 14.0736 22 11.684 22 9.00043C22 5.50057 19 3.04405 16 3.00065C14.5 2.97894 13 3.50065 12 5.00059C11 3.50065 9.47405 3.00065 8 3.00065C5 3.00065 2 5.50057 2 9.00043C2 16.0002 11 21 12 21C12.2791 21 13.1816 20.6104 14.3377 19.8965C14.7548 19.6389 15.205 19.3391 15.6708 19.0001" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 21C13 21 22 16.0003 22 9.00046C22 5.5006 19 3.04408 16 3.00068C14.5 2.97897 13 3.50068 12 5.00062C11 3.50068 9.47405 3.00068 8 3.00068C5 3.00068 2 5.5006 2 9.00046C2 16.0003 11 21 12 21Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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