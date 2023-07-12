<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M12 8V12L15 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="2" y="2" width="20" height="20" rx="10" stroke="currentColor" stroke-width="1.5"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.12" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"/>
<path d="M12 8V12L15 14M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 7.25C12.4142 7.25 12.75 7.58579 12.75 8V11.5986L15.416 13.376C15.7607 13.6057 15.8538 14.0714 15.624 14.416C15.3943 14.7607 14.9286 14.8538 14.584 14.624L11.584 12.624C11.3753 12.4849 11.25 12.2508 11.25 12V8C11.25 7.58579 11.5858 7.25 12 7.25Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM12.75 8C12.75 7.58579 12.4142 7.25 12 7.25C11.5858 7.25 11.25 7.58579 11.25 8V12C11.25 12.2508 11.3753 12.4849 11.584 12.624L14.584 14.624C14.9286 14.8538 15.3943 14.7607 15.624 14.416C15.8538 14.0714 15.7607 13.6057 15.416 13.376L12.75 11.5986V8Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.46503 14.1492C1.54743 14.5551 1.9433 14.8174 2.34924 14.735C2.75517 14.6526 3.01745 14.2567 2.93505 13.8508L1.46503 14.1492ZM5.39414 18.475C5.10417 18.1792 4.62932 18.1745 4.33353 18.4644C4.03774 18.7544 4.03303 19.2292 4.32299 19.525L5.39414 18.475ZM12.75 8C12.75 7.58579 12.4142 7.25 12 7.25C11.5858 7.25 11.25 7.58579 11.25 8H12.75ZM12 12H11.25C11.25 12.2508 11.3753 12.4849 11.584 12.624L12 12ZM14.584 14.624C14.9286 14.8538 15.3943 14.7607 15.624 14.416C15.8538 14.0714 15.7607 13.6057 15.416 13.376L14.584 14.624ZM21.25 12C21.25 17.1086 17.1086 21.25 12 21.25V22.75C17.9371 22.75 22.75 17.9371 22.75 12H21.25ZM12 2.75C17.1086 2.75 21.25 6.89137 21.25 12H22.75C22.75 6.06294 17.9371 1.25 12 1.25V2.75ZM12 1.25C6.06294 1.25 1.25 6.06294 1.25 12H2.75C2.75 6.89137 6.89137 2.75 12 2.75V1.25ZM2.93505 13.8508C2.81378 13.2534 2.75 12.6345 2.75 12H1.25C1.25 12.7353 1.32394 13.4541 1.46503 14.1492L2.93505 13.8508ZM12 21.25C9.41225 21.25 7.07382 20.1884 5.39414 18.475L4.32299 19.525C6.27316 21.5144 8.99296 22.75 12 22.75V21.25ZM11.25 8V12H12.75V8H11.25ZM11.584 12.624L14.584 14.624L15.416 13.376L12.416 11.376L11.584 12.624Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 8V12L15 14M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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