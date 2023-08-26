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
	<div class="w-full h-[80vh] p-1">
		<div class="bg-slate-900 w-full h-full rounded-lg overflow-y-auto">
			<div
				class="fixed w-full left-0 right-0 flex items-center gap-2 rounded-lg bg-black p-2 px-3">
				<router-link
					to="/"
					class="bg-red-500 h-4 w-4 text-sm rounded-full flex items-center justify-center group p-1">
					<Icon
						class="hidden group-hover:block"
						name="streamline:interface-delete-1-remove-add-button-buttons-delete" />
				</router-link>
				<router-link
					to="/"
					class="bg-yellow-500 h-4 w-4 text-sm rounded-full flex items-center justify-center group">
					<Icon class="hidden group-hover:block" name="mi:remove" />
				</router-link>
				<router-link
					to="/"
					class="bg-green-500 h-4 w-4 text-sm rounded-full flex items-center justify-center group">
					<Icon
						class="hidden group-hover:block"
						name="material-symbols:expand-all-rounded" />
				</router-link>
			</div>
			<div class="p-5 mt-9 h-max flex items-center justify-center">
				<LoadingSpinner v-if="!about[0] || !skills[0] || !works[0]" />
				<div class="" v-else>
					<h1 class="text-cyan-100 text-2xl">
						I'm Farruxbek and <span class="text-cyan-500">Web Developer</span>
					</h1>
					<p class="text-cyan-100 py-3">{{ about[0].description }}</p>
					<div class="my-5 grid grid-cols-3 gap-5 w-full">
						<span class="pb-2 px-1 text-cyan-100 border-b border-cyan-500/50">
							<span class="text-sm font-bold">Fullname : </span>
							<span class="text-sm font-mono">{{ about[0].fullname }}</span>
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
							<span class="text-sm font-mono">{{ about[0].email }}</span>
						</span>
						<span class="pb-2 px-1 text-cyan-100 border-b border-cyan-500/50">
							<span class="text-sm font-bold">Degree : </span>
							<span class="text-sm font-mono">Junior</span>
						</span>
						<span class="pb-2 px-1 text-cyan-100 border-b border-cyan-500/50">
							<span class="text-sm font-bold">Phone : </span>
							<span class="text-sm font-mono">{{ about[0].phone }}</span>
						</span>
						<span class="pb-2 px-1 text-cyan-100 border-b border-cyan-500/50">
							<span class="text-sm font-bold">City : </span>
							<span class="text-sm font-mono">{{ about[0].phone }}</span>
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
							<span
								v-for="skill in skills"
								class="bg-slate-800 hover:bg-slate-700 duration-300 px-3 p-2 mb-3 rounded-md text-cyan-200 mr-3 flex items-center gap-2">
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
