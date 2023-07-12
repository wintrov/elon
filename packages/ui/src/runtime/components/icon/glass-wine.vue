<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M12 15V22M12 22H8M12 22H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3.44444C3 2.6467 3.6467 2 4.44444 2H19.5556C20.3533 2 21 2.6467 21 3.44444V6C21 10.9706 16.9706 15 12 15V15C7.02944 15 3 10.9706 3 6V3.44444Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.12" d="M3 3.44444C3 2.6467 3.6467 2 4.44444 2H19.5556C20.3533 2 21 2.6467 21 3.44444V6C21 10.9706 16.9706 15 12 15V15C7.02944 15 3 10.9706 3 6V3.44444Z" fill="currentColor"/>
<path d="M12 15V22M12 22H8M12 22H16M12 15V15C16.9706 15 21 10.9706 21 6V3.44444C21 2.6467 20.3533 2 19.5556 2H4.44444C3.6467 2 3 2.6467 3 3.44444V6C3 10.9706 7.02944 15 12 15Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" d="M3.86111 1.25C2.97132 1.25 2.25 1.97132 2.25 2.86111L2.25 6C2.25 11.3848 6.61522 15.75 12 15.75V15.75C17.3848 15.75 21.75 11.3848 21.75 6L21.75 2.86111C21.75 1.97132 21.0287 1.25 20.1389 1.25L3.86111 1.25Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 15.25C12.4142 15.25 12.75 15.5858 12.75 16L12.75 21.2501L16 21.2501C16.4142 21.2501 16.75 21.5859 16.75 22.0001C16.75 22.4143 16.4142 22.7501 16 22.7501L12 22.7501L8 22.7501C7.58578 22.7501 7.25 22.4143 7.25 22.0001C7.25 21.5859 7.58578 21.2501 8 21.2501L11.25 21.2501L11.25 16C11.25 15.5858 11.5858 15.25 12 15.25Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 2.86111C2.25 1.97132 2.97132 1.25 3.86111 1.25L20.1389 1.25001C21.0287 1.25001 21.75 1.97133 21.75 2.86112L21.75 6.00001C21.75 11.1325 17.7842 15.3387 12.7498 15.7216L12.7498 21.2499L15.9998 21.2499C16.414 21.2499 16.7498 21.5857 16.7498 21.9999C16.7498 22.4142 16.414 22.7499 15.9998 22.7499L11.9998 22.7499L7.99978 22.7499C7.58557 22.7499 7.24978 22.4142 7.24978 21.9999C7.24978 21.5857 7.58557 21.2499 7.99978 21.2499L11.2498 21.2499L11.2498 15.7216C6.21555 15.3385 2.25 11.1324 2.25 6L2.25 2.86111Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22V15C7.02944 15 3 10.9706 3 6V3.44444C3 2.6467 3.6467 2 4.44444 2H19.5556C20.3533 2 21 2.6467 21 3.44444V6C21 9.53372 18.9634 12.5918 16 14.0645M12 22H8M12 22H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 15V22M12 22H8M12 22H16M12 15V15C16.9706 15 21 10.9706 21 6V3.44444C21 2.6467 20.3533 2 19.5556 2H4.44444C3.6467 2 3 2.6467 3 3.44444V6C3 10.9706 7.02944 15 12 15Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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