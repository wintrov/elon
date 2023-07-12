<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M17 22H19.8C21.5673 22 23 20.5673 23 18.8V18.8C23 16.149 20.851 14 18.2 14H17M15 10C17.2091 10 19 8.20914 19 6C19 3.79086 17.2091 2 15 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1 18.8C1 16.149 3.14903 14 5.8 14H10.2C12.851 14 15 16.149 15 18.8V18.8C15 20.5673 13.5673 22 11.8 22H4.2C2.43269 22 1 20.5673 1 18.8V18.8Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 6C12 8.20914 10.2091 10 8 10C5.79086 10 4 8.20914 4 6C4 3.79086 5.79086 2 8 2C10.2091 2 12 3.79086 12 6Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.12">
<path d="M1 18.8C1 16.149 3.14903 14 5.8 14H10.2C12.851 14 15 16.149 15 18.8V18.8C15 20.5673 13.5673 22 11.8 22H4.2C2.43269 22 1 20.5673 1 18.8V18.8Z" fill="currentColor"/>
<path d="M12 6C12 8.20914 10.2091 10 8 10C5.79086 10 4 8.20914 4 6C4 3.79086 5.79086 2 8 2C10.2091 2 12 3.79086 12 6Z" fill="currentColor"/>
</g>
<path d="M15 10C17.2091 10 19 8.20914 19 6C19 3.79086 17.2091 2 15 2M17 22H19.8C21.5673 22 23 20.5673 23 18.8V18.8C23 16.149 20.851 14 18.2 14H17M12 6C12 8.20914 10.2091 10 8 10C5.79086 10 4 8.20914 4 6C4 3.79086 5.79086 2 8 2C10.2091 2 12 3.79086 12 6ZM4.2 22H11.8C13.5673 22 15 20.5673 15 18.8V18.8C15 16.149 12.851 14 10.2 14H5.8C3.14903 14 1 16.149 1 18.8V18.8C1 20.5673 2.43269 22 4.2 22Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" d="M3.25 6C3.25 3.37665 5.37665 1.25 8 1.25C10.6234 1.25 12.75 3.37665 12.75 6C12.75 8.62335 10.6234 10.75 8 10.75C5.37665 10.75 3.25 8.62335 3.25 6Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 1.25C14.5858 1.25 14.25 1.58579 14.25 2C14.25 2.41421 14.5858 2.75 15 2.75C16.7949 2.75 18.25 4.20507 18.25 6C18.25 7.79493 16.7949 9.25 15 9.25C14.5858 9.25 14.25 9.58579 14.25 10C14.25 10.4142 14.5858 10.75 15 10.75C17.6234 10.75 19.75 8.62335 19.75 6C19.75 3.37665 17.6234 1.25 15 1.25ZM17 13.25C16.5858 13.25 16.25 13.5858 16.25 14C16.25 14.4142 16.5858 14.75 17 14.75H18.2C20.4368 14.75 22.25 16.5632 22.25 18.8C22.25 20.1531 21.1531 21.25 19.8 21.25H17C16.5858 21.25 16.25 21.5858 16.25 22C16.25 22.4142 16.5858 22.75 17 22.75H19.8C21.9815 22.75 23.75 20.9815 23.75 18.8C23.75 15.7348 21.2652 13.25 18.2 13.25H17ZM0.25 18.95C0.25 15.802 2.80198 13.25 5.95 13.25H10.05C13.198 13.25 15.75 15.802 15.75 18.95C15.75 21.0487 14.0487 22.75 11.95 22.75H4.05C1.95132 22.75 0.25 21.0487 0.25 18.95Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 1.25C5.37665 1.25 3.25 3.37665 3.25 6C3.25 8.62335 5.37665 10.75 8 10.75C10.6234 10.75 12.75 8.62335 12.75 6C12.75 3.37665 10.6234 1.25 8 1.25ZM0.25 18.95C0.25 15.802 2.80198 13.25 5.95 13.25H10.05C13.198 13.25 15.75 15.802 15.75 18.95C15.75 21.0487 14.0487 22.75 11.95 22.75H4.05C1.95132 22.75 0.25 21.0487 0.25 18.95ZM15 1.25C14.5858 1.25 14.25 1.58579 14.25 2C14.25 2.41421 14.5858 2.75 15 2.75C16.7949 2.75 18.25 4.20507 18.25 6C18.25 7.79493 16.7949 9.25 15 9.25C14.5858 9.25 14.25 9.58579 14.25 10C14.25 10.4142 14.5858 10.75 15 10.75C17.6234 10.75 19.75 8.62335 19.75 6C19.75 3.37665 17.6234 1.25 15 1.25ZM17 13.25C16.5858 13.25 16.25 13.5858 16.25 14C16.25 14.4142 16.5858 14.75 17 14.75H18.2C20.4368 14.75 22.25 16.5632 22.25 18.8C22.25 20.1531 21.1531 21.25 19.8 21.25H17C16.5858 21.25 16.25 21.5858 16.25 22C16.25 22.4142 16.5858 22.75 17 22.75H19.8C21.9815 22.75 23.75 20.9815 23.75 18.8C23.75 15.7348 21.2652 13.25 18.2 13.25H17Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.5 22H4.2C2.43269 22 1 20.5673 1 18.8V18.8C1 16.149 3.14903 14 5.8 14H10.2C12.851 14 15 16.149 15 18.8V18.8C15 20.5673 13.5673 22 11.8 22H10.5M17 22H19.8C21.5673 22 23 20.5673 23 18.8V18.8C23 16.149 20.851 14 18.2 14H17M15 10C17.2091 10 19 8.20914 19 6C19 3.79086 17.2091 2 15 2M12 6C12 8.20914 10.2091 10 8 10C5.79086 10 4 8.20914 4 6C4 3.79086 5.79086 2 8 2C10.2091 2 12 3.79086 12 6Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 10C17.2091 10 19 8.20914 19 6C19 3.79086 17.2091 2 15 2M17 22H19.8C21.5673 22 23 20.5673 23 18.8V18.8C23 16.149 20.851 14 18.2 14H17M12 6C12 8.20914 10.2091 10 8 10C5.79086 10 4 8.20914 4 6C4 3.79086 5.79086 2 8 2C10.2091 2 12 3.79086 12 6ZM4.2 22H11.8C13.5673 22 15 20.5673 15 18.8V18.8C15 16.149 12.851 14 10.2 14H5.8C3.14903 14 1 16.149 1 18.8V18.8C1 20.5673 2.43269 22 4.2 22Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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