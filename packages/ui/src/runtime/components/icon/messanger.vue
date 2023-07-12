<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M7.255 12.964L11.139 10.051L12.783 12.499L16.745 9.52795" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.99889 18.4131C3.57778 16.7524 2 14.118 2 11.1256C2 6.06313 6.49778 2 12 2C17.5022 2 22 6.06313 22 11.1256C22 16.188 17.5022 20.2512 12 20.2512C11.2878 20.2512 10.5944 20.1809 9.92333 20.0515L6 22C6 20.6516 5.99778 19.3667 5.99889 18.4131Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.12" fill-rule="evenodd" clip-rule="evenodd" d="M2 11.1256C2 14.118 3.57778 16.7524 5.99889 18.4131C5.99778 19.3667 6 20.6516 6 22L9.92333 20.0515C10.5944 20.1809 11.2878 20.2512 12 20.2512C17.5022 20.2512 22 16.188 22 11.1256C22 6.06313 17.5022 2 12 2C6.49778 2 2 6.06313 2 11.1256Z" fill="currentColor"/>
<path d="M7.255 12.964L11.139 10.051L12.783 12.499L16.745 9.528M2 11.1256C2 14.118 3.57778 16.7524 5.99889 18.4131C5.99778 19.3667 6 20.6516 6 22L9.92333 20.0515C10.5944 20.1809 11.2878 20.2512 12 20.2512C17.5022 20.2512 22 16.188 22 11.1256C22 6.06313 17.5022 2 12 2C6.49778 2 2 6.06313 2 11.1256Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" d="M12 1.25C6.15193 1.25 1.25 5.5837 1.25 11.1256C1.25 14.2565 2.83237 17.006 5.24861 18.7989C5.24846 19.2632 5.24883 19.7873 5.24923 20.3465C5.2496 20.8734 5.25 21.4316 5.25 22C5.25 22.2596 5.38422 22.5007 5.60484 22.6375C5.82547 22.7742 6.10112 22.7872 6.3336 22.6717L10.0341 20.8339C10.6713 20.9426 11.3275 21.0012 12 21.0012C17.8481 21.0012 22.75 16.6675 22.75 11.1256C22.75 5.5837 17.8481 1.25 12 1.25Z" fill="currentColor"/>
<path d="M7.255 12.964L11.139 10.051L12.783 12.499L16.745 9.52795" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 11.1256C1.25 5.5837 6.15193 1.25 12 1.25C17.8481 1.25 22.75 5.5837 22.75 11.1256C22.75 16.6675 17.8481 21.0012 12 21.0012C11.3275 21.0012 10.6713 20.9426 10.0341 20.8339L6.3336 22.6717C6.10112 22.7872 5.82547 22.7742 5.60484 22.6375C5.38422 22.5007 5.25 22.2596 5.25 22C5.25 21.4316 5.2496 20.8734 5.24923 20.3465C5.24883 19.7873 5.24846 19.2632 5.24861 18.7989C2.83237 17.006 1.25 14.2565 1.25 11.1256ZM17.195 10.128C17.5263 9.87953 17.5935 9.40944 17.345 9.07805C17.0965 8.74666 16.6264 8.67946 16.2951 8.92796L12.9652 11.425L11.7616 9.63286C11.647 9.4621 11.4672 9.34594 11.2644 9.31155C11.0616 9.27717 10.8536 9.32758 10.689 9.451L6.80501 12.364C6.47363 12.6125 6.40648 13.0826 6.655 13.414C6.90353 13.7454 7.37363 13.8125 7.705 13.564L10.9569 11.1251L12.1604 12.9171C12.2751 13.0879 12.4548 13.2041 12.6576 13.2384C12.8604 13.2728 13.0684 13.2224 13.233 13.099L17.195 10.128Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.255 12.964L11.139 10.051L12.783 12.499L16.745 9.528M4.35763 17C4.84479 17.5251 5.39567 17.9993 5.99889 18.4131C5.99778 19.3667 6 20.6516 6 22L9.92333 20.0515C10.5944 20.1809 11.2878 20.2512 12 20.2512C17.5022 20.2512 22 16.188 22 11.1256C22 6.06313 17.5022 2 12 2C6.49778 2 2 6.06313 2 11.1256C2 11.5929 2.03848 12.0515 2.11264 12.499C2.16905 12.8394 2.24612 13.1734 2.3426 13.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.255 12.964L11.139 10.051L12.783 12.499L16.745 9.528M2 11.1256C2 14.118 3.57778 16.7524 5.99889 18.4131C5.99778 19.3667 6 20.6516 6 22L9.92333 20.0515C10.5944 20.1809 11.2878 20.2512 12 20.2512C17.5022 20.2512 22 16.188 22 11.1256C22 6.06313 17.5022 2 12 2C6.49778 2 2 6.06313 2 11.1256Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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