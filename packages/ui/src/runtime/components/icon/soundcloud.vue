<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M5.5 7.5V18M2 11.5V18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.8811 10.9211C17.5871 7.60254 14.7973 5 11.3953 5C10.5629 5 9.75091 5.16377 9.03436 5.44053L9 18H19.3091C21.348 18 23 16.3509 23 14.3184C23 11.714 20.235 9.9371 17.8811 10.9211ZM17.8811 10.9211C17.9207 11.2807 17.9 12.2 17.5 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.12" fill-rule="evenodd" clip-rule="evenodd" d="M19.3091 18C21.348 18 23 16.3509 23 14.3184C23 11.714 20.235 9.9371 17.8811 10.9211C17.5871 7.60254 14.7973 5 11.3953 5C10.5629 5 9.75091 5.16377 9.03436 5.44053L9 18H19.3091Z" fill="currentColor"/>
<path d="M17.8811 10.9211C17.5871 7.60254 14.7973 5 11.3953 5C10.5629 5 9.75091 5.16377 9.03436 5.44053L9 18H19.3091C21.348 18 23 16.3509 23 14.3184C23 11.714 20.235 9.9371 17.8811 10.9211ZM17.8811 10.9211C17.9207 11.2807 17.9 12.2 17.5 13M5.5 7.5V18M2 11.5V18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" d="M11.3953 4.25C10.4666 4.25 9.56314 4.43229 8.76414 4.7409C8.47571 4.8523 8.28521 5.12928 8.28437 5.43848L8.25 17.9979C8.24946 18.1972 8.32823 18.3885 8.46894 18.5296C8.60966 18.6707 8.80073 18.75 9 18.75H19.3091C21.7606 18.75 23.75 16.7667 23.75 14.3184C23.75 11.4959 21.0868 9.49826 18.4929 9.96312C17.7863 6.69645 14.8781 4.25 11.3953 4.25Z" fill="currentColor"/>
<path d="M5.5 7.5V18M2 11.5V18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.76414 4.7409C9.56314 4.43229 10.4666 4.25 11.3953 4.25C14.8781 4.25 17.7863 6.69645 18.4929 9.96312C21.0868 9.49826 23.75 11.4959 23.75 14.3184C23.75 16.7667 21.7606 18.75 19.3091 18.75H9C8.80073 18.75 8.60966 18.6707 8.46895 18.5296C8.32823 18.3885 8.24946 18.1972 8.25 17.9979L8.28437 5.43848C8.28521 5.12928 8.47571 4.8523 8.76414 4.7409ZM6.25 7.5C6.25 7.08579 5.91421 6.75 5.5 6.75C5.08579 6.75 4.75 7.08579 4.75 7.5V18C4.75 18.4142 5.08579 18.75 5.5 18.75C5.91421 18.75 6.25 18.4142 6.25 18V7.5ZM2.75 11.5C2.75 11.0858 2.41421 10.75 2 10.75C1.58579 10.75 1.25 11.0858 1.25 11.5V18C1.25 18.4142 1.58579 18.75 2 18.75C2.41421 18.75 2.75 18.4142 2.75 18V11.5Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.8811 10.9211C20.235 9.9371 23 11.714 23 14.3184C23 16.3509 21.348 18 19.3091 18H9V15.5M17.8811 10.9211C17.9207 11.2807 17.9 12.2 17.5 13M17.8811 10.9211C17.8213 10.2458 17.6581 9.60012 17.4074 9M5.5 7.5V18M2 11.5V18M9 11.5L9.03436 5.44053C9.75091 5.16377 10.5629 5 11.3953 5C12.7287 5 13.9681 5.39983 15 6.08588C15.1727 6.20066 15.3395 6.32346 15.5 6.45374" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.8811 10.9211C17.5871 7.60254 14.7973 5 11.3953 5C10.5629 5 9.75091 5.16377 9.03436 5.44053L9 18H19.3091C21.348 18 23 16.3509 23 14.3184C23 11.714 20.235 9.9371 17.8811 10.9211ZM17.8811 10.9211C17.9207 11.2807 17.9 12.2 17.5 13M5.5 7.5V18M2 11.5V18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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