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
		text: "Make service through which storage resources are providing to an individual",
	},
];
</script>

<template>
	<div>
		<TitleBar title="About me" />
		<p class="font-sans font-[400]">
			Hello there! I'm thrilled to welcome you to my portfolio. I am a
			passionate and versatile full-stack developer with a keen interest in
			exploring the latest cutting-edge technologies. My journey in the world of
			web development has been nothing short of exhilarating, and I constantly
			strive to enhance my skills and embrace emerging trends in the industry.
		</p>
		<h3 class="py-5 text-2xl font-[500]">What I do !</h3>
		<div class="grid grid-cols-2 gap-5">
			<div
				v-for="el in services"
				class="p-3 rounded-xl shadow-lg bg-yellow-600 h-[105px] hover:shadow-xl hover:scale-105 duration-300">
				<div class="flex items-center gap-3">
					<Icon :name="el.icon" class="text-purple-800 text-2xl" />
					<h3 class="text-lg">{{ el.name }}</h3>
				</div>
				<p class="pt-2 text-sm">{{ el.text }}</p>
			</div>
		</div>
	</div>
</template>
