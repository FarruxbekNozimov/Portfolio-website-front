<script setup>
const { params } = useRoute();
const { data } = await useFetch(
	`https://portfolio-farruxbeknozimov.vercel.app/api/posts/${params.id}`
);
console.log(data.value);
</script>

<template>
	<div class="h-full text-white text-center">
		<div class="w-full flex items-center justify-between">
			<button
				class="flex items-center gap-2 text-xl border border-cyan-500 px-4 rounded-lg p-1">
				<Icon name="material-symbols:arrow-back-rounded" />
				Back
			</button>
		</div>
		<div class="p-5 w-full bg-slate-800 rounded-lg my-5 text-cyan-500">
			<h1 class="text-3xl mb-10">{{ data?.title }}</h1>
			<p :html="data?.content"></p>
		</div>
	</div>
</template>
