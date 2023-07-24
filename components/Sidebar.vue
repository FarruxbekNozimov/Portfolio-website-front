<script setup>
const docks = [
	{
		name: "Home",
		img: "home.png",
		path: "/home",
	},
	{
		name: "Home",
		img: "home.png",
		path: "/home",
	},
	{
		name: "Home",
		img: "home.png",
		path: "/home",
	},
	{
		name: "Home",
		img: "home.png",
		path: "/home",
	},
	{
		name: "Home",
		img: "home.png",
		path: "/home",
	},
	{
		name: "Home",
		img: "home.png",
		path: "/home",
	},
	{
		name: "Home",
		img: "home.png",
		path: "/home",
	},
	{
		name: "Home",
		img: "home.png",
		path: "/home",
	},
	{
		name: "Home",
		img: "home.png",
		path: "/home",
	},
	{
		name: "Home",
		img: "home.png",
		path: "/home",
	},
];
</script>

<template>
	<div class="absolute w-full bottom-5">
		<div
			class="mx-auto bg-black/50 h-[70px] px-4 w-[50%] bottom-5 rounded-xl flex items-center gap-3">
			<div v-for="el in docks" class="hover:scale-150 hover:mb-10 duration-300">
				<img :src="`/dock/${el.img}`" class="w-14" alt="" />
			</div>
		</div>
	</div>
</template>

<style scoped></style>
