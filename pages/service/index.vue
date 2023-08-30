<script setup>
</script>

<template>
	<div class="w-full h-full mb-10">
		<Header>Services</Header>
		<div class="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
			<div
				v-for="service in services"
				class="max-w-sm p-2 border rounded-lg shadow bg-gray-800 border-cyan-700 text-center">
				<Icon class="text-7xl text-cyan-500 my-3" :name="service.icon" />
				<a href="#">
					<h5 class="mb-2 text-2xl font-semibold tracking-tight text-white">
						{{ service.name }}
					</h5>
				</a>
				<p class="mb-3 font-normal text-gray-400">
					{{ service.text }}
				</p>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
