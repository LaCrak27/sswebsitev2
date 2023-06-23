const colors = require("tailwindcss/colors");
module.exports = {
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./nuxt.config.{js,ts}",
		"./content/**/*.{md,yml,json,yaml,toml,csv}",
		"./app.vue",
	],
	darkMode: "class",
	theme: {
		extend: {
		typography: ({ theme }) => ({
			white: {
			  css: {
				'--tw-prose-body': theme('colors.gray[100]'),
				'--tw-prose-bold': theme('colors.gray[400]'),
				'--tw-prose-headings': theme('colors.gray[400]'),
			  },
			},
		  }),
			textColor: {
				'normal': '#FFFFFF',
			},
			colors: {
				primary: {
					DEFAULT: colors.blue[500],
					...colors.blue,
				},
			},
			fontFamily: {
				sans: ["Inter"],
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};