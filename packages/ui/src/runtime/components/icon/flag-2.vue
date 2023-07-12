<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M5 4L6.31951 3.67012C8.0358 3.24105 9.85224 3.51134 11.3692 4.42154V4.42154C13.039 5.4234 15.0632 5.6456 16.9105 5.02982L20 4V15L16.9105 16.0298C15.0632 16.6456 13.039 16.4234 11.3692 15.4215V15.4215C9.85224 14.5113 8.0358 14.2411 6.31951 14.6701L5 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 22V2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.12" d="M5 15V4L6.31951 3.67012C8.0358 3.24105 9.85224 3.51134 11.3692 4.42154C13.039 5.4234 15.0632 5.6456 16.9105 5.02982L20 4V15L16.9105 16.0298C15.0632 16.6456 13.039 16.4234 11.3692 15.4215C9.85224 14.5113 8.0358 14.241 6.31951 14.6701L5 15Z" fill="currentColor"/>
<path d="M5 4V15M5 4V2M5 4L6.31951 3.67012C8.0358 3.24105 9.85224 3.51134 11.3692 4.42154V4.42154C13.039 5.4234 15.0632 5.6456 16.9105 5.02982L20 4V15L16.9105 16.0298C15.0632 16.6456 13.039 16.4234 11.3692 15.4215V15.4215C9.85224 14.5113 8.0358 14.2411 6.31951 14.6701L5 15M5 22V15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" d="M5.75 15.5856L6.18426 15.477C7.91065 15.0454 9.73777 15.3173 11.2637 16.2328C12.9433 17.2406 14.9794 17.4641 16.8376 16.8447L20.5198 15.6173C20.6573 15.5715 20.75 15.4428 20.75 15.2979V3.40044C20.75 3.18347 20.5374 3.03026 20.3316 3.09887L16.9835 4.21491C15.147 4.82707 13.1347 4.60617 11.4748 3.61021C9.96671 2.70536 8.16095 2.43665 6.45476 2.8632L5.75 3.03939V15.5856Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 1.25C5.41421 1.25 5.75 1.58579 5.75 2V4V15V22C5.75 22.4142 5.41421 22.75 5 22.75C4.58579 22.75 4.25 22.4142 4.25 22V15V4V2C4.25 1.58579 4.58579 1.25 5 1.25Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.75 2C5.75 1.58579 5.41421 1.25 5 1.25C4.58579 1.25 4.25 1.58579 4.25 2V4V15V22C4.25 22.4142 4.58579 22.75 5 22.75C5.41421 22.75 5.75 22.4142 5.75 22V15.5856L6.50141 15.3977C8.02473 15.0169 9.63694 15.2568 10.9834 16.0647C12.8409 17.1792 15.0927 17.4264 17.1477 16.7413L20.2372 15.7115C20.5434 15.6094 20.75 15.3228 20.75 15V4C20.75 3.75892 20.6341 3.53253 20.4385 3.39157C20.243 3.2506 19.9915 3.21225 19.7628 3.28849L16.6734 4.31831C15.0337 4.86486 13.2371 4.66764 11.7551 3.77842C10.0675 2.76589 8.04687 2.4652 6.13761 2.94252L5.75 3.03942V2Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 4V15V22M5 4V2M5 4L6.31951 3.67012C8.0358 3.24105 9.85224 3.51134 11.3692 4.42154C13.039 5.4234 15.0632 5.6456 16.9105 5.02982L20 4V15L16.9105 16.0298C15.0632 16.6456 13.039 16.4234 11.3692 15.4215C10.6346 14.9808 9.82972 14.69 9 14.5562" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 4V15M5 4V2M5 4L6.31951 3.67012C8.0358 3.24105 9.85224 3.51134 11.3692 4.42154V4.42154C13.039 5.4234 15.0632 5.6456 16.9105 5.02982L20 4V15L16.9105 16.0298C15.0632 16.6456 13.039 16.4234 11.3692 15.4215V15.4215C9.85224 14.5113 8.0358 14.2411 6.31951 14.6701L5 15M5 22V15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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