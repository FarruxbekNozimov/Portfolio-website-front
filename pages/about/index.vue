<script setup>
const { data } = await useFetch(
	"https://portfolio-farruxbeknozimov.vercel.app/api/about"
);
const { data: skills } = await useFetch(
	"https://portfolio-farruxbeknozimov.vercel.app/api/skills"
);
</script>

<template>
	<div>
		<Header>About Me</Header>
		<h1 class="text-cyan-100 text-2xl">
			I'm Farruxbek and <span class="text-cyan-500">Web Developer</span>
		</h1>
		<p class="text-cyan-100 py-3">{{ data[0].description }}</p>
		<div class="flex gap-5">
			<div class="my-5 grid grid-cols-2 gap-5 w-[50%]">
				<span class="pb-2 px-1 text-cyan-100 border-b border-cyan-500/50">
					<span class="text-sm font-bold">Fullname : </span>
					<span class="text-sm font-mono">{{ data[0].fullname }}</span>
				</span>
				<span class="pb-2 px-1 text-cyan-100 border-b border-cyan-500/50">
					<span class="text-sm font-bold">Age : </span>
					<span class="text-sm font-mono">{{
						new Date().getFullYear() - 2007
					}}</span>
				</span>
				<span class="pb-2 px-1 text-cyan-100 border-b border-cyan-500/50">
					<span class="text-sm font-bold">Website : </span>
					<span class="text-sm font-mono">farruxdev.uz</span>
				</span>
				<span class="pb-2 px-1 text-cyan-100 border-b border-cyan-500/50">
					<span class="text-sm font-bold">Email : </span>
					<span class="text-sm font-mono">{{ data[0].email }}</span>
				</span>
				<span class="pb-2 px-1 text-cyan-100 border-b border-cyan-500/50">
					<span class="text-sm font-bold">Degree : </span>
					<span class="text-sm font-mono">Junior</span>
				</span>
				<span class="pb-2 px-1 text-cyan-100 border-b border-cyan-500/50">
					<span class="text-sm font-bold">Phone : </span>
					<span class="text-sm font-mono">{{ data[0].phone }}</span>
				</span>
				<span class="pb-2 px-1 text-cyan-100 border-b border-cyan-500/50">
					<span class="text-sm font-bold">City : </span>
					<span class="text-sm font-mono">{{ data[0].phone }}</span>
				</span>
			</div>
			<div class="my-5 grid grid-cols-2 gap-5 w-[50%]">
				<h1 v-for="skill in skills" class="bg-red-500">
					<span class="text-cyan-500">{{ skill.title }}</span>
				</h1>
			</div>
		</div>
	</div>
</template>
