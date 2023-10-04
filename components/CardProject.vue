<script setup>
defineProps(["data"]);
</script>

<template>
	<div
		class="shadow hover:shadow-xl duration-300 border-2 border-yellow-900 bg-slate-700/50 rounded-tr-2xl rounded-bl-2xl min-h-[100px] p-3 px-5 cursor-pointer flex items-center justify-center gap-5">
		<Image
			:src="`https://farruxdev.onrender.com/api/image/${data.img}`"
			class="h-[100%] w-[50%] object-contain rounded-xl" />
		<div class="text-center w-[50%]">
			<a
				:href="data.preview"
				target="_blank"
				class="block text-white font-semibold text-2xl text-center mt-3">
				{{ data.title }}
			</a>
			<p class="text-sm text-yellow-100 text-center h-7">
				{{ data.description }}
			</p>
			<div class="border-b border-yellow-500 my-4"></div>
			<div class="flex flex-wrap mb-3">
				<p
					v-for="data in data.tags.split(',')"
					class="cursor-pointer text-yellow-200 mr-2 text-center bg-gray-950/50 hover:bg-gray-950 duration-300 p-1 rounded mt-2">
					#{{ data }}
				</p>
			</div>
			<div class="flex items-center justify-between gap-10">
				<a
					target="_blank"
					:href="data.preview"
					class="flex items-center justify-center gap-1 bg-yellow-500/70 hover:bg-yellow-500 p-1 px-2 rounded-md">
					<Icon
						name="material-symbols:team-dashboard-outline"
						class="text-xl" />Preview
				</a>
				<a
					target="_blank"
					:href="data.demo"
					class="flex items-center justify-center gap-1 bg-black/30 hover:bg-black/70 text-cyan-500 p-1 px-3 rounded-md">
					Demo
					<Icon name="mdi:microsoft-visual-studio-code" class="text-xl" />
				</a>
			</div>
		</div>
	</div>
	<!-- <div
		class="shadow hover:shadow-xl duration-300 border-2 border-cyan-500 bg-slate-700/50 rounded-tr-2xl rounded-bl-2xl min-h-[300px] p-3 cursor-pointer">
		<Image
			:src="`https://farruxdev.onrender.com/api/image/${data.img}`"
			class="h-[100px] w-full object-contain rounded-xl" />
		<a
			:href="data.preview"
			target="_blank"
			class="block text-cyan-400 font-semibold text-2xl text-center mt-3">
			{{ data.title }}
		</a>
		<p class="text-sm text-cyan-100 text-center h-7">
			{{ data.description }}
		</p>
		<div class="border-b border-cyan-500 my-4"></div>
		<div class="flex flex-wrap mb-3">
			<p
				v-for="data in data.tags.split(',')"
				class="cursor-pointer text-cyan-200 mr-2 text-center bg-gray-950/50 hover:bg-gray-950 duration-300 p-1 rounded mt-2">
				#{{ data }}
			</p>
		</div>
		<div class="flex items-center justify-between gap-10">
			<a
				target="_blank"
				:href="data.preview"
				class="flex items-center justify-center gap-1 bg-cyan-500/70 hover:bg-cyan-500 p-1 px-2 rounded-md">
				<Icon
					name="material-symbols:team-dashboard-outline"
					class="text-xl" />Preview
			</a>
			<a
				target="_blank"
				:href="data.demo"
				class="flex items-center justify-center gap-1 bg-black/30 hover:bg-black/70 text-cyan-500 p-1 px-3 rounded-md">
				Demo
				<Icon name="mdi:microsoft-visual-studio-code" class="text-xl" />
			</a>
		</div>
	</div> -->
</template>

<style scoped></style>
