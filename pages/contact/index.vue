<script setup></script>

<template>
	<div class="w-full h-full">
		<TitleBar title="Contact" />
		<form class="space-y-3">
			<div class="">
				<label for="" class="text-lg font-[500]">Name</label>
				<input
					type="text"
					class="shadow-xl placeholder-gray-600 border border-yellow-700 bg-inherit w-full h-12 px-2 outline-none rounded-lg focus:ring focus:ring-yellow-600"
					placeholder="Enter name" />
			</div>
			<div class="">
				<label for="" class="text-lg font-[500]">Email</label>
				<input
					type="text"
					class="shadow-xl placeholder-gray-600 border border-yellow-700 bg-inherit w-full h-12 px-2 outline-none rounded-lg focus:ring focus:ring-yellow-600"
					placeholder="Enter email" />
			</div>
			<div class="">
				<label for="" class="text-lg font-[500]">Message</label>
				<textarea
					type="text"
					class="shadow-xl placeholder-gray-600 border border-yellow-700 bg-inherit w-full h-40 px-2 py-3 outline-none rounded-lg focus:ring focus:ring-yellow-600"
					placeholder="Write your message" />
			</div>
			<button
				class="bg-black/50 border border-black hover:bg-black/80 w-full p-2 rounded-xl text-white text-lg duration-300 shadow-xl">
				SEND
			</button>
		</form>
	</div>
</template>
