<script setup></script>

<template>
	<div class="font-['Fira_code'] overflow-y-auto h-screen">
		<Container>
			<Header />
			<div class="gap-5 flex">
				<AboutCard />
				<div class="w-full">
					<Navbar />
					<div
						class="rounded-xl h-[540px] shadow-xl bg-yellow-500 w-full p-10 px-10 overflow-y-auto relative">
						<router-view />
					</div>
				</div>
			</div>
		</Container>
	</div>
</template>

<style scoped>
.router-link-exact-active {
	border-bottom: 2px solid rgb(6 182 212);
	border-radius: 10px 10px 5px 5px;
}

.header {
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(4.7px);
	-webkit-backdrop-filter: blur(4.7px);
}
</style>
