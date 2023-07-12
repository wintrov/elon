<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M22 8V7.5V7.5C22 6.10444 22 5.40666 21.8278 4.83886C21.44 3.56046 20.4395 2.56004 19.1611 2.17224C18.5933 2 17.8956 2 16.5 2V2H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 16V16.5V16.5C22 17.8955 22 18.5933 21.8278 19.1611C21.44 20.4395 20.4395 21.4399 19.1611 21.8277C18.5933 22 17.8956 22 16.5 22V22H16M2 16V16.5V16.5C2 17.8955 2 18.5933 2.17224 19.1611C2.56004 20.4395 3.56046 21.4399 4.83886 21.8277C5.40666 22 6.10444 22 7.5 22V22H8M2 7.99997V7.49997V7.49997C2 6.10441 2 5.40663 2.17224 4.83883C2.56004 3.56043 3.56046 2.56001 4.83886 2.17221C5.40666 1.99997 6.10444 1.99997 7.5 1.99997V1.99997H8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.12" x="2" y="2" width="20" height="20" rx="4" fill="currentColor"/>
<path d="M22 8V7.5V7.5C22 6.10444 22 5.40666 21.8278 4.83886C21.44 3.56046 20.4395 2.56004 19.1611 2.17224C18.5933 2 17.8956 2 16.5 2V2H16M22 16V16.5V16.5C22 17.8956 22 18.5933 21.8278 19.1611C21.44 20.4395 20.4395 21.44 19.1611 21.8278C18.5933 22 17.8956 22 16.5 22V22H16M2 16V16.5V16.5C2 17.8956 2 18.5933 2.17224 19.1611C2.56004 20.4395 3.56046 21.44 4.83886 21.8278C5.40666 22 6.10444 22 7.5 22V22H8M2 8V7.5V7.5C2 6.10444 2 5.40666 2.17224 4.83886C2.56004 3.56046 3.56046 2.56004 4.83886 2.17224C5.40666 2 6.10444 2 7.5 2V2H8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 8V7.5V7.5C22 6.10444 22 5.40666 21.8278 4.83886C21.44 3.56046 20.4395 2.56004 19.1611 2.17224C18.5933 2 17.8956 2 16.5 2V2H16M22 16V16.5V16.5C22 17.8956 22 18.5933 21.8278 19.1611C21.44 20.4395 20.4395 21.44 19.1611 21.8278C18.5933 22 17.8956 22 16.5 22V22H16M2 16V16.5V16.5C2 17.8956 2 18.5933 2.17224 19.1611C2.56004 20.4395 3.56046 21.44 4.83886 21.8278C5.40666 22 6.10444 22 7.5 22V22H8M2 8V7.5V7.5C2 6.10444 2 5.40666 2.17224 4.83886C2.56004 3.56046 3.56046 2.56004 4.83886 2.17224C5.40666 2 6.10444 2 7.5 2V2H8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 8V7.5V7.5C22 6.10444 22 5.40666 21.8278 4.83886C21.44 3.56046 20.4395 2.56004 19.1611 2.17224C18.5933 2 17.8956 2 16.5 2V2H16M22 16V16.5V16.5C22 17.8956 22 18.5933 21.8278 19.1611C21.44 20.4395 20.4395 21.44 19.1611 21.8278C18.5933 22 17.8956 22 16.5 22V22H16M2 16V16.5V16.5C2 17.8956 2 18.5933 2.17224 19.1611C2.56004 20.4395 3.56046 21.44 4.83886 21.8278C5.40666 22 6.10444 22 7.5 22V22H8M2 8V7.5V7.5C2 6.10444 2 5.40666 2.17224 4.83886C2.56004 3.56046 3.56046 2.56004 4.83886 2.17224C5.40666 2 6.10444 2 7.5 2V2H8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 8V7.5V7.5C22 6.10444 22 5.40666 21.8278 4.83886C21.44 3.56046 20.4395 2.56004 19.1611 2.17224C18.5933 2 17.8956 2 16.5 2V2H16M22 16V16.5V16.5C22 17.8956 22 18.5933 21.8278 19.1611C21.44 20.4395 20.4395 21.44 19.1611 21.8278C18.5933 22 17.8956 22 16.5 22V22H16M2 16V16.5V16.5C2 17.8956 2 18.5933 2.17224 19.1611C2.56004 20.4395 3.56046 21.44 4.83886 21.8278C5.40666 22 6.10444 22 7.5 22V22H8M2 8V7.5V7.5C2 6.10444 2 5.40666 2.17224 4.83886C2.56004 3.56046 3.56046 2.56004 4.83886 2.17224C5.40666 2 6.10444 2 7.5 2V2H8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 8V7.5V7.5C22 6.10444 22 5.40666 21.8278 4.83886C21.44 3.56046 20.4395 2.56004 19.1611 2.17224C18.5933 2 17.8956 2 16.5 2V2H16M22 16V16.5V16.5C22 17.8956 22 18.5933 21.8278 19.1611C21.44 20.4395 20.4395 21.44 19.1611 21.8278C18.5933 22 17.8956 22 16.5 22V22H16M2 16V16.5V16.5C2 17.8956 2 18.5933 2.17224 19.1611C2.56004 20.4395 3.56046 21.44 4.83886 21.8278C5.40666 22 6.10444 22 7.5 22V22H8M2 8V7.5V7.5C2 6.10444 2 5.40666 2.17224 4.83886C2.56004 3.56046 3.56046 2.56004 4.83886 2.17224C5.40666 2 6.10444 2 7.5 2V2H8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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