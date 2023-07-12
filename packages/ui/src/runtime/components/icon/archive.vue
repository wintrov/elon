<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M9 10H15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 6V15.6C4 17.8402 4 18.9603 4.43597 19.816C4.81947 20.5686 5.43139 21.1805 6.18404 21.564C7.03968 22 8.15979 22 10.4 22H13.6C15.8402 22 16.9603 22 17.816 21.564C18.5686 21.1805 19.1805 20.5686 19.564 19.816C20 18.9603 20 17.8402 20 15.6V6M4 6H20C21.1046 6 22 5.10457 22 4V4C22 2.89543 21.1046 2 20 2H4C2.89543 2 2 2.89543 2 4V4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.12" d="M4 6H20V15.6C20 17.8402 20 18.9603 19.564 19.816C19.1805 20.5686 18.5686 21.1805 17.816 21.564C16.9603 22 15.8402 22 13.6 22H10.4C8.15979 22 7.03968 22 6.18404 21.564C5.43139 21.1805 4.81947 20.5686 4.43597 19.816C4 18.9603 4 17.8402 4 15.6V6Z" fill="currentColor"/>
<path d="M20 6V15.6C20 17.8402 20 18.9603 19.564 19.816C19.1805 20.5686 18.5686 21.1805 17.816 21.564C16.9603 22 15.8402 22 13.6 22H10.4C8.15979 22 7.03969 22 6.18404 21.564C5.43139 21.1805 4.81947 20.5686 4.43597 19.816C4 18.9603 4 17.8402 4 15.6V6M9 10H15M4 6H20C21.1046 6 22 5.10457 22 4V4C22 2.89543 21.1046 2 20 2H4C2.89543 2 2 2.89543 2 4V4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" fill-rule="evenodd" clip-rule="evenodd" d="M4.85 7.5C4.28995 7.5 4.00992 7.5 3.79601 7.60899C3.60785 7.70487 3.45487 7.85785 3.35899 8.04601C3.25 8.25992 3.25 8.53995 3.25 9.1V16.35C3.25 18.5902 3.25 19.7103 3.68597 20.566C4.06947 21.3186 4.68139 21.9305 5.43404 22.314C6.28968 22.75 7.40979 22.75 9.65 22.75H14.35C16.5902 22.75 17.7103 22.75 18.566 22.314C19.3186 21.9305 19.9305 21.3186 20.314 20.566C20.75 19.7103 20.75 18.5902 20.75 16.35V9.1C20.75 8.53995 20.75 8.25992 20.641 8.04601C20.5451 7.85785 20.3922 7.70487 20.204 7.60899C19.9901 7.5 19.7101 7.5 19.15 7.5H4.85Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 3.625C1.25 2.31332 2.31332 1.25 3.625 1.25H20.375C21.6867 1.25 22.75 2.31332 22.75 3.625C22.75 4.93668 21.6867 6 20.375 6H3.625C2.31332 6 1.25 4.93668 1.25 3.625ZM9 12.25C8.58579 12.25 8.25 12.5858 8.25 13C8.25 13.4142 8.58579 13.75 9 13.75H15C15.4142 13.75 15.75 13.4142 15.75 13C15.75 12.5858 15.4142 12.25 15 12.25H9Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.625 1.25C2.31332 1.25 1.25 2.31332 1.25 3.625V3.625C1.25 4.93668 2.31332 6 3.625 6H20.375C21.6867 6 22.75 4.93668 22.75 3.625V3.625C22.75 2.31332 21.6867 1.25 20.375 1.25H3.625Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.85 7.5C4.28995 7.5 4.00992 7.5 3.79601 7.60899C3.60785 7.70487 3.45487 7.85785 3.35899 8.04601C3.25 8.25992 3.25 8.53995 3.25 9.1V16.35C3.25 18.5902 3.25 19.7103 3.68597 20.566C4.06947 21.3186 4.68139 21.9305 5.43404 22.314C6.28969 22.75 7.40979 22.75 9.65 22.75H14.35C16.5902 22.75 17.7103 22.75 18.566 22.314C19.3186 21.9305 19.9305 21.3186 20.314 20.566C20.75 19.7103 20.75 18.5902 20.75 16.35V9.1C20.75 8.53995 20.75 8.25992 20.641 8.04601C20.5451 7.85785 20.3922 7.70487 20.204 7.60899C19.9901 7.5 19.7101 7.5 19.15 7.5H4.85ZM16 13C16 13.4142 15.6642 13.75 15.25 13.75H8.75C8.33579 13.75 8 13.4142 8 13V13C8 12.5858 8.33579 12.25 8.75 12.25H15.25C15.6642 12.25 16 12.5858 16 13V13Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5 6H12H4C2.89543 6 2 5.10457 2 4V4C2 2.89543 2.89543 2 4 2H20C21.1046 2 22 2.89543 22 4V4C22 5.10457 21.1046 6 20 6H17.5H17M20 6V15.6C20 17.8402 20 18.9603 19.564 19.816C19.1805 20.5686 18.5686 21.1805 17.816 21.564C16.9603 22 15.8402 22 13.6 22H10.4C8.15979 22 7.03968 22 6.18404 21.564C5.43139 21.1805 4.81947 20.5686 4.43597 19.816C4 18.9603 4 17.8402 4 15.6V6M9 10H15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6V15.6C20 17.8402 20 18.9603 19.564 19.816C19.1805 20.5686 18.5686 21.1805 17.816 21.564C16.9603 22 15.8402 22 13.6 22H10.4C8.15979 22 7.03969 22 6.18404 21.564C5.43139 21.1805 4.81947 20.5686 4.43597 19.816C4 18.9603 4 17.8402 4 15.6V6M9 10H15M4 6H20C21.1046 6 22 5.10457 22 4V4C22 2.89543 21.1046 2 20 2H4C2.89543 2 2 2.89543 2 4V4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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