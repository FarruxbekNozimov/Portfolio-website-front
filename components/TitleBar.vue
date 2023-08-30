<script setup>
defineProps(["title"]);
</script>

<template>
	<div class="flex items-center gap-3 mb-5">
		<span class="font-[500] text-gray-950 uppercase text-3xl">{{ title }}</span>
		<div class="w-56 h-0 border border-purple-950 rounded-full"></div>
	</div>
</template>

<style scoped></style>
