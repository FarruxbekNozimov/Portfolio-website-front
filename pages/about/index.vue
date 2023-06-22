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
		<div class="my-5 grid grid-cols-3 gap-5 w-full">
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
		<div class="my-5 gap-3 w-full">
			<h1 class="text-cyan-500 text-lg mb-3">Skills</h1>
			<div class="flex flex-wrap">
				<a
					v-for="skill in skills"
					target="_blank"
					:href="`https://www.google.com/search?q=${skill.title}&oq=html&aqs=chrome..69i57j0i67i650l2j0i512l3j69i60l2.590j0j7&sourceid=chrome&ie=UTF-8`"
					class="cursor-pointer bg-slate-800 hover:bg-slate-700 duration-300 px-3 p-2 mb-3 rounded-md text-cyan-200 mr-3 flex items-center gap-2">
					<Icon :name="skill.icon" class="text-xl" />
					{{ skill.title }}
				</a>
			</div>
		</div>
	</div>
</template>
