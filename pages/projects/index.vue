<script setup>
let projects = ref(null);
setTimeout(async () => {
	const { data } = await useFetch(
		"https://portfolio-farruxbeknozimov.vercel.app/api/projects"
	);
	projects.value = data.value;
}, 1000);
</script>

<template>
	<div class="w-full h-full">
		<Header>My Projects</Header>
		<div class="">
			<div class="grid md:grid-cols-2 gap-5">
				<div
					v-if="!projects"
					v-for="load in 2"
					class="border-2 border-cyan-500 bg-slate-700/50 rounded-tr-2xl rounded-bl-2xl min-h-[400px] p-3 animate-pulse">
					<div
						class="flex items-center justify-center w-full h-[300px] rounded bg-gray-700 mb-4">
						<svg
							class="w-12 h-12 text-gray-200"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
							fill="currentColor"
							viewBox="0 0 640 512">
							<path
								d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
						</svg>
					</div>
					<div class="w-full text-center">
						<div class="h-6 rounded-full mx-auto bg-gray-700 w-64 mb-2"></div>
						<div class="h-5 rounded-full mx-auto bg-gray-700 w-full mb-4"></div>
						<div class="border-b border-cyan-500 my-4"></div>
						<div class="flex items-center justify-between gap-10">
							<button
								class="flex items-center justify-center gap-1 bg-cyan-500/70 hover:bg-cyan-500 p-1 px-2 rounded-md">
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
				<div
					v-else
					v-for="el in projects"
					class="border-2 border-cyan-500 bg-slate-700/50 rounded-tr-2xl rounded-bl-2xl min-h-[400px] p-3">
					<Image
						:src="el?.img"
						class="h-[300px] w-full object-cover rounded-xl" />
					<h1 class="text-cyan-400 text-2xl text-center mt-3">
						{{ el?.title }}
					</h1>
					<p class="text-sm text-cyan-100 text-center">
						{{ el?.description }}
					</p>
					<div class="border-b border-cyan-500 my-4"></div>
					<!-- <div class="flex flex-wrap mb-3">
						<p
							v-for="el in ['html', 'css', 'js', 'bootstrap']"
							class="cursor-pointer text-cyan-200 mr-2 text-center bg-gray-950/50 hover:bg-gray-950 duration-300 p-1 rounded mt-2">
							#{{ el }}
						</p>
					</div> -->
					<div class="flex items-center justify-between gap-10">
						<button
							class="flex items-center justify-center gap-1 bg-cyan-500/70 hover:bg-cyan-500 p-1 px-2 rounded-md">
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
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
