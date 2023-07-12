<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M19 19C19 20.1046 18.1046 21 17 21C15.8954 21 15 20.1046 15 19C15 17.8954 15.8954 17 17 17C18.1046 17 19 17.8954 19 19ZM19 19V11L22 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 4H20M2 9H16M2 14H12M2 19H9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle opacity="0.12" cx="17" cy="19" r="2" fill="currentColor"/>
<path d="M2 4H20M2 9H16M2 14H12M2 19H9M19 19C19 20.1046 18.1046 21 17 21C15.8954 21 15 20.1046 15 19C15 17.8954 15.8954 17 17 17C18.1046 17 19 17.8954 19 19ZM19 19V11L22 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" fill-rule="evenodd" clip-rule="evenodd" d="M1.25 4C1.25 3.58579 1.58579 3.25 2 3.25H20C20.4142 3.25 20.75 3.58579 20.75 4C20.75 4.41421 20.4142 4.75 20 4.75H2C1.58579 4.75 1.25 4.41421 1.25 4ZM1.25 9C1.25 8.58579 1.58579 8.25 2 8.25H16C16.4142 8.25 16.75 8.58579 16.75 9C16.75 9.41421 16.4142 9.75 16 9.75H2C1.58579 9.75 1.25 9.41421 1.25 9ZM1.25 14C1.25 13.5858 1.58579 13.25 2 13.25H12C12.4142 13.25 12.75 13.5858 12.75 14C12.75 14.4142 12.4142 14.75 12 14.75H2C1.58579 14.75 1.25 14.4142 1.25 14ZM1.25 19C1.25 18.5858 1.58579 18.25 2 18.25H9C9.41421 18.25 9.75 18.5858 9.75 19C9.75 19.4142 9.41421 19.75 9 19.75H2C1.58579 19.75 1.25 19.4142 1.25 19Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.416 10.376C19.1859 10.2225 18.89 10.2082 18.6461 10.3387C18.4022 10.4693 18.25 10.7234 18.25 11V16.5499C17.875 16.3581 17.4501 16.25 17 16.25C15.4812 16.25 14.25 17.4812 14.25 19C14.25 20.5188 15.4812 21.75 17 21.75C18.5188 21.75 19.75 20.5188 19.75 19V12.4014L21.584 13.624C21.9286 13.8538 22.3943 13.7607 22.624 13.416C22.8538 13.0714 22.7607 12.6057 22.416 12.376L19.416 10.376Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 3.25C1.58579 3.25 1.25 3.58579 1.25 4C1.25 4.41421 1.58579 4.75 2 4.75H20C20.4142 4.75 20.75 4.41421 20.75 4C20.75 3.58579 20.4142 3.25 20 3.25H2ZM2 8.25C1.58579 8.25 1.25 8.58579 1.25 9C1.25 9.41421 1.58579 9.75 2 9.75H16C16.4142 9.75 16.75 9.41421 16.75 9C16.75 8.58579 16.4142 8.25 16 8.25H2ZM2 13.25C1.58579 13.25 1.25 13.5858 1.25 14C1.25 14.4142 1.58579 14.75 2 14.75H12C12.4142 14.75 12.75 14.4142 12.75 14C12.75 13.5858 12.4142 13.25 12 13.25H2ZM2 18.25C1.58579 18.25 1.25 18.5858 1.25 19C1.25 19.4142 1.58579 19.75 2 19.75H9C9.41421 19.75 9.75 19.4142 9.75 19C9.75 18.5858 9.41421 18.25 9 18.25H2ZM18.6461 10.3387C18.89 10.2082 19.1859 10.2225 19.416 10.376L22.416 12.376C22.7607 12.6057 22.8538 13.0714 22.624 13.416C22.3943 13.7607 21.9286 13.8538 21.584 13.624L19.75 12.4014V19C19.75 20.5188 18.5188 21.75 17 21.75C15.4812 21.75 14.25 20.5188 14.25 19C14.25 17.4812 15.4812 16.25 17 16.25C17.4501 16.25 17.875 16.3581 18.25 16.5499V11C18.25 10.7234 18.4022 10.4693 18.6461 10.3387Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 19C19 20.1046 18.1046 21 17 21C15.8954 21 15 20.1046 15 19C15 17.8954 15.8954 17 17 17C18.1046 17 19 17.8954 19 19ZM19 19V11L22 13M2 9H16M2 4H13M16 4H20M7 14H12M2 14H4M2 19H9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 19C19 20.1046 18.1046 21 17 21C15.8954 21 15 20.1046 15 19C15 17.8954 15.8954 17 17 17C18.1046 17 19 17.8954 19 19ZM19 19V11L22 13M2 4H20M2 9H16M2 14H12M2 19H9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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