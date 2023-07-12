<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M12 10V14M14 1H10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.5 4.5L18.364 6.63604M18.364 6.63604C16.7353 5.00736 14.4853 4 12 4C7.02944 4 3 8.02944 3 13C3 17.9706 7.02944 22 12 22C16.9706 22 21 17.9706 21 13C21 10.5147 19.9926 8.26472 18.364 6.63604Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.12" x="3" y="4" width="18" height="18" rx="9" fill="currentColor"/>
<path d="M20.5 4.5L18.364 6.63604M18.364 6.63604C16.7353 5.00736 14.4853 4 12 4C7.02944 4 3 8.02944 3 13C3 17.9706 7.02944 22 12 22C16.9706 22 21 17.9706 21 13C21 10.5147 19.9926 8.26472 18.364 6.63604ZM12 10V14M14 1H10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" fill-rule="evenodd" clip-rule="evenodd" d="M12 3.25C6.61522 3.25 2.25 7.61522 2.25 13C2.25 18.3848 6.61522 22.75 12 22.75C17.3848 22.75 21.75 18.3848 21.75 13C21.75 10.5779 20.866 8.36105 19.4043 6.65636L21.0303 5.03033C21.3232 4.73744 21.3232 4.26256 21.0303 3.96967C20.7374 3.67678 20.2626 3.67678 19.9697 3.96967L18.3436 5.5957C16.639 4.13402 14.4221 3.25 12 3.25Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.25 1C9.25 0.585786 9.58579 0.25 10 0.25H14C14.4142 0.25 14.75 0.585786 14.75 1C14.75 1.41421 14.4142 1.75 14 1.75H10C9.58579 1.75 9.25 1.41421 9.25 1ZM12 9.25C12.4142 9.25 12.75 9.58579 12.75 10V14C12.75 14.4142 12.4142 14.75 12 14.75C11.5858 14.75 11.25 14.4142 11.25 14V10C11.25 9.58579 11.5858 9.25 12 9.25Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.25 1C9.25 0.585786 9.58579 0.25 10 0.25H14C14.4142 0.25 14.75 0.585786 14.75 1C14.75 1.41421 14.4142 1.75 14 1.75H10C9.58579 1.75 9.25 1.41421 9.25 1Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.25C6.61522 3.25 2.25 7.61522 2.25 13C2.25 18.3848 6.61522 22.75 12 22.75C17.3848 22.75 21.75 18.3848 21.75 13C21.75 10.5779 20.866 8.36105 19.4043 6.65636L21.0303 5.03033C21.3232 4.73744 21.3232 4.26256 21.0303 3.96967C20.7374 3.67678 20.2626 3.67678 19.9697 3.96967L18.3436 5.5957C16.639 4.13402 14.4221 3.25 12 3.25ZM12.75 10C12.75 9.58579 12.4142 9.25 12 9.25C11.5858 9.25 11.25 9.58579 11.25 10V14C11.25 14.4142 11.5858 14.75 12 14.75C12.4142 14.75 12.75 14.4142 12.75 14V10Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.5 4.5L18.364 6.63604M18.364 6.63604C16.7353 5.00736 14.4853 4 12 4C7.02944 4 3 8.02944 3 13C3 14.4368 3.33671 15.795 3.93552 17M18.364 6.63604C19.9926 8.26472 21 10.5147 21 13C21 17.9706 16.9706 22 12 22C10.1499 22 8.4301 21.4417 7 20.4845M12 10V14M14 1H10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.5 4.5L18.364 6.63604M18.364 6.63604C16.7353 5.00736 14.4853 4 12 4C7.02944 4 3 8.02944 3 13C3 17.9706 7.02944 22 12 22C16.9706 22 21 17.9706 21 13C21 10.5147 19.9926 8.26472 18.364 6.63604ZM12 10V14M14 1H10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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