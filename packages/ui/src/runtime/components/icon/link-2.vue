<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M11.7107 5.25159L12.4214 4.51843C14.3838 2.49386 17.5657 2.49386 19.5281 4.51843C21.4906 6.543 21.4906 9.82549 19.5281 11.8501L17.8334 13.5984C16.0219 15.4672 13.0849 15.4672 11.2733 13.5984L11 13.3164" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.2893 18.7484L11.5786 19.4816C9.61616 21.5061 6.43435 21.5061 4.47186 19.4816C2.50938 17.457 2.50938 14.1745 4.47186 12.1499L6.16656 10.4016C7.97808 8.53279 10.9151 8.53279 12.7267 10.4016L13 10.6836" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.2893 18.7484L11.5786 19.4816C9.61616 21.5061 6.43435 21.5061 4.47186 19.4816C2.50938 17.457 2.50938 14.1745 4.47186 12.1499L6.16656 10.4016C7.97808 8.53279 10.9151 8.53279 12.7267 10.4016L13 10.6836M11.7107 5.25159L12.4214 4.51843C14.3838 2.49386 17.5657 2.49386 19.5281 4.51843C21.4906 6.543 21.4906 9.82549 19.5281 11.8501L17.8334 13.5984C16.0219 15.4672 13.0849 15.4672 11.2733 13.5984L11 13.3164" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.2893 18.7484L11.5786 19.4816C9.61616 21.5061 6.43435 21.5061 4.47186 19.4816C2.50938 17.457 2.50938 14.1745 4.47186 12.1499L6.16656 10.4016C7.97808 8.53279 10.9151 8.53279 12.7267 10.4016L13 10.6836M11.7107 5.25159L12.4214 4.51843C14.3838 2.49386 17.5657 2.49386 19.5281 4.51843C21.4906 6.543 21.4906 9.82549 19.5281 11.8501L17.8334 13.5984C16.0219 15.4672 13.0849 15.4672 11.2733 13.5984L11 13.3164" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.2893 18.7484L11.5786 19.4816C9.61616 21.5061 6.43435 21.5061 4.47186 19.4816C2.50938 17.457 2.50938 14.1745 4.47186 12.1499L6.16656 10.4016C7.97808 8.53279 10.9151 8.53279 12.7267 10.4016L13 10.6836M11.7107 5.25159L12.4214 4.51843C14.3838 2.49386 17.5657 2.49386 19.5281 4.51843C21.4906 6.543 21.4906 9.82549 19.5281 11.8501L17.8334 13.5984C16.0219 15.4672 13.0849 15.4672 11.2733 13.5984L11 13.3164" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.2893 18.7484L11.5786 19.4816C9.61616 21.5061 6.43435 21.5061 4.47186 19.4816C2.50938 17.457 2.50938 14.1745 4.47186 12.1499L6.16656 10.4016C7.97808 8.53279 10.9151 8.53279 12.7267 10.4016L13 10.6836M11.7107 5.25159L12.4214 4.51843C14.3838 2.49386 17.5657 2.49386 19.5281 4.51843M11 13.3164L11.2733 13.5984C13.0849 15.4672 16.0219 15.4672 17.8334 13.5984L19.5281 11.8501C20.3076 11.0459 20.7775 10.0434 20.9378 9C20.9886 8.6691 21.0083 8.33409 20.9968 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.2893 18.7484L11.5786 19.4816C9.61616 21.5061 6.43435 21.5061 4.47186 19.4816C2.50938 17.457 2.50938 14.1745 4.47186 12.1499L6.16656 10.4016C7.97808 8.53279 10.9151 8.53279 12.7267 10.4016L13 10.6836M11.7107 5.25159L12.4214 4.51843C14.3838 2.49386 17.5657 2.49386 19.5281 4.51843C21.4906 6.543 21.4906 9.82549 19.5281 11.8501L17.8334 13.5984C16.0219 15.4672 13.0849 15.4672 11.2733 13.5984L11 13.3164" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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