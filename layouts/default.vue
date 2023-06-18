<template>
	<div>
		<div class="h-screen overflow-y-hidden bg-slate-900">
			<Header />
			<main class="h-full overflow-y-auto mt-[75px]">
				<slot />
			</main>
			<Footer />
		</div>
	</div>
</template>

<script setup>
definePageMeta({
	layout: "default",
});
</script>

<style scoped>
::-webkit-scrollbar {
	width: 7px;
}
::-webkit-scrollbar-thumb {
	background: rgb(6 182 212);
	border-radius: 5px;
}
</style>
