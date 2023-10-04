<script setup></script>

<template>
	<div>
		<div
			class="bg-yellow-500 w-96 mt-[100px] pb-5 relative rounded-xl pt-[90px] shadow-2xl h-[625px]">
			<div class="absolute -top-[70px] w-full text-center">
				<img
					src="/me.png"
					class="mx-auto rounded-full object-cover border border-yellow-800 w-[150px] h-[150px] shadow-xl" />
			</div>
			<div class="px-5">
				<h1 class="text-xl font-[500] text-center mb-2">Farruxbek Nozimov</h1>
				<h3 class="text-sm font-[400] text-gray-800 text-center mb-2">
					FullStack Developer
				</h3>
				<div class="grid grid-cols-4 gap-5 px-10 mb-10">
					<a
						v-for="el in data"
						:href="el.link"
						class="flex items-center justify-center p-3 rounded-lg text-2xl bg-white shadow-xl">
						<Icon :name="el.icon" />
					</a>
				</div>
				<div class="bg-yellow-600/50 py-5 px-10 rounded-xl">
					<div
						class="flex items-center gap-3 pb-5 mb-5 border-b border-white/50">
						<div
							class="bg-white h-[40px] w-[40px] flex items-center justify-center text-2xl rounded-lg text-blue-500 shadow-xl">
							<Icon name="ic:outline-phone-android" />
						</div>
						<div class="">
							<h3 class="text-sm text-gray-800">Phone</h3>
							<h4 class="font-[500] text-sm">+998 88 703 80 06</h4>
						</div>
					</div>
					<div
						class="flex items-center gap-3 pb-5 mb-5 border-b border-white/50">
						<div
							class="bg-white h-[40px] w-[40px] flex items-center justify-center text-2xl rounded-lg text-purple-500 shadow-xl">
							<Icon name="material-symbols:mail-outline" />
						</div>
						<div class="">
							<h3 class="text-sm text-gray-800">Email</h3>
							<h4 class="font-[500] text-sm">farruxbekdev@gmail.com</h4>
						</div>
					</div>
					<div
						class="flex items-center gap-3 pb-5 mb-5 border-b border-white/50">
						<div
							class="bg-white h-[40px] w-[40px] flex items-center justify-center text-2xl rounded-lg text-green-500 shadow-xl">
							<Icon name="ph:map-pin" />
						</div>
						<div class="">
							<h3 class="text-sm text-gray-800">Location</h3>
							<h4 class="font-[500] text-sm">Uzbekistan, Tashkent</h4>
						</div>
					</div>
					<div class="text-center">
						<a
							href="https://docs.google.com/document/d/1nm_tS9zjaUwJynHiz_2U6IlXUBHk7aqapstbmt0_l0w/edit"
							target="_blank"
							class="w-56 block mx-auto py-2 rounded-full bg-gradient-to-r from-blue-800/70 to-black/80 hover:from-blue-800 hover:to-black duration-300 text-white text-2xl font-[400]">
							<Icon name="material-symbols:download-rounded" />
							<span class="text-lg">Download CV</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
