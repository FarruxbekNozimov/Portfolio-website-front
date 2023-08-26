<script setup>
definePageMeta({
	layout: "default",
});
</script>

<template>
	<div class="h-screen w-full overflow-y-hidden bg-[url('bg.png')]">
		<Header />
		<slot />
		<Sidebar id="parent" class="group" />
	</div>
</template>

<style scoped>
::-webkit-scrollbar {
	width: 7px;
}
::-webkit-scrollbar-thumb {
	background: rgb(6 182 212);
	border-radius: 5px;
}
#parent:hover #child {
	background: white !important;
}
</style>
