<template>
	<div>
		<div
			class="absolute bg-black/50 z-10 top-0 left-0 flex items-center justify-center duration-300"
			@click="() => (full = false)"
			:class="full ? 'h-full w-full' : 'w-0 h-0'">
			<img class="object-contain rounded-xl w-[80%] h-[80%]" :src="src" />
			<Icon
				@click="() => (full = false)"
				name="ph:x-bold"
				class="cursor-pointer hover:scale-110 absolute text-white text-3xl top-5 right-5" />
		</div>
		<div class="group relative h-full">
			<img class="object-cover w-full h-full rounded-lg" :src="src" />
			<div
				class="group-hover:block absolute top-2 right-2 bg-black/70 border border-cyan-500 rounded duration-300">
				<Icon
					@click="() => (full = true)"
					name="gridicons:fullscreen"
					class="cursor-pointer hover:scale-110 duration-300 text-white text-3xl" />
			</div>
		</div>
	</div>
</template>

<script setup>
const { src } = defineProps(["src"]);
const full = ref(false);
</script>

<style lang="scss" scoped></style>
