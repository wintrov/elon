<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M12 2L12 17M12 17L16 13M12 17L8 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="2" y="8" width="20" height="14" rx="7" stroke="currentColor" stroke-width="1.5"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.12" x="2" y="8" width="20" height="14" rx="7" fill="currentColor"/>
<path d="M12 2V17M12 17L16 13M12 17L8 13M9 22H15C18.866 22 22 18.866 22 15V15C22 11.134 18.866 8 15 8H9C5.13401 8 2 11.134 2 15V15C2 18.866 5.13401 22 9 22Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" d="M9 7.25C4.71979 7.25 1.25 10.7198 1.25 15V15C1.25 19.2802 4.71979 22.75 9 22.75L15 22.75C19.2802 22.75 22.75 19.2802 22.75 15V15C22.75 10.7198 19.2802 7.25 15 7.25L9 7.25Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V15.1893L15.4697 12.4697C15.7626 12.1768 16.2374 12.1768 16.5303 12.4697C16.8232 12.7626 16.8232 13.2374 16.5303 13.5303L12.5303 17.5303C12.3897 17.671 12.1989 17.75 12 17.75C11.8011 17.75 11.6103 17.671 11.4697 17.5303L7.46967 13.5303C7.17678 13.2374 7.17678 12.7626 7.46967 12.4697C7.76256 12.1768 8.23744 12.1768 8.53033 12.4697L11.25 15.1893L11.25 2C11.25 1.58579 11.5858 1.25 12 1.25Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.75 2C12.75 1.58579 12.4142 1.25 12 1.25C11.5858 1.25 11.25 1.58579 11.25 2V7.25H9C4.71979 7.25 1.25 10.7198 1.25 15C1.25 19.2802 4.71979 22.75 9 22.75H15C19.2802 22.75 22.75 19.2802 22.75 15C22.75 10.7198 19.2802 7.25 15 7.25H12.75V2ZM12.75 7.25H11.25L11.25 15.1893L8.53034 12.4697C8.23745 12.1768 7.76257 12.1768 7.46968 12.4697C7.17679 12.7626 7.17679 13.2374 7.46968 13.5303L11.4697 17.5303C11.6103 17.671 11.8011 17.75 12 17.75C12.1989 17.75 12.3897 17.671 12.5303 17.5303L16.5303 13.5303C16.8232 13.2374 16.8232 12.7626 16.5303 12.4697C16.2374 12.1768 15.7626 12.1768 15.4697 12.4697L12.75 15.1893V7.25Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5 22H15C18.866 22 22 18.866 22 15C22 11.134 18.866 8 15 8H9C5.13401 8 2 11.134 2 15C2 18.866 5.13401 22 9 22H9.5M12 2V17M12 17L16 13M12 17L8 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2V17M12 17L16 13M12 17L8 13M9 22H15C18.866 22 22 18.866 22 15V15C22 11.134 18.866 8 15 8H9C5.13401 8 2 11.134 2 15V15C2 18.866 5.13401 22 9 22Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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