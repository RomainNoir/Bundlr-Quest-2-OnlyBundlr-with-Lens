/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		fontFamily: {
			main: ["Roboto"],
			logo: ["Source Sans Pro"],
		},
		colors: {
			background: "#D1E5FF",
			primary: "#CC7FE0",
			secondary: "#CC7FE0",
			contast: "#403F3E",
			message: "#f50505",
		},
		extend: {},
	},
	plugins: [],
};
