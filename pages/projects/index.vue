<script setup>
const { data, pending, error, refresh } = await useFetch(
	"https://portfolio-farruxbeknozimov.vercel.app/api/projects",
	{
		pick: ["title"],
	}
);
console.log(data, pending, error, refresh);
</script>

<template>
	<div>
		<div class="w-full lg:px-32 md:px-14 py-20">
			<div class="grid lg:grid-cols-3 md:grid-cols-2 gap-5 mb-10">
				<div
					v-for="el in 5"
					class="border border-cyan-500 bg-slate-700/50 rounded-lg min-h-[300px] p-3">
					<Image
						src="https://upcdn.io/FW25bPH/raw/uploads/2023/06/18/Screenshot%20from%202023-06-18%2015-20-53-3E5Y.png"
						class="h-[150px] w-full object-cover rounded-xl" />
					<h1 class="text-cyan-400 text-2xl text-center mt-3">Course</h1>
					<p class="text-sm text-cyan-100 text-center">
						You can test your algorithm skills in javascript on this website
					</p>
					<div class="border-b border-cyan-500 my-4"></div>
					<div class="flex items-center justify-between gap-10 mb-3">
						<button
							class="flex items-center justify-center gap-1 bg-cyan-500/70 hover:bg-cyan-500 p-1 px-2 rounded-md">
							<IconCSS
								name="material-symbols:team-dashboard-outline"
								class="text-xl" />Preview
						</button>
						<button
							class="flex items-center justify-center gap-1 bg-black/30 hover:bg-black/70 text-cyan-500 p-1 px-3 rounded-md">
							Demo
							<IconCSS
								name="mdi:microsoft-visual-studio-code"
								class="text-xl" />
						</button>
					</div>
					<div class="flex flex-wrap">
						<p
							v-for="el in ['html', 'css', 'js', 'bootstrap']"
							class="cursor-pointer text-cyan-200 mr-2 text-center bg-gray-950/50 hover:bg-gray-950 duration-300 p-1 rounded mt-2">
							#{{ el }}
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
