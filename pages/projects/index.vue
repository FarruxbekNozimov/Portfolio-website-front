<script setup>
let projects = reactive({
	data: [],
	load: true,
});
setTimeout(async () => {
	const { data } = await useFetch(
		"https://farruxdev.onrender.com/api/projects"
	);
	projects.data = data.value;
	projects.load = false;
}, 1000);
</script>

<template>
	<div class="w-full h-full">
		<Titlebar title="My Projects" />
		<div class="pb-10">
			<div class="grid gap-5">
				<CardProjectLoad v-if="projects.load" v-for="el in 4" />
				<CardProject v-for="el in projects.data" :data="el" />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
