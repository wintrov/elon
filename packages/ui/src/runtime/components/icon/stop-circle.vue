<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.4" x="9" y="9" width="6" height="6" rx="1.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.12" fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM15 11.4C15 10.5599 15 10.1399 14.8365 9.81901C14.6927 9.53677 14.4632 9.3073 14.181 9.16349C13.8601 9 13.4401 9 12.6 9H11.4C10.5599 9 10.1399 9 9.81901 9.16349C9.53677 9.3073 9.3073 9.53677 9.16349 9.81901C9 10.1399 9 10.5599 9 11.4V12.6C9 13.4401 9 13.8601 9.16349 14.181C9.3073 14.4632 9.53677 14.6927 9.81901 14.8365C10.1399 15 10.5599 15 11.4 15H12.6C13.4401 15 13.8601 15 14.181 14.8365C14.4632 14.6927 14.6927 14.4632 14.8365 14.181C15 13.8601 15 13.4401 15 12.6V11.4Z" fill="currentColor"/>
<path d="M9 11.4C9 10.5599 9 10.1399 9.16349 9.81901C9.3073 9.53677 9.53677 9.3073 9.81901 9.16349C10.1399 9 10.5599 9 11.4 9H12.6C13.4401 9 13.8601 9 14.181 9.16349C14.4632 9.3073 14.6927 9.53677 14.8365 9.81901C15 10.1399 15 10.5599 15 11.4V12.6C15 13.4401 15 13.8601 14.8365 14.181C14.6927 14.4632 14.4632 14.6927 14.181 14.8365C13.8601 15 13.4401 15 12.6 15H11.4C10.5599 15 10.1399 15 9.81901 14.8365C9.53677 14.6927 9.3073 14.4632 9.16349 14.181C9 13.8601 9 13.4401 9 12.6V11.4Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" fill-rule="evenodd" clip-rule="evenodd" d="M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z" fill="currentColor"/>
<path d="M12.8 8H11.2C10.0799 8 9.51984 8 9.09202 8.21799C8.71569 8.40973 8.40973 8.71569 8.21799 9.09202C8 9.51984 8 10.0799 8 11.2V12.8C8 13.9201 8 14.4802 8.21799 14.908C8.40973 15.2843 8.71569 15.5903 9.09202 15.782C9.51984 16 10.0799 16 11.2 16H12.8C13.9201 16 14.4802 16 14.908 15.782C15.2843 15.5903 15.5903 15.2843 15.782 14.908C16 14.4802 16 13.9201 16 12.8V11.2C16 10.0799 16 9.51984 15.782 9.09202C15.5903 8.71569 15.2843 8.40973 14.908 8.21799C14.4802 8 13.9201 8 12.8 8Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM16 11.2C16 10.0799 16 9.51984 15.782 9.09202C15.5903 8.71569 15.2843 8.40973 14.908 8.21799C14.4802 8 13.9201 8 12.8 8H11.2C10.0799 8 9.51984 8 9.09202 8.21799C8.71569 8.40973 8.40973 8.71569 8.21799 9.09202C8 9.51984 8 10.0799 8 11.2V12.8C8 13.9201 8 14.4802 8.21799 14.908C8.40973 15.2843 8.71569 15.5903 9.09202 15.782C9.51984 16 10.0799 16 11.2 16H12.8C13.9201 16 14.4802 16 14.908 15.782C15.2843 15.5903 15.5903 15.2843 15.782 14.908C16 14.4802 16 13.9201 16 12.8V11.2Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5 3.64702C15.9221 2.60596 14.0318 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 10.3814 21.6154 8.85259 20.9327 7.5M11.4 15H12.6C13.4401 15 13.8601 15 14.181 14.8365C14.4632 14.6927 14.6927 14.4632 14.8365 14.181C15 13.8601 15 13.4401 15 12.6V11.4C15 10.5599 15 10.1399 14.8365 9.81901C14.6927 9.53677 14.4632 9.3073 14.181 9.16349C13.8601 9 13.4401 9 12.6 9H11.4C10.5599 9 10.1399 9 9.81901 9.16349C9.53677 9.3073 9.3073 9.53677 9.16349 9.81901C9 10.1399 9 10.5599 9 11.4V12.6C9 13.4401 9 13.8601 9.16349 14.181C9.3073 14.4632 9.53677 14.6927 9.81901 14.8365C10.1399 15 10.5599 15 11.4 15Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 11.4C9 10.5599 9 10.1399 9.16349 9.81901C9.3073 9.53677 9.53677 9.3073 9.81901 9.16349C10.1399 9 10.5599 9 11.4 9H12.6C13.4401 9 13.8601 9 14.181 9.16349C14.4632 9.3073 14.6927 9.53677 14.8365 9.81901C15 10.1399 15 10.5599 15 11.4V12.6C15 13.4401 15 13.8601 14.8365 14.181C14.6927 14.4632 14.4632 14.6927 14.181 14.8365C13.8601 15 13.4401 15 12.6 15H11.4C10.5599 15 10.1399 15 9.81901 14.8365C9.53677 14.6927 9.3073 14.4632 9.16349 14.181C9 13.8601 9 13.4401 9 12.6V11.4Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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