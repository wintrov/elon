<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle opacity="0.4" cx="12" cy="9" r="7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 19C17.5228 19 22 14.5228 22 9C22 6.27455 20.9097 3.80375 19.1414 2M12 19C9.27455 19 6.80375 17.9097 5 16.1414M12 19V22M12 22H10M12 22H14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle opacity="0.12" cx="12" cy="9" r="7" fill="currentColor"/>
<path d="M12 19C17.5228 19 22 14.5228 22 9C22 6.27455 20.9097 3.80375 19.1414 2M12 19C9.27455 19 6.80375 17.9097 5 16.1414M12 19V22M12 22H10M12 22H14M19 9C19 12.866 15.866 16 12 16C8.13401 16 5 12.866 5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" d="M12 1.25C7.71979 1.25 4.25 4.71979 4.25 9C4.25 13.2802 7.71979 16.75 12 16.75C16.2802 16.75 19.75 13.2802 19.75 9C19.75 4.71979 16.2802 1.25 12 1.25Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.6164 1.46443C18.9122 1.17446 19.387 1.17918 19.677 1.47497C21.5771 3.41323 22.75 6.0704 22.75 9C22.75 14.6849 18.3372 19.3392 12.75 19.7242V21.25H14C14.4142 21.25 14.75 21.5858 14.75 22C14.75 22.4142 14.4142 22.75 14 22.75H12H10C9.58579 22.75 9.25 22.4142 9.25 22C9.25 21.5858 9.58579 21.25 10 21.25H11.25V19.7242C8.61838 19.5427 6.24643 18.4136 4.47497 16.677C4.17918 16.387 4.17446 15.9122 4.46443 15.6164C4.75439 15.3206 5.22924 15.3159 5.52503 15.6059C7.19427 17.2422 9.4787 18.25 12 18.25C17.1086 18.25 21.25 14.1086 21.25 9C21.25 6.4787 20.2422 4.19427 18.6059 2.52503C18.3159 2.22924 18.3206 1.75439 18.6164 1.46443Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.677 1.47497C19.387 1.17918 18.9122 1.17446 18.6164 1.46443C18.3206 1.75439 18.3159 2.22924 18.6059 2.52503C20.2422 4.19427 21.25 6.4787 21.25 9C21.25 14.1086 17.1086 18.25 12 18.25C9.4787 18.25 7.19427 17.2422 5.52503 15.6059C5.22924 15.3159 4.75439 15.3206 4.46443 15.6164C4.17446 15.9122 4.17918 16.387 4.47497 16.677C6.24643 18.4136 8.61838 19.5427 11.25 19.7242V21.25H10C9.58579 21.25 9.25 21.5858 9.25 22C9.25 22.4142 9.58579 22.75 10 22.75H12H14C14.4142 22.75 14.75 22.4142 14.75 22C14.75 21.5858 14.4142 21.25 14 21.25H12.75V19.7242C18.3372 19.3392 22.75 14.6849 22.75 9C22.75 6.0704 21.5771 3.41323 19.677 1.47497ZM4.25 9C4.25 4.71979 7.71979 1.25 12 1.25C16.2802 1.25 19.75 4.71979 19.75 9C19.75 13.2802 16.2802 16.75 12 16.75C7.71979 16.75 4.25 13.2802 4.25 9Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 19C17.5228 19 22 14.5228 22 9C22 6.27455 20.9097 3.80375 19.1414 2M12 19C9.27455 19 6.80375 17.9097 5 16.1414M12 19V22M12 22H10M12 22H14M9 2.67363C9.90926 2.24169 10.9264 2 12 2C15.866 2 19 5.13401 19 9C19 12.866 15.866 16 12 16C8.13401 16 5 12.866 5 9C5 7.51275 5.46381 6.13383 6.25469 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 19C17.5228 19 22 14.5228 22 9C22 6.27455 20.9097 3.80375 19.1414 2M12 19C9.27455 19 6.80375 17.9097 5 16.1414M12 19V22M12 22H10M12 22H14M19 9C19 12.866 15.866 16 12 16C8.13401 16 5 12.866 5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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