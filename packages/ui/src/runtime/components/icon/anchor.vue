<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M12 8L12 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 13.9999H20C20 18.4182 16.4183 21.9999 12 21.9999C7.58175 21.9999 4.00003 18.4182 4.00003 13.9999H7.00003M12 7.99988C10.3432 7.99988 9.00003 6.65673 9.00003 4.99988C9.00003 3.34302 10.3432 1.99988 12 1.99988C13.6569 1.99988 15 3.34302 15 4.99988C15 6.65673 13.6569 7.99988 12 7.99988Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.12">
<path d="M12 21.9999C16.4183 21.9999 20 18.4182 20 13.9999H4.00003C4.00003 18.4182 7.58175 21.9999 12 21.9999Z" fill="currentColor"/>
<path d="M15 4.99988C15 6.65673 13.6569 7.99988 12 7.99988C10.3432 7.99988 9.00003 6.65673 9.00003 4.99988C9.00003 3.34302 10.3432 1.99988 12 1.99988C13.6569 1.99988 15 3.34302 15 4.99988Z" fill="currentColor"/>
</g>
<path d="M12 7.99988C10.3432 7.99988 9.00003 6.65673 9.00003 4.99988C9.00003 3.34302 10.3432 1.99988 12 1.99988C13.6569 1.99988 15 3.34302 15 4.99988C15 6.65673 13.6569 7.99988 12 7.99988ZM12 7.99988L12 21.9999M12 21.9999C16.4183 21.9999 20 18.4182 20 13.9999H17M12 21.9999C7.58175 21.9999 4.00003 18.4182 4.00003 13.9999H7.00003" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" fill-rule="evenodd" clip-rule="evenodd" d="M11.9999 7.25C12.4141 7.25 12.7499 7.58579 12.7499 8L12.7499 21.2117C16.155 20.8617 18.8616 18.1551 19.2116 14.75L16.9999 14.75C16.5857 14.75 16.2499 14.4142 16.2499 14C16.2499 13.5858 16.5857 13.25 16.9999 13.25L19.9999 13.25C20.4141 13.25 20.7499 13.5858 20.7499 14C20.7499 18.8325 16.8324 22.75 11.9999 22.75C7.16739 22.75 3.24988 18.8325 3.24988 14C3.24988 13.5858 3.58566 13.25 3.99988 13.25L6.99988 13.25C7.41409 13.25 7.74988 13.5858 7.74988 14C7.74988 14.4142 7.41409 14.75 6.99988 14.75L4.7882 14.75C5.13816 18.1551 7.84476 20.8617 11.2499 21.2117L11.2499 8C11.2499 7.58579 11.5857 7.25 11.9999 7.25Z" fill="currentColor"/>
<path d="M12.0001 1.25C9.92899 1.25 8.25006 2.92893 8.25006 5C8.25006 7.07107 9.92899 8.75 12.0001 8.75C14.0711 8.75 15.7501 7.07107 15.7501 5C15.7501 2.92893 14.0711 1.25 12.0001 1.25Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.9999 1.25012C9.92887 1.25012 8.24994 2.92905 8.24994 5.00012C8.24994 6.81434 9.53826 8.32766 11.2499 8.67511L11.2499 21.2118C7.84482 20.8618 5.13822 18.1552 4.78826 14.7501H6.99994C7.41415 14.7501 7.74994 14.4143 7.74994 14.0001C7.74994 13.5859 7.41415 13.2501 6.99994 13.2501L3.99994 13.2501C3.58573 13.2501 3.24994 13.5859 3.24994 14.0001C3.24994 18.8326 7.16745 22.7501 11.9999 22.7501C16.8324 22.7501 20.7499 18.8326 20.7499 14.0001C20.7499 13.5859 20.4142 13.2501 19.9999 13.2501H16.9999C16.5857 13.2501 16.2499 13.5859 16.2499 14.0001C16.2499 14.4143 16.5857 14.7501 16.9999 14.7501H19.2116C18.8617 18.1552 16.1551 20.8618 12.7499 21.2118L12.7499 8.67511C14.4616 8.32766 15.7499 6.81434 15.7499 5.00012C15.7499 2.92905 14.071 1.25012 11.9999 1.25012Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 7.99988C10.3432 7.99988 9.00003 6.65673 9.00003 4.99988C9.00003 3.34302 10.3432 1.99988 12 1.99988M12 7.99988C13.6569 7.99988 15 6.65673 15 4.99988M12 7.99988L12 21.9999M12 21.9999C16.4183 21.9999 20 18.4182 20 13.9999H17M12 21.9999C7.58175 21.9999 4.00003 18.4182 4.00003 13.9999H7.00003" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 7.99994C10.3432 7.99994 9.00003 6.65679 9.00003 4.99994C9.00003 3.34308 10.3432 1.99994 12 1.99994C13.6569 1.99994 15 3.34308 15 4.99994C15 6.65679 13.6569 7.99994 12 7.99994ZM12 7.99994L12 21.9999M12 21.9999C16.4183 21.9999 20 18.4182 20 13.9999H17M12 21.9999C7.58175 21.9999 4.00003 18.4182 4.00003 13.9999H7.00003" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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