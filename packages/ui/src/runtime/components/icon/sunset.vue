<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M6 22H18M12 9L15 6M12 9L9 6M12 9V2M3.92896 9.92871L6.05028 12.05M17.9498 12.0498L20.0711 9.92848" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 18C7 15.2386 9.23858 13 12 13C14.7614 13 17 15.2386 17 18M22 18L2 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.12" d="M12 13C9.23858 13 7 15.2386 7 18H17C17 15.2386 14.7614 13 12 13Z" fill="currentColor"/>
<path d="M7 18C7 15.2386 9.23858 13 12 13C14.7614 13 17 15.2386 17 18M6 22H18M12 9L15 6M12 9L9 6M12 9V2M22 18L2 18M3.92896 9.92871L6.05028 12.05M17.9498 12.0498L20.0711 9.92848" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" fill-rule="evenodd" clip-rule="evenodd" d="M7 18.75L7.00085 18.75L16.9985 18.75L17 18.75L17.0015 18.75L22 18.75C22.4142 18.75 22.75 18.4142 22.75 18C22.75 17.5858 22.4142 17.25 22 17.25L17.7015 17.25C17.334 14.4287 14.9214 12.25 12 12.25C9.07855 12.25 6.66598 14.4287 6.29847 17.25L2 17.25C1.58579 17.25 1.25 17.5858 1.25 18C1.25 18.4142 1.58579 18.75 2 18.75L6.99915 18.75L7 18.75Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V7.18934L14.4697 5.46967C14.7626 5.17678 15.2374 5.17678 15.5303 5.46967C15.8232 5.76256 15.8232 6.23744 15.5303 6.53033L12.5303 9.53033C12.2374 9.82322 11.7626 9.82322 11.4697 9.53033L8.46967 6.53033C8.17678 6.23744 8.17678 5.76256 8.46967 5.46967C8.76256 5.17678 9.23744 5.17678 9.53033 5.46967L11.25 7.18934V2C11.25 1.58579 11.5858 1.25 12 1.25ZM20.6014 9.39815C20.8943 9.69105 20.8943 10.1659 20.6014 10.4588L18.4801 12.5801C18.1872 12.873 17.7123 12.873 17.4194 12.5801C17.1265 12.2872 17.1265 11.8124 17.4194 11.5195L19.5408 9.39815C19.8337 9.10526 20.3085 9.10526 20.6014 9.39815ZM3.39863 9.39838C3.69152 9.10549 4.16639 9.10549 4.45929 9.39838L6.58061 11.5197C6.8735 11.8126 6.8735 12.2875 6.58061 12.5804C6.28771 12.8733 5.81284 12.8733 5.51995 12.5804L3.39862 10.459C3.10573 10.1661 3.10573 9.69127 3.39863 9.39838ZM5.25 22C5.25 21.5858 5.58579 21.25 6 21.25H18C18.4142 21.25 18.75 21.5858 18.75 22C18.75 22.4142 18.4142 22.75 18 22.75H6C5.58579 22.75 5.25 22.4142 5.25 22Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.75 2C12.75 1.58579 12.4142 1.25 12 1.25C11.5858 1.25 11.25 1.58579 11.25 2V7.18934L9.53033 5.46967C9.23744 5.17678 8.76256 5.17678 8.46967 5.46967C8.17678 5.76256 8.17678 6.23744 8.46967 6.53033L11.4697 9.53033C11.7626 9.82322 12.2374 9.82322 12.5303 9.53033L15.5303 6.53033C15.8232 6.23744 15.8232 5.76256 15.5303 5.46967C15.2374 5.17678 14.7626 5.17678 14.4697 5.46967L12.75 7.18934V2ZM20.6014 10.4588C20.8943 10.1659 20.8943 9.69105 20.6014 9.39815C20.3085 9.10526 19.8337 9.10526 19.5408 9.39815L17.4194 11.5195C17.1265 11.8124 17.1265 12.2872 17.4194 12.5801C17.7123 12.873 18.1872 12.873 18.4801 12.5801L20.6014 10.4588ZM4.45929 9.39838C4.16639 9.10549 3.69152 9.10549 3.39862 9.39838C3.10573 9.69127 3.10573 10.1661 3.39862 10.459L5.51995 12.5804C5.81284 12.8733 6.28771 12.8733 6.58061 12.5804C6.8735 12.2875 6.8735 11.8126 6.58061 11.5197L4.45929 9.39838ZM2 17.25H6.29847C6.66598 14.4287 9.07855 12.25 12 12.25C14.9214 12.25 17.334 14.4287 17.7015 17.25H22C22.4142 17.25 22.75 17.5858 22.75 18C22.75 18.4142 22.4142 18.75 22 18.75H17H7H2C1.58579 18.75 1.25 18.4142 1.25 18C1.25 17.5858 1.58579 17.25 2 17.25ZM6 21.25C5.58579 21.25 5.25 21.5858 5.25 22C5.25 22.4142 5.58579 22.75 6 22.75H18C18.4142 22.75 18.75 22.4142 18.75 22C18.75 21.5858 18.4142 21.25 18 21.25H6Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 18C7 15.2386 9.23858 13 12 13C13.6358 13 15.0882 13.7856 16.0004 15M6 22H18M12 9L15 6M12 9L9 6M12 9V2M22 18L2 18M3.92896 9.92871L6.05028 12.05M17.9498 12.0498L20.0711 9.92848" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 18C7 15.2386 9.23858 13 12 13C14.7614 13 17 15.2386 17 18M6 22H18M12 9L15 6M12 9L9 6M12 9V2M22 18L2 18M3.92896 9.92871L6.05028 12.05M17.9498 12.0498L20.0711 9.92848" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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