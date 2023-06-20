<script setup>
const navLinks = [
	{ name: "Home", path: "/" },
	{ name: "Projects", path: "/projects" },
	{ name: "Blog", path: "/blog" },
	{ name: "Contact", path: "/contact" },
];
</script>
<template>
	<div
		class="fixed w-full bg-slate-950 h-[70px] border-b-2 border-cyan-500 flex items-center lg:px-10 px-5 justify-between text-white header">
		<a href="/" class="italic text-2xl font-serif">
			<nuxt-img src="/Logo.png" sizes="sm:100vw md:50vw lg:400px" />
			FarruxDEV
		</a>
		<div class="lg:flex hidden gap-10">
			<router-link
				v-for="el in navLinks"
				:to="el.path"
				class="text-xl cursor-pointer px-5 p-3 border-b-2 border-transparent rounded-lg hover:rounded-none hover:border-cyan-500 duration-300">
				{{ el.name }}
			</router-link>
		</div>
		<div class="lg:hidden block">
			<Icon name="solar:list-linear" class="text-4xl" />
		</div>
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
