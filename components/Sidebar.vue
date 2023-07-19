<script setup>
const openedNav = ref(false);
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
		class="absolute w-24 hover:w-72 lg:left-0 h-screen -left-72 bg-slate-900 duration-300 bg-gray-900 border-r border-cyan-500"
		:class="openedNav ? 'lg:left-0' : 'w-72'">
		<button
			class="lg:hidden absolute -right-16 text-2xl top-5 bg-gray-800 sm:flex items-center justify-center rounded border border-cyan-500 p-1 px-2 text-cyan-500">
			<Icon name="iconamoon:menu-burger-horizontal-bold" />
		</button>
		<a
			href="/"
			class="top-0 left-2 bg-gray-900 gap-2 flex items-center justify-center py-5">
			<img src="/logo.png" alt="logo" class="w-full" />
		</a>
		<div class="px-5">
			<div class="">
				<div v-for="el in navLinks">
					<router-link
						@click="() => (menuId = el.id)"
						:to="el.path"
						class="text-cyan-300 bg-gray-950 duration-300 cursor-pointer px-5 py-3 rounded-xl text-md hover:bg-cyan-500 hover:text-gray-950 flex items-center justify-between mt-3 border-b-2 border-transparent">
						<div class="flex items-center text-md gap-2">
							<Icon :name="el.icon" class="text-xl" />
							<h4 class="block">{{ el.name }}</h4>
						</div>
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.router-link-exact-active {
	border-bottom: 2px solid rgb(6 182 212);
	border-radius: 10px 10px 5px 5px;
}

.header {
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(4.7px);
	-webkit-backdrop-filter: blur(4.7px);
}
</style>
