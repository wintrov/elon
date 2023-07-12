<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M19 19L5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle opacity="0.12" cx="12" cy="12" r="10" fill="currentColor"/>
<path d="M19 19L5 5M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" d="M5.09941 6.16014C4.68816 5.74888 4.48253 5.54325 4.21421 5.47598C4.00015 5.42232 3.71088 5.4555 3.51454 5.55624C3.26842 5.68252 3.13502 5.89672 2.86823 6.32512C1.84252 7.97214 1.25 9.91689 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C14.0831 22.75 16.0279 22.1575 17.6749 21.1318C18.1033 20.865 18.3175 20.7316 18.4438 20.4855C18.5445 20.2891 18.5777 19.9999 18.524 19.7858C18.4568 19.5175 18.2511 19.3119 17.8399 18.9006L5.09941 6.16014Z" fill="currentColor"/>
<path d="M6.16001 5.09944C5.74876 4.68818 5.54313 4.48256 5.47586 4.21423C5.4222 4.00018 5.45538 3.71091 5.55611 3.51457C5.68239 3.26845 5.89659 3.13505 6.32499 2.86825C7.97201 1.84253 9.91678 1.25 11.9999 1.25C17.937 1.25 22.7499 6.06294 22.7499 12C22.7499 14.0832 22.1574 16.0279 21.1317 17.675C20.8649 18.1034 20.7315 18.3176 20.4854 18.4438C20.289 18.5446 19.9998 18.5777 19.7857 18.5241C19.5174 18.4568 19.3118 18.2512 18.9005 17.8399L6.16001 5.09944Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.16013 5.09944C5.74888 4.68818 5.54325 4.48256 5.47598 4.21423C5.42232 4.00018 5.4555 3.71091 5.55623 3.51457C5.68251 3.26845 5.89671 3.13505 6.32511 2.86825C7.97213 1.84253 9.9169 1.25 12.0001 1.25C17.9371 1.25 22.7501 6.06294 22.7501 12C22.7501 14.0832 22.1575 16.0279 21.1318 17.675C20.865 18.1034 20.7316 18.3176 20.4855 18.4438C20.2891 18.5446 19.9999 18.5777 19.7858 18.5241C19.5175 18.4568 19.3119 18.2512 18.9006 17.8399L6.16013 5.09944Z" fill="currentColor"/>
<path d="M5.09948 6.16011C4.68822 5.74885 4.48259 5.54322 4.21427 5.47595C4.00022 5.42229 3.71095 5.45547 3.5146 5.55621C3.26848 5.68249 3.13508 5.89669 2.86829 6.32509C1.84258 7.97211 1.25006 9.91686 1.25006 12C1.25006 17.9371 6.063 22.75 12.0001 22.75C14.0832 22.75 16.028 22.1575 17.675 21.1318C18.1034 20.865 18.3176 20.7316 18.4439 20.4855C18.5446 20.2891 18.5778 19.9998 18.5241 19.7858C18.4568 19.5175 18.2512 19.3118 17.84 18.9006L5.09948 6.16011Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.1679 16C21.7031 14.7751 22 13.4222 22 12C22 6.47715 17.5229 2 12 2C9.23861 2 6.73861 3.11929 4.92896 4.92893L5.00003 5L19 19L19.0711 19.0711C17.2615 20.8807 14.7615 22 12 22C6.47718 22 2.00003 17.5228 2.00003 12C2.00003 10.5778 2.29693 9.22492 2.83212 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 19L5 5M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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