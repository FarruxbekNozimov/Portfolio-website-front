// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	modules: ["@nuxtjs/tailwindcss", "nuxt-icon"],
	app: {
		head: {
			title: "Farruxbek | Portfolio",
			link: [
				{
					rel: "stylesheet",
					href: "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css",
				},
				{
					rel: "icon",
					href: "/Logo.png",
				},
			],
			meta: [
				{
					name: "description",
					content: "Farruxbek Developer Portfolio Website.",
				},
				{ name: "author", content: "FarruxDEV" },
			],
		},
	},
});
