<template>
	<template v-if="variant === 'duocolor'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M6 14V10M6 14H10M6 14C6 14 9 10 12.5 10C17 10 18 14 18 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'duotone'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.12" x="2" y="2" width="20" height="20" rx="5" fill="currentColor"/>
<path d="M6 14V10M6 14H10M6 14C6 14 9 10 12.5 10C17 10 18 14 18 14M10 22H14C16.8003 22 18.2004 22 19.27 21.455C20.2108 20.9757 20.9757 20.2108 21.455 19.27C22 18.2004 22 16.8003 22 14V10C22 7.19974 22 5.79961 21.455 4.73005C20.9757 3.78924 20.2108 3.02433 19.27 2.54497C18.2004 2 16.8003 2 14 2H10C7.19974 2 5.79961 2 4.73005 2.54497C3.78924 3.02433 3.02433 3.78924 2.54497 4.73005C2 5.79961 2 7.19974 2 10V14C2 16.8003 2 18.2004 2.54497 19.27C3.02433 20.2108 3.78924 20.9757 4.73005 21.455C5.79961 22 7.19974 22 10 22Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'mono'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" d="M9.25 1.25C6.44974 1.25 5.04961 1.25 3.98005 1.79497C3.03924 2.27433 2.27433 3.03924 1.79497 3.98005C1.25 5.04961 1.25 6.44974 1.25 9.25V14.75C1.25 17.5503 1.25 18.9504 1.79497 20.02C2.27433 20.9608 3.03924 21.7257 3.98005 22.205C5.04961 22.75 6.44974 22.75 9.25 22.75H14.75C17.5503 22.75 18.9504 22.75 20.02 22.205C20.9608 21.7257 21.7257 20.9608 22.205 20.02C22.75 18.9504 22.75 17.5503 22.75 14.75V9.25C22.75 6.44974 22.75 5.04961 22.205 3.98005C21.7257 3.03924 20.9608 2.27433 20.02 1.79497C18.9504 1.25 17.5503 1.25 14.75 1.25H9.25Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 9.25C6.41421 9.25 6.75 9.58579 6.75 10V12.0611C6.96359 11.8557 7.19926 11.6412 7.4544 11.4263C8.68312 10.3916 10.4804 9.25 12.5 9.25C15.0103 9.25 16.5879 10.3804 17.5196 11.5271C17.9781 12.0914 18.2763 12.6533 18.4606 13.0744C18.553 13.2857 18.6178 13.464 18.6604 13.5929C18.6817 13.6574 18.6975 13.7097 18.7085 13.7478C18.714 13.7669 18.7182 13.7825 18.7214 13.7943L18.7253 13.8091L18.7267 13.8143L18.7272 13.8164L18.7274 13.8173C18.7275 13.8177 18.7276 13.8181 18 14L18.7276 13.8181C18.8281 14.2199 18.5837 14.6271 18.1819 14.7276C17.781 14.8278 17.3748 14.5849 17.2731 14.1848C17.2731 14.1849 17.2732 14.185 17.2732 14.1851L17.273 14.1842M17.2731 14.1847C17.273 14.1844 17.2728 14.1837 17.2726 14.1828L17.2669 14.1623C17.261 14.1419 17.2509 14.1083 17.2361 14.0634C17.2064 13.9735 17.1579 13.8393 17.0863 13.6756C16.9424 13.3467 16.7094 12.9086 16.3554 12.4729C15.6621 11.6196 14.4897 10.75 12.5 10.75C11.0196 10.75 9.56688 11.6084 8.4206 12.5737C8.14797 12.8033 7.8993 13.0333 7.67906 13.25H10C10.4142 13.25 10.75 13.5858 10.75 14C10.75 14.4142 10.4142 14.75 10 14.75H6C5.58579 14.75 5.25 14.4142 5.25 14V10C5.25 9.58579 5.58579 9.25 6 9.25" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'filled'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.98005 1.79497C5.04961 1.25 6.44974 1.25 9.25 1.25H14.75C17.5503 1.25 18.9504 1.25 20.02 1.79497C20.9608 2.27433 21.7257 3.03924 22.205 3.98005C22.75 5.04961 22.75 6.44974 22.75 9.25V14.75C22.75 17.5503 22.75 18.9504 22.205 20.02C21.7257 20.9608 20.9608 21.7257 20.02 22.205C18.9504 22.75 17.5503 22.75 14.75 22.75H9.25C6.44974 22.75 5.04961 22.75 3.98005 22.205C3.03924 21.7257 2.27433 20.9608 1.79497 20.02C1.25 18.9504 1.25 17.5503 1.25 14.75V9.25C1.25 6.44974 1.25 5.04961 1.79497 3.98005C2.27433 3.03924 3.03924 2.27433 3.98005 1.79497ZM6.55106 9.49117C6.41404 9.34287 6.2179 9.25 6.00006 9.25C5.58585 9.25 5.25006 9.58579 5.25006 10V14C5.25006 14.4142 5.58585 14.75 6.00006 14.75H10.0001C10.4143 14.75 10.7501 14.4142 10.7501 14C10.7501 13.5858 10.4143 13.25 10.0001 13.25H7.67912C7.89936 13.0333 8.14804 12.8033 8.42066 12.5737C9.04 12.0521 9.74881 11.5618 10.5031 11.2212L17.2732 14.1847L17.2732 14.1848C17.3748 14.5849 17.7811 14.8278 18.182 14.7276C18.5838 14.6271 18.8281 14.2199 18.7277 13.8181L18.0001 14C18.7277 13.8181 18.7276 13.8177 18.7275 13.8173L18.7272 13.8164L18.7267 13.8143L18.7254 13.8091L18.7215 13.7943C18.7183 13.7825 18.714 13.7669 18.7085 13.7478C18.6976 13.7097 18.6818 13.6574 18.6604 13.5929C18.6179 13.464 18.5531 13.2857 18.4606 13.0744C18.2764 12.6533 17.9782 12.0914 17.5196 11.5271C16.588 10.3804 15.0104 9.25 12.5001 9.25C11.1132 9.25 9.83117 9.78833 8.76611 10.4607L6.55106 9.49117ZM6.5511 9.49121L6.00006 9.25L6.55106 9.49117C6.55107 9.49119 6.55109 9.4912 6.5511 9.49121ZM6.5511 9.49121L8.766 10.4608C8.28012 10.7675 7.83939 11.1022 7.45446 11.4263C7.19932 11.6412 6.96365 11.8557 6.75006 12.0611V10C6.75006 9.80364 6.6746 9.62491 6.5511 9.49121ZM10.5033 11.2211C10.5033 11.2211 10.5032 11.2212 10.5031 11.2212L8.766 10.4608C8.76604 10.4608 8.76607 10.4607 8.76611 10.4607L10.5033 11.2211ZM17.273 14.1842L17.2726 14.1828L17.2669 14.1623C17.2611 14.1419 17.251 14.1083 17.2362 14.0634C17.2065 13.9735 17.158 13.8393 17.0864 13.6756C16.9425 13.3467 16.7094 12.9086 16.3555 12.4729C15.6621 11.6196 14.4897 10.75 12.5001 10.75C11.8196 10.75 11.145 10.9314 10.5033 11.2211L17.273 14.1842Z" fill="currentColor"/>
</svg>

	</template>
	<template v-else-if="variant === 'gestalt'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.5 2L9 2V2C7.13872 2 6.20808 2 5.45492 2.24472C3.93273 2.73931 2.73931 3.93273 2.24472 5.45492C2 6.20808 2 7.13872 2 9L2 14C2 16.8003 2 18.2004 2.54497 19.27C3.02434 20.2108 3.78924 20.9757 4.73005 21.455C5.79961 22 7.19974 22 10 22H14C16.8003 22 18.2004 22 19.27 21.455C20.2108 20.9757 20.9757 20.2108 21.455 19.27C22 18.2004 22 16.8003 22 14V9C22 7.13872 22 6.20808 21.7553 5.45492C21.2607 3.93273 20.0673 2.73931 18.5451 2.24472C17.7919 2 16.8613 2 15 2V2L14.5 2M6 14V10M6 14H10M6 14C6 14 9 10 12.5 10C17 10 18 14 18 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	</template>
	<template v-else-if="variant === 'line'">
		<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 14V10M6 14H10M6 14C6 14 9 10 12.5 10C17 10 18 14 18 14M10 22H14C16.8003 22 18.2004 22 19.27 21.455C20.2108 20.9757 20.9757 20.2108 21.455 19.27C22 18.2004 22 16.8003 22 14V10C22 7.19974 22 5.79961 21.455 4.73005C20.9757 3.78924 20.2108 3.02433 19.27 2.54497C18.2004 2 16.8003 2 14 2H10C7.19974 2 5.79961 2 4.73005 2.54497C3.78924 3.02433 3.02433 3.78924 2.54497 4.73005C2 5.79961 2 7.19974 2 10V14C2 16.8003 2 18.2004 2.54497 19.27C3.02433 20.2108 3.78924 20.9757 4.73005 21.455C5.79961 22 7.19974 22 10 22Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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