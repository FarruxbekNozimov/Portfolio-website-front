<template>
	<div class="relative">
		<img class="object-cover cursor-pointer w-full h-full" :src="src" />
		<IconCSS
			name="gridicons:fullscreen"
			class="absolute text-white text-2xl top-0 right-0 bg-black" />
	</div>
</template>

<script setup>
const { src } = defineProps(["src"]);
</script>

<style lang="scss" scoped></style>
