<script setup>
const services = [
	{
		icon: "carbon:ibm-cloud-direct-link-1-dedicated-hosting",
		name: "Web Application",
		text: "Creating web applications using modern technologies for enhanced user experience.",
	},
	{
		icon: "ic:baseline-miscellaneous-services",
		name: "Build websites",
		text: "Building backend side of applications and their architecture",
	},
	{
		icon: "mdi:responsive",
		name: "Responsive design",
		text: "Creating responsive web design application and templates",
	},
	{
		icon: "mdi:database-check-outline",
		name: "Build database",
		text: "Build organized collection of structured information for application",
	},
	{
		icon: "simple-icons:civicrm",
		name: "CRM developing",
		text: "Make business strategy that involves collecting and analyzing customer data",
	},
	{
		icon: "carbon:ibm-cloud-direct-link-1-dedicated-hosting",
		name: "Hosting Websites",
		text: "Make service through which storage and computing resources are providing to an individual",
	},
];
</script>

<template>
	<div class="w-full h-full mb-10">
		<Header>Services</Header>
		<div class="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
			<div
				v-for="service in services"
				class="max-w-sm p-2 border rounded-lg shadow bg-gray-800 border-cyan-700 text-center">
				<Icon class="text-7xl text-cyan-500 my-3" :name="service.icon" />
				<a href="#">
					<h5 class="mb-2 text-2xl font-semibold tracking-tight text-white">
						{{ service.name }}
					</h5>
				</a>
				<p class="mb-3 font-normal text-gray-400">
					{{ service.text }}
				</p>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
