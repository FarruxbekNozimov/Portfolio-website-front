<script setup></script>

<template>
	<div>
		<div class="w-full px-32 py-20">
			<div class="grid grid-cols-3 gap-5">
				<div
					v-for="el in 5"
					class="border border-cyan-500 bg-slate-700/50 rounded-lg min-h-[300px] p-3">
					<Image
						src="https://upcdn.io/FW25bPH/raw/uploads/2023/06/18/Screenshot%20from%202023-06-18%2015-20-53-3E5Y.png"
						class="h-[150px] w-full object-cover rounded-xl" />
					<h1 class="text-cyan-300 text-2xl text-center mt-3">Course</h1>
					<p class="text-sm mb-5 text-cyan-500 text-center">
						You can test your algorithm skills in javascript on this website
					</p>
					<span
						v-for="el in 3"
						class="cursor-pointer text-cyan-200 mr-2 bg-gray-950/50 hover:bg-gray-950 duration-300 p-1 rounded">
						#nodejs
					</span>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
