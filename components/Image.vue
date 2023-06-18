<template>
	<div>
		<div
			class="absolute bg-black/50 z-50 top-0 left-0 flex items-center justify-center duration-300"
			:class="full ? 'w-full h-full' : 'w-0 h-0'">
			<img
				class="object-cover rounded-xl cursor-pointer w-[80%] h-[80%]"
				:src="src" />
			<IconCSS
				@click="() => (full = false)"
				name="ph:x-bold"
				class="cursor-pointer hover:scale-110 absolute text-white text-3xl top-5 right-5" />
		</div>
		<div class="relative h-full">
			<img
				class="object-cover cursor-pointer w-full h-full rounded-lg"
				:src="src" />
			<div
				class="absolute top-1 right-1 bg-black/70 border border-cyan-500 rounded">
				<IconCSS
					@click="() => (full = true)"
					name="gridicons:fullscreen"
					class="cursor-pointer hover:scale-110 text-white text-2xl" />
			</div>
		</div>
	</div>
</template>

<script setup>
const { src } = defineProps(["src"]);
const full = ref(false);
</script>

<style lang="scss" scoped></style>
