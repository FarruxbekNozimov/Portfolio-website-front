<script setup></script>

<template>
	<div class="w-full h-full">
		<Header>Contact</Header>
		<form class="w-[70%] mx-auto">
			<form>
				<div class="mb-6">
					<label
						for="email"
						class="block mb-2 text-sm font-medium text-gray-900 text-white"
						>Fullname</label
					>
					<input
						type="text"
						class="border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 outline-none"
						placeholder="Toshmat"
						required />
				</div>
				<div class="mb-6">
					<label
						for="message"
						class="block mb-2 text-sm font-medium text-gray-900 text-white"
						>Your message</label
					>
					<textarea
						id="message"
						rows="4"
						class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 outline-none"
						placeholder="Leave a comment..."></textarea>
				</div>
				<button
					type="submit"
					class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
					SEND
				</button>
			</form>
		</form>
	</div>
</template>
