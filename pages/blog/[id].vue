<script setup>
const router = useRouter();
const { params } = useRoute();
const { data } = await useFetch(
	`https://portfolio-farruxbeknozimov.vercel.app/api/posts/${params.id}`
);
console.log(data.value.content);
</script>

<template>
	<div class="h-full text-white text-center pb-10">
		<div class="w-full flex items-center justify-between">
			<button
				class="flex items-center gap-2 text-xl border border-cyan-500 px-4 rounded-lg p-1 hover:bg-cyan-500 duration-300"
				@click="router.go(-1)">
				<Icon name="material-symbols:arrow-back-rounded" />
				Back
			</button>
		</div>
		<div class="p-5 px-20 bg-slate-800 rounded-lg my-5 text-cyan-500">
			<h1 class="text-3xl mb-10 font-bold">{{ data?.title }}</h1>
			<div class="leading-7" v-html="data.content"></div>
		</div>
	</div>
</template>
