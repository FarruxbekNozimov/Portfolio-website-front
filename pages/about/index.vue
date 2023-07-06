<script setup>
const { data } = await useFetch(
	"https://portfolio-farruxbeknozimov.vercel.app/api/about"
);
const { data: skills } = await useFetch(
	"https://portfolio-farruxbeknozimov.vercel.app/api/skills"
);
const { data: works } = await useFetch(
	"https://portfolio-farruxbeknozimov.vercel.app/api/work"
);
console.log(works.value);
</script>

<template>
	<div>
		<Header>About Me</Header>
		<LoadingSpinner v-if="!data" />
		<div class="" v-else>
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
			<h1 class="text-cyan-500 text-lg mb-3">Experience</h1>
			<ol class="relative border-l border-cyan-200 dark:border-cyan-700">
				<li v-for="work in works" class="mb-10 ml-4">
					<div
						class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
					<time
						class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
						>{{ work.start_time }} - {{ work.end_time }}</time
					>
					<h3 class="text-lg font-semibold text-gray-900 dark:text-white">
						{{ work.name }}
					</h3>
					<p
						class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
						{{ work.address }}
					</p>
				</li>
			</ol>
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
	</div>
</template>
