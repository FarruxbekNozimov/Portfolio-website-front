<script setup>
const navLinks = [
	{ name: "Home", path: "/" },
	{ name: "Works", path: "/works" },
	{ name: "Blog", path: "/blog" },
	{ name: "Contact", path: "/contact" },
];
</script>
<template>
	<div
		class="fixed w-full bg-slate-950 h-[70px] border-b-2 border-cyan-500 flex items-center px-10 justify-between text-white header">
		<a href="/" class="italic text-2xl font-serif">FarruxDEV</a>
		<div class="flex gap-10">
			<router-link
				v-for="el in navLinks"
				:to="el.path"
				class="text-xl cursor-pointer px-5 p-3 border-b-2 border-transparent rounded-lg hover:rounded-none hover:border-cyan-500 duration-300">
				{{ el.name }}
			</router-link>
		</div>
		<i class="bx bx-moon text-3xl"></i>
	</div>
</template>

<style scoped>
.router-link-exact-active {
	border-radius: 0;
	border-bottom: 2px solid rgb(6 182 212);
}

.header {
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(4.7px);
	-webkit-backdrop-filter: blur(4.7px);
}
</style>
