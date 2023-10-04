<script setup>
const navs = [
	{ icon: "ph:house-bold", name: "Home", path: "/" },
	{ icon: "iconoir:multiple-pages", name: "Service", path: "/service" },
	{ icon: "bytesize:portfolio", name: "Portfolio", path: "/projects" },
	{ icon: "solar:chat-dots-outline", name: "Contact", path: "/contact" },
];
</script>

<template>
	<div class="p-3 flex items-center justify-end">
		<div class=""></div>
		<div class="flex items-center gap-5">
			<router-link
				v-for="el in navs"
				:to="el.path"
				class="flex items-center justify-center text-3xl h-[80px] w-[90px] bg-gray-200 rounded-2xl cursor-pointer">
				<div class="text-center">
					<Icon :name="el.icon" />
					<h3 class="text-sm">{{ el.name }}</h3>
				</div>
			</router-link>
		</div>
	</div>
</template>

<style scoped>
.router-link-active {
	background: purple;
	color: white;
}
</style>
