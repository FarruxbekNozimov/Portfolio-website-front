<script setup></script>

<template>
	<div
		class="border-2 border-cyan-500 bg-slate-700/50 rounded-tr-2xl rounded-bl-2xl min-h-[130px] p-3 animate-pulse flex items-center justify-center gap-5 p-3 px-5">
		<div
			class="flex items-center justify-center w-full h-full rounded bg-gray-700">
			<Icon name="material-symbols:imagesmode" class="text-7xl text-gray-500" />
		</div>
		<div class="w-full text-center">
			<div class="h-6 rounded-full mx-auto bg-gray-700 w-64 mb-2"></div>
			<div class="h-5 rounded-full mx-auto bg-gray-700 w-full mb-4"></div>
			<div class="border-b border-cyan-500 my-4"></div>
			<div class="flex items-center justify-center gap-5">
				<div
					v-for="el in 4"
					class="h-7 rounded mx-auto bg-gray-700 w-full w-20 mb-4"></div>
			</div>
			<div class="flex items-center justify-between gap-10">
				<button
					class="flex items-center justify-center gap-1 bg-yellow-500/70 hover:bg-yellow-500 p-1 px-2 rounded-md">
					<Icon
						name="material-symbols:team-dashboard-outline"
						class="text-xl" />Preview
				</button>
				<button
					class="flex items-center justify-center gap-1 bg-black/30 hover:bg-black/70 text-cyan-500 p-1 px-3 rounded-md">
					Demo
					<Icon name="mdi:microsoft-visual-studio-code" class="text-xl" />
				</button>
			</div>
		</div>
		<span class="sr-only">Loading...</span>
	</div>
</template>

<style scoped></style>
