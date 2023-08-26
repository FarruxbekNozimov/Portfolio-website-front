<script setup>
const docks = [
	{
		name: "Home",
		img: "home.png",
		path: "/",
	},
	{
		name: "About",
		img: "finder.png",
		path: "/about",
	},
	{
		name: "Project",
		img: "project.png",
		path: "/projects",
	},
	{
		name: "Trash",
		img: "bin.png",
		path: "",
	},
	{
		name: "Applications",
		img: "launchpad.png",
		path: "",
	},
];
</script>

<template>
	<div class="absolute w-full bottom-5 flex items-center justify-center">
		<div
			class="mx-auto bg-black/50 h-[10vhs] px-4 bottom-5 rounded-xl flex items-center justify-center gap-3">
			<router-link
				v-for="el in docks"
				:to="el.path"
				class="cursor-pointer hover:scale-110 duration-300">
				<img
					:src="`/dock/${el.img}`"
					class="w-14 hover:w-24 duration-300"
					alt="" />
			</router-link>
		</div>
	</div>
</template>

<style scoped></style>
