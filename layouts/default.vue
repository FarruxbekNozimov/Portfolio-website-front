<template>
	<div>
		<div class="h-screen overflow-y-hidden bg-slate-950">
			<Sidebar />
			<main class="h-full overflow-y-auto lg:ml-[250px] m-0 p-6 lg:pt-6 pt-20">
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
