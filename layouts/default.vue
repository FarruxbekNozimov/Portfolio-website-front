<script setup>
definePageMeta({
	layout: "default",
});
</script>

<template>
	<div>
		<div class="h-screen overflow-y-hidden bg-slate-950">
			<Sidebar id="parent" class="group" />
			<main
				id="child"
				class="h-full overflow-y-auto lg:ml-72 m-0 p-6 lg:pt-6 pt-20">
				<slot />
			</main>
			<Footer />
		</div>
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
