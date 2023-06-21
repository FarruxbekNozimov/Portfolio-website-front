<script setup>
let projects = ref(null);
setTimeout(async () => {
	const { data } = await useFetch(
		"https://portfolio-farruxbeknozimov.vercel.app/api/posts"
	);
	projects.value = data.value;
	console.log(projects.value);
}, 1000);
console.log(projects.value);
</script>

<template>
	<div class="w-full h-full">
		<Header>My Posts</Header>
		<div class="">
			<div class="grid md:grid-cols-2 gap-5">
				<div
					v-if="!projects"
					v-for="load in 2"
					class="border-2 border-cyan-500 bg-slate-700/50 rounded-tr-2xl rounded-bl-2xl min-h-[100px] p-3 animate-pulse">
					<div class="w-full text-center">
						<div class="h-20 rounded-md mx-auto bg-gray-700 w-[80%] mb-2"></div>
						<div class="border-b border-cyan-500 my-4"></div>
					</div>
					<div class="flex">
						<div
							v-for="el in 3"
							class="mr-2 bg-gray-950/50 mt-2 h-10 rounded-md bg-gray-700 w-20 mb-2"></div>
					</div>
					<span class="sr-only">Loading...</span>
				</div>
				<router-link
					v-else
					v-for="el in projects"
					:to="`blog/${el._id}`"
					class="border-2 border-cyan-500 bg-slate-700/50 rounded-tr-2xl rounded-bl-2xl min-h-[100px] p-3">
					<h1 class="text-cyan-400 text-2xl text-center mt-3">
						{{ el?.title }}
					</h1>
					<div class="border-b border-cyan-500 my-4"></div>
					<div class="flex flex-wrap mb-3">
						<p
							v-for="tag in el.tags.split(',')"
							class="cursor-pointer text-cyan-200 mr-2 text-center bg-gray-950/50 hover:bg-gray-950 duration-300 p-1 rounded mt-2">
							#{{ tag }}
						</p>
					</div>
				</router-link>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
