<script setup>
const { data: about } = await useFetch(
	"https://portfolio-farruxbeknozimov.vercel.app/api/about"
);
const { data: skills } = await useFetch(
	"https://portfolio-farruxbeknozimov.vercel.app/api/skills"
);
const { data: works } = await useFetch(
	"https://portfolio-farruxbeknozimov.vercel.app/api/work"
);
</script>

<template>
	<div class="w-full h-[80vh]">
		<div class="rounded-lg overflow-y-auto">
			<TitleBar title="About Me" />
			<div class="h-max flex items-center justify-center">
				<LoadingSpinner v-if="!about[0] || !skills[0] || !works[0]" />
				<div class="" v-else>
					<h1 class="text-blue-900 text-2xl">
						I'm Farruxbek and <span class="text-blue-500">Web Developer</span>
					</h1>
					<p class="text-blue-900 py-3">{{ about[0].description }}</p>
					<div class="my-5 grid grid-cols-3 gap-5 w-full">
						<span class="pb-2 px-1 text-blue-900 border-b border-blue-500/50">
							<span class="text-sm font-bold">Fullname : </span>
							<span class="text-sm font-mono">{{ about[0].fullname }}</span>
						</span>
						<span class="pb-2 px-1 text-blue-900 border-b border-blue-500/50">
							<span class="text-sm font-bold">Age : </span>
							<span class="text-sm font-mono">{{
								new Date().getFullYear() - 2007
							}}</span>
						</span>
						<span class="pb-2 px-1 text-blue-900 border-b border-blue-500/50">
							<span class="text-sm font-bold">Website : </span>
							<span class="text-sm font-mono">farruxdev.uz</span>
						</span>
						<span class="pb-2 px-1 text-blue-900 border-b border-blue-500/50">
							<span class="text-sm font-bold">Email : </span>
							<span class="text-sm font-mono">{{ about[0].email }}</span>
						</span>
						<span class="pb-2 px-1 text-blue-900 border-b border-blue-500/50">
							<span class="text-sm font-bold">Degree : </span>
							<span class="text-sm font-mono">Junior</span>
						</span>
						<span class="pb-2 px-1 text-blue-900 border-b border-blue-500/50">
							<span class="text-sm font-bold">Phone : </span>
							<span class="text-sm font-mono">{{ about[0].phone }}</span>
						</span>
						<span class="pb-2 px-1 text-blue-900 border-b border-blue-500/50">
							<span class="text-sm font-bold">City : </span>
							<span class="text-sm font-mono">{{ about[0].phone }}</span>
						</span>
					</div>
					<h1 class="text-blue-950 font-bold text-lg mb-3">Experience</h1>
					<ol class="relative border-l border-blue-950">
						<li v-for="work in works" class="mb-10 ml-4">
							<div
								class="absolute w-3 h-3 bg-black rounded-full mt-1.5 -left-1.5 border border-black"></div>
							<time class="mb-1 text-sm font-normal leading-none text-gray-900">
								{{ work.start_time }} - {{ work.end_time }}
							</time>
							<h3 class="text-lg font-semibold text-blue-900">
								{{ work.name }}
							</h3>
							<p class="mb-4 text-base font-normal text-gray-900">
								{{ work.address }}
							</p>
						</li>
					</ol>
					<div class="my-5 gap-3 w-full">
						<h1 class="text-blue-950 font-bold text-lg mb-3">Skills</h1>
						<div class="flex flex-wrap">
							<span
								v-for="skill in skills"
								class="bg-yellow-200 text-yellow-900 hover:bg-yellow-100 duration-300 px-3 p-2 mb-3 rounded-md mr-3 flex items-center gap-2">
								<Icon :name="skill.icon" class="text-xl" />
								{{ skill.title }}
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
