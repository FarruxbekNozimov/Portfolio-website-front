// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@nuxtjs/google-fonts"],
	app: {
		head: {
			title: "Farruxbek | Portfolio",
			link: [
				{
					rel: "icon",
					href: "/icon.png",
				},
				{
					rel: "preconnect",
					href: "https://fonts.googleapis.com",
				},
				{
					rel: "preconnect",
					href: "https://fonts.gstatic.com",
				},
				{
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;700&display=swap",
				},
				{
					rel: "stylesheet",
					href: "/css/style.css",
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
