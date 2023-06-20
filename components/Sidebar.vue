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
		class="w-72 bg-gray-900 h-screen border-r border-cyan-500 shadow shadow-cyan-500 relative overflow-y-auto">
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
						class="text-cyan-300 bg-gray-950 duration-300 cursor-pointer px-5 py-3 rounded-xl text-md group hover:bg-cyan-500 hover:text-gray-950 flex items-center justify-between mt-3 border-b-2 border-transparent">
						<div class="flex items-center text-md gap-2">
							<i :class="el.icon" class="text-lg group-hover:bx-tada"></i>
							{{ el.name }}
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
}

/* .header {
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(4.7px);
	-webkit-backdrop-filter: blur(4.7px);
} */
</style>
