<script setup>
const navLinks = [
	{ icon: "ph:house-bold", name: "Home", path: "/" },
	{ icon: "material-symbols:account-circle", name: "About", path: "/about" },
	{
		icon: "carbon:cloud-service-management",
		name: "Service",
		path: "/service",
	},
	{ icon: "bytesize:portfolio", name: "Portfolio", path: "/projects" },
	{ icon: "bi:signpost-split", name: "Blog", path: "/blog" },
	{ icon: "solar:chat-dots-outline", name: "Contact", path: "/contact" },
];
</script>
<template>
	<div
		class="absolute w-72 lg:left-0 h-screen md:-left-72 h-full bg-slate-900 border-r border-cyan-500 text-white duration-300">
		<a
			href="/"
			class="flex items-center justify-center block italic text-2xl font-mono gap-2 w-full">
			<img src="/logo.png" class="w-full" />
		</a>
		<div class="gap-10 p-10">
			<router-link
				v-for="el in navLinks"
				:to="el.path"
				class="text-xl cursor-pointer px-5 p-3 border-b-2 border-transparent rounded-xl hover:rounded-none hover:border-cyan-500 duration-300 flex items-center gap-2">
				<Icon :name="el.icon" class="text-2xl" />
				{{ el.name }}
			</router-link>
		</div>
	</div>
</template>

<style scoped>
.router-link-exact-active {
	border-radius: 0;
	border-bottom: 2px solid rgb(6 182 212);
	color: rgb(6 182 212);
}

/* .header {
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(4.7px);
	-webkit-backdrop-filter: blur(4.7px);
} */
</style>
