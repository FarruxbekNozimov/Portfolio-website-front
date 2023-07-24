<template>
	<div
		class="text-white w-full bg-black/50 h-9 pt-2 px-1 flex items-center justify-between">
		<div class="flex items-center">
			<div class="group relative w-[120px] h-9">
				<button class="h-7 px-4 text-white hover:bg-white/20 rounded">
					FarruxDEV
				</button>
				<div
					class="absolute text-white py-2 top-9 hidden group-hover:block w-[200px] bg-black/50 rounded-lg px-2">
					<div class="mb-2">
						<img
							src="/me.png"
							class="object-cover w-24 h-24 rounded-full mx-auto"
							alt="" />
					</div>
					<div
						class="p-1 px-2 rounded text-sm cursor-pointer hover:bg-blue-500 mb-1">
						FarruxDEV OS
					</div>
					<hr class="border-b-1 border-gray-500 mb-1" />
					<div
						v-for="el in ['Sleep', 'Restart', 'Shutdown']"
						class="p-1 px-2 rounded text-sm cursor-pointer hover:bg-blue-500 mb-1">
						{{ el }}
					</div>
					<hr class="border-b-1 border-gray-500 mb-1" />
					<div
						class="p-1 px-2 rounded text-sm cursor-pointer hover:bg-blue-500 mb-1">
						Lock Screen
					</div>
					<div
						class="p-1 px-2 rounded text-sm cursor-pointer hover:bg-blue-500 mb-1">
						Log Out
					</div>
				</div>
			</div>
			<div class="flex items-center">
				<button
					v-for="el in ['File', 'Edit', 'View', 'Go', 'Tools', 'Help']"
					class="h-7 px-4 text-white hover:bg-white/20 rounded">
					{{ el }}
				</button>
			</div>
		</div>
		<div class=""></div>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
